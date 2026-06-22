import './globals.css';
import { loadSiteAssetMap, resolveSiteAsset } from '../src/features/site/server/site-assets';
import Link from 'next/link';
import { siteGlobalStyles } from '../src/features/site/styles/site-styles';
import SiteRuntimeScripts from '../src/features/site/components/SiteRuntimeScripts';
import AdminApp from '../src/features/site/components/admin/AdminApp';
import SiteProfileAdminEnhancer from '../src/features/site/components/SiteProfileAdminEnhancer';

export const metadata = {
  title: 'Ubhi.in | Yoga, Art & Slow Ritual - London',
  description: 'A handmade world of intimate yoga and art workshops, a monthly Snail Mail Club, an art shop, and a journal by Chelsea Kaur Ubhi.',
  metadataBase: new URL('https://ubhi.in'),
};

export default async function RootLayout({ children }) {
  const assetMap = await loadSiteAssetMap();
  const faviconUrl = resolveSiteAsset('/assets/favicon.svg', assetMap);
  const asset = (src) => resolveSiteAsset(src, assetMap);

  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, must-revalidate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ece0c2" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href={faviconUrl} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={faviconUrl} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Gochi+Hand&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: siteGlobalStyles }} />
      </head>
      <body>
        <header className="site-header" data-header>
          <Link className="brand" href="/" aria-label="Ubhi home">
            <img src={asset("/assets/ubhi-logo-transparent.png")} alt="Ubhi" />
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            <Link href="/" data-page="home">Home</Link>
            <Link href="/workshops" data-page="workshops">Workshops</Link>
            <Link href="/shop" data-page="shop">Shop</Link>
            <Link href="/snail-mail" data-page="snail-mail">Snail Mail</Link>
            <Link href="/journal" data-page="journal">Art &amp; Journal</Link>
            <Link href="/about" data-page="about">About</Link>
            <Link href="/account" className="nav-mobile-only" data-page-link="account">Sign in</Link>
            <div className="nav-social" aria-label="Find us">
              <a className="soc-ig" href="https://instagram.com/ubhi.in" target="_blank" rel="noopener noreferrer" aria-label="Ubhi on Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" /></svg></a>
              <a className="soc-pin" href="https://in.pinterest.com/chelseaubhi/" target="_blank" rel="noopener noreferrer" aria-label="Ubhi on Pinterest"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.08-.8-.15-2 .04-2.9l1.15-4.9s-.3-.6-.3-1.4c0-1.3.77-2.3 1.72-2.3.8 0 1.2.6 1.2 1.34 0 .8-.52 2.04-.8 3.18-.22.95.48 1.73 1.42 1.73 1.7 0 3-1.8 3-4.4 0-2.3-1.65-3.9-4-3.9-2.73 0-4.33 2.04-4.33 4.15 0 .82.32 1.7.72 2.18a.3.3 0 0 1 .06.28l-.28 1.13c-.04.18-.15.22-.34.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.97-.53-2.29-1.15l-.62 2.37c-.22.87-.83 1.96-1.24 2.62A10 10 0 1 0 12 2z" /></svg></a>
              <a className="soc-mail" href="mailto:hello@ubhi.in" aria-label="Email Ubhi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 7l8.5 6 8.5-6" /></svg></a>
            </div>
          </nav>
          <div className="header-right">
            <div className="header-social" aria-label="Find us">
              <a className="soc-ig" href="https://instagram.com/ubhi.in" target="_blank" rel="noopener noreferrer" aria-label="Ubhi on Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" /></svg></a>
              <a className="soc-pin" href="https://in.pinterest.com/chelseaubhi/" target="_blank" rel="noopener noreferrer" aria-label="Ubhi on Pinterest"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.08-.8-.15-2 .04-2.9l1.15-4.9s-.3-.6-.3-1.4c0-1.3.77-2.3 1.72-2.3.8 0 1.2.6 1.2 1.34 0 .8-.52 2.04-.8 3.18-.22.95.48 1.73 1.42 1.73 1.7 0 3-1.8 3-4.4 0-2.3-1.65-3.9-4-3.9-2.73 0-4.33 2.04-4.33 4.15 0 .82.32 1.7.72 2.18a.3.3 0 0 1 .06.28l-.28 1.13c-.04.18-.15.22-.34.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.97-.53-2.29-1.15l-.62 2.37c-.22.87-.83 1.96-1.24 2.62A10 10 0 1 0 12 2z" /></svg></a>
            </div>
            <Link className="nav-account" href="/account" aria-label="Sign in to your account">
              <svg className="nav-account-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="8" r="3.3" /><path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" /></svg>
              <span>Sign in</span>
            </Link>
            <Link className="nav-cta" href="/workshops">Reserve a space</Link>
            <button className="nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false" data-nav-toggle>
              <span className="nt-label nt-open">Menu</span>
              <span className="nt-label nt-close">Close</span>
            </button>
          </div>
        </header>
        <main id="app" tabIndex={-1}>
          {children}
        </main>
        <AdminApp />
        <SiteProfileAdminEnhancer />
        <SiteRuntimeScripts />
      </body>
    </html>
  );
}
