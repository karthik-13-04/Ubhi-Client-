'use client';
export default function ShopModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Purchase: {product.title}</h2>
        <p className="price">Total: ${product.price}</p>
        <form className="modal-form" onSubmit={(e) => { e.preventDefault(); alert('Stripe checkout integration pending'); }}>
          <div className="form-group">
            <label>Shipping Name</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Shipping Address</label>
            <textarea required></textarea>
          </div>
          <button type="submit" className="submit-btn">Proceed to Payment</button>
        </form>
      </div>
    </div>
  );
}
