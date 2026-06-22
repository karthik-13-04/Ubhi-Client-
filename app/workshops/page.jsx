import { loadSiteAssetMap, resolveSiteAsset } from '../../src/features/site/server/site-assets';
import Link from 'next/link';

export const metadata = {
  title: 'Ubhi — Workshops',
};

export default async function WorkshopsPage() {
  const assetMap = await loadSiteAssetMap();
  const asset = (src) => resolveSiteAsset(src, assetMap);

  return (
    <div id="page-workshops" className="page">
              <div className="page-hero">
                <div className="page-hero-geo" aria-hidden="true">
                  <svg viewBox="0 0 400 400" fill="none"><circle cx={200} cy={200} r={196} stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" /><circle cx={200} cy={200} r={140} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><circle cx={200} cy={200} r={80} stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" /><polygon points="200,44 352,296 48,296" stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" fill="none" /><polygon points="200,356 48,104 352,104" stroke="rgba(181,96,122,0.25)" strokeWidth="0.5" fill="none" /></svg>
                </div>
                <div className="page-hero-content">
                  <p className="eyebrow">come home to your body</p>
                  <h1>Workshop Universe</h1>
                  <div className="workshops-ticker" aria-hidden="true">
                    <div className="workshops-ticker-track">
                      <span>Intimate gatherings</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Somatic movement</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Conscious breathwork</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Raw craftsmanship</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Sacred geometry</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Quiet presence</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Aligning the nervous system</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Medicine in creation</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Ancient philosophy</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Art &amp; stillness</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                    </div>
                    <div className="workshops-ticker-track">
                      <span>Intimate gatherings</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Somatic movement</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Conscious breathwork</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Raw craftsmanship</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Sacred geometry</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Quiet presence</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Aligning the nervous system</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Medicine in creation</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Ancient philosophy</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Art &amp; stillness</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Workshop cards */}
              <section className="workshops section-pad">
                <div className="workshop-grid" id="workshops-list-container">
                  <article className="workshop-card reveal">
                    <div className="card-image-wrap">
                      <img src={asset("/assets/ubhi-workshop-generated.png")} alt="Block printing and yoga workshop" />
                      <div className="card-image-glow" />
                    </div>
                    <div className="card-body">
                      <p className="eyebrow">Signature · 12 July</p>
                      <h3>Yoga &amp; Hand Block Printing</h3>
                      <p>A grounding yoga practice followed by hand block printing on paper and cloth. Designed for beginners and returning makers.</p>
                      <dl>
                        <div><dt>Time</dt><dd>10:30–13:30</dd></div>
                        <div><dt>Place</dt><dd>Hackney studio</dd></div>
                        <div><dt>Price</dt><dd>£58</dd></div>
                        <div><dt>Spaces</dt><dd>10</dd></div>
                      </dl>
                      <button className="button button-primary" type="button" data-book="Yoga & Hand Block Printing">Book</button>
                    </div>
                  </article>
                  <article className="workshop-card reveal">
                    <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(201,151,42,0.08),rgba(7,6,14,0.9))'}} aria-hidden="true">
                      <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                        <circle cx={100} cy={100} r={80} stroke="rgba(201,151,42,0.4)" strokeWidth="0.8" />
                        <circle cx={100} cy={100} r={50} stroke="rgba(201,151,42,0.25)" strokeWidth="0.6" />
                        <polygon points="100,20 169,140 31,140" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
                        <polygon points="100,180 169,60 31,60" stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                        <circle cx={100} cy={100} r={4} fill="rgba(201,151,42,0.6)" />
                      </svg>
                    </div>
                    <div className="card-body">
                      <p className="eyebrow">Drawing · 26 July</p>
                      <h3>Sacred Geometry Drawing</h3>
                      <p>Compass-and-rule mandala drawing, breath, stillness, and a short philosophical inquiry.</p>
                      <dl>
                        <div><dt>Time</dt><dd>09:30–12:00</dd></div>
                        <div><dt>Place</dt><dd>Hackney studio</dd></div>
                        <div><dt>Price</dt><dd>£44</dd></div>
                        <div><dt>Spaces</dt><dd>8</dd></div>
                      </dl>
                      <button className="button button-secondary" type="button" data-book="Sacred Geometry Drawing">Book</button>
                    </div>
                  </article>
                  <article className="workshop-card reveal">
                    <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(181,96,122,0.08),rgba(7,6,14,0.9))'}} aria-hidden="true">
                      <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                        <circle cx={100} cy={100} r={80} stroke="rgba(181,96,122,0.4)" strokeWidth="0.8" />
                        <ellipse cx={100} cy={100} rx={70} ry={30} stroke="rgba(181,96,122,0.3)" strokeWidth="0.6" />
                        <ellipse cx={100} cy={100} rx={30} ry={70} stroke="rgba(181,96,122,0.3)" strokeWidth="0.6" />
                        <circle cx={100} cy={100} r={8} fill="rgba(181,96,122,0.6)" />
                      </svg>
                    </div>
                    <div className="card-body">
                      <p className="eyebrow">Rest · 9 August</p>
                      <h3>Watercolour &amp; Sound (AUM)</h3>
                      <p>Slow movement, chanting science, and a watercolour study inspired by sound and the body.</p>
                      <dl>
                        <div><dt>Time</dt><dd>14:00–17:00</dd></div>
                        <div><dt>Place</dt><dd>Hackney studio</dd></div>
                        <div><dt>Price</dt><dd>£52</dd></div>
                        <div><dt>Spaces</dt><dd>10</dd></div>
                      </dl>
                      <button className="button button-secondary" type="button" data-book="Watercolour & Sound (AUM)">Book</button>
                    </div>
                  </article>
                  <article className="workshop-card reveal">
                    <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(45,139,124,0.08),rgba(7,6,14,0.9))'}} aria-hidden="true">
                      <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                        <path d="M70,50 L130,50 M80,50 L80,65 C80,110 50,120 50,150 C50,175 70,180 100,180 C130,180 150,175 150,150 C150,120 120,110 120,65 L120,50" stroke="rgba(45,139,124,0.45)" strokeWidth="0.8" />
                        <ellipse cx={100} cy={50} rx={30} ry={8} stroke="rgba(45,139,124,0.5)" strokeWidth="0.7" />
                        <ellipse cx={100} cy={150} rx={42} ry={12} stroke="rgba(45,139,124,0.15)" strokeWidth="0.5" />
                        <circle cx={100} cy={120} r={14} stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" />
                      </svg>
                    </div>
                    <div className="card-body">
                      <p className="eyebrow">Craft · 23 August</p>
                      <h3>Breathwork &amp; Clay Pots</h3>
                      <p>Grounding breath session, hand-shaping raw clay pots, and wood-fire ritual study.</p>
                      <dl>
                        <div><dt>Time</dt><dd>10:30–13:00</dd></div>
                        <div><dt>Place</dt><dd>Hackney studio</dd></div>
                        <div><dt>Price</dt><dd>£48</dd></div>
                        <div><dt>Spaces</dt><dd>8</dd></div>
                      </dl>
                      <button className="button button-secondary" type="button" data-book="Breathwork & Clay Pots">Book</button>
                    </div>
                  </article>
                  <article className="workshop-card reveal">
                    <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(181,96,122,0.08),rgba(7,6,14,0.9))'}} aria-hidden="true">
                      <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                        <circle cx={100} cy={100} r={80} stroke="rgba(181,96,122,0.2)" strokeWidth="0.6" />
                        <path d="M30,100 Q60,40 100,100 T170,100" stroke="rgba(181,96,122,0.45)" strokeWidth="0.8" />
                        <path d="M30,100 Q60,160 100,100 T170,100" stroke="rgba(201,151,42,0.3)" strokeWidth="0.7" />
                        <circle cx={100} cy={100} r={5} fill="rgba(181,96,122,0.6)" />
                      </svg>
                    </div>
                    <div className="card-body">
                      <p className="eyebrow">Altar · 6 Sept</p>
                      <h3>Somatic Silk Dyeing</h3>
                      <p>Wearable art. Focus, natural botanical dyes on raw silk, and somatic movement.</p>
                      <dl>
                        <div><dt>Time</dt><dd>11:00–14:30</dd></div>
                        <div><dt>Place</dt><dd>Hackney studio</dd></div>
                        <div><dt>Price</dt><dd>£64</dd></div>
                        <div><dt>Spaces</dt><dd>8</dd></div>
                      </dl>
                      <button className="button button-secondary" type="button" data-book="Somatic Silk Dyeing">Book</button>
                    </div>
                  </article>
                  <article className="workshop-card reveal">
                    <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(201,151,42,0.06),rgba(7,6,14,0.9))'}} aria-hidden="true">
                      <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                        <path d="M60,90 C80,70 110,80 100,110 C90,130 50,120 60,90 Z" stroke="rgba(201,151,42,0.4)" strokeWidth="0.7" />
                        <path d="M110,120 C130,100 160,110 150,130 C140,150 100,140 110,120 Z" stroke="rgba(201,151,42,0.3)" strokeWidth="0.7" />
                        <path d="M90,60 C110,40 130,55 120,75 C110,95 80,80 90,60 Z" stroke="rgba(181,96,122,0.35)" strokeWidth="0.7" />
                        <path d="M50,105 Q80,100 95,115" stroke="rgba(255,248,230,0.3)" strokeWidth="0.5" />
                        <path d="M105,65 Q115,75 125,60" stroke="rgba(255,248,230,0.3)" strokeWidth="0.5" />
                      </svg>
                    </div>
                    <div className="card-body">
                      <p className="eyebrow">Focus · 20 Sept</p>
                      <h3>Restorative Art &amp; Ink Flow</h3>
                      <p>Slow drawing practices, ink grinding, charcoal wash, and nervous system focus.</p>
                      <dl>
                        <div><dt>Time</dt><dd>14:30–17:00</dd></div>
                        <div><dt>Place</dt><dd>Hackney studio</dd></div>
                        <div><dt>Price</dt><dd>£46</dd></div>
                        <div><dt>Spaces</dt><dd>10</dd></div>
                      </dl>
                      <button className="button button-secondary" type="button" data-book="Restorative Art & Ink Flow">Book</button>
                    </div>
                  </article>
                  <article className="workshop-card reveal">
                    <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(45,139,124,0.08),rgba(7,6,14,0.9))'}} aria-hidden="true">
                      <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                        <circle cx={100} cy={100} r={80} stroke="rgba(45,139,124,0.3)" strokeWidth="0.8" />
                        <path d="M100,30 A70,70 0 0,1 170,100 A70,70 0 0,1 100,170 A70,70 0 0,1 100,30" stroke="rgba(45,139,124,0.4)" strokeWidth="0.6" />
                        <path d="M100,60 A40,40 0 0,1 140,100 A40,40 0 0,1 100,140 A40,40 0 0,1 100,60" stroke="rgba(201,151,42,0.35)" strokeWidth="0.6" />
                        <circle cx={100} cy={100} r={4} fill="rgba(45,139,124,0.6)" />
                      </svg>
                    </div>
                    <div className="card-body">
                      <p className="eyebrow">Clay · 4 Oct</p>
                      <h3>Embodied Clay &amp; Breath</h3>
                      <p>Coiling terracotta pots, slow breathing patterns, and organic clay textures.</p>
                      <dl>
                        <div><dt>Time</dt><dd>10:30–13:00</dd></div>
                        <div><dt>Place</dt><dd>Hackney studio</dd></div>
                        <div><dt>Price</dt><dd>£50</dd></div>
                        <div><dt>Spaces</dt><dd>8</dd></div>
                      </dl>
                      <button className="button button-secondary" type="button" data-book="Embodied Clay & Breath">Book</button>
                    </div>
                  </article>
                  <article className="workshop-card reveal">
                    <div className="product-art" style={{background: 'radial-gradient(circle at center,rgba(201,151,42,0.08),rgba(7,6,14,0.9))'}} aria-hidden="true">
                      <svg viewBox="0 0 200 200" fill="none" width={120} height={120}>
                        <path d="M50,90 A50,50 0 0,0 150,90 Z" fill="rgba(201,151,42,0.08)" stroke="rgba(201,151,42,0.5)" strokeWidth="0.8" />
                        <line x1={40} y1={90} x2={160} y2={90} stroke="rgba(201,151,42,0.4)" strokeWidth="0.8" />
                        <circle cx={100} cy={90} r={3} fill="rgba(201,151,42,0.6)" />
                        <circle cx={100} cy={100} r={60} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" />
                      </svg>
                    </div>
                    <div className="card-body">
                      <p className="eyebrow">Sound · 18 Oct</p>
                      <h3>Sacred Mandala &amp; Sound</h3>
                      <p>Concentric line geometry, meditation harmonics, and sound bath resonance.</p>
                      <dl>
                        <div><dt>Time</dt><dd>14:00–16:30</dd></div>
                        <div><dt>Place</dt><dd>Hackney studio</dd></div>
                        <div><dt>Price</dt><dd>£42</dd></div>
                        <div><dt>Spaces</dt><dd>12</dd></div>
                      </dl>
                      <button className="button button-secondary" type="button" data-book="Sacred Mandala & Sound">Book</button>
                    </div>
                  </article>
                </div>
              </section>
              {/* Booking Modal Dialog */}
              <div id="booking-modal" className="modal-overlay" aria-hidden="true">
                <div className="modal-panel">
                  <button className="modal-close" id="modal-close-btn" type="button" aria-label="Close modal">×</button>
                  <form id="modal-booking-form" noValidate>
                    {/* STEP 1: Details */}
                    <div id="modal-step-details" className="modal-step is-active">
                      <h2 className="modal-title">Reserve my space</h2>
                      <div className="modal-workshop-preview">
                        <span className="eyebrow" id="modal-preview-eyebrow">Signature</span>
                        <h3 id="modal-preview-title">Yoga &amp; Hand Block Printing</h3>
                        <div className="modal-preview-details">
                          <span id="modal-preview-date">Sunday 12 July</span> · 
                          <span id="modal-preview-time">10:30–13:30</span> · 
                          <strong id="modal-preview-price">£58</strong>
                        </div>
                      </div>
                      <div className="modal-form-fields">
                        <label htmlFor="modal-workshop-select">Workshop
                          <select id="modal-workshop-select" name="workshop" required>
                            <option value="Yoga & Hand Block Printing" data-price={58} data-date="Sunday 12 July" data-time="10:30–13:30">Yoga &amp; Hand Block Printing — £58</option>
                            <option value="Sacred Geometry Drawing" data-price={44} data-date="Sunday 26 July" data-time="09:30–12:00">Sacred Geometry Drawing — £44</option>
                            <option value="Watercolour & Sound (AUM)" data-price={52} data-date="Sunday 9 August" data-time="14:00–17:00">Watercolour &amp; Sound (AUM) — £52</option>
                            <option value="Breathwork & Clay Pots" data-price={48} data-date="Sunday 23 August" data-time="10:30–13:00">Breathwork &amp; Clay Pots — £48</option>
                            <option value="Somatic Silk Dyeing" data-price={64} data-date="Sunday 6 September" data-time="11:00–14:30">Somatic Silk Dyeing — £64</option>
                            <option value="Restorative Art & Ink Flow" data-price={46} data-date="Sunday 20 September" data-time="14:30–17:00">Restorative Art &amp; Ink Flow — £46</option>
                            <option value="Embodied Clay & Breath" data-price={50} data-date="Sunday 4 October" data-time="10:30–13:00">Embodied Clay &amp; Breath — £50</option>
                            <option value="Sacred Mandala & Sound" data-price={42} data-date="Sunday 18 October" data-time="14:00–16:30">Sacred Mandala &amp; Sound — £42</option>
                            <option value="Private Ubhi Session" data-price="custom" data-date="By arrangement" data-time="Custom duration">Private Ubhi Session — Quote</option>
                          </select>
                        </label>
                        <div className="form-row">
                          <label htmlFor="modal-name-input">Name
                            <input id="modal-name-input" name="name" type="text" autoComplete="name" placeholder="Your name" required />
                          </label>
                          <label htmlFor="modal-email-input">Email
                            <input id="modal-email-input" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                          </label>
                        </div>
                        <label htmlFor="modal-phone-input">Mobile Number
                          <input id="modal-phone-input" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="e.g. 07123 456789" required />
                        </label>
                        <label htmlFor="modal-note-input">Note for Chelsea
                          <textarea id="modal-note-input" name="note" placeholder="Anything you want her to know?" defaultValue={""} />
                        </label>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="button button-primary" id="modal-to-payment-btn" style={{width: '100%'}}>Proceed to Pay</button>
                      </div>
                    </div>
                    {/* STEP 2: Payment */}
                    <div id="modal-step-payment" className="modal-step">
                      <div className="modal-payment-header">
                        <h2 className="modal-title">Secure Checkout</h2>
                        <div className="secure-badge">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{width: 14, height: 14}}><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                          <span>SSL Encrypted</span>
                        </div>
                      </div>
                      <div className="modal-payment-summary">
                        <span>Amount due:</span>
                        <strong id="modal-payment-amount">£58</strong>
                      </div>
                      <div className="modal-form-fields">
                        <label htmlFor="modal-card-name">Cardholder Name
                          <input id="modal-card-name" name="cardname" type="text" placeholder="Name as printed on card" required />
                        </label>
                        <label htmlFor="modal-card-number">Card Number
                          <input id="modal-card-number" name="cardnumber" type="text" inputMode="numeric" placeholder="4111 2222 3333 4444" pattern="\d{4}\s?\d{4}\s?\d{4}\s?\d{4}" maxLength={19} required />
                        </label>
                        <div className="form-row">
                          <label htmlFor="modal-card-expiry">Expiry Date
                            <input id="modal-card-expiry" name="cardexpiry" type="text" placeholder="MM / YY" pattern="(0[1-9]|1[0-2])\s?\/\s?([0-9]{2})" maxLength={7} required />
                          </label>
                          <label htmlFor="modal-card-cvc">CVC
                            <input id="modal-card-cvc" name="cardcvc" type="text" inputMode="numeric" placeholder={123} pattern="\d{3,4}" maxLength={4} required />
                          </label>
                        </div>
                      </div>
                      <div className="modal-actions">
                        <button type="button" className="button button-secondary" id="modal-back-btn" style={{flex: 1}}>← Back</button>
                        <button type="submit" className="button button-primary" id="modal-pay-btn" style={{flex: 2}}>Pay Now</button>
                      </div>
                    </div>
                    {/* STEP 3: Success */}
                    <div id="modal-step-success" className="modal-step">
                      <div className="modal-success-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth={1}>
                          <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.15)" />
                        </svg>
                      </div>
                      <h2 className="modal-title">Space Reserved</h2>
                      <p id="modal-success-msg" className="modal-success-message">Thank you. Your space has been quietly held.</p>
                      <p className="modal-success-subtext">A confirmation email has been sent. Chelsea will reach out a few days before the gathering with location details and preparation notes.</p>
                      <div className="modal-footer" style={{width: '100%'}}>
                        <button type="button" className="button button-primary" id="modal-success-close-btn" style={{width: '100%'}}>Return to workshops</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
  );
}
