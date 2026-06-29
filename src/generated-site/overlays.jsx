'use client';

import { useState, useCallback, useEffect } from 'react';
import BookingModal from '../components/BookingModal';
import ShopModal from '../components/ShopModal';
import SnailMailModal from '../components/SnailMailModal';
import GalleryLightbox from '../components/GalleryLightbox';
import JournalModal from '../components/JournalModal';
import CartDrawer from '../components/CartDrawer';
import useCart from '../hooks/useCart';

/**
 * Global modal context and renderer.
 * All overlays (modals and the cart drawer) are mounted here.
 */
export default function Overlays() {
  const [activeModal, setActiveModal] = useState(null); // 'booking' | 'shop' | 'snail-mail' | 'gallery' | 'journal' | null
  const [modalPayload, setModalPayload] = useState(null);
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalQty } = useCart();

  const openModal = useCallback((type, payload = null) => {
    setModalPayload(payload);
    setActiveModal(type);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
    setModalPayload(null);
  }, []);

  // Make openModal available globally for legacy script triggers (if any) or deeply nested components
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.ubhiOpenModal = openModal;
      window.ubhiOpenCart = () => setIsCartOpen(true);
    }
  }, [openModal]);

  return (
    <>
      <BookingModal
        isOpen={activeModal === 'booking'}
        payload={modalPayload}
        onClose={closeModal}
      />
      
      <ShopModal
        isOpen={activeModal === 'shop'}
        onClose={closeModal}
      />
      
      <SnailMailModal
        isOpen={activeModal === 'snail-mail'}
        payload={modalPayload}
        onClose={closeModal}
      />

      <GalleryLightbox
        isOpen={activeModal === 'gallery'}
        images={modalPayload?.images || []}
        caption={modalPayload?.caption || ''}
        startIndex={modalPayload?.startIndex || 0}
        onClose={closeModal}
      />

      <JournalModal
        isOpen={activeModal === 'journal'}
        essay={modalPayload}
        onClose={closeModal}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => {
          setIsCartOpen(false);
          openModal('shop');
        }}
      />

      {/* Floating Cart Button */}
      <button
        type="button"
        id="header-cart-btn"
        className="floating-cart-btn"
        aria-label="Open shopping bag"
        onClick={() => setIsCartOpen(true)}
      >
        <svg className="cart-amulet-geo" viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="46" stroke="var(--aurora-gold)" strokeWidth="0.75" strokeDasharray="2 3" fill="none" />
          <circle cx="50" cy="50" r="40" stroke="var(--aurora-gold)" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="rgba(181, 96, 122, 0.4)" strokeWidth="0.5" fill="none" />
          <polygon points="50,15 80,70 20,70" stroke="var(--aurora-gold)" strokeWidth="0.5" fill="none" />
          <polygon points="50,85 80,30 20,30" stroke="rgba(201, 151, 42, 0.6)" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="18" stroke="var(--aurora-gold)" strokeWidth="0.5" fill="none" />
        </svg>
        <div className="cart-badge-count-container">
          <span id="cart-badge-count">{totalQty}</span>
        </div>
      </button>

      {/* Cookie Banner (Keep HTML layout from before, handled by world.js) */}
      <div id="cookie-banner" className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent" hidden>
        <div className="cookie-banner-inner">
          <p className="cookie-banner-text">
            We use essential cookies to keep the site working, and — only with your say-so — a little analytics to help us improve.
            <a href="/cookies#cookies" data-page-link="cookies">Read our cookie policy</a>.
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
