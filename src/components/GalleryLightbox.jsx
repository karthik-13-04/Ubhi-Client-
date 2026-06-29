'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Gallery lightbox with prev/next, keyboard nav, touch swipe, and dot indicators.
 * Replaces the lightbox code from script.js lines 1003–1100.
 *
 * Props:
 *   images: string[]       — array of image URLs
 *   caption: string        — caption text
 *   startIndex: number     — which image to show first
 *   isOpen: boolean
 *   onClose: () => void
 */
export default function GalleryLightbox({ images = [], caption = '', startIndex = 0, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const touchStartX = useRef(null);

  // Reset index when images change
  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [images, startIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft' && images.length > 1) {
        setCurrentIndex(i => (i - 1 + images.length) % images.length);
      }
      else if (e.key === 'ArrowRight' && images.length > 1) {
        setCurrentIndex(i => (i + 1) % images.length);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, images.length, onClose]);

  // Body scroll lock
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e) => {
    if (touchStartX.current == null || images.length < 2) {
      touchStartX.current = null;
      return;
    }
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      setCurrentIndex(i => (i + (dx < 0 ? 1 : -1) + images.length) % images.length);
    }
    touchStartX.current = null;
  }, [images.length]);

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  if (!isOpen || !images.length) return null;

  const hasMultiple = images.length > 1;
  const capText = caption + (hasMultiple ? `   ·   ${currentIndex + 1} / ${images.length}` : '');

  return (
    <div
      className="gallery-lightbox is-active"
      aria-hidden="false"
      onClick={handleOverlayClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {hasMultiple && (
        <button
          className="lightbox-prev"
          onClick={(e) => { e.stopPropagation(); setCurrentIndex(i => (i - 1 + images.length) % images.length); }}
          aria-label="Previous image"
        >
          ‹
        </button>
      )}

      <img
        className="lightbox-content"
        src={images[currentIndex]}
        alt={caption || ''}
      />

      {hasMultiple && (
        <button
          className="lightbox-next"
          onClick={(e) => { e.stopPropagation(); setCurrentIndex(i => (i + 1) % images.length); }}
          aria-label="Next image"
        >
          ›
        </button>
      )}

      {capText && <p className="lightbox-cap">{capText}</p>}

      {hasMultiple && (
        <div className="lightbox-dots">
          {images.map((_, k) => (
            <button
              key={k}
              type="button"
              className={`lb-dot ${k === currentIndex ? 'is-active' : ''}`}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(k); }}
              aria-label={`Photo ${k + 1} of ${images.length}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
