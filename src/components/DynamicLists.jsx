'use client';

import React from 'react';
import useStore from '../hooks/useStore';
import useCart from '../hooks/useCart';
import { formatPrice, readingTime, JOURNAL_CARD_COLORS, PRODUCT_VECTORS } from '../lib/utils';

function useMounted() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

export function WorkshopsList() {
  const mounted = useMounted();
  const [workshops] = useStore('workshops', []);
  const [capacities] = useStore('workshops-capacities', {});

  if (!mounted) return null;
  if (!workshops || workshops.length === 0) return null;

  return (
    <>
      {workshops.map((w, idx) => {
        const cap = capacities[w.title] || { total: w.capacity || 10, booked: 0 };
        const remaining = cap.total - cap.booked;
        const isSoldOut = remaining <= 0;

        return (
          <article className="workshop-card reveal" key={idx}>
            {w.image ? (
              <div className="card-image-wrap">
                <img src={w.image} alt={w.title} loading="lazy" />
                <div className="card-image-glow"></div>
              </div>
            ) : (
              <div className="product-art" style={{ background: 'radial-gradient(circle at center,rgba(201,151,42,0.08),rgba(7,6,14,0.9))' }} aria-hidden="true">
                <svg viewBox="0 0 200 200" fill="none" width="120" height="120">
                  <circle cx="100" cy="100" r="80" stroke="rgba(201,151,42,0.4)" strokeWidth="0.8" />
                  <circle cx="100" cy="100" r="50" stroke="rgba(201,151,42,0.25)" strokeWidth="0.6" />
                  <circle cx="100" cy="100" r="4" fill="rgba(201,151,42,0.6)" />
                </svg>
              </div>
            )}
            
            <div className="card-body">
              <p className="eyebrow">{w.eyebrow}</p>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
              
              <dl>
                <div>
                  <dt>Time</dt>
                  <dd>{w.time}</dd>
                </div>
                <div>
                  <dt>Place</dt>
                  <dd>{w.place}</dd>
                </div>
                <div>
                  <dt>Price</dt>
                  <dd>£{w.price}</dd>
                </div>
                <div>
                  <dt>Spaces</dt>
                  <dd>{remaining > 0 ? remaining : 'Sold out'}</dd>
                </div>
              </dl>
              
              <button
                className={`button ${isSoldOut ? 'button-secondary' : 'button-primary'}`}
                type="button"
                disabled={isSoldOut}
                onClick={() => {
                  if (typeof window !== 'undefined' && window.ubhiOpenModal) {
                    window.ubhiOpenModal('booking', { workshopName: w.title, price: w.price });
                  }
                }}
              >
                {isSoldOut ? 'Sold Out' : 'Book'}
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
}

export function ShopList() {
  const mounted = useMounted();
  const [catalog] = useStore('shop-catalog', []);
  const { addItem } = useCart();
  
  if (!mounted) return null;
  if (!catalog || catalog.length === 0) return null;

  return (
    <>
      {catalog.map((item, idx) => {
        const isSoldOut = item.remainingStock <= 0;
        const artHTML = PRODUCT_VECTORS[item.vector] || PRODUCT_VECTORS.lotus;

        return (
          <article className="product-card reveal" key={idx}>
            <div className="product-art" dangerouslySetInnerHTML={{ __html: artHTML }} />
            
            <div className="card-body">
              <p className="eyebrow">{item.category}</p>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              
              <div className="product-footer">
                <span className="product-price">£{formatPrice(item.price)}</span>
                <button
                  type="button"
                  className="button button-secondary"
                  disabled={isSoldOut}
                  onClick={() => {
                    addItem(item.name, item.price, artHTML);
                    if (typeof window !== 'undefined' && window.ubhiOpenCart) {
                      window.ubhiOpenCart();
                    }
                  }}
                  aria-label={`Add ${item.name} to bag`}
                >
                  {isSoldOut ? 'Sold Out' : 'Bring home'}
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}

export function SnailMailGallery() {
  const mounted = useMounted();
  const [photos] = useStore('snail-photos', []);

  if (!mounted) return null;
  if (!photos || photos.length === 0) return null;

  const rotations = ["snail-rot-left-1", "snail-rot-right-1", "snail-rot-left-2", "snail-rot-right-2", "snail-rot-zero"];

  return (
    <>
      {photos.map((ph, idx) => {
        const rotClass = rotations[idx % rotations.length];
        return (
          <div 
            className={`gallery-item snail-photo-card ${rotClass}`}
            key={idx}
            onClick={() => {
              if (typeof window !== 'undefined' && window.ubhiOpenModal) {
                window.ubhiOpenModal('gallery', {
                  images: photos.map(p => p.src),
                  caption: ph.caption,
                  startIndex: idx
                });
              }
            }}
          >
            <img src={ph.src} alt={ph.caption} loading="lazy" />
            <div className="snail-photo-caption">{ph.caption}</div>
          </div>
        );
      })}
    </>
  );
}

export function JournalList() {
  const mounted = useMounted();
  const [essays] = useStore('journal-posts', []);

  if (!mounted) return null;
  if (!essays || essays.length === 0) return null;

  return (
    <>
      {essays.map((essay, idx) => {
        const colorObj = JOURNAL_CARD_COLORS[idx % JOURNAL_CARD_COLORS.length];
        
        return (
          <article 
            className="journal-card reveal" 
            key={idx}
            style={{ '--j-color': colorObj.val, '--j-bg': colorObj.bg }}
          >
            {essay.art && (
              <div className="journal-card-art" dangerouslySetInnerHTML={{ __html: essay.art }} />
            )}
            <div className="card-body">
              <div className="journal-meta">
                <span className="tag">{essay.tag}</span>
                <span className="meta-sep">·</span>
                <span>{essay.date}</span>
                <span className="meta-sep">·</span>
                <span>{readingTime(essay.body)} min read</span>
              </div>
              
              <h3>{essay.title}</h3>
              
              <div className="journal-excerpt">
                {essay.body.replace(/<[^>]*>?/gm, '').substring(0, 160)}...
              </div>
              
              <button 
                type="button" 
                className="journal-read-btn"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.ubhiOpenModal) {
                    window.ubhiOpenModal('journal', essay);
                  }
                }}
              >
                Read essay <span className="j-arrow">→</span>
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
}

export function ArtPortfolioList() {
  const mounted = useMounted();
  const [artPieces] = useStore('art-pieces', []);

  if (!mounted) return null;
  if (!artPieces || artPieces.length === 0) {
    return <p className="art-portfolio-empty">New work is being prepared. Please check back soon.</p>;
  }

  return (
    <>
      {artPieces.map((piece, idx) => {
        const imgs = Array.isArray(piece.images) ? piece.images.filter(Boolean) : [];
        const cover = imgs[0] || "";
        const title = piece.title || "";
        const multi = imgs.length > 1;

        return (
          <figure 
            className="art-portfolio-tile" 
            key={idx}
            data-piece-idx={idx}
            title={`${title}${multi ? ' — ' + imgs.length + ' photos' : ''}`}
            onClick={() => {
              if (typeof window !== 'undefined' && window.ubhiOpenModal) {
                window.ubhiOpenModal('gallery', {
                  images: imgs,
                  caption: title,
                  startIndex: 0
                });
              }
            }}
          >
            <img src={cover} alt={title} loading="lazy" />
            {multi && (
              <span className="art-tile-count" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="8" y="3" width="13" height="13" rx="2"/>
                  <path d="M16 16v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3"/>
                </svg>
                {imgs.length}
              </span>
            )}
            {title && <figcaption>{title}</figcaption>}
          </figure>
        );
      })}
    </>
  );
}
