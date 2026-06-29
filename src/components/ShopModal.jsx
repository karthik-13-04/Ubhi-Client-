'use client';

import { useState, useCallback, useEffect } from 'react';
import useCart from '../hooks/useCart';
import { ubhiOrderRef, formatPrice } from '../lib/utils';

/**
 * Shop Checkout Modal (3 Steps)
 * Replaces script.js lines 731–1001.
 *
 * Props:
 *   isOpen: boolean
 *   onClose: () => void
 */
export default function ShopModal({ isOpen, onClose }) {
  const { items, subtotal, shipping, total, clearCart } = useCart();
  const [step, setStep] = useState(1);

  // Form state
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', address: '', city: '', postcode: '', country: '',
  });

  // Reset step on open
  useEffect(() => {
    if (isOpen) {
      setStep(1);
    }
  }, [isOpen]);

  // Body scroll lock and Escape key
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    
    const onKeyDown = (e) => { if (e.key === 'Escape' && isOpen) onClose(); };
    if (isOpen) document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const goToStep2 = () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.address || !formData.city || !formData.postcode) {
      alert("Please fill in all required delivery fields.");
      return;
    }
    setStep(2);
  };

  const handlePaymentSubmit = async () => {
    const orderData = {
      orderId: ubhiOrderRef(),
      type: 'shop',
      items: items.map(i => ({ name: i.name, quantity: i.quantity, price: i.price })),
      subtotal: subtotal,
      shipping: shipping,
      total: total,
      customerName: formData.name,
      customerEmail: formData.email,
      customerMobile: formData.mobile,
      shippingAddress: {
        street: formData.address,
        city: formData.city,
        postcode: formData.postcode,
        country: formData.country
      },
      date: new Date().toISOString(),
      status: 'preparing',
    };

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
      if (!res.ok) throw new Error('Order failed');
    } catch (err) {
      console.error('Order submission error:', err);
    }

    clearCart();
    setStep(3);
  };

  if (!isOpen) return null;

  return (
    <div className="modal is-active" aria-hidden="false" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-inner">
        <button className="modal-close" onClick={onClose} aria-label="Close checkout">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-header">
          <h2>Checkout</h2>
          <p className="modal-subtitle">Secure checkout for your handmade objects.</p>
        </div>

        <div className="modal-progress">
          <div className={`progress-step ${step >= 1 ? 'is-active' : ''}`}>1. Delivery</div>
          <div className="progress-line" />
          <div className={`progress-step ${step >= 2 ? 'is-active' : ''}`}>2. Payment</div>
        </div>

        <div className="modal-body">
          {/* STEP 1 */}
          <div className={`modal-step ${step === 1 ? 'is-active' : ''}`}>
            
            <div className="form-row">
              <div className="form-group">
                <label>Full name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </div>
            </div>

            <div className="form-group">
              <label>Mobile number (optional)</label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <label>Shipping address line 1</label>
              <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Town / City</label>
                <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Postcode</label>
                <input type="text" name="postcode" value={formData.postcode} onChange={handleInputChange} required />
              </div>
            </div>

            <div className="form-group">
              <label>Country</label>
              <select name="country" value={formData.country} onChange={handleInputChange}>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Europe (EU)">Europe (EU)</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="modal-footer">
              <div className="modal-price">
                <span className="price-label">Subtotal:</span>
                <span className="price-amount">£{formatPrice(subtotal)}</span>
              </div>
              <button type="button" className="button button-primary" onClick={goToStep2}>Continue to Payment</button>
            </div>
          </div>

          {/* STEP 2 */}
          <div className={`modal-step ${step === 2 ? 'is-active' : ''}`}>
            <div className="payment-summary-box">
              <div className="psb-row">
                <span className="psb-label">Items ({items.length})</span>
                <span className="psb-val">£{formatPrice(subtotal)}</span>
              </div>
              <div className="psb-row">
                <span className="psb-label">Shipping</span>
                <span className="psb-val">{shipping === 0 ? 'Free' : `£${shipping.toFixed(2)}`}</span>
              </div>
              <div className="psb-row" style={{borderTop: '1px solid var(--border-color)', paddingTop: '12px', marginTop: '4px'}}>
                <span className="psb-label" style={{fontWeight: 600, color: 'var(--text-color)'}}>Total</span>
                <span className="psb-val" style={{fontWeight: 600, color: 'var(--text-color)'}}>£{formatPrice(total)}</span>
              </div>
            </div>

            <div className="form-group" style={{marginTop: '20px'}}>
              <label>Name on card</label>
              <input type="text" defaultValue={formData.name} required />
            </div>
            
            <div className="form-group">
              <label>Card number</label>
              <div className="card-input-wrap">
                <input type="text" placeholder="0000 0000 0000 0000" required />
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                  <rect x="3" y="6" width="18" height="12" rx="2" />
                  <path d="M3 10h18" />
                </svg>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Expiry date</label>
                <input type="text" placeholder="MM / YY" required />
              </div>
              <div className="form-group">
                <label>CVC</label>
                <input type="text" placeholder="123" required />
              </div>
            </div>

            <p className="payment-security-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0110 0v4"></path>
              </svg>
              Payments are secure and encrypted.
            </p>

            <div className="modal-footer" style={{justifyContent: 'space-between'}}>
              <button type="button" className="button button-secondary" onClick={() => setStep(1)}>Back</button>
              <button type="button" className="button button-primary" onClick={handlePaymentSubmit}>Pay £{formatPrice(total)}</button>
            </div>
          </div>

          {/* STEP 3 */}
          <div className={`modal-step ${step === 3 ? 'is-active' : ''}`}>
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 style={{textAlign: 'center', marginBottom: '16px', fontSize: '1.4rem', color: 'var(--text-color)'}}>Order Confirmed</h3>
            <p style={{textAlign: 'center', color: 'var(--mist)', lineHeight: '1.6', marginBottom: '30px'}}>
              Thank you, <strong>{formData.name}</strong>. Your order is being prepared with quiet care. A receipt has been sent to <strong>{formData.email}</strong>.
            </p>
            <div style={{textAlign: 'center'}}>
              <button type="button" className="button button-primary" onClick={onClose}>Close window</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
