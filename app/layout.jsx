import './globals.css';
import Script from 'next/script';
import SiteProfileRuntime from '../src/components/SiteProfileRuntime';
import HeroMotionRuntime from '../src/components/HeroMotionRuntime';
import { Footer, Header, Overlays } from '../src/generated-site';



export const metadata = {
  title: 'Ubhi.in | Yoga, Art & Slow Ritual - London',
  description:
    'A handmade world of intimate yoga and art workshops, a monthly Snail Mail Club, an art shop, and a journal by Chelsea Kaur Ubhi.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Cache-Control" content="no-cache, must-revalidate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ece0c2" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ubhi.in/" />
        <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/assets/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Gochi+Hand&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css?v=1.7.0" />
        <link rel="stylesheet" href="/world.css?v=1.7.0" />
        <link rel="stylesheet" href="/artwork.css?v=1.7.0" />
        <link rel="stylesheet" href="/embellish.css?v=1.7.0" />
      </head>
      <body suppressHydrationWarning>
        <SiteProfileRuntime />
        <HeroMotionRuntime />
        <a href="#app" className="skip-link">Skip to content</a>
        <Header />
        <main id="app" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Overlays />
        {/* Inline: immediately activate the current page before CSS hides it */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var m={'/':\'page-home\','/about':\'page-about\','/workshops':\'page-workshops\','/shop':\'page-shop\','/snail-mail':\'page-snail-mail\','/art':\'page-art\','/journal':\'page-journal\','/admin':\'page-admin\','/account':\'page-account\','/contact':\'page-contact\','/faq':\'page-faq\','/shipping':\'page-shipping\','/refunds':\'page-refunds\','/privacy':\'page-privacy\','/cookies':\'page-cookies\','/terms':\'page-terms\'};var p=location.pathname.replace(/\\/$/,'')||'/';var id=m[p];if(id){var el=document.getElementById(id);if(el){el.classList.add('is-active');}}})();` }} />


        <Script src="/script.js?v=1.7.0" strategy="afterInteractive" />
        <Script src="/world.js?v=1.7.0" strategy="afterInteractive" />
        <Script src="/artwork.js?v=1.7.0" strategy="afterInteractive" />
        <Script src="/updates.js?v=1.7.0" strategy="afterInteractive" />
        <Script src="/ubhi-sync.js?v=1.7.0" strategy="afterInteractive" />
        <Script src="/api-bridge.js" strategy="afterInteractive" />
        <Script src="/editmode.js?v=1.7.0" strategy="afterInteractive" />
        <Script src="/embellish.js?v=1.7.0" strategy="afterInteractive" />
      </body>
    </html>
  );
}
