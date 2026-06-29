import { WorkshopsList, JournalList } from '../components/ClientLists';
export default function PageHome() {
  return (
    <>
    <div id="page-home" className="page is-active">
      <section className="hero" aria-label="Ubhi workshops in London">
        <canvas className="particles-canvas" id="particles" aria-hidden="true"></canvas>
        <div className="hero-art-rotator" aria-hidden="true">
          <img className="hero-art-slide is-active" src="assets/ubhi-workshop-generated.png" alt="" fetchPriority="high" decoding="async" />
          <img className="hero-art-slide" src="assets/gallery-geometry-draw.png" alt="" loading="lazy" decoding="async" />
          <img className="hero-art-slide" src="assets/gallery-yoga-breath.png" alt="" loading="lazy" decoding="async" />
          <img className="hero-art-slide" src="assets/gallery-block-print.png" alt="" loading="lazy" decoding="async" />
          <img className="hero-art-slide" src="assets/ubhi-snail-mail-generated.png" alt="" loading="lazy" decoding="async" />
        </div>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-ephemera" aria-hidden="true">
          <svg className="ephemera he-fern doodle sage draw" data-depth="12" viewBox="0 0 130 210" fill="none">
            <path d="M62 204 C56 150 68 96 98 34" />
            <path d="M60 190 C48 188 40 192 32 198" />
            <path d="M60 190 C72 188 80 192 88 198" />
            <path d="M62 170 C50 169 43 173 36 180" />
            <path d="M62 170 C74 169 81 173 88 180" />
            <path d="M66 150 C55 149 49 153 43 160" />
            <path d="M66 150 C77 149 83 153 89 160" />
            <path d="M72 128 C62 127 57 131 52 138" />
            <path d="M72 128 C82 127 87 131 92 138" />
            <path d="M80 106 C71 105 67 109 63 115" />
            <path d="M80 106 C89 105 93 109 97 115" />
            <path d="M88 84 C81 83 78 87 75 92" />
            <path d="M88 84 C95 83 98 87 101 92" />
            <path d="M94 62 C89 61 87 64 85 68" />
            <path d="M94 62 C99 61 101 64 103 68" />
          </svg>
          <p className="ephemera he-note-1 marginalia" data-depth="30">
            look within
            <br />
            to ascend&nbsp;→
          </p>
          <p className="ephemera he-note-2 annotation" data-depth="38">
            breathe here ✦
          </p>
        </div>
        <div className="hero-geo" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="196" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="160" stroke="rgba(201,151,42,0.14)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="120" stroke="rgba(201,151,42,0.10)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="80" stroke="rgba(201,151,42,0.14)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="40" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="8" fill="rgba(201,151,42,0.35)" />
            <line x1="200" y1="4" x2="200" y2="396" stroke="rgba(201,151,42,0.08)" strokeWidth="0.5" />
            <line x1="4" y1="200" x2="396" y2="200" stroke="rgba(201,151,42,0.08)" strokeWidth="0.5" />
            <line x1="56" y1="56" x2="344" y2="344" stroke="rgba(201,151,42,0.06)" strokeWidth="0.5" />
            <line x1="344" y1="56" x2="56" y2="344" stroke="rgba(201,151,42,0.06)" strokeWidth="0.5" />
            <polygon points="200,44 352,296 48,296" stroke="rgba(201,151,42,0.18)" strokeWidth="0.5" fill="none" />
            <polygon points="200,356 48,104 352,104" stroke="rgba(181,96,122,0.15)" strokeWidth="0.5" fill="none" />
            <circle cx="200" cy="120" r="80" stroke="rgba(201,151,42,0.06)" strokeWidth="0.4" />
            <circle cx="269" cy="160" r="80" stroke="rgba(201,151,42,0.06)" strokeWidth="0.4" />
            <circle cx="269" cy="240" r="80" stroke="rgba(201,151,42,0.06)" strokeWidth="0.4" />
            <circle cx="200" cy="280" r="80" stroke="rgba(201,151,42,0.06)" strokeWidth="0.4" />
            <circle cx="131" cy="240" r="80" stroke="rgba(201,151,42,0.06)" strokeWidth="0.4" />
            <circle cx="131" cy="160" r="80" stroke="rgba(201,151,42,0.06)" strokeWidth="0.4" />
          </svg>
        </div>
        <div className="hero-content reveal">
          <p className="eyebrow">
            Chelsea Kaur Ubhi · ਉਭੀ · to ascend
          </p>
          <h1>
            Yoga, Art
            <br />
            &amp; 
            <span className="ink-underline">
              Slow Ritual.
            </span>
          </h1>
          <p className="hero-copy">
            Become aware of our creative spirit. Intimate workshops weaving conscious movement and slow art to quiet the mind, settle the body and breath, and ascend within.
          </p>
          <div className="hero-pathways">
            <a className="pathway-card" href="#snail-mail" data-page-link="snail-mail">
              <svg className="pathway-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" />
                <rect x="25" y="34" width="50" height="32" rx="2" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.04)" />
                <path d="M25 34L50 50L75 34" stroke="var(--aurora-teal)" strokeWidth="0.8" strokeLinejoin="round" />
                <path d="M25 66L43 51" stroke="var(--aurora-teal)" strokeWidth="0.8" />
                <path d="M75 66L57 51" stroke="var(--aurora-teal)" strokeWidth="0.8" />
                <circle cx="50" cy="50" r="4" fill="var(--aurora-gold)" stroke="var(--aurora-teal)" strokeWidth="0.5" />
                <path d="M15 42C18 40 20 44 23 42" stroke="rgba(45,139,124,0.4)" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M13 50C16 48 18 52 21 50" stroke="rgba(45,139,124,0.4)" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M77 42C80 44 82 40 85 42" stroke="rgba(45,139,124,0.4)" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M79 50C82 52 84 48 87 50" stroke="rgba(45,139,124,0.4)" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M50 20L51 22L53 22.5L51 23L50 25L49 23L47 22.5L49 22Z" fill="var(--aurora-gold)" />
              </svg>
              <div className="pathway-body">
                <h3>
                  Snail Mail Club
                </h3>
                <p>
                  A monthly package of art, research letters, and collectibles.
                </p>
              </div>
              <span className="pathway-arrow">
                →
              </span>
            </a>
            <a className="pathway-card" href="#art" data-page-link="art">
              <svg className="pathway-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="rgba(201,151,42,0.18)" strokeWidth="0.5" />
                <rect x="28" y="30" width="44" height="34" rx="2" stroke="var(--aurora-gold)" strokeWidth="0.8" fill="rgba(201,151,42,0.04)" />
                <path d="M32 60L43 47L50 54L60 41L68 60" stroke="var(--aurora-teal)" strokeWidth="0.8" strokeLinejoin="round" />
                <circle cx="40" cy="40" r="3" fill="var(--aurora-gold)" stroke="var(--aurora-teal)" strokeWidth="0.5" />
                <path d="M50 64L50 78" stroke="var(--aurora-rose)" strokeWidth="0.8" />
                <path d="M44 78L50 64L56 78" stroke="var(--aurora-rose)" strokeWidth="0.8" strokeLinejoin="round" />
                <path d="M40 80L60 80" stroke="var(--aurora-rose)" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M50 17L52.5 22.5L58 25L52.5 27.5L50 33L47.5 27.5L42 25L47.5 22.5Z" fill="var(--aurora-gold)" />
              </svg>
              <div className="pathway-body">
                <h3>
                  Art Portfolio
                </h3>
                <p>
                  Original works and process — pieces as they leave the studio.
                </p>
              </div>
              <span className="pathway-arrow">
                →
              </span>
            </a>
            <a className="pathway-card" href="#workshops" data-page-link="workshops">
              <svg className="pathway-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="rgba(201,151,42,0.18)" strokeWidth="0.5" />
                <ellipse cx="50" cy="50" rx="36" ry="13" stroke="var(--aurora-gold)" strokeWidth="0.8" transform="rotate(0 50 50)" />
                <ellipse cx="50" cy="50" rx="36" ry="13" stroke="var(--aurora-rose)" strokeWidth="0.8" transform="rotate(60 50 50)" />
                <ellipse cx="50" cy="50" rx="36" ry="13" stroke="var(--aurora-teal)" strokeWidth="0.8" transform="rotate(120 50 50)" />
                <circle cx="50" cy="50" r="4.5" fill="var(--aurora-gold)" />
              </svg>
              <div className="pathway-body">
                <h3>
                  Workshops
                </h3>
                <p>
                  Intimate gatherings in London combining yoga, movement, and craft.
                </p>
              </div>
              <span className="pathway-arrow">
                →
              </span>
            </a>
            <a className="pathway-card" href="#shop" data-page-link="shop">
              <svg className="pathway-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="rgba(181,96,122,0.18)" strokeWidth="0.5" />
                <rect x="32" y="32" width="36" height="36" rx="2" transform="rotate(45 50 50)" stroke="rgba(181,96,122,0.3)" strokeWidth="0.8" fill="rgba(181,96,122,0.03)" />
                <path d="M 40 42 L 60 42 C 60 48.5 65 52 68 57 C 73 65 70 76 50 76 C 30 76 27 65 32 57 C 35 52 40 48.5 40 42 Z" stroke="var(--aurora-rose)" strokeWidth="0.8" fill="rgba(181,96,122,0.05)" />
                <path d="M 33.5 52 C 27 52 27 62 32 62" stroke="var(--aurora-rose)" strokeWidth="0.7" />
                <path d="M 66.5 52 C 73 52 73 62 68 62" stroke="var(--aurora-rose)" strokeWidth="0.7" />
                <path d="M 50 17 L 52.5 22.5 L 58 25 L 52.5 27.5 L 50 33 L 47.5 27.5 L 42 25 L 47.5 22.5 Z" fill="var(--aurora-gold)" />
              </svg>
              <div className="pathway-body">
                <h3>
                  Soul Shop
                </h3>
                <p>
                  Archival art prints, starter kits, and thoughtful tools.
                </p>
              </div>
              <span className="pathway-arrow">
                →
              </span>
            </a>
          </div>
        </div>
        <div className="mantra-strip" aria-hidden="true">
          <div className="mantra-track">
            <span data-site="tagline">
              Look within to ascend
            </span>
            <span className="ticker-dot">
              ॐ
            </span>
            <span>
              Key to happy life
            </span>
            <span className="ticker-dot">
              ॐ
            </span>
            <span>
              Yoga
            </span>
            <span className="ticker-dot">
              ॐ
            </span>
            <span>
              Meditation
            </span>
            <span className="ticker-dot">
              ॐ
            </span>
            <span>
              Art
            </span>
            <span className="ticker-dot">
              ॐ
            </span>
          </div>
          <div className="mantra-track">
            <span data-site="tagline">
              Look within to ascend
            </span>
            <span className="ticker-dot">
              ॐ
            </span>
            <span>
              Key to happy life
            </span>
            <span className="ticker-dot">
              ॐ
            </span>
            <span>
              Yoga
            </span>
            <span className="ticker-dot">
              ॐ
            </span>
            <span>
              Meditation
            </span>
            <span className="ticker-dot">
              ॐ
            </span>
            <span>
              Art
            </span>
            <span className="ticker-dot">
              ॐ
            </span>
          </div>
        </div>
      </section>
      <section className="intro section-pad">
        <div className="intro-lead reveal">
          <p className="eyebrow" data-site="tagline">
            Look within to ascend
          </p>
          <h2 data-site="home-headline">
            A sanctuary for seekers, makers,
            <br />
            and our body that need to exhale.
          </h2>
        </div>
        <div className="intro-body reveal">
          <div className="intro-copy">
            <p className="hand intro-greeting">
              Dear Friend's
            </p>
            <p>
              Ubhi is Chelsea Kaur Ubhi's living creative practice.
              <br />
              
              It is not a studio chain or a wellness template.
              <br />
              
              It is a place for people who want tangible beauty, grounded knowledge, and real presence of our self.
            </p>
            <p>
              Every gathering begins gently with breath work, body movement and art work with your creativity, You welcome the world with calmer body and relaxed mind and happy creative soul.
            </p>
            <p className="intro-signature">
              Chelsea Ubhi Kaur
              <small>
                Curated with Magic
              </small>
            </p>
          </div>
          <div className="intro-breathing-art" aria-hidden="true">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g className="breath-rings-group">
                <circle cx="100" cy="100" r="90" className="breath-ring ring-1" stroke="rgba(201,151,42,0.12)" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="72" className="breath-ring ring-2" stroke="rgba(181,96,122,0.14)" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="54" className="breath-ring ring-3" stroke="rgba(45,139,124,0.16)" strokeWidth="0.5" />
              </g>
              <circle cx="100" cy="100" r="78" stroke="rgba(255, 248, 230, 0.04)" strokeWidth="0.5" strokeDasharray="2 3" />
              <g className="yantra-group">
                <rect x="55" y="55" width="90" height="90" rx="4" transform="rotate(45 100 100)" stroke="rgba(201,151,42,0.15)" strokeWidth="0.5" />
                <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(201,151,42,0.35)" strokeWidth="0.6" />
                <path d="M60 140 C80 160 120 160 140 140 C125 150 75 150 60 140 Z" stroke="var(--aurora-gold)" strokeWidth="0.8" fill="rgba(201,151,42,0.04)" />
                <g className="breath-geometry">
                  <path d="M100 130 C90 115 100 95 100 95 C100 95 110 115 100 130 Z" stroke="var(--aurora-rose)" strokeWidth="0.8" fill="rgba(181,96,122,0.05)" />
                  <path d="M100 70 C90 85 100 105 100 105 C100 105 110 85 100 70 Z" stroke="var(--aurora-rose)" strokeWidth="0.8" fill="rgba(181,96,122,0.05)" />
                  <path d="M130 100 C115 90 95 100 95 100 C95 100 115 110 130 100 Z" stroke="var(--aurora-rose)" strokeWidth="0.8" fill="rgba(181,96,122,0.05)" />
                  <path d="M70 100 C85 90 105 100 105 100 C105 100 85 110 70 100 Z" stroke="var(--aurora-rose)" strokeWidth="0.8" fill="rgba(181,96,122,0.05)" />
                  <circle cx="100" cy="100" r="30" stroke="rgba(201,151,42,0.25)" strokeWidth="0.6" />
                </g>
                <circle cx="100" cy="100" r="3" fill="var(--aurora-gold)" className="breath-bindu" />
              </g>
              <g className="yantra-orbiters">
                <g className="orbiter-item o-lotus">
                  <path d="M100 22 C98 17 100 13 100 13 C100 13 102 17 100 22 Z" stroke="var(--aurora-rose)" strokeWidth="0.6" fill="rgba(181,96,122,0.1)" />
                  <path d="M100 22 C95 18 95 14 95 14 C95 14 98 19 100 22 Z" stroke="var(--aurora-rose)" strokeWidth="0.6" fill="rgba(181,96,122,0.05)" />
                  <path d="M100 22 C105 18 105 14 105 14 C105 14 102 19 100 22 Z" stroke="var(--aurora-rose)" strokeWidth="0.6" fill="rgba(181,96,122,0.05)" />
                </g>
                <g className="orbiter-item o-moon">
                  <path d="M 165.5 56.5 C 171.5 56.5 171.5 65.5 165.5 65.5 C 169 64 169 58 165.5 56.5 Z" stroke="var(--aurora-gold)" strokeWidth="0.6" fill="rgba(201,151,42,0.12)" />
                </g>
                <g className="orbiter-item o-sparkle">
                  <path d="M167.5 133 L169 137.5 L173.5 139 L169 140.5 L167.5 145 L166 140.5 L161.5 139 L166 137.5 Z" fill="var(--aurora-gold)" />
                </g>
                <g className="orbiter-item o-leaf">
                  <path d="M 100 173 C 95 176 95 180 100 183 C 105 180 105 176 100 173 Z" stroke="var(--aurora-teal)" strokeWidth="0.6" fill="rgba(45,139,124,0.12)" />
                  <path d="M 100 175 L 100 181" stroke="var(--aurora-teal)" strokeWidth="0.5" />
                </g>
                <g className="orbiter-item o-envelope">
                  <rect x="27" y="134" width="11" height="8" rx="0.5" stroke="var(--aurora-teal)" strokeWidth="0.6" fill="rgba(45,139,124,0.05)" />
                  <path d="M27 134 L32.5 138 L38 134" stroke="var(--aurora-teal)" strokeWidth="0.5" />
                </g>
                <g className="orbiter-item o-bowl">
                  <path d="M 28 59.5 L 37 59.5 C 37 63.5 35 65.5 32.5 65.5 C 30 65.5 28 63.5 28 59.5 Z" stroke="var(--aurora-rose)" strokeWidth="0.6" fill="rgba(181,96,122,0.12)" />
                  <path d="M 32.5 57.5 C 32 56 33 55.5 32.5 54" stroke="var(--aurora-rose)" strokeWidth="0.5" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </section>
      <section className="practice-journey section-pad" aria-label="The practice, and where it leads">
        <div className="pj-head reveal">
          <p className="eyebrow">
            The ritual
          </p>
          <h2>
            Four movements, one practice.
          </h2>
        </div>
        <ol className="pj-ritual reveal">
          <li className="pj-step" style={{ "--pc": "#a6741f", "--pcs": "rgba(166,116,31,.14)" }}>
            <span className="pj-step-ic">
              <svg viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" />
                <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1" fill="rgba(166,116,31,0.18)" />
              </svg>
            </span>
            <span className="pj-step-name">
              Arrive
            </span>
            <span className="pj-step-sub">
              Warm welcome, settle in
            </span>
          </li>
          <li className="pj-step" style={{ "--pc": "#a14e5e", "--pcs": "rgba(161,78,94,.14)" }}>
            <span className="pj-step-ic">
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M24 4C14 14 4 20 4 28C4 36 14 44 24 44C34 44 44 36 44 28C44 20 34 14 24 4Z" stroke="currentColor" strokeWidth="1" fill="rgba(161,78,94,0.1)" />
                <line x1="24" y1="12" x2="24" y2="36" stroke="currentColor" strokeWidth="0.8" />
                <line x1="12" y1="24" x2="36" y2="24" stroke="currentColor" strokeWidth="0.8" />
              </svg>
            </span>
            <span className="pj-step-name">
              Move
            </span>
            <span className="pj-step-sub">
              Yoga &amp; breathwork
            </span>
          </li>
          <li className="pj-step" style={{ "--pc": "#4a7060", "--pcs": "rgba(74,112,96,.14)" }}>
            <span className="pj-step-ic">
              <svg viewBox="0 0 48 48" fill="none">
                <polygon points="24,5 43,37 5,37" stroke="currentColor" strokeWidth="1" fill="rgba(74,112,96,0.1)" />
                <polygon points="24,43 5,11 43,11" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </span>
            <span className="pj-step-name">
              Make
            </span>
            <span className="pj-step-sub">
              Print, draw, create
            </span>
          </li>
          <li className="pj-step" style={{ "--pc": "#39496a", "--pcs": "rgba(57,73,106,.14)" }}>
            <span className="pj-step-ic">
              <svg viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="0.8" />
                <path d="M24 5L28 20L43 24L28 28L24 43L20 28L5 24L20 20Z" stroke="currentColor" strokeWidth="1" fill="rgba(57,73,106,0.12)" />
              </svg>
            </span>
            <span className="pj-step-name">
              Carry
            </span>
            <span className="pj-step-sub">
              A ritual to take home
            </span>
          </li>
        </ol>
        <div className="pj-divider reveal" role="presentation">
          <span className="pj-line"></span>
          <h3>
            Where your practice can go
          </h3>
          <span className="pj-line"></span>
        </div>
        <div className="pj-paths reveal">
          <a className="pj-card" href="#snail-mail" data-page-link="snail-mail" style={{ "--pc": "#4a7060", "--pcs": "rgba(74,112,96,.14)" }}>
            <span className="pj-card-ic">
              <svg viewBox="0 0 60 60" fill="none">
                <rect x="16" y="20" width="28" height="20" rx="1.5" stroke="#4a7060" strokeWidth="1" fill="rgba(74,112,96,0.05)" />
                <path d="M16 20 L30 31 L44 20" stroke="#4a7060" strokeWidth="1" />
                <circle cx="30" cy="29" r="2.5" fill="#c2902f" />
              </svg>
            </span>
            <span className="pj-card-eyb">
              Monthly
            </span>
            <h3>
              Snail Mail Club
            </h3>
            <p>
              A letter, print &amp; object, posted monthly.
            </p>
            <span className="pj-card-cta">
              Join &rarr;
            </span>
          </a>
          <a className="pj-card" href="#art" data-page-link="art" style={{ "--pc": "#b5603a", "--pcs": "rgba(181,96,58,.14)" }}>
            <span className="pj-card-ic">
              <svg viewBox="0 0 60 60" fill="none">
                <rect x="15" y="16" width="30" height="28" rx="2" stroke="#b5603a" strokeWidth="1" fill="rgba(181,96,58,0.05)" />
                <circle cx="25" cy="26" r="3.4" stroke="#b5603a" strokeWidth="1" />
                <path d="M18 41 L27 31 L33 37 L42 27 L42 41 Z" stroke="#b5603a" strokeWidth="1" fill="rgba(181,96,58,0.08)" strokeLinejoin="round" />
                <path d="M30 9 L31.2 11.6 L34 12.4 L31.2 13.2 L30 15.8 L28.8 13.2 L26 12.4 L28.8 11.6 Z" fill="#c2902f" />
              </svg>
            </span>
            <span className="pj-card-eyb">
              Gallery
            </span>
            <h3>
              Art Portfolio
            </h3>
            <p>
              Chelsea's original handmade artwork, up close.
            </p>
            <span className="pj-card-cta">
              View &rarr;
            </span>
          </a>
          <a className="pj-card" href="#shop" data-page-link="shop" style={{ "--pc": "#a14e5e", "--pcs": "rgba(161,78,94,.14)" }}>
            <span className="pj-card-ic">
              <svg viewBox="0 0 60 60" fill="none">
                <path d="M 24 25 L 36 25 C 36 28.9 39 31 41 34 C 44 38.8 42 45.4 30 45.4 C 18 45.4 16 38.8 19 34 C 21 31 24 28.9 24 25 Z" stroke="#a14e5e" strokeWidth="1" fill="rgba(161,78,94,0.05)" />
                <path d="M 20.1 31 C 16.2 31 16.2 37 19.2 37" stroke="#a14e5e" strokeWidth="0.8" />
                <path d="M 39.9 31 C 43.8 31 43.8 37 40.8 37" stroke="#a14e5e" strokeWidth="0.8" />
                <path d="M 30 10 L 31.5 13.3 L 34.8 14.8 L 31.5 16.3 L 30 19.6 L 28.5 16.3 L 25.2 14.8 L 28.5 13.3 Z" fill="#c2902f" />
              </svg>
            </span>
            <span className="pj-card-eyb">
              Curated
            </span>
            <h3>
              Soul Shop
            </h3>
            <p>
              Hand-pressed prints &amp; ritual objects.
            </p>
            <span className="pj-card-cta">
              Explore &rarr;
            </span>
          </a>
          <a className="pj-card" href="#workshops" data-page-link="workshops" style={{ "--pc": "#a6741f", "--pcs": "rgba(166,116,31,.14)" }}>
            <span className="pj-card-ic">
              <svg viewBox="0 0 60 60" fill="none">
                <ellipse cx="30" cy="30" rx="22" ry="8" stroke="#a6741f" strokeWidth="1" />
                <ellipse cx="30" cy="30" rx="22" ry="8" stroke="#a14e5e" strokeWidth="1" transform="rotate(60 30 30)" />
                <ellipse cx="30" cy="30" rx="22" ry="8" stroke="#4a7060" strokeWidth="1" transform="rotate(120 30 30)" />
                <circle cx="30" cy="30" r="3" fill="#a6741f" />
              </svg>
            </span>
            <span className="pj-card-eyb">
              Upcoming
            </span>
            <h3>
              Workshops
            </h3>
            <p>
              Yoga, breath &amp; hands-on art days in London.
            </p>
            <span className="pj-card-cta">
              See all &rarr;
            </span>
          </a>
          <a className="pj-card" href="#journal" data-page-link="journal" style={{ "--pc": "#39496a", "--pcs": "rgba(57,73,106,.14)" }}>
            <span className="pj-card-ic">
              <svg viewBox="0 0 60 60" fill="none">
                <path d="M30 44 C25 40 18 40 12 40 L12 18 C18 18 25 18 30 22 C35 18 42 18 48 18 L48 40 C42 40 35 40 30 44 Z" stroke="#39496a" strokeWidth="1" fill="rgba(57,73,106,0.05)" />
                <line x1="30" y1="22" x2="30" y2="44" stroke="#39496a" strokeWidth="1" />
                <path d="M30 16 C28 12 30 8 30 8 C30 8 32 12 30 16 Z" stroke="#a14e5e" strokeWidth="1" />
              </svg>
            </span>
            <span className="pj-card-eyb">
              Reading
            </span>
            <h3>
              Journal
            </h3>
            <p>
              Slow essays &amp; reflections to read.
            </p>
            <span className="pj-card-cta">
              Read &rarr;
            </span>
          </a>
        </div>
      </section>
      <section className="gallery-section" aria-label="Workshops and practices gallery">
        <div className="gallery-container" id="home-gallery-container">
          <div className="gallery-track">
            <div className="gallery-item">
              <img src="assets/gallery-chelsea.png" alt="Chelsea Kaur Ubhi in her studio" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-block-print.png" alt="Slow craft block printing workshop" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-yoga-breath.png" alt="Somatic movement and breathwork practice" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-geometry-draw.png" alt="Sacred geometry drawing session" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-chelsea.png" alt="Chelsea Kaur Ubhi in her studio" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-block-print.png" alt="Slow craft block printing workshop" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-yoga-breath.png" alt="Somatic movement and breathwork practice" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-geometry-draw.png" alt="Sacred geometry drawing session" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-chelsea.png" alt="Chelsea Kaur Ubhi in her studio" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-block-print.png" alt="Slow craft block printing workshop" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-yoga-breath.png" alt="Somatic movement and breathwork practice" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-geometry-draw.png" alt="Sacred geometry drawing session" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
          </div>
          <div className="gallery-track">
            <div className="gallery-item">
              <img src="assets/gallery-chelsea.png" alt="Chelsea Kaur Ubhi in her studio" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-block-print.png" alt="Slow craft block printing workshop" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-yoga-breath.png" alt="Somatic movement and breathwork practice" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-geometry-draw.png" alt="Sacred geometry drawing session" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-chelsea.png" alt="Chelsea Kaur Ubhi in her studio" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-block-print.png" alt="Slow craft block printing workshop" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-yoga-breath.png" alt="Somatic movement and breathwork practice" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-geometry-draw.png" alt="Sacred geometry drawing session" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-chelsea.png" alt="Chelsea Kaur Ubhi in her studio" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-block-print.png" alt="Slow craft block printing workshop" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-yoga-breath.png" alt="Somatic movement and breathwork practice" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="gallery-item">
              <img src="assets/gallery-geometry-draw.png" alt="Sacred geometry drawing session" loading="lazy" />
            </div>
            <div className="gallery-separator" aria-hidden="true">
              <span className="sep-om">
                ॐ
              </span>
              <span className="sep-eye">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                  <circle cx="12" cy="12" r="6" fill="#1f4ba6" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                  <circle cx="10.8" cy="10.8" r="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="subscribe-section section-pad" aria-label="Subscribe for updates">
        <div className="subscribe-card reveal">
          <span className="subscribe-deco subscribe-sprig" aria-hidden="true">
            <svg viewBox="0 0 80 200">
              <use href="#art-eucalyptus" />
            </svg>
          </span>
          <span className="subscribe-deco subscribe-stamp sway" aria-hidden="true">
            <svg viewBox="0 0 120 140">
              <use href="#art-stamp" />
            </svg>
          </span>
          <div className="subscribe-text">
            <p className="eyebrow">
              Don't be a stranger
            </p>
            <h2>
              Word from the studio, now &amp; then
            </h2>
            <p className="subscribe-copy">
              New workshops, fresh shop pieces and the occasional letter — slipped quietly into your inbox. No noise, no spam. Just news worth opening.
            </p>
          </div>
          <div className="subscribe-action">
            <form id="updates-form" className="subscribe-form" noValidate>
              <input type="text" id="updates-name" className="subscribe-input" placeholder="Your name" autoComplete="name" aria-label="Your name" required />
              <input type="email" id="updates-email" className="subscribe-input" placeholder="you@example.com" autoComplete="email" required aria-label="Your email" />
              <select id="updates-interest" className="subscribe-input subscribe-interest" aria-label="What you'd like to hear about">
                <option value="Everything">
                  Everything
                </option>
                <option value="Workshops">
                  Workshops
                </option>
                <option value="Shop">
                  Shop pieces
                </option>
                <option value="Snail Mail">
                  Snail Mail
                </option>
              </select>
              <button type="submit" className="button button-primary subscribe-btn">
                Keep me posted
              </button>
            </form>
            <p className="subscribe-msg" id="updates-msg" role="status" aria-live="polite"></p>
            <button type="button" className="subscribe-unsub" id="updates-unsub">
              Changed your mind? Unsubscribe
            </button>
          </div>
        </div>
      </section>
    </div>
    
    </>
  );
}


