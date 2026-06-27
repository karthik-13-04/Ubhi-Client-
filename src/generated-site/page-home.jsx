export default function PageHome() {
  return (
    <>
    <div id="page-home" className="page">
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
    <div id="page-workshops" className="page">
      <div className="page-hero">
        <div className="page-hero-geo" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="196" stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="140" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="80" stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" />
            <polygon points="200,44 352,296 48,296" stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" fill="none" />
            <polygon points="200,356 48,104 352,104" stroke="rgba(181,96,122,0.25)" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
        <div className="page-hero-content">
          <p className="eyebrow">
            come home to your body
          </p>
          <h1>
            Workshop Universe
          </h1>
          <div className="workshops-ticker" aria-hidden="true">
            <div className="workshops-ticker-track">
              <span>
                Intimate gatherings
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Somatic movement
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Conscious breathwork
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Raw craftsmanship
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
                Quiet presence
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Aligning the nervous system
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Medicine in creation
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Ancient philosophy
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Art &amp; stillness
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
            </div>
            <div className="workshops-ticker-track">
              <span>
                Intimate gatherings
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Somatic movement
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Conscious breathwork
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Raw craftsmanship
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
                Quiet presence
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Aligning the nervous system
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Medicine in creation
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Ancient philosophy
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Art &amp; stillness
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
      <section className="workshops section-pad">
        <div className="workshop-grid" id="workshops-list-container">
          <article className="workshop-card reveal">
            <div className="card-image-wrap">
              <img src="assets/ubhi-workshop-generated.png" alt="Block printing and yoga workshop" loading="lazy" />
              <div className="card-image-glow"></div>
            </div>
            <div className="card-body">
              <p className="eyebrow">
                Signature · 12 July
              </p>
              <h3>
                Yoga &amp; Hand Block Printing
              </h3>
              <p>
                A grounding yoga practice followed by hand block printing on paper and cloth. Designed for beginners and returning makers.
              </p>
              <dl>
                <div>
                  <dt>
                    Time
                  </dt>
                  <dd>
                    10:30–13:30
                  </dd>
                </div>
                <div>
                  <dt>
                    Place
                  </dt>
                  <dd>
                    Hackney studio
                  </dd>
                </div>
                <div>
                  <dt>
                    Price
                  </dt>
                  <dd>
                    £58
                  </dd>
                </div>
                <div>
                  <dt>
                    Spaces
                  </dt>
                  <dd>
                    10
                  </dd>
                </div>
              </dl>
              <button className="button button-primary" type="button" data-book="Yoga & Hand Block Printing">
                Book
              </button>
            </div>
          </article>
          <article className="workshop-card reveal">
            <div className="product-art" style={{ background: "radial-gradient(circle at center,rgba(201,151,42,0.08),rgba(7,6,14,0.9))" }} aria-hidden="true">
              <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
                <circle cx="100" cy="100" r="80" stroke="rgba(201,151,42,0.4)" strokeWidth="0.8" />
                <circle cx="100" cy="100" r="50" stroke="rgba(201,151,42,0.25)" strokeWidth="0.6" />
                <polygon points="100,20 169,140 31,140" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
                <polygon points="100,180 169,60 31,60" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="4" fill="rgba(201,151,42,0.6)" />
              </svg>
            </div>
            <div className="card-body">
              <p className="eyebrow">
                Drawing · 26 July
              </p>
              <h3>
                Sacred Geometry Drawing
              </h3>
              <p>
                Compass-and-rule mandala drawing, breath, stillness, and a short philosophical inquiry.
              </p>
              <dl>
                <div>
                  <dt>
                    Time
                  </dt>
                  <dd>
                    09:30–12:00
                  </dd>
                </div>
                <div>
                  <dt>
                    Place
                  </dt>
                  <dd>
                    Hackney studio
                  </dd>
                </div>
                <div>
                  <dt>
                    Price
                  </dt>
                  <dd>
                    £44
                  </dd>
                </div>
                <div>
                  <dt>
                    Spaces
                  </dt>
                  <dd>
                    8
                  </dd>
                </div>
              </dl>
              <button className="button button-secondary" type="button" data-book="Sacred Geometry Drawing">
                Book
              </button>
            </div>
          </article>
          <article className="workshop-card reveal">
            <div className="product-art" style={{ background: "radial-gradient(circle at center,rgba(181,96,122,0.08),rgba(7,6,14,0.9))" }} aria-hidden="true">
              <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
                <circle cx="100" cy="100" r="80" stroke="rgba(181,96,122,0.4)" strokeWidth="0.8" />
                <ellipse cx="100" cy="100" rx="70" ry="30" stroke="rgba(181,96,122,0.3)" strokeWidth="0.6" />
                <ellipse cx="100" cy="100" rx="30" ry="70" stroke="rgba(181,96,122,0.3)" strokeWidth="0.6" />
                <circle cx="100" cy="100" r="8" fill="rgba(181,96,122,0.6)" />
              </svg>
            </div>
            <div className="card-body">
              <p className="eyebrow">
                Rest · 9 August
              </p>
              <h3>
                Watercolour &amp; Sound (AUM)
              </h3>
              <p>
                Slow movement, chanting science, and a watercolour study inspired by sound and the body.
              </p>
              <dl>
                <div>
                  <dt>
                    Time
                  </dt>
                  <dd>
                    14:00–17:00
                  </dd>
                </div>
                <div>
                  <dt>
                    Place
                  </dt>
                  <dd>
                    Hackney studio
                  </dd>
                </div>
                <div>
                  <dt>
                    Price
                  </dt>
                  <dd>
                    £52
                  </dd>
                </div>
                <div>
                  <dt>
                    Spaces
                  </dt>
                  <dd>
                    10
                  </dd>
                </div>
              </dl>
              <button className="button button-secondary" type="button" data-book="Watercolour & Sound (AUM)">
                Book
              </button>
            </div>
          </article>
          <article className="workshop-card reveal">
            <div className="product-art" style={{ background: "radial-gradient(circle at center,rgba(45,139,124,0.08),rgba(7,6,14,0.9))" }} aria-hidden="true">
              <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
                <path d="M70,50 L130,50 M80,50 L80,65 C80,110 50,120 50,150 C50,175 70,180 100,180 C130,180 150,175 150,150 C150,120 120,110 120,65 L120,50" stroke="rgba(45,139,124,0.45)" strokeWidth="0.8" />
                <ellipse cx="100" cy="50" rx="30" ry="8" stroke="rgba(45,139,124,0.5)" strokeWidth="0.7" />
                <ellipse cx="100" cy="150" rx="42" ry="12" stroke="rgba(45,139,124,0.15)" strokeWidth="0.5" />
                <circle cx="100" cy="120" r="14" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
              </svg>
            </div>
            <div className="card-body">
              <p className="eyebrow">
                Craft · 23 August
              </p>
              <h3>
                Breathwork &amp; Clay Pots
              </h3>
              <p>
                Grounding breath session, hand-shaping raw clay pots, and wood-fire ritual study.
              </p>
              <dl>
                <div>
                  <dt>
                    Time
                  </dt>
                  <dd>
                    10:30–13:00
                  </dd>
                </div>
                <div>
                  <dt>
                    Place
                  </dt>
                  <dd>
                    Hackney studio
                  </dd>
                </div>
                <div>
                  <dt>
                    Price
                  </dt>
                  <dd>
                    £48
                  </dd>
                </div>
                <div>
                  <dt>
                    Spaces
                  </dt>
                  <dd>
                    8
                  </dd>
                </div>
              </dl>
              <button className="button button-secondary" type="button" data-book="Breathwork & Clay Pots">
                Book
              </button>
            </div>
          </article>
          <article className="workshop-card reveal">
            <div className="product-art" style={{ background: "radial-gradient(circle at center,rgba(181,96,122,0.08),rgba(7,6,14,0.9))" }} aria-hidden="true">
              <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
                <circle cx="100" cy="100" r="80" stroke="rgba(181,96,122,0.2)" strokeWidth="0.6" />
                <path d="M30,100 Q60,40 100,100 T170,100" stroke="rgba(181,96,122,0.45)" strokeWidth="0.8" />
                <path d="M30,100 Q60,160 100,100 T170,100" stroke="rgba(201,151,42,0.3)" strokeWidth="0.7" />
                <circle cx="100" cy="100" r="5" fill="rgba(181,96,122,0.6)" />
              </svg>
            </div>
            <div className="card-body">
              <p className="eyebrow">
                Altar · 6 Sept
              </p>
              <h3>
                Somatic Silk Dyeing
              </h3>
              <p>
                Wearable art. Focus, natural botanical dyes on raw silk, and somatic movement.
              </p>
              <dl>
                <div>
                  <dt>
                    Time
                  </dt>
                  <dd>
                    11:00–14:30
                  </dd>
                </div>
                <div>
                  <dt>
                    Place
                  </dt>
                  <dd>
                    Hackney studio
                  </dd>
                </div>
                <div>
                  <dt>
                    Price
                  </dt>
                  <dd>
                    £64
                  </dd>
                </div>
                <div>
                  <dt>
                    Spaces
                  </dt>
                  <dd>
                    8
                  </dd>
                </div>
              </dl>
              <button className="button button-secondary" type="button" data-book="Somatic Silk Dyeing">
                Book
              </button>
            </div>
          </article>
          <article className="workshop-card reveal">
            <div className="product-art" style={{ background: "radial-gradient(circle at center,rgba(201,151,42,0.06),rgba(7,6,14,0.9))" }} aria-hidden="true">
              <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
                <path d="M60,90 C80,70 110,80 100,110 C90,130 50,120 60,90 Z" stroke="rgba(201,151,42,0.4)" strokeWidth="0.7" />
                <path d="M110,120 C130,100 160,110 150,130 C140,150 100,140 110,120 Z" stroke="rgba(201,151,42,0.3)" strokeWidth="0.7" />
                <path d="M90,60 C110,40 130,55 120,75 C110,95 80,80 90,60 Z" stroke="rgba(181,96,122,0.35)" strokeWidth="0.7" />
                <path d="M50,105 Q80,100 95,115" stroke="rgba(255,248,230,0.3)" strokeWidth="0.5" />
                <path d="M105,65 Q115,75 125,60" stroke="rgba(255,248,230,0.3)" strokeWidth="0.5" />
              </svg>
            </div>
            <div className="card-body">
              <p className="eyebrow">
                Focus · 20 Sept
              </p>
              <h3>
                Restorative Art &amp; Ink Flow
              </h3>
              <p>
                Slow drawing practices, ink grinding, charcoal wash, and nervous system focus.
              </p>
              <dl>
                <div>
                  <dt>
                    Time
                  </dt>
                  <dd>
                    14:30–17:00
                  </dd>
                </div>
                <div>
                  <dt>
                    Place
                  </dt>
                  <dd>
                    Hackney studio
                  </dd>
                </div>
                <div>
                  <dt>
                    Price
                  </dt>
                  <dd>
                    £46
                  </dd>
                </div>
                <div>
                  <dt>
                    Spaces
                  </dt>
                  <dd>
                    10
                  </dd>
                </div>
              </dl>
              <button className="button button-secondary" type="button" data-book="Restorative Art & Ink Flow">
                Book
              </button>
            </div>
          </article>
          <article className="workshop-card reveal">
            <div className="product-art" style={{ background: "radial-gradient(circle at center,rgba(45,139,124,0.08),rgba(7,6,14,0.9))" }} aria-hidden="true">
              <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
                <circle cx="100" cy="100" r="80" stroke="rgba(45,139,124,0.3)" strokeWidth="0.8" />
                <path d="M100,30 A70,70 0 0,1 170,100 A70,70 0 0,1 100,170 A70,70 0 0,1 100,30" stroke="rgba(45,139,124,0.4)" strokeWidth="0.6" />
                <path d="M100,60 A40,40 0 0,1 140,100 A40,40 0 0,1 100,140 A40,40 0 0,1 100,60" stroke="rgba(201,151,42,0.35)" strokeWidth="0.6" />
                <circle cx="100" cy="100" r="4" fill="rgba(45,139,124,0.6)" />
              </svg>
            </div>
            <div className="card-body">
              <p className="eyebrow">
                Clay · 4 Oct
              </p>
              <h3>
                Embodied Clay &amp; Breath
              </h3>
              <p>
                Coiling terracotta pots, slow breathing patterns, and organic clay textures.
              </p>
              <dl>
                <div>
                  <dt>
                    Time
                  </dt>
                  <dd>
                    10:30–13:00
                  </dd>
                </div>
                <div>
                  <dt>
                    Place
                  </dt>
                  <dd>
                    Hackney studio
                  </dd>
                </div>
                <div>
                  <dt>
                    Price
                  </dt>
                  <dd>
                    £50
                  </dd>
                </div>
                <div>
                  <dt>
                    Spaces
                  </dt>
                  <dd>
                    8
                  </dd>
                </div>
              </dl>
              <button className="button button-secondary" type="button" data-book="Embodied Clay & Breath">
                Book
              </button>
            </div>
          </article>
          <article className="workshop-card reveal">
            <div className="product-art" style={{ background: "radial-gradient(circle at center,rgba(201,151,42,0.08),rgba(7,6,14,0.9))" }} aria-hidden="true">
              <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
                <path d="M50,90 A50,50 0 0,0 150,90 Z" fill="rgba(201,151,42,0.08)" stroke="rgba(201,151,42,0.5)" strokeWidth="0.8" />
                <line x1="40" y1="90" x2="160" y2="90" stroke="rgba(201,151,42,0.4)" strokeWidth="0.8" />
                <circle cx="100" cy="90" r="3" fill="rgba(201,151,42,0.6)" />
                <circle cx="100" cy="100" r="60" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
              </svg>
            </div>
            <div className="card-body">
              <p className="eyebrow">
                Sound · 18 Oct
              </p>
              <h3>
                Sacred Mandala &amp; Sound
              </h3>
              <p>
                Concentric line geometry, meditation harmonics, and sound bath resonance.
              </p>
              <dl>
                <div>
                  <dt>
                    Time
                  </dt>
                  <dd>
                    14:00–16:30
                  </dd>
                </div>
                <div>
                  <dt>
                    Place
                  </dt>
                  <dd>
                    Hackney studio
                  </dd>
                </div>
                <div>
                  <dt>
                    Price
                  </dt>
                  <dd>
                    £42
                  </dd>
                </div>
                <div>
                  <dt>
                    Spaces
                  </dt>
                  <dd>
                    12
                  </dd>
                </div>
              </dl>
              <button className="button button-secondary" type="button" data-book="Sacred Mandala & Sound">
                Book
              </button>
            </div>
          </article>
        </div>
      </section>
      <div id="booking-modal" className="modal-overlay" aria-hidden="true">
        <div className="modal-panel">
          <button className="modal-close" id="modal-close-btn" type="button" aria-label="Close modal">
            &times;
          </button>
          <form id="modal-booking-form" noValidate>
            <div id="modal-step-details" className="modal-step is-active">
              <h2 className="modal-title">
                Reserve my space
              </h2>
              <div className="modal-workshop-preview">
                <span className="eyebrow" id="modal-preview-eyebrow">
                  Signature
                </span>
                <h3 id="modal-preview-title">
                  Yoga &amp; Hand Block Printing
                </h3>
                <div className="modal-preview-details">
                  <span id="modal-preview-date">
                    Sunday 12 July
                  </span>
                   &middot; 
                    
                  <span id="modal-preview-time">
                    10:30–13:30
                  </span>
                   &middot; 
                    
                  <strong id="modal-preview-price">
                    £58
                  </strong>
                </div>
              </div>
              <div className="modal-form-fields">
                <label htmlFor="modal-workshop-select">
                  Workshop
                    
                  <select id="modal-workshop-select" name="workshop" required>
                    <option value="Yoga & Hand Block Printing" data-price="58" data-date="Sunday 12 July" data-time="10:30–13:30">
                      Yoga &amp; Hand Block Printing &mdash; £58
                    </option>
                    <option value="Sacred Geometry Drawing" data-price="44" data-date="Sunday 26 July" data-time="09:30–12:00">
                      Sacred Geometry Drawing &mdash; £44
                    </option>
                    <option value="Watercolour & Sound (AUM)" data-price="52" data-date="Sunday 9 August" data-time="14:00–17:00">
                      Watercolour &amp; Sound (AUM) &mdash; £52
                    </option>
                    <option value="Breathwork & Clay Pots" data-price="48" data-date="Sunday 23 August" data-time="10:30–13:00">
                      Breathwork &amp; Clay Pots &mdash; £48
                    </option>
                    <option value="Somatic Silk Dyeing" data-price="64" data-date="Sunday 6 September" data-time="11:00–14:30">
                      Somatic Silk Dyeing &mdash; £64
                    </option>
                    <option value="Restorative Art & Ink Flow" data-price="46" data-date="Sunday 20 September" data-time="14:30–17:00">
                      Restorative Art &amp; Ink Flow &mdash; £46
                    </option>
                    <option value="Embodied Clay & Breath" data-price="50" data-date="Sunday 4 October" data-time="10:30–13:00">
                      Embodied Clay &amp; Breath &mdash; £50
                    </option>
                    <option value="Sacred Mandala & Sound" data-price="42" data-date="Sunday 18 October" data-time="14:00–16:30">
                      Sacred Mandala &amp; Sound &mdash; £42
                    </option>
                    <option value="Private Ubhi Session" data-price="custom" data-date="By arrangement" data-time="Custom duration">
                      Private Ubhi Session &mdash; Quote
                    </option>
                  </select>
                </label>
                <div id="modal-qty-field">
                  <label htmlFor="modal-qty-input" style={{ display: "block" }}>
                    How many spaces?
                  </label>
                  <span className="modal-qty-stepper">
                    <button type="button" id="modal-qty-minus" aria-label="One fewer space">
                      &minus;
                    </button>
                    <input id="modal-qty-input" name="tickets" type="number" min="1" value="1" inputMode="numeric" readOnly aria-label="Number of spaces" />
                    <button type="button" id="modal-qty-plus" aria-label="One more space">
                      +
                    </button>
                  </span>
                  <span className="modal-qty-note" id="modal-qty-note"></span>
                </div>
                <div className="form-row">
                  <label htmlFor="modal-name-input">
                    Name
                      
                    <input id="modal-name-input" name="name" type="text" autoComplete="name" placeholder="Your name" required />
                  </label>
                  <label htmlFor="modal-email-input">
                    Email
                      
                    <input id="modal-email-input" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                  </label>
                </div>
                <label htmlFor="modal-phone-input">
                  Mobile Number
                    
                  <input id="modal-phone-input" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="e.g. 07123 456789" required />
                </label>
                <label htmlFor="modal-note-input">
                  Note for Chelsea
                    
                  <textarea id="modal-note-input" name="note" placeholder="Anything you want her to know?"></textarea>
                </label>
              </div>
              <div className="modal-footer">
                <button type="button" className="button button-primary" id="modal-to-payment-btn" style={{ width: "100%" }}>
                  Proceed to Pay
                </button>
              </div>
            </div>
            <div id="modal-step-payment" className="modal-step">
              <div className="modal-payment-header">
                <h2 className="modal-title">
                  Secure Checkout
                </h2>
                <div className="secure-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}>
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>
                    SSL Encrypted
                  </span>
                </div>
              </div>
              <div className="modal-payment-summary">
                <span>
                  Amount due:
                </span>
                <strong id="modal-payment-amount">
                  £58
                </strong>
              </div>
              <div className="modal-form-fields">
                <label htmlFor="modal-card-name">
                  Cardholder Name
                    
                  <input id="modal-card-name" name="cardname" type="text" placeholder="Name as printed on card" required />
                </label>
                <label htmlFor="modal-card-number">
                  Card Number
                    
                    <input id="modal-card-number" name="cardnumber" type="text" inputMode="numeric" placeholder="4111 2222 3333 4444" pattern="\\d{4}\\s?\\d{4}\\s?\\d{4}\\s?\\d{4}" maxLength="19" required />
                </label>
                <div className="form-row">
                  <label htmlFor="modal-card-expiry">
                    Expiry Date
                      
                    <input id="modal-card-expiry" name="cardexpiry" type="text" placeholder="MM / YY" pattern="(0[1-9]|1[0-2])\\s?\\/\\s?([0-9]{2})" maxLength="7" required />
                  </label>
                  <label htmlFor="modal-card-cvc">
                    CVC
                      
                    <input id="modal-card-cvc" name="cardcvc" type="text" inputMode="numeric" placeholder="123" pattern="\\d{3,4}" maxLength="4" required />
                  </label>
                </div>
              </div>
              <div className="modal-actions">
                <button type="button" className="button button-secondary" id="modal-back-btn" style={{ flex: "1" }}>
                  &larr; Back
                </button>
                <button type="submit" className="button button-primary" id="modal-pay-btn" style={{ flex: "2" }}>
                  Pay Now
                </button>
              </div>
            </div>
            <div id="modal-step-success" className="modal-step">
              <div className="modal-success-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.15)" />
                </svg>
              </div>
              <h2 className="modal-title">
                Space Reserved
              </h2>
              <p id="modal-success-msg" className="modal-success-message">
                Thank you. Your space has been quietly held.
              </p>
              <p className="modal-success-subtext">
                Add it to your calendar and download your receipt below. Chelsea will reach out a few days before the gathering with location details and preparation notes.
              </p>
              <div className="modal-footer" style={{ width: "100%" }}>
                <button type="button" className="button" id="booking-ics-btn" style={{ width: "100%", marginBottom: "10px" }}>
                  📅 Add to calendar
                </button>
                <button type="button" className="button" id="booking-receipt-btn" style={{ width: "100%", marginBottom: "10px" }}>
                  🧾 Download receipt
                </button>
                <button type="button" className="button button-primary" id="modal-success-close-btn" style={{ width: "100%" }}>
                  Return to workshops
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div id="page-shop" className="page">
      <div className="page-hero">
        <div className="page-hero-geo" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="196" stroke="rgba(181,96,122,0.3)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="130" stroke="rgba(181,96,122,0.2)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="70" stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="30" stroke="rgba(201,151,42,0.35)" strokeWidth="0.5" />
            <circle cx="200" cy="120" r="80" stroke="rgba(181,96,122,0.1)" strokeWidth="0.4" />
            <circle cx="269" cy="160" r="80" stroke="rgba(181,96,122,0.1)" strokeWidth="0.4" />
            <circle cx="269" cy="240" r="80" stroke="rgba(181,96,122,0.1)" strokeWidth="0.4" />
            <circle cx="200" cy="280" r="80" stroke="rgba(181,96,122,0.1)" strokeWidth="0.4" />
            <circle cx="131" cy="240" r="80" stroke="rgba(181,96,122,0.1)" strokeWidth="0.4" />
            <circle cx="131" cy="160" r="80" stroke="rgba(181,96,122,0.1)" strokeWidth="0.4" />
          </svg>
        </div>
        <div className="page-hero-content">
          <p className="eyebrow">
            made slowly, by hand
          </p>
          <h1>
            Shop
          </h1>
          <div className="shop-ticker" aria-hidden="true">
            <div className="shop-ticker-track">
              <span>
                Meditative craft
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Hand-pressed talismans
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Sacred relics
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Somatic art archives
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Made with intention
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Earth-bound vessels
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Ritual tools
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Embodied geometry
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Quiet keepsakes
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Terracotta relics
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
            </div>
            <div className="shop-ticker-track">
              <span>
                Meditative craft
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Hand-pressed talismans
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Sacred relics
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Somatic art archives
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Made with intention
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Earth-bound vessels
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Ritual tools
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Embodied geometry
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Quiet keepsakes
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
      <section className="shop section-pad">
        <div className="shop-layout">
          <div className="shop-scroll-container">
            <div className="product-grid" id="shop-products-container">
              <article className="product-card reveal">
                <div className="product-image-wrap">
                  <img src="assets/ubhi-snail-mail-generated.png" alt="Volume 01 AUM snail mail package" loading="lazy" />
                </div>
                <div className="product-body">
                  <p className="eyebrow">
                    Snail Mail
                  </p>
                  <h3>
                    Volume 01 &middot; AUM
                  </h3>
                  <p>
                    Art print, researched letter, sticker, and ritual note. First in a monthly series.
                  </p>
                  <div className="product-footer">
                    <strong>
                      £18
                    </strong>
                    <button type="button" className="button button-secondary" data-buy-product="Volume 01 · AUM" data-price="18">
                      Bring home
                    </button>
                  </div>
                </div>
              </article>
              <article className="product-card reveal">
                <div className="product-art yantra" aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" width="100%" height="100%">
                    <circle cx="100" cy="100" r="90" stroke="rgba(201,151,42,0.4)" strokeWidth="0.8" />
                    <circle cx="100" cy="100" r="60" stroke="rgba(201,151,42,0.28)" strokeWidth="0.6" />
                    <circle cx="100" cy="100" r="30" stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" />
                    <polygon points="100,20 172,155 28,155" stroke="rgba(201,151,42,0.5)" strokeWidth="0.8" fill="rgba(201,151,42,0.05)" />
                    <polygon points="100,180 172,45 28,45" stroke="rgba(181,96,122,0.4)" strokeWidth="0.8" fill="rgba(181,96,122,0.04)" />
                    <circle cx="100" cy="100" r="6" fill="rgba(201,151,42,0.65)" />
                  </svg>
                </div>
                <div className="product-body">
                  <p className="eyebrow">
                    Limited print
                  </p>
                  <h3>
                    AUM Geometry Print
                  </h3>
                  <p>
                    Terracotta linework on ivory archival paper. A4. Hand-stamped edition of 50.
                  </p>
                  <div className="product-footer">
                    <strong>
                      £32
                    </strong>
                    <button type="button" className="button button-secondary" data-buy-product="AUM Geometry Print" data-price="32">
                      Bring home
                    </button>
                  </div>
                </div>
              </article>
              <article className="product-card reveal">
                <div className="product-art lotus" aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" width="100%" height="100%">
                    <circle cx="100" cy="100" r="90" stroke="rgba(45,139,124,0.3)" strokeWidth="0.8" />
                    <circle cx="100" cy="100" r="30" stroke="rgba(45,139,124,0.4)" strokeWidth="0.6" />
                    <circle cx="100" cy="30" r="70" stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" />
                    <circle cx="160" cy="65" r="70" stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" />
                    <circle cx="160" cy="135" r="70" stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" />
                    <circle cx="100" cy="170" r="70" stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" />
                    <circle cx="40" cy="135" r="70" stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" />
                    <circle cx="40" cy="65" r="70" stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="5" fill="rgba(45,139,124,0.65)" />
                  </svg>
                </div>
                <div className="product-body">
                  <p className="eyebrow">
                    Workshop object
                  </p>
                  <h3>
                    Lotus Sticker Set
                  </h3>
                  <p>
                    12 small symbols for journals, letters, and altar corners. Screen-printed on kraft paper.
                  </p>
                  <div className="product-footer">
                    <strong>
                      £8
                    </strong>
                    <button type="button" className="button button-secondary" data-buy-product="Lotus Sticker Set" data-price="8">
                      Bring home
                    </button>
                  </div>
                </div>
              </article>
              <article className="product-card reveal">
                <div className="product-art" style={{ background: "radial-gradient(circle at center,rgba(45,139,124,0.1),rgba(7,6,14,0.9))" }} aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
                    <rect x="20" y="20" width="160" height="160" stroke="rgba(45,139,124,0.35)" strokeWidth="0.7" fill="none" />
                    <rect x="50" y="50" width="100" height="100" stroke="rgba(45,139,124,0.28)" strokeWidth="0.6" fill="none" transform="rotate(45 100 100)" />
                    <circle cx="100" cy="100" r="40" stroke="rgba(45,139,124,0.4)" strokeWidth="0.7" />
                    <circle cx="100" cy="100" r="6" fill="rgba(45,139,124,0.6)" />
                  </svg>
                </div>
                <div className="product-body">
                  <p className="eyebrow">
                    Ritual tool
                  </p>
                  <h3>
                    Block Printing Starter Kit
                  </h3>
                  <p>
                    One hand-carved foam block, two ink pads, and a folded instruction card.
                  </p>
                  <div className="product-footer">
                    <strong>
                      £24
                    </strong>
                    <button type="button" className="button button-secondary" data-buy-product="Block Printing Starter Kit" data-price="24">
                      Bring home
                    </button>
                  </div>
                </div>
              </article>
              <article className="product-card reveal">
                <div className="product-art" style={{ background: "radial-gradient(circle at center,rgba(201,151,42,0.08),rgba(7,6,14,0.9))" }} aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
                    <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" />
                    <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" />
                    <line x1="29" y1="29" x2="171" y2="171" stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" />
                    <line x1="171" y1="29" x2="29" y2="171" stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="80" stroke="rgba(201,151,42,0.35)" strokeWidth="0.6" />
                    <circle cx="100" cy="100" r="50" stroke="rgba(201,151,42,0.28)" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="20" stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" />
                    <circle cx="100" cy="100" r="5" fill="rgba(201,151,42,0.6)" />
                  </svg>
                </div>
                <div className="product-body">
                  <p className="eyebrow">
                    Drawing tool
                  </p>
                  <h3>
                    Sacred Geometry Compass Set
                  </h3>
                  <p>
                    Precision compass, ruler, and a guide to the first six patterns.
                  </p>
                  <div className="product-footer">
                    <strong>
                      £28
                    </strong>
                    <button type="button" className="button button-secondary" data-buy-product="Sacred Geometry Compass Set" data-price="28">
                      Bring home
                    </button>
                  </div>
                </div>
              </article>
              <article className="product-card reveal">
                <div className="product-art" style={{ background: "radial-gradient(circle at center,rgba(181,96,122,0.09),rgba(7,6,14,0.9))" }} aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
                    <ellipse cx="100" cy="130" rx="70" ry="30" stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" fill="none" />
                    <ellipse cx="100" cy="100" rx="50" ry="70" stroke="rgba(181,96,122,0.28)" strokeWidth="0.5" fill="none" />
                    <ellipse cx="100" cy="100" rx="70" ry="50" stroke="rgba(181,96,122,0.28)" strokeWidth="0.5" fill="none" transform="rotate(60 100 100)" />
                    <ellipse cx="100" cy="100" rx="70" ry="50" stroke="rgba(181,96,122,0.28)" strokeWidth="0.5" fill="none" transform="rotate(120 100 100)" />
                    <circle cx="100" cy="100" r="6" fill="rgba(181,96,122,0.6)" />
                  </svg>
                </div>
                <div className="product-body">
                  <p className="eyebrow">
                    Ritual stationery
                  </p>
                  <h3>
                    Ubhi Journal &mdash; Blank
                  </h3>
                  <p>
                    A4 lay-flat, 160 pages of off-white cartridge paper. Embossed cover.
                  </p>
                  <div className="product-footer">
                    <strong>
                      £22
                    </strong>
                    <button type="button" className="button button-secondary" data-buy-product="Ubhi Journal — Blank" data-price="22">
                      Bring home
                    </button>
                  </div>
                </div>
              </article>
              <article className="product-card reveal">
                <div className="product-art" style={{ background: "radial-gradient(circle at center,rgba(181,96,122,0.08),rgba(7,6,14,0.9))" }} aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
                    <path d="M70,50 L130,50 M80,50 L80,65 C80,110 50,120 50,150 C50,175 70,180 100,180 C130,180 150,175 150,150 C150,120 120,110 120,65 L120,50" stroke="rgba(181,96,122,0.45)" strokeWidth="0.8" />
                    <ellipse cx="100" cy="50" rx="30" ry="8" stroke="rgba(181,96,122,0.5)" strokeWidth="0.7" />
                    <ellipse cx="100" cy="150" rx="42" ry="12" stroke="rgba(181,96,122,0.15)" strokeWidth="0.5" />
                    <circle cx="100" cy="120" r="14" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
                  </svg>
                </div>
                <div className="product-body">
                  <p className="eyebrow">
                    Clay craft
                  </p>
                  <h3>
                    Earth-bound Vessel
                  </h3>
                  <p>
                    Hand-thrown terracotta pot, wood-fired with organic glaze. Each piece holds a unique shape.
                  </p>
                  <div className="product-footer">
                    <strong>
                      £45
                    </strong>
                    <button type="button" className="button button-secondary" data-buy-product="Earth-bound Vessel" data-price="45">
                      Bring home
                    </button>
                  </div>
                </div>
              </article>
              <article className="product-card reveal">
                <div className="product-art" style={{ background: "radial-gradient(circle at center,rgba(45,139,124,0.08),rgba(7,6,14,0.9))" }} aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
                    <circle cx="100" cy="100" r="80" stroke="rgba(45,139,124,0.2)" strokeWidth="0.6" />
                    <path d="M30,100 Q60,40 100,100 T170,100" stroke="rgba(45,139,124,0.45)" strokeWidth="0.8" />
                    <path d="M30,100 Q60,160 100,100 T170,100" stroke="rgba(201,151,42,0.3)" strokeWidth="0.7" />
                    <circle cx="100" cy="100" r="5" fill="rgba(45,139,124,0.6)" />
                  </svg>
                </div>
                <div className="product-body">
                  <p className="eyebrow">
                    Art archive
                  </p>
                  <h3>
                    Somatic Art Archive
                  </h3>
                  <p>
                    Folio of 4 linocut prints documenting bodily movement, printed on cotton rag paper.
                  </p>
                  <div className="product-footer">
                    <strong>
                      £38
                    </strong>
                    <button type="button" className="button button-secondary" data-buy-product="Somatic Art Archive" data-price="38">
                      Bring home
                    </button>
                  </div>
                </div>
              </article>
              <article className="product-card reveal">
                <div className="product-art" style={{ background: "radial-gradient(circle at center,rgba(201,151,42,0.06),rgba(7,6,14,0.9))" }} aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
                    <path d="M60,90 C80,70 110,80 100,110 C90,130 50,120 60,90 Z" stroke="rgba(201,151,42,0.4)" strokeWidth="0.7" />
                    <path d="M110,120 C130,100 160,110 150,130 C140,150 100,140 110,120 Z" stroke="rgba(201,151,42,0.3)" strokeWidth="0.7" />
                    <path d="M90,60 C110,40 130,55 120,75 C110,95 80,80 90,60 Z" stroke="rgba(181,96,122,0.35)" strokeWidth="0.7" />
                    <path d="M50,105 Q80,100 95,115" stroke="rgba(255,248,230,0.3)" strokeWidth="0.5" />
                    <path d="M105,65 Q115,75 125,60" stroke="rgba(255,248,230,0.3)" strokeWidth="0.5" />
                  </svg>
                </div>
                <div className="product-body">
                  <p className="eyebrow">
                    Quiet keepsakes
                  </p>
                  <h3>
                    Quiet Keepsake Set
                  </h3>
                  <p>
                    Three polished river stones wrapped in woven brass wire. Altars and sensory focus.
                  </p>
                  <div className="product-footer">
                    <strong>
                      £15
                    </strong>
                    <button type="button" className="button button-secondary" data-buy-product="Quiet Keepsake Set" data-price="15">
                      Bring home
                    </button>
                  </div>
                </div>
              </article>
              <article className="product-card reveal">
                <div className="product-art" style={{ background: "radial-gradient(circle at center,rgba(181,96,122,0.08),rgba(7,6,14,0.9))" }} aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
                    <rect x="40" y="30" width="120" height="140" rx="3" stroke="rgba(181,96,122,0.4)" strokeWidth="0.8" />
                    <line x1="60" y1="50" x2="140" y2="50" stroke="rgba(181,96,122,0.25)" strokeWidth="0.6" />
                    <line x1="60" y1="70" x2="140" y2="70" stroke="rgba(181,96,122,0.25)" strokeWidth="0.6" />
                    <line x1="60" y1="130" x2="140" y2="130" stroke="rgba(181,96,122,0.25)" strokeWidth="0.6" />
                    <line x1="60" y1="150" x2="140" y2="150" stroke="rgba(181,96,122,0.25)" strokeWidth="0.6" />
                    <circle cx="100" cy="100" r="24" stroke="rgba(201,151,42,0.45)" strokeWidth="0.7" />
                    <polygon points="100,80 117,110 83,110" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
                    <circle cx="100" cy="100" r="3" fill="rgba(201,151,42,0.7)" />
                  </svg>
                </div>
                <div className="product-body">
                  <p className="eyebrow">
                    Relic print
                  </p>
                  <h3>
                    Terracotta Relic Print
                  </h3>
                  <p>
                    Woodblock print in warm iron oxide inks, detailing ancient geometry on heavy card.
                  </p>
                  <div className="product-footer">
                    <strong>
                      £26
                    </strong>
                    <button type="button" className="button button-secondary" data-buy-product="Terracotta Relic Print" data-price="26">
                      Bring home
                    </button>
                  </div>
                </div>
              </article>
              <article className="product-card reveal">
                <div className="product-art" style={{ background: "radial-gradient(circle at center,rgba(201,151,42,0.08),rgba(7,6,14,0.9))" }} aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
                    <path d="M50,90 A50,50 0 0,0 150,90 Z" fill="rgba(201,151,42,0.08)" stroke="rgba(201,151,42,0.5)" strokeWidth="0.8" />
                    <line x1="40" y1="90" x2="160" y2="90" stroke="rgba(201,151,42,0.4)" strokeWidth="0.8" />
                    <path d="M85,140 L115,140 M100,140 L100,150 M80,150 L120,150" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
                    <path d="M100,80 Q95,65 105,50 T100,30" stroke="rgba(255,248,230,0.25)" strokeWidth="0.6" />
                    <circle cx="100" cy="90" r="3" fill="rgba(201,151,42,0.6)" />
                  </svg>
                </div>
                <div className="product-body">
                  <p className="eyebrow">
                    Ritual tool
                  </p>
                  <h3>
                    Ritual Brass Bowl
                  </h3>
                  <p>
                    Hand-beaten brass incense bowl, matching sand, and wild-harvested white sage bundle.
                  </p>
                  <div className="product-footer">
                    <strong>
                      £34
                    </strong>
                    <button type="button" className="button button-secondary" data-buy-product="Ritual Brass Bowl" data-price="34">
                      Bring home
                    </button>
                  </div>
                </div>
              </article>
              <article className="product-card reveal">
                <div className="product-image-wrap">
                  <img src="assets/ubhi-snail-mail-generated.png" alt="Volume 02 STILLNESS snail mail package" loading="lazy" />
                </div>
                <div className="product-body">
                  <p className="eyebrow">
                    Snail Mail
                  </p>
                  <h3>
                    Volume 02 &middot; STILLNESS
                  </h3>
                  <p>
                    A meditative envelope containing a charcoal drawing, philosophical letter, incense cones, and a ritual note.
                  </p>
                  <div className="product-footer">
                    <strong>
                      £18
                    </strong>
                    <button type="button" className="button button-secondary" data-buy-product="Volume 02 · STILLNESS" data-price="18">
                      Bring home
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div id="shop-modal" className="modal-overlay" aria-hidden="true">
          <div className="modal-panel">
            <button className="modal-close" id="shop-modal-close-btn" type="button" aria-label="Close modal">
              &times;
            </button>
            <form id="modal-shop-form" noValidate>
              <div id="shop-step-delivery" className="modal-step is-active">
                <h2 className="modal-title">
                  Delivery Details
                </h2>
                <div className="modal-workshop-preview">
                  <span className="eyebrow" id="shop-preview-eyebrow">
                    Product Purchase
                  </span>
                  <h3 id="shop-preview-title">
                    Volume 01 &middot; AUM
                  </h3>
                  <div className="modal-preview-details">
                    
                    Total: 
                    <strong id="shop-preview-price">
                      £18
                    </strong>
                  </div>
                </div>
                <div className="modal-form-fields">
                  <div className="form-row">
                    <label htmlFor="shop-name-input">
                      Name
                      
                      <input id="shop-name-input" name="name" type="text" autoComplete="name" placeholder="Your name" required />
                    </label>
                    <label htmlFor="shop-email-input">
                      Email
                      
                      <input id="shop-email-input" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                    </label>
                  </div>
                  <label htmlFor="shop-mobile-input">
                    Mobile Number
                    
                    <input id="shop-mobile-input" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="e.g. 07123 456789" required />
                  </label>
                  <label htmlFor="shop-address-input">
                    Street Address
                    
                    <input id="shop-address-input" name="address" type="text" placeholder="123 Harmony Way" required />
                  </label>
                  <div className="form-row">
                    <label htmlFor="shop-city-input">
                      City
                      
                      <input id="shop-city-input" name="city" type="text" placeholder="London" required />
                    </label>
                    <label htmlFor="shop-postcode-input">
                      Postcode
                      
                      <input id="shop-postcode-input" name="postcode" type="text" placeholder="EC1A 1BB" required />
                    </label>
                  </div>
                  <label htmlFor="shop-country-input">
                    Country
                    
                    <input id="shop-country-input" name="country" type="text" placeholder="United Kingdom" required />
                  </label>
                </div>
                <div className="modal-footer">
                  <button type="button" className="button button-primary" id="shop-to-payment-btn" style={{ width: "100%" }}>
                    Proceed to Pay
                  </button>
                </div>
              </div>
              <div id="shop-step-payment" className="modal-step">
                <div className="modal-payment-header">
                  <h2 className="modal-title">
                    Secure Checkout
                  </h2>
                  <div className="secure-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}>
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>
                      SSL Encrypted
                    </span>
                  </div>
                </div>
                <div className="modal-payment-summary">
                  <span>
                    Amount due:
                  </span>
                  <strong id="shop-payment-amount">
                    £18
                  </strong>
                </div>
                <div className="modal-form-fields">
                  <label htmlFor="shop-card-name">
                    Cardholder Name
                    
                    <input id="shop-card-name" name="cardname" type="text" placeholder="Name as printed on card" required />
                  </label>
                  <label htmlFor="shop-card-number">
                    Card Number
                    
                    <input id="shop-card-number" name="cardnumber" type="text" inputMode="numeric" placeholder="4111 2222 3333 4444" pattern="\\d{4}\\s?\\d{4}\\s?\\d{4}\\s?\\d{4}" maxLength="19" required />
                  </label>
                  <div className="form-row">
                    <label htmlFor="shop-card-expiry">
                      Expiry Date
                      
                      <input id="shop-card-expiry" name="cardexpiry" type="text" placeholder="MM / YY" pattern="(0[1-9]|1[0-2])\\s?\\/\\s?([0-9]{2})" maxLength="7" required />
                    </label>
                    <label htmlFor="shop-card-cvc">
                      CVC
                      
                      <input id="shop-card-cvc" name="cardcvc" type="text" inputMode="numeric" placeholder="123" pattern="\\d{3,4}" maxLength="4" required />
                    </label>
                  </div>
                </div>
                <div className="modal-actions">
                  <button type="button" className="button button-secondary" id="shop-back-btn" style={{ flex: "1" }}>
                    &larr; Back
                  </button>
                  <button type="submit" className="button button-primary" id="shop-pay-btn" style={{ flex: "2" }}>
                    Pay Now
                  </button>
                </div>
              </div>
              <div id="shop-step-success" className="modal-step">
                <div className="modal-success-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1">
                    <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.15)" />
                  </svg>
                </div>
                <h2 className="modal-title">
                  Order Placed
                </h2>
                <p id="shop-success-msg" className="modal-success-message">
                  Thank you. Your order has been received.
                </p>
                <p className="modal-success-subtext">
                  Download your receipt below to keep for your records. We will prepare your package with quiet care and dispatch it soon.
                </p>
                <div className="modal-footer" style={{ width: "100%" }}>
                  <button type="button" className="button" id="shop-receipt-btn" style={{ width: "100%", marginBottom: "10px" }}>
                    🧾 Download receipt
                  </button>
                  <button type="button" className="button button-primary" id="shop-success-close-btn" style={{ width: "100%" }}>
                    Return to shop
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
    <div id="page-snail-mail" className="page">
      <div className="page-hero">
        <div className="page-hero-geo" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="196" stroke="rgba(45,139,124,0.3)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="140" stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="80" stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="40" stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" />
            <circle cx="200" cy="120" r="80" stroke="rgba(45,139,124,0.1)" strokeWidth="0.4" />
            <circle cx="269" cy="160" r="80" stroke="rgba(45,139,124,0.1)" strokeWidth="0.4" />
            <circle cx="269" cy="240" r="80" stroke="rgba(45,139,124,0.1)" strokeWidth="0.4" />
            <circle cx="200" cy="280" r="80" stroke="rgba(45,139,124,0.1)" strokeWidth="0.4" />
            <circle cx="131" cy="240" r="80" stroke="rgba(45,139,124,0.1)" strokeWidth="0.4" />
            <circle cx="131" cy="160" r="80" stroke="rgba(45,139,124,0.1)" strokeWidth="0.4" />
          </svg>
        </div>
        <div className="page-hero-content">
          <p className="eyebrow">
            philosophy, posted to your door
          </p>
          <h1>
            Ubhi Snail Mail Club 🌀
          </h1>
          <div className="snail-hero-cta">
            <button type="button" className="snail-hero-subscribe" data-scroll-to-plans="">
              <span className="shs-stamp" aria-hidden="true">
                <svg viewBox="0 0 120 140">
                  <use href="#art-stamp" filter="url(#rough)" />
                </svg>
              </span>
              <span className="shs-label">
                Join the Club 
                <em>
                  · Click to explore plans
                </em>
              </span>
            </button>
            <span className="snail-hero-cta-note">
              monthly letter + art posted to your door · cancel anytime
            </span>
          </div>
          <div className="snail-mail-ticker" aria-hidden="true">
            <div className="snail-mail-ticker-track">
              <span>
                Philosophy by post
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Delivered monthly
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Physical letters
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Hand-finished prints
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Tactile philosophy
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Collectible volumes
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Objects of presence
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Slow reading
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Ink &amp; raw paper
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
            </div>
            <div className="snail-mail-ticker-track">
              <span>
                Philosophy by post
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Delivered monthly
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Physical letters
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Hand-finished prints
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Tactile philosophy
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Collectible volumes
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Objects of presence
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Slow reading
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Ink &amp; raw paper
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
      <div className="snail-mail-layout">
        <section className="snail-story-section reveal">
          <div className="snail-story-wrapper">
            <div className="snail-envelope-floating env-color-1 env-pos-1">
              <div className="env-paper">
                🪷
              </div>
              <div className="env-body"></div>
              <div className="env-flap"></div>
              <div className="env-seal"></div>
              <span className="snail-float-tooltip">
                Sacred Lotus
              </span>
            </div>
            <div className="snail-envelope-floating env-color-2 env-pos-2">
              <div className="env-paper">
                🌿
              </div>
              <div className="env-body"></div>
              <div className="env-flap"></div>
              <div className="env-seal"></div>
              <span className="snail-float-tooltip">
                Prana Breath
              </span>
            </div>
            <div className="snail-envelope-floating env-color-3 env-pos-3">
              <div className="env-paper">
                ✨
              </div>
              <div className="env-body"></div>
              <div className="env-flap"></div>
              <div className="env-seal"></div>
              <span className="snail-float-tooltip">
                Cosmic Light
              </span>
            </div>
            <div className="snail-envelope-floating env-color-4 env-pos-4">
              <div className="env-paper">
                🌀
              </div>
              <div className="env-body"></div>
              <div className="env-flap"></div>
              <div className="env-seal"></div>
              <span className="snail-float-tooltip">
                Resonance
              </span>
            </div>
            <div className="snail-envelope-floating env-color-5 env-pos-5">
              <div className="env-paper">
                ☀️
              </div>
              <div className="env-body"></div>
              <div className="env-flap"></div>
              <div className="env-seal"></div>
              <span className="snail-float-tooltip">
                Solar Stillness
              </span>
            </div>
            <div className="snail-envelope-floating env-color-6 env-pos-6">
              <div className="env-paper">
                🐚
              </div>
              <div className="env-body"></div>
              <div className="env-flap"></div>
              <div className="env-seal"></div>
              <span className="snail-float-tooltip">
                Tactile Art
              </span>
            </div>
            <div className="snail-envelope-floating env-color-7 env-pos-7">
              <div className="env-paper">
                💌
              </div>
              <div className="env-body"></div>
              <div className="env-flap"></div>
              <div className="env-seal"></div>
              <span className="snail-float-tooltip">
                Chelsea's Note
              </span>
            </div>
            <div className="snail-envelope-floating env-color-8 env-pos-8">
              <div className="env-paper">
                🌙
              </div>
              <div className="env-body"></div>
              <div className="env-flap"></div>
              <div className="env-seal"></div>
              <span className="snail-float-tooltip">
                Somatic Ritual
              </span>
            </div>
            <div className="snail-envelope-floating env-color-1 env-pos-9">
              <div className="env-paper">
                🌸
              </div>
              <div className="env-body"></div>
              <div className="env-flap"></div>
              <div className="env-seal"></div>
              <span className="snail-float-tooltip">
                Muddy Blossoms
              </span>
            </div>
            <div className="snail-envelope-floating env-color-3 env-pos-10">
              <div className="env-paper">
                🎨
              </div>
              <div className="env-body"></div>
              <div className="env-flap"></div>
              <div className="env-seal"></div>
              <span className="snail-float-tooltip">
                Hand-Pressed
              </span>
            </div>
            <div className="snail-envelope-floating env-color-2 env-pos-11">
              <div className="env-paper">
                🧘
              </div>
              <div className="env-body"></div>
              <div className="env-flap"></div>
              <div className="env-seal"></div>
              <span className="snail-float-tooltip">
                Quiet Presence
              </span>
            </div>
            <div className="snail-envelope-floating env-color-4 env-pos-12">
              <div className="env-paper">
                🏺
              </div>
              <div className="env-body"></div>
              <div className="env-flap"></div>
              <div className="env-seal"></div>
              <span className="snail-float-tooltip">
                Vedic Lore
              </span>
            </div>
            <div className="snail-letter-mount">
              <button className="snail-closed-envelope" id="snail-closed-envelope" type="button" aria-label="Open the letter from Chelsea">
                <span className="ce-flap" aria-hidden="true"></span>
                <span className="ce-wax" aria-hidden="true">
                  UBHI
                </span>
                <span className="ce-hint">
                  a letter for you&nbsp;·&nbsp;
                  <em>
                    click to open
                  </em>
                </span>
              </button>
              <span className="env-back" aria-hidden="true"></span>
              <span className="env-flap" aria-hidden="true"></span>
              <div className="snail-paper-sheet snail-letter-story">
                <span className="snail-letter-stamp" aria-hidden="true">
                  <svg viewBox="0 0 120 140">
                    <use href="#art-stamp" />
                  </svg>
                </span>
                <span className="snail-letter-wax" aria-hidden="true">
                  <i className="wax-half wax-l"></i>
                  <i className="wax-half wax-r"></i>
                </span>
                <div className="snail-marginalia note-top-right">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ marginBottom: "4px" }}>
                    <path d="M12 2L15 8L22 9L17 14L18 21L12 17L6 21L7 14L2 9L9 8L12 2Z" />
                  </svg>
                  <div>
                    Each seal is stamped by hand.
                  </div>
                </div>
                <div className="snail-letter-header">
                  <h2 className="snail-letter-salutation">
                    Dear Seekers,
                  </h2>
                  <span className="snail-letter-date">
                    June, 2026
                  </span>
                </div>
                <div className="snail-letter-body">
                  <p>
                    There is a quiet kind of magic in things you can hold. A screen flickers and is gone; a letter waits in your hands, and stays.
                  </p>
                  <p>
                    So once a month I sit at this little desk and make you something real — a few slow pages, a print pressed by hand, a small thing to hold when the world moves too fast. Not a box of clever stuff. A pause, folded into an envelope and posted to your door.
                  </p>
                  <p>
                    If you have read this far, I think you feel it too. Come wander a while with me — there is always room here to slow right down.
                  </p>
                </div>
                <div className="snail-letter-signature">
                  
                With love &amp; a little magic,
                  <br />
                  
                — Chelsea Kaur Ubhi
              
                </div>
                <div className="snail-marginalia note-bottom-left">
                  <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M5,10 Q20,18 35,10" />
                    <path d="M30,5 L35,10 L30,15" />
                  </svg>
                  <div>
                    Archival cotton paper, made to endure.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="snail-anatomy-section reveal">
        <h2 className="text-center" style={{ fontFamily: "'Fraunces',serif", fontStyle: "italic", fontWeight: "300", marginBottom: "32px", color: "var(--stardust-full)" }}>
          What the Envelope Holds
        </h2>
        <div className="snail-anatomy-grid">
          <div className="snail-anatomy-card">
            <div className="snail-anatomy-art">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 22C12 22 12 12 12 2C12 12 16 9 18 12C20 15 17 19 12 22Z" fill="rgba(45,139,124,0.05)" />
                <path d="M12 22C12 22 12 12 12 2C12 12 8 9 6 12C4 15 7 19 12 22Z" fill="rgba(45,139,124,0.05)" />
                <path d="M12 6C14 7 16 7 16 7M12 10C15 11 17 11 17 11M12 14C14 15 15 16 15 16" />
                <path d="M12 6C10 7 8 7 8 7M12 10C9 11 7 11 7 11M12 14C10 15 9 16 9 16" />
              </svg>
            </div>
            <h3>
              The Art Print
            </h3>
            <p>
              A window into my quiet hours. I sit at my desk, mixing ink and block-pressing each sheet of raw cotton paper by hand. It carries the texture of presence and the shapes of sacred geometries I draw while listening to the silence of the morning. A visual reminder of still spaces to hang on your wall.
            </p>
          </div>
          <div className="snail-anatomy-card">
            <div className="snail-anatomy-art">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M4 20L8 16L18 6C19 5 20 5 21 6C22 7 22 8 21 9L11 19L7 20L4 20Z" fill="rgba(45,139,124,0.05)" />
                <line x1="8" y1="16" x2="11" y2="13" />
                <path d="M15 9L17 11" />
                <path d="M3 21H21" />
              </svg>
            </div>
            <h3>
              The Letter
            </h3>
            <p>
              Four pages of slow thoughts sent from my desk to yours. I share the threads of what I am learning—weaving ancient Vedic ideas, somatic practices that calm my own nervous system, and thoughts on art as meditation. Written like a letter to a dear friend, meant to be read with a warm cup of tea.
            </p>
          </div>
          <div className="snail-anatomy-card">
            <div className="snail-anatomy-art">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 21C12 21 8 16 8 12C8 8 12 3 12 3C12 3 16 8 16 12C16 16 12 21 12 21Z" fill="rgba(45,139,124,0.05)" />
                <path d="M12 21C12 21 4 16 4 12C4 8 8 7 12 10" />
                <path d="M12 21C12 21 20 16 20 12C20 8 16 7 12 10" />
                <path d="M12 21C9 21 6 19 6 17C6 15 12 15 12 15" />
                <path d="M12 21C15 21 18 19 18 17C18 15 12 15 12 15" />
              </svg>
            </div>
            <h3>
              The Relic
            </h3>
            <p>
              A physical keeper of presence. Sometimes it is a brass coin that sat in my hands, a piece of raw terracotta, or wild smudge leaves I wrapped myself. It is something small and heavy to hold in your palm when you need to bring your awareness back from the digital rush and ground yourself in the now.
            </p>
          </div>
        </div>
      </section>
      <div className="snail-mail-layout">
        <section className="snail-plans-section reveal" id="snail-subscribe-anchor">
          <h2 className="text-center" style={{ fontFamily: "'Fraunces',serif", fontStyle: "italic", fontWeight: "300", marginBottom: "8px", color: "var(--stardust-full)" }}>
            Let’s be pen pals
          </h2>
          <p className="text-center" style={{ color: "var(--stardust)", fontSize: "0.95rem", maxWidth: "500px", margin: "0 auto 24px auto" }}>
            Choose how often you'd like to be billed — monthly, or every 3, 6 or 12 months to save a little. Every plan posts a letter each month and auto-renews until you cancel.
          </p>
          <div className="snail-plans-grid">
            <div className="snail-plan-card" data-plan="Monthly" data-price="18" data-total="0" data-term="1" data-prepay="false" data-desc="Month to month, no commitment — pause or cancel whenever you like.">
              <div className="plan-wax-seal">
                <div className="wax-seal gold" style={{ position: "static", transform: "none", width: "32px", height: "32px" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" />
                  </svg>
                </div>
              </div>
              <span className="snail-plan-term">
                Monthly
              </span>
              <span className="snail-plan-tag tag-monthly">
                Renews monthly
              </span>
              <div className="snail-plan-price">
                £18
              </div>
              <span className="snail-plan-period">
                / month · cancel anytime
              </span>
              <p className="snail-plan-desc">
                Month to month, no commitment — pause or cancel whenever you like.
              </p>
            </div>
            <div className="snail-plan-card" data-plan="3 Months" data-price="16.33" data-total="49" data-term="3" data-prepay="true" data-desc="A gentle first season — a letter every month, renewing each quarter. Cancel anytime.">
              <div className="plan-wax-seal">
                <div className="wax-seal gold" style={{ position: "static", transform: "none", width: "32px", height: "32px" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" />
                  </svg>
                </div>
              </div>
              <span className="snail-plan-term">
                3 Months
              </span>
              <span className="snail-plan-tag tag-prepay">
                Auto-renews
              </span>
              <div className="snail-plan-price">
                £49
              </div>
              <span className="snail-plan-period">
                every 3 months · £16.33/mo
              </span>
              <p className="snail-plan-desc">
                A gentle first season — a letter every month, renewing each quarter. Cancel anytime.
              </p>
            </div>
            <div className="snail-plan-card" data-plan="6 Months" data-price="15.83" data-total="95" data-term="6" data-prepay="true" data-desc="Half a year of handmade post, wrapped in botanically-dyed linen.">
              <div className="plan-wax-seal">
                <div className="wax-seal gold" style={{ position: "static", transform: "none", width: "32px", height: "32px" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" />
                  </svg>
                </div>
              </div>
              <span className="snail-plan-term">
                6 Months
              </span>
              <span className="snail-plan-tag tag-prepay">
                Auto-renews
              </span>
              <div className="snail-plan-price">
                £95
              </div>
              <span className="snail-plan-period">
                every 6 months · £15.83/mo
              </span>
              <p className="snail-plan-desc">
                Half a year of handmade post, wrapped in botanically-dyed linen.
              </p>
            </div>
            <div className="snail-plan-card snail-plan-featured is-active" data-plan="12 Months" data-price="12.42" data-total="149" data-term="12" data-prepay="true" data-desc="A full year of slow post — twelve parcels, opened with a hand-thrown clay inkwell.">
              <span className="snail-featured-ribbon">
                Best value
              </span>
              <div className="plan-wax-seal">
                <div className="wax-seal gold" style={{ position: "static", transform: "none", width: "32px", height: "32px" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" />
                  </svg>
                </div>
              </div>
              <span className="snail-plan-term">
                12 Months
              </span>
              <span className="snail-plan-tag tag-prepay">
                Auto-renews
              </span>
              <div className="snail-plan-price">
                £149
              </div>
              <span className="snail-plan-period">
                every year · £12.42/mo
              </span>
              <span className="snail-plan-saving">
                A year full of surprises
              </span>
              <p className="snail-plan-desc">
                A full year of slow post — twelve parcels, opened with a hand-thrown clay inkwell.
              </p>
            </div>
          </div>
          <div className="snail-plans-footer">
            <div className="snail-selected-summary" id="snail-selected-summary">
              
                Selected: 
              <strong>
                12 Months
              </strong>
               &middot; 
              <strong>
                £149 / year
              </strong>
               (£12.42/mo) &middot; auto-renews
                
              <p style={{ fontSize: "0.85rem", color: "var(--mist,#6b5b49)", marginTop: "6px", fontFamily: "'EB Garamond',sans-serif", fontStyle: "normal" }} id="snail-selected-desc">
                A full year of slow post — twelve parcels, opened with a hand-thrown clay inkwell. Our very best value.
              </p>
            </div>
            <button className="button button-primary" type="button" id="snail-subscribe-btn">
              Step into the Club
            </button>
          </div>
        </section>
      </div>
      <section className="snail-peek-section reveal">
        <h2 className="text-center snail-section-title">
          Peek inside the last letter
        </h2>
        <p className="text-center snail-section-sub">
          A few lines from June's envelope — read it over my shoulder, the way it lands on a kitchen table before it ever reaches your door.
        </p>
        <div className="snail-peek-letter" id="snail-peek-letter">
          <div className="snail-peek-paper">
            <span className="snail-peek-tape" aria-hidden="true"></span>
            <span className="snail-peek-stamp" aria-hidden="true">
              <svg viewBox="0 0 120 140">
                <use href="#art-stamp" filter="url(#rough)" />
              </svg>
            </span>
            <span className="snail-peek-postmark" aria-hidden="true">
              <span className="pm-arc">
                · Ubhi Post ·
              </span>
              <span className="pm-vol">
                Vol.06
              </span>
              <span className="pm-arc">
                London · Jun
              </span>
            </span>
            <span className="snail-peek-vol">
              Vol. 06 · Muddy Blossoms
            </span>
            <div className="snail-peek-excerpt">
              <p className="snail-peek-lede">
                The lotus does not resent the mud. It needs it — roots itself in the dark, the heavy, the unlovely — and only then learns how to rise.
              </p>
              <p className="snail-peek-more">
                So this month I kept asking a gentler question of my own difficult days: not 
                <em>
                  how do I escape the mud
                </em>
                , but 
                <em>
                  what is it quietly trying to grow
                </em>
                ? I drew the answer more than I wrote it. You'll find the pressed bloom tucked into the second fold, and a small terracotta weight to hold while you sit with the thought.
              </p>
            </div>
            <span className="snail-peek-sign">
              — with presence, Chelsea
            </span>
            <span className="snail-peek-fold" aria-hidden="true"></span>
            <span className="snail-peek-bloom" aria-hidden="true">
              <svg viewBox="0 0 64 64">
                <use href="#art-lotus" filter="url(#rough)" />
              </svg>
            </span>
            <span className="snail-peek-weight" aria-hidden="true">
              <svg viewBox="0 0 64 56" fill="none">
                <path d="M14 50 C10 36 18 22 32 22 C46 22 54 36 50 50 Z" fill="rgba(160,78,46,0.9)" stroke="#7c3a25" strokeWidth="1.2" />
                <ellipse cx="32" cy="22" rx="18" ry="5" fill="#9c4a2e" stroke="#7c3a25" strokeWidth="1.2" />
                <path d="M22 30 C28 33 36 33 42 30" stroke="rgba(255,236,222,0.4)" strokeWidth="1" />
              </svg>
            </span>
            <div className="snail-marginalia note-top-right snail-peek-note">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ marginBottom: "4px" }}>
                <path d="M12 2L15 8L22 9L17 14L18 21L12 17L6 21L7 14L2 9L9 8L12 2Z" />
              </svg>
              <div>
                drew this one more than I wrote it.
              </div>
            </div>
            <div className="snail-marginalia note-bottom-left snail-peek-note">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M5,10 Q20,18 35,10" />
                <path d="M30,5 L35,10 L30,15" />
              </svg>
              <div>
                pressed bloom · second fold
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="snail-archive-section reveal">
        <h2 className="text-center" style={{ fontFamily: "'Fraunces',serif", fontStyle: "italic", fontWeight: "300", marginBottom: "8px", color: "var(--stardust-full)" }}>
          Letters we have sent into the world
        </h2>
        <p className="text-center" style={{ color: "var(--stardust)", fontSize: "0.95rem", maxWidth: "560px", margin: "0 auto 28px auto", fontFamily: "'EB Garamond',sans-serif", lineHeight: "1.6" }}>
          Every envelope is a slow-crafted blessing, block-pressed by hand and written in moments of quiet presence. Here is a personal visual archive of the resonance, art, and rituals we have shared directly with your hands over the past twelve moons. Tap any snapshot to view closer.
        </p>
        <div className="snail-photos-container" id="snail-photos-carousel-container">
          <div className="snail-photos-track">
            <div className="gallery-item snail-photo-card snail-rot-left-1">
              <img src="assets/ubhi-snail-mail-generated.png" loading="lazy" decoding="async" alt="January — Volume 01: AUM" />
              <div className="snail-photo-caption">
                January — Vol. 01: AUM ॐ
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-right-1">
              <img src="assets/gallery-block-print.png" loading="lazy" decoding="async" alt="February — Volume 02: Prana" />
              <div className="snail-photo-caption">
                February — Vol. 02: Prana 🌀
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-left-2">
              <img src="assets/gallery-geometry-draw.png" loading="lazy" decoding="async" alt="March — Volume 03: Lotus" />
              <div className="snail-photo-caption">
                March — Vol. 03: Lotus 🪷
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-right-2">
              <img src="assets/gallery-yoga-breath.png" loading="lazy" decoding="async" alt="April — Volume 04: Prithvi" />
              <div className="snail-photo-caption">
                April — Vol. 04: Prithvi 🌍
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-zero">
              <img src="assets/ubhi-workshop-generated.png" loading="lazy" decoding="async" alt="May — Volume 05: Vayu" />
              <div className="snail-photo-caption">
                May — Vol. 05: Vayu 🌬️
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-left-1">
              <img src="assets/ubhi-snail-mail-generated.png" loading="lazy" decoding="async" alt="June — Volume 06: Akasha" />
              <div className="snail-photo-caption">
                June — Vol. 06: Akasha ✨
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-right-1">
              <img src="assets/gallery-block-print.png" loading="lazy" decoding="async" alt="July — Volume 07: Agni" />
              <div className="snail-photo-caption">
                July — Vol. 07: Agni 🔥
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-left-2">
              <img src="assets/gallery-geometry-draw.png" loading="lazy" decoding="async" alt="August — Volume 08: Jala" />
              <div className="snail-photo-caption">
                August — Vol. 08: Jala 🌊
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-right-2">
              <img src="assets/gallery-yoga-breath.png" loading="lazy" decoding="async" alt="September — Volume 09: Tejas" />
              <div className="snail-photo-caption">
                September — Vol. 09: Tejas ☀️
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-zero">
              <img src="assets/ubhi-workshop-generated.png" loading="lazy" decoding="async" alt="October — Volume 10: Ojas" />
              <div className="snail-photo-caption">
                October — Vol. 10: Ojas 🍯
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-left-1">
              <img src="assets/ubhi-snail-mail-generated.png" loading="lazy" decoding="async" alt="November — Volume 11: Soma" />
              <div className="snail-photo-caption">
                November — Vol. 11: Soma 🌙
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-right-1">
              <img src="assets/gallery-block-print.png" loading="lazy" decoding="async" alt="December — Volume 12: Dhyana" />
              <div className="snail-photo-caption">
                December — Vol. 12: Dhyana 🧘
              </div>
            </div>
          </div>
          <div className="snail-photos-track" aria-hidden="true">
            <div className="gallery-item snail-photo-card snail-rot-left-1">
              <img src="assets/ubhi-snail-mail-generated.png" loading="lazy" decoding="async" alt="January — Volume 01: AUM" />
              <div className="snail-photo-caption">
                January — Vol. 01: AUM ॐ
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-right-1">
              <img src="assets/gallery-block-print.png" loading="lazy" decoding="async" alt="February — Volume 02: Prana" />
              <div className="snail-photo-caption">
                February — Vol. 02: Prana 🌀
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-left-2">
              <img src="assets/gallery-geometry-draw.png" loading="lazy" decoding="async" alt="March — Volume 03: Lotus" />
              <div className="snail-photo-caption">
                March — Vol. 03: Lotus 🪷
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-right-2">
              <img src="assets/gallery-yoga-breath.png" loading="lazy" decoding="async" alt="April — Volume 04: Prithvi" />
              <div className="snail-photo-caption">
                April — Vol. 04: Prithvi 🌍
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-zero">
              <img src="assets/ubhi-workshop-generated.png" loading="lazy" decoding="async" alt="May — Volume 05: Vayu" />
              <div className="snail-photo-caption">
                May — Vol. 05: Vayu 🌬️
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-left-1">
              <img src="assets/ubhi-snail-mail-generated.png" loading="lazy" decoding="async" alt="June — Volume 06: Akasha" />
              <div className="snail-photo-caption">
                June — Vol. 06: Akasha ✨
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-right-1">
              <img src="assets/gallery-block-print.png" loading="lazy" decoding="async" alt="July — Volume 07: Agni" />
              <div className="snail-photo-caption">
                July — Vol. 07: Agni 🔥
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-left-2">
              <img src="assets/gallery-geometry-draw.png" loading="lazy" decoding="async" alt="August — Volume 08: Jala" />
              <div className="snail-photo-caption">
                August — Vol. 08: Jala 🌊
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-right-2">
              <img src="assets/gallery-yoga-breath.png" loading="lazy" decoding="async" alt="September — Volume 09: Tejas" />
              <div className="snail-photo-caption">
                September — Vol. 09: Tejas ☀️
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-zero">
              <img src="assets/ubhi-workshop-generated.png" loading="lazy" decoding="async" alt="October — Volume 10: Ojas" />
              <div className="snail-photo-caption">
                October — Vol. 10: Ojas 🍯
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-left-1">
              <img src="assets/ubhi-snail-mail-generated.png" loading="lazy" decoding="async" alt="November — Volume 11: Soma" />
              <div className="snail-photo-caption">
                November — Vol. 11: Soma 🌙
              </div>
            </div>
            <div className="gallery-item snail-photo-card snail-rot-right-1">
              <img src="assets/gallery-block-print.png" loading="lazy" decoding="async" alt="December — Volume 12: Dhyana" />
              <div className="snail-photo-caption">
                December — Vol. 12: Dhyana 🧘
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="snail-testimonials-section reveal">
        <h2 className="text-center" style={{ fontFamily: "'Fraunces',serif", fontStyle: "italic", fontWeight: "300", marginBottom: "8px", color: "var(--stardust-full)" }}>
          Notes back from the letterbox
        </h2>
        <p className="text-center" style={{ color: "var(--stardust)", fontSize: "0.95rem", maxWidth: "540px", margin: "0 auto 28px auto", fontFamily: "'EB Garamond',sans-serif", lineHeight: "1.6" }}>
          A collection of handwritten reviews, stamps of presence, and notes of resonance sent back to us from our dear members.
        </p>
        <div className="snail-reviews-container" id="snail-reviews-carousel-container">
          <div className="snail-reviews-track">
            <div className="snail-review-card snail-rot-left-1">
              <div className="snail-review-left">
                <p className="snail-review-text">
                  "Opening this envelope has become my sacred monthly ritual. The smell of cedar, the weight of the cotton paper... my nervous system settles instantly."
                </p>
                <span className="snail-review-author">
                  — Eleanor K. 🌿
                </span>
              </div>
              <div className="snail-review-right">
                <div className="snail-review-stamp">
                  🪷
                </div>
                <div className="snail-review-lines">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="snail-review-card snail-rot-right-1">
              <div className="snail-review-left">
                <p className="snail-review-text">
                  "In a world of spam and infinite scroll, receiving a letter written with deep focus, alongside a gorgeous print, is the most meaningful item on my desk."
                </p>
                <span className="snail-review-author">
                  — James W. ✨
                </span>
              </div>
              <div className="snail-review-right">
                <div className="snail-review-stamp">
                  💌
                </div>
                <div className="snail-review-lines">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="snail-review-card snail-rot-left-2">
              <div className="snail-review-left">
                <p className="snail-review-text">
                  "The sacred yantra drawings help me anchor my morning meditations. Having a physical piece of philosophy in my hands is a gamechanger."
                </p>
                <span className="snail-review-author">
                  — Maya R. 🧘
                </span>
              </div>
              <div className="snail-review-right">
                <div className="snail-review-stamp">
                  🌀
                </div>
                <div className="snail-review-lines">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="snail-review-card snail-rot-right-2">
              <div className="snail-review-left">
                <p className="snail-review-text">
                  "A masterclass in slow living. The organic incense blocks and handwritten reflections feel like a warm, supportive hug from a dear friend."
                </p>
                <span className="snail-review-author">
                  — Thomas H. 🌙
                </span>
              </div>
              <div className="snail-review-right">
                <div className="snail-review-stamp">
                  🕯️
                </div>
                <div className="snail-review-lines">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="snail-review-card snail-rot-zero">
              <div className="snail-review-left">
                <p className="snail-review-text">
                  "Breaking the gold wax seal on the envelope brings back the magic of tactile mail. An absolute highlight of my month."
                </p>
                <span className="snail-review-author">
                  — Sophia L. ॐ
                </span>
              </div>
              <div className="snail-review-right">
                <div className="snail-review-stamp">
                  🌸
                </div>
                <div className="snail-review-lines">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="snail-review-card snail-rot-left-1">
              <div className="snail-review-left">
                <p className="snail-review-text">
                  "It's not a box of commercial items; it's art, mindfulness, and sacred geometry in its purest, most luxurious form. I cherish every edition."
                </p>
                <span className="snail-review-author">
                  — Liam D. 🎨
                </span>
              </div>
              <div className="snail-review-right">
                <div className="snail-review-stamp">
                  🌿
                </div>
                <div className="snail-review-lines">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="snail-reviews-track" aria-hidden="true">
            <div className="snail-review-card snail-rot-left-1">
              <div className="snail-review-left">
                <p className="snail-review-text">
                  "Opening this envelope has become my sacred monthly ritual. The smell of cedar, the weight of the cotton paper... my nervous system settles instantly."
                </p>
                <span className="snail-review-author">
                  — Eleanor K. 🌿
                </span>
              </div>
              <div className="snail-review-right">
                <div className="snail-review-stamp">
                  🪷
                </div>
                <div className="snail-review-lines">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="snail-review-card snail-rot-right-1">
              <div className="snail-review-left">
                <p className="snail-review-text">
                  "In a world of spam and infinite scroll, receiving a letter written with deep focus, alongside a gorgeous print, is the most meaningful item on my desk."
                </p>
                <span className="snail-review-author">
                  — James W. ✨
                </span>
              </div>
              <div className="snail-review-right">
                <div className="snail-review-stamp">
                  💌
                </div>
                <div className="snail-review-lines">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="snail-review-card snail-rot-left-2">
              <div className="snail-review-left">
                <p className="snail-review-text">
                  "The sacred yantra drawings help me anchor my morning meditations. Having a physical piece of philosophy in my hands is a gamechanger."
                </p>
                <span className="snail-review-author">
                  — Maya R. 🧘
                </span>
              </div>
              <div className="snail-review-right">
                <div className="snail-review-stamp">
                  🌀
                </div>
                <div className="snail-review-lines">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="snail-review-card snail-rot-right-2">
              <div className="snail-review-left">
                <p className="snail-review-text">
                  "A masterclass in slow living. The organic incense blocks and handwritten reflections feel like a warm, supportive hug from a dear friend."
                </p>
                <span className="snail-review-author">
                  — Thomas H. 🌙
                </span>
              </div>
              <div className="snail-review-right">
                <div className="snail-review-stamp">
                  🕯️
                </div>
                <div className="snail-review-lines">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="snail-review-card snail-rot-zero">
              <div className="snail-review-left">
                <p className="snail-review-text">
                  "Breaking the gold wax seal on the envelope brings back the magic of tactile mail. An absolute highlight of my month."
                </p>
                <span className="snail-review-author">
                  — Sophia L. ॐ
                </span>
              </div>
              <div className="snail-review-right">
                <div className="snail-review-stamp">
                  🌸
                </div>
                <div className="snail-review-lines">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="snail-review-card snail-rot-left-1">
              <div className="snail-review-left">
                <p className="snail-review-text">
                  "It's not a box of commercial items; it's art, mindfulness, and sacred geometry in its purest, most luxurious form. I cherish every edition."
                </p>
                <span className="snail-review-author">
                  — Liam D. 🎨
                </span>
              </div>
              <div className="snail-review-right">
                <div className="snail-review-stamp">
                  🌿
                </div>
                <div className="snail-review-lines">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="snail-modal" className="modal-overlay" role="dialog" aria-modal="true" aria-hidden="true">
        <div className="modal-panel glass-panel">
          <button className="modal-close" type="button" id="snail-modal-close-btn" aria-label="Close modal">
            &times;
          </button>
          <div id="snail-step-delivery" className="modal-step is-active">
            <h2 className="modal-title">
              Shipping Address
            </h2>
            <p className="step-intro">
              Where should we deliver your monthly philosophy package?
            </p>
            <div className="modal-summary-panel" style={{ marginBottom: "20px" }}>
              <span>
                Selected Plan:
              </span>
              <strong id="snail-modal-plan-name">
                12 Months · prepaid
              </strong>
              <span id="snail-modal-plan-price">
                £149 today
              </span>
            </div>
            <form id="modal-snail-form" autoComplete="on">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="snail-name-input">
                    Full name
                  </label>
                  <input type="text" id="snail-name-input" required placeholder="Elena Rostova" />
                </div>
                <div className="form-group">
                  <label htmlFor="snail-email-input">
                    Email address
                  </label>
                  <input type="email" id="snail-email-input" required placeholder="elena@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="snail-mobile-input">
                  Mobile number
                </label>
                <input type="tel" id="snail-mobile-input" autoComplete="tel" inputMode="tel" required placeholder="e.g. 07123 456789" />
              </div>
              <div className="form-group">
                <label htmlFor="snail-address-input">
                  Street address
                </label>
                <input type="text" id="snail-address-input" required placeholder="12 Larkspur Lane" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="snail-city-input">
                    City
                  </label>
                  <input type="text" id="snail-city-input" required placeholder="Bath" />
                </div>
                <div className="form-group">
                  <label htmlFor="snail-postcode-input">
                    Postcode
                  </label>
                  <input type="text" id="snail-postcode-input" required placeholder="BA1 2QY" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="snail-country-input">
                  Country
                </label>
                <input type="text" id="snail-country-input" required defaultValue="United Kingdom" />
              </div>
              <div className="form-group" style={{ marginTop: "6px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", fontWeight: "600" }}>
                  <input type="checkbox" id="snail-gift-toggle" style={{ width: "auto", flex: "0 0 auto", margin: "0" }} />
                  <span>
                    🎁 This is a gift for someone
                  </span>
                </label>
              </div>
              <div id="snail-gift-fields" style={{ display: "none" }}>
                <div className="form-group" id="snail-gift-term-group">
                  <label>
                    Gift length
                  </label>
                  <p style={{ fontSize: "0.8rem", color: "var(--mist)", lineHeight: "1.5", margin: "0 0 10px" }}>
                    A gift is always prepaid for its full term. Choose how many months you'd like to send.
                  </p>
                  <div className="snail-gift-term-options" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <label className="snail-gift-term-option" style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontWeight: "500" }}>
                      <input type="radio" name="snail-gift-term" value="3" style={{ width: "auto", flex: "0 0 auto", margin: "0" }} />
                      <span>
                        3 months · £49
                      </span>
                    </label>
                    <label className="snail-gift-term-option" style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontWeight: "500" }}>
                      <input type="radio" name="snail-gift-term" value="6" defaultChecked style={{ width: "auto", flex: "0 0 auto", margin: "0" }} />
                      <span>
                        6 months · £95
                      </span>
                    </label>
                    <label className="snail-gift-term-option" style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontWeight: "500" }}>
                      <input type="radio" name="snail-gift-term" value="12" style={{ width: "auto", flex: "0 0 auto", margin: "0" }} />
                      <span>
                        12 months · £149
                      </span>
                    </label>
                  </div>
                </div>
                <p style={{ fontSize: "0.8rem", color: "var(--mist)", lineHeight: "1.5", margin: "0 0 12px" }}>
                  Parcels are posted to the 
                  <strong>
                    delivery address above
                  </strong>
                   — enter your recipient's address there to send it straight to them, or your own if you'd like to pass it on. Tell us who it's for and we'll include your note with the first letter.
                </p>
                <div className="form-group">
                  <label htmlFor="snail-gift-name">
                    Recipient's name
                  </label>
                  <input type="text" id="snail-gift-name" placeholder="Priya Sharma" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="snail-gift-email">
                      Recipient's email 
                      <span style={{ color: "var(--mist)", fontWeight: "400" }}>
                        (optional)
                      </span>
                    </label>
                    <input type="email" id="snail-gift-email" placeholder="priya@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="snail-gift-start">
                      Start the gift on
                    </label>
                    <input type="date" id="snail-gift-start" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="snail-gift-message">
                    Your gift message
                  </label>
                  <textarea id="snail-gift-message" rows="2" placeholder="A letter a month, with love ✦"></textarea>
                </div>
              </div>
              <div className="modal-actions" style={{ marginTop: "24px" }}>
                <button className="button button-primary" type="button" id="snail-to-payment-btn">
                  Continue to Payment
                </button>
              </div>
            </form>
          </div>
          <div id="snail-step-payment" className="modal-step">
            <h2 className="modal-title">
              Secure Checkout
            </h2>
            <p className="step-intro">
              Your details are encrypted with bank-grade security.
            </p>
            <div className="modal-summary-panel" style={{ marginBottom: "20px" }}>
              <span id="snail-payment-label">
                Total today:
              </span>
              <strong id="snail-payment-amount">
                £149 today
              </strong>
              <span id="snail-payment-subline" style={{ color: "var(--aurora-teal)", fontSize: "0.75rem", fontWeight: "600", letterSpacing: "0.05em", textTransform: "uppercase", display: "block", marginTop: "4px" }}>
                then nothing for 12 months
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="snail-card-name">
                Cardholder name
              </label>
              <input type="text" id="snail-card-name" required placeholder="Elena Rostova" />
            </div>
            <div className="form-group">
              <label htmlFor="snail-card-number">
                Card number
              </label>
              <input type="text" id="snail-card-number" required placeholder="4111 •••• •••• ••••" pattern="[\\d\\s]{19}" maxLength="19" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="snail-card-expiry">
                  Expiry date
                </label>
                <input type="text" id="snail-card-expiry" required placeholder="MM / YY" pattern="\\d{2}\\s\\/\\s\\d{2}" maxLength="7" />
              </div>
              <div className="form-group">
                <label htmlFor="snail-card-cvc">
                  CVC
                </label>
                <input type="text" id="snail-card-cvc" required placeholder="•••" pattern="\\d{3}" maxLength="3" />
              </div>
            </div>
            <div className="modal-actions" style={{ marginTop: "24px" }}>
              <button className="button button-secondary" type="button" id="snail-back-btn">
                Back
              </button>
              <button className="button button-primary" type="button" id="snail-submit-btn">
                Begin Subscription
              </button>
            </div>
          </div>
          <div id="snail-step-success" className="modal-step text-center">
            <div className="success-seal-wrap" style={{ marginBottom: "24px", display: "flex", justifyContent: "center" }}>
              <div className="wax-seal gold" style={{ position: "static", transform: "none", width: "64px", height: "64px" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" />
                </svg>
              </div>
            </div>
            <h2 className="modal-title">
              Welcome to the Club 🌀
            </h2>
            <p id="snail-success-msg" style={{ maxWidth: "440px", margin: "0 auto 24px auto", lineHeight: "1.6" }}>
              
                Thank you, Elena. Your first Snail Mail package is being prepared with quiet care.
              
            </p>
            <button className="button button-primary" type="button" id="snail-success-close-btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="page-art" className="page">
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
            <a href="#contact" data-page-link="contact">
              get in touch
            </a>
            .
          </p>
        </div>
        <div className="art-portfolio-grid" id="art-portfolio-container"></div>
      </section>
    </div>
    <div id="page-journal" className="page">
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
            Journal
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
            <article className="journal-card reveal" data-journal-id="0">
              <div className="journal-card-art gold" aria-hidden="true">
                <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
                  <circle cx="80" cy="80" r="76" stroke="rgba(201,151,42,0.35)" strokeWidth="0.6" />
                  <circle cx="80" cy="80" r="50" stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" />
                  <circle cx="80" cy="80" r="25" stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" />
                  <polygon points="80,14 138,116 22,116" stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" fill="rgba(201,151,42,0.04)" />
                  <polygon points="80,146 138,44 22,44" stroke="rgba(181,96,122,0.3)" strokeWidth="0.6" fill="none" />
                  <circle cx="80" cy="80" r="5" fill="rgba(201,151,42,0.6)" />
                </svg>
              </div>
              <div className="journal-card-body">
                <p className="journal-card-meta">
                  <span className="tag">
                    Philosophy
                  </span>
                   · June 2026
                </p>
                <h3>
                  AUM &amp; the Science of Sound
                </h3>
                <p>
                  From the Big Bang's primordial frequency to the vibration of your own vocal cords, AUM is mathematics.
                </p>
                <div className="journal-card-footer">
                  <span className="preview-card-link">
                    Read slowly →
                  </span>
                </div>
              </div>
            </article>
            <article className="journal-card reveal" data-journal-id="1">
              <div className="journal-card-art gold" aria-hidden="true">
                <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
                  <circle cx="80" cy="80" r="76" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
                  <circle cx="80" cy="22" r="58" stroke="rgba(201,151,42,0.1)" strokeWidth="0.4" />
                  <circle cx="130" cy="51" r="58" stroke="rgba(201,151,42,0.1)" strokeWidth="0.4" />
                  <circle cx="130" cy="109" r="58" stroke="rgba(201,151,42,0.1)" strokeWidth="0.4" />
                  <circle cx="80" cy="138" r="58" stroke="rgba(201,151,42,0.1)" strokeWidth="0.4" />
                  <circle cx="30" cy="109" r="58" stroke="rgba(201,151,42,0.1)" strokeWidth="0.4" />
                  <circle cx="30" cy="51" r="58" stroke="rgba(201,151,42,0.1)" strokeWidth="0.4" />
                  <circle cx="80" cy="80" r="8" stroke="rgba(201,151,42,0.5)" strokeWidth="0.6" />
                  <circle cx="80" cy="80" r="3" fill="rgba(201,151,42,0.6)" />
                </svg>
              </div>
              <div className="journal-card-body">
                <p className="journal-card-meta">
                  <span className="tag">
                    Geometry
                  </span>
                   · May 2026
                </p>
                <h3>
                  Sacred Geometry: Patterns That Think
                </h3>
                <p>
                  Why do the same proportions appear in seashells, galaxy spirals, and temple architecture?
                </p>
                <div className="journal-card-footer">
                  <span className="preview-card-link">
                    Read slowly →
                  </span>
                </div>
              </div>
            </article>
            <article className="journal-card reveal" data-journal-id="2">
              <div className="journal-card-art teal" aria-hidden="true">
                <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
                  <rect x="20" y="20" width="120" height="120" stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" fill="none" />
                  <rect x="40" y="40" width="80" height="80" stroke="rgba(45,139,124,0.28)" strokeWidth="0.5" fill="none" transform="rotate(45 80 80)" />
                  <circle cx="80" cy="80" r="40" stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" />
                  <circle cx="80" cy="80" r="18" stroke="rgba(45,139,124,0.5)" strokeWidth="0.6" />
                  <circle cx="80" cy="80" r="5" fill="rgba(45,139,124,0.6)" />
                </svg>
              </div>
              <div className="journal-card-body">
                <p className="journal-card-meta">
                  <span className="tag">
                    Craft
                  </span>
                   · May 2026
                </p>
                <h3>
                  Why We Print by Hand
                </h3>
                <p>
                  There is something that happens between the roller, the ink, and the paper. A conversation with matter.
                </p>
                <div className="journal-card-footer">
                  <span className="preview-card-link">
                    Read slowly →
                  </span>
                </div>
              </div>
            </article>
            <article className="journal-card reveal" data-journal-id="3">
              <div className="journal-card-art rose" aria-hidden="true">
                <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
                  <path d="M80 16C50 40 16 52 16 80C16 108 50 120 80 144C110 120 144 108 144 80C144 52 110 40 80 16Z" stroke="rgba(181,96,122,0.4)" strokeWidth="0.6" fill="rgba(181,96,122,0.05)" />
                  <path d="M80 32C56 52 32 60 32 80C32 100 56 108 80 128C104 108 128 100 128 80C128 60 104 52 80 32Z" stroke="rgba(181,96,122,0.3)" strokeWidth="0.5" fill="none" />
                  <circle cx="80" cy="80" r="18" stroke="rgba(181,96,122,0.5)" strokeWidth="0.6" />
                  <circle cx="80" cy="80" r="5" fill="rgba(181,96,122,0.6)" />
                </svg>
              </div>
              <div className="journal-card-body">
                <p className="journal-card-meta">
                  <span className="tag">
                    Breathwork
                  </span>
                   · April 2026
                </p>
                <h3>
                  Pranayama &amp; the Vagus Nerve
                </h3>
                <p>
                  Modern science has finally caught up. The breath is the only autonomic function we consciously control.
                </p>
                <div className="journal-card-footer">
                  <span className="preview-card-link">
                    Read slowly →
                  </span>
                </div>
              </div>
            </article>
            <article className="journal-card reveal" data-journal-id="4">
              <div className="journal-card-art gold" aria-hidden="true">
                <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
                  <line x1="80" y1="8" x2="80" y2="152" stroke="rgba(201,151,42,0.35)" strokeWidth="0.5" />
                  <line x1="8" y1="80" x2="152" y2="80" stroke="rgba(201,151,42,0.35)" strokeWidth="0.5" />
                  <line x1="24" y1="24" x2="136" y2="136" stroke="rgba(201,151,42,0.28)" strokeWidth="0.5" />
                  <line x1="136" y1="24" x2="24" y2="136" stroke="rgba(201,151,42,0.28)" strokeWidth="0.5" />
                  <circle cx="80" cy="80" r="72" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
                  <circle cx="80" cy="80" r="44" stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" />
                  <circle cx="80" cy="80" r="18" stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" />
                  <circle cx="80" cy="80" r="5" fill="rgba(201,151,42,0.6)" />
                </svg>
              </div>
              <div className="journal-card-body">
                <p className="journal-card-meta">
                  <span className="tag">
                    Philosophy
                  </span>
                   · March 2026
                </p>
                <h3>
                  The Philosophy of Slow Making
                </h3>
                <p>
                  Speed produces output. Slowness produces meaning. When we make things with full attention, we settle.
                </p>
                <div className="journal-card-footer">
                  <span className="preview-card-link">
                    Read slowly →
                  </span>
                </div>
              </div>
            </article>
            <article className="journal-card reveal" data-journal-id="5">
              <div className="journal-card-art teal" aria-hidden="true">
                <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
                  <ellipse cx="80" cy="105" rx="55" ry="22" stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" fill="none" />
                  <ellipse cx="80" cy="80" rx="40" ry="55" stroke="rgba(45,139,124,0.28)" strokeWidth="0.5" fill="none" />
                  <ellipse cx="80" cy="80" rx="55" ry="40" stroke="rgba(45,139,124,0.28)" strokeWidth="0.5" fill="none" transform="rotate(60 80 80)" />
                  <ellipse cx="80" cy="80" rx="55" ry="40" stroke="rgba(45,139,124,0.28)" strokeWidth="0.5" fill="none" transform="rotate(120 80 80)" />
                  <circle cx="80" cy="80" r="10" stroke="rgba(45,139,124,0.5)" strokeWidth="0.6" />
                  <circle cx="80" cy="80" r="4" fill="rgba(45,139,124,0.6)" />
                </svg>
              </div>
              <div className="journal-card-body">
                <p className="journal-card-meta">
                  <span className="tag">
                    Yoga
                  </span>
                   · March 2026
                </p>
                <h3>
                  What Yoga Actually Means
                </h3>
                <p>
                  Yoga is not a posture. It is not fitness. The word means union — a coming together of the fragmented.
                </p>
                <div className="journal-card-footer">
                  <span className="preview-card-link">
                    Read slowly →
                  </span>
                </div>
              </div>
            </article>
            <article className="journal-card reveal" data-journal-id="6">
              <div className="journal-card-art gold" aria-hidden="true">
                <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
                  <circle cx="80" cy="80" r="72" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
                  <circle cx="80" cy="80" r="40" stroke="rgba(201,151,42,0.15)" strokeWidth="0.5" strokeDasharray="3 3" />
                  <circle cx="80" cy="80" r="10" stroke="rgba(201,151,42,0.5)" strokeWidth="0.6" />
                  <path d="M 76 65 A 15 15 0 0 0 84 79 A 13 13 0 0 1 76 65" fill="rgba(201,151,42,0.3)" stroke="rgba(201,151,42,0.4)" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="journal-card-body">
                <p className="journal-card-meta">
                  <span className="tag">
                    Philosophy
                  </span>
                   · February 2026
                </p>
                <h3>
                  The Geometry of Silence
                </h3>
                <p>
                  Silence is not empty; it is the space where structure begins. The boundary between noise, quiet, and voids.
                </p>
                <div className="journal-card-footer">
                  <span className="preview-card-link">
                    Read slowly →
                  </span>
                </div>
              </div>
            </article>
            <article className="journal-card reveal" data-journal-id="7">
              <div className="journal-card-art rose" aria-hidden="true">
                <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
                  <rect x="25" y="45" width="110" height="70" rx="4" stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" />
                  <path d="M25 45 L80 85 L135 45" stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" />
                  <circle cx="80" cy="85" r="14" fill="rgba(181,96,122,0.2)" stroke="rgba(181,96,122,0.5)" strokeWidth="0.8" />
                  <circle cx="80" cy="85" r="6" fill="rgba(181,96,122,0.6)" />
                </svg>
              </div>
              <div className="journal-card-body">
                <p className="journal-card-meta">
                  <span className="tag">
                    Craft
                  </span>
                   · January 2026
                </p>
                <h3>
                  Rituals of the Wax Seal
                </h3>
                <p>
                  Melted wax, a brass stamp, and a heavy envelope. Sealing is a commitment to slow communication.
                </p>
                <div className="journal-card-footer">
                  <span className="preview-card-link">
                    Read slowly →
                  </span>
                </div>
              </div>
            </article>
            <article className="journal-card reveal" data-journal-id="8">
              <div className="journal-card-art teal" aria-hidden="true">
                <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
                  <path d="M55,30 Q80,25 105,30 L95,65 Q115,100 95,135 Q80,140 65,135 Q45,100 65,65 Z" stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" fill="rgba(45,139,124,0.03)" />
                  <ellipse cx="80" cy="30" rx="25" ry="6" stroke="rgba(45,139,124,0.4)" strokeWidth="0.5" />
                  <circle cx="80" cy="85" r="12" stroke="rgba(45,139,124,0.25)" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="journal-card-body">
                <p className="journal-card-meta">
                  <span className="tag">
                    Somatic
                  </span>
                   · December 2025
                </p>
                <h3>
                  The Alchemy of Clay
                </h3>
                <p>
                  Sitting at the potter's wheel is a lesson in posture, gravity, and response. Centering is a dynamic state.
                </p>
                <div className="journal-card-footer">
                  <span className="preview-card-link">
                    Read slowly →
                  </span>
                </div>
              </div>
            </article>
            <article className="journal-card reveal" data-journal-id="9">
              <div className="journal-card-art gold" aria-hidden="true">
                <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
                  <line x1="30" y1="30" x2="130" y2="30" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                  <line x1="30" y1="50" x2="130" y2="50" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                  <line x1="30" y1="70" x2="130" y2="70" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                  <line x1="30" y1="90" x2="130" y2="90" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                  <line x1="30" y1="110" x2="130" y2="110" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                  <line x1="30" y1="130" x2="130" y2="130" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                  <line x1="30" y1="30" x2="30" y2="130" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                  <line x1="50" y1="30" x2="50" y2="130" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                  <line x1="70" y1="30" x2="70" y2="130" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                  <line x1="90" y1="30" x2="90" y2="130" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                  <line x1="110" y1="30" x2="110" y2="130" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                  <line x1="130" y1="30" x2="130" y2="130" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                  <path d="M80 68 L82 77 L90 80 L82 83 L80 92 L78 83 L70 80 L78 77 Z" fill="rgba(201,151,42,0.45)" />
                </svg>
              </div>
              <div className="journal-card-body">
                <p className="journal-card-meta">
                  <span className="tag">
                    Geometry
                  </span>
                   · November 2025
                </p>
                <h3>
                  The Weaver's Path
                </h3>
                <p>
                  Weaving is the intersection of arithmetic and tactile grace, bringing repetitive shuttle passes into meditation.
                </p>
                <div className="journal-card-footer">
                  <span className="preview-card-link">
                    Read slowly →
                  </span>
                </div>
              </div>
            </article>
            <article className="journal-card reveal" data-journal-id="10">
              <div className="journal-card-art teal" aria-hidden="true">
                <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
                  <rect x="30" y="30" width="100" height="100" stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" />
                  <circle cx="80" cy="80" r="35" stroke="rgba(45,139,124,0.3)" strokeWidth="0.5" />
                  <line x1="30" y1="80" x2="130" y2="80" stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" />
                  <line x1="80" y1="30" x2="80" y2="130" stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" />
                  <polygon points="80,62 98,90 62,90" stroke="rgba(45,139,124,0.45)" strokeWidth="0.6" fill="rgba(45,139,124,0.05)" />
                </svg>
              </div>
              <div className="journal-card-body">
                <p className="journal-card-meta">
                  <span className="tag">
                    Craft
                  </span>
                   · October 2025
                </p>
                <h3>
                  Wood, Steel, and Ink
                </h3>
                <p>
                  Operating a letterpress is a conversation with antique machinery. The weight of physical type pressed in paper fibers.
                </p>
                <div className="journal-card-footer">
                  <span className="preview-card-link">
                    Read slowly →
                  </span>
                </div>
              </div>
            </article>
            <article className="journal-card reveal" data-journal-id="11">
              <div className="journal-card-art rose" aria-hidden="true">
                <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
                  <circle cx="80" cy="80" r="45" stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" />
                  <circle cx="80" cy="80" r="60" stroke="rgba(181,96,122,0.15)" strokeWidth="0.4" strokeDasharray="2 2" />
                  <path d="M80 10 L80 150 M10 80 L150 80 M30 30 L130 130 M130 30 L30 130" stroke="rgba(181,96,122,0.2)" strokeWidth="0.5" />
                  <circle cx="80" cy="80" r="10" fill="rgba(181,96,122,0.4)" />
                  <path d="M 100 20 A 10 10 0 0 0 110 30 A 8.6 8.6 0 0 1 100 20" fill="rgba(181,96,122,0.3)" stroke="rgba(181,96,122,0.4)" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="journal-card-body">
                <p className="journal-card-meta">
                  <span className="tag">
                    Somatic
                  </span>
                   · September 2025
                </p>
                <h3>
                  The Slow Light of June
                </h3>
                <p>
                  Solar photograms take time to absorb the sun. A reflection on chemical exposure, shadows, and patience.
                </p>
                <div className="journal-card-footer">
                  <span className="preview-card-link">
                    Read slowly →
                  </span>
                </div>
              </div>
            </article>
            <article className="journal-card reveal" data-journal-id="12">
              <div className="journal-card-art gold" aria-hidden="true">
                <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
                  <circle cx="80" cy="80" r="76" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
                  <circle cx="80" cy="80" r="52" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" strokeDasharray="2 2" />
                  <circle cx="80" cy="80" r="28" stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" />
                  <path d="M80 12 L80 148 M12 80 L148 80" stroke="rgba(201,151,42,0.15)" strokeWidth="0.5" />
                  <polygon points="80,40 115,80 80,120 45,80" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" fill="rgba(201,151,42,0.03)" />
                  <circle cx="80" cy="80" r="4" fill="rgba(201,151,42,0.5)" />
                </svg>
              </div>
              <div className="journal-card-body">
                <p className="journal-card-meta">
                  <span className="tag">
                    Philosophy
                  </span>
                   · August 2025
                </p>
                <h3>
                  The Medicine of Mud
                </h3>
                <p>
                  Mud is the raw material of creation. Touching the soil is a biological and somatic reunion.
                </p>
                <div className="journal-card-footer">
                  <span className="preview-card-link">
                    Read slowly →
                  </span>
                </div>
              </div>
            </article>
            <article className="journal-card reveal" data-journal-id="13">
              <div className="journal-card-art teal" aria-hidden="true">
                <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
                  <ellipse cx="80" cy="80" rx="72" ry="40" stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" />
                  <ellipse cx="80" cy="80" rx="52" ry="28" stroke="rgba(45,139,124,0.25)" strokeWidth="0.5" />
                  <ellipse cx="80" cy="80" rx="32" ry="16" stroke="rgba(45,139,124,0.4)" strokeWidth="0.6" />
                  <circle cx="80" cy="80" r="6" fill="rgba(45,139,124,0.6)" />
                  <line x1="80" y1="20" x2="80" y2="140" stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="journal-card-body">
                <p className="journal-card-meta">
                  <span className="tag">
                    Sound
                  </span>
                   · July 2025
                </p>
                <h3>
                  Acoustic Spaces &amp; Listening
                </h3>
                <p>
                  The space we inhabit changes how we speak, but more importantly, how we listen deeply.
                </p>
                <div className="journal-card-footer">
                  <span className="preview-card-link">
                    Read slowly →
                  </span>
                </div>
              </div>
            </article>
            <article className="journal-card reveal" data-journal-id="14">
              <div className="journal-card-art rose" aria-hidden="true">
                <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
                  <path d="M20,20 C50,80 110,80 140,140" stroke="rgba(181,96,122,0.4)" strokeWidth="0.8" />
                  <path d="M140,20 C110,80 50,80 20,140" stroke="rgba(181,96,122,0.3)" strokeWidth="0.5" />
                  <circle cx="80" cy="74" r="16" stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" />
                  <circle cx="80" cy="74" r="6" fill="rgba(181,96,122,0.6)" />
                  <line x1="80" y1="12" x2="80" y2="148" stroke="rgba(181,96,122,0.15)" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="journal-card-body">
                <p className="journal-card-meta">
                  <span className="tag">
                    Craft
                  </span>
                   · June 2025
                </p>
                <h3>
                  The Shadow of the Needle
                </h3>
                <p>
                  Hand-sewing is a practice in small measures, repairing cloth and the split attention of the mind.
                </p>
                <div className="journal-card-footer">
                  <span className="preview-card-link">
                    Read slowly →
                  </span>
                </div>
              </div>
            </article>
            <article className="journal-card reveal" data-journal-id="15">
              <div className="journal-card-art gold" aria-hidden="true">
                <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
                  <circle cx="80" cy="80" r="72" stroke="rgba(201,151,42,0.35)" strokeWidth="0.6" />
                  <polygon points="80,18 132,108 28,108" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
                  <polygon points="80,142 132,52 28,52" stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" />
                  <circle cx="80" cy="80" r="14" stroke="rgba(201,151,42,0.45)" strokeWidth="0.6" />
                  <circle cx="80" cy="80" r="4" fill="rgba(201,151,42,0.6)" />
                </svg>
              </div>
              <div className="journal-card-body">
                <p className="journal-card-meta">
                  <span className="tag">
                    Geometry
                  </span>
                   · May 2025
                </p>
                <h3>
                  Geometry of the Heart
                </h3>
                <p>
                  A circle requires a fixed center spike. Centering ourselves is the prerequisite for a balanced life.
                </p>
                <div className="journal-card-footer">
                  <span className="preview-card-link">
                    Read slowly →
                  </span>
                </div>
              </div>
            </article>
            <article className="journal-card reveal" data-journal-id="16">
              <div className="journal-card-art teal" aria-hidden="true">
                <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
                  <rect x="30" y="30" width="100" height="100" stroke="rgba(45,139,124,0.3)" strokeWidth="0.5" />
                  <polygon points="80,30 130,80 80,130 30,80" stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" fill="rgba(45,139,124,0.03)" />
                  <line x1="80" y1="30" x2="80" y2="130" stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" />
                  <line x1="30" y1="80" x2="130" y2="80" stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" />
                  <circle cx="80" cy="80" r="12" stroke="rgba(45,139,124,0.5)" strokeWidth="0.6" />
                  <circle cx="80" cy="80" r="4" fill="rgba(45,139,124,0.6)" />
                </svg>
              </div>
              <div className="journal-card-body">
                <p className="journal-card-meta">
                  <span className="tag">
                    Philosophy
                  </span>
                   · April 2025
                </p>
                <h3>
                  Center of the Loom
                </h3>
                <p>
                  On a weaving loom, tension is everything. We hold our intentions with a firm but gentle hand.
                </p>
                <div className="journal-card-footer">
                  <span className="preview-card-link">
                    Read slowly →
                  </span>
                </div>
              </div>
            </article>
            <article className="journal-card reveal" data-journal-id="17">
              <div className="journal-card-art rose" aria-hidden="true">
                <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
                  <circle cx="80" cy="80" r="72" stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" />
                  <circle cx="80" cy="80" r="36" stroke="rgba(181,96,122,0.2)" strokeWidth="0.5" />
                  <line x1="80" y1="8" x2="80" y2="152" stroke="rgba(181,96,122,0.15)" strokeWidth="0.5" />
                  <line x1="8" y1="80" x2="152" y2="80" stroke="rgba(181,96,122,0.15)" strokeWidth="0.5" />
                  <path d="M40,40 L120,120 M120,40 L40,120" stroke="rgba(181,96,122,0.2)" strokeWidth="0.5" />
                  <circle cx="80" cy="80" r="10" stroke="rgba(181,96,122,0.5)" strokeWidth="0.6" fill="rgba(181,96,122,0.1)" />
                  <circle cx="80" cy="80" r="3" fill="rgba(181,96,122,0.6)" />
                </svg>
              </div>
              <div className="journal-card-body">
                <p className="journal-card-meta">
                  <span className="tag">
                    Somatic
                  </span>
                   · March 2025
                </p>
                <h3>
                  Sun-Stitched Linen
                </h3>
                <p>
                  Dyeing with plants and sun-bleaching linen are exercises in slow, organic chemistry.
                </p>
                <div className="journal-card-footer">
                  <span className="preview-card-link">
                    Read slowly →
                  </span>
                </div>
              </div>
            </article>
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
    </>
  );
}
