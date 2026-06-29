import { ArtPortfolioList } from '../components/ClientLists';

export default function PageArt() {
  return (
    <div id="page-art" className="page is-active">
      <div className="page-hero">
        <div className="page-hero-geo" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="196" stroke="rgba(201,151,42,0.28)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="150" stroke="rgba(181,96,122,0.18)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="100" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="50" stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" />
            <line x1="200" y1="4" x2="200" y2="396" stroke="rgba(201,151,42,0.15)" strokeWidth="0.4" />
            <line x1="4" y1="200" x2="396" y2="200" stroke="rgba(201,151,42,0.15)" strokeWidth="0.4" />
            <polygon points="200,44 352,296 48,296" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" fill="none" />
            <polygon points="200,356 48,104 352,104" stroke="rgba(181,96,122,0.16)" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
        <div className="page-hero-content">
          <p className="eyebrow" data-site="art-eyebrow">
            original handmade artwork
          </p>
          <h1 data-site="art-title">
            Art Portfolio
          </h1>
          <div className="art-ticker" aria-hidden="true">
            <div className="art-ticker-track">
              <span>
                Block prints
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Hand-pulled ink
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Original artwork
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Slow-made by hand
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Paper &amp; pigment
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Sacred geometry
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                One of a kind
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Pressed by hand
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
            </div>
            <div className="art-ticker-track">
              <span>
                Block prints
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Hand-pulled ink
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Original artwork
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Slow-made by hand
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Paper &amp; pigment
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Sacred geometry
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                One of a kind
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Pressed by hand
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="art-portfolio-section section-pad">
        <div className="section-heading reveal">
          <h2 className="art-portfolio-sub" data-site="art-sub">
            A gathering of recent work
          </h2>
          <p className="art-portfolio-note" data-site="art-note">
            Pieces are added as they leave the studio. To enquire about a work or a commission, 
            <a href="/contact#contact" data-page-link="contact">
              get in touch
            </a>
            .
          </p>
        </div>
        <div className="art-portfolio-grid" id="art-portfolio-container">
          <ArtPortfolioList />
        </div>
      </section>
    </div>
  );
}
