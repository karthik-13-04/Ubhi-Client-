import { loadSiteAssetMap, resolveSiteAsset } from '../../src/features/site/server/site-assets';
import Link from 'next/link';

export const metadata = {
  title: 'Ubhi — Art & Journal',
};

export default async function JournalPage() {
  const assetMap = await loadSiteAssetMap();
  const asset = (src) => resolveSiteAsset(src, assetMap);

  return (
    <div id="page-journal" className="page">
              <div className="page-hero">
                <div className="page-hero-geo" aria-hidden="true">
                  <svg viewBox="0 0 400 400" fill="none"><circle cx={200} cy={200} r={196} stroke="rgba(181,96,122,0.28)" strokeWidth="0.5" /><circle cx={200} cy={200} r={150} stroke="rgba(201,151,42,0.18)" strokeWidth="0.5" /><circle cx={200} cy={200} r={100} stroke="rgba(181,96,122,0.2)" strokeWidth="0.5" /><circle cx={200} cy={200} r={50} stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" /><line x1={200} y1={4} x2={200} y2={396} stroke="rgba(181,96,122,0.15)" strokeWidth="0.4" /><line x1={4} y1={200} x2={396} y2={200} stroke="rgba(181,96,122,0.15)" strokeWidth="0.4" /><line x1={56} y1={56} x2={344} y2={344} stroke="rgba(181,96,122,0.12)" strokeWidth="0.4" /><line x1={344} y1={56} x2={56} y2={344} stroke="rgba(181,96,122,0.12)" strokeWidth="0.4" /></svg>
                </div>
                <div className="page-hero-content">
                  <p className="eyebrow">slow reading &amp; making</p>
                  <h1>Art &amp; Journal<span className="journal-hero-ornament" aria-hidden="true"><svg viewBox="0 0 100 60" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx={50} cy={30} r={24} stroke="rgba(201, 151, 42, 0.18)" strokeWidth="0.5" strokeDasharray="2 2" /><circle cx={50} cy={30} r={14} stroke="rgba(201, 151, 42, 0.12)" strokeWidth="0.5" /><path d="M50,42 Q40,36 20,38 L20,16 Q40,14 50,22 Q60,14 80,16 L80,38 Q60,36 50,42 Z" stroke="rgba(201, 151, 42, 0.45)" strokeWidth="0.8" fill="rgba(201, 151, 42, 0.02)" /><path d="M50,22 L50,42" stroke="rgba(201, 151, 42, 0.45)" strokeWidth="0.8" /><path d="M56,12 L38,36" stroke="rgba(45, 139, 124, 0.45)" strokeWidth="0.8" strokeLinecap="round" /><path d="M38,36 L36,39 L39,37 Z" fill="rgba(45, 139, 124, 0.6)" stroke="rgba(45, 139, 124, 0.45)" strokeWidth="0.5" /><path d="M26,10 L27,12 L29,13 L27,14 L26,16 L25,14 L23,13 L25,12 Z" fill="rgba(201, 151, 42, 0.35)" /><path d="M74,10 L75,12 L77,13 L75,14 L74,16 L73,14 L71,13 L73,12 Z" fill="rgba(201, 151, 42, 0.35)" /><path d="M 46 8 A 6 6 0 0 0 52 14 A 5.2 5.2 0 0 1 46 8" fill="rgba(201, 151, 42, 0.3)" stroke="rgba(201, 151, 42, 0.4)" strokeWidth="0.5" /></svg></span></h1>
                  <div className="journal-ticker" aria-hidden="true">
                    <div className="journal-ticker-track">
                      <span>Ideas explored slowly</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>On AUM &amp; Resonance</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Sacred geometry</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Conscious breath</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Philosophy of craft</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Making things with your hands</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                    </div>
                    <div className="journal-ticker-track">
                      <span>Ideas explored slowly</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>On AUM &amp; Resonance</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Sacred geometry</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Conscious breath</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Philosophy of craft</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                      <span>Making things with your hands</span> <span className="ptr-svg-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="var(--aurora-gold)" strokeWidth="1.2"><path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="rgba(201,151,42,0.1)" /></svg></span>
                    </div>
                  </div>
                </div>
              </div>
              <section className="journal-section section-pad">
                <div className="section-heading reveal">
                  <h2 className="journal-sub-author">Words &amp; handmade art, by Chelsea Kaur Ubhi</h2>
                </div>
                <div className="journal-viewport-container">
                  <div className="journal-grid" id="journal-posts-container">
                    <article className="journal-card reveal" data-journal-id={0}>
                      <div className="journal-card-art gold" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><circle cx={80} cy={80} r={76} stroke="rgba(201,151,42,0.35)" strokeWidth="0.6" /><circle cx={80} cy={80} r={50} stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" /><circle cx={80} cy={80} r={25} stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" /><polygon points="80,14 138,116 22,116" stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" fill="rgba(201,151,42,0.04)" /><polygon points="80,146 138,44 22,44" stroke="rgba(181,96,122,0.3)" strokeWidth="0.6" fill="none" /><circle cx={80} cy={80} r={5} fill="rgba(201,151,42,0.6)" /></svg></div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">Philosophy</span> · June 2026</p>
                        <h3>AUM &amp; the Science of Sound</h3>
                        <p>From the Big Bang's primordial frequency to the vibration of your own vocal cords, AUM is mathematics.</p>
                        <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                      </div>
                    </article>
                    <article className="journal-card reveal" data-journal-id={1}>
                      <div className="journal-card-art gold" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><circle cx={80} cy={80} r={76} stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" /><circle cx={80} cy={22} r={58} stroke="rgba(201,151,42,0.1)" strokeWidth="0.4" /><circle cx={130} cy={51} r={58} stroke="rgba(201,151,42,0.1)" strokeWidth="0.4" /><circle cx={130} cy={109} r={58} stroke="rgba(201,151,42,0.1)" strokeWidth="0.4" /><circle cx={80} cy={138} r={58} stroke="rgba(201,151,42,0.1)" strokeWidth="0.4" /><circle cx={30} cy={109} r={58} stroke="rgba(201,151,42,0.1)" strokeWidth="0.4" /><circle cx={30} cy={51} r={58} stroke="rgba(201,151,42,0.1)" strokeWidth="0.4" /><circle cx={80} cy={80} r={8} stroke="rgba(201,151,42,0.5)" strokeWidth="0.6" /><circle cx={80} cy={80} r={3} fill="rgba(201,151,42,0.6)" /></svg></div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">Geometry</span> · May 2026</p>
                        <h3>Sacred Geometry: Patterns That Think</h3>
                        <p>Why do the same proportions appear in seashells, galaxy spirals, and temple architecture?</p>
                        <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                      </div>
                    </article>
                    <article className="journal-card reveal" data-journal-id={2}>
                      <div className="journal-card-art teal" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><rect x={20} y={20} width={120} height={120} stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" fill="none" /><rect x={40} y={40} width={80} height={80} stroke="rgba(45,139,124,0.28)" strokeWidth="0.5" fill="none" transform="rotate(45 80 80)" /><circle cx={80} cy={80} r={40} stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" /><circle cx={80} cy={80} r={18} stroke="rgba(45,139,124,0.5)" strokeWidth="0.6" /><circle cx={80} cy={80} r={5} fill="rgba(45,139,124,0.6)" /></svg></div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">Craft</span> · May 2026</p>
                        <h3>Why We Print by Hand</h3>
                        <p>There is something that happens between the roller, the ink, and the paper. A conversation with matter.</p>
                        <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                      </div>
                    </article>
                    <article className="journal-card reveal" data-journal-id={3}>
                      <div className="journal-card-art rose" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><path d="M80 16C50 40 16 52 16 80C16 108 50 120 80 144C110 120 144 108 144 80C144 52 110 40 80 16Z" stroke="rgba(181,96,122,0.4)" strokeWidth="0.6" fill="rgba(181,96,122,0.05)" /><path d="M80 32C56 52 32 60 32 80C32 100 56 108 80 128C104 108 128 100 128 80C128 60 104 52 80 32Z" stroke="rgba(181,96,122,0.3)" strokeWidth="0.5" fill="none" /><circle cx={80} cy={80} r={18} stroke="rgba(181,96,122,0.5)" strokeWidth="0.6" /><circle cx={80} cy={80} r={5} fill="rgba(181,96,122,0.6)" /></svg></div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">Breathwork</span> · April 2026</p>
                        <h3>Pranayama &amp; the Vagus Nerve</h3>
                        <p>Modern science has finally caught up. The breath is the only autonomic function we consciously control.</p>
                        <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                      </div>
                    </article>
                    <article className="journal-card reveal" data-journal-id={4}>
                      <div className="journal-card-art gold" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><line x1={80} y1={8} x2={80} y2={152} stroke="rgba(201,151,42,0.35)" strokeWidth="0.5" /><line x1={8} y1={80} x2={152} y2={80} stroke="rgba(201,151,42,0.35)" strokeWidth="0.5" /><line x1={24} y1={24} x2={136} y2={136} stroke="rgba(201,151,42,0.28)" strokeWidth="0.5" /><line x1={136} y1={24} x2={24} y2={136} stroke="rgba(201,151,42,0.28)" strokeWidth="0.5" /><circle cx={80} cy={80} r={72} stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" /><circle cx={80} cy={80} r={44} stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" /><circle cx={80} cy={80} r={18} stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" /><circle cx={80} cy={80} r={5} fill="rgba(201,151,42,0.6)" /></svg></div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">Philosophy</span> · March 2026</p>
                        <h3>The Philosophy of Slow Making</h3>
                        <p>Speed produces output. Slowness produces meaning. When we make things with full attention, we settle.</p>
                        <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                      </div>
                    </article>
                    <article className="journal-card reveal" data-journal-id={5}>
                      <div className="journal-card-art teal" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><ellipse cx={80} cy={105} rx={55} ry={22} stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" fill="none" /><ellipse cx={80} cy={80} rx={40} ry={55} stroke="rgba(45,139,124,0.28)" strokeWidth="0.5" fill="none" /><ellipse cx={80} cy={80} rx={55} ry={40} stroke="rgba(45,139,124,0.28)" strokeWidth="0.5" fill="none" transform="rotate(60 80 80)" /><ellipse cx={80} cy={80} rx={55} ry={40} stroke="rgba(45,139,124,0.28)" strokeWidth="0.5" fill="none" transform="rotate(120 80 80)" /><circle cx={80} cy={80} r={10} stroke="rgba(45,139,124,0.5)" strokeWidth="0.6" /><circle cx={80} cy={80} r={4} fill="rgba(45,139,124,0.6)" /></svg></div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">Yoga</span> · March 2026</p>
                        <h3>What Yoga Actually Means</h3>
                        <p>Yoga is not a posture. It is not fitness. The word means union — a coming together of the fragmented.</p>
                        <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                      </div>
                    </article>
                    <article className="journal-card reveal" data-journal-id={6}>
                      <div className="journal-card-art gold" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><circle cx={80} cy={80} r={72} stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" /><circle cx={80} cy={80} r={40} stroke="rgba(201,151,42,0.15)" strokeWidth="0.5" strokeDasharray="3 3" /><circle cx={80} cy={80} r={10} stroke="rgba(201,151,42,0.5)" strokeWidth="0.6" /><path d="M 76 65 A 15 15 0 0 0 84 79 A 13 13 0 0 1 76 65" fill="rgba(201,151,42,0.3)" stroke="rgba(201,151,42,0.4)" strokeWidth="0.5" /></svg></div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">Philosophy</span> · February 2026</p>
                        <h3>The Geometry of Silence</h3>
                        <p>Silence is not empty; it is the space where structure begins. The boundary between noise, quiet, and voids.</p>
                        <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                      </div>
                    </article>
                    <article className="journal-card reveal" data-journal-id={7}>
                      <div className="journal-card-art rose" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><rect x={25} y={45} width={110} height={70} rx={4} stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" /><path d="M25 45 L80 85 L135 45" stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" /><circle cx={80} cy={85} r={14} fill="rgba(181,96,122,0.2)" stroke="rgba(181,96,122,0.5)" strokeWidth="0.8" /><circle cx={80} cy={85} r={6} fill="rgba(181,96,122,0.6)" /></svg></div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">Craft</span> · January 2026</p>
                        <h3>Rituals of the Wax Seal</h3>
                        <p>Melted wax, a brass stamp, and a heavy envelope. Sealing is a commitment to slow communication.</p>
                        <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                      </div>
                    </article>
                    <article className="journal-card reveal" data-journal-id={8}>
                      <div className="journal-card-art teal" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><path d="M55,30 Q80,25 105,30 L95,65 Q115,100 95,135 Q80,140 65,135 Q45,100 65,65 Z" stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" fill="rgba(45,139,124,0.03)" /><ellipse cx={80} cy={30} rx={25} ry={6} stroke="rgba(45,139,124,0.4)" strokeWidth="0.5" /><circle cx={80} cy={85} r={12} stroke="rgba(45,139,124,0.25)" strokeWidth="0.5" /></svg></div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">Somatic</span> · December 2025</p>
                        <h3>The Alchemy of Clay</h3>
                        <p>Sitting at the potter's wheel is a lesson in posture, gravity, and response. Centering is a dynamic state.</p>
                        <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                      </div>
                    </article>
                    <article className="journal-card reveal" data-journal-id={9}>
                      <div className="journal-card-art gold" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><line x1={30} y1={30} x2={130} y2={30} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={30} y1={50} x2={130} y2={50} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={30} y1={70} x2={130} y2={70} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={30} y1={90} x2={130} y2={90} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={30} y1={110} x2={130} y2={110} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={30} y1={130} x2={130} y2={130} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={30} y1={30} x2={30} y2={130} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={50} y1={30} x2={50} y2={130} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={70} y1={30} x2={70} y2={130} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={90} y1={30} x2={90} y2={130} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={110} y1={30} x2={110} y2={130} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><line x1={130} y1={30} x2={130} y2={130} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" /><path d="M80 68 L82 77 L90 80 L82 83 L80 92 L78 83 L70 80 L78 77 Z" fill="rgba(201,151,42,0.45)" /></svg></div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">Geometry</span> · November 2025</p>
                        <h3>The Weaver's Path</h3>
                        <p>Weaving is the intersection of arithmetic and tactile grace, bringing repetitive shuttle passes into meditation.</p>
                        <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                      </div>
                    </article>
                    <article className="journal-card reveal" data-journal-id={10}>
                      <div className="journal-card-art teal" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><rect x={30} y={30} width={100} height={100} stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" /><circle cx={80} cy={80} r={35} stroke="rgba(45,139,124,0.3)" strokeWidth="0.5" /><line x1={30} y1={80} x2={130} y2={80} stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" /><line x1={80} y1={30} x2={80} y2={130} stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" /><polygon points="80,62 98,90 62,90" stroke="rgba(45,139,124,0.45)" strokeWidth="0.6" fill="rgba(45,139,124,0.05)" /></svg></div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">Craft</span> · October 2025</p>
                        <h3>Wood, Steel, and Ink</h3>
                        <p>Operating a letterpress is a conversation with antique machinery. The weight of physical type pressed in paper fibers.</p>
                        <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                      </div>
                    </article>
                    <article className="journal-card reveal" data-journal-id={11}>
                      <div className="journal-card-art rose" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><circle cx={80} cy={80} r={45} stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" /><circle cx={80} cy={80} r={60} stroke="rgba(181,96,122,0.15)" strokeWidth="0.4" strokeDasharray="2 2" /><path d="M80 10 L80 150 M10 80 L150 80 M30 30 L130 130 M130 30 L30 130" stroke="rgba(181,96,122,0.2)" strokeWidth="0.5" /><circle cx={80} cy={80} r={10} fill="rgba(181,96,122,0.4)" /><path d="M 100 20 A 10 10 0 0 0 110 30 A 8.6 8.6 0 0 1 100 20" fill="rgba(181,96,122,0.3)" stroke="rgba(181,96,122,0.4)" strokeWidth="0.5" /></svg></div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">Somatic</span> · September 2025</p>
                        <h3>The Slow Light of June</h3>
                        <p>Solar photograms take time to absorb the sun. A reflection on chemical exposure, shadows, and patience.</p>
                        <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                      </div>
                    </article>
                    <article className="journal-card reveal" data-journal-id={12}>
                      <div className="journal-card-art gold" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><circle cx={80} cy={80} r={76} stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" /><circle cx={80} cy={80} r={52} stroke="rgba(201,151,42,0.2)" strokeWidth="0.5" strokeDasharray="2 2" /><circle cx={80} cy={80} r={28} stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" /><path d="M80 12 L80 148 M12 80 L148 80" stroke="rgba(201,151,42,0.15)" strokeWidth="0.5" /><polygon points="80,40 115,80 80,120 45,80" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" fill="rgba(201,151,42,0.03)" /><circle cx={80} cy={80} r={4} fill="rgba(201,151,42,0.5)" /></svg></div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">Philosophy</span> · August 2025</p>
                        <h3>The Medicine of Mud</h3>
                        <p>Mud is the raw material of creation. Touching the soil is a biological and somatic reunion.</p>
                        <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                      </div>
                    </article>
                    <article className="journal-card reveal" data-journal-id={13}>
                      <div className="journal-card-art teal" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><ellipse cx={80} cy={80} rx={72} ry={40} stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" /><ellipse cx={80} cy={80} rx={52} ry={28} stroke="rgba(45,139,124,0.25)" strokeWidth="0.5" /><ellipse cx={80} cy={80} rx={32} ry={16} stroke="rgba(45,139,124,0.4)" strokeWidth="0.6" /><circle cx={80} cy={80} r={6} fill="rgba(45,139,124,0.6)" /><line x1={80} y1={20} x2={80} y2={140} stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" /></svg></div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">Sound</span> · July 2025</p>
                        <h3>Acoustic Spaces &amp; Listening</h3>
                        <p>The space we inhabit changes how we speak, but more importantly, how we listen deeply.</p>
                        <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                      </div>
                    </article>
                    <article className="journal-card reveal" data-journal-id={14}>
                      <div className="journal-card-art rose" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><path d="M20,20 C50,80 110,80 140,140" stroke="rgba(181,96,122,0.4)" strokeWidth="0.8" /><path d="M140,20 C110,80 50,80 20,140" stroke="rgba(181,96,122,0.3)" strokeWidth="0.5" /><circle cx={80} cy={74} r={16} stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" /><circle cx={80} cy={74} r={6} fill="rgba(181,96,122,0.6)" /><line x1={80} y1={12} x2={80} y2={148} stroke="rgba(181,96,122,0.15)" strokeWidth="0.5" /></svg></div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">Craft</span> · June 2025</p>
                        <h3>The Shadow of the Needle</h3>
                        <p>Hand-sewing is a practice in small measures, repairing cloth and the split attention of the mind.</p>
                        <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                      </div>
                    </article>
                    <article className="journal-card reveal" data-journal-id={15}>
                      <div className="journal-card-art gold" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><circle cx={80} cy={80} r={72} stroke="rgba(201,151,42,0.35)" strokeWidth="0.6" /><polygon points="80,18 132,108 28,108" stroke="rgba(201,151,42,0.3)" strokeWidth="0.6" /><polygon points="80,142 132,52 28,52" stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" /><circle cx={80} cy={80} r={14} stroke="rgba(201,151,42,0.45)" strokeWidth="0.6" /><circle cx={80} cy={80} r={4} fill="rgba(201,151,42,0.6)" /></svg></div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">Geometry</span> · May 2025</p>
                        <h3>Geometry of the Heart</h3>
                        <p>A circle requires a fixed center spike. Centering ourselves is the prerequisite for a balanced life.</p>
                        <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                      </div>
                    </article>
                    <article className="journal-card reveal" data-journal-id={16}>
                      <div className="journal-card-art teal" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><rect x={30} y={30} width={100} height={100} stroke="rgba(45,139,124,0.3)" strokeWidth="0.5" /><polygon points="80,30 130,80 80,130 30,80" stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" fill="rgba(45,139,124,0.03)" /><line x1={80} y1={30} x2={80} y2={130} stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" /><line x1={30} y1={80} x2={130} y2={80} stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" /><circle cx={80} cy={80} r={12} stroke="rgba(45,139,124,0.5)" strokeWidth="0.6" /><circle cx={80} cy={80} r={4} fill="rgba(45,139,124,0.6)" /></svg></div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">Philosophy</span> · April 2025</p>
                        <h3>Center of the Loom</h3>
                        <p>On a weaving loom, tension is everything. We hold our intentions with a firm but gentle hand.</p>
                        <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                      </div>
                    </article>
                    <article className="journal-card reveal" data-journal-id={17}>
                      <div className="journal-card-art rose" aria-hidden="true"><svg viewBox="0 0 160 160" fill="none" width={110} height={110}><circle cx={80} cy={80} r={72} stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" /><circle cx={80} cy={80} r={36} stroke="rgba(181,96,122,0.2)" strokeWidth="0.5" /><line x1={80} y1={8} x2={80} y2={152} stroke="rgba(181,96,122,0.15)" strokeWidth="0.5" /><line x1={8} y1={80} x2={152} y2={80} stroke="rgba(181,96,122,0.15)" strokeWidth="0.5" /><path d="M40,40 L120,120 M120,40 L40,120" stroke="rgba(181,96,122,0.2)" strokeWidth="0.5" /><circle cx={80} cy={80} r={10} stroke="rgba(181,96,122,0.5)" strokeWidth="0.6" fill="rgba(181,96,122,0.1)" /><circle cx={80} cy={80} r={3} fill="rgba(181,96,122,0.6)" /></svg></div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">Somatic</span> · March 2025</p>
                        <h3>Sun-Stitched Linen</h3>
                        <p>Dyeing with plants and sun-bleaching linen are exercises in slow, organic chemistry.</p>
                        <div className="journal-card-footer"><span className="preview-card-link">Read slowly →</span></div>
                      </div>
                    </article>
                  </div>
                </div>
              </section>
              {/* ───────── Journal email capture (turns readers into subscribers) ───────── */}
              <section className="subscribe-section section-pad" aria-label="Subscribe to the Journal">
                <div className="subscribe-card reveal">
                  <span className="subscribe-deco subscribe-sprig" aria-hidden="true"><svg viewBox="0 0 80 200"><use href="#art-eucalyptus" /></svg></span>
                  <div className="subscribe-text">
                    <p className="eyebrow">Letters from the desk</p>
                    <h2>Never miss a new piece</h2>
                    <p className="subscribe-copy">A quiet note whenever a new essay or artwork is posted — slow reading, straight to your inbox. No noise, no spam.</p>
                  </div>
                  <div className="subscribe-action">
                    <form id="journal-updates-form" className="subscribe-form" noValidate>
                      <input type="email" id="journal-updates-email" className="subscribe-input" placeholder="you@example.com" autoComplete="email" required aria-label="Your email" />
                      <button type="submit" className="button button-primary subscribe-btn">Keep me posted</button>
                    </form>
                    <p className="subscribe-msg" id="journal-updates-msg" role="status" aria-live="polite" />
                  </div>
                </div>
              </section>
            </div>
  );
}
