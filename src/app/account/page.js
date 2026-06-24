'use client';
import { useState, useEffect } from 'react';
import RevealOnScroll from '../../components/RevealOnScroll';

export default function AccountPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => {
        if (data.user) setUser(data.user);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading-state text-center" style={{padding: '100px'}}>Loading...</div>;

  if (!user) {
    return (
      <main className="page-account container text-center" style={{padding: '100px 0', maxWidth: '400px'}}>
        <RevealOnScroll>
          <h1>Your Almanac</h1>
          <p style={{marginBottom: '30px'}}>Sign in to access your bookings, orders, and snail mail subscription.</p>
          <form className="auth-form" onSubmit={(e) => { e.preventDefault(); alert('Login integration pending'); }}>
            <div className="form-group">
              <input type="email" placeholder="Email" required style={{width: '100%', marginBottom: '10px'}} />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required style={{width: '100%', marginBottom: '20px'}} />
            </div>
            <button type="submit" style={{width: '100%'}}>Sign In</button>
          </form>
        </RevealOnScroll>
      </main>
    );
  }

  return (
    <main className="page-account container" style={{padding: '80px 0'}}>
      <RevealOnScroll>
        <header className="account-header flex-between" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '40px'}}>
          <h1>Welcome, {user.email}</h1>
          <button className="logout-btn" onClick={() => { /* Logout logic */ }}>Log Out</button>
        </header>

        <div className="account-sections grid grid-2" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px'}}>
          <section className="account-card" style={{padding: '30px', border: '1px solid var(--border)'}}>
            <h2>Your Bookings</h2>
            <p className="empty-state">No upcoming workshops.</p>
          </section>
          
          <section className="account-card" style={{padding: '30px', border: '1px solid var(--border)'}}>
            <h2>Order History</h2>
            <p className="empty-state">No past orders.</p>
          </section>
        </div>
      </RevealOnScroll>
    </main>
  );
}
