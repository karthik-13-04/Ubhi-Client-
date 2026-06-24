'use client';
import S3Image from './S3Image';

export default function ProductCard({ product, onBuy }) {
  return (
    <article className="product-card">
      <div className="card-image-wrap">
        {product.image_key ? (
          <S3Image src={product.image_key} alt={product.title} fill className="card-image" />
        ) : (
          <div className="card-placeholder">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
            </svg>
          </div>
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-price">${product.price}</p>
        <button className="buy-btn" onClick={() => onBuy && onBuy(product)}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
