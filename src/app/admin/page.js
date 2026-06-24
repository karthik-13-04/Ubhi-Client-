'use client';
import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('orders');

  useEffect(() => {
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => {
        if (data.user && (data.user.role === 'owner' || data.user.role === 'staff')) {
          setUser(data.user);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading-state text-center" style={{padding: '100px'}}>Loading...</div>;

  if (!user) {
    return (
      <main className="page-admin container text-center" style={{padding: '100px 0'}}>
        <h1>Admin Portal</h1>
        <p>Restricted access. Please log in from the main account page.</p>
      </main>
    );
  }

  const tabs = ['orders', 'bookings', 'workshops', 'shop', 'gallery', 'journal', 'subscribers', 'settings'];

  return (
    <main className="page-admin" style={{display: 'flex', minHeight: '80vh', borderTop: '1px solid var(--border)'}}>
      <aside className="admin-sidebar" style={{width: '250px', borderRight: '1px solid var(--border)', padding: '30px'}}>
        <h2 style={{fontSize: '1.2rem', marginBottom: '20px'}}>Ubhi Admin</h2>
        <nav className="admin-nav" style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          {tabs.map(tab => (
            <button 
              key={tab} 
              className={activeTab === tab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
              style={{
                textAlign: 'left', 
                background: activeTab === tab ? 'var(--gold)' : 'transparent',
                color: activeTab === tab ? 'var(--ink)' : 'inherit',
                border: 'none',
                padding: '10px',
                cursor: 'pointer'
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </aside>
      
      <section className="admin-content" style={{flex: 1, padding: '40px'}}>
        <header className="admin-header" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '30px'}}>
          <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management</h1>
          <div className="admin-user">{user.email}</div>
        </header>
        
        <div className="admin-panel" style={{background: 'var(--parchment)', padding: '40px', borderRadius: '4px'}}>
          <p className="empty-state text-center">
            Select an item to manage or create new content.
            <br /><br />
            <em>(Data grid integration pending)</em>
          </p>
        </div>
      </section>
    </main>
  );
}
