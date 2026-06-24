import RevealOnScroll from '../../components/RevealOnScroll';
import S3Image from '../../components/S3Image';

function planLabel(plan, index) {
  return plan.title || plan.name || plan.term || ['Monthly', '3 Months', '6 Months', '12 Months'][index] || 'Plan';
}

function planPrice(plan) {
  if (plan.total) return `£${plan.total}`;
  if (plan.price) return `£${plan.price}`;
  return '£18';
}

function planPeriod(plan) {
  if (plan.period) return plan.period;
  if (plan.interval) return `/${plan.interval}`;
  return 'per delivery';
}

export default async function SnailMailPage() {
  const { store } = await import('../../lib/db');
  const plansDoc = await store.findOne('app_state', { key: 'snail-plans' });
  const photosDoc = await store.findOne('app_state', { key: 'snail-photos' });
  const reviewsDoc = await store.findOne('app_state', { key: 'snail-reviews' });

  const plans = plansDoc?.value || [];
  const photos = photosDoc?.value || [];
  const reviews = reviewsDoc?.value || [];
  const featuredIndex = plans.findIndex((plan) => plan.popular || plan.featured);
  const activeIndex = featuredIndex >= 0 ? featuredIndex : Math.max(plans.length - 1, 0);
  const activePlan = plans[activeIndex];

  return (
    <main id="page-snail-mail">
      <div className="page-hero">
        <div className="page-hero-geo" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="196" stroke="rgba(45,139,124,0.3)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="140" stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="80" stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="40" stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" />
          </svg>
        </div>
        <RevealOnScroll className="page-hero-content">
          <p className="eyebrow">philosophy, posted to your door</p>
          <h1>Ubhi Snail Mail Club</h1>
          <div className="snail-hero-cta">
            <button type="button" className="snail-hero-subscribe">
              <span className="shs-label">Join the Club <em>· Explore plans below</em></span>
            </button>
            <span className="snail-hero-cta-note">monthly letter + art posted to your door · cancel anytime</span>
          </div>
          <div className="snail-mail-ticker" aria-hidden="true">
            <div className="snail-mail-ticker-track">
              <span>Philosophy by post</span><span className="ptr-svg-wrap">✦</span>
              <span>Delivered monthly</span><span className="ptr-svg-wrap">✦</span>
              <span>Physical letters</span><span className="ptr-svg-wrap">✦</span>
              <span>Hand-finished prints</span><span className="ptr-svg-wrap">✦</span>
              <span>Tactile philosophy</span>
            </div>
            <div className="snail-mail-ticker-track">
              <span>Philosophy by post</span><span className="ptr-svg-wrap">✦</span>
              <span>Delivered monthly</span><span className="ptr-svg-wrap">✦</span>
              <span>Physical letters</span><span className="ptr-svg-wrap">✦</span>
              <span>Hand-finished prints</span><span className="ptr-svg-wrap">✦</span>
              <span>Tactile philosophy</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className="snail-mail-layout">
        <section className="snail-story-section">
          <RevealOnScroll className="snail-story-wrapper">
            <div className="snail-envelope-floating env-color-1 env-pos-1"><div className="env-paper">✦</div><div className="env-body"></div><div className="env-flap"></div><div className="env-seal"></div><span className="snail-float-tooltip">Sacred Lotus</span></div>
            <div className="snail-envelope-floating env-color-2 env-pos-2"><div className="env-paper">☾</div><div className="env-body"></div><div className="env-flap"></div><div className="env-seal"></div><span className="snail-float-tooltip">Prana Breath</span></div>
            <div className="snail-envelope-floating env-color-3 env-pos-3"><div className="env-paper">✉</div><div className="env-body"></div><div className="env-flap"></div><div className="env-seal"></div><span className="snail-float-tooltip">Chelsea&apos;s Note</span></div>
            <div className="snail-envelope-floating env-color-4 env-pos-4"><div className="env-paper">❋</div><div className="env-body"></div><div className="env-flap"></div><div className="env-seal"></div><span className="snail-float-tooltip">Cosmic Light</span></div>
            <div className="snail-letter-mount">
              <div className="snail-paper-sheet snail-letter-story">
                <span className="snail-letter-stamp" aria-hidden="true">
                  <svg viewBox="0 0 46 46" fill="none">
                    <path d="M23 39 C15 33 9 31 5 31 C7 22 14 20 18 23 C15 14 20 7 23 5 C26 7 31 14 28 23 C32 20 39 22 41 31 C37 31 31 33 23 39Z" stroke="#a6741f" strokeWidth="1.2" strokeLinejoin="round" />
                    <path d="M23 39 L23 23" stroke="#a6741f" strokeWidth="1" />
                    <circle cx="23" cy="20" r="2.2" fill="#a14e5e" />
                  </svg>
                </span>
                <span className="snail-letter-wax" aria-hidden="true"><i className="wax-half wax-l"></i><i className="wax-half wax-r"></i></span>
                <div className="snail-letter-header">
                  <h2 className="snail-letter-salutation">Dear Seekers,</h2>
                  <span className="snail-letter-date">June, 2026</span>
                </div>
                <div className="snail-letter-body">
                  <p>There is a quiet kind of magic in things you can hold. A screen flickers and is gone; a letter waits in your hands, and stays.</p>
                  <p>So once a month I sit at this little desk and make you something real - a few slow pages, a print pressed by hand, a small thing to hold when the world moves too fast. Not a box of clever stuff. A pause, folded into an envelope and posted to your door.</p>
                  <p>If you have read this far, I think you feel it too. Come wander a while with me - there is always room here to slow right down.</p>
                </div>
                <div className="snail-letter-signature">
                  With love &amp; a little magic,<br />
                  - Chelsea Kaur Ubhi
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </section>
      </div>

      <section className="snail-anatomy-section section-pad">
        <RevealOnScroll>
          <h2 className="text-center snail-section-title">What the Envelope Holds</h2>
          <div className="snail-anatomy-grid">
            <div className="snail-anatomy-card">
              <div className="snail-anatomy-art">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 22C12 22 12 12 12 2C12 12 16 9 18 12C20 15 17 19 12 22Z" fill="rgba(45,139,124,0.05)" />
                  <path d="M12 22C12 22 12 12 12 2C12 12 8 9 6 12C4 15 7 19 12 22Z" fill="rgba(45,139,124,0.05)" />
                </svg>
              </div>
              <h3>The Art Print</h3>
              <p>A hand-finished print carrying the texture of raw paper, pressed pigment, and the quiet geometry of the studio.</p>
            </div>
            <div className="snail-anatomy-card">
              <div className="snail-anatomy-art">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M4 20L8 16L18 6C19 5 20 5 21 6C22 7 22 8 21 9L11 19L7 20L4 20Z" fill="rgba(45,139,124,0.05)" />
                </svg>
              </div>
              <h3>The Letter</h3>
              <p>Slow thoughts from Chelsea&apos;s desk: philosophy, somatic notes, studio reflections, and practices worth returning to.</p>
            </div>
            <div className="snail-anatomy-card">
              <div className="snail-anatomy-art">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 21C12 21 8 16 8 12C8 8 12 3 12 3C12 3 16 8 16 12C16 16 12 21 12 21Z" fill="rgba(45,139,124,0.05)" />
                  <path d="M12 21C12 21 4 16 4 12C4 8 8 7 12 10" />
                  <path d="M12 21C12 21 20 16 20 12C20 8 16 7 12 10" />
                </svg>
              </div>
              <h3>The Relic</h3>
              <p>A small tactile object - wax, paper, clay, scent, or symbol - to bring you back to presence when the world feels too fast.</p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <div className="snail-mail-layout">
        <section className="snail-plans-section reveal" id="snail-subscribe-anchor">
          <h2 className="text-center snail-section-title">Let&apos;s be pen pals</h2>
          <p className="text-center snail-section-sub">Choose how you&apos;d like your letters to arrive - month to month, or prepaid for a slower season of post.</p>

          <div className="snail-plans-grid">
            {plans.map((plan, index) => (
              <div
                key={plan.id || index}
                className={`snail-plan-card ${index === activeIndex ? 'is-active' : ''} ${index === activeIndex ? 'snail-plan-featured' : ''}`}
              >
                {index === activeIndex ? <span className="snail-featured-ribbon">Best value</span> : null}
                <div className="plan-wax-seal">
                  <div className="wax-seal gold" style={{ position: 'static', transform: 'none', width: '32px', height: '32px' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" />
                    </svg>
                  </div>
                </div>
                <span className="snail-plan-term">{planLabel(plan, index)}</span>
                <div className="snail-plan-price">{planPrice(plan)}</div>
                <span className="snail-plan-period">{planPeriod(plan)}</span>
                {plan.saving ? <span className="snail-plan-saving">{plan.saving}</span> : null}
                <p className="snail-plan-desc">{plan.description || 'A slow post ritual, sent with care.'}</p>
              </div>
            ))}
          </div>

          {activePlan ? (
            <div className="snail-plans-footer">
              <div className="snail-selected-summary">
                Selected: <strong>{planLabel(activePlan, activeIndex)}</strong> · <strong>{planPrice(activePlan)}</strong>
                <p id="snail-selected-desc">{activePlan.description || 'A slow post ritual, sent with care.'}</p>
              </div>
              <button className="button button-primary" type="button">Step into the Club</button>
            </div>
          ) : null}
        </section>
      </div>

      <section className="snail-peek-section section-pad">
        <RevealOnScroll className="snail-peek-letter">
          <div className="snail-peek-paper">
            <span className="snail-peek-tape" aria-hidden="true"></span>
            <span className="snail-peek-stamp" aria-hidden="true">
              <svg viewBox="0 0 46 46" fill="none">
                <path d="M23 39 C15 33 9 31 5 31 C7 22 14 20 18 23 C15 14 20 7 23 5 C26 7 31 14 28 23 C32 20 39 22 41 31 C37 31 31 33 23 39Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                <path d="M23 39 L23 23" stroke="currentColor" strokeWidth="1" />
                <circle cx="23" cy="20" r="2.2" fill="currentColor" />
              </svg>
            </span>
            <span className="snail-peek-postmark" aria-hidden="true">
              <span className="pm-arc">Ubhi Post</span>
              <span className="pm-vol">Vol. 01</span>
              <span className="pm-arc">London</span>
            </span>
            <span className="snail-peek-fold" aria-hidden="true"></span>
            <span className="snail-peek-vol">Inside a recent envelope</span>
            <div className="snail-peek-excerpt">
              <p className="snail-peek-lede">A letter that arrives slowly asks something different of us: to pause, hold, and listen.</p>
              <p className="snail-peek-more">Each volume carries a small world of paper, ink, and thought. Some days it is a print and a philosophy note. Some days it is a relic for the altar, a pressed bloom, or a prompt to return to your breath.</p>
              <span className="snail-peek-sign">Chelsea</span>
            </div>
            <span className="snail-peek-bloom" aria-hidden="true">
              <svg viewBox="0 0 60 60" fill="none">
                <path d="M30 10 C22 16 20 24 30 34 C40 24 38 16 30 10 Z" stroke="currentColor" strokeWidth="1.2" fill="rgba(74,112,96,0.12)" />
                <path d="M30 34 L30 50" stroke="currentColor" strokeWidth="1" />
                <path d="M30 40 C24 38 20 40 17 45" stroke="currentColor" strokeWidth="1" />
                <path d="M30 40 C36 38 40 40 43 45" stroke="currentColor" strokeWidth="1" />
              </svg>
            </span>
            <span className="snail-peek-weight" aria-hidden="true">
              <svg viewBox="0 0 60 60" fill="none">
                <ellipse cx="30" cy="34" rx="18" ry="14" fill="rgba(181,96,122,0.18)" stroke="rgba(181,96,122,0.45)" strokeWidth="1.2" />
                <circle cx="30" cy="28" r="6" fill="rgba(181,96,122,0.28)" stroke="rgba(181,96,122,0.45)" strokeWidth="1" />
              </svg>
            </span>
          </div>
        </RevealOnScroll>
      </section>

      {photos.length > 0 ? (
        <section className="gallery-section" aria-label="Letters we have sent into the world">
          <div className="gallery-container">
            <div className="gallery-track">
              {[...photos, ...photos].map((item, index) => (
                <div key={`${item.id || item.title || 'photo'}-${index}`} className="gallery-item">
                  <S3Image
                    src={item.image_key || item.image || item.src}
                    alt={item.title || 'Snail mail photo'}
                    width={180}
                    height={180}
                    className="gallery-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {reviews.length > 0 ? (
        <section className="snail-testimonials-section section-pad">
          <RevealOnScroll>
            <h2 className="text-center snail-section-title">Notes back from the letterbox</h2>
            <div className="snail-reviews-container">
              <div className="snail-reviews-track">
                {[...reviews, ...reviews].map((review, index) => (
                  <article key={`${review.author || 'review'}-${index}`} className="snail-review-card">
                    <div className="snail-review-left">
                      <p className="snail-review-text">"{review.text || review.quote || review.review}"</p>
                      <p className="snail-review-author">{review.author || 'Ubhi reader'}</p>
                    </div>
                    <div className="snail-review-right">
                      <div className="snail-review-stamp">✦</div>
                      <div className="snail-review-lines"><div></div><div></div><div></div></div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </section>
      ) : null}
    </main>
  );
}
