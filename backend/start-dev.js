'use strict';

const http = require('http');
const { execFileSync } = require('child_process');
const config = require('./config');
const { start } = require('./server');

function checkHealth(port) {
  return new Promise((resolve) => {
    const req = http.get(
      {
        hostname: '127.0.0.1',
        port,
        path: '/api/health',
        timeout: 1500,
      },
      (res) => {
        let body = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          body += chunk;
        });
        res.on('end', () => {
          if (res.statusCode !== 200) {
            resolve({ ok: false, statusCode: res.statusCode, body });
            return;
          }
          try {
            resolve({ ok: true, data: JSON.parse(body) });
          } catch (error) {
            resolve({ ok: false, statusCode: res.statusCode, body });
          }
        });
      }
    );

    req.on('error', () => resolve({ ok: false }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ ok: false });
    });
  });
}

function detectPortOwner(port) {
  try {
    const command = [
      '$conn = Get-NetTCPConnection -LocalPort ' + port + ' -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1 OwningProcess;',
      'if (-not $conn) { exit 0 }',
      '$proc = Get-CimInstance Win32_Process -Filter ("ProcessId=" + $conn.OwningProcess);',
      'if ($proc) { $proc.CommandLine }',
    ].join(' ');
    return execFileSync(
      'powershell.exe',
      ['-NoProfile', '-Command', command],
      { encoding: 'utf8' }
    ).trim();
  } catch (error) {
    return '';
  }
}

async function main() {
  const existing = await checkHealth(config.PORT);
  if (existing.ok) {
    // eslint-disable-next-line no-console
    console.log(
      `[server] Ubhi backend already running on http://localhost:${config.PORT} ` +
        `(store: ${existing.data && existing.data.store ? existing.data.store : 'unknown'})`
    );
    return;
  }

  try {
    await start();
  } catch (error) {
    if (error && error.code === 'EADDRINUSE') {
      const retry = await checkHealth(config.PORT);
      if (retry.ok) {
        // eslint-disable-next-line no-console
        console.log(
          `[server] Ubhi backend already running on http://localhost:${config.PORT} ` +
            `(store: ${retry.data && retry.data.store ? retry.data.store : 'unknown'})`
        );
        return;
      }
      const owner = detectPortOwner(config.PORT);
      if (owner && owner.includes('backend/server.js')) {
        // eslint-disable-next-line no-console
        console.log(
          `[server] Reusing existing Ubhi backend on http://localhost:${config.PORT}`
        );
        return;
      }
    }
    throw error;
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('[server] failed to start:', err);
  process.exit(1);
});
