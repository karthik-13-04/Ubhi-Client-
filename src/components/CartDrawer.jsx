'use client';

import { useCallback } from 'react';
import useCart from '../hooks/useCart';
import { formatPrice } from '../lib/utils';

/**
 * Shopping cart drawer component.
 * Replaces the cart DOM manipulation from script.js.
 *
 * Props:
 *   isOpen: boolean
 *   onClose: () => void
 *   onCheckout: () => void  — called when user clicks "Checkout"
 */
export default function CartDrawer({ isOpen, onClose, onCheckout }) {
  const {
    items, updateQty, removeItem, subtotal, shipping,
    total, totalQty, freeShipThreshold
  } = useCart();

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-drawer-overlay ${isOpen ? 'is-active' : ''}`}
        id="cart-drawer-overlay"
        onClick={handleOverlayClick}
      />

      {/* Drawer */}
      <aside
        className={`cart-drawer ${isOpen ? 'is-active' : ''}`}
        id="cart-drawer"
        aria-hidden={!isOpen}
      >
        <div className="cart-drawer-header">
          <h3>Your Bag</h3>
          <button
            className="cart-close-btn"
            id="cart-close-btn"
            onClick={onClose}
            aria-label="Close cart"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="cart-drawer-body">
          {totalQty === 0 ? (
            <div className="cart-empty-state" id="cart-empty-msg" style={{ display: 'block' }}>
              <p style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--mist)' }}>
                Your bag is empty.
              </p>
              <div style={{ textAlign: 'center' }}>
                <button
                  className="button button-secondary"
                  id="cart-explore-btn"
                  onClick={onClose}
                >
                  Explore the Shop
                </button>
              </div>
            </div>
          ) : (
            <div className="cart-items-list" id="cart-items-list">
              {items.map((item, idx) => (
                <div className="cart-item-row" key={item.name + idx}>
                  <div
                    className="cart-item-art"
                    dangerouslySetInnerHTML={{ __html: item.art || '' }}
                  />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <div className="cart-item-price">£{item.price}</div>
                  </div>
                  <div className="cart-item-actions">
                    <button
                      type="button"
                      className="cart-qty-btn decrease-qty"
                      onClick={() => updateQty(item.name, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="cart-item-qty">{item.quantity}</span>
                    <button
                      type="button"
                      className="cart-qty-btn increase-qty"
                      onClick={() => updateQty(item.name, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="cart-remove-btn remove-item"
                      onClick={() => removeItem(item.name)}
                      aria-label="Remove item"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {totalQty > 0 && (
          <div className="cart-drawer-footer" id="cart-drawer-footer" style={{ display: 'block' }}>
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span id="cart-subtotal-price">£{subtotal}</span>
            </div>
            <div className="cart-summary-row">
              <span>Shipping</span>
              <span id="cart-shipping-price">
                {shipping === 0 ? 'Free' : `£${shipping.toFixed(2)}`}
              </span>
              <span className="cart-ship-note" id="cart-ship-note">
                {shipping > 0 ? `· free over £${freeShipThreshold}` : ''}
              </span>
            </div>
            <div className="cart-summary-row cart-total-row">
              <strong>Total</strong>
              <strong id="cart-total-price">£{formatPrice(total)}</strong>
            </div>
            <button
              className="button button-primary cart-checkout-btn"
              id="cart-checkout-btn"
              onClick={() => {
                onClose();
                if (onCheckout) onCheckout();
              }}
            >
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
