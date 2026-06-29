'use client';

import { useState, useEffect } from 'react';
import { storeAppend, storeRead } from '../hooks/useStore';
import { ubhiOrderRef } from '../lib/utils';

export default function SnailMailModal({ isOpen, payload, onClose }) {
  const [step, setStep] = useState(1);
  const [isGift, setIsGift] = useState(false);
  const [giftTerm, setGiftTerm] = useState('6');
  
  // Pricing from payload or store
  const [plan, setPlan] = useState('12 Months');
  const [price, setPrice] = useState('12.42');
  const [total, setTotal] = useState('149');
  const [term, setTerm] = useState('12');
  const [isPrepay, setIsPrepay] = useState(true);

  // Form state
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', address: '', city: '', postcode: '', country: 'United Kingdom',
    giftName: '', giftEmail: '', giftMessage: '', giftStart: ''
  });

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsGift(false);
      if (payload) {
        setPlan(payload.plan);
        setPrice(payload.price);
        setTotal(payload.total);
        setTerm(payload.term);
        setIsPrepay(payload.isPrepay);
      }
    }
  }, [isOpen, payload]);

  // Handle gift toggle logic
  useEffect(() => {
    if (isGift) {
      const prices = storeRead('snail-plans', {}).gift || {};
      const giftTotal = prices[giftTerm] || (giftTerm === '12' ? '149' : giftTerm === '3' ? '49' : '95');
      const giftPrice = (Number(giftTotal) / Number(giftTerm)).toFixed(2);
      
      setPlan(`${giftTerm}-month gift`);
      setPrice(giftPrice);
      setTotal(giftTotal);
      setTerm(giftTerm);
      setIsPrepay(true);
    } else if (payload) {
      setPlan(payload.plan);
      setPrice(payload.price);
      setTotal(payload.total);
      setTerm(payload.term);
      setIsPrepay(payload.isPrepay);
    }
  }, [isGift, giftTerm, payload]);


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
    if (!formData.name || !formData.email || !formData.address || !formData.city || !formData.postcode) {
      alert("Please fill in all required delivery fields.");
      return;
    }
    setStep(2);
  };

  const handlePaymentSubmit = () => {
    const renewEvery = term === "12" ? "year" : term + " months";
    const billingStr = isPrepay
      ? ("£" + total + " every " + term + " months (£" + price + "/mo, auto-renews)")
      : ("£" + price + " / month");

    const orderData = {
      orderId: ubhiOrderRef(),
      planName: plan,
      price: price,
      plan: plan,
      monthlyEquiv: Number(price),
      termMonths: Number(term),
      isPrepay: isPrepay,
      paidUpfront: isPrepay ? Number(total) : 0,
      billing: billingStr,
      isGift: isGift,
      giftFor: formData.giftName,
      giftEmail: formData.giftEmail,
      giftMessage: formData.giftMessage,
      giftStart: formData.giftStart,
      customerName: formData.name,
      customerEmail: formData.email,
      customerMobile: formData.mobile,
      shippingAddress: {
        street: formData.address,
        city: formData.city,
        postcode: formData.postcode,
        country: formData.country
      },
      subscribedAt: new Date().toISOString()
    };

    storeAppend("snail-mail-orders", orderData);
    
    // Add to members too
    const members = storeRead("snail-members", []);
    members.push({
        name: formData.name,
        email: formData.email,
        contact: formData.mobile,
        plan: plan,
        billing: billingStr,
        address: `${formData.address}, ${formData.city}, ${formData.postcode}, ${formData.country}`,
        dateSubscribed: new Date().toISOString().split("T")[0],
        status: "Active"
    });
    import('../hooks/useStore').then(module => {
        module.storeWrite("snail-members", members);
    });

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
          <h2>Subscribe to Snail Mail</h2>
          <p className="modal-subtitle">Handmade post, delivered to your door.</p>
        </div>

        <div className="modal-progress">
          <div className={`progress-step ${step >= 1 ? 'is-active' : ''}`}>1. Delivery</div>
          <div className="progress-line" />
          <div className={`progress-step ${step >= 2 ? 'is-active' : ''}`}>2. Payment</div>
        </div>

        <div className="modal-body">
          {/* STEP 1 */}
          <div className={`modal-step ${step === 1 ? 'is-active' : ''}`}>
            
            <div className="gift-toggle-wrap">
              <label className="gift-toggle-label">
                <input type="checkbox" checked={isGift} onChange={(e) => setIsGift(e.target.checked)} />
                <span className="gift-toggle-slider"></span>
              </label>
              <div className="gift-toggle-text">
                <strong>This is a gift</strong>
                <p>Send a prepaid subscription to someone else</p>
              </div>
            </div>

            {isGift && (
              <div className="gift-fields-container" style={{display: 'block'}}>
                <div className="form-group">
                  <label>Gift Duration</label>
                  <div className="gift-term-options">
                    <label className={`gift-term-option ${giftTerm === '3' ? 'is-active' : ''}`}>
                      <input type="radio" name="giftTerm" value="3" checked={giftTerm === '3'} onChange={(e) => setGiftTerm(e.target.value)} />
                      <span className="gto-title">3 Months</span>
                    </label>
                    <label className={`gift-term-option ${giftTerm === '6' ? 'is-active' : ''}`}>
                      <input type="radio" name="giftTerm" value="6" checked={giftTerm === '6'} onChange={(e) => setGiftTerm(e.target.value)} />
                      <span className="gto-title">6 Months</span>
                    </label>
                    <label className={`gift-term-option ${giftTerm === '12' ? 'is-active' : ''}`}>
                      <input type="radio" name="giftTerm" value="12" checked={giftTerm === '12'} onChange={(e) => setGiftTerm(e.target.value)} />
                      <span className="gto-title">12 Months</span>
                    </label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Recipient's name</label>
                    <input type="text" name="giftName" value={formData.giftName} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label>Recipient's email</label>
                    <input type="email" name="giftEmail" value={formData.giftEmail} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Gift message (hand-written in the first parcel)</label>
                  <textarea name="giftMessage" rows="2" value={formData.giftMessage} onChange={handleInputChange}></textarea>
                </div>
                <div className="form-group" style={{marginBottom: '30px'}}>
                  <label>Start month</label>
                  <select name="giftStart" value={formData.giftStart} onChange={handleInputChange}>
                    <option value="Next available parcel">Next available parcel</option>
                    <option value="Following month">Following month</option>
                  </select>
                </div>
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label>Your full name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Your email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </div>
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

            <div className="modal-footer">
              <div className="modal-price">
                <span className="price-label">{isPrepay ? 'Total today:' : 'Monthly rate:'}</span>
                <span className="price-amount">{isPrepay ? `£${total}` : `£${price}`}</span>
              </div>
              <button type="button" className="button button-primary" onClick={goToStep2}>Continue to Payment</button>
            </div>
          </div>

          {/* STEP 2 */}
          <div className={`modal-step ${step === 2 ? 'is-active' : ''}`}>
            <div className="payment-summary-box">
              <div className="psb-row">
                <span className="psb-label">Plan</span>
                <span className="psb-val">{isPrepay ? `${plan} · auto-renews` : 'Monthly subscription'}</span>
              </div>
              <div className="psb-row">
                <span className="psb-label">{isPrepay ? 'Total today:' : 'Monthly rate:'}</span>
                <span className="psb-val">{isPrepay ? `£${total} today` : `£${price} / month`}</span>
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

            <div className="modal-footer" style={{justifyContent: 'space-between'}}>
              <button type="button" className="button button-secondary" onClick={() => setStep(1)}>Back</button>
              <button type="button" className="button button-primary" onClick={handlePaymentSubmit}>Pay {isPrepay ? `£${total}` : `£${price}`}</button>
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
              Thank you, <strong>{formData.name}</strong>. Your first Snail Mail package under the <strong>{plan}</strong> is being prepared with quiet care.
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
