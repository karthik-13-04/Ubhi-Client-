import { store } from '../../lib/db';
import RevealOnScroll from '../../components/RevealOnScroll';
import S3Image from '../../components/S3Image';

function WorkshopGlyph({ index }) {
  const palette = index % 4;
  if (palette === 0) {
    return (
      <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
        <circle cx="100" cy="100" r="80" stroke="rgba(201,151,42,0.4)" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="50" stroke="rgba(201,151,42,0.25)" strokeWidth="0.6" />
        <polygon points="100,20 169,140 31,140" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
        <polygon points="100,180 169,60 31,60" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="4" fill="rgba(201,151,42,0.6)" />
      </svg>
    );
  }

  if (palette === 1) {
    return (
      <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
        <circle cx="100" cy="100" r="80" stroke="rgba(181,96,122,0.4)" strokeWidth="0.8" />
        <ellipse cx="100" cy="100" rx="70" ry="30" stroke="rgba(181,96,122,0.3)" strokeWidth="0.6" />
        <ellipse cx="100" cy="100" rx="30" ry="70" stroke="rgba(181,96,122,0.3)" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="8" fill="rgba(181,96,122,0.6)" />
      </svg>
    );
  }

  if (palette === 2) {
    return (
      <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
        <path d="M70,50 L130,50 M80,50 L80,65 C80,110 50,120 50,150 C50,175 70,180 100,180 C130,180 150,175 150,150 C150,120 120,110 120,65 L120,50" stroke="rgba(45,139,124,0.45)" strokeWidth="0.8" />
        <ellipse cx="100" cy="50" rx="30" ry="8" stroke="rgba(45,139,124,0.5)" strokeWidth="0.7" />
        <ellipse cx="100" cy="150" rx="42" ry="12" stroke="rgba(45,139,124,0.15)" strokeWidth="0.5" />
        <circle cx="100" cy="120" r="14" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
      <path d="M50,90 A50,50 0 0,0 150,90 Z" fill="rgba(201,151,42,0.08)" stroke="rgba(201,151,42,0.5)" strokeWidth="0.8" />
      <line x1="40" y1="90" x2="160" y2="90" stroke="rgba(201,151,42,0.4)" strokeWidth="0.8" />
      <circle cx="100" cy="90" r="3" fill="rgba(201,151,42,0.6)" />
      <circle cx="100" cy="100" r="60" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
    </svg>
  );
}

export default async function WorkshopsPage() {
  const workshops = await store.all('workshops');
  const overridesDoc = await store.findOne('app_state', { key: 'text-overrides' });
  const overrides = overridesDoc?.value || {};

  return (
    <main id="page-workshops">
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
        <RevealOnScroll className="page-hero-content">
          <p className="eyebrow">come home to your body</p>
          <h1>{overrides.workshops_title || 'Workshop Universe'}</h1>
          <div className="workshops-ticker" aria-hidden="true">
            <div className="workshops-ticker-track">
              <span>Intimate gatherings</span><span className="ptr-svg-wrap">✦</span>
              <span>Somatic movement</span><span className="ptr-svg-wrap">✦</span>
              <span>Conscious breathwork</span><span className="ptr-svg-wrap">✦</span>
              <span>Raw craftsmanship</span><span className="ptr-svg-wrap">✦</span>
              <span>Quiet presence</span>
            </div>
            <div className="workshops-ticker-track">
              <span>Intimate gatherings</span><span className="ptr-svg-wrap">✦</span>
              <span>Somatic movement</span><span className="ptr-svg-wrap">✦</span>
              <span>Conscious breathwork</span><span className="ptr-svg-wrap">✦</span>
              <span>Raw craftsmanship</span><span className="ptr-svg-wrap">✦</span>
              <span>Quiet presence</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <section className="workshops section-pad">
        <RevealOnScroll className="section-heading">
          <h2>Gatherings for breath, body, and hand.</h2>
          <p className="art-portfolio-note">Each workshop is designed as a slow ritual: movement first, then making, then something meaningful to carry home.</p>
        </RevealOnScroll>
        <div className="workshop-grid">
          {workshops.length === 0 ? (
            <p className="empty-state">No upcoming workshops at the moment. Join the newsletter to be notified.</p>
          ) : (
            workshops.map((workshop, index) => (
              <RevealOnScroll key={workshop.id || index} className="workshop-card">
                <div className="card-image-wrap">
                  {workshop.image_key || workshop.image ? (
                    <S3Image src={workshop.image_key || workshop.image} alt={workshop.title} width={900} height={700} />
                  ) : (
                    <div className="product-art" aria-hidden="true">
                      <WorkshopGlyph index={index} />
                    </div>
                  )}
                  <div className="card-image-glow"></div>
                </div>
                <div className="card-body">
                  <p className="eyebrow">{workshop.category || 'Signature'} · {workshop.date ? new Date(workshop.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : 'TBD'}</p>
                  <h3>{workshop.title}</h3>
                  <p>{workshop.excerpt || workshop.description}</p>
                  <dl>
                    <div><dt>Time</dt><dd>{workshop.time || 'TBD'}</dd></div>
                    <div><dt>Place</dt><dd>{workshop.location || 'London studio'}</dd></div>
                    <div><dt>Price</dt><dd>£{workshop.price}</dd></div>
                    <div><dt>Spaces</dt><dd>{workshop.spaces || workshop.capacity || 'Limited'}</dd></div>
                  </dl>
                  <button className="button button-primary" type="button">Book</button>
                </div>
              </RevealOnScroll>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
