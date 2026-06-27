export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src="/assets/ubhi-logo-transparent.png" alt="Ubhi" />
        <p data-site="tagline">
          Look within to ascend.
        </p>
        <div className="footer-sign">
          <span className="wax wax-gold" aria-hidden="true">
            ਉ
          </span>
          <p className="footer-colophon">
            By Chelsea Kaur Ubhi — Thank you for wandering
            <br />
            through this little world, with love&nbsp;
            <span className="colophon-heart" aria-hidden="true">
              <svg viewBox="0 0 40 36">
                <path d="M20 32 C6 22 4 12 12 8 C17 5 20 11 20 13 C20 11 23 5 28 8 C36 12 34 22 20 32Z" />
              </svg>
            </span>
          </p>
        </div>
        <div className="footer-social" aria-label="Find us">
          <a className="soc-ig" href="https://instagram.com/ubhi.in" target="_blank" rel="noopener noreferrer" aria-label="Ubhi on Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a className="soc-pin" href="https://in.pinterest.com/chelseaubhi/" target="_blank" rel="noopener noreferrer" aria-label="Ubhi on Pinterest">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-3.6 19.3c-.08-.8-.15-2 .04-2.9l1.15-4.9s-.3-.6-.3-1.4c0-1.3.77-2.3 1.72-2.3.8 0 1.2.6 1.2 1.34 0 .8-.52 2.04-.8 3.18-.22.95.48 1.73 1.42 1.73 1.7 0 3-1.8 3-4.4 0-2.3-1.65-3.9-4-3.9-2.73 0-4.33 2.04-4.33 4.15 0 .82.32 1.7.72 2.18a.3.3 0 0 1 .06.28l-.28 1.13c-.04.18-.15.22-.34.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.97-.53-2.29-1.15l-.62 2.37c-.22.87-.83 1.96-1.24 2.62A10 10 0 1 0 12 2z" />
            </svg>
          </a>
          <a className="soc-mail" href="mailto:hello@ubhi.in" aria-label="Email Ubhi">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3.5 7l8.5 6 8.5-6" />
            </svg>
          </a>
        </div>
      </div>
      <nav aria-label="Footer navigation">
        <a href="/#home" data-page-link="home">
          Home
        </a>
        <a href="/snail-mail#snail-mail" data-page-link="snail-mail">
          Snail Mail
        </a>
        <a href="/art#art" data-page-link="art">
          Art Portfolio
        </a>
        <a href="/shop#shop" data-page-link="shop">
          Shop
        </a>
        <a href="/workshops#workshops" data-page-link="workshops">
          Workshops
        </a>
        <a href="/journal#journal" data-page-link="journal">
          Journal
        </a>
        <a href="/about#about" data-page-link="about">
          About
        </a>
        <a href="/account#account" data-page-link="account">
          Your Account
        </a>
        <a href="/contact#contact" data-page-link="contact">
          Contact
        </a>
        <a href="/faq#faq" data-page-link="faq">
          FAQ
        </a>
        <a href="mailto:hello@ubhi.in">
          hello@ubhi.in
        </a>
      </nav>
      <nav className="footer-legal" aria-label="Legal">
        <a href="/shipping#shipping" data-page-link="shipping">
          Shipping
        </a>
        <a href="/refunds#refunds" data-page-link="refunds">
          Returns &amp; Refunds
        </a>
        <a href="/terms#terms" data-page-link="terms">
          Terms
        </a>
        <a href="/privacy#privacy" data-page-link="privacy">
          Privacy
        </a>
        <a href="/cookies#cookies" data-page-link="cookies">
          Cookies
        </a>
        <span className="footer-copy">
          © 2026 Ubhi · London, UK
        </span>
      </nav>
      <div className="footer-geo" aria-hidden="true">
        <svg viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="56" stroke="rgba(201,151,42,0.18)" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="38" stroke="rgba(201,151,42,0.12)" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="20" stroke="rgba(201,151,42,0.18)" strokeWidth="0.5" />
          <polygon points="60,10 105,85 15,85" stroke="rgba(201,151,42,0.22)" strokeWidth="0.5" fill="none" />
          <polygon points="60,110 105,35 15,35" stroke="rgba(181,96,122,0.18)" strokeWidth="0.5" fill="none" />
        </svg>
      </div>
    </footer>
  );
}
