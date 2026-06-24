import { store } from '../../lib/db';
import RevealOnScroll from '../../components/RevealOnScroll';
import S3Image from '../../components/S3Image';

function ProductGlyph({ index }) {
  const palette = index % 5;
  if (palette === 0) {
    return (
      <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
        <circle cx="100" cy="100" r="90" stroke="rgba(201,151,42,0.4)" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="60" stroke="rgba(201,151,42,0.28)" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="30" stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" />
        <polygon points="100,20 172,155 28,155" stroke="rgba(201,151,42,0.5)" strokeWidth="0.8" fill="rgba(201,151,42,0.05)" />
        <polygon points="100,180 172,45 28,45" stroke="rgba(181,96,122,0.4)" strokeWidth="0.8" fill="rgba(181,96,122,0.04)" />
        <circle cx="100" cy="100" r="6" fill="rgba(201,151,42,0.65)" />
      </svg>
    );
  }

  if (palette === 1) {
    return (
      <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
        <circle cx="100" cy="100" r="80" stroke="rgba(45,139,124,0.3)" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="30" stroke="rgba(45,139,124,0.4)" strokeWidth="0.6" />
        <circle cx="100" cy="30" r="70" stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" />
        <circle cx="160" cy="65" r="70" stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" />
        <circle cx="160" cy="135" r="70" stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" />
        <circle cx="100" cy="170" r="70" stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" />
        <circle cx="40" cy="135" r="70" stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" />
        <circle cx="40" cy="65" r="70" stroke="rgba(45,139,124,0.18)" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="5" fill="rgba(45,139,124,0.65)" />
      </svg>
    );
  }

  if (palette === 2) {
    return (
      <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
        <rect x="20" y="20" width="160" height="160" stroke="rgba(45,139,124,0.35)" strokeWidth="0.7" fill="none" />
        <rect x="50" y="50" width="100" height="100" stroke="rgba(45,139,124,0.28)" strokeWidth="0.6" fill="none" transform="rotate(45 100 100)" />
        <circle cx="100" cy="100" r="40" stroke="rgba(45,139,124,0.4)" strokeWidth="0.7" />
        <circle cx="100" cy="100" r="6" fill="rgba(45,139,124,0.6)" />
      </svg>
    );
  }

  if (palette === 3) {
    return (
      <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
        <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" />
        <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" />
        <line x1="29" y1="29" x2="171" y2="171" stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" />
        <line x1="171" y1="29" x2="29" y2="171" stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="80" stroke="rgba(201,151,42,0.35)" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="20" stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="5" fill="rgba(201,151,42,0.6)" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
      <ellipse cx="100" cy="130" rx="70" ry="30" stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" fill="none" />
      <ellipse cx="100" cy="100" rx="50" ry="70" stroke="rgba(181,96,122,0.28)" strokeWidth="0.5" fill="none" />
      <ellipse cx="100" cy="100" rx="70" ry="50" stroke="rgba(181,96,122,0.28)" strokeWidth="0.5" fill="none" transform="rotate(60 100 100)" />
      <ellipse cx="100" cy="100" rx="70" ry="50" stroke="rgba(181,96,122,0.28)" strokeWidth="0.5" fill="none" transform="rotate(120 100 100)" />
      <circle cx="100" cy="100" r="6" fill="rgba(181,96,122,0.6)" />
    </svg>
  );
}

export default async function ShopPage() {
  const catalogDoc = await store.findOne('app_state', { key: 'shop-catalog' });
  const products = catalogDoc?.value || [];
  const overridesDoc = await store.findOne('app_state', { key: 'text-overrides' });
  const overrides = overridesDoc?.value || {};

  return (
    <main id="page-shop">
      <div className="page-hero">
        <div className="page-hero-geo" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="196" stroke="rgba(181,96,122,0.3)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="130" stroke="rgba(181,96,122,0.2)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="70" stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="30" stroke="rgba(201,151,42,0.35)" strokeWidth="0.5" />
          </svg>
        </div>
        <RevealOnScroll className="page-hero-content">
          <p className="eyebrow">made slowly, by hand</p>
          <h1>{overrides.shop_title || 'Shop'}</h1>
          <div className="shop-ticker" aria-hidden="true">
            <div className="shop-ticker-track">
              <span>Meditative craft</span><span className="ptr-svg-wrap">✦</span>
              <span>Hand-pressed talismans</span><span className="ptr-svg-wrap">✦</span>
              <span>Ritual tools</span><span className="ptr-svg-wrap">✦</span>
              <span>Quiet keepsakes</span><span className="ptr-svg-wrap">✦</span>
              <span>Earth-bound vessels</span>
            </div>
            <div className="shop-ticker-track">
              <span>Meditative craft</span><span className="ptr-svg-wrap">✦</span>
              <span>Hand-pressed talismans</span><span className="ptr-svg-wrap">✦</span>
              <span>Ritual tools</span><span className="ptr-svg-wrap">✦</span>
              <span>Quiet keepsakes</span><span className="ptr-svg-wrap">✦</span>
              <span>Earth-bound vessels</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <section className="shop section-pad">
        <RevealOnScroll className="section-heading">
          <h2>Objects made to be kept close.</h2>
          <p className="art-portfolio-note">Prints, paper goods, ritual tools, and tactile pieces from the studio, all shaped to feel slower than the internet.</p>
        </RevealOnScroll>
        <div className="shop-layout">
          <div className="shop-scroll-container">
            <div className="product-grid">
              {products.length === 0 ? (
                <p className="empty-state">The shop is currently empty. Check back soon.</p>
              ) : (
                products.map((product, index) => (
                  <RevealOnScroll key={product.id || index} className="product-card">
                    <div className="product-image-wrap">
                      {product.image_key || product.image ? (
                        <S3Image src={product.image_key || product.image} alt={product.title} width={900} height={900} />
                      ) : (
                        <div className="product-art" aria-hidden="true">
                          <ProductGlyph index={index} />
                        </div>
                      )}
                    </div>
                    <div className="product-body">
                      <p className="eyebrow">{product.category || 'Curated piece'}</p>
                      <h3>{product.title}</h3>
                      <p>{product.description || product.excerpt}</p>
                      <div className="product-footer">
                        <strong>£{product.price}</strong>
                        <button type="button" className="button button-secondary">Bring home</button>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
