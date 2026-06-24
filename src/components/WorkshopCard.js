'use client';
import S3Image from './S3Image';

export default function WorkshopCard({ workshop, onBook }) {
  return (
    <article className="workshop-card">
      <div className="card-image-wrap">
        {workshop.image_key ? (
          <S3Image src={workshop.image_key} alt={workshop.title} fill className="card-image" />
        ) : (
          <div className="card-placeholder">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
            </svg>
          </div>
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title">{workshop.title}</h3>
        <p className="card-meta">
          <span className="date">{workshop.date ? new Date(workshop.date).toLocaleDateString() : 'TBD'}</span>
          <span className="price">${workshop.price}</span>
        </p>
        <p className="card-excerpt">{workshop.excerpt || workshop.description}</p>
        <button className="book-btn" onClick={() => onBook && onBook(workshop)}>
          Book Space
        </button>
      </div>
    </article>
  );
}
