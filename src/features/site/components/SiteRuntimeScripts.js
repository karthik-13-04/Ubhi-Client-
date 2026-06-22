'use client';

import { useEffect } from 'react';
import {
  legacyArtworkSource,
  legacyScriptSource,
  legacyUpdatesSource,
  legacyWorldSource,
} from '../runtime/scripts';

function injectInlineScript(id, source) {
  if (document.getElementById(id)) return;

  const script = document.createElement('script');
  script.id = id;
  script.type = 'text/javascript';
  script.text = source;
  document.body.appendChild(script);
}

export default function SiteRuntimeScripts() {
  useEffect(() => {
    window.UBHI_API_BASE = '';

    if (window.__ubhiLegacyScriptsLoaded) return;

    injectInlineScript('ubhi-legacy-script-core', legacyScriptSource);
    injectInlineScript('ubhi-legacy-script-world', legacyWorldSource);
    injectInlineScript('ubhi-legacy-script-artwork', legacyArtworkSource);
    injectInlineScript('ubhi-legacy-script-updates', legacyUpdatesSource);

    window.__ubhiLegacyScriptsLoaded = true;
  }, []);

  return null;
}
