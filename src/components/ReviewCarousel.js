'use client';
import { useState, useEffect } from 'react';

export default function ReviewCarousel({ reviews = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!reviews.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  if (!reviews.length) return null;

  return (
    <div className="review-carousel">
      <div className="review-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {reviews.map((review, idx) => (
          <div key={idx} className="review-slide">
            <div className="review-stars">{"★".repeat(review.rating || 5)}</div>
            <p className="review-text">"{review.text}"</p>
            <p className="review-author">— {review.author}</p>
          </div>
        ))}
      </div>
      <div className="review-dots">
        {reviews.map((_, idx) => (
          <button 
            key={idx} 
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to review ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
