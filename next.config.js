module.exports = () => ({
  reactStrictMode: true,
  // Keep development and production artifacts separate so `next build`
  // does not wipe the folder a running `next dev` server is using.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' data: https://fonts.gstatic.com; frame-src 'self' https://js.stripe.com https://hooks.stripe.com;"
          }
        ]
      }
    ];
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Use in-memory caching during development to avoid corrupted
      // `.next-dev/cache/webpack/*.pack.gz` files on this Windows workspace.
      config.cache = {
        type: 'memory',
      };
    }

    return config;
  },
});
