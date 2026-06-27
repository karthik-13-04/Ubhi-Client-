export default function Overlays() {
  return (
    <>
    <div id="journal-modal" className="modal-overlay" aria-hidden="true">
      <div className="modal-panel journal-modal-panel">
        <button className="modal-close" data-close-journal-modal="" aria-label="Close modal">
          ✕
        </button>
        <div className="journal-modal-content">
          <div className="journal-modal-header">
            <div className="journal-modal-art" aria-hidden="true"></div>
            <div className="journal-modal-meta-info">
              <span className="tag modal-tag"></span>
               · 
              <span className="modal-date"></span>
            </div>
            <h2 className="modal-title"></h2>
          </div>
          <div className="journal-modal-body"></div>
        </div>
      </div>
    </div>
    <div id="gallery-lightbox" className="lightbox" aria-hidden="true">
      <button className="lightbox-close" aria-label="Close modal">
        &times;
      </button>
      <button className="lightbox-nav lightbox-prev" type="button" aria-label="Previous image">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      <figure className="lightbox-figure">
        <img className="lightbox-content" alt="Enlarged gallery photo" />
        <figcaption className="lightbox-cap"></figcaption>
        <div className="lightbox-dots" role="tablist" aria-label="Photos in this piece"></div>
      </figure>
      <button className="lightbox-nav lightbox-next" type="button" aria-label="Next image">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    <div id="cart-drawer" className="cart-drawer" role="dialog" aria-modal="true" aria-hidden="true">
      <div className="cart-drawer-overlay" id="cart-drawer-overlay"></div>
      <div className="cart-drawer-panel">
        <div className="cart-drawer-header">
          <h2>
            Your Bag
          </h2>
          <button type="button" className="cart-drawer-close" id="cart-close-btn" aria-label="Close bag">
            &times;
          </button>
        </div>
        <div className="cart-drawer-body" id="cart-drawer-body">
          <div id="cart-empty-msg" className="cart-empty-msg">
            <p>
              Your bag is empty.
            </p>
            <a href="/shop#shop" className="button button-secondary" id="cart-explore-btn">
              Explore Shop
            </a>
          </div>
          <div id="cart-items-list" className="cart-items-list"></div>
        </div>
        <div className="cart-drawer-footer" id="cart-drawer-footer" style={{ display: "none" }}>
          <div className="cart-subtotal">
            <span>
              Subtotal
            </span>
            <span id="cart-subtotal-price">
              £0
            </span>
          </div>
          <div className="cart-subtotal cart-shipping-row">
            <span>
              Shipping 
              <small id="cart-ship-note" style={{ opacity: ".7" }}></small>
            </span>
            <span id="cart-shipping-price">
              Free
            </span>
          </div>
          <div className="cart-subtotal cart-total-row" style={{ fontWeight: "600", borderTop: "1px solid rgba(120,96,60,0.25)", paddingTop: "10px", marginTop: "4px" }}>
            <span>
              Total
            </span>
            <span id="cart-total-price">
              £0
            </span>
          </div>
          <button type="button" className="button button-primary" id="cart-checkout-btn" style={{ width: "100%", textAlign: "center" }}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
    <button type="button" id="header-cart-btn" className="floating-cart-btn" aria-label="Open shopping bag">
      <svg className="cart-amulet-geo" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="46" stroke="var(--aurora-gold)" strokeWidth="0.75" strokeDasharray="2 3" fill="none" />
        <circle cx="50" cy="50" r="40" stroke="var(--aurora-gold)" strokeWidth="0.5" fill="none" />
        <circle cx="50" cy="50" r="30" stroke="rgba(181, 96, 122, 0.4)" strokeWidth="0.5" fill="none" />
        <polygon points="50,15 80,70 20,70" stroke="var(--aurora-gold)" strokeWidth="0.5" fill="none" />
        <polygon points="50,85 80,30 20,30" stroke="rgba(201, 151, 42, 0.6)" strokeWidth="0.5" fill="none" />
        <circle cx="50" cy="50" r="18" stroke="var(--aurora-gold)" strokeWidth="0.5" fill="none" />
      </svg>
      <div className="cart-badge-count-container">
        <span id="cart-badge-count">
          0
        </span>
      </div>
    </button>
    <div id="cookie-banner" className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent" hidden>
      <div className="cookie-banner-inner">
        <p className="cookie-banner-text">
          
          We use essential cookies to keep the site working, and — only with your say-so — a little analytics to help us improve.
          
          <a href="/cookies#cookies" data-page-link="cookies">
            Read our cookie policy
          </a>
          .
        
        </p>
        <div className="cookie-banner-actions">
          <button type="button" className="button cookie-btn-reject" data-cookie-choice="essential">
            Essential only
          </button>
          <button type="button" className="button button-primary cookie-btn-accept" data-cookie-choice="all">
            Accept all
          </button>
        </div>
      </div>
    </div>
    <noscript>
      
      <div className="noscript-note">
        Ubhi works best with JavaScript enabled — please switch it on to browse the workshops, shop and Snail Mail Club. You can still reach us at <a href="mailto:hello@ubhi.in">hello@ubhi.in</a>.
      </div>
    
    </noscript>
    </>
  );
}
