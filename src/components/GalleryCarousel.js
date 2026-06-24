'use client';

import { useRef } from 'react';
import S3Image from './S3Image';

export default function GalleryCarousel({ items = [] }) {
  const trackRef = useRef(null);

  if (!items || items.length === 0) return null;

  const displayItems = [...items, ...items];

  return (
    <div className="gallery-container">
      <div className="gallery-track" ref={trackRef}>
        {displayItems.map((item, index) => (
          <div key={`${item.id || item.title || 'gallery'}-${index}`} className="gallery-item">
            <S3Image
              src={item.image_key || item.image || item.src}
              alt={item.title || 'Gallery image'}
              width={180}
              height={180}
              className="gallery-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
