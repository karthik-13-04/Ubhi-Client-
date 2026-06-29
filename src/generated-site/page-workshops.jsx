import { WorkshopsList } from '../components/ClientLists';
export default function PageWorkshops() {
  return (
    <div id="page-workshops" className="page is-active">
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
        <div className="page-hero-content">
          <p className="eyebrow">
            come home to your body
          </p>
          <h1>
            Workshop Universe
          </h1>
          <div className="workshops-ticker" aria-hidden="true">
            <div className="workshops-ticker-track">
              <span>
                Intimate gatherings
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Somatic movement
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Conscious breathwork
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Raw craftsmanship
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Sacred geometry
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Quiet presence
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Aligning the nervous system
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Medicine in creation
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Ancient philosophy
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Art &amp; stillness
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
            </div>
            <div className="workshops-ticker-track">
              <span>
                Intimate gatherings
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Somatic movement
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Conscious breathwork
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Raw craftsmanship
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Sacred geometry
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Quiet presence
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Aligning the nervous system
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Medicine in creation
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Ancient philosophy
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
              <span>
                Art &amp; stillness
              </span>
 
              <span className="ptr-svg-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="workshops section-pad">
        <div className="workshop-grid" id="workshops-list-container">
          <WorkshopsList />
        </div>
      </section>
      <div id="booking-modal" className="modal-overlay" aria-hidden="true">
        <div className="modal-panel">
          <button className="modal-close" id="modal-close-btn" type="button" aria-label="Close modal">
            &times;
          </button>
          <form id="modal-booking-form" noValidate>
            <div id="modal-step-details" className="modal-step is-active">
              <h2 className="modal-title">
                Reserve my space
              </h2>
              <div className="modal-workshop-preview">
                <span className="eyebrow" id="modal-preview-eyebrow">
                  Signature
                </span>
                <h3 id="modal-preview-title">
                  Yoga &amp; Hand Block Printing
                </h3>
                <div className="modal-preview-details">
                  <span id="modal-preview-date">
                    Sunday 12 July
                  </span>
                   &middot; 
                    
                  <span id="modal-preview-time">
                    10:30–13:30
                  </span>
                   &middot; 
                    
                  <strong id="modal-preview-price">
                    £58
                  </strong>
                </div>
              </div>
              <div className="modal-form-fields">
                <label htmlFor="modal-workshop-select">
                  Workshop
                    
                  <select id="modal-workshop-select" name="workshop" required>
                    <option value="Yoga & Hand Block Printing" data-price="58" data-date="Sunday 12 July" data-time="10:30–13:30">
                      Yoga &amp; Hand Block Printing &mdash; £58
                    </option>
                    <option value="Sacred Geometry Drawing" data-price="44" data-date="Sunday 26 July" data-time="09:30–12:00">
                      Sacred Geometry Drawing &mdash; £44
                    </option>
                    <option value="Watercolour & Sound (AUM)" data-price="52" data-date="Sunday 9 August" data-time="14:00–17:00">
                      Watercolour &amp; Sound (AUM) &mdash; £52
                    </option>
                    <option value="Breathwork & Clay Pots" data-price="48" data-date="Sunday 23 August" data-time="10:30–13:00">
                      Breathwork &amp; Clay Pots &mdash; £48
                    </option>
                    <option value="Somatic Silk Dyeing" data-price="64" data-date="Sunday 6 September" data-time="11:00–14:30">
                      Somatic Silk Dyeing &mdash; £64
                    </option>
                    <option value="Restorative Art & Ink Flow" data-price="46" data-date="Sunday 20 September" data-time="14:30–17:00">
                      Restorative Art &amp; Ink Flow &mdash; £46
                    </option>
                    <option value="Embodied Clay & Breath" data-price="50" data-date="Sunday 4 October" data-time="10:30–13:00">
                      Embodied Clay &amp; Breath &mdash; £50
                    </option>
                    <option value="Sacred Mandala & Sound" data-price="42" data-date="Sunday 18 October" data-time="14:00–16:30">
                      Sacred Mandala &amp; Sound &mdash; £42
                    </option>
                    <option value="Private Ubhi Session" data-price="custom" data-date="By arrangement" data-time="Custom duration">
                      Private Ubhi Session &mdash; Quote
                    </option>
                  </select>
                </label>
                <div id="modal-qty-field">
                  <label htmlFor="modal-qty-input" style={{ display: "block" }}>
                    How many spaces?
                  </label>
                  <span className="modal-qty-stepper">
                    <button type="button" id="modal-qty-minus" aria-label="One fewer space">
                      &minus;
                    </button>
                    <input id="modal-qty-input" name="tickets" type="number" min="1" value="1" inputMode="numeric" readOnly aria-label="Number of spaces" />
                    <button type="button" id="modal-qty-plus" aria-label="One more space">
                      +
                    </button>
                  </span>
                  <span className="modal-qty-note" id="modal-qty-note"></span>
                </div>
                <div className="form-row">
                  <label htmlFor="modal-name-input">
                    Name
                      
                    <input id="modal-name-input" name="name" type="text" autoComplete="name" placeholder="Your name" required />
                  </label>
                  <label htmlFor="modal-email-input">
                    Email
                      
                    <input id="modal-email-input" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                  </label>
                </div>
                <label htmlFor="modal-phone-input">
                  Mobile Number
                    
                  <input id="modal-phone-input" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="e.g. 07123 456789" required />
                </label>
                <label htmlFor="modal-note-input">
                  Note for Chelsea
                    
                  <textarea id="modal-note-input" name="note" placeholder="Anything you want her to know?"></textarea>
                </label>
              </div>
              <div className="modal-footer">
                <button type="button" className="button button-primary" id="modal-to-payment-btn" style={{ width: "100%" }}>
                  Proceed to Pay
                </button>
              </div>
            </div>
            <div id="modal-step-payment" className="modal-step">
              <div className="modal-payment-header">
                <h2 className="modal-title">
                  Secure Checkout
                </h2>
                <div className="secure-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}>
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>
                    SSL Encrypted
                  </span>
                </div>
              </div>
              <div className="modal-payment-summary">
                <span>
                  Amount due:
                </span>
                <strong id="modal-payment-amount">
                  £58
                </strong>
              </div>
              <div className="modal-form-fields">
                <label htmlFor="modal-card-name">
                  Cardholder Name
                    
                  <input id="modal-card-name" name="cardname" type="text" placeholder="Name as printed on card" required />
                </label>
                <label htmlFor="modal-card-number">
                  Card Number
                    
                    <input id="modal-card-number" name="cardnumber" type="text" inputMode="numeric" placeholder="4111 2222 3333 4444" pattern="\\d{4}\\s?\\d{4}\\s?\\d{4}\\s?\\d{4}" maxLength="19" required />
                </label>
                <div className="form-row">
                  <label htmlFor="modal-card-expiry">
                    Expiry Date
                      
                    <input id="modal-card-expiry" name="cardexpiry" type="text" placeholder="MM / YY" pattern="(0[1-9]|1[0-2])\\s?\\/\\s?([0-9]{2})" maxLength="7" required />
                  </label>
                  <label htmlFor="modal-card-cvc">
                    CVC
                      
                    <input id="modal-card-cvc" name="cardcvc" type="text" inputMode="numeric" placeholder="123" pattern="\\d{3,4}" maxLength="4" required />
                  </label>
                </div>
              </div>
              <div className="modal-actions">
                <button type="button" className="button button-secondary" id="modal-back-btn" style={{ flex: "1" }}>
                  &larr; Back
                </button>
                <button type="submit" className="button button-primary" id="modal-pay-btn" style={{ flex: "2" }}>
                  Pay Now
                </button>
              </div>
            </div>
            <div id="modal-step-success" className="modal-step">
              <div className="modal-success-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.15)" />
                </svg>
              </div>
              <h2 className="modal-title">
                Space Reserved
              </h2>
              <p id="modal-success-msg" className="modal-success-message">
                Thank you. Your space has been quietly held.
              </p>
              <p className="modal-success-subtext">
                A confirmation email has been sent. Chelsea will reach out a few days before the gathering with location details and preparation notes.
              </p>
              <div className="modal-footer" style={{ width: "100%" }}>
                <button type="button" className="button" id="booking-ics-btn" style={{ width: "100%", marginBottom: "10px" }}>
                  📅 Add to calendar
                </button>
                <button type="button" className="button button-primary" id="modal-success-close-btn" style={{ width: "100%" }}>
                  Return to workshops
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
