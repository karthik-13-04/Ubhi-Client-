import { resolveSiteAsset } from '../server/site-assets';

export default function SiteMarkup({ assetMap = {} }) {
  const asset = (src) => resolveSiteAsset(src, assetMap);

  return (
    <div><a href="#app" className="skip-link">Skip to content</a>
      {/* ════════════════════════════════════
       HEADER  (shared across all pages)
       ════════════════════════════════════ */}
      <header className="site-header" data-header>
        <a className="brand" href="#home" aria-label="Ubhi home">
          <img src={asset("/assets/ubhi-logo-transparent.png")} alt="Ubhi" />
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#home" data-page="home">Home</a>
          <a href="#workshops" data-page="workshops">Workshops</a>
          <a href="#shop" data-page="shop">Shop</a>
          <a href="#snail-mail" data-page="snail-mail">Snail Mail</a>
          <a href="#journal" data-page="journal">Art &amp; Journal</a>
          <a href="#about" data-page="about">About</a>
          <a href="#account" data-page-link="account" className="nav-mobile-only">Sign in</a>
          <div className="nav-social" aria-label="Find us">
            <a className="soc-ig" href="https://instagram.com/ubhi.in" target="_blank" rel="noopener noreferrer" aria-label="Ubhi on Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x={3} y={3} width={18} height={18} rx={5} /><circle cx={12} cy={12} r={4} /><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" /></svg></a>
            <a className="soc-pin" href="https://in.pinterest.com/chelseaubhi/" target="_blank" rel="noopener noreferrer" aria-label="Ubhi on Pinterest"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.08-.8-.15-2 .04-2.9l1.15-4.9s-.3-.6-.3-1.4c0-1.3.77-2.3 1.72-2.3.8 0 1.2.6 1.2 1.34 0 .8-.52 2.04-.8 3.18-.22.95.48 1.73 1.42 1.73 1.7 0 3-1.8 3-4.4 0-2.3-1.65-3.9-4-3.9-2.73 0-4.33 2.04-4.33 4.15 0 .82.32 1.7.72 2.18a.3.3 0 0 1 .06.28l-.28 1.13c-.04.18-.15.22-.34.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.97-.53-2.29-1.15l-.62 2.37c-.22.87-.83 1.96-1.24 2.62A10 10 0 1 0 12 2z" /></svg></a>
            <a className="soc-mail" href="mailto:hello@ubhi.in" aria-label="Email Ubhi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x={3} y={5} width={18} height={14} rx={2} /><path d="M3.5 7l8.5 6 8.5-6" /></svg></a>
          </div>
        </nav>
        <div className="header-right">
          <div className="header-social" aria-label="Find us">
            <a className="soc-ig" href="https://instagram.com/ubhi.in" target="_blank" rel="noopener noreferrer" aria-label="Ubhi on Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x={3} y={3} width={18} height={18} rx={5} /><circle cx={12} cy={12} r={4} /><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" /></svg></a>
            <a className="soc-pin" href="https://in.pinterest.com/chelseaubhi/" target="_blank" rel="noopener noreferrer" aria-label="Ubhi on Pinterest"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.08-.8-.15-2 .04-2.9l1.15-4.9s-.3-.6-.3-1.4c0-1.3.77-2.3 1.72-2.3.8 0 1.2.6 1.2 1.34 0 .8-.52 2.04-.8 3.18-.22.95.48 1.73 1.42 1.73 1.7 0 3-1.8 3-4.4 0-2.3-1.65-3.9-4-3.9-2.73 0-4.33 2.04-4.33 4.15 0 .82.32 1.7.72 2.18a.3.3 0 0 1 .06.28l-.28 1.13c-.04.18-.15.22-.34.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.97-.53-2.29-1.15l-.62 2.37c-.22.87-.83 1.96-1.24 2.62A10 10 0 1 0 12 2z" /></svg></a>
          </div>
          <a className="nav-account" href="#account" data-page-link="account" aria-label="Sign in to your account">
            <svg className="nav-account-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx={12} cy={8} r="3.3" /><path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" /></svg>
            <span>Sign in</span>
          </a>
          <a className="nav-cta" href="#workshops" data-goto-booking>Reserve a space</a>
          <button className="nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false" data-nav-toggle>
            <span className="nt-label nt-open">Menu</span>
            <span className="nt-label nt-close">Close</span>
          </button>
        </div>
      </header>
      {/* ════════════════════════════════════
       ALL PAGES
       ════════════════════════════════════ */}
      <main id="app" tabIndex={-1}>
        {/* ┌─────────────────────────────────┐
         │  PAGE: HOME                     │
         └─────────────────────────────────┘ */}
        <div id="page-home" className="page">
          {/* Hero */}
          <section className="hero" aria-label="Ubhi workshops in London">
            <canvas className="particles-canvas" id="particles" aria-hidden="true" />
            <img className="hero-image" src={asset("/assets/ubhi-workshop-generated.png")} fetchPriority="high" decoding="async" alt="Yoga and block printing workshop in a London studio" />
            <div className="hero-overlay" aria-hidden="true" />
            {/* Ephemera scattered across the desk (parallax via data-depth) */}
            <div className="hero-ephemera" aria-hidden="true">
              <svg className="ephemera he-fern doodle sage draw" data-depth={12} viewBox="0 0 130 210" fill="none">
                <path d="M62 204 C56 150 68 96 98 34" />
                <path d="M60 190 C48 188 40 192 32 198" /><path d="M60 190 C72 188 80 192 88 198" />
                <path d="M62 170 C50 169 43 173 36 180" /><path d="M62 170 C74 169 81 173 88 180" />
                <path d="M66 150 C55 149 49 153 43 160" /><path d="M66 150 C77 149 83 153 89 160" />
                <path d="M72 128 C62 127 57 131 52 138" /><path d="M72 128 C82 127 87 131 92 138" />
                <path d="M80 106 C71 105 67 109 63 115" /><path d="M80 106 C89 105 93 109 97 115" />
                <path d="M88 84 C81 83 78 87 75 92" /><path d="M88 84 C95 83 98 87 101 92" />
                <path d="M94 62 C89 61 87 64 85 68" /><path d="M94 62 C99 61 101 64 103 68" />
              </svg>
              <p className="ephemera he-note-1 marginalia" data-depth={30}>look within<br />to ascend&nbsp;→</p>
              <p className="ephemera he-note-2 annotation" data-depth={38}>breathe here ✦</p>
            </div>
            <div className="hero-geo" aria-hidden="true">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={200} cy={200} r={196} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                <circle cx={200} cy={200} r={160} stroke="rgba(201,151,42,0.14)" strokeWidth="0.5" />
                <circle cx={200} cy={200} r={120} stroke="rgba(201,151,42,0.10)" strokeWidth="0.5" />
                <circle cx={200} cy={200} r={80} stroke="rgba(201,151,42,0.14)" strokeWidth="0.5" />
                <circle cx={200} cy={200} r={40} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                <circle cx={200} cy={200} r={8} fill="rgba(201,151,42,0.35)" />
                <line x1={200} y1={4} x2={200} y2={396} stroke="rgba(201,151,42,0.08)" strokeWidth="0.5" />
                <line x1={4} y1={200} x2={396} y2={200} stroke="rgba(201,151,42,0.08)" strokeWidth="0.5" />
                <line x1={56} y1={56} x2={344} y2={344} stroke="rgba(201,151,42,0.06)" strokeWidth="0.5" />
                <line x1={344} y1={56} x2={56} y2={344} stroke="rgba(201,151,42,0.06)" strokeWidth="0.5" />
                <polygon points="200,44 352,296 48,296" stroke="rgba(201,151,42,0.18)" strokeWidth="0.5" fill="none" />
                <polygon points="200,356 48,104 352,104" stroke="rgba(181,96,122,0.15)" strokeWidth="0.5" fill="none" />
                <circle cx={200} cy={120} r={80} stroke="rgba(201,151,42,0.06)" strokeWidth="0.4" />
                <circle cx={269} cy={160} r={80} stroke="rgba(201,151,42,0.06)" strokeWidth="0.4" />
                <circle cx={269} cy={240} r={80} stroke="rgba(201,151,42,0.06)" strokeWidth="0.4" />
                <circle cx={200} cy={280} r={80} stroke="rgba(201,151,42,0.06)" strokeWidth="0.4" />
                <circle cx={131} cy={240} r={80} stroke="rgba(201,151,42,0.06)" strokeWidth="0.4" />
                <circle cx={131} cy={160} r={80} stroke="rgba(201,151,42,0.06)" strokeWidth="0.4" />
              </svg>
            </div>
            <div className="hero-content reveal">
              <div className="he-stamp" data-depth={14} aria-hidden="true">
                <span className="stamp">
                  <span className="stamp-inner">
                    <svg className="stamp-art" viewBox="0 0 46 46" fill="none">
                      <path d="M23 39 C15 33 9 31 5 31 C7 22 14 20 18 23 C15 14 20 7 23 5 C26 7 31 14 28 23 C32 20 39 22 41 31 C37 31 31 33 23 39Z" stroke="#a6741f" strokeWidth="1.2" strokeLinejoin="round" />
                      <path d="M23 39 L23 23" stroke="#a6741f" strokeWidth={1} />
                      <circle cx={23} cy={20} r="2.2" fill="#a14e5e" />
                    </svg>
                    <span className="stamp-label">Ubhi Post</span>
                    <span className="stamp-value">to ascend</span>
                  </span>
                </span>
                <span className="postmark">
                  <span className="pm-arc">· London ·</span>
                  <span>ਉਭੀ</span>
                  <span className="pm-arc">look within</span>
                </span>
              </div>
              <p className="eyebrow">Chelsea Kaur Ubhi · ਉਭੀ · to ascend</p>
              <h1>Yoga, Art<br />&amp; <span className="ink-underline">Slow Ritual.</span></h1>
              <p className="hero-copy">Become aware of our creative spirit. Intimate workshops weaving conscious movement and slow art to quiet the mind, settle the body and breath, and ascend within.</p>
              <div className="hero-pathways">
                <a className="pathway-card" href="#workshops" data-page-link="workshops">
                  <svg className="pathway-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={50} cy={50} r={40} stroke="rgba(201,151,42,0.18)" strokeWidth="0.5" />
                    <ellipse cx={50} cy={50} rx={36} ry={13} stroke="var(--aurora-gold)" strokeWidth="0.8" transform="rotate(0 50 50)" />
                    <ellipse cx={50} cy={50} rx={36} ry={13} stroke="var(--aurora-rose)" strokeWidth="0.8" transform="rotate(60 50 50)" />
                    <ellipse cx={50} cy={50} rx={36} ry={13} stroke="var(--aurora-teal)" strokeWidth="0.8" transform="rotate(120 50 50)" />
                    <circle cx={50} cy={50} r="4.5" fill="var(--aurora-gold)" />
                  </svg>
                  <div className="pathway-body">
                    <h3>Book a Workshop</h3>
                    <p>Intimate gatherings in London combining yoga, movement, and craft.</p>
                  </div>
                  <span className="pathway-arrow">→</span>
                </a>
                <a className="pathway-card" href="#shop" data-page-link="shop">
                  <svg className="pathway-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={50} cy={50} r={40} stroke="rgba(181,96,122,0.18)" strokeWidth="0.5" />
                    <rect x={32} y={32} width={36} height={36} rx={2} transform="rotate(45 50 50)" stroke="rgba(181,96,122,0.3)" strokeWidth="0.8" fill="rgba(181,96,122,0.03)" />
                    <path d="M 40 42 L 60 42 C 60 48.5 65 52 68 57 C 73 65 70 76 50 76 C 30 76 27 65 32 57 C 35 52 40 48.5 40 42 Z" stroke="var(--aurora-rose)" strokeWidth="0.8" fill="rgba(181,96,122,0.05)" />
                    <path d="M 33.5 52 C 27 52 27 62 32 62" stroke="var(--aurora-rose)" strokeWidth="0.7" />
                    <path d="M 66.5 52 C 73 52 73 62 68 62" stroke="var(--aurora-rose)" strokeWidth="0.7" />
                    <path d="M 50 17 L 52.5 22.5 L 58 25 L 52.5 27.5 L 50 33 L 47.5 27.5 L 42 25 L 47.5 22.5 Z" fill="var(--aurora-gold)" />
                  </svg>
                  <div className="pathway-body">
                    <h3>Soul Shop</h3>
                    <p>Archival art prints, starter kits, and thoughtful tools.</p>
                  </div>
                  <span className="pathway-arrow">→</span>
                </a>
                <a className="pathway-card" href="#snail-mail" data-page-link="snail-mail">
                  <svg className="pathway-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={50} cy={50} r={40} stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" />
                    <rect x={25} y={34} width={50} height={32} rx={2} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.04)" />
                    <path d="M25 34L50 50L75 34" stroke="var(--aurora-teal)" strokeWidth="0.8" strokeLinejoin="round" />
                    <path d="M25 66L43 51" stroke="var(--aurora-teal)" strokeWidth="0.8" />
                    <path d="M75 66L57 51" stroke="var(--aurora-teal)" strokeWidth="0.8" />
                    <circle cx={50} cy={50} r={4} fill="var(--aurora-gold)" stroke="var(--aurora-teal)" strokeWidth="0.5" />
                    <path d="M15 42C18 40 20 44 23 42" stroke="rgba(45,139,124,0.4)" strokeWidth="0.8" strokeLinecap="round" />
                    <path d="M13 50C16 48 18 52 21 50" stroke="rgba(45,139,124,0.4)" strokeWidth="0.8" strokeLinecap="round" />
                    <path d="M77 42C80 44 82 40 85 42" stroke="rgba(45,139,124,0.4)" strokeWidth="0.8" strokeLinecap="round" />
                    <path d="M79 50C82 52 84 48 87 50" stroke="rgba(45,139,124,0.4)" strokeWidth="0.8" strokeLinecap="round" />
                    <path d="M50 20L51 22L53 22.5L51 23L50 25L49 23L47 22.5L49 22Z" fill="var(--aurora-gold)" />
                  </svg>
                  <div className="pathway-body">
                    <h3>Snail Mail Club</h3>
                    <p>A monthly package of art, research letters, and collectibles.</p>
                  </div>
                  <span className="pathway-arrow">→</span>
                </a>
              </div>
            </div>
          </section>
          {/* Mantra ticker */}
          <div className="mantra-strip" aria-hidden="true">
            <div className="mantra-track">
              <span data-site="tagline">Look within to ascend</span><span className="ticker-dot">ॐ</span>
              <span>Key to happy life</span><span className="ticker-dot">ॐ</span>
              <span>Yoga</span><span className="ticker-dot">ॐ</span>
              <span>Meditation</span><span className="ticker-dot">ॐ</span>
              <span>Art</span><span className="ticker-dot">ॐ</span>
            </div>
            <div className="mantra-track">
              <span data-site="tagline">Look within to ascend</span><span className="ticker-dot">ॐ</span>
              <span>Key to happy life</span><span className="ticker-dot">ॐ</span>
              <span>Yoga</span><span className="ticker-dot">ॐ</span>
              <span>Meditation</span><span className="ticker-dot">ॐ</span>
              <span>Art</span><span className="ticker-dot">ॐ</span>
            </div>
          </div>
          {/* Intro */}
          <section className="intro section-pad">
            <div className="intro-lead reveal">
              <p className="eyebrow" data-site="tagline">Look within to ascend</p>
              <h2 data-site="home-headline">A sanctuary for seekers, makers,<br />and our body that need to exhale.</h2>
            </div>
            <div className="intro-body reveal">
              <div className="intro-copy">
                <p className="hand intro-greeting">Dear Friend's</p>
                <p>Ubhi is Chelsea Kaur Ubhi's living creative practice.<br />
                  It is not a studio chain or a wellness template.<br />
                  It is a place for people who want tangible beauty, grounded knowledge, and real presence of our self.</p>
                <p>Every gathering begins gently with breath work, body movement and art work with your creativity, You welcome the world with calmer body and relaxed mind and happy creative soul.</p>
                <p className="intro-signature">Chelsea Ubhi Kaur<small>Curated with Magic</small></p>
              </div>
              <div className="intro-breathing-art" aria-hidden="true">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Breathing Rings (Aura) */}
                  <g className="breath-rings-group">
                    <circle cx={100} cy={100} r={90} className="breath-ring ring-1" stroke="rgba(201,151,42,0.12)" strokeWidth="0.5" />
                    <circle cx={100} cy={100} r={72} className="breath-ring ring-2" stroke="rgba(181,96,122,0.14)" strokeWidth="0.5" />
                    <circle cx={100} cy={100} r={54} className="breath-ring ring-3" stroke="rgba(45,139,124,0.16)" strokeWidth="0.5" />
                  </g>
                  {/* Faint Orbit Track Line */}
                  <circle cx={100} cy={100} r={78} stroke="rgba(255, 248, 230, 0.04)" strokeWidth="0.5" strokeDasharray="2 3" />
                  {/* The Breath Yantra Geometry */}
                  <g className="yantra-group">
                    {/* Symmetrical Outer Frame (rotated square) */}
                    <rect x={55} y={55} width={90} height={90} rx={4} transform="rotate(45 100 100)" stroke="rgba(201,151,42,0.15)" strokeWidth="0.5" />
                    {/* Central Axis Line (Spinal alignment / ascension) */}
                    <line x1={100} y1={20} x2={100} y2={180} stroke="rgba(201,151,42,0.35)" strokeWidth="0.6" />
                    {/* Crescent Moon (Mind / Stillness) */}
                    <path d="M60 140 C80 160 120 160 140 140 C125 150 75 150 60 140 Z" stroke="var(--aurora-gold)" strokeWidth="0.8" fill="rgba(201,151,42,0.04)" />
                    {/* Breathing Inner Lotus (Concentric geometric arches) */}
                    <g className="breath-geometry">
                      {/* Vertical Petals */}
                      <path d="M100 130 C90 115 100 95 100 95 C100 95 110 115 100 130 Z" stroke="var(--aurora-rose)" strokeWidth="0.8" fill="rgba(181,96,122,0.05)" />
                      <path d="M100 70 C90 85 100 105 100 105 C100 105 110 85 100 70 Z" stroke="var(--aurora-rose)" strokeWidth="0.8" fill="rgba(181,96,122,0.05)" />
                      {/* Horizontal Petals */}
                      <path d="M130 100 C115 90 95 100 95 100 C95 100 115 110 130 100 Z" stroke="var(--aurora-rose)" strokeWidth="0.8" fill="rgba(181,96,122,0.05)" />
                      <path d="M70 100 C85 90 105 100 105 100 C105 100 85 110 70 100 Z" stroke="var(--aurora-rose)" strokeWidth="0.8" fill="rgba(181,96,122,0.05)" />
                      {/* Intersecting Diagonal Rings */}
                      <circle cx={100} cy={100} r={30} stroke="rgba(201,151,42,0.25)" strokeWidth="0.6" />
                    </g>
                    {/* The Center Bindu (Seed of consciousness, breathing pulse) */}
                    <circle cx={100} cy={100} r={3} fill="var(--aurora-gold)" className="breath-bindu" />
                  </g>
                  {/* Rotating Orbiters Group */}
                  <g className="yantra-orbiters">
                    {/* Orbiter 1: Lotus (Movement/Spirit) */}
                    <g className="orbiter-item o-lotus">
                      <path d="M100 22 C98 17 100 13 100 13 C100 13 102 17 100 22 Z" stroke="var(--aurora-rose)" strokeWidth="0.6" fill="rgba(181,96,122,0.1)" />
                      <path d="M100 22 C95 18 95 14 95 14 C95 14 98 19 100 22 Z" stroke="var(--aurora-rose)" strokeWidth="0.6" fill="rgba(181,96,122,0.05)" />
                      <path d="M100 22 C105 18 105 14 105 14 C105 14 102 19 100 22 Z" stroke="var(--aurora-rose)" strokeWidth="0.6" fill="rgba(181,96,122,0.05)" />
                    </g>
                    {/* Orbiter 2: Crescent Moon (Philosophy/Stillness) */}
                    <g className="orbiter-item o-moon">
                      <path d="M 165.5 56.5 C 171.5 56.5 171.5 65.5 165.5 65.5 C 169 64 169 58 165.5 56.5 Z" stroke="var(--aurora-gold)" strokeWidth="0.6" fill="rgba(201,151,42,0.12)" />
                    </g>
                    {/* Orbiter 3: Sparkle (Art/Creativity) */}
                    <g className="orbiter-item o-sparkle">
                      <path d="M167.5 133 L169 137.5 L173.5 139 L169 140.5 L167.5 145 L166 140.5 L161.5 139 L166 137.5 Z" fill="var(--aurora-gold)" />
                    </g>
                    {/* Orbiter 4: Leaf (Nature/Grounding) */}
                    <g className="orbiter-item o-leaf">
                      <path d="M 100 173 C 95 176 95 180 100 183 C 105 180 105 176 100 173 Z" stroke="var(--aurora-teal)" strokeWidth="0.6" fill="rgba(45,139,124,0.12)" />
                      <path d="M 100 175 L 100 181" stroke="var(--aurora-teal)" strokeWidth="0.5" />
                    </g>
                    {/* Orbiter 5: Envelope (Snail Mail/Connection) */}
                    <g className="orbiter-item o-envelope">
                      <rect x={27} y={134} width={11} height={8} rx="0.5" stroke="var(--aurora-teal)" strokeWidth="0.6" fill="rgba(45,139,124,0.05)" />
                      <path d="M27 134 L32.5 138 L38 134" stroke="var(--aurora-teal)" strokeWidth="0.5" />
                    </g>
                    {/* Orbiter 6: Ritual Bowl (Gathering/Slow Ritual) */}
                    <g className="orbiter-item o-bowl">
                      <path d="M 28 59.5 L 37 59.5 C 37 63.5 35 65.5 32.5 65.5 C 30 65.5 28 63.5 28 59.5 Z" stroke="var(--aurora-rose)" strokeWidth="0.6" fill="rgba(181,96,122,0.12)" />
                      <path d="M 32.5 57.5 C 32 56 33 55.5 32.5 54" stroke="var(--aurora-rose)" strokeWidth="0.5" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </section>
          {/* The practice + the four paths, combined on one screen */}
          <section className="practice-journey section-pad" aria-label="The practice, and where it leads">
            <div className="pj-head reveal">
              <p className="eyebrow">The ritual</p>
              <h2>Four movements, one practice.</h2>
            </div>
            <ol className="pj-ritual reveal">
              <li className="pj-step" style={{'--pc': '#a6741f', '--pcs': 'rgba(166,116,31,.14)'}}>
                <span className="pj-step-ic"><svg viewBox="0 0 48 48" fill="none"><circle cx={24} cy={24} r={22} stroke="currentColor" strokeWidth={1} /><circle cx={24} cy={24} r={14} stroke="currentColor" strokeWidth="0.8" /><circle cx={24} cy={24} r={6} stroke="currentColor" strokeWidth={1} fill="rgba(166,116,31,0.18)" /></svg></span>
                <span className="pj-step-name">Arrive</span>
                <span className="pj-step-sub">Warm welcome, settle in</span>
              </li>
              <li className="pj-step" style={{'--pc': '#a14e5e', '--pcs': 'rgba(161,78,94,.14)'}}>
                <span className="pj-step-ic"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4C14 14 4 20 4 28C4 36 14 44 24 44C34 44 44 36 44 28C44 20 34 14 24 4Z" stroke="currentColor" strokeWidth={1} fill="rgba(161,78,94,0.1)" /><line x1={24} y1={12} x2={24} y2={36} stroke="currentColor" strokeWidth="0.8" /><line x1={12} y1={24} x2={36} y2={24} stroke="currentColor" strokeWidth="0.8" /></svg></span>
                <span className="pj-step-name">Move</span>
                <span className="pj-step-sub">Yoga &amp; breathwork</span>
              </li>
              <li className="pj-step" style={{'--pc': '#4a7060', '--pcs': 'rgba(74,112,96,.14)'}}>
                <span className="pj-step-ic"><svg viewBox="0 0 48 48" fill="none"><polygon points="24,5 43,37 5,37" stroke="currentColor" strokeWidth={1} fill="rgba(74,112,96,0.1)" /><polygon points="24,43 5,11 43,11" stroke="currentColor" strokeWidth={1} fill="none" /></svg></span>
                <span className="pj-step-name">Make</span>
                <span className="pj-step-sub">Print, draw, create</span>
              </li>
              <li className="pj-step" style={{'--pc': '#39496a', '--pcs': 'rgba(57,73,106,.14)'}}>
                <span className="pj-step-ic"><svg viewBox="0 0 48 48" fill="none"><circle cx={24} cy={24} r={20} stroke="currentColor" strokeWidth="0.8" /><path d="M24 5L28 20L43 24L28 28L24 43L20 28L5 24L20 20Z" stroke="currentColor" strokeWidth={1} fill="rgba(57,73,106,0.12)" /></svg></span>
                <span className="pj-step-name">Carry</span>
                <span className="pj-step-sub">A ritual to take home</span>
              </li>
            </ol>
            <div className="pj-divider reveal" role="presentation">
              <span className="pj-line" />
              <h3>Where your practice can go</h3>
              <span className="pj-line" />
            </div>
            <div className="pj-paths reveal">
              <a className="pj-card" href="#workshops" data-page-link="workshops" style={{'--pc': '#a6741f', '--pcs': 'rgba(166,116,31,.14)'}}>
                <span className="pj-card-ic"><svg viewBox="0 0 60 60" fill="none"><ellipse cx={30} cy={30} rx={22} ry={8} stroke="#a6741f" strokeWidth={1} /><ellipse cx={30} cy={30} rx={22} ry={8} stroke="#a14e5e" strokeWidth={1} transform="rotate(60 30 30)" /><ellipse cx={30} cy={30} rx={22} ry={8} stroke="#4a7060" strokeWidth={1} transform="rotate(120 30 30)" /><circle cx={30} cy={30} r={3} fill="#a6741f" /></svg></span>
                <span className="pj-card-eyb">Upcoming</span>
                <h3>Workshops</h3>
                <p>Yoga, breath &amp; hands-on art days in London.</p>
                <span className="pj-card-cta">See all →</span>
              </a>
              <a className="pj-card" href="#shop" data-page-link="shop" style={{'--pc': '#a14e5e', '--pcs': 'rgba(161,78,94,.14)'}}>
                <span className="pj-card-ic"><svg viewBox="0 0 60 60" fill="none"><path d="M 24 25 L 36 25 C 36 28.9 39 31 41 34 C 44 38.8 42 45.4 30 45.4 C 18 45.4 16 38.8 19 34 C 21 31 24 28.9 24 25 Z" stroke="#a14e5e" strokeWidth={1} fill="rgba(161,78,94,0.05)" /><path d="M 20.1 31 C 16.2 31 16.2 37 19.2 37" stroke="#a14e5e" strokeWidth="0.8" /><path d="M 39.9 31 C 43.8 31 43.8 37 40.8 37" stroke="#a14e5e" strokeWidth="0.8" /><path d="M 30 10 L 31.5 13.3 L 34.8 14.8 L 31.5 16.3 L 30 19.6 L 28.5 16.3 L 25.2 14.8 L 28.5 13.3 Z" fill="#c2902f" /></svg></span>
                <span className="pj-card-eyb">Curated</span>
                <h3>Soul Shop</h3>
                <p>Hand-pressed prints &amp; ritual objects.</p>
                <span className="pj-card-cta">Explore →</span>
              </a>
              <a className="pj-card" href="#snail-mail" data-page-link="snail-mail" style={{'--pc': '#4a7060', '--pcs': 'rgba(74,112,96,.14)'}}>
                <span className="pj-card-ic"><svg viewBox="0 0 60 60" fill="none"><rect x={16} y={20} width={28} height={20} rx="1.5" stroke="#4a7060" strokeWidth={1} fill="rgba(74,112,96,0.05)" /><path d="M16 20 L30 31 L44 20" stroke="#4a7060" strokeWidth={1} /><circle cx={30} cy={29} r="2.5" fill="#c2902f" /></svg></span>
                <span className="pj-card-eyb">Monthly</span>
                <h3>Snail Mail Club</h3>
                <p>A letter, print &amp; object, posted monthly.</p>
                <span className="pj-card-cta">Join →</span>
              </a>
              <a className="pj-card" href="#journal" data-page-link="journal" style={{'--pc': '#39496a', '--pcs': 'rgba(57,73,106,.14)'}}>
                <span className="pj-card-ic"><svg viewBox="0 0 60 60" fill="none"><path d="M30 44 C25 40 18 40 12 40 L12 18 C18 18 25 18 30 22 C35 18 42 18 48 18 L48 40 C42 40 35 40 30 44 Z" stroke="#39496a" strokeWidth={1} fill="rgba(57,73,106,0.05)" /><line x1={30} y1={22} x2={30} y2={44} stroke="#39496a" strokeWidth={1} /><path d="M30 16 C28 12 30 8 30 8 C30 8 32 12 30 16 Z" stroke="#a14e5e" strokeWidth={1} /></svg></span>
                <span className="pj-card-eyb">Reading</span>
                <h3>Art &amp; Journal</h3>
                <p>Slow essays &amp; artwork to read.</p>
                <span className="pj-card-cta">Read →</span>
              </a>
            </div>
          </section>
          {/* Sliding Gallery */}
          <section className="gallery-section" aria-label="Workshops and practices gallery">
            <div className="gallery-container" id="home-gallery-container">
              <div className="gallery-track">
                {/* Set 1 */}
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-chelsea.png")} alt="Chelsea Kaur Ubhi in her studio" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-block-print.png")} alt="Slow craft block printing workshop" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-yoga-breath.png")} alt="Somatic movement and breathwork practice" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-geometry-draw.png")} alt="Sacred geometry drawing session" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                {/* Set 2 */}
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-chelsea.png")} alt="Chelsea Kaur Ubhi in her studio" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-block-print.png")} alt="Slow craft block printing workshop" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-yoga-breath.png")} alt="Somatic movement and breathwork practice" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-geometry-draw.png")} alt="Sacred geometry drawing session" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                {/* Set 3 */}
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-chelsea.png")} alt="Chelsea Kaur Ubhi in her studio" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-block-print.png")} alt="Slow craft block printing workshop" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-yoga-breath.png")} alt="Somatic movement and breathwork practice" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-geometry-draw.png")} alt="Sacred geometry drawing session" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="gallery-track">
                {/* Set 1 */}
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-chelsea.png")} alt="Chelsea Kaur Ubhi in her studio" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-block-print.png")} alt="Slow craft block printing workshop" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-yoga-breath.png")} alt="Somatic movement and breathwork practice" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-geometry-draw.png")} alt="Sacred geometry drawing session" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                {/* Set 2 */}
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-chelsea.png")} alt="Chelsea Kaur Ubhi in her studio" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-block-print.png")} alt="Slow craft block printing workshop" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-yoga-breath.png")} alt="Somatic movement and breathwork practice" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-geometry-draw.png")} alt="Sacred geometry drawing session" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                {/* Set 3 */}
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-chelsea.png")} alt="Chelsea Kaur Ubhi in her studio" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-block-print.png")} alt="Slow craft block printing workshop" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-yoga-breath.png")} alt="Somatic movement and breathwork practice" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
                <div className="gallery-item">
                  <img src={asset("/assets/gallery-geometry-draw.png")} alt="Sacred geometry drawing session" />
                </div>
                <div className="gallery-separator" aria-hidden="true">
                  <span className="sep-om">ॐ</span>
                  <span className="sep-eye">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={12} cy={12} r={10} stroke="var(--aurora-teal)" strokeWidth="0.8" fill="rgba(45,139,124,0.05)" />
                      <circle cx={12} cy={12} r={6} fill="#1f4ba6" />
                      <circle cx={12} cy={12} r={3} fill="#000000" />
                      <circle cx="10.8" cy="10.8" r={1} fill="#ffffff" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* ───────────── Stay in the loop · email updates ───────────── */}
          <section className="subscribe-section section-pad" aria-label="Subscribe for updates">
            <div className="subscribe-card reveal">
              <span className="subscribe-deco subscribe-sprig" aria-hidden="true"><svg viewBox="0 0 80 200"><use href="#art-eucalyptus" /></svg></span>
              <span className="subscribe-deco subscribe-stamp sway" aria-hidden="true"><svg viewBox="0 0 120 140"><use href="#art-stamp" /></svg></span>
              <div className="subscribe-text">
                <p className="eyebrow">Don't be a stranger</p>
                <h2>Word from the studio, now &amp; then</h2>
                <p className="subscribe-copy">New workshops, fresh shop pieces and the occasional letter — slipped quietly into your inbox. No noise, no spam. Just news worth opening.</p>
              </div>
              <div className="subscribe-action">
                <form id="updates-form" className="subscribe-form" noValidate>
                  <input type="text" id="updates-name" className="subscribe-input" placeholder="Your name" autoComplete="name" aria-label="Your name" required />
                  <input type="email" id="updates-email" className="subscribe-input" placeholder="you@example.com" autoComplete="email" required aria-label="Your email" />
                  <select id="updates-interest" className="subscribe-input subscribe-interest" aria-label="What you'd like to hear about">
                    <option value="Everything">Everything</option>
                    <option value="Workshops">Workshops</option>
                    <option value="Shop">Shop pieces</option>
                    <option value="Snail Mail">Snail Mail</option>
                  </select>
                  <button type="submit" className="button button-primary subscribe-btn">Keep me posted</button>
                </form>
                <p className="subscribe-msg" id="updates-msg" role="status" aria-live="polite" />
                <button type="button" className="subscribe-unsub" id="updates-unsub">Changed your mind? Unsubscribe</button>
              </div>
            </div>
          </section>
        </div>{/* /page-home */}
        {/* ┌─────────────────────────────────┐
         │  PAGE: WORKSHOPS                │
         └─────────────────────────────────┘ */}
        <div id="page-workshops" className="page">
          <div className="page-hero">
            <div className="page-hero-geo" aria-hidden="true">
              <svg viewBox="0 0 400 400" fill="none"><circle cx={200} cy={200} r={196} stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" /><circle cx={200} cy={200} r={140} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><circle cx={200} cy={200} r={80} stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" /><polygon points="200,44 352,296 48,296" stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" fill="none" /><polygon points="200,356 48,104 352,104" stroke="rgba(181,96,122,0.25)" strokeWidth="0.5" fill="none" /></svg>
            </div>
            <div className="page-hero-content">
              <p className="eyebrow">come home to your body</p>
              <h1>Workshop Universe</h1>
              <div className="workshops-ticker" aria-hidden="true">
                <div className="workshops-ticker-track">
                  <span>Intimate gatherings</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Somatic movement</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Conscious breathwork</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Raw craftsmanship</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Sacred geometry</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Quiet presence</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Aligning the nervous system</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Medicine in creation</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Ancient philosophy</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Art &amp; stillness</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                </div>
                <div className="workshops-ticker-track">
                  <span>Intimate gatherings</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Somatic movement</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Conscious breathwork</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Raw craftsmanship</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Sacred geometry</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Quiet presence</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Aligning the nervous system</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Medicine in creation</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Ancient philosophy</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Art &amp; stillness</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                </div>
              </div>
            </div>
          </div>
          {/* Workshop cards */}
          <section className="workshops section-pad">
            <div className="workshop-grid" id="workshops-list-container">
              <article className="workshop-card reveal">
                <div className="card-image-wrap">
                  <img src={asset("/assets/ubhi-workshop-generated.png")} alt="Block printing and yoga workshop" />
                  <div className="card-image-glow" />
                </div>
                <div className="card-body">
                  <p className="eyebrow">Signature · 12 July</p>
                  <h3>Yoga &amp; Hand Block Printing</h3>
                  <p>A grounding yoga practice followed by hand block printing on paper and cloth. Designed for beginners and returning makers.</p>
                  <dl>
                    <div><dt>Time</dt><dd>10:30–13:30</dd></div>
                    <div><dt>Place</dt><dd>Hackney studio</dd></div>
                    <div><dt>Price</dt><dd>£58</dd></div>
                    <div><dt>Spaces</dt><dd>10</dd></div>
                  </dl>
                  <button className="button button-primary" type="button" data-book="Yoga & Hand Block Printing">Book</button>
                </div>
              </article>
              <article className="workshop-card reveal">
                <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(201,151,42,0.08),rgba(7,6,14,0.9))'}} aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                    <circle cx={100} cy={100} r={80} stroke="rgba(201,151,42,0.4)" strokeWidth="0.8" />
                    <circle cx={100} cy={100} r={50} stroke="rgba(201,151,42,0.25)" strokeWidth="0.6" />
                    <polygon points="100,20 169,140 31,140" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
                    <polygon points="100,180 169,60 31,60" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                    <circle cx={100} cy={100} r={4} fill="rgba(201,151,42,0.6)" />
                  </svg>
                </div>
                <div className="card-body">
                  <p className="eyebrow">Drawing · 26 July</p>
                  <h3>Sacred Geometry Drawing</h3>
                  <p>Compass-and-rule mandala drawing, breath, stillness, and a short philosophical inquiry.</p>
                  <dl>
                    <div><dt>Time</dt><dd>09:30–12:00</dd></div>
                    <div><dt>Place</dt><dd>Hackney studio</dd></div>
                    <div><dt>Price</dt><dd>£44</dd></div>
                    <div><dt>Spaces</dt><dd>8</dd></div>
                  </dl>
                  <button className="button button-secondary" type="button" data-book="Sacred Geometry Drawing">Book</button>
                </div>
              </article>
              <article className="workshop-card reveal">
                <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(181,96,122,0.08),rgba(7,6,14,0.9))'}} aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                    <circle cx={100} cy={100} r={80} stroke="rgba(181,96,122,0.4)" strokeWidth="0.8" />
                    <ellipse cx={100} cy={100} rx={70} ry={30} stroke="rgba(181,96,122,0.3)" strokeWidth="0.6" />
                    <ellipse cx={100} cy={100} rx={30} ry={70} stroke="rgba(181,96,122,0.3)" strokeWidth="0.6" />
                    <circle cx={100} cy={100} r={8} fill="rgba(181,96,122,0.6)" />
                  </svg>
                </div>
                <div className="card-body">
                  <p className="eyebrow">Rest · 9 August</p>
                  <h3>Watercolour &amp; Sound (AUM)</h3>
                  <p>Slow movement, chanting science, and a watercolour study inspired by sound and the body.</p>
                  <dl>
                    <div><dt>Time</dt><dd>14:00–17:00</dd></div>
                    <div><dt>Place</dt><dd>Hackney studio</dd></div>
                    <div><dt>Price</dt><dd>£52</dd></div>
                    <div><dt>Spaces</dt><dd>10</dd></div>
                  </dl>
                  <button className="button button-secondary" type="button" data-book="Watercolour & Sound (AUM)">Book</button>
                </div>
              </article>
              <article className="workshop-card reveal">
                <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(45,139,124,0.08),rgba(7,6,14,0.9))'}} aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                    <path d="M70,50 L130,50 M80,50 L80,65 C80,110 50,120 50,150 C50,175 70,180 100,180 C130,180 150,175 150,150 C150,120 120,110 120,65 L120,50" stroke="rgba(45,139,124,0.45)" strokeWidth="0.8" />
                    <ellipse cx={100} cy={50} rx={30} ry={8} stroke="rgba(45,139,124,0.5)" strokeWidth="0.7" />
                    <ellipse cx={100} cy={150} rx={42} ry={12} stroke="rgba(45,139,124,0.15)" strokeWidth="0.5" />
                    <circle cx={100} cy={120} r={14} stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
                  </svg>
                </div>
                <div className="card-body">
                  <p className="eyebrow">Craft · 23 August</p>
                  <h3>Breathwork &amp; Clay Pots</h3>
                  <p>Grounding breath session, hand-shaping raw clay pots, and wood-fire ritual study.</p>
                  <dl>
                    <div><dt>Time</dt><dd>10:30–13:00</dd></div>
                    <div><dt>Place</dt><dd>Hackney studio</dd></div>
                    <div><dt>Price</dt><dd>£48</dd></div>
                    <div><dt>Spaces</dt><dd>8</dd></div>
                  </dl>
                  <button className="button button-secondary" type="button" data-book="Breathwork & Clay Pots">Book</button>
                </div>
              </article>
              <article className="workshop-card reveal">
                <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(181,96,122,0.08),rgba(7,6,14,0.9))'}} aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                    <circle cx={100} cy={100} r={80} stroke="rgba(181,96,122,0.2)" strokeWidth="0.6" />
                    <path d="M30,100 Q60,40 100,100 T170,100" stroke="rgba(181,96,122,0.45)" strokeWidth="0.8" />
                    <path d="M30,100 Q60,160 100,100 T170,100" stroke="rgba(201,151,42,0.3)" strokeWidth="0.7" />
                    <circle cx={100} cy={100} r={5} fill="rgba(181,96,122,0.6)" />
                  </svg>
                </div>
                <div className="card-body">
                  <p className="eyebrow">Altar · 6 Sept</p>
                  <h3>Somatic Silk Dyeing</h3>
                  <p>Wearable art. Focus, natural botanical dyes on raw silk, and somatic movement.</p>
                  <dl>
                    <div><dt>Time</dt><dd>11:00–14:30</dd></div>
                    <div><dt>Place</dt><dd>Hackney studio</dd></div>
                    <div><dt>Price</dt><dd>£64</dd></div>
                    <div><dt>Spaces</dt><dd>8</dd></div>
                  </dl>
                  <button className="button button-secondary" type="button" data-book="Somatic Silk Dyeing">Book</button>
                </div>
              </article>
              <article className="workshop-card reveal">
                <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(201,151,42,0.06),rgba(7,6,14,0.9))'}} aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                    <path d="M60,90 C80,70 110,80 100,110 C90,130 50,120 60,90 Z" stroke="rgba(201,151,42,0.4)" strokeWidth="0.7" />
                    <path d="M110,120 C130,100 160,110 150,130 C140,150 100,140 110,120 Z" stroke="rgba(201,151,42,0.3)" strokeWidth="0.7" />
                    <path d="M90,60 C110,40 130,55 120,75 C110,95 80,80 90,60 Z" stroke="rgba(181,96,122,0.35)" strokeWidth="0.7" />
                    <path d="M50,105 Q80,100 95,115" stroke="rgba(255,248,230,0.3)" strokeWidth="0.5" />
                    <path d="M105,65 Q115,75 125,60" stroke="rgba(255,248,230,0.3)" strokeWidth="0.5" />
                  </svg>
                </div>
                <div className="card-body">
                  <p className="eyebrow">Focus · 20 Sept</p>
                  <h3>Restorative Art &amp; Ink Flow</h3>
                  <p>Slow drawing practices, ink grinding, charcoal wash, and nervous system focus.</p>
                  <dl>
                    <div><dt>Time</dt><dd>14:30–17:00</dd></div>
                    <div><dt>Place</dt><dd>Hackney studio</dd></div>
                    <div><dt>Price</dt><dd>£46</dd></div>
                    <div><dt>Spaces</dt><dd>10</dd></div>
                  </dl>
                  <button className="button button-secondary" type="button" data-book="Restorative Art & Ink Flow">Book</button>
                </div>
              </article>
              <article className="workshop-card reveal">
                <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(45,139,124,0.08),rgba(7,6,14,0.9))'}} aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                    <circle cx={100} cy={100} r={80} stroke="rgba(45,139,124,0.3)" strokeWidth="0.8" />
                    <path d="M100,30 A70,70 0 0,1 170,100 A70,70 0 0,1 100,170 A70,70 0 0,1 100,30" stroke="rgba(45,139,124,0.4)" strokeWidth="0.6" />
                    <path d="M100,60 A40,40 0 0,1 140,100 A40,40 0 0,1 100,140 A40,40 0 0,1 100,60" stroke="rgba(201,151,42,0.35)" strokeWidth="0.6" />
                    <circle cx={100} cy={100} r={4} fill="rgba(45,139,124,0.6)" />
                  </svg>
                </div>
                <div className="card-body">
                  <p className="eyebrow">Clay · 4 Oct</p>
                  <h3>Embodied Clay &amp; Breath</h3>
                  <p>Coiling terracotta pots, slow breathing patterns, and organic clay textures.</p>
                  <dl>
                    <div><dt>Time</dt><dd>10:30–13:00</dd></div>
                    <div><dt>Place</dt><dd>Hackney studio</dd></div>
                    <div><dt>Price</dt><dd>£50</dd></div>
                    <div><dt>Spaces</dt><dd>8</dd></div>
                  </dl>
                  <button className="button button-secondary" type="button" data-book="Embodied Clay & Breath">Book</button>
                </div>
              </article>
              <article className="workshop-card reveal">
                <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(201,151,42,0.08),rgba(7,6,14,0.9))'}} aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                    <path d="M50,90 A50,50 0 0,0 150,90 Z" fill="rgba(201,151,42,0.08)" stroke="rgba(201,151,42,0.5)" strokeWidth="0.8" />
                    <line x1={40} y1={90} x2={160} y2={90} stroke="rgba(201,151,42,0.4)" strokeWidth="0.8" />
                    <circle cx={100} cy={90} r={3} fill="rgba(201,151,42,0.6)" />
                    <circle cx={100} cy={100} r={60} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                  </svg>
                </div>
                <div className="card-body">
                  <p className="eyebrow">Sound · 18 Oct</p>
                  <h3>Sacred Mandala &amp; Sound</h3>
                  <p>Concentric line geometry, meditation harmonics, and sound bath resonance.</p>
                  <dl>
                    <div><dt>Time</dt><dd>14:00–16:30</dd></div>
                    <div><dt>Place</dt><dd>Hackney studio</dd></div>
                    <div><dt>Price</dt><dd>£42</dd></div>
                    <div><dt>Spaces</dt><dd>12</dd></div>
                  </dl>
                  <button className="button button-secondary" type="button" data-book="Sacred Mandala & Sound">Book</button>
                </div>
              </article>
            </div>
          </section>
          {/* Booking Modal Dialog */}
          <div id="booking-modal" className="modal-overlay" aria-hidden="true">
            <div className="modal-panel">
              <button className="modal-close" id="modal-close-btn" type="button" aria-label="Close modal">×</button>
              <form id="modal-booking-form" noValidate>
                {/* STEP 1: Details */}
                <div id="modal-step-details" className="modal-step is-active">
                  <h2 className="modal-title">Reserve my space</h2>
                  <div className="modal-workshop-preview">
                    <span className="eyebrow" id="modal-preview-eyebrow">Signature</span>
                    <h3 id="modal-preview-title">Yoga &amp; Hand Block Printing</h3>
                    <div className="modal-preview-details">
                      <span id="modal-preview-date">Sunday 12 July</span> · 
                      <span id="modal-preview-time">10:30–13:30</span> · 
                      <strong id="modal-preview-price">£58</strong>
                    </div>
                  </div>
                  <div className="modal-form-fields">
                    <label htmlFor="modal-workshop-select">Workshop
                      <select id="modal-workshop-select" name="workshop" required>
                        <option value="Yoga & Hand Block Printing" data-price={58} data-date="Sunday 12 July" data-time="10:30–13:30">Yoga &amp; Hand Block Printing — £58</option>
                        <option value="Sacred Geometry Drawing" data-price={44} data-date="Sunday 26 July" data-time="09:30–12:00">Sacred Geometry Drawing — £44</option>
                        <option value="Watercolour & Sound (AUM)" data-price={52} data-date="Sunday 9 August" data-time="14:00–17:00">Watercolour &amp; Sound (AUM) — £52</option>
                        <option value="Breathwork & Clay Pots" data-price={48} data-date="Sunday 23 August" data-time="10:30–13:00">Breathwork &amp; Clay Pots — £48</option>
                        <option value="Somatic Silk Dyeing" data-price={64} data-date="Sunday 6 September" data-time="11:00–14:30">Somatic Silk Dyeing — £64</option>
                        <option value="Restorative Art & Ink Flow" data-price={46} data-date="Sunday 20 September" data-time="14:30–17:00">Restorative Art &amp; Ink Flow — £46</option>
                        <option value="Embodied Clay & Breath" data-price={50} data-date="Sunday 4 October" data-time="10:30–13:00">Embodied Clay &amp; Breath — £50</option>
                        <option value="Sacred Mandala & Sound" data-price={42} data-date="Sunday 18 October" data-time="14:00–16:30">Sacred Mandala &amp; Sound — £42</option>
                        <option value="Private Ubhi Session" data-price="custom" data-date="By arrangement" data-time="Custom duration">Private Ubhi Session — Quote</option>
                      </select>
                    </label>
                    <div className="form-row">
                      <label htmlFor="modal-name-input">Name
                        <input id="modal-name-input" name="name" type="text" autoComplete="name" placeholder="Your name" required />
                      </label>
                      <label htmlFor="modal-email-input">Email
                        <input id="modal-email-input" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                      </label>
                    </div>
                    <label htmlFor="modal-phone-input">Mobile Number
                      <input id="modal-phone-input" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="e.g. 07123 456789" required />
                    </label>
                    <label htmlFor="modal-note-input">Note for Chelsea
                      <textarea id="modal-note-input" name="note" placeholder="Anything you want her to know?" defaultValue={""} />
                    </label>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="button button-primary" id="modal-to-payment-btn" style={{width: '100%'}}>Proceed to Pay</button>
                  </div>
                </div>
                {/* STEP 2: Payment */}
                <div id="modal-step-payment" className="modal-step">
                  <div className="modal-payment-header">
                    <h2 className="modal-title">Secure Checkout</h2>
                    <div className="secure-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{width: 14, height: 14}}><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                      <span>SSL Encrypted</span>
                    </div>
                  </div>
                  <div className="modal-payment-summary">
                    <span>Amount due:</span>
                    <strong id="modal-payment-amount">£58</strong>
                  </div>
                  <div className="modal-form-fields">
                    <label htmlFor="modal-card-name">Cardholder Name
                      <input id="modal-card-name" name="cardname" type="text" placeholder="Name as printed on card" required />
                    </label>
                    <label htmlFor="modal-card-number">Card Number
                      <input id="modal-card-number" name="cardnumber" type="text" inputMode="numeric" placeholder="4111 2222 3333 4444" pattern="\d{4}\s?\d{4}\s?\d{4}\s?\d{4}" maxLength={19} required />
                    </label>
                    <div className="form-row">
                      <label htmlFor="modal-card-expiry">Expiry Date
                        <input id="modal-card-expiry" name="cardexpiry" type="text" placeholder="MM / YY" pattern="(0[1-9]|1[0-2])\s?\/\s?([0-9]{2})" maxLength={7} required />
                      </label>
                      <label htmlFor="modal-card-cvc">CVC
                        <input id="modal-card-cvc" name="cardcvc" type="text" inputMode="numeric" placeholder={123} pattern="\d{3,4}" maxLength={4} required />
                      </label>
                    </div>
                  </div>
                  <div className="modal-actions">
                    <button type="button" className="button button-secondary" id="modal-back-btn" style={{flex: 1}}>← Back</button>
                    <button type="submit" className="button button-primary" id="modal-pay-btn" style={{flex: 2}}>Pay Now</button>
                  </div>
                </div>
                {/* STEP 3: Success */}
                <div id="modal-step-success" className="modal-step">
                  <div className="modal-success-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth={1}>
                      <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.15)" />
                    </svg>
                  </div>
                  <h2 className="modal-title">Space Reserved</h2>
                  <p id="modal-success-msg" className="modal-success-message">Thank you. Your space has been quietly held.</p>
                  <p className="modal-success-subtext">A confirmation email has been sent. Chelsea will reach out a few days before the gathering with location details and preparation notes.</p>
                  <div className="modal-footer" style={{width: '100%'}}>
                    <button type="button" className="button button-primary" id="modal-success-close-btn" style={{width: '100%'}}>Return to workshops</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>{/* /page-workshops */}
        {/* ┌─────────────────────────────────┐
         │  PAGE: SHOP                     │
         └─────────────────────────────────┘ */}
        <div id="page-shop" className="page">
          <div className="page-hero">
            <div className="page-hero-geo" aria-hidden="true">
              <svg viewBox="0 0 400 400" fill="none"><circle cx={200} cy={200} r={196} stroke="rgba(181,96,122,0.3)" strokeWidth="0.5" /><circle cx={200} cy={200} r={130} stroke="rgba(181,96,122,0.2)" strokeWidth="0.5" /><circle cx={200} cy={200} r={70} stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" /><circle cx={200} cy={200} r={30} stroke="rgba(201,151,42,0.35)" strokeWidth="0.5" /><circle cx={200} cy={120} r={80} stroke="rgba(181,96,122,0.1)" strokeWidth="0.4" /><circle cx={269} cy={160} r={80} stroke="rgba(181,96,122,0.1)" strokeWidth="0.4" /><circle cx={269} cy={240} r={80} stroke="rgba(181,96,122,0.1)" strokeWidth="0.4" /><circle cx={200} cy={280} r={80} stroke="rgba(181,96,122,0.1)" strokeWidth="0.4" /><circle cx={131} cy={240} r={80} stroke="rgba(181,96,122,0.1)" strokeWidth="0.4" /><circle cx={131} cy={160} r={80} stroke="rgba(181,96,122,0.1)" strokeWidth="0.4" /></svg>
            </div>
            <div className="page-hero-content">
              <p className="eyebrow">made slowly, by hand</p>
              <h1>Shop</h1>
              <div className="shop-ticker" aria-hidden="true">
                <div className="shop-ticker-track">
                  <span>Meditative craft</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Hand-pressed talismans</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Sacred relics</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Somatic art archives</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Made with intention</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Earth-bound vessels</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Ritual tools</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Embodied geometry</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Quiet keepsakes</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Terracotta relics</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                </div>
                <div className="shop-ticker-track">
                  <span>Meditative craft</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Hand-pressed talismans</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Sacred relics</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Somatic art archives</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Made with intention</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Earth-bound vessels</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Ritual tools</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Embodied geometry</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Quiet keepsakes</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                </div>
              </div>
            </div>
          </div>
          <section className="shop section-pad">
            <div className="shop-layout">
              <div className="shop-scroll-container">
                <div className="product-grid" id="shop-products-container">
                  <article className="product-card reveal">
                    <div className="product-image-wrap"><img src={asset("/assets/ubhi-snail-mail-generated.png")} alt="Volume 01 AUM snail mail package" /></div>
                    <div className="product-body">
                      <p className="eyebrow">Snail Mail</p>
                      <h3>Volume 01 · AUM</h3>
                      <p>Art print, researched letter, sticker, and ritual note. First in a monthly series.</p>
                      <div className="product-footer"><strong>£18</strong><button type="button" className="button button-secondary" data-buy-product="Volume 01 · AUM" data-price={18}>Bring home</button></div>
                    </div>
                  </article>
                  <article className="product-card reveal">
                    <div className="product-art yantra" aria-hidden="true">
                      <svg viewBox="0 0 200 200" fill="none" width="100%" height="100%"><circle cx={100} cy={100} r={90} stroke="rgba(201,151,42,0.4)" strokeWidth="0.8" /><circle cx={100} cy={100} r={60} stroke="rgba(201,151,42,0.28)" strokeWidth="0.6" /><circle cx={100} cy={100} r={30} stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" /><polygon points="100,20 172,155 28,155" stroke="rgba(201,151,42,0.5)" strokeWidth="0.8" fill="rgba(201,151,42,0.05)" /><polygon points="100,180 172,45 28,45" stroke="rgba(181,96,122,0.4)" strokeWidth="0.8" fill="rgba(181,96,122,0.04)" /><circle cx={100} cy={100} r={6} fill="rgba(201,151,42,0.65)" /></svg>
                    </div>
                    <div className="product-body">
                      <p className="eyebrow">Limited print</p>
                      <h3>AUM Geometry Print</h3>
                      <p>Terracotta linework on ivory archival paper. A4. Hand-stamped edition of 50.</p>
                      <div className="product-footer"><strong>£32</strong><button type="button" className="button button-secondary" data-buy-product="AUM Geometry Print" data-price={32}>Bring home</button></div>
                    </div>
                  </article>
                  <article className="product-card reveal">
                    <div className="product-art lotus" aria-hidden="true">
                      <svg viewBox="0 0 200 200" fill="none" width="100%" height="100%"><circle cx={100} cy={100} r={90} stroke="rgba(45,139,124,0.3)" strokeWidth="0.8" /><circle cx={100} cy={100} r={30} stroke="rgba(45,139,124,0.4)" strokeWidth="0.6" /><circle cx={100} cy={30} r={70} stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" /><circle cx={160} cy={65} r={70} stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" /><circle cx={160} cy={135} r={70} stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" /><circle cx={100} cy={170} r={70} stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" /><circle cx={40} cy={135} r={70} stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" /><circle cx={40} cy={65} r={70} stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" /><circle cx={100} cy={100} r={5} fill="rgba(45,139,124,0.65)" /></svg>
                    </div>
                    <div className="product-body">
                      <p className="eyebrow">Workshop object</p>
                      <h3>Lotus Sticker Set</h3>
                      <p>12 small symbols for journals, letters, and altar corners. Screen-printed on kraft paper.</p>
                      <div className="product-footer"><strong>£8</strong><button type="button" className="button button-secondary" data-buy-product="Lotus Sticker Set" data-price={8}>Bring home</button></div>
                    </div>
                  </article>
                  <article className="product-card reveal">
                    <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(45,139,124,0.1),rgba(7,6,14,0.9))'}} aria-hidden="true">
                      <svg viewBox="0 0 200 200" fill="none" width={120} height={120}><rect x={20} y={20} width={160} height={160} stroke="rgba(45,139,124,0.35)" strokeWidth="0.7" fill="none" /><rect x={50} y={50} width={100} height={100} stroke="rgba(45,139,124,0.28)" strokeWidth="0.6" fill="none" transform="rotate(45 100 100)" /><circle cx={100} cy={100} r={40} stroke="rgba(45,139,124,0.4)" strokeWidth="0.7" /><circle cx={100} cy={100} r={6} fill="rgba(45,139,124,0.6)" /></svg>
                    </div>
                    <div className="product-body">
                      <p className="eyebrow">Ritual tool</p>
                      <h3>Block Printing Starter Kit</h3>
                      <p>One hand-carved foam block, two ink pads, and a folded instruction card.</p>
                      <div className="product-footer"><strong>£24</strong><button type="button" className="button button-secondary" data-buy-product="Block Printing Starter Kit" data-price={24}>Bring home</button></div>
                    </div>
                  </article>
                  <article className="product-card reveal">
                    <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(201,151,42,0.08),rgba(7,6,14,0.9))'}} aria-hidden="true">
                      <svg viewBox="0 0 200 200" fill="none" width={120} height={120}><line x1={100} y1={10} x2={100} y2={190} stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" /><line x1={10} y1={100} x2={190} y2={100} stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" /><line x1={29} y1={29} x2={171} y2={171} stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" /><line x1={171} y1={29} x2={29} y2={171} stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" /><circle cx={100} cy={100} r={80} stroke="rgba(201,151,42,0.35)" strokeWidth="0.6" /><circle cx={100} cy={100} r={50} stroke="rgba(201,151,42,0.28)" strokeWidth="0.5" /><circle cx={100} cy={100} r={20} stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" /><circle cx={100} cy={100} r={5} fill="rgba(201,151,42,0.6)" /></svg>
                    </div>
                    <div className="product-body">
                      <p className="eyebrow">Drawing tool</p>
                      <h3>Sacred Geometry Compass Set</h3>
                      <p>Precision compass, ruler, and a guide to the first six patterns.</p>
                      <div className="product-footer"><strong>£28</strong><button type="button" className="button button-secondary" data-buy-product="Sacred Geometry Compass Set" data-price={28}>Bring home</button></div>
                    </div>
                  </article>
                  <article className="product-card reveal">
                    <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(181,96,122,0.09),rgba(7,6,14,0.9))'}} aria-hidden="true">
                      <svg viewBox="0 0 200 200" fill="none" width={120} height={120}><ellipse cx={100} cy={130} rx={70} ry={30} stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" fill="none" /><ellipse cx={100} cy={100} rx={50} ry={70} stroke="rgba(181,96,122,0.28)" strokeWidth="0.5" fill="none" /><ellipse cx={100} cy={100} rx={70} ry={50} stroke="rgba(181,96,122,0.28)" strokeWidth="0.5" fill="none" transform="rotate(60 100 100)" /><ellipse cx={100} cy={100} rx={70} ry={50} stroke="rgba(181,96,122,0.28)" strokeWidth="0.5" fill="none" transform="rotate(120 100 100)" /><circle cx={100} cy={100} r={6} fill="rgba(181,96,122,0.6)" /></svg>
                    </div>
                    <div className="product-body">
                      <p className="eyebrow">Ritual stationery</p>
                      <h3>Ubhi Journal — Blank</h3>
                      <p>A4 lay-flat, 160 pages of off-white cartridge paper. Embossed cover.</p>
                      <div className="product-footer"><strong>£22</strong><button type="button" className="button button-secondary" data-buy-product="Ubhi Journal — Blank" data-price={22}>Bring home</button></div>
                    </div>
                  </article>
                  {/* 6 New Products Below */}
                  <article className="product-card reveal">
                    <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(181,96,122,0.08),rgba(7,6,14,0.9))'}} aria-hidden="true">
                      <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                        <path d="M70,50 L130,50 M80,50 L80,65 C80,110 50,120 50,150 C50,175 70,180 100,180 C130,180 150,175 150,150 C150,120 120,110 120,65 L120,50" stroke="rgba(181,96,122,0.45)" strokeWidth="0.8" />
                        <ellipse cx={100} cy={50} rx={30} ry={8} stroke="rgba(181,96,122,0.5)" strokeWidth="0.7" />
                        <ellipse cx={100} cy={150} rx={42} ry={12} stroke="rgba(181,96,122,0.15)" strokeWidth="0.5" />
                        <circle cx={100} cy={120} r={14} stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
                      </svg>
                    </div>
                    <div className="product-body">
                      <p className="eyebrow">Clay craft</p>
                      <h3>Earth-bound Vessel</h3>
                      <p>Hand-thrown terracotta pot, wood-fired with organic glaze. Each piece holds a unique shape.</p>
                      <div className="product-footer"><strong>£45</strong><button type="button" className="button button-secondary" data-buy-product="Earth-bound Vessel" data-price={45}>Bring home</button></div>
                    </div>
                  </article>
                  <article className="product-card reveal">
                    <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(45,139,124,0.08),rgba(7,6,14,0.9))'}} aria-hidden="true">
                      <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                        <circle cx={100} cy={100} r={80} stroke="rgba(45,139,124,0.2)" strokeWidth="0.6" />
                        <path d="M30,100 Q60,40 100,100 T170,100" stroke="rgba(45,139,124,0.45)" strokeWidth="0.8" />
                        <path d="M30,100 Q60,160 100,100 T170,100" stroke="rgba(201,151,42,0.3)" strokeWidth="0.7" />
                        <circle cx={100} cy={100} r={5} fill="rgba(45,139,124,0.6)" />
                      </svg>
                    </div>
                    <div className="product-body">
                      <p className="eyebrow">Art archive</p>
                      <h3>Somatic Art Archive</h3>
                      <p>Folio of 4 linocut prints documenting bodily movement, printed on cotton rag paper.</p>
                      <div className="product-footer"><strong>£38</strong><button type="button" className="button button-secondary" data-buy-product="Somatic Art Archive" data-price={38}>Bring home</button></div>
                    </div>
                  </article>
                  <article className="product-card reveal">
                    <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(201,151,42,0.06),rgba(7,6,14,0.9))'}} aria-hidden="true">
                      <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                        <path d="M60,90 C80,70 110,80 100,110 C90,130 50,120 60,90 Z" stroke="rgba(201,151,42,0.4)" strokeWidth="0.7" />
                        <path d="M110,120 C130,100 160,110 150,130 C140,150 100,140 110,120 Z" stroke="rgba(201,151,42,0.3)" strokeWidth="0.7" />
                        <path d="M90,60 C110,40 130,55 120,75 C110,95 80,80 90,60 Z" stroke="rgba(181,96,122,0.35)" strokeWidth="0.7" />
                        <path d="M50,105 Q80,100 95,115" stroke="rgba(255,248,230,0.3)" strokeWidth="0.5" />
                        <path d="M105,65 Q115,75 125,60" stroke="rgba(255,248,230,0.3)" strokeWidth="0.5" />
                      </svg>
                    </div>
                    <div className="product-body">
                      <p className="eyebrow">Quiet keepsakes</p>
                      <h3>Quiet Keepsake Set</h3>
                      <p>Three polished river stones wrapped in woven brass wire. Altars and sensory focus.</p>
                      <div className="product-footer"><strong>£15</strong><button type="button" className="button button-secondary" data-buy-product="Quiet Keepsake Set" data-price={15}>Bring home</button></div>
                    </div>
                  </article>
                  <article className="product-card reveal">
                    <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(181,96,122,0.08),rgba(7,6,14,0.9))'}} aria-hidden="true">
                      <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                        <rect x={40} y={30} width={120} height={140} rx={3} stroke="rgba(181,96,122,0.4)" strokeWidth="0.8" />
                        <line x1={60} y1={50} x2={140} y2={50} stroke="rgba(181,96,122,0.25)" strokeWidth="0.6" />
                        <line x1={60} y1={70} x2={140} y2={70} stroke="rgba(181,96,122,0.25)" strokeWidth="0.6" />
                        <line x1={60} y1={130} x2={140} y2={130} stroke="rgba(181,96,122,0.25)" strokeWidth="0.6" />
                        <line x1={60} y1={150} x2={140} y2={150} stroke="rgba(181,96,122,0.25)" strokeWidth="0.6" />
                        <circle cx={100} cy={100} r={24} stroke="rgba(201,151,42,0.45)" strokeWidth="0.7" />
                        <polygon points="100,80 117,110 83,110" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
                        <circle cx={100} cy={100} r={3} fill="rgba(201,151,42,0.7)" />
                      </svg>
                    </div>
                    <div className="product-body">
                      <p className="eyebrow">Relic print</p>
                      <h3>Terracotta Relic Print</h3>
                      <p>Woodblock print in warm iron oxide inks, detailing ancient geometry on heavy card.</p>
                      <div className="product-footer"><strong>£26</strong><button type="button" className="button button-secondary" data-buy-product="Terracotta Relic Print" data-price={26}>Bring home</button></div>
                    </div>
                  </article>
                  <article className="product-card reveal">
                    <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(201,151,42,0.08),rgba(7,6,14,0.9))'}} aria-hidden="true">
                      <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                        <path d="M50,90 A50,50 0 0,0 150,90 Z" fill="rgba(201,151,42,0.08)" stroke="rgba(201,151,42,0.5)" strokeWidth="0.8" />
                        <line x1={40} y1={90} x2={160} y2={90} stroke="rgba(201,151,42,0.4)" strokeWidth="0.8" />
                        <path d="M85,140 L115,140 M100,140 L100,150 M80,150 L120,150" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
                        <path d="M100,80 Q95,65 105,50 T100,30" stroke="rgba(255,248,230,0.25)" strokeWidth="0.6" />
                        <circle cx={100} cy={90} r={3} fill="rgba(201,151,42,0.6)" />
                      </svg>
                    </div>
                    <div className="product-body">
                      <p className="eyebrow">Ritual tool</p>
                      <h3>Ritual Brass Bowl</h3>
                      <p>Hand-beaten brass incense bowl, matching sand, and wild-harvested white sage bundle.</p>
                      <div className="product-footer"><strong>£34</strong><button type="button" className="button button-secondary" data-buy-product="Ritual Brass Bowl" data-price={34}>Bring home</button></div>
                    </div>
                  </article>
                  <article className="product-card reveal">
                    <div className="product-image-wrap"><img src={asset("/assets/ubhi-snail-mail-generated.png")} alt="Volume 02 STILLNESS snail mail package" /></div>
                    <div className="product-body">
                      <p className="eyebrow">Snail Mail</p>
                      <h3>Volume 02 · STILLNESS</h3>
                      <p>A meditative envelope containing a charcoal drawing, philosophical letter, incense cones, and a ritual note.</p>
                      <div className="product-footer"><strong>£18</strong><button type="button" className="button button-secondary" data-buy-product="Volume 02 · STILLNESS" data-price={18}>Bring home</button></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            {/* Shop Purchase Modal */}
            <div id="shop-modal" className="modal-overlay" aria-hidden="true">
              <div className="modal-panel">
                <button className="modal-close" id="shop-modal-close-btn" type="button" aria-label="Close modal">×</button>
                <form id="modal-shop-form" noValidate>
                  {/* STEP 1: Delivery Details */}
                  <div id="shop-step-delivery" className="modal-step is-active">
                    <h2 className="modal-title">Delivery Details</h2>
                    <div className="modal-workshop-preview">
                      <span className="eyebrow" id="shop-preview-eyebrow">Product Purchase</span>
                      <h3 id="shop-preview-title">Volume 01 · AUM</h3>
                      <div className="modal-preview-details">
                        Total: <strong id="shop-preview-price">£18</strong>
                      </div>
                    </div>
                    <div className="modal-form-fields">
                      <div className="form-row">
                        <label htmlFor="shop-name-input">Name
                          <input id="shop-name-input" name="name" type="text" autoComplete="name" placeholder="Your name" required />
                        </label>
                        <label htmlFor="shop-email-input">Email
                          <input id="shop-email-input" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                        </label>
                      </div>
                      <label htmlFor="shop-mobile-input">Mobile Number
                        <input id="shop-mobile-input" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="e.g. 07123 456789" required />
                      </label>
                      <label htmlFor="shop-address-input">Street Address
                        <input id="shop-address-input" name="address" type="text" placeholder="123 Harmony Way" required />
                      </label>
                      <div className="form-row">
                        <label htmlFor="shop-city-input">City
                          <input id="shop-city-input" name="city" type="text" placeholder="London" required />
                        </label>
                        <label htmlFor="shop-postcode-input">Postcode
                          <input id="shop-postcode-input" name="postcode" type="text" placeholder="EC1A 1BB" required />
                        </label>
                      </div>
                      <label htmlFor="shop-country-input">Country
                        <input id="shop-country-input" name="country" type="text" placeholder="United Kingdom" required />
                      </label>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="button button-primary" id="shop-to-payment-btn" style={{width: '100%'}}>Proceed to Pay</button>
                    </div>
                  </div>
                  {/* STEP 2: Secure Payment */}
                  <div id="shop-step-payment" className="modal-step">
                    <div className="modal-payment-header">
                      <h2 className="modal-title">Secure Checkout</h2>
                      <div className="secure-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{width: 14, height: 14}}><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                        <span>SSL Encrypted</span>
                      </div>
                    </div>
                    <div className="modal-payment-summary">
                      <span>Amount due:</span>
                      <strong id="shop-payment-amount">£18</strong>
                    </div>
                    <div className="modal-form-fields">
                      <label htmlFor="shop-card-name">Cardholder Name
                        <input id="shop-card-name" name="cardname" type="text" placeholder="Name as printed on card" required />
                      </label>
                      <label htmlFor="shop-card-number">Card Number
                        <input id="shop-card-number" name="cardnumber" type="text" inputMode="numeric" placeholder="4111 2222 3333 4444" pattern="\d{4}\s?\d{4}\s?\d{4}\s?\d{4}" maxLength={19} required />
                      </label>
                      <div className="form-row">
                        <label htmlFor="shop-card-expiry">Expiry Date
                          <input id="shop-card-expiry" name="cardexpiry" type="text" placeholder="MM / YY" pattern="(0[1-9]|1[0-2])\s?\/\s?([0-9]{2})" maxLength={7} required />
                        </label>
                        <label htmlFor="shop-card-cvc">CVC
                          <input id="shop-card-cvc" name="cardcvc" type="text" inputMode="numeric" placeholder={123} pattern="\d{3,4}" maxLength={4} required />
                        </label>
                      </div>
                    </div>
                    <div className="modal-actions">
                      <button type="button" className="button button-secondary" id="shop-back-btn" style={{flex: 1}}>← Back</button>
                      <button type="submit" className="button button-primary" id="shop-pay-btn" style={{flex: 2}}>Pay Now</button>
                    </div>
                  </div>
                  {/* STEP 3: Order Success */}
                  <div id="shop-step-success" className="modal-step">
                    <div className="modal-success-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth={1}>
                        <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.15)" />
                      </svg>
                    </div>
                    <h2 className="modal-title">Order Placed</h2>
                    <p id="shop-success-msg" className="modal-success-message">Thank you. Your order has been received.</p>
                    <p className="modal-success-subtext">A purchase receipt has been sent to your email. We will prepare your package with quiet care and dispatch it soon.</p>
                    <div className="modal-footer" style={{width: '100%'}}>
                      <button type="button" className="button button-primary" id="shop-success-close-btn" style={{width: '100%'}}>Return to shop</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>{/* /page-shop */}
        {/* ┌─────────────────────────────────┐
         │  PAGE: SNAIL MAIL               │
         └─────────────────────────────────┘ */}
        <div id="page-snail-mail" className="page">
          <div className="page-hero">
            <div className="page-hero-geo" aria-hidden="true">
              <svg viewBox="0 0 400 400" fill="none"><circle cx={200} cy={200} r={196} stroke="rgba(45,139,124,0.3)" strokeWidth="0.5" /><circle cx={200} cy={200} r={140} stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" /><circle cx={200} cy={200} r={80} stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" /><circle cx={200} cy={200} r={40} stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" /><circle cx={200} cy={120} r={80} stroke="rgba(45,139,124,0.1)" strokeWidth="0.4" /><circle cx={269} cy={160} r={80} stroke="rgba(45,139,124,0.1)" strokeWidth="0.4" /><circle cx={269} cy={240} r={80} stroke="rgba(45,139,124,0.1)" strokeWidth="0.4" /><circle cx={200} cy={280} r={80} stroke="rgba(45,139,124,0.1)" strokeWidth="0.4" /><circle cx={131} cy={240} r={80} stroke="rgba(45,139,124,0.1)" strokeWidth="0.4" /><circle cx={131} cy={160} r={80} stroke="rgba(45,139,124,0.1)" strokeWidth="0.4" /></svg>
            </div>
            <div className="page-hero-content">
              <p className="eyebrow">philosophy, posted to your door</p>
              <h1>Ubhi Snail Mail Club 🌀</h1>
              <div className="snail-hero-cta">
                <button type="button" className="snail-hero-subscribe" data-scroll-to-plans>
                  <span className="shs-stamp" aria-hidden="true"><svg viewBox="0 0 120 140"><use href="#art-stamp" filter="url(#rough)" /></svg></span>
                  <span className="shs-label">Join the Club <em>· Click to explore plans</em></span>
                </button>
                <span className="snail-hero-cta-note">monthly letter + art posted to your door · cancel anytime</span>
              </div>
              <div className="snail-mail-ticker" aria-hidden="true">
                <div className="snail-mail-ticker-track">
                  <span>Philosophy by post</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Delivered monthly</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Physical letters</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Hand-finished prints</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Tactile philosophy</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Collectible volumes</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Objects of presence</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Slow reading</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Ink &amp; raw paper</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                </div>
                <div className="snail-mail-ticker-track">
                  <span>Philosophy by post</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Delivered monthly</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Physical letters</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Hand-finished prints</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Tactile philosophy</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Collectible volumes</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Objects of presence</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Slow reading</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Ink &amp; raw paper</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                </div>
              </div>
            </div>
          </div>
          <div className="snail-mail-layout">
            {/* Section 1: The Story Behind the Club (The Letter) */}
            <section className="snail-story-section reveal">
              <div className="snail-story-wrapper">
                {/* Floating Colored Envelopes (Open and close in a loop showing tiny letters) */}
                <div className="snail-envelope-floating env-color-1 env-pos-1">
                  <div className="env-paper">🪷</div>
                  <div className="env-body" />
                  <div className="env-flap" />
                  <div className="env-seal" />
                  <span className="snail-float-tooltip">Sacred Lotus</span>
                </div>
                <div className="snail-envelope-floating env-color-2 env-pos-2">
                  <div className="env-paper">🌿</div>
                  <div className="env-body" />
                  <div className="env-flap" />
                  <div className="env-seal" />
                  <span className="snail-float-tooltip">Prana Breath</span>
                </div>
                <div className="snail-envelope-floating env-color-3 env-pos-3">
                  <div className="env-paper">✨</div>
                  <div className="env-body" />
                  <div className="env-flap" />
                  <div className="env-seal" />
                  <span className="snail-float-tooltip">Cosmic Light</span>
                </div>
                <div className="snail-envelope-floating env-color-4 env-pos-4">
                  <div className="env-paper">🌀</div>
                  <div className="env-body" />
                  <div className="env-flap" />
                  <div className="env-seal" />
                  <span className="snail-float-tooltip">Resonance</span>
                </div>
                <div className="snail-envelope-floating env-color-5 env-pos-5">
                  <div className="env-paper">☀️</div>
                  <div className="env-body" />
                  <div className="env-flap" />
                  <div className="env-seal" />
                  <span className="snail-float-tooltip">Solar Stillness</span>
                </div>
                <div className="snail-envelope-floating env-color-6 env-pos-6">
                  <div className="env-paper">🐚</div>
                  <div className="env-body" />
                  <div className="env-flap" />
                  <div className="env-seal" />
                  <span className="snail-float-tooltip">Tactile Art</span>
                </div>
                {/* Right Side Envelopes */}
                <div className="snail-envelope-floating env-color-7 env-pos-7">
                  <div className="env-paper">💌</div>
                  <div className="env-body" />
                  <div className="env-flap" />
                  <div className="env-seal" />
                  <span className="snail-float-tooltip">Chelsea's Note</span>
                </div>
                <div className="snail-envelope-floating env-color-8 env-pos-8">
                  <div className="env-paper">🌙</div>
                  <div className="env-body" />
                  <div className="env-flap" />
                  <div className="env-seal" />
                  <span className="snail-float-tooltip">Somatic Ritual</span>
                </div>
                <div className="snail-envelope-floating env-color-1 env-pos-9">
                  <div className="env-paper">🌸</div>
                  <div className="env-body" />
                  <div className="env-flap" />
                  <div className="env-seal" />
                  <span className="snail-float-tooltip">Muddy Blossoms</span>
                </div>
                <div className="snail-envelope-floating env-color-3 env-pos-10">
                  <div className="env-paper">🎨</div>
                  <div className="env-body" />
                  <div className="env-flap" />
                  <div className="env-seal" />
                  <span className="snail-float-tooltip">Hand-Pressed</span>
                </div>
                <div className="snail-envelope-floating env-color-2 env-pos-11">
                  <div className="env-paper">🧘</div>
                  <div className="env-body" />
                  <div className="env-flap" />
                  <div className="env-seal" />
                  <span className="snail-float-tooltip">Quiet Presence</span>
                </div>
                <div className="snail-envelope-floating env-color-4 env-pos-12">
                  <div className="env-paper">🏺</div>
                  <div className="env-body" />
                  <div className="env-flap" />
                  <div className="env-seal" />
                  <span className="snail-float-tooltip">Vedic Lore</span>
                </div>
                <div className="snail-letter-mount">
                  <button className="snail-closed-envelope" id="snail-closed-envelope" type="button" aria-label="Open the letter from Chelsea">
                    <span className="ce-flap" aria-hidden="true" />
                    <span className="ce-wax" aria-hidden="true">UBHI</span>
                    <span className="ce-hint">a letter for you&nbsp;·&nbsp;<em>click to open</em></span>
                  </button>
                  <span className="env-back" aria-hidden="true" />
                  <span className="env-flap" aria-hidden="true" />
                  <div className="snail-paper-sheet snail-letter-story">
                    <span className="snail-letter-stamp" aria-hidden="true"><svg viewBox="0 0 120 140"><use href="#art-stamp" /></svg></span>
                    <span className="snail-letter-wax" aria-hidden="true"><i className="wax-half wax-l" /><i className="wax-half wax-r" /></span>
                    <div className="snail-marginalia note-top-right">
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" style={{marginBottom: 4}}>
                        <path d="M12 2L15 8L22 9L17 14L18 21L12 17L6 21L7 14L2 9L9 8L12 2Z" />
                      </svg>
                      <div>Each seal is stamped by hand.</div>
                    </div>
                    <div className="snail-letter-header">
                      <h2 className="snail-letter-salutation">Dear Seekers,</h2>
                      <span className="snail-letter-date">June, 2026</span>
                    </div>
                    <div className="snail-letter-body">
                      <p>There is a quiet kind of magic in things you can hold. A screen flickers and is gone; a letter waits in your hands, and stays.</p>
                      <p>So once a month I sit at this little desk and make you something real — a few slow pages, a print pressed by hand, a small thing to hold when the world moves too fast. Not a box of clever stuff. A pause, folded into an envelope and posted to your door.</p>
                      <p>If you have read this far, I think you feel it too. Come wander a while with me — there is always room here to slow right down.</p>
                    </div>
                    <div className="snail-letter-signature">
                      With love &amp; a little magic,<br />
                      — Chelsea Kaur Ubhi
                    </div>
                    <div className="snail-marginalia note-bottom-left">
                      <svg width={40} height={20} viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth={1}>
                        <path d="M5,10 Q20,18 35,10" />
                        <path d="M30,5 L35,10 L30,15" />
                      </svg>
                      <div>Archival cotton paper, made to endure.</div>
                    </div>
                  </div>
                </div>{/* /snail-letter-mount */}
              </div>{/* /snail-story-wrapper */}
            </section>
          </div>{/* /snail-mail-layout */}
          {/* Section 2: What Arrives Each Month (Anatomy) */}
          <section className="snail-anatomy-section reveal">
            <h2 className="text-center" style={{fontFamily: '"Fraunces",serif', fontStyle: 'italic', fontWeight: 300, marginBottom: 32, color: 'var(--stardust-full)'}}>What the Envelope Holds</h2>
            <div className="snail-anatomy-grid">
              <div className="snail-anatomy-card">
                <div className="snail-anatomy-art">
                  {/* Botanical Leaf Line Art SVG */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                    <path d="M12 22C12 22 12 12 12 2C12 12 16 9 18 12C20 15 17 19 12 22Z" fill="rgba(45,139,124,0.05)" />
                    <path d="M12 22C12 22 12 12 12 2C12 12 8 9 6 12C4 15 7 19 12 22Z" fill="rgba(45,139,124,0.05)" />
                    <path d="M12 6C14 7 16 7 16 7M12 10C15 11 17 11 17 11M12 14C14 15 15 16 15 16" />
                    <path d="M12 6C10 7 8 7 8 7M12 10C9 11 7 11 7 11M12 14C10 15 9 16 9 16" />
                  </svg>
                </div>
                <h3>The Art Print</h3>
                <p>A window into my quiet hours. I sit at my desk, mixing ink and block-pressing each sheet of raw cotton paper by hand. It carries the texture of presence and the shapes of sacred geometries I draw while listening to the silence of the morning. A visual reminder of still spaces to hang on your wall.</p>
              </div>
              <div className="snail-anatomy-card">
                <div className="snail-anatomy-art">
                  {/* Quill/Pen Line Art SVG */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                    <path d="M4 20L8 16L18 6C19 5 20 5 21 6C22 7 22 8 21 9L11 19L7 20L4 20Z" fill="rgba(45,139,124,0.05)" />
                    <line x1={8} y1={16} x2={11} y2={13} />
                    <path d="M15 9L17 11" />
                    <path d="M3 21H21" />
                  </svg>
                </div>
                <h3>The Letter</h3>
                <p>Four pages of slow thoughts sent from my desk to yours. I share the threads of what I am learning—weaving ancient Vedic ideas, somatic practices that calm my own nervous system, and thoughts on art as meditation. Written like a letter to a dear friend, meant to be read with a warm cup of tea.</p>
              </div>
              <div className="snail-anatomy-card">
                <div className="snail-anatomy-art">
                  {/* Sacred Lotus sketch SVG */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                    <path d="M12 21C12 21 8 16 8 12C8 8 12 3 12 3C12 3 16 8 16 12C16 16 12 21 12 21Z" fill="rgba(45,139,124,0.05)" />
                    <path d="M12 21C12 21 4 16 4 12C4 8 8 7 12 10" />
                    <path d="M12 21C12 21 20 16 20 12C20 8 16 7 12 10" />
                    <path d="M12 21C9 21 6 19 6 17C6 15 12 15 12 15" />
                    <path d="M12 21C15 21 18 19 18 17C18 15 12 15 12 15" />
                  </svg>
                </div>
                <h3>The Relic</h3>
                <p>A physical keeper of presence. Sometimes it is a brass coin that sat in my hands, a piece of raw terracotta, or wild smudge leaves I wrapped myself. It is something small and heavy to hold in your palm when you need to bring your awareness back from the digital rush and ground yourself in the now.</p>
              </div>
            </div>
          </section>
          {/* Subscription plans — moved up so visitors meet the subscribe options before the peek */}
          <div className="snail-mail-layout">
            {/* Section 6: Subscription plans selector */}
            <section className="snail-plans-section reveal" id="snail-subscribe-anchor">
              <h2 className="text-center" style={{fontFamily: '"Fraunces",serif', fontStyle: 'italic', fontWeight: 300, marginBottom: 8, color: 'var(--stardust-full)'}}>Let’s be pen pals</h2>
              <p className="text-center" style={{color: 'var(--stardust)', fontSize: '0.95rem', maxWidth: 500, margin: '0 auto 24px auto'}}>Select a subscription commitment below. Longer commitments include exclusive handmade welcome gifts from Chelsea's pottery wheel.</p>
              <div className="snail-plans-grid">
                <div className="snail-plan-card is-active" data-plan="12 Months" data-price={14} data-desc="Billed monthly. Includes a bonus hand-thrown pottery inkwell.">
                  <div className="plan-wax-seal">
                    <div className="wax-seal gold" style={{position: 'static', transform: 'none', width: 32, height: 32}}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" />
                      </svg>
                    </div>
                  </div>
                  <span className="snail-plan-term">12 Months</span>
                  <div className="snail-plan-price">£14</div>
                  <span className="snail-plan-period">/ month</span>
                  <p className="snail-plan-desc">A full year of slow post — twelve parcels, opened with a hand-thrown clay inkwell.</p>
                </div>
                <div className="snail-plan-card" data-plan="9 Months" data-price={15} data-desc="Billed monthly. Includes a bonus gold-leafed sacred geometry print.">
                  <div className="plan-wax-seal">
                    <div className="wax-seal gold" style={{position: 'static', transform: 'none', width: 32, height: 32}}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" />
                      </svg>
                    </div>
                  </div>
                  <span className="snail-plan-term">9 Months</span>
                  <div className="snail-plan-price">£15</div>
                  <span className="snail-plan-period">/ month</span>
                  <p className="snail-plan-desc">Three seasons of letters, gilded with a gold-leaf yantra print.</p>
                </div>
                <div className="snail-plan-card" data-plan="6 Months" data-price={16} data-desc="Billed monthly. Includes a botanically-dyed linen envelope wrapper.">
                  <div className="plan-wax-seal">
                    <div className="wax-seal gold" style={{position: 'static', transform: 'none', width: 32, height: 32}}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" />
                      </svg>
                    </div>
                  </div>
                  <span className="snail-plan-term">6 Months</span>
                  <div className="snail-plan-price">£16</div>
                  <span className="snail-plan-period">/ month</span>
                  <p className="snail-plan-desc">Half a year of handmade post, wrapped in botanically-dyed linen.</p>
                </div>
                <div className="snail-plan-card" data-plan="3 Months" data-price={17} data-desc="Billed monthly. Includes Volume 01 to Volume 03.">
                  <div className="plan-wax-seal">
                    <div className="wax-seal gold" style={{position: 'static', transform: 'none', width: 32, height: 32}}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" />
                      </svg>
                    </div>
                  </div>
                  <span className="snail-plan-term">3 Months</span>
                  <div className="snail-plan-price">£17</div>
                  <span className="snail-plan-period">/ month</span>
                  <p className="snail-plan-desc">A gentle first cycle — three moons of letters to begin.</p>
                </div>
                <div className="snail-plan-card" data-plan="Monthly" data-price={18} data-desc="Billed monthly. Pay as you go, cancel anytime.">
                  <div className="plan-wax-seal">
                    <div className="wax-seal gold" style={{position: 'static', transform: 'none', width: 32, height: 32}}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" />
                      </svg>
                    </div>
                  </div>
                  <span className="snail-plan-term">Monthly</span>
                  <div className="snail-plan-price">£18</div>
                  <span className="snail-plan-period">/ month</span>
                  <p className="snail-plan-desc">Month to month, no commitment — pause whenever you like.</p>
                </div>
              </div>
              <div className="snail-plans-footer">
                <div className="snail-selected-summary" id="snail-selected-summary">
                  Selected: <strong>12 Months Journey</strong> · <strong>£14 / month</strong>
                  <p
                    style={{fontSize: '0.85rem', color: 'rgba(220,205,185,0.6)', marginTop: 6, fontFamily: '"EB Garamond", sans-serif', fontStyle: 'normal'}}
                    id="snail-selected-desc"
                  >Billed monthly. Includes a bonus hand-thrown pottery inkwell.</p>
                </div>
                <button className="button button-primary" type="button" id="snail-subscribe-btn">Step into the Club</button>
              </div>
            </section>
          </div>{/* /snail-mail-layout */}
          {/* NEW: Peek inside the last letter */}
          <section className="snail-peek-section reveal">
            <h2 className="text-center snail-section-title">Peek inside the last letter</h2>
            <p className="text-center snail-section-sub">A few lines from June's envelope — read it over my shoulder, the way it lands on a kitchen table before it ever reaches your door.</p>
            <div className="snail-peek-letter" id="snail-peek-letter">
              <div className="snail-peek-paper">
                {/* washi tape pinning the sheet to the desk (gradient lifted from .snail-anatomy-card::before) */}
                <span className="snail-peek-tape" aria-hidden="true" />
                {/* franked postage stamp + circular postmark, top-right */}
                <span className="snail-peek-stamp" aria-hidden="true">
                  <svg viewBox="0 0 120 140"><use href="#art-stamp" filter="url(#rough)" /></svg>
                </span>
                <span className="snail-peek-postmark" aria-hidden="true">
                  <span className="pm-arc">· Ubhi Post ·</span>
                  <span className="pm-vol">Vol.06</span>
                  <span className="pm-arc">London · Jun</span>
                </span>
                <span className="snail-peek-vol">Vol. 06 · Muddy Blossoms</span>
                <div className="snail-peek-excerpt">
                  <p className="snail-peek-lede">The lotus does not resent the mud. It needs it — roots itself in the dark, the heavy, the unlovely — and only then learns how to rise.</p>
                  <p className="snail-peek-more">So this month I kept asking a gentler question of my own difficult days: not <em>how do I escape the mud</em>, but <em>what is it quietly trying to grow</em>? I drew the answer more than I wrote it. You'll find the pressed bloom tucked into the second fold, and a small terracotta weight to hold while you sit with the thought.</p>
                </div>
                <span className="snail-peek-sign">— with presence, Chelsea</span>
                {/* horizontal fold crease across the sheet */}
                <span className="snail-peek-fold" aria-hidden="true" />
                {/* pressed bloom tucked at the lower fold */}
                <span className="snail-peek-bloom" aria-hidden="true">
                  <svg viewBox="0 0 64 64"><use href="#art-lotus" filter="url(#rough)" /></svg>
                </span>
                {/* small terracotta weight holding the page down */}
                <span className="snail-peek-weight" aria-hidden="true">
                  <svg viewBox="0 0 64 56" fill="none">
                    <path d="M14 50 C10 36 18 22 32 22 C46 22 54 36 50 50 Z" fill="rgba(160,78,46,0.9)" stroke="#7c3a25" strokeWidth="1.2" />
                    <ellipse cx={32} cy={22} rx={18} ry={5} fill="#9c4a2e" stroke="#7c3a25" strokeWidth="1.2" />
                    <path d="M22 30 C28 33 36 33 42 30" stroke="rgba(255,236,222,0.4)" strokeWidth={1} />
                  </svg>
                </span>
                {/* marginalia in the brand's ink hand */}
                <div className="snail-marginalia note-top-right snail-peek-note">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" style={{marginBottom: 4}}>
                    <path d="M12 2L15 8L22 9L17 14L18 21L12 17L6 21L7 14L2 9L9 8L12 2Z" />
                  </svg>
                  <div>drew this one more than I wrote it.</div>
                </div>
                <div className="snail-marginalia note-bottom-left snail-peek-note">
                  <svg width={40} height={20} viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth={1}>
                    <path d="M5,10 Q20,18 35,10" /><path d="M30,5 L35,10 L30,15" />
                  </svg>
                  <div>pressed bloom · second fold</div>
                </div>
              </div>
            </div>
          </section>
          {/* Section 3: Monthly Theme Showcase */}
          <section className="snail-archive-section reveal">
            <h2 className="text-center" style={{fontFamily: '"Fraunces",serif', fontStyle: 'italic', fontWeight: 300, marginBottom: 8, color: 'var(--stardust-full)'}}>Letters we have sent into the world</h2>
            <p
              className="text-center"
              style={{color: 'var(--stardust)', fontSize: '0.95rem', maxWidth: 560, margin: '0 auto 28px auto', fontFamily: '"EB Garamond", sans-serif', lineHeight: 1.6}}
            >Every envelope is a slow-crafted blessing, block-pressed by hand and written in moments of quiet presence. Here is a personal visual archive of the resonance, art, and rituals we have shared directly with your hands over the past twelve moons. Tap any snapshot to view closer.</p>
            <div className="snail-photos-container" id="snail-photos-carousel-container">
              <div className="snail-photos-track">
                <div className="gallery-item snail-photo-card snail-rot-left-1">
                  <img src={asset("/assets/ubhi-snail-mail-generated.png")} decoding="async" alt="January — Volume 01: AUM" />
                  <div className="snail-photo-caption">January — Vol. 01: AUM ॐ</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-right-1">
                  <img src={asset("/assets/gallery-block-print.png")} decoding="async" alt="February — Volume 02: Prana" />
                  <div className="snail-photo-caption">February — Vol. 02: Prana 🌀</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-left-2">
                  <img src={asset("/assets/gallery-geometry-draw.png")} decoding="async" alt="March — Volume 03: Lotus" />
                  <div className="snail-photo-caption">March — Vol. 03: Lotus 🪷</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-right-2">
                  <img src={asset("/assets/gallery-yoga-breath.png")} decoding="async" alt="April — Volume 04: Prithvi" />
                  <div className="snail-photo-caption">April — Vol. 04: Prithvi 🌍</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-zero">
                  <img src={asset("/assets/ubhi-workshop-generated.png")} decoding="async" alt="May — Volume 05: Vayu" />
                  <div className="snail-photo-caption">May — Vol. 05: Vayu 🌬️</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-left-1">
                  <img src={asset("/assets/ubhi-snail-mail-generated.png")} decoding="async" alt="June — Volume 06: Akasha" />
                  <div className="snail-photo-caption">June — Vol. 06: Akasha ✨</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-right-1">
                  <img src={asset("/assets/gallery-block-print.png")} decoding="async" alt="July — Volume 07: Agni" />
                  <div className="snail-photo-caption">July — Vol. 07: Agni 🔥</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-left-2">
                  <img src={asset("/assets/gallery-geometry-draw.png")} decoding="async" alt="August — Volume 08: Jala" />
                  <div className="snail-photo-caption">August — Vol. 08: Jala 🌊</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-right-2">
                  <img src={asset("/assets/gallery-yoga-breath.png")} decoding="async" alt="September — Volume 09: Tejas" />
                  <div className="snail-photo-caption">September — Vol. 09: Tejas ☀️</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-zero">
                  <img src={asset("/assets/ubhi-workshop-generated.png")} decoding="async" alt="October — Volume 10: Ojas" />
                  <div className="snail-photo-caption">October — Vol. 10: Ojas 🍯</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-left-1">
                  <img src={asset("/assets/ubhi-snail-mail-generated.png")} decoding="async" alt="November — Volume 11: Soma" />
                  <div className="snail-photo-caption">November — Vol. 11: Soma 🌙</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-right-1">
                  <img src={asset("/assets/gallery-block-print.png")} decoding="async" alt="December — Volume 12: Dhyana" />
                  <div className="snail-photo-caption">December — Vol. 12: Dhyana 🧘</div>
                </div>
              </div>
              <div className="snail-photos-track" aria-hidden="true">
                <div className="gallery-item snail-photo-card snail-rot-left-1">
                  <img src={asset("/assets/ubhi-snail-mail-generated.png")} decoding="async" alt="January — Volume 01: AUM" />
                  <div className="snail-photo-caption">January — Vol. 01: AUM ॐ</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-right-1">
                  <img src={asset("/assets/gallery-block-print.png")} decoding="async" alt="February — Volume 02: Prana" />
                  <div className="snail-photo-caption">February — Vol. 02: Prana 🌀</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-left-2">
                  <img src={asset("/assets/gallery-geometry-draw.png")} decoding="async" alt="March — Volume 03: Lotus" />
                  <div className="snail-photo-caption">March — Vol. 03: Lotus 🪷</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-right-2">
                  <img src={asset("/assets/gallery-yoga-breath.png")} decoding="async" alt="April — Volume 04: Prithvi" />
                  <div className="snail-photo-caption">April — Vol. 04: Prithvi 🌍</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-zero">
                  <img src={asset("/assets/ubhi-workshop-generated.png")} decoding="async" alt="May — Volume 05: Vayu" />
                  <div className="snail-photo-caption">May — Vol. 05: Vayu 🌬️</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-left-1">
                  <img src={asset("/assets/ubhi-snail-mail-generated.png")} decoding="async" alt="June — Volume 06: Akasha" />
                  <div className="snail-photo-caption">June — Vol. 06: Akasha ✨</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-right-1">
                  <img src={asset("/assets/gallery-block-print.png")} decoding="async" alt="July — Volume 07: Agni" />
                  <div className="snail-photo-caption">July — Vol. 07: Agni 🔥</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-left-2">
                  <img src={asset("/assets/gallery-geometry-draw.png")} decoding="async" alt="August — Volume 08: Jala" />
                  <div className="snail-photo-caption">August — Vol. 08: Jala 🌊</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-right-2">
                  <img src={asset("/assets/gallery-yoga-breath.png")} decoding="async" alt="September — Volume 09: Tejas" />
                  <div className="snail-photo-caption">September — Vol. 09: Tejas ☀️</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-zero">
                  <img src={asset("/assets/ubhi-workshop-generated.png")} decoding="async" alt="October — Volume 10: Ojas" />
                  <div className="snail-photo-caption">October — Vol. 10: Ojas 🍯</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-left-1">
                  <img src={asset("/assets/ubhi-snail-mail-generated.png")} decoding="async" alt="November — Volume 11: Soma" />
                  <div className="snail-photo-caption">November — Vol. 11: Soma 🌙</div>
                </div>
                <div className="gallery-item snail-photo-card snail-rot-right-1">
                  <img src={asset("/assets/gallery-block-print.png")} decoding="async" alt="December — Volume 12: Dhyana" />
                  <div className="snail-photo-caption">December — Vol. 12: Dhyana 🧘</div>
                </div>
              </div>
            </div>
          </section>
          {/* Section 5: Love and energy resonating back to the mail club (Sliding Postcards) */}
          <section className="snail-testimonials-section reveal">
            <h2 className="text-center" style={{fontFamily: '"Fraunces",serif', fontStyle: 'italic', fontWeight: 300, marginBottom: 8, color: 'var(--stardust-full)'}}>Notes back from the letterbox</h2>
            <p
              className="text-center"
              style={{color: 'var(--stardust)', fontSize: '0.95rem', maxWidth: 540, margin: '0 auto 28px auto', fontFamily: '"EB Garamond", sans-serif', lineHeight: 1.6}}
            >A collection of handwritten reviews, stamps of presence, and notes of resonance sent back to us from our dear members.</p>
            <div className="snail-reviews-container" id="snail-reviews-carousel-container">
              <div className="snail-reviews-track">
                <div className="snail-review-card snail-rot-left-1">
                  <div className="snail-review-left">
                    <p className="snail-review-text">"Opening this envelope has become my sacred monthly ritual. The smell of cedar, the weight of the cotton paper... my nervous system settles instantly."</p>
                    <span className="snail-review-author">— Eleanor K. 🌿</span>
                  </div>
                  <div className="snail-review-right">
                    <div className="snail-review-stamp">🪷</div>
                    <div className="snail-review-lines">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
                <div className="snail-review-card snail-rot-right-1">
                  <div className="snail-review-left">
                    <p className="snail-review-text">"In a world of spam and infinite scroll, receiving a letter written with deep focus, alongside a gorgeous print, is the most meaningful item on my desk."</p>
                    <span className="snail-review-author">— James W. ✨</span>
                  </div>
                  <div className="snail-review-right">
                    <div className="snail-review-stamp">💌</div>
                    <div className="snail-review-lines">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
                <div className="snail-review-card snail-rot-left-2">
                  <div className="snail-review-left">
                    <p className="snail-review-text">"The sacred yantra drawings help me anchor my morning meditations. Having a physical piece of philosophy in my hands is a gamechanger."</p>
                    <span className="snail-review-author">— Maya R. 🧘</span>
                  </div>
                  <div className="snail-review-right">
                    <div className="snail-review-stamp">🌀</div>
                    <div className="snail-review-lines">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
                <div className="snail-review-card snail-rot-right-2">
                  <div className="snail-review-left">
                    <p className="snail-review-text">"A masterclass in slow living. The organic incense blocks and handwritten reflections feel like a warm, supportive hug from a dear friend."</p>
                    <span className="snail-review-author">— Thomas H. 🌙</span>
                  </div>
                  <div className="snail-review-right">
                    <div className="snail-review-stamp">🕯️</div>
                    <div className="snail-review-lines">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
                <div className="snail-review-card snail-rot-zero">
                  <div className="snail-review-left">
                    <p className="snail-review-text">"Breaking the gold wax seal on the envelope brings back the magic of tactile mail. An absolute highlight of my month."</p>
                    <span className="snail-review-author">— Sophia L. ॐ</span>
                  </div>
                  <div className="snail-review-right">
                    <div className="snail-review-stamp">🌸</div>
                    <div className="snail-review-lines">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
                <div className="snail-review-card snail-rot-left-1">
                  <div className="snail-review-left">
                    <p className="snail-review-text">"It's not a box of commercial items; it's art, mindfulness, and sacred geometry in its purest, most luxurious form. I cherish every edition."</p>
                    <span className="snail-review-author">— Liam D. 🎨</span>
                  </div>
                  <div className="snail-review-right">
                    <div className="snail-review-stamp">🌿</div>
                    <div className="snail-review-lines">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
              </div>
              <div className="snail-reviews-track" aria-hidden="true">
                <div className="snail-review-card snail-rot-left-1">
                  <div className="snail-review-left">
                    <p className="snail-review-text">"Opening this envelope has become my sacred monthly ritual. The smell of cedar, the weight of the cotton paper... my nervous system settles instantly."</p>
                    <span className="snail-review-author">— Eleanor K. 🌿</span>
                  </div>
                  <div className="snail-review-right">
                    <div className="snail-review-stamp">🪷</div>
                    <div className="snail-review-lines">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
                <div className="snail-review-card snail-rot-right-1">
                  <div className="snail-review-left">
                    <p className="snail-review-text">"In a world of spam and infinite scroll, receiving a letter written with deep focus, alongside a gorgeous print, is the most meaningful item on my desk."</p>
                    <span className="snail-review-author">— James W. ✨</span>
                  </div>
                  <div className="snail-review-right">
                    <div className="snail-review-stamp">💌</div>
                    <div className="snail-review-lines">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
                <div className="snail-review-card snail-rot-left-2">
                  <div className="snail-review-left">
                    <p className="snail-review-text">"The sacred yantra drawings help me anchor my morning meditations. Having a physical piece of philosophy in my hands is a gamechanger."</p>
                    <span className="snail-review-author">— Maya R. 🧘</span>
                  </div>
                  <div className="snail-review-right">
                    <div className="snail-review-stamp">🌀</div>
                    <div className="snail-review-lines">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
                <div className="snail-review-card snail-rot-right-2">
                  <div className="snail-review-left">
                    <p className="snail-review-text">"A masterclass in slow living. The organic incense blocks and handwritten reflections feel like a warm, supportive hug from a dear friend."</p>
                    <span className="snail-review-author">— Thomas H. 🌙</span>
                  </div>
                  <div className="snail-review-right">
                    <div className="snail-review-stamp">🕯️</div>
                    <div className="snail-review-lines">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
                <div className="snail-review-card snail-rot-zero">
                  <div className="snail-review-left">
                    <p className="snail-review-text">"Breaking the gold wax seal on the envelope brings back the magic of tactile mail. An absolute highlight of my month."</p>
                    <span className="snail-review-author">— Sophia L. ॐ</span>
                  </div>
                  <div className="snail-review-right">
                    <div className="snail-review-stamp">🌸</div>
                    <div className="snail-review-lines">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
                <div className="snail-review-card snail-rot-left-1">
                  <div className="snail-review-left">
                    <p className="snail-review-text">"It's not a box of commercial items; it's art, mindfulness, and sacred geometry in its purest, most luxurious form. I cherish every edition."</p>
                    <span className="snail-review-author">— Liam D. 🎨</span>
                  </div>
                  <div className="snail-review-right">
                    <div className="snail-review-stamp">🌿</div>
                    <div className="snail-review-lines">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Snail Mail Checkout Modal */}
          <div id="snail-modal" className="modal-overlay" role="dialog" aria-modal="true" aria-hidden="true">
            <div className="modal-panel glass-panel">
              <button className="modal-close" type="button" id="snail-modal-close-btn" aria-label="Close modal">×</button>
              {/* Step 1: Delivery Address */}
              <div id="snail-step-delivery" className="modal-step is-active">
                <h2 className="modal-title">Shipping Address</h2>
                <p className="step-intro">Where should we deliver your monthly philosophy package?</p>
                <div className="modal-summary-panel" style={{marginBottom: 20}}>
                  <span>Selected Plan:</span>
                  <strong id="snail-modal-plan-name">12 Months Journey</strong>
                  <span id="snail-modal-plan-price">£14 / month</span>
                </div>
                <form id="modal-snail-form" autoComplete="on">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="snail-name-input">Full name</label>
                      <input type="text" id="snail-name-input" required placeholder="Elena Rostova" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="snail-email-input">Email address</label>
                      <input type="email" id="snail-email-input" required placeholder="elena@example.com" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="snail-mobile-input">Mobile number</label>
                    <input type="tel" id="snail-mobile-input" autoComplete="tel" inputMode="tel" required placeholder="e.g. 07123 456789" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="snail-address-input">Street address</label>
                    <input type="text" id="snail-address-input" required placeholder="12 Larkspur Lane" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="snail-city-input">City</label>
                      <input type="text" id="snail-city-input" required placeholder="Bath" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="snail-postcode-input">Postcode</label>
                      <input type="text" id="snail-postcode-input" required placeholder="BA1 2QY" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="snail-country-input">Country</label>
                    <input type="text" id="snail-country-input" required defaultValue="United Kingdom" />
                  </div>
                  <div className="modal-actions" style={{marginTop: 24}}>
                    <button className="button button-primary" type="button" id="snail-to-payment-btn">Continue to Payment</button>
                  </div>
                </form>
              </div>
              {/* Step 2: Payment Mockup */}
              <div id="snail-step-payment" className="modal-step">
                <h2 className="modal-title">Secure Checkout</h2>
                <p className="step-intro">Your details are encrypted with bank-grade security.</p>
                <div className="modal-summary-panel" style={{marginBottom: 20}}>
                  <span>Monthly rate:</span>
                  <strong id="snail-payment-amount">£14 / month</strong>
                  <span style={{color: 'var(--aurora-teal)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', display: 'block', marginTop: 4}}>Billed monthly · Cancel anytime</span>
                </div>
                <div className="form-group">
                  <label htmlFor="snail-card-name">Cardholder name</label>
                  <input type="text" id="snail-card-name" required placeholder="Elena Rostova" />
                </div>
                <div className="form-group">
                  <label htmlFor="snail-card-number">Card number</label>
                  <input type="text" id="snail-card-number" required placeholder="4111 •••• •••• ••••" pattern="[\d\s]{19}" maxLength={19} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="snail-card-expiry">Expiry date</label>
                    <input type="text" id="snail-card-expiry" required placeholder="MM / YY" pattern="\d{2}\s\/\s\d{2}" maxLength={7} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="snail-card-cvc">CVC</label>
                    <input type="text" id="snail-card-cvc" required placeholder="•••" pattern="\d{3}" maxLength={3} />
                  </div>
                </div>
                <div className="modal-actions" style={{marginTop: 24}}>
                  <button className="button button-secondary" type="button" id="snail-back-btn">Back</button>
                  <button className="button button-primary" type="button" id="snail-submit-btn">Begin Subscription</button>
                </div>
              </div>
              {/* Step 3: Success Screen */}
              <div id="snail-step-success" className="modal-step text-center">
                <div className="success-seal-wrap" style={{marginBottom: 24, display: 'flex', justifyContent: 'center'}}>
                  <div className="wax-seal gold" style={{position: 'static', transform: 'none', width: 64, height: 64}}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" />
                    </svg>
                  </div>
                </div>
                <h2 className="modal-title">Welcome to the Club 🌀</h2>
                <p id="snail-success-msg" style={{maxWidth: 440, margin: '0 auto 24px auto', lineHeight: '1.6'}}>
                  Thank you, Elena. Your first Snail Mail package is being prepared with quiet care.
                </p>
                <button className="button button-primary" type="button" id="snail-success-close-btn">Close</button>
              </div>
            </div>
          </div>
        </div>{/* /page-snail-mail */}
        {/* ┌─────────────────────────────────┐
         │  PAGE: JOURNAL                  │
         └─────────────────────────────────┘ */}
        <div id="page-journal" className="page">
          <div className="page-hero">
            <div className="page-hero-geo" aria-hidden="true">
              <svg viewBox="0 0 400 400" fill="none"><circle cx={200} cy={200} r={196} stroke="rgba(181,96,122,0.28)" strokeWidth="0.5" /><circle cx={200} cy={200} r={150} stroke="rgba(201,151,42,0.18)" strokeWidth="0.5" /><circle cx={200} cy={200} r={100} stroke="rgba(181,96,122,0.2)" strokeWidth="0.5" /><circle cx={200} cy={200} r={50} stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" /><line x1={200} y1={4} x2={200} y2={396} stroke="rgba(181,96,122,0.15)" strokeWidth="0.4" /><line x1={4} y1={200} x2={396} y2={200} stroke="rgba(181,96,122,0.15)" strokeWidth="0.4" /><line x1={56} y1={56} x2={344} y2={344} stroke="rgba(181,96,122,0.12)" strokeWidth="0.4" /><line x1={344} y1={56} x2={56} y2={344} stroke="rgba(181,96,122,0.12)" strokeWidth="0.4" /></svg>
            </div>
            <div className="page-hero-content">
              <p className="eyebrow">slow reading &amp; making</p>
              <h1>Art &amp; Journal<span className="journal-hero-ornament" aria-hidden="true"><svg viewBox="0 0 100 60" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx={50} cy={30} r={24} stroke="rgba(201, 151, 42, 0.18)" strokeWidth="0.5" strokeDasharray="2 2" /><circle cx={50} cy={30} r={14} stroke="rgba(201, 151, 42, 0.12)" strokeWidth="0.5" /><path d="M50,42 Q40,36 20,38 L20,16 Q40,14 50,22 Q60,14 80,16 L80,38 Q60,36 50,42 Z" stroke="rgba(201, 151, 42, 0.45)" strokeWidth="0.8" fill="rgba(201, 151, 42, 0.02)" /><path d="M50,22 L50,42" stroke="rgba(201, 151, 42, 0.45)" strokeWidth="0.8" /><path d="M56,12 L38,36" stroke="rgba(45, 139, 124, 0.45)" strokeWidth="0.8" strokeLinecap="round" /><path d="M38,36 L36,39 L39,37 Z" fill="rgba(45, 139, 124, 0.6)" stroke="rgba(45, 139, 124, 0.45)" strokeWidth="0.5" /><path d="M26,10 L27,12 L29,13 L27,14 L26,16 L25,14 L23,13 L25,12 Z" fill="rgba(201, 151, 42, 0.35)" /><path d="M74,10 L75,12 L77,13 L75,14 L74,16 L73,14 L71,13 L73,12 Z" fill="rgba(201, 151, 42, 0.35)" /><path d="M 46 8 A 6 6 0 0 0 52 14 A 5.2 5.2 0 0 1 46 8" fill="rgba(201, 151, 42, 0.3)" stroke="rgba(201, 151, 42, 0.4)" strokeWidth="0.5" /></svg></span></h1>
              <div className="journal-ticker" aria-hidden="true">
                <div className="journal-ticker-track">
                  <span>Ideas explored slowly</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>On AUM &amp; Resonance</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Sacred geometry</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Conscious breath</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Philosophy of craft</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Making things with your hands</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                </div>
                <div className="journal-ticker-track">
                  <span>Ideas explored slowly</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>On AUM &amp; Resonance</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Sacred geometry</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Conscious breath</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Philosophy of craft</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                  <span>Making things with your hands</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                </div>
              </div>
            </div>
          </div>
          <section className="journal-section section-pad">
            <div className="section-heading reveal">
              <h2 className="journal-sub-author">Words &amp; handmade art, by Chelsea Kaur Ubhi</h2>
            </div>
            <div className="journal-viewport-container">
              <div className="journal-grid" id="journal-posts-container">
                <article className="journal-card reveal" data-journal-id={0}>
                  <div className="journal-card-art gold" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><circle cx={80} cy={80} r={76} stroke="rgba(201,151,42,0.35)" strokeWidth="0.6" /><circle cx={80} cy={80} r={50} stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" /><circle cx={80} cy={80} r={25} stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" /><polygon points="80,14 138,116 22,116" stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" fill="rgba(201,151,42,0.04)" /><polygon points="80,146 138,44 22,44" stroke="rgba(181,96,122,0.3)" strokeWidth="0.6" fill="none" /><circle cx={80} cy={80} r={5} fill="rgba(201,151,42,0.6)" /></svg></div>
                  <div className="journal-card-body">
                    <p className="journal-card-meta"><span className="tag">Philosophy</span> · June 2026</p>
                    <h3>AUM &amp; the Science of Sound</h3>
                    <p>From the Big Bang's primordial frequency to the vibration of your own vocal cords, AUM is mathematics.</p>
                    <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                  </div>
                </article>
                <article className="journal-card reveal" data-journal-id={1}>
                  <div className="journal-card-art gold" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><circle cx={80} cy={80} r={76} stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" /><circle cx={80} cy={22} r={58} stroke="rgba(201,151,42,0.1)" strokeWidth="0.4" /><circle cx={130} cy={51} r={58} stroke="rgba(201,151,42,0.1)" strokeWidth="0.4" /><circle cx={130} cy={109} r={58} stroke="rgba(201,151,42,0.1)" strokeWidth="0.4" /><circle cx={80} cy={138} r={58} stroke="rgba(201,151,42,0.1)" strokeWidth="0.4" /><circle cx={30} cy={109} r={58} stroke="rgba(201,151,42,0.1)" strokeWidth="0.4" /><circle cx={30} cy={51} r={58} stroke="rgba(201,151,42,0.1)" strokeWidth="0.4" /><circle cx={80} cy={80} r={8} stroke="rgba(201,151,42,0.5)" strokeWidth="0.6" /><circle cx={80} cy={80} r={3} fill="rgba(201,151,42,0.6)" /></svg></div>
                  <div className="journal-card-body">
                    <p className="journal-card-meta"><span className="tag">Geometry</span> · May 2026</p>
                    <h3>Sacred Geometry: Patterns That Think</h3>
                    <p>Why do the same proportions appear in seashells, galaxy spirals, and temple architecture?</p>
                    <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                  </div>
                </article>
                <article className="journal-card reveal" data-journal-id={2}>
                  <div className="journal-card-art teal" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><rect x={20} y={20} width={120} height={120} stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" fill="none" /><rect x={40} y={40} width={80} height={80} stroke="rgba(45,139,124,0.28)" strokeWidth="0.5" fill="none" transform="rotate(45 80 80)" /><circle cx={80} cy={80} r={40} stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" /><circle cx={80} cy={80} r={18} stroke="rgba(45,139,124,0.5)" strokeWidth="0.6" /><circle cx={80} cy={80} r={5} fill="rgba(45,139,124,0.6)" /></svg></div>
                  <div className="journal-card-body">
                    <p className="journal-card-meta"><span className="tag">Craft</span> · May 2026</p>
                    <h3>Why We Print by Hand</h3>
                    <p>There is something that happens between the roller, the ink, and the paper. A conversation with matter.</p>
                    <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                  </div>
                </article>
                <article className="journal-card reveal" data-journal-id={3}>
                  <div className="journal-card-art rose" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><path d="M80 16C50 40 16 52 16 80C16 108 50 120 80 144C110 120 144 108 144 80C144 52 110 40 80 16Z" stroke="rgba(181,96,122,0.4)" strokeWidth="0.6" fill="rgba(181,96,122,0.05)" /><path d="M80 32C56 52 32 60 32 80C32 100 56 108 80 128C104 108 128 100 128 80C128 60 104 52 80 32Z" stroke="rgba(181,96,122,0.3)" strokeWidth="0.5" fill="none" /><circle cx={80} cy={80} r={18} stroke="rgba(181,96,122,0.5)" strokeWidth="0.6" /><circle cx={80} cy={80} r={5} fill="rgba(181,96,122,0.6)" /></svg></div>
                  <div className="journal-card-body">
                    <p className="journal-card-meta"><span className="tag">Breathwork</span> · April 2026</p>
                    <h3>Pranayama &amp; the Vagus Nerve</h3>
                    <p>Modern science has finally caught up. The breath is the only autonomic function we consciously control.</p>
                    <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                  </div>
                </article>
                <article className="journal-card reveal" data-journal-id={4}>
                  <div className="journal-card-art gold" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><line x1={80} y1={8} x2={80} y2={152} stroke="rgba(201,151,42,0.35)" strokeWidth="0.5" /><line x1={8} y1={80} x2={152} y2={80} stroke="rgba(201,151,42,0.35)" strokeWidth="0.5" /><line x1={24} y1={24} x2={136} y2={136} stroke="rgba(201,151,42,0.28)" strokeWidth="0.5" /><line x1={136} y1={24} x2={24} y2={136} stroke="rgba(201,151,42,0.28)" strokeWidth="0.5" /><circle cx={80} cy={80} r={72} stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" /><circle cx={80} cy={80} r={44} stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" /><circle cx={80} cy={80} r={18} stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" /><circle cx={80} cy={80} r={5} fill="rgba(201,151,42,0.6)" /></svg></div>
                  <div className="journal-card-body">
                    <p className="journal-card-meta"><span className="tag">Philosophy</span> · March 2026</p>
                    <h3>The Philosophy of Slow Making</h3>
                    <p>Speed produces output. Slowness produces meaning. When we make things with full attention, we settle.</p>
                    <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                  </div>
                </article>
                <article className="journal-card reveal" data-journal-id={5}>
                  <div className="journal-card-art teal" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><ellipse cx={80} cy={105} rx={55} ry={22} stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" fill="none" /><ellipse cx={80} cy={80} rx={40} ry={55} stroke="rgba(45,139,124,0.28)" strokeWidth="0.5" fill="none" /><ellipse cx={80} cy={80} rx={55} ry={40} stroke="rgba(45,139,124,0.28)" strokeWidth="0.5" fill="none" transform="rotate(60 80 80)" /><ellipse cx={80} cy={80} rx={55} ry={40} stroke="rgba(45,139,124,0.28)" strokeWidth="0.5" fill="none" transform="rotate(120 80 80)" /><circle cx={80} cy={80} r={10} stroke="rgba(45,139,124,0.5)" strokeWidth="0.6" /><circle cx={80} cy={80} r={4} fill="rgba(45,139,124,0.6)" /></svg></div>
                  <div className="journal-card-body">
                    <p className="journal-card-meta"><span className="tag">Yoga</span> · March 2026</p>
                    <h3>What Yoga Actually Means</h3>
                    <p>Yoga is not a posture. It is not fitness. The word means union — a coming together of the fragmented.</p>
                    <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                  </div>
                </article>
                <article className="journal-card reveal" data-journal-id={6}>
                  <div className="journal-card-art gold" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><circle cx={80} cy={80} r={72} stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" /><circle cx={80} cy={80} r={40} stroke="rgba(201,151,42,0.15)" strokeWidth="0.5" strokeDasharray="3 3" /><circle cx={80} cy={80} r={10} stroke="rgba(201,151,42,0.5)" strokeWidth="0.6" /><path d="M 76 65 A 15 15 0 0 0 84 79 A 13 13 0 0 1 76 65" fill="rgba(201,151,42,0.3)" stroke="rgba(201,151,42,0.4)" strokeWidth="0.5" /></svg></div>
                  <div className="journal-card-body">
                    <p className="journal-card-meta"><span className="tag">Philosophy</span> · February 2026</p>
                    <h3>The Geometry of Silence</h3>
                    <p>Silence is not empty; it is the space where structure begins. The boundary between noise, quiet, and voids.</p>
                    <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                  </div>
                </article>
                <article className="journal-card reveal" data-journal-id={7}>
                  <div className="journal-card-art rose" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><rect x={25} y={45} width={110} height={70} rx={4} stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" /><path d="M25 45 L80 85 L135 45" stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" /><circle cx={80} cy={85} r={14} fill="rgba(181,96,122,0.2)" stroke="rgba(181,96,122,0.5)" strokeWidth="0.8" /><circle cx={80} cy={85} r={6} fill="rgba(181,96,122,0.6)" /></svg></div>
                  <div className="journal-card-body">
                    <p className="journal-card-meta"><span className="tag">Craft</span> · January 2026</p>
                    <h3>Rituals of the Wax Seal</h3>
                    <p>Melted wax, a brass stamp, and a heavy envelope. Sealing is a commitment to slow communication.</p>
                    <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                  </div>
                </article>
                <article className="journal-card reveal" data-journal-id={8}>
                  <div className="journal-card-art teal" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><path d="M55,30 Q80,25 105,30 L95,65 Q115,100 95,135 Q80,140 65,135 Q45,100 65,65 Z" stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" fill="rgba(45,139,124,0.03)" /><ellipse cx={80} cy={30} rx={25} ry={6} stroke="rgba(45,139,124,0.4)" strokeWidth="0.5" /><circle cx={80} cy={85} r={12} stroke="rgba(45,139,124,0.25)" strokeWidth="0.5" /></svg></div>
                  <div className="journal-card-body">
                    <p className="journal-card-meta"><span className="tag">Somatic</span> · December 2025</p>
                    <h3>The Alchemy of Clay</h3>
                    <p>Sitting at the potter's wheel is a lesson in posture, gravity, and response. Centering is a dynamic state.</p>
                    <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                  </div>
                </article>
                <article className="journal-card reveal" data-journal-id={9}>
                  <div className="journal-card-art gold" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><line x1={30} y1={30} x2={130} y2={30} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={30} y1={50} x2={130} y2={50} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={30} y1={70} x2={130} y2={70} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={30} y1={90} x2={130} y2={90} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={30} y1={110} x2={130} y2={110} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={30} y1={130} x2={130} y2={130} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={30} y1={30} x2={30} y2={130} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={50} y1={30} x2={50} y2={130} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={70} y1={30} x2={70} y2={130} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={90} y1={30} x2={90} y2={130} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={110} y1={30} x2={110} y2={130} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={130} y1={30} x2={130} y2={130} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><path d="M80 68 L82 77 L90 80 L82 83 L80 92 L78 83 L70 80 L78 77 Z" fill="rgba(201,151,42,0.45)" /></svg></div>
                  <div className="journal-card-body">
                    <p className="journal-card-meta"><span className="tag">Geometry</span> · November 2025</p>
                    <h3>The Weaver's Path</h3>
                    <p>Weaving is the intersection of arithmetic and tactile grace, bringing repetitive shuttle passes into meditation.</p>
                    <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                  </div>
                </article>
                <article className="journal-card reveal" data-journal-id={10}>
                  <div className="journal-card-art teal" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><rect x={30} y={30} width={100} height={100} stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" /><circle cx={80} cy={80} r={35} stroke="rgba(45,139,124,0.3)" strokeWidth="0.5" /><line x1={30} y1={80} x2={130} y2={80} stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" /><line x1={80} y1={30} x2={80} y2={130} stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" /><polygon points="80,62 98,90 62,90" stroke="rgba(45,139,124,0.45)" strokeWidth="0.6" fill="rgba(45,139,124,0.05)" /></svg></div>
                  <div className="journal-card-body">
                    <p className="journal-card-meta"><span className="tag">Craft</span> · October 2025</p>
                    <h3>Wood, Steel, and Ink</h3>
                    <p>Operating a letterpress is a conversation with antique machinery. The weight of physical type pressed in paper fibers.</p>
                    <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                  </div>
                </article>
                <article className="journal-card reveal" data-journal-id={11}>
                  <div className="journal-card-art rose" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><circle cx={80} cy={80} r={45} stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" /><circle cx={80} cy={80} r={60} stroke="rgba(181,96,122,0.15)" strokeWidth="0.4" strokeDasharray="2 2" /><path d="M80 10 L80 150 M10 80 L150 80 M30 30 L130 130 M130 30 L30 130" stroke="rgba(181,96,122,0.2)" strokeWidth="0.5" /><circle cx={80} cy={80} r={10} fill="rgba(181,96,122,0.4)" /><path d="M 100 20 A 10 10 0 0 0 110 30 A 8.6 8.6 0 0 1 100 20" fill="rgba(181,96,122,0.3)" stroke="rgba(181,96,122,0.4)" strokeWidth="0.5" /></svg></div>
                  <div className="journal-card-body">
                    <p className="journal-card-meta"><span className="tag">Somatic</span> · September 2025</p>
                    <h3>The Slow Light of June</h3>
                    <p>Solar photograms take time to absorb the sun. A reflection on chemical exposure, shadows, and patience.</p>
                    <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                  </div>
                </article>
                <article className="journal-card reveal" data-journal-id={12}>
                  <div className="journal-card-art gold" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><circle cx={80} cy={80} r={76} stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" /><circle cx={80} cy={80} r={52} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" strokeDasharray="2 2" /><circle cx={80} cy={80} r={28} stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" /><path d="M80 12 L80 148 M12 80 L148 80" stroke="rgba(201,151,42,0.15)" strokeWidth="0.5" /><polygon points="80,40 115,80 80,120 45,80" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" fill="rgba(201,151,42,0.03)" /><circle cx={80} cy={80} r={4} fill="rgba(201,151,42,0.5)" /></svg></div>
                  <div className="journal-card-body">
                    <p className="journal-card-meta"><span className="tag">Philosophy</span> · August 2025</p>
                    <h3>The Medicine of Mud</h3>
                    <p>Mud is the raw material of creation. Touching the soil is a biological and somatic reunion.</p>
                    <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                  </div>
                </article>
                <article className="journal-card reveal" data-journal-id={13}>
                  <div className="journal-card-art teal" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><ellipse cx={80} cy={80} rx={72} ry={40} stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" /><ellipse cx={80} cy={80} rx={52} ry={28} stroke="rgba(45,139,124,0.25)" strokeWidth="0.5" /><ellipse cx={80} cy={80} rx={32} ry={16} stroke="rgba(45,139,124,0.4)" strokeWidth="0.6" /><circle cx={80} cy={80} r={6} fill="rgba(45,139,124,0.6)" /><line x1={80} y1={20} x2={80} y2={140} stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" /></svg></div>
                  <div className="journal-card-body">
                    <p className="journal-card-meta"><span className="tag">Sound</span> · July 2025</p>
                    <h3>Acoustic Spaces &amp; Listening</h3>
                    <p>The space we inhabit changes how we speak, but more importantly, how we listen deeply.</p>
                    <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                  </div>
                </article>
                <article className="journal-card reveal" data-journal-id={14}>
                  <div className="journal-card-art rose" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><path d="M20,20 C50,80 110,80 140,140" stroke="rgba(181,96,122,0.4)" strokeWidth="0.8" /><path d="M140,20 C110,80 50,80 20,140" stroke="rgba(181,96,122,0.3)" strokeWidth="0.5" /><circle cx={80} cy={74} r={16} stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" /><circle cx={80} cy={74} r={6} fill="rgba(181,96,122,0.6)" /><line x1={80} y1={12} x2={80} y2={148} stroke="rgba(181,96,122,0.15)" strokeWidth="0.5" /></svg></div>
                  <div className="journal-card-body">
                    <p className="journal-card-meta"><span className="tag">Craft</span> · June 2025</p>
                    <h3>The Shadow of the Needle</h3>
                    <p>Hand-sewing is a practice in small measures, repairing cloth and the split attention of the mind.</p>
                    <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                  </div>
                </article>
                <article className="journal-card reveal" data-journal-id={15}>
                  <div className="journal-card-art gold" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><circle cx={80} cy={80} r={72} stroke="rgba(201,151,42,0.35)" strokeWidth="0.6" /><polygon points="80,18 132,108 28,108" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" /><polygon points="80,142 132,52 28,52" stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" /><circle cx={80} cy={80} r={14} stroke="rgba(201,151,42,0.45)" strokeWidth="0.6" /><circle cx={80} cy={80} r={4} fill="rgba(201,151,42,0.6)" /></svg></div>
                  <div className="journal-card-body">
                    <p className="journal-card-meta"><span className="tag">Geometry</span> · May 2025</p>
                    <h3>Geometry of the Heart</h3>
                    <p>A circle requires a fixed center spike. Centering ourselves is the prerequisite for a balanced life.</p>
                    <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                  </div>
                </article>
                <article className="journal-card reveal" data-journal-id={16}>
                  <div className="journal-card-art teal" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><rect x={30} y={30} width={100} height={100} stroke="rgba(45,139,124,0.3)" strokeWidth="0.5" /><polygon points="80,30 130,80 80,130 30,80" stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" fill="rgba(45,139,124,0.03)" /><line x1={80} y1={30} x2={80} y2={130} stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" /><line x1={30} y1={80} x2={130} y2={80} stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" /><circle cx={80} cy={80} r={12} stroke="rgba(45,139,124,0.5)" strokeWidth="0.6" /><circle cx={80} cy={80} r={4} fill="rgba(45,139,124,0.6)" /></svg></div>
                  <div className="journal-card-body">
                    <p className="journal-card-meta"><span className="tag">Philosophy</span> · April 2025</p>
                    <h3>Center of the Loom</h3>
                    <p>On a weaving loom, tension is everything. We hold our intentions with a firm but gentle hand.</p>
                    <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                  </div>
                </article>
                <article className="journal-card reveal" data-journal-id={17}>
                  <div className="journal-card-art rose" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><circle cx={80} cy={80} r={72} stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" /><circle cx={80} cy={80} r={36} stroke="rgba(181,96,122,0.2)" strokeWidth="0.5" /><line x1={80} y1={8} x2={80} y2={152} stroke="rgba(181,96,122,0.15)" strokeWidth="0.5" /><line x1={8} y1={80} x2={152} y2={80} stroke="rgba(181,96,122,0.15)" strokeWidth="0.5" /><path d="M40,40 L120,120 M120,40 L40,120" stroke="rgba(181,96,122,0.2)" strokeWidth="0.5" /><circle cx={80} cy={80} r={10} stroke="rgba(181,96,122,0.5)" strokeWidth="0.6" fill="rgba(181,96,122,0.1)" /><circle cx={80} cy={80} r={3} fill="rgba(181,96,122,0.6)" /></svg></div>
                  <div className="journal-card-body">
                    <p className="journal-card-meta"><span className="tag">Somatic</span> · March 2025</p>
                    <h3>Sun-Stitched Linen</h3>
                    <p>Dyeing with plants and sun-bleaching linen are exercises in slow, organic chemistry.</p>
                    <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                  </div>
                </article>
              </div>
            </div>
          </section>
          {/* ───────── Journal email capture (turns readers into subscribers) ───────── */}
          <section className="subscribe-section section-pad" aria-label="Subscribe to the Journal">
            <div className="subscribe-card reveal">
              <span className="subscribe-deco subscribe-sprig" aria-hidden="true"><svg viewBox="0 0 80 200"><use href="#art-eucalyptus" /></svg></span>
              <div className="subscribe-text">
                <p className="eyebrow">Letters from the desk</p>
                <h2>Never miss a new piece</h2>
                <p className="subscribe-copy">A quiet note whenever a new essay or artwork is posted — slow reading, straight to your inbox. No noise, no spam.</p>
              </div>
              <div className="subscribe-action">
                <form id="journal-updates-form" className="subscribe-form" noValidate>
                  <input type="email" id="journal-updates-email" className="subscribe-input" placeholder="you@example.com" autoComplete="email" required aria-label="Your email" />
                  <button type="submit" className="button button-primary subscribe-btn">Keep me posted</button>
                </form>
                <p className="subscribe-msg" id="journal-updates-msg" role="status" aria-live="polite" />
              </div>
            </div>
          </section>
        </div>{/* /page-journal */}
        {/* ┌─────────────────────────────────┐
         │  PAGE: ABOUT                    │
         └─────────────────────────────────┘ */}
        <div id="page-about" className="page">
          <section id="about" className="about section-pad">
            <div className="about-geo" aria-hidden="true">
              <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <ellipse id="ab-petal" cx={250} cy={158} rx={27} ry={92} stroke="rgba(201,151,42,0.16)" strokeWidth="0.6" />
                </defs>
                <circle cx={250} cy={250} r={246} stroke="rgba(201,151,42,0.16)" strokeWidth="0.7" />
                <circle cx={250} cy={250} r={234} stroke="rgba(181,96,122,0.10)" strokeWidth="0.5" />
                <circle cx={250} cy={250} r={120} stroke="rgba(201,151,42,0.10)" strokeWidth="0.5" />
                <use href="#ab-petal" transform="rotate(0 250 250)" />
                <use href="#ab-petal" transform="rotate(30 250 250)" />
                <use href="#ab-petal" transform="rotate(60 250 250)" />
                <use href="#ab-petal" transform="rotate(90 250 250)" />
                <use href="#ab-petal" transform="rotate(120 250 250)" />
                <use href="#ab-petal" transform="rotate(150 250 250)" />
                <use href="#ab-petal" transform="rotate(180 250 250)" />
                <use href="#ab-petal" transform="rotate(210 250 250)" />
                <use href="#ab-petal" transform="rotate(240 250 250)" />
                <use href="#ab-petal" transform="rotate(270 250 250)" />
                <use href="#ab-petal" transform="rotate(300 250 250)" />
                <use href="#ab-petal" transform="rotate(330 250 250)" />
                <g stroke="rgba(201,151,42,0.20)" strokeWidth="0.7">
                  <circle cx={250} cy={250} r={58} />
                  <circle cx={250} cy={192} r={58} />
                  <circle cx={250} cy={308} r={58} />
                  <circle cx="300.2" cy={221} r={58} />
                  <circle cx="300.2" cy={279} r={58} />
                  <circle cx="199.8" cy={221} r={58} />
                  <circle cx="199.8" cy={279} r={58} />
                </g>
                <polygon points="250,72 405,318 95,318" stroke="rgba(201,151,42,0.16)" strokeWidth="0.5" />
                <polygon points="250,428 405,182 95,182" stroke="rgba(181,96,122,0.14)" strokeWidth="0.5" />
                <circle cx={250} cy={250} r={14} stroke="rgba(181,96,122,0.32)" strokeWidth="0.8" />
              </svg>
            </div>
            <div className="about-content reveal">
              <div className="about-left">
                <img src={asset("/assets/ubhi-logo-transparent.png")} alt="Ubhi calligraphy mark" className="about-logo" />
                <p className="eyebrow">about Chelsea Kaur Ubhi</p>
                <h2>My universe,<br />my <span className="about-accent">story</span></h2>
                <div className="about-flourish" aria-hidden="true">
                  <svg viewBox="0 0 180 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1={6} y1={14} x2={74} y2={14} stroke="rgba(201,151,42,0.55)" strokeWidth={1} />
                    <line x1={106} y1={14} x2={174} y2={14} stroke="rgba(201,151,42,0.55)" strokeWidth={1} />
                    <path d="M90,3 Q96,9 90,14 Q84,9 90,3Z" fill="rgba(201,151,42,0.55)" />
                    <path d="M90,25 Q96,19 90,14 Q84,19 90,25Z" fill="rgba(201,151,42,0.55)" />
                    <circle cx={90} cy={14} r={2} fill="rgba(181,96,122,0.85)" />
                  </svg>
                </div>
                <div className="about-social" aria-label="Find Chelsea">
                  <a className="soc-ig" href="https://instagram.com/ubhi.in" target="_blank" rel="noopener noreferrer" aria-label="Ubhi on Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x={3} y={3} width={18} height={18} rx={5} /><circle cx={12} cy={12} r={4} /><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" /></svg></a>
                  <a className="soc-pin" href="https://in.pinterest.com/chelseaubhi/" target="_blank" rel="noopener noreferrer" aria-label="Ubhi on Pinterest"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.08-.8-.15-2 .04-2.9l1.15-4.9s-.3-.6-.3-1.4c0-1.3.77-2.3 1.72-2.3.8 0 1.2.6 1.2 1.34 0 .8-.52 2.04-.8 3.18-.22.95.48 1.73 1.42 1.73 1.7 0 3-1.8 3-4.4 0-2.3-1.65-3.9-4-3.9-2.73 0-4.33 2.04-4.33 4.15 0 .82.32 1.7.72 2.18a.3.3 0 0 1 .06.28l-.28 1.13c-.04.18-.15.22-.34.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.97-.53-2.29-1.15l-.62 2.37c-.22.87-.83 1.96-1.24 2.62A10 10 0 1 0 12 2z" /></svg></a>
                  <a className="soc-mail" href="mailto:hello@ubhi.in" aria-label="Email Ubhi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x={3} y={5} width={18} height={14} rx={2} /><path d="M3.5 7l8.5 6 8.5-6" /></svg></a>
                </div>
              </div>
              <div className="about-right">
                <p>For years, my world was defined by working across biomedical science, medical advertising, and pharmacy. I spent my days analyzing data and studying how to heal the body from the outside in. Yet, I felt a quiet pull toward a different kind of restoration, one that couldn't be measured in a lab.</p>
                <p>I found that missing thread when I began weaving together somatic movement, raw craftsmanship, and ancient philosophy. Through meditation, yoga, breathwork, and art, I realized that real healing happens when the mind goes quiet and when we begin to create.</p>
                <p>Ubhi is the sanctuary where these two halves of my journey meet. It is a space where my scientific understanding of the body and nervous system aligns with the intuitive wisdom of slow art. Because here, I believe that the act of making and creating is itself the medicine.</p>
                <p className="about-signature">— Chelsea Kaur Ubhi</p>
              </div>
              <div className="about-cta">
                <button className="button button-secondary" type="button" data-page-link="workshops" data-goto-booking>Begin your practice</button>
              </div>
            </div>
          </section>
        </div>{/* /page-about */}
        {/* ┌─────────────────────────────────┐
           │  PAGE: ADMIN PANEL              │
           └─────────────────────────────────┘ */}
        <div id="page-admin" className="page">
          {/* Passcode Gate */}
          <div id="admin-gate" className="admin-gate-wrapper reveal">
            <div className="admin-login-card">
              <div className="admin-login-header">
                <svg viewBox="0 0 100 100" className="admin-login-yantra"><circle cx={50} cy={50} r={45} stroke="var(--aurora-gold)" strokeWidth="0.75" fill="none" /><polygon points="50,15 80,70 20,70" stroke="var(--aurora-gold)" strokeWidth="0.5" fill="none" /><polygon points="50,85 80,30 20,30" stroke="var(--aurora-gold)" strokeWidth="0.5" fill="none" /></svg>
                <h3>The Keeper's Desk</h3>
                <p>A quiet passcode keeps this drawer shut. Slip it in to come inside.</p>
              </div>
              <form id="admin-login-form">
                <div className="sanctuary-input-group">
                  <label htmlFor="admin-passcode">Passcode</label>
                  <input type="password" id="admin-passcode" required placeholder="••••••••" />
                </div>
                <p id="admin-login-error" className="admin-error-text" style={{display: 'none', color: 'var(--aurora-rose)', fontSize: '0.85rem', marginTop: '-16px', marginBottom: 16}} />
                <button type="submit" className="button button-primary" style={{width: '100%', textAlign: 'center'}}>Unlock the Desk</button>
              </form>
            </div>
          </div>
          {/* Admin Dashboard */}
          <div id="admin-dashboard" className="admin-dashboard-wrapper" style={{display: 'none'}}>
            <div className="admin-header">
              <button type="button" id="admin-nav-toggle" className="admin-nav-toggle" aria-label="Show or hide the menu" aria-controls="admin-tabs-nav" aria-expanded="true" title="Hide / show the menu">
                <span /><span /><span />
              </button>
              <div className="admin-welcome">
                <h3>The Keeper's Desk</h3>
                <p>Where the workshops, shop, members' sheet, journal &amp; archives are kept — tended by hand.</p>
              </div>
              <button type="button" className="button button-secondary" id="admin-logout-btn">Lock the Desk</button>
            </div>
            <div className="admin-tabs-nav" id="admin-tabs-nav" role="navigation" aria-label="Admin sections">
              <button type="button" className="admin-tab-btn is-active" data-admin-tab="overview">Overview</button>
              <button type="button" className="admin-tab-btn" data-admin-tab="gallery">Gallery</button>
              <button type="button" className="admin-tab-btn" data-admin-tab="workshops">Workshops</button>
              <button type="button" className="admin-tab-btn" data-admin-tab="shop">Shop</button>
              <button type="button" className="admin-tab-btn" data-admin-tab="snail">Snail Mail</button>
              <button type="button" className="admin-tab-btn" data-admin-tab="customers">Customers</button>
              <button type="button" className="admin-tab-btn" data-admin-tab="journal">Art &amp; Journal</button>
              <button type="button" className="admin-tab-btn" data-admin-tab="orders">Orders &amp; Bookings</button>
              <button type="button" className="admin-tab-btn" data-admin-tab="updates">Email Updates</button>
              <button type="button" className="admin-tab-btn" data-admin-tab="profile">Site Profile</button>
              <button type="button" className="admin-tab-btn" data-admin-tab="settings">Settings</button>
            </div>
            <div id="admin-nav-scrim" className="admin-nav-scrim" hidden />
            {/* TAB CONTENT: GALLERY */}
            {/* ───────── Overview · at-a-glance dashboard ───────── */}
            <div className="admin-tab-content is-active" id="admin-tab-overview">
              <div className="admin-section-card">
                <div className="admin-card-header-actions">
                  <h4 style={{margin: 0}}>A view from the desk</h4>
                </div>
                <p style={{fontSize: '0.88rem', color: 'var(--mist)', lineHeight: '1.5', margin: '-2px 0 18px'}}>Everything at a glance — figures refresh each time you open this tab.</p>
                <div className="admin-overview-grid">
                  <div className="admin-stat-card stat-orders">
                    <span className="admin-stat-label">Shop Orders</span>
                    <span className="admin-stat-number" id="ov-orders-count">0</span>
                    <span className="admin-stat-sub" id="ov-orders-sub">£0 received</span>
                  </div>
                  <div className="admin-stat-card stat-bookings">
                    <span className="admin-stat-label">Workshop Bookings</span>
                    <span className="admin-stat-number" id="ov-bookings-count">0</span>
                    <span className="admin-stat-sub" id="ov-bookings-sub">£0 reserved</span>
                  </div>
                  <div className="admin-stat-card stat-members">
                    <span className="admin-stat-label">Snail Mail Members</span>
                    <span className="admin-stat-number" id="ov-members-count">0</span>
                    <span className="admin-stat-sub" id="ov-members-sub">0 active · 0 paused</span>
                  </div>
                  <div className="admin-stat-card stat-subs">
                    <span className="admin-stat-label">Email Subscribers</span>
                    <span className="admin-stat-number" id="ov-subs-count">0</span>
                    <span className="admin-stat-sub">on the keep-posted list</span>
                  </div>
                  <div className="admin-stat-card stat-shop">
                    <span className="admin-stat-label">Shop Pieces</span>
                    <span className="admin-stat-number" id="ov-shop-count">0</span>
                    <span className="admin-stat-sub" id="ov-shop-sub">0 low on stock</span>
                  </div>
                  <div className="admin-stat-card stat-workshops">
                    <span className="admin-stat-label">Workshops</span>
                    <span className="admin-stat-number" id="ov-workshops-count">0</span>
                    <span className="admin-stat-sub">in the catalogue</span>
                  </div>
                  <div className="admin-stat-card stat-journal">
                    <span className="admin-stat-label">Art &amp; Journal</span>
                    <span className="admin-stat-number" id="ov-journal-count">0</span>
                    <span className="admin-stat-sub">posts published</span>
                  </div>
                  <div className="admin-stat-card stat-gallery">
                    <span className="admin-stat-label">Gallery Images</span>
                    <span className="admin-stat-number" id="ov-gallery-count">0</span>
                    <span className="admin-stat-sub">in the home carousel</span>
                  </div>
                </div>
              </div>
              <div className="admin-section-card">
                <h4>Needs a gentle eye</h4>
                <ul className="admin-attention-list" id="admin-overview-attention">
                  <li className="calm"><span className="att-dot" />All calm — nothing needs your attention right now.</li>
                </ul>
              </div>
            </div>
            <div className="admin-tab-content" id="admin-tab-gallery">
              <div className="admin-section-card">
                <h4>Add Gallery Image (Home Carousel)</h4>
                <form id="admin-add-gallery-form" className="admin-grid-form">
                  <div className="admin-form-group">
                    <label>Image Resource</label>
                    <div className="image-upload-wrapper">
                      <input type="text" id="admin-gallery-url" placeholder="/assets/filename.png or https://url.com/img.jpg" />
                      <span style={{padding: '0 8px', color: 'rgba(255,255,255,0.4)'}}>or</span>
                      <input type="file" id="admin-gallery-file" accept="image/*" />
                    </div>
                  </div>
                  <div className="admin-form-group">
                    <label>Alt / Caption Description</label>
                    <input type="text" id="admin-gallery-alt" placeholder="e.g. Somatic movement practice" required />
                  </div>
                  <button type="submit" className="button button-primary">Publish Image</button>
                </form>
              </div>
              <div className="admin-section-card admin-list-card">
                <h4>Current Gallery Images</h4>
                <input type="text" className="admin-list-search" id="admin-gallery-search" placeholder="Search images by caption…" />
                <div className="admin-gallery-list" id="admin-gallery-items-list">
                  {/* Javascript populated */}
                </div>
              </div>
            </div>
            {/* TAB CONTENT: WORKSHOPS */}
            <div className="admin-tab-content" id="admin-tab-workshops">
              <div className="admin-section-card">
                <h4>Add New Workshop</h4>
                <form id="admin-add-workshop-form" className="admin-grid-form">
                  <div className="admin-form-row col-3">
                    <div className="admin-form-group">
                      <label>Workshop Title</label>
                      <input type="text" id="admin-workshop-title" placeholder="e.g. Somatic Pottery" required />
                    </div>
                    <div className="admin-form-group">
                      <label>Category / Eyebrow</label>
                      <input type="text" id="admin-workshop-eyebrow" placeholder="e.g. Clay · 14 October" required />
                    </div>
                    <div className="admin-form-group">
                      <label>Poster Image (URL or File)</label>
                      <div className="image-upload-wrapper">
                        <input type="text" id="admin-workshop-img-url" placeholder="/assets/pots.png" />
                        <input type="file" id="admin-workshop-img-file" accept="image/*" />
                      </div>
                    </div>
                  </div>
                  <div className="admin-form-row col-4">
                    <div className="admin-form-group">
                      <label>Time</label>
                      <input type="text" id="admin-workshop-time" placeholder="e.g. 10:30–13:00" required />
                    </div>
                    <div className="admin-form-group">
                      <label>Place</label>
                      <input type="text" id="admin-workshop-place" placeholder="e.g. Hackney studio" required />
                    </div>
                    <div className="admin-form-group">
                      <label>Price (£)</label>
                      <input type="number" id="admin-workshop-price" placeholder={58} required />
                    </div>
                    <div className="admin-form-group">
                      <label>Seat Capacity</label>
                      <input type="number" id="admin-workshop-capacity" placeholder={10} required />
                    </div>
                  </div>
                  <div className="admin-form-group">
                    <label>Description</label>
                    <textarea id="admin-workshop-desc" placeholder="Write description of the practice..." required defaultValue={""} />
                  </div>
                  <button type="submit" className="button button-primary">Publish Workshop</button>
                </form>
              </div>
              <div className="admin-section-card admin-list-card">
                <h4>Active Workshops</h4>
                <input type="text" className="admin-list-search" id="admin-workshops-search" placeholder="Search workshops by title, theme or place…" />
                <div className="admin-table-responsive">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Workshop</th>
                        <th>Details</th>
                        <th>Price</th>
                        <th>Spaces</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody id="admin-workshops-table-body">
                      {/* Javascript populated */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* TAB CONTENT: SHOP */}
            <div className="admin-tab-content" id="admin-tab-shop">
              <div className="admin-section-card">
                <h4>Add Shop Product</h4>
                <form id="admin-add-shop-form" className="admin-grid-form">
                  <div className="admin-form-row col-3">
                    <div className="admin-form-group">
                      <label>Product Name</label>
                      <input type="text" id="admin-shop-name" placeholder="e.g. Indigo Clay Bowl" required />
                    </div>
                    <div className="admin-form-group">
                      <label>Category / Eyebrow</label>
                      <input type="text" id="admin-shop-eyebrow" placeholder="e.g. Altari object" required />
                    </div>
                    <div className="admin-form-group">
                      <label>Price (£)</label>
                      <input type="number" id="admin-shop-price" placeholder={42} required />
                    </div>
                  </div>
                  <div className="admin-form-row col-3">
                    <div className="admin-form-group">
                      <label>Total Stock</label>
                      <input type="number" id="admin-shop-stock-total" placeholder={50} required />
                    </div>
                    <div className="admin-form-group">
                      <label>Stock Remaining</label>
                      <input type="number" id="admin-shop-stock-remaining" placeholder={12} required />
                    </div>
                    <div className="admin-form-group">
                      <label>Product Image (URL, File or Vector Theme)</label>
                      <div className="image-upload-wrapper">
                        <input type="text" id="admin-shop-img-url" placeholder="/assets/bowl.png" />
                        <input type="file" id="admin-shop-img-file" accept="image/*" />
                        <select id="admin-shop-vector-theme">
                          <option value>-- Or Select SVG Theme --</option>
                          <option value="yantra">Yantra Mandala</option>
                          <option value="lotus">Lotus Geometry</option>
                          <option value="concentric">Concentric Rings</option>
                          <option value="lines">Astrological Coordinates</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="admin-form-group">
                    <label>Product Description</label>
                    <textarea id="admin-shop-desc-text" placeholder="Write description of product..." required defaultValue={""} />
                  </div>
                  <button type="submit" className="button button-primary">Publish Product</button>
                </form>
              </div>
              <div className="admin-section-card admin-list-card">
                <h4>Current Shop Catalog</h4>
                <input type="text" className="admin-list-search" id="admin-shop-search" placeholder="Search products by name or category…" />
                <div className="admin-table-responsive">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock (Total / Left)</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody id="admin-shop-table-body">
                      {/* Javascript populated */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* TAB CONTENT: SNAIL MAIL */}
            <div className="admin-tab-content" id="admin-tab-snail">
              <div className="admin-subtabs" id="admin-snail-subtabs">
                <button type="button" className="admin-subtab is-active" data-subtab="admin-sub-snail-members">👥 Members</button>
                <button type="button" className="admin-subtab" data-subtab="admin-sub-snail-pricing">💷 Pricing</button>
                <button type="button" className="admin-subtab" data-subtab="admin-sub-snail-archive">📸 Visual Archive</button>
                <button type="button" className="admin-subtab" data-subtab="admin-sub-snail-reviews">💌 Testimonials</button>
              </div>
              {/* Pricing */}
              <div id="admin-sub-snail-pricing" className="admin-subpanel">
                {/* Subscription price editor */}
                <div className="admin-section-card">
                  <div className="admin-card-header-actions">
                    <h4>Subscription Prices 💷</h4>
                    <button type="button" className="button button-primary" id="admin-snail-prices-save">Save Prices ✓</button>
                  </div>
                  <p style={{fontSize: '0.88rem', color: 'var(--mist)', margin: '0 0 14px'}}>Set the monthly price for each Snail Mail plan. Saving updates the live subscription page instantly.</p>
                  <div id="admin-snail-prices-list" />
                  <div id="admin-snail-prices-msg" style={{marginTop: 10, color: 'var(--aurora-teal)', fontSize: '0.88rem', minHeight: '1.1em'}} />
                </div>
              </div>
              {/* Members */}
              <div id="admin-sub-snail-members" className="admin-subpanel is-active">
                <div className="admin-section-card">
                  <div className="admin-card-header-actions">
                    <h4>Snail Mail Members Sheet</h4>
                    <div className="admin-header-buttons">
                      <button type="button" className="button button-secondary" id="admin-print-stickers-btn">Print Address Stickers 🖨️</button>
                      <button type="button" className="button button-primary" id="admin-export-csv-btn">Export Member Sheet (CSV) 📊</button>
                    </div>
                  </div>
                  {/* Members Stats Panel */}
                  <div className="admin-stats-panel" style={{display: 'flex', gap: 20, marginBottom: 20, flexWrap: 'wrap'}}>
                    <div className="admin-stat-card" style={{flex: 1, minWidth: 150, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', padding: '12px 16px', borderRadius: 8}}>
                      <span style={{fontSize: '0.8rem', color: 'var(--mist)', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Total Subscribers</span>
                      <h3 id="admin-snail-total-count" style={{margin: '4px 0 0 0', fontFamily: 'var(--font-header)', color: 'var(--gold)', fontSize: '1.8rem'}}>0</h3>
                    </div>
                    <div className="admin-stat-card" style={{flex: 1, minWidth: 150, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', padding: '12px 16px', borderRadius: 8}}>
                      <span style={{fontSize: '0.8rem', color: 'var(--mist)', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Active Members</span>
                      <h3 id="admin-snail-active-count" style={{margin: '4px 0 0 0', fontFamily: 'var(--font-header)', color: 'var(--aurora-teal)', fontSize: '1.8rem'}}>0</h3>
                    </div>
                    <div className="admin-stat-card" style={{flex: 1, minWidth: 150, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', padding: '12px 16px', borderRadius: 8}}>
                      <span style={{fontSize: '0.8rem', color: 'var(--mist)', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Inactive Members</span>
                      <h3 id="admin-snail-inactive-count" style={{margin: '4px 0 0 0', fontFamily: 'var(--font-header)', color: 'var(--aurora-rose)', fontSize: '1.8rem'}}>0</h3>
                    </div>
                  </div>
                  {/* Search & Control Toolbar */}
                  <div className="admin-toolbar" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginBottom: 16, flexWrap: 'wrap'}}>
                    <div style={{flex: 1, minWidth: 280, position: 'relative'}}>
                      <input type="text" id="admin-snail-members-search" placeholder="Search by name, email, contact number or address..." style={{width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: 4, color: 'var(--gold)', fontSize: '0.9rem'}} />
                      <span id="admin-snail-search-clear" style={{position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'var(--mist)', display: 'none', fontSize: '1.1rem', userSelect: 'none'}}>×</span>
                    </div>
                    <button type="button" className="button button-primary" id="admin-toggle-add-member-btn" style={{padding: '9px 18px', fontSize: '0.72rem', whiteSpace: 'nowrap', minHeight: 0}}>✚ Add an offline subscriber</button>
                  </div>
                  {/* Sign up a member by hand (offline sign-ups) — opens from the button above */}
                  <div id="admin-add-member-panel" style={{display: 'none', background: 'rgba(201,151,42,0.07)', border: '1px solid var(--glass-border)', borderLeft: '3px solid var(--aurora-gold)', borderRadius: 8, padding: 18, marginBottom: 18}}>
                    <h5 style={{margin: '0 0 4px', fontFamily: '"Fraunces", serif', fontStyle: 'italic', color: 'var(--stardust-full)', fontSize: '1.25rem'}}>✍️ Sign up a member by hand</h5>
                    <p style={{margin: '0 0 16px', fontSize: '0.86rem', color: 'var(--mist)', lineHeight: '1.5'}}>For walk-ins, markets &amp; offline sign-ups — add them straight to the members sheet below. They are saved as <strong>Active</strong>.</p>
                    <form id="admin-add-member-form" className="admin-grid-form">
                      <div className="admin-form-row col-3">
                        <div className="admin-form-group">
                          <label htmlFor="admin-m-name">Full Name</label>
                          <input type="text" id="admin-m-name" required placeholder="Jane Doe" />
                        </div>
                        <div className="admin-form-group">
                          <label htmlFor="admin-m-email">Email Address</label>
                          <input type="email" id="admin-m-email" required placeholder="jane@example.com" />
                        </div>
                        <div className="admin-form-group">
                          <label htmlFor="admin-m-contact">Contact Number</label>
                          <input type="text" id="admin-m-contact" required placeholder="+44 7700 900011" />
                        </div>
                      </div>
                      <div className="admin-form-row col-3">
                        <div className="admin-form-group">
                          <label htmlFor="admin-m-plan">Plan</label>
                          <select id="admin-m-plan" required>
                            <option value="Monthly">Monthly Subscription</option>
                            <option value="6 Months">6 Months Journey</option>
                            <option value="12 Months">12 Months Journey</option>
                          </select>
                        </div>
                        <div className="admin-form-group">
                          <label htmlFor="admin-m-billing">Billing Rate</label>
                          <input type="text" id="admin-m-billing" required defaultValue="£14 / month" placeholder="e.g. £14 / month" />
                        </div>
                        <div className="admin-form-group">
                          <label htmlFor="admin-m-date">Date Subscribed</label>
                          <input type="date" id="admin-m-date" required />
                        </div>
                      </div>
                      <div className="admin-form-group">
                        <label htmlFor="admin-m-address">Shipping Address</label>
                        <textarea id="admin-m-address" required placeholder="14 Primrose Gardens, London, NW3 4YT, United Kingdom" rows={3} style={{fontFamily: 'inherit', fontSize: '0.9rem'}} defaultValue={""} />
                      </div>
                      <div style={{display: 'flex', gap: 10, marginTop: 10}}>
                        <button type="submit" className="button button-primary">Save Subscriber</button>
                        <button type="button" className="button button-secondary" id="admin-cancel-add-member-btn">Cancel</button>
                      </div>
                    </form>
                  </div>
                  <div className="admin-table-responsive">
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th className="sortable" data-sort="name" style={{cursor: 'pointer', userSelect: 'none'}}>Member <span className="sort-icon" id="sort-name-icon">↕</span></th>
                          <th className="sortable" data-sort="email" style={{cursor: 'pointer', userSelect: 'none'}}>Email <span className="sort-icon" id="sort-email-icon">↕</span></th>
                          <th className="sortable" data-sort="contact" style={{cursor: 'pointer', userSelect: 'none'}}>Contact <span className="sort-icon" id="sort-contact-icon">↕</span></th>
                          <th className="sortable" data-sort="plan" style={{cursor: 'pointer', userSelect: 'none'}}>Plan <span className="sort-icon" id="sort-plan-icon">↕</span></th>
                          <th>Billing</th>
                          <th style={{maxWidth: 250}}>Shipping Address</th>
                          <th className="sortable" data-sort="dateSubscribed" style={{cursor: 'pointer', userSelect: 'none'}}>Date Subscribed <span className="sort-icon" id="sort-dateSubscribed-icon">↕</span></th>
                          <th className="sortable" data-sort="status" style={{cursor: 'pointer', userSelect: 'none'}}>Status <span className="sort-icon" id="sort-status-icon">↕</span></th>
                          <th style={{textAlign: 'center'}}>Actions</th>
                        </tr>
                      </thead>
                      <tbody id="admin-snail-members-table-body">
                        {/* Javascript populated */}
                      </tbody>
                    </table>
                  </div>
                  {/* Pagination controls */}
                  <div className="admin-pagination-wrapper" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, flexWrap: 'wrap', gap: 16, borderTop: '1px solid var(--border-color)', paddingTop: 16}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: 'var(--mist)'}}>
                      <span>Show</span>
                      <select id="admin-snail-members-page-size" defaultValue={25} style={{padding: '4px 8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', color: 'var(--gold)', borderRadius: 4, cursor: 'pointer'}}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                        <option value={200}>200</option>
                      </select>
                      <span>entries per page</span>
                    </div>
                    <div id="admin-snail-pagination-info" style={{fontSize: '0.85rem', color: 'var(--mist)'}}>
                      Showing 1 to 25 of 0 entries
                    </div>
                    <div className="admin-pagination-buttons" id="admin-snail-pagination-controls" style={{display: 'flex', gap: 4, alignItems: 'center'}}>
                      {/* Dynamically populated buttons */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Visual Archive */}
              <div id="admin-sub-snail-archive" className="admin-subpanel">
                {/* Snail Mail Sliders visual items */}
                <div className="admin-section-card">
                  <h4>Visual Archive Photos (Moons Archive Slider)</h4>
                  <form id="admin-add-snail-photo-form" className="admin-grid-form">
                    <div className="admin-form-row col-2">
                      <div className="admin-form-group">
                        <label>Snapshot Image (URL or File)</label>
                        <div className="image-upload-wrapper">
                          <input type="text" id="admin-snail-photo-url" placeholder="/assets/archive-vol.png" />
                          <input type="file" id="admin-snail-photo-file" accept="image/*" />
                        </div>
                      </div>
                      <div className="admin-form-group">
                        <label>Caption Text</label>
                        <input type="text" id="admin-snail-photo-caption" placeholder="e.g. January — Vol. 01: AUM ॐ" required />
                      </div>
                    </div>
                    <button type="submit" className="button button-primary">Add Archive Snapshot</button>
                  </form>
                  <div className="admin-slider-list" id="admin-snail-photos-list">
                    {/* Javascript populated */}
                  </div>
                </div>
              </div>
              {/* Testimonials */}
              <div id="admin-sub-snail-reviews" className="admin-subpanel">
                <div className="admin-section-card">
                  <h4>Love &amp; Reviews (Postcards Testimonials Slider)</h4>
                  <form id="admin-add-snail-review-form" className="admin-grid-form">
                    <div className="admin-form-row col-2">
                      <div className="admin-form-group">
                        <label>Member Name / Author</label>
                        <input type="text" id="admin-snail-review-author" placeholder="e.g. Eleanor K. 🌿" required />
                      </div>
                      <div className="admin-form-group">
                        <label>Stamp Icon (Emoji)</label>
                        <input type="text" id="admin-snail-review-stamp" placeholder="e.g. 🪷" required />
                      </div>
                    </div>
                    <div className="admin-form-group">
                      <label>Review Quote</label>
                      <textarea id="admin-snail-review-text" placeholder="Write member quote here..." required defaultValue={""} />
                    </div>
                    <button type="submit" className="button button-primary">Add Postcard Review</button>
                  </form>
                  <div className="admin-slider-list" id="admin-snail-reviews-list">
                    {/* Javascript populated */}
                  </div>
                </div>
              </div>
            </div>
            {/* TAB CONTENT: JOURNAL */}
            <div className="admin-tab-content" id="admin-tab-journal">
              <div className="admin-section-card">
                <h4>Add an Art or Journal Entry</h4>
                <p className="admin-form-hint" style={{fontSize: '0.86rem', color: 'var(--mist)', lineHeight: '1.55', margin: '-4px 0 16px'}}>Two kinds of post: a <strong>written entry</strong> (a motif up top, your words below), or an <strong>art&nbsp;+&nbsp;words</strong> post — pick <em>“Upload my artwork”</em> for the header and <em>“Write the entry”</em> for the words, and your handmade piece appears up top with your writing beneath it.</p>
                <form id="admin-add-journal-form" className="admin-grid-form">
                  <div className="admin-form-row col-3">
                    <div className="admin-form-group">
                      <label>Journal Title</label>
                      <input type="text" id="admin-journal-title" placeholder="e.g. The Geometry of Silk" required />
                    </div>
                    <div className="admin-form-group">
                      <label>Tag / Discipline</label>
                      <select id="admin-journal-tag" required>
                        <option value="Philosophy">Philosophy</option>
                        <option value="Geometry">Geometry</option>
                        <option value="Craft">Craft</option>
                        <option value="Somatic">Somatic</option>
                        <option value="Yoga">Yoga</option>
                        <option value="Breathwork">Breathwork</option>
                      </select>
                    </div>
                    <div className="admin-form-group">
                      <label>Entry Date</label>
                      <input type="text" id="admin-journal-date" placeholder="e.g. June 2026" required />
                    </div>
                  </div>
                  <div className="admin-form-group">
                    <label>Header — a motif, or a photo of your art</label>
                    <div className="admin-radio-group">
                      <label><input type="radio" name="journal-visual-type" defaultValue="vector" defaultChecked /> A hand-drawn motif</label>
                      <label><input type="radio" name="journal-visual-type" defaultValue="image" /> Upload my artwork (a photo)</label>
                    </div>
                    <div className="image-upload-wrapper mt-8" id="journal-image-uploader-wrapper" style={{display: 'none'}}>
                      <input type="text" id="admin-journal-img-url" placeholder="/assets/custom-journal.png" />
                      <input type="file" id="admin-journal-img-file" accept="image/*" />
                    </div>
                  </div>
                  <div className="admin-form-group">
                    <label>The words</label>
                    <div className="admin-radio-group">
                      <label><input type="radio" name="journal-content-type" defaultValue="text" defaultChecked /> Write the entry</label>
                      <label><input type="radio" name="journal-content-type" defaultValue="image" /> Upload a scan of a written page instead</label>
                    </div>
                  </div>
                  {/* Text essay content textarea */}
                  <div className="admin-form-group" id="journal-text-content-wrapper">
                    <label>Poetic Narrative / Essay Content</label>
                    <textarea id="admin-journal-content" style={{minHeight: 240}} placeholder="Write the full journal essay text..." defaultValue={""} />
                  </div>
                  {/* Image content uploader */}
                  <div className="admin-form-group" id="journal-image-content-wrapper" style={{display: 'none'}}>
                    <label>Upload Journal Entry Image Content (Base64 file or URL)</label>
                    <div className="image-upload-wrapper">
                      <input type="text" id="admin-journal-content-img-url" placeholder="/assets/handwritten-page.png" />
                      <input type="file" id="admin-journal-content-img-file" accept="image/*" />
                    </div>
                  </div>
                  <button type="submit" className="button button-primary">Publish Entry</button>
                </form>
              </div>
              <div className="admin-section-card admin-list-card">
                <h4>Current Journal Posts</h4>
                <input type="text" className="admin-list-search" id="admin-journal-search" placeholder="Search posts by title or tag…" />
                <div className="admin-table-responsive">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Journal Entry</th>
                        <th>Tag</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody id="admin-journal-table-body">
                      {/* Javascript populated */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* TAB CONTENT: ORDERS & BOOKINGS */}
            <div className="admin-tab-content" id="admin-tab-orders">
              <div className="admin-subtabs" id="admin-orders-subtabs">
                <button type="button" className="admin-subtab is-active" data-subtab="orders">📦 Shop Orders <span className="admin-subtab-n" id="subtab-orders-count">0</span></button>
                <button type="button" className="admin-subtab" data-subtab="bookings">🎟️ Workshop Bookings <span className="admin-subtab-n" id="subtab-bookings-count">0</span></button>
              </div>
              {/* Shop Orders Section */}
              <div id="admin-sub-orders" className="admin-subpanel is-active">
                <div className="admin-section-card">
                  <div className="admin-card-header-actions">
                    <h4>Shop Purchase Orders Logs</h4>
                    <div className="admin-header-buttons">
                      <button type="button" className="button button-primary" id="admin-export-orders-csv-btn">Export Orders (CSV) 📊</button>
                      <button type="button" className="button button-secondary" id="admin-clear-orders-btn" style={{background: 'var(--aurora-rose)', borderColor: 'var(--aurora-rose)', color: 'var(--dark-cosmos)'}}>Clear All Orders ⚠️</button>
                    </div>
                  </div>
                  <div style={{marginBottom: 16, position: 'relative'}}>
                    <input type="text" id="admin-orders-search" placeholder="Search orders by customer name, email, street address, or product..." style={{width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: 4, color: 'var(--gold)', fontSize: '0.9rem'}} />
                  </div>
                  <div id="admin-orders-controls" className="admin-list-controls" />
                  <div id="admin-orders-bulkbar" className="admin-bulk-bar" hidden />
                  <div className="admin-table-responsive">
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th style={{width: 36, textAlign: 'center'}}><input type="checkbox" id="orders-select-all" aria-label="Select all orders on this page" /></th>
                          <th className="admin-th-sort" data-osort="date">Date</th>
                          <th className="admin-th-sort" data-osort="name">Customer</th>
                          <th>Email</th>
                          <th>Mobile</th>
                          <th>Product(s)</th>
                          <th className="admin-th-sort" data-osort="total">Total</th>
                          <th style={{maxWidth: 200}}>Address</th>
                          <th>Status</th>
                          <th style={{textAlign: 'center'}}>Actions</th>
                        </tr>
                      </thead>
                      <tbody id="admin-shop-orders-table-body">
                        {/* Javascript populated */}
                      </tbody>
                    </table>
                  </div>
                  <div id="admin-orders-pagination" className="admin-pager" />
                </div>
              </div>
              {/* Workshop Bookings Section */}
              <div id="admin-sub-bookings" className="admin-subpanel">
                <div className="admin-section-card">
                  <div className="admin-card-header-actions">
                    <h4>Workshop Booking Reservations Logs</h4>
                    <div className="admin-header-buttons">
                      <button type="button" className="button button-primary" id="admin-export-bookings-csv-btn">Export Reservations (CSV) 📊</button>
                      <button type="button" className="button button-secondary" id="admin-clear-bookings-btn" style={{background: 'var(--aurora-rose)', borderColor: 'var(--aurora-rose)', color: 'var(--dark-cosmos)'}}>Clear All Bookings ⚠️</button>
                    </div>
                  </div>
                  <div style={{marginBottom: 16, position: 'relative'}}>
                    <input type="text" id="admin-bookings-search" placeholder="Search reservations by customer name, email, workshop title, or notes..." style={{width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: 4, color: 'var(--gold)', fontSize: '0.9rem'}} />
                  </div>
                  <div id="admin-bookings-controls" className="admin-list-controls" />
                  <div id="admin-bookings-bulkbar" className="admin-bulk-bar" hidden />
                  <div className="admin-table-responsive">
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th style={{width: 36, textAlign: 'center'}}><input type="checkbox" id="bookings-select-all" aria-label="Select all reservations on this page" /></th>
                          <th className="admin-th-sort" data-bsort="date">Date Booked</th>
                          <th className="admin-th-sort" data-bsort="name">Customer</th>
                          <th>Email</th>
                          <th>Mobile</th>
                          <th>Workshop</th>
                          <th className="admin-th-sort" data-bsort="price">Price</th>
                          <th style={{maxWidth: 250}}>Notes</th>
                          <th style={{textAlign: 'center'}}>Actions</th>
                        </tr>
                      </thead>
                      <tbody id="admin-workshop-bookings-table-body">
                        {/* Javascript populated */}
                      </tbody>
                    </table>
                  </div>
                  <div id="admin-bookings-pagination" className="admin-pager" />
                </div>
              </div>
              {/* Database Backup Section */}
              <div className="admin-section-card" style={{border: '1px solid var(--aurora-gold)'}}>
                <h4 style={{color: 'var(--gold)'}}>Local Database Backup &amp; Restoration Tool</h4>
                <p style={{fontSize: '0.88rem', color: 'var(--mist)', lineHeight: '1.5', marginBottom: 16}}>
                  Since all site information (gallery photos, workshops catalog, shop items, subscribers database, journal posts, orders, and bookings) is stored directly in your browser's local cache, clearing your cache will reset the database. 
                  Use this utility to export your entire database as a single file to keep a backup or to move it to another computer/browser.
                </p>
                <div style={{display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center'}}>
                  <button type="button" className="button button-primary" id="admin-db-backup-btn" style={{padding: '10px 18px'}}>💾 Download Full Database Backup</button>
                  <div style={{display: 'flex', alignItems: 'center', gap: 10, borderLeft: '1px solid var(--border-color)', paddingLeft: 16}}>
                    <label htmlFor="admin-db-restore-file" className="button button-secondary" style={{margin: 0, cursor: 'pointer', display: 'inline-block'}}>📂 Restore Backup File</label>
                    <input type="file" id="admin-db-restore-file" accept=".json" style={{display: 'none'}} />
                    <span id="admin-db-restore-filename" style={{color: 'var(--mist)', fontSize: '0.85rem', fontStyle: 'italic'}}>No file selected</span>
                    <button type="button" className="button button-primary" id="admin-db-restore-confirm-btn" style={{display: 'none', background: 'var(--aurora-teal)', borderColor: 'var(--aurora-teal)', color: 'var(--dark-cosmos)'}}>Apply Restore 🔄</button>
                  </div>
                </div>
              </div>
            </div>
            {/* ───────── Email Updates (people subscribed to news) ───────── */}
            <div className="admin-tab-content" id="admin-tab-updates">
              <div className="admin-section-card">
                <div className="admin-card-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14}}>
                  <h4>Email Update List</h4>
                  <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
                    <button type="button" className="button button-primary" id="admin-updates-export-btn">Export Emails (CSV) 📊</button>
                    <button type="button" className="button button-ghost" id="admin-updates-clear-btn">Clear All</button>
                  </div>
                </div>
                <p style={{fontSize: '0.88rem', color: 'var(--mist)', lineHeight: '1.5', margin: '6px 0 14px'}}>
                  Everyone who asked to be kept posted about new workshops &amp; shop pieces. Download to a spreadsheet anytime.
                </p>
                <div id="admin-updates-stats" style={{marginBottom: 14}} />
                <div style={{overflowX: 'auto'}}>
                  <table className="admin-table" id="admin-updates-table" style={{width: '100%'}}>
                    <thead>
                      <tr>
                        <th style={{textAlign: 'left'}}>#</th>
                        <th style={{textAlign: 'left'}}>Name</th>
                        <th style={{textAlign: 'left'}}>Email</th>
                        <th style={{textAlign: 'left'}}>Interested in</th>
                        <th style={{textAlign: 'left'}}>Date</th>
                        <th style={{textAlign: 'center'}}>Action</th>
                      </tr>
                    </thead>
                    <tbody id="admin-updates-table-body">{/* JS populated */}</tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* ───────── Settings ───────── */}
            {/* TAB CONTENT: CUSTOMERS (sign-in accounts) */}
            <div className="admin-tab-content" id="admin-tab-customers">
              <div className="admin-section-card">
                <div className="admin-card-header-actions">
                  <h4>Customers — sign-in accounts <span id="admin-customers-count" className="admin-count-pill" /></h4>
                  <div className="admin-header-buttons">
                    <button type="button" className="button button-primary" id="admin-customer-add-btn">+ Add customer</button>
                  </div>
                </div>
                <p style={{fontSize: '0.86rem', color: 'var(--mist)', lineHeight: '1.5', margin: '-2px 0 14px'}}>Everyone with a sign-in account. View their orders &amp; bookings, set or reset a password, or pause access. <em>Snail&nbsp;Mail subscriptions are managed in the <strong>Snail Mail</strong> tab; the newsletter list lives in <strong>Email Updates</strong>.</em></p>
                <div style={{marginBottom: 14, position: 'relative'}}>
                  <input type="text" className="admin-list-search" id="admin-customers-search" placeholder="Search customers by name or email…" style={{width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: 4, color: 'var(--gold)', fontSize: '0.9rem'}} />
                </div>
                <div className="admin-table-responsive">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joined</th>
                        <th style={{textAlign: 'center'}}>Orders</th>
                        <th>Subscription</th>
                        <th>Status</th>
                        <th style={{textAlign: 'center'}}>Manage</th>
                      </tr>
                    </thead>
                    <tbody id="admin-customers-table-body">{/* Javascript populated */}</tbody>
                  </table>
                </div>
              </div>
              <div className="admin-section-card" id="admin-customer-detail" style={{display: 'none'}} />
            </div>
            {/* TAB CONTENT: SITE PROFILE */}
            <div className="admin-tab-content" id="admin-tab-profile">
              <div className="admin-subtabs" id="admin-profile-subtabs">
                <button type="button" className="admin-subtab is-active" data-subtab="admin-sub-profile-text">📝 Website Builder</button>
                <button type="button" className="admin-subtab" data-subtab="admin-sub-profile-contact">📇 Contact &amp; Social</button>
              </div>
              {/* Website Text */}
              <div id="admin-sub-profile-text" className="admin-subpanel is-active">
                <div className="admin-section-card">
                  <div className="admin-card-header-actions">
                    <h4>Website Builder</h4>
                  </div>
                  <p style={{fontSize: '0.88rem', color: 'var(--mist)', margin: '0 0 14px'}}>
                    Open any page, see how many sections it has, edit text line by line and image by image, and watch a live desktop preview update above the selected section.
                    Font details are shown for each text block, and you can keep the existing font or swap it from the admin panel.
                  </p>
                  <div id="site-profile-admin-root" />
                </div>
              </div>
              {/* Contact & Social */}
              <div id="admin-sub-profile-contact" className="admin-subpanel">
                <div className="admin-section-card">
                  <div className="admin-card-header-actions">
                    <h4>Contact &amp; Social</h4>
                    <button type="button" className="button button-primary" id="set-contact-save">Save ✓</button>
                  </div>
                  <p style={{fontSize: '0.88rem', color: 'var(--mist)', margin: '0 0 16px'}}>These update everywhere they appear — header, footer, and the contact page.</p>
                  <div className="admin-grid-form">
                    <div className="admin-form-row col-2">
                      <div className="admin-form-group"><label htmlFor="set-email">Email address</label><input type="email" id="set-email" placeholder="hello@ubhi.in" /></div>
                      <div className="admin-form-group"><label htmlFor="set-phone">Phone (optional)</label><input type="text" id="set-phone" placeholder="+44 7700 900000" /></div>
                    </div>
                    <div className="admin-form-group"><label htmlFor="set-address">Address / studio location</label><input type="text" id="set-address" placeholder="London, United Kingdom" /></div>
                    <div className="admin-form-row col-2">
                      <div className="admin-form-group"><label htmlFor="set-instagram">Instagram link</label><input type="text" id="set-instagram" placeholder="https://instagram.com/ubhi.in" /></div>
                      <div className="admin-form-group"><label htmlFor="set-pinterest">Pinterest link</label><input type="text" id="set-pinterest" placeholder="https://in.pinterest.com/chelseaubhi/" /></div>
                    </div>
                  </div>
                  <h5 style={{margin: '22px 0 4px', fontFamily: '"Fraunces",serif', fontStyle: 'italic', color: 'var(--stardust-full)', fontSize: '1.15rem'}}>More social links</h5>
                  <p style={{fontSize: '0.84rem', color: 'var(--mist)', margin: '0 0 12px'}}>Add any other platforms (Facebook, TikTok, YouTube, WhatsApp…). These show in the <strong>footer</strong> at the bottom of the site — not the header. Pop an emoji in the icon box (e.g. 📘 ▶️ 💬 🎵).</p>
                  <div id="extra-socials-list" />
                  <button type="button" className="button button-secondary" id="add-extra-social" style={{marginTop: 6}}>✚ Add a social link</button>
                  <div id="set-contact-msg" style={{marginTop: 14, color: 'var(--aurora-teal)', fontSize: '0.88rem', minHeight: '1.1em'}} />
                </div>
              </div>
            </div>
            <div className="admin-tab-content" id="admin-tab-settings">
              <div className="admin-section-card" style={{maxWidth: 540}}>
                <h4>Change Admin Passcode</h4>
                <p style={{fontSize: '0.88rem', color: 'var(--mist)', lineHeight: '1.5', margin: '-2px 0 18px'}}>This is the passcode that unlocks the Keeper's Desk. Pick something only you know — it is saved on this device.</p>
                <form id="admin-change-pass-form" className="admin-grid-form">
                  <div className="admin-form-group">
                    <label>Current passcode</label>
                    <input type="password" id="admin-current-pass" placeholder="••••••••" required />
                  </div>
                  <div className="admin-form-group">
                    <label>New passcode</label>
                    <input type="password" id="admin-new-pass" placeholder="At least 4 characters" required />
                  </div>
                  <div className="admin-form-group">
                    <label>Confirm new passcode</label>
                    <input type="password" id="admin-confirm-pass" placeholder="Repeat the new passcode" required />
                  </div>
                  <p id="admin-pass-msg" style={{display: 'none', fontSize: '0.85rem', margin: 0}} />
                  <button type="submit" className="button button-primary">Update Passcode</button>
                </form>
              </div>
              <div className="admin-section-card" style={{maxWidth: 540, borderLeft: '3px solid var(--aurora-rose)'}}>
                <h4>Reset to fresh data</h4>
                <p style={{fontSize: '0.88rem', color: 'var(--mist)', lineHeight: '1.5', margin: '-2px 0 14px'}}>If the saved data ever gets into a strange state, this wipes <strong>all</strong> content stored in this browser — orders, bookings, members, subscribers, and any workshops, products or posts you've added — and restores the original sample content. Your passcode is kept. <strong>This cannot be undone</strong>, so download a backup first (Orders &amp; Bookings → Database Backup) if you might want the data back.</p>
                <button type="button" className="button button-secondary" id="admin-reset-data-btn" style={{background: 'var(--aurora-rose)', borderColor: 'var(--aurora-rose)', color: '#fff', padding: '9px 18px', fontSize: '0.72rem', minHeight: 0}}>Reset to fresh data ⚠️</button>
              </div>
            </div>
          </div>
        </div>
        {/* ════════════════════════════════════
           PAGE: MEMBER ACCOUNT — "Your Almanac"
           A signed-in area for customers to manage their Snail Mail
           subscription and review their shop orders & workshops.
    
           ░░ FOR THE DEVELOPER (integration) ░░
           • The sign-in form below is a DEMO. Replace it with real
             authentication (e.g. Supabase / Firebase / Clerk).
           • All billing actions (update card, invoices, cancel) link
             OUT to the Stripe Customer Portal — no card data is ever
             stored here. Look for: memberBillingPortal().
           • The data shown is placeholder. Replace with the signed-in
             customer's real records (subscription from Stripe, orders
             & workshops from your database), filtered by their account.
           ════════════════════════════════════ */}
        <div id="page-account" className="page">
          {/* ───── Sign-in (shown when logged out) ───── */}
          <div id="member-gate" className="member-gate-wrapper reveal">
            <div className="member-login-card">
              <span className="member-login-wax" aria-hidden="true">UBHI</span>
              <h2 className="member-login-title">Your Almanac</h2>
              <p className="member-login-script">a quiet corner, kept for you</p>
              <p className="member-login-sub">Sign in to manage your Snail Mail, and look back over your orders &amp; workshops.</p>
              {/* INTEGRATION: replace this demo form with real authentication. */}
              <form id="member-login-form" autoComplete="off">
                <div className="member-field">
                  <label htmlFor="member-email">Email</label>
                  <input type="email" id="member-email" placeholder="you@example.com" required />
                </div>
                <div className="member-field">
                  <label htmlFor="member-pass">Password</label>
                  <input type="password" id="member-pass" placeholder="••••••••" required />
                </div>
                <p id="member-login-msg" className="member-login-msg" style={{display: 'none'}} />
                <button type="submit" className="button button-primary member-login-btn">Sign in</button>
              </form>
              <div className="member-login-foot">
                <a href="#" id="member-forgot">Forgot password?</a>
                <span>New here? <a href="#" id="member-create">Create an account</a></span>
              </div>
              <p className="member-demo-note">Demo preview — sign in with <strong>abhi@ubhi.in</strong> · passcode <strong>ubhi123</strong>.</p>
            </div>
          </div>
          {/* ───── Dashboard (shown when signed in) ───── */}
          <div id="member-dashboard" className="member-dashboard-wrapper" style={{display: 'none'}}>
            <header className="member-masthead">
              <div>
                <p className="member-eyebrow">Your Almanac</p>
                <h2 className="member-greeting">Hello, <span id="member-name">friend</span></h2>
              </div>
              <button type="button" className="button button-secondary" id="member-logout-btn">Sign out</button>
            </header>
            <div className="member-grid">
              {/* Snail Mail subscription (spans full width) */}
              <section className="member-card member-card-wide">
                <div className="member-card-head"><h3>Your Snail Mail</h3></div>
                <div id="member-subscription">{/* JS populated */}</div>
              </section>
              {/* Shop orders */}
              <section className="member-card">
                <div className="member-card-head"><h3>Your Orders</h3></div>
                <div id="member-orders">{/* JS populated */}</div>
              </section>
              {/* Workshops */}
              <section className="member-card">
                <div className="member-card-head"><h3>Your Workshops</h3></div>
                <div id="member-workshops">{/* JS populated */}</div>
              </section>
            </div>
          </div>
        </div>
        {/* ════════════════════════════════════
           SUPPORT / LEGAL PAGES
           ░░ FOR THE DEVELOPER ░░ These ship with placeholder copy.
           The OWNER replaces the text with final (ideally solicitor-
           reviewed) wording before launch. Structure, routing & styling
           are ready. The Contact form needs wiring to an email service
           (look for: INTEGRATION in the contact handler).
           ════════════════════════════════════ */}
        <div id="page-contact" className="page legal-page">
          <div className="legal-wrap">
            <p className="eyebrow">say hello</p>
            <h1>Contact</h1>
            <p className="legal-lead">A real person reads every message — usually Chelsea. We aim to reply within two working days.</p>
            {/* INTEGRATION: wire this form to a transactional email service (e.g. send to hello@ubhi.in). It currently shows a demo confirmation. */}
            <form id="contact-form" className="legal-form" autoComplete="on">
              <div className="legal-form-row">
                <label>Your name<input type="text" id="contact-name" required placeholder="Jane Doe" /></label>
                <label>Email<input type="email" id="contact-email" required placeholder="you@example.com" /></label>
              </div>
              <label>Subject
                <select id="contact-subject">
                  <option>A general question</option>
                  <option>Workshops</option>
                  <option>Shop order</option>
                  <option>Snail Mail subscription</option>
                  <option>Press &amp; collaborations</option>
                </select>
              </label>
              <label>Message<textarea id="contact-message" rows={5} required placeholder="Write as little or as much as you like…" defaultValue={""} /></label>
              <p id="contact-msg" className="legal-form-msg" style={{display: 'none'}} />
              <button type="submit" className="button button-primary">Send message</button>
            </form>
            <div className="legal-contact-details">
              <p><strong>Email</strong><br /><a href="mailto:hello@ubhi.in">hello@ubhi.in</a></p>
              <p data-site-row="phone" style={{display: 'none'}}><strong>Phone</strong><br /><span data-site="phone" /></p>
              <p><strong>Studio</strong><br /><span data-site="address">London, United Kingdom</span></p>
              <p><strong>Find us</strong><br /><a href="https://instagram.com/ubhi.in" target="_blank" rel="noopener noreferrer">Instagram</a> · <a href="https://in.pinterest.com/chelseaubhi/" target="_blank" rel="noopener noreferrer">Pinterest</a></p>
            </div>
          </div>
        </div>
        <div id="page-faq" className="page legal-page">
          <div className="legal-wrap">
            <p className="eyebrow">good to know</p>
            <h1>Questions &amp; Answers</h1>
            <p className="legal-note">Placeholder Q&amp;A — refine the wording before launch.</p>
            <div className="legal-body faq-list">
              <details><summary>Where are the workshops held?</summary><p>In-person gatherings are held in London, and they're open to seekers travelling from anywhere in the world. When you book, tell us where you're joining from and we'll confirm the details with you.</p></details>
              <details><summary>How does the Snail Mail Club work?</summary><p>Each month a hand-finished parcel — slow pages, a pressed print, a small thing to hold — is posted to your door within the UK. You choose a commitment length; longer journeys include welcome gifts from Chelsea's pottery wheel.</p></details>
              <details><summary>Can I cancel my subscription?</summary><p>Yes — any time, in a couple of clicks from <a href="#account" data-page-link="account">Your Almanac</a> (or just email us). You'll keep receiving parcels until the end of your current paid period.</p></details>
              <details><summary>Where do you ship?</summary><p>The Shop and Snail Mail Club currently post within the United Kingdom. Full shipping details are on the <a href="#shipping" data-page-link="shipping">Shipping</a> page.</p></details>
              <details><summary>What's your returns policy?</summary><p>Unused items can be returned within 14 days. See <a href="#refunds" data-page-link="refunds">Returns &amp; Refunds</a> for the full details.</p></details>
              <details><summary>How are payments handled?</summary><p>All payments are processed securely by Stripe. We never see or store your card details.</p></details>
            </div>
          </div>
        </div>
        <div id="page-shipping" className="page legal-page">
          <div className="legal-wrap">
            <p className="eyebrow">the fine print</p>
            <h1>Shipping &amp; Delivery</h1>
            <p className="legal-note">⚠️ Placeholder — confirm real dispatch times, carriers &amp; costs before launch.</p>
            <div className="legal-body">
              <h3>Where we deliver</h3>
              <p>The Shop and Snail Mail Club currently post within the United Kingdom.</p>
              <h3>Dispatch &amp; delivery times</h3>
              <p>Shop orders are dispatched within <em>[3–5 working days]</em>. Snail Mail parcels are posted on the <em>[date]</em> of each month. Delivery is typically <em>[2–3 working days]</em> via <em>[carrier]</em>.</p>
              <h3>Costs</h3>
              <p><em>[UK shipping cost / free over £X]</em>.</p>
              <h3>Lost or delayed post</h3>
              <p>If a parcel hasn't arrived within <em>[X]</em> days, <a href="#contact" data-page-link="contact">contact us</a> and we'll make it right.</p>
            </div>
          </div>
        </div>
        <div id="page-refunds" className="page legal-page">
          <div className="legal-wrap">
            <p className="eyebrow">the fine print</p>
            <h1>Returns &amp; Refunds</h1>
            <p className="legal-note">⚠️ Placeholder — review against UK Consumer Contracts Regulations before launch.</p>
            <div className="legal-body">
              <h3>Your 14-day right to cancel</h3>
              <p>For most Shop items you may cancel within 14 days of receiving them and return them unused for a refund, under the Consumer Contracts Regulations 2013.</p>
              <h3>How to return</h3>
              <p><a href="#contact" data-page-link="contact">Email us</a> and we'll share return instructions. Items should be returned in their original condition.</p>
              <h3>Workshops</h3>
              <p>Cancel a workshop booking up to <em>[X days]</em> before for a full refund or transfer; after that <em>[policy]</em>.</p>
              <h3>Snail Mail subscriptions</h3>
              <p>Cancel any time; you'll receive parcels until the end of your paid period. <em>[Pro-rata refund policy, if any]</em>.</p>
              <h3>Faulty items</h3>
              <p>If something arrives damaged or faulty, contact us within 30 days for a replacement or full refund.</p>
            </div>
          </div>
        </div>
        <div id="page-privacy" className="page legal-page">
          <div className="legal-wrap">
            <p className="eyebrow">the fine print</p>
            <h1>Privacy Policy</h1>
            <p className="legal-meta">Last updated June 2026</p>
            <p className="legal-note">⚠️ Placeholder (UK GDPR / Data Protection Act 2018) — replace with final, ideally solicitor-reviewed text before launch.</p>
            <div className="legal-body">
              <h3>Who we are</h3>
              <p>Ubhi (<em>[legal/trading name &amp; registered address to be added]</em>) is the data controller for personal data collected through ubhi.in.</p>
              <h3>What we collect &amp; why</h3>
              <p>Your name, email, delivery address and order/booking history — to fulfil orders, run your subscription, and keep you updated. Marketing emails only with your consent.</p>
              <h3>Payments</h3>
              <p>Card payments are processed by <strong>Stripe</strong>. We never receive or store your full card details.</p>
              <h3>Who we share it with</h3>
              <p>Only the processors we need to operate: Stripe (payments), our delivery partners, and our email provider — each bound by data-processing agreements.</p>
              <h3>Your rights</h3>
              <p>You can ask to access, correct, delete or export your data, or object to processing, at any time — email <a href="mailto:hello@ubhi.in">hello@ubhi.in</a>. You may also complain to the ICO (ico.org.uk).</p>
              <h3>Cookies</h3>
              <p>See our <a href="#cookies" data-page-link="cookies">Cookie Policy</a>.</p>
            </div>
          </div>
        </div>
        <div id="page-cookies" className="page legal-page">
          <div className="legal-wrap">
            <p className="eyebrow">the fine print</p>
            <h1>Cookie Policy</h1>
            <p className="legal-note">⚠️ Placeholder — update once analytics/tools are chosen at deploy.</p>
            <div className="legal-body">
              <h3>What cookies we use</h3>
              <p><strong>Essential</strong> — to remember your cart, sign-in and preferences (always on). <strong>Analytics</strong> — to understand how the site is used (only with your consent).</p>
              <h3>Managing your choices</h3>
              <p>You chose your preferences in the banner when you first visited. <button type="button" className="legal-inline-btn" id="reopen-cookie-banner">Change cookie preferences</button>.</p>
            </div>
          </div>
        </div>
        <div id="page-terms" className="page legal-page">
          <div className="legal-wrap">
            <p className="eyebrow">the fine print</p>
            <h1>Terms &amp; Conditions</h1>
            <p className="legal-meta">Last updated June 2026</p>
            <p className="legal-note">⚠️ Placeholder — replace with final, ideally solicitor-reviewed text before launch.</p>
            <div className="legal-body">
              <h3>About these terms</h3>
              <p>By using ubhi.in or buying from us, you agree to these terms.</p>
              <h3>Orders &amp; pricing</h3>
              <p>All prices are in GBP and include VAT where applicable. We may decline or cancel an order; if we do, you'll be refunded in full.</p>
              <h3>Workshops</h3>
              <p>Booking confirms your place subject to availability. See <a href="#refunds" data-page-link="refunds">Returns &amp; Refunds</a> for the cancellation policy. Workshops involve movement; please tell us about any health conditions.</p>
              <h3>Snail Mail subscriptions</h3>
              <p>Subscriptions renew automatically each billing period until cancelled. You can cancel any time from <a href="#account" data-page-link="account">Your Almanac</a>, effective at the end of the current paid period.</p>
              <h3>Intellectual property</h3>
              <p>All artwork, writing and imagery remain the property of Chelsea Kaur Ubhi and may not be reproduced without permission.</p>
              <h3>Liability &amp; governing law</h3>
              <p>Nothing here limits your statutory rights. These terms are governed by the laws of England &amp; Wales.</p>
            </div>
          </div>
        </div>
        <div id="page-404" className="page legal-page">
          <div className="legal-wrap legal-404">
            <span className="legal-404-wax" aria-hidden="true">?</span>
            <p className="eyebrow">a letter gone astray</p>
            <h1>This page wandered off.</h1>
            <p className="legal-lead">We couldn't find what you were looking for — perhaps it was never posted, or the address has changed.</p>
            <div className="legal-404-links">
              <a href="#home" data-page-link="home" className="button button-primary">Back home</a>
              <a href="#workshops" data-page-link="workshops">Workshops</a>
              <a href="#shop" data-page-link="shop">Shop</a>
              <a href="#snail-mail" data-page-link="snail-mail">Snail Mail</a>
              <a href="#journal" data-page-link="journal">Art &amp; Journal</a>
            </div>
          </div>
        </div>
      </main>{/* /app */}
      {/* ════════════════════════════════════
       FOOTER  (shared)
       ════════════════════════════════════ */}
      <footer className="site-footer">
        <div className="footer-brand">
          <img src={asset("/assets/ubhi-logo-transparent.png")} alt="Ubhi" />
          <p data-site="tagline">Look within to ascend.</p>
          <div className="footer-sign">
            <span className="wax wax-gold" aria-hidden="true">ਉ</span>
            <p className="footer-colophon">By Chelsea Kaur Ubhi — Thank you for wandering<br />through this little world, with love&nbsp;<span className="colophon-heart" aria-hidden="true"><svg viewBox="0 0 40 36"><path d="M20 32 C6 22 4 12 12 8 C17 5 20 11 20 13 C20 11 23 5 28 8 C36 12 34 22 20 32Z" /></svg></span></p>
          </div>
          {/* OWNER: Pinterest is confirmed; please confirm/replace the Instagram handle. */}
          <div className="footer-social" aria-label="Find us">
            <a className="soc-ig" href="https://instagram.com/ubhi.in" target="_blank" rel="noopener noreferrer" aria-label="Ubhi on Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x={3} y={3} width={18} height={18} rx={5} /><circle cx={12} cy={12} r={4} /><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" /></svg>
            </a>
            <a className="soc-pin" href="https://in.pinterest.com/chelseaubhi/" target="_blank" rel="noopener noreferrer" aria-label="Ubhi on Pinterest">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.08-.8-.15-2 .04-2.9l1.15-4.9s-.3-.6-.3-1.4c0-1.3.77-2.3 1.72-2.3.8 0 1.2.6 1.2 1.34 0 .8-.52 2.04-.8 3.18-.22.95.48 1.73 1.42 1.73 1.7 0 3-1.8 3-4.4 0-2.3-1.65-3.9-4-3.9-2.73 0-4.33 2.04-4.33 4.15 0 .82.32 1.7.72 2.18a.3.3 0 0 1 .06.28l-.28 1.13c-.04.18-.15.22-.34.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.97-.53-2.29-1.15l-.62 2.37c-.22.87-.83 1.96-1.24 2.62A10 10 0 1 0 12 2z" /></svg>
            </a>
            <a className="soc-mail" href="mailto:hello@ubhi.in" aria-label="Email Ubhi">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x={3} y={5} width={18} height={14} rx={2} /><path d="M3.5 7l8.5 6 8.5-6" /></svg>
            </a>
          </div>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#home" data-page-link="home">Home</a>
          <a href="#workshops" data-page-link="workshops">Workshops</a>
          <a href="#shop" data-page-link="shop">Shop</a>
          <a href="#snail-mail" data-page-link="snail-mail">Snail Mail</a>
          <a href="#journal" data-page-link="journal">Art &amp; Journal</a>
          <a href="#about" data-page-link="about">About</a>
          <a href="#account" data-page-link="account">Your Account</a>
          <a href="#contact" data-page-link="contact">Contact</a>
          <a href="#faq" data-page-link="faq">FAQ</a>
          <a href="#admin" data-page-link="admin">Admin Portal</a>
          <a href="mailto:hello@ubhi.in">hello@ubhi.in</a>
        </nav>
        <nav className="footer-legal" aria-label="Legal">
          <a href="#shipping" data-page-link="shipping">Shipping</a>
          <a href="#refunds" data-page-link="refunds">Returns &amp; Refunds</a>
          <a href="#terms" data-page-link="terms">Terms</a>
          <a href="#privacy" data-page-link="privacy">Privacy</a>
          <a href="#cookies" data-page-link="cookies">Cookies</a>
          <span className="footer-copy">© 2026 Ubhi · London, UK</span>
        </nav>
        <div className="footer-geo" aria-hidden="true">
          <svg viewBox="0 0 120 120" fill="none"><circle cx={60} cy={60} r={56} stroke="rgba(201,151,42,0.18)" strokeWidth="0.5" /><circle cx={60} cy={60} r={38} stroke="rgba(201,151,42,0.12)" strokeWidth="0.5" /><circle cx={60} cy={60} r={20} stroke="rgba(201,151,42,0.18)" strokeWidth="0.5" /><polygon points="60,10 105,85 15,85" stroke="rgba(201,151,42,0.22)" strokeWidth="0.5" fill="none" /><polygon points="60,110 105,35 15,35" stroke="rgba(181,96,122,0.18)" strokeWidth="0.5" fill="none" /></svg>
        </div>
      </footer>
      {/* Journal Dialogue Modal */}
      <div id="journal-modal" className="modal-overlay" aria-hidden="true">
        <div className="modal-panel journal-modal-panel">
          <button className="modal-close" data-close-journal-modal aria-label="Close modal">✕</button>
          <div className="journal-modal-content">
            <div className="journal-modal-header">
              <div className="journal-modal-art" aria-hidden="true" />
              <div className="journal-modal-meta-info">
                <span className="tag modal-tag" /> · <span className="modal-date" />
              </div>
              <h2 className="modal-title" />
            </div>
            <div className="journal-modal-body">
              {/* Poetic essay text will load dynamically here */}
            </div>
          </div>
        </div>
      </div>
      {/* Global Lightbox Modal */}
      <div id="gallery-lightbox" className="lightbox" aria-hidden="true">
        <button className="lightbox-close" aria-label="Close modal">×</button>
        <img className="lightbox-content" alt="Enlarged gallery photo" />
      </div>
      {/* Shopping Bag Drawer */}
      <div id="cart-drawer" className="cart-drawer" role="dialog" aria-modal="true" aria-hidden="true">
        <div className="cart-drawer-overlay" id="cart-drawer-overlay" />
        <div className="cart-drawer-panel">
          <div className="cart-drawer-header">
            <h2>Your Bag</h2>
            <button type="button" className="cart-drawer-close" id="cart-close-btn" aria-label="Close bag">×</button>
          </div>
          <div className="cart-drawer-body" id="cart-drawer-body">
            {/* Dynamic Cart Items list */}
            <div id="cart-empty-msg" className="cart-empty-msg">
              <p>Your bag is empty.</p>
              <a href="#shop" className="button button-secondary" id="cart-explore-btn">Explore Shop</a>
            </div>
            <div id="cart-items-list" className="cart-items-list" />
          </div>
          <div className="cart-drawer-footer" id="cart-drawer-footer" style={{display: 'none'}}>
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span id="cart-subtotal-price">£0</span>
            </div>
            <div className="cart-subtotal cart-shipping-row">
              <span>Shipping <small id="cart-ship-note" style={{opacity: '.7'}} /></span>
              <span id="cart-shipping-price">Free</span>
            </div>
            <div className="cart-subtotal cart-total-row" style={{fontWeight: 600, borderTop: '1px solid rgba(120,96,60,0.25)', paddingTop: 10, marginTop: 4}}>
              <span>Total</span>
              <span id="cart-total-price">£0</span>
            </div>
            <button type="button" className="button button-primary" id="cart-checkout-btn" style={{width: '100%', textAlign: 'center'}}>Proceed to Checkout</button>
          </div>
        </div>
      </div>
      {/* Floating Bag Art Amulet Button */}
      <button type="button" id="header-cart-btn" className="floating-cart-btn" aria-label="Open shopping bag">
        <svg className="cart-amulet-geo" viewBox="0 0 100 100" aria-hidden="true">
          {/* Outer dotted circle */}
          <circle cx={50} cy={50} r={46} stroke="var(--aurora-gold)" strokeWidth="0.75" strokeDasharray="2 3" fill="none" />
          {/* Nested fine circles */}
          <circle cx={50} cy={50} r={40} stroke="var(--aurora-gold)" strokeWidth="0.5" fill="none" />
          <circle cx={50} cy={50} r={30} stroke="rgba(181, 96, 122, 0.4)" strokeWidth="0.5" fill="none" />
          {/* Double triangles forming a yantra hexagram */}
          <polygon points="50,15 80,70 20,70" stroke="var(--aurora-gold)" strokeWidth="0.5" fill="none" />
          <polygon points="50,85 80,30 20,30" stroke="rgba(201, 151, 42, 0.6)" strokeWidth="0.5" fill="none" />
          {/* Inner geometry circle */}
          <circle cx={50} cy={50} r={18} stroke="var(--aurora-gold)" strokeWidth="0.5" fill="none" />
        </svg>
        <div className="cart-badge-count-container">
          <span id="cart-badge-count">0</span>
        </div>
      </button>
      {/* ════════════════════════════════════
       COOKIE CONSENT
       Remembers the choice in localStorage ("ubhi-cookie-consent").
       ░░ DEVELOPER ░░ When you add analytics, only load it after
       consent === "all" (see the gate in script.js: window.ubhiConsent).
       ════════════════════════════════════ */}
      <div id="cookie-banner" className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent" hidden>
        <div className="cookie-banner-inner">
          <p className="cookie-banner-text">
            We use essential cookies to keep the site working, and — only with your say-so — a little analytics to help us improve.
            <a href="#cookies" data-page-link="cookies">Read our cookie policy</a>.
          </p>
          <div className="cookie-banner-actions">
            <button type="button" className="button cookie-btn-reject" data-cookie-choice="essential">Essential only</button>
            <button type="button" className="button button-primary cookie-btn-accept" data-cookie-choice="all">Accept all</button>
          </div>
        </div>
      </div>
      <noscript>
        <div className="noscript-note">
          Ubhi works best with JavaScript enabled — please switch it on to browse the workshops, shop and Snail Mail Club. You can still reach us at &lt;a href="mailto:hello@ubhi.in"&gt;hello@ubhi.in&lt;/a&gt;.
        </div>
      </noscript></div>
    
  );
}

