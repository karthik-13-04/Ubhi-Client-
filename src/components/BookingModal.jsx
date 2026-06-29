'use client';

import { useState, useCallback, useEffect } from 'react';
import { ubhiOrderRef, esc } from '../lib/utils';

/**
 * Workshop Booking Modal (3 Steps)
 * Replaces script.js lines 391–730.
 *
 * Props:
 *   isOpen: boolean
 *   payload: { workshopName: string, price: number } | null
 *   onClose: () => void
 */
export default function BookingModal({ isOpen, payload, onClose }) {
  const [step, setStep] = useState(1);
  const [workshops, setWorkshops] = useState([]);
  const [selectedWorkshop, setSelectedWorkshop] = useState('');
  const [price, setPrice] = useState(0);

  // Form state
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', address: '', city: '', postcode: '', country: '',
  });

  // Load workshops from API on open
  useEffect(() => {
    if (!isOpen) return;
    setStep(1);

    fetch('/api/workshops')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setWorkshops(data);
        }
      })
      .catch((err) => console.error('Failed to load workshops:', err));

    if (payload?.workshopName) {
      setSelectedWorkshop(payload.workshopName);
      setPrice(payload.price || 0);
    }
  }, [isOpen, payload]);

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

  const handleWorkshopChange = (e) => {
    const wName = e.target.value;
    setSelectedWorkshop(wName);
    const option = e.target.options[e.target.selectedIndex];
    setPrice(Number(option.dataset.price) || 0);
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
      type: 'booking',
      itemName: selectedWorkshop,
      price: price,
      quantity: 1,
      total: price,
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
      status: 'booked',
    };

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
      if (!res.ok) {
        const err = await res.json();
        if (res.status === 409) {
          alert(err.error || 'This workshop is sold out.');
          return;
        }
        throw new Error('Booking failed');
      }
    } catch (err) {
      console.error('Booking submission error:', err);
    }

    setStep(3);
  };

  if (!isOpen) return null;

  return (
    <div className="modal is-active" aria-hidden="false" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-inner">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-header">
          <h2>Reserve Your Space</h2>
          <p className="modal-subtitle">Secure your place for a session in the London studio.</p>
        </div>

        <div className="modal-progress">
          <div className={`progress-step ${step >= 1 ? 'is-active' : ''}`}>1. Details</div>
          <div className="progress-line" />
          <div className={`progress-step ${step >= 2 ? 'is-active' : ''}`}>2. Payment</div>
        </div>

        <div className="modal-body">
          {/* STEP 1 */}
          <div className={`modal-step ${step === 1 ? 'is-active' : ''}`}>
            <div className="form-group">
              <label htmlFor="modal-workshop-select">Workshop</label>
              <select id="modal-workshop-select" value={selectedWorkshop} onChange={handleWorkshopChange}>
                {workshops.map(w => {
                  const remaining = (w.capacity || 10) - (w.booked || 0);
                  const isSoldOut = remaining <= 0;
                  return (
                    <option key={w.title || w._id} value={w.title} data-price={w.price} disabled={isSoldOut}>
                      {w.title} {isSoldOut ? '(Sold Out)' : `(£${w.price}) — ${remaining} left`}
                    </option>
                  );
                })}
              </select>
            </div>

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
              <label>Mobile number (optional) <span className="label-note">For day-of updates</span></label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <label>Address line 1</label>
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
                <span className="price-label">Total to pay:</span>
                <span className="price-amount">£{price}</span>
              </div>
              <button type="button" className="button button-primary" onClick={goToStep2}>Continue to Payment</button>
            </div>
          </div>

          {/* STEP 2 */}
          <div className={`modal-step ${step === 2 ? 'is-active' : ''}`}>
            <div className="payment-summary-box">
              <div className="psb-row">
                <span className="psb-label">Reserving</span>
                <span className="psb-val">{selectedWorkshop}</span>
              </div>
              <div className="psb-row">
                <span className="psb-label">Total</span>
                <span className="psb-val">£{price}</span>
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
              <button type="button" className="button button-primary" onClick={handlePaymentSubmit}>Pay £{price}</button>
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
            <h3 style={{textAlign: 'center', marginBottom: '16px', fontSize: '1.4rem', color: 'var(--text-color)'}}>Space Reserved</h3>
            <p style={{textAlign: 'center', color: 'var(--mist)', lineHeight: '1.6', marginBottom: '30px'}}>
              Thank you, <strong>{esc(formData.name)}</strong>. Your place for <strong>{esc(selectedWorkshop)}</strong> has been secured. We will email your receipt and studio directions to <strong>{esc(formData.email)}</strong> shortly.
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
