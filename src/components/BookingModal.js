'use client';
export default function BookingModal({ workshop, onClose }) {
  if (!workshop) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Book: {workshop.title}</h2>
        <p className="price">Total: ${workshop.price}</p>
        <form className="modal-form" onSubmit={(e) => { e.preventDefault(); alert('Stripe checkout integration pending'); }}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" required />
          </div>
          <button type="submit" className="submit-btn">Proceed to Payment</button>
        </form>
      </div>
    </div>
  );
}
