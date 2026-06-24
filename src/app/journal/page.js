import RevealOnScroll from '../../components/RevealOnScroll';
import SubscribeForm from '../../components/SubscribeForm';

const journalArtVariants = ['gold', 'teal', 'rose'];

function JournalGlyph({ variant = 'gold' }) {
  if (variant === 'teal') {
    return (
      <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
        <rect x="30" y="30" width="100" height="100" stroke="rgba(45,139,124,0.3)" strokeWidth="0.5" />
        <polygon points="80,30 130,80 80,130 30,80" stroke="rgba(45,139,124,0.35)" strokeWidth="0.6" fill="rgba(45,139,124,0.03)" />
        <line x1="80" y1="30" x2="80" y2="130" stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" />
        <line x1="30" y1="80" x2="130" y2="80" stroke="rgba(45,139,124,0.2)" strokeWidth="0.5" />
        <circle cx="80" cy="80" r="12" stroke="rgba(45,139,124,0.5)" strokeWidth="0.6" />
        <circle cx="80" cy="80" r="4" fill="rgba(45,139,124,0.6)" />
      </svg>
    );
  }

  if (variant === 'rose') {
    return (
      <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
        <circle cx="80" cy="80" r="72" stroke="rgba(181,96,122,0.35)" strokeWidth="0.6" />
        <circle cx="80" cy="80" r="36" stroke="rgba(181,96,122,0.2)" strokeWidth="0.5" />
        <line x1="80" y1="8" x2="80" y2="152" stroke="rgba(181,96,122,0.15)" strokeWidth="0.5" />
        <line x1="8" y1="80" x2="152" y2="80" stroke="rgba(181,96,122,0.15)" strokeWidth="0.5" />
        <path d="M40,40 L120,120 M120,40 L40,120" stroke="rgba(181,96,122,0.2)" strokeWidth="0.5" />
        <circle cx="80" cy="80" r="10" stroke="rgba(181,96,122,0.5)" strokeWidth="0.6" fill="rgba(181,96,122,0.1)" />
        <circle cx="80" cy="80" r="3" fill="rgba(181,96,122,0.6)" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 160 160" fill="none" width="110" height="110">
      <circle cx="80" cy="80" r="76" stroke="rgba(201,151,42,0.35)" strokeWidth="0.6" />
      <circle cx="80" cy="80" r="50" stroke="rgba(201,151,42,0.25)" strokeWidth="0.5" />
      <circle cx="80" cy="80" r="25" stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" />
      <polygon points="80,14 138,116 22,116" stroke="rgba(201,151,42,0.4)" strokeWidth="0.6" fill="rgba(201,151,42,0.04)" />
      <polygon points="80,146 138,44 22,44" stroke="rgba(181,96,122,0.3)" strokeWidth="0.6" fill="none" />
      <circle cx="80" cy="80" r="5" fill="rgba(201,151,42,0.6)" />
    </svg>
  );
}

function stripHtml(value = '') {
  return value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function excerpt(value = '', limit = 140) {
  const text = stripHtml(value);
  if (text.length <= limit) return text;
  return `${text.slice(0, limit).trim()}...`;
}

export default async function JournalPage() {
  const { store } = await import('../../lib/db');
  const posts = await store.all('journal_posts');

  return (
    <main id="page-journal">
      <div className="page-hero">
        <div className="page-hero-geo" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="196" stroke="rgba(181,96,122,0.28)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="150" stroke="rgba(201,151,42,0.18)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="100" stroke="rgba(181,96,122,0.2)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="50" stroke="rgba(201,151,42,0.3)" strokeWidth="0.5" />
            <line x1="200" y1="4" x2="200" y2="396" stroke="rgba(181,96,122,0.15)" strokeWidth="0.4" />
            <line x1="4" y1="200" x2="396" y2="200" stroke="rgba(181,96,122,0.15)" strokeWidth="0.4" />
            <line x1="56" y1="56" x2="344" y2="344" stroke="rgba(181,96,122,0.12)" strokeWidth="0.4" />
            <line x1="344" y1="56" x2="56" y2="344" stroke="rgba(181,96,122,0.12)" strokeWidth="0.4" />
          </svg>
        </div>
        <RevealOnScroll className="page-hero-content">
          <p className="eyebrow">slow reading &amp; making</p>
          <h1>
            Art &amp; Journal
            <span className="journal-hero-ornament" aria-hidden="true">
              <svg viewBox="0 0 100 60" fill="none">
                <circle cx="50" cy="30" r="24" stroke="rgba(201, 151, 42, 0.18)" strokeWidth="0.5" strokeDasharray="2 2" />
                <circle cx="50" cy="30" r="14" stroke="rgba(201, 151, 42, 0.12)" strokeWidth="0.5" />
                <path d="M50,42 Q40,36 20,38 L20,16 Q40,14 50,22 Q60,14 80,16 L80,38 Q60,36 50,42 Z" stroke="rgba(201, 151, 42, 0.45)" strokeWidth="0.8" fill="rgba(201, 151, 42, 0.02)" />
                <path d="M50,22 L50,42" stroke="rgba(201, 151, 42, 0.45)" strokeWidth="0.8" />
              </svg>
            </span>
          </h1>
          <div className="journal-ticker" aria-hidden="true">
            <div className="journal-ticker-track">
              <span>Ideas explored slowly</span><span className="ptr-svg-wrap">✦</span>
              <span>On AUM &amp; Resonance</span><span className="ptr-svg-wrap">✦</span>
              <span>Sacred geometry</span><span className="ptr-svg-wrap">✦</span>
              <span>Conscious breath</span><span className="ptr-svg-wrap">✦</span>
              <span>Philosophy of craft</span>
            </div>
            <div className="journal-ticker-track">
              <span>Ideas explored slowly</span><span className="ptr-svg-wrap">✦</span>
              <span>On AUM &amp; Resonance</span><span className="ptr-svg-wrap">✦</span>
              <span>Sacred geometry</span><span className="ptr-svg-wrap">✦</span>
              <span>Conscious breath</span><span className="ptr-svg-wrap">✦</span>
              <span>Philosophy of craft</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <section className="journal-section section-pad">
        <RevealOnScroll className="section-heading">
          <h2 className="journal-sub-author">Words &amp; handmade art, by Chelsea Kaur Ubhi</h2>
        </RevealOnScroll>

        <div className="journal-viewport-container">
          <div className="journal-grid">
            {posts.length === 0 ? (
              <p className="empty-state text-center">No posts yet.</p>
            ) : (
              posts.map((post, index) => {
                const variant = journalArtVariants[index % journalArtVariants.length];
                const monthLabel = new Date(post.created_at).toLocaleDateString('en-GB', {
                  month: 'long',
                  year: 'numeric',
                });
                const tag = post.category || post.tag || 'Journal';

                return (
                  <RevealOnScroll key={post.id || index}>
                    <article className="journal-card">
                      <div className={`journal-card-art ${variant}`} aria-hidden="true">
                        <JournalGlyph variant={variant} />
                      </div>
                      <div className="journal-card-body">
                        <p className="journal-card-meta"><span className="tag">{tag}</span> · {monthLabel}</p>
                        <h3 className="journal-card-title">{post.title}</h3>
                        <p className="card-desc">{excerpt(post.excerpt || post.content)}</p>
                        <div className="journal-card-footer">
                          <span className="preview-card-link">Read slowly -&gt;</span>
                        </div>
                      </div>
                    </article>
                  </RevealOnScroll>
                );
              })
            )}
          </div>
        </div>
      </section>

      <section className="subscribe-section section-pad" aria-label="Subscribe to the Journal">
        <RevealOnScroll className="subscribe-card">
          <div className="subscribe-text">
            <p className="eyebrow">Letters from the desk</p>
            <h2>Never miss a new piece</h2>
            <p className="subscribe-copy">A quiet note whenever a new essay or artwork is posted - slow reading, straight to your inbox. No noise, no spam.</p>
          </div>
          <div className="subscribe-action">
            <SubscribeForm />
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
