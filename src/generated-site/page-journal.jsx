import { JournalList } from '../components/ClientLists';
export default function PageJournal() {
  return (
    <div id="page-journal" className="page is-active">
      <div className="page-hero">
        <div className="page-hero-geo" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="196" stroke="rgba(181,96,122,0.28)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="150" stroke="rgba(201,151,42,0.18)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="100" stroke="rgba(181,96,122,0.2)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="50" stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" />
            <line x1="200" y1="4" x2="200" y2="396" stroke="rgba(181,96,122,0.15)" strokeWidth="0.4" />
            <line x1="4" y1="200" x2="396" y2="200" stroke="rgba(181,96,122,0.15)" strokeWidth="0.4" />
            <line x1="56" y1="56" x2="344" y2="344" stroke="rgba(181,96,122,0.12)" strokeWidth="0.4" />
            <line x1="344" y1="56" x2="56" y2="344" stroke="rgba(181,96,122,0.12)" strokeWidth="0.4" />
          </svg>
        </div>
        <div className="page-hero-content">
          <p className="eyebrow">
            slow reading &amp; making
          </p>
          <h1>
            Art &amp; Journal
            <span className="journal-hero-ornament" aria-hidden="true">
              <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="30" r="24" stroke="rgba(201, 151, 42, 0.18)" strokeWidth="0.5" strokeDasharray="2 2" />
                <circle cx="50" cy="30" r="14" stroke="rgba(201, 151, 42, 0.12)" strokeWidth="0.5" />
                <path d="M50,42 Q40,36 20,38 L20,16 Q40,14 50,22 Q60,14 80,16 L80,38 Q60,36 50,42 Z" stroke="rgba(201, 151, 42, 0.45)" strokeWidth="0.8" fill="rgba(201, 151, 42, 0.02)" />
                <path d="M50,22 L50,42" stroke="rgba(201, 151, 42, 0.45)" strokeWidth="0.8" />
                <path d="M56,12 L38,36" stroke="rgba(45, 139, 124, 0.45)" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M38,36 L36,39 L39,37 Z" fill="rgba(45, 139, 124, 0.6)" stroke="rgba(45, 139, 124, 0.45)" strokeWidth="0.5" />
                <path d="M26,10 L27,12 L29,13 L27,14 L26,16 L25,14 L23,13 L25,12 Z" fill="rgba(201, 151, 42, 0.35)" />
                <path d="M74,10 L75,12 L77,13 L75,14 L74,16 L73,14 L71,13 L73,12 Z" fill="rgba(201, 151, 42, 0.35)" />
                <path d="M 46 8 A 6 6 0 0 0 52 14 A 5.2 5.2 0 0 1 46 8" fill="rgba(201, 151, 42, 0.3)" stroke="rgba(201, 151, 42, 0.4)" strokeWidth="0.5" />
              </svg>
            </span>
          </h1>
          <div className="journal-ticker" aria-hidden="true">
            <div className="journal-ticker-track">
              <span>
                Ideas explored slowly
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                On AUM &amp; Resonance
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
                Conscious breath
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Philosophy of craft
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Making things with your hands
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
            </div>
            <div className="journal-ticker-track">
              <span>
                Ideas explored slowly
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                On AUM &amp; Resonance
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
                Conscious breath
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Philosophy of craft
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Making things with your hands
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
      <section className="journal-section section-pad">
        <div className="section-heading reveal">
          <h2 className="journal-sub-author">
            Words &amp; handmade art, by Chelsea Kaur Ubhi
          </h2>
        </div>
        <div className="journal-viewport-container">
          <div className="journal-grid" id="journal-posts-container">
          <JournalList />
        </div>
        </div>
      </section>
      <section className="subscribe-section section-pad" aria-label="Subscribe to the Journal">
        <div className="subscribe-card reveal">
          <span className="subscribe-deco subscribe-sprig" aria-hidden="true">
            <svg viewBox="0 0 80 200">
              <use href="#art-eucalyptus" />
            </svg>
          </span>
          <div className="subscribe-text">
            <p className="eyebrow">
              Letters from the desk
            </p>
            <h2>
              Never miss a new piece
            </h2>
            <p className="subscribe-copy">
              A quiet note whenever a new essay or artwork is posted — slow reading, straight to your inbox. No noise, no spam.
            </p>
          </div>
          <div className="subscribe-action">
            <form id="journal-updates-form" className="subscribe-form" noValidate>
              <input type="email" id="journal-updates-email" className="subscribe-input" placeholder="you@example.com" autoComplete="email" required aria-label="Your email" />
              <button type="submit" className="button button-primary subscribe-btn">
                Keep me posted
              </button>
            </form>
            <p className="subscribe-msg" id="journal-updates-msg" role="status" aria-live="polite"></p>
          </div>
        </div>
      </section>
    </div>
  );
}
