import { store } from '../../lib/db';
import RevealOnScroll from '../../components/RevealOnScroll';
import S3Image from '../../components/S3Image';

export default async function ArtPage() {
  const artDoc = await store.findOne('app_state', { key: 'art-pieces' });
  const artPieces = artDoc?.value || [];

  return (
    <main id="page-art">
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
        <RevealOnScroll className="page-hero-content">
          <p className="eyebrow">original handmade artwork</p>
          <h1>Art Portfolio</h1>
          <div className="art-ticker" aria-hidden="true">
            <div className="art-ticker-track">
              <span>Block prints</span><span className="ptr-svg-wrap">✦</span>
              <span>Hand-pulled ink</span><span className="ptr-svg-wrap">✦</span>
              <span>Original artwork</span><span className="ptr-svg-wrap">✦</span>
              <span>Slow-made by hand</span><span className="ptr-svg-wrap">✦</span>
              <span>Paper &amp; pigment</span><span className="ptr-svg-wrap">✦</span>
              <span>Sacred geometry</span>
            </div>
            <div className="art-ticker-track">
              <span>Block prints</span><span className="ptr-svg-wrap">✦</span>
              <span>Hand-pulled ink</span><span className="ptr-svg-wrap">✦</span>
              <span>Original artwork</span><span className="ptr-svg-wrap">✦</span>
              <span>Slow-made by hand</span><span className="ptr-svg-wrap">✦</span>
              <span>Paper &amp; pigment</span><span className="ptr-svg-wrap">✦</span>
              <span>Sacred geometry</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <section className="art-portfolio-section section-pad">
        <RevealOnScroll className="section-heading">
          <h2 className="art-portfolio-sub">A gathering of recent work</h2>
          <p className="art-portfolio-note">Pieces are added as they leave the studio. To enquire about a work or a commission, get in touch.</p>
        </RevealOnScroll>
        <div className="art-portfolio-grid">
          {artPieces.length === 0 ? (
            <p className="empty-state">No artwork is published yet.</p>
          ) : (
            artPieces.map((art, index) => (
              <RevealOnScroll key={art.id || index} className="art-piece">
                <S3Image src={art.image || art.image_key} alt={art.title || `Art piece ${index + 1}`} width={900} height={900} className="art-img" />
                <div className="art-caption">
                  <h3>{art.title}</h3>
                  <p>{art.description}</p>
                </div>
              </RevealOnScroll>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
