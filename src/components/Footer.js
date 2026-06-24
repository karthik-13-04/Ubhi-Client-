'use client';

import Image from 'next/image';
import Link from 'next/link';
import SacredGeometry from './SacredGeometry';

function FooterSocial() {
  return (
    <div className="footer-social">
      <a
        href="https://instagram.com/ubhi.in"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="soc-ig"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      </a>
      <a
        href="https://in.pinterest.com/chelseaubhi/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pinterest"
        className="soc-pin"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-3.6 19.3c-.08-.8-.15-2 .04-2.9l1.15-4.9s-.3-.6-.3-1.4c0-1.3.77-2.3 1.72-2.3.8 0 1.2.6 1.2 1.34 0 .8-.52 2.04-.8 3.18-.22.95.48 1.73 1.42 1.73 1.7 0 3-1.8 3-4.4 0-2.3-1.65-3.9-4-3.9-2.73 0-4.33 2.04-4.33 4.15 0 .82.32 1.7.72 2.18a.3.3 0 0 1 .06.28l-.28 1.13c-.04.18-.15.22-.34.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.97-.53-2.29-1.15l-.62 2.37c-.22.87-.83 1.96-1.24 2.62A10 10 0 1 0 12 2z" fill="currentColor" />
        </svg>
      </a>
      <a href="mailto:hello@ubhi.in" aria-label="Email" className="soc-mail">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="m4.5 7 7.5 6 7.5-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Image src="/ubhi-logo-transparent.png" alt="Ubhi" width={96} height={54} />
        <p>Magic &amp; Ritual for the everyday.</p>
        <FooterSocial />
      </div>

      <nav aria-label="Footer">
        <Link href="/">Home</Link>
        <Link href="/workshops">Workshops</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/snail-mail">Snail Mail</Link>
        <Link href="/art">Art</Link>
        <Link href="/journal">Journal</Link>
        <Link href="/about">About</Link>
        <Link href="/account">Account</Link>
      </nav>

      <div className="footer-geo" aria-hidden="true">
        <SacredGeometry type="hero-geo" className="footer-geo" />
      </div>
    </footer>
  );
}
