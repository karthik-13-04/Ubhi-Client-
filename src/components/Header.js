'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/workshops', label: 'Workshops' },
  { href: '/shop', label: 'Shop' },
  { href: '/snail-mail', label: 'Snail Mail' },
  { href: '/art', label: 'Art' },
  { href: '/journal', label: 'Journal' },
  { href: '/about', label: 'About' },
];

function SocialIcons({ className = '' }) {
  return (
    <div className={className}>
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
      <a
        href="mailto:hello@ubhi.in"
        aria-label="Email"
        className="soc-mail"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="m4.5 7 7.5 6 7.5-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <Link href="/" className="brand" aria-label="Ubhi home" onClick={() => setMenuOpen(false)}>
        <Image src="/ubhi-logo-transparent.png" alt="Ubhi" width={98} height={56} priority />
      </Link>

      <ul className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link href={item.href} className={isActive ? 'is-active' : ''} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          );
        })}
        <li className="nav-mobile-only">
          <Link href="/account" className="nav-account" onClick={() => setMenuOpen(false)}>
            Sign in
          </Link>
        </li>
        <li className="nav-mobile-only nav-social">
          <SocialIcons />
        </li>
      </ul>

      <div className="header-right">
        <SocialIcons className="header-social" />
        <Link href="/account" className="nav-account" aria-label="Account sign in">
          <svg className="nav-account-ico" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <path d="M20 21a8 8 0 1 0-16 0" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          <span>Sign in</span>
        </Link>
        <Link href="/workshops" className="nav-cta" onClick={() => setMenuOpen(false)}>
          Reserve a space
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nt-open">Menu</span>
          <span className="nt-close">Close</span>
        </button>
      </div>
    </header>
  );
}
