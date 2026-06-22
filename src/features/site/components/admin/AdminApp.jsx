'use client';

import { useEffect, useState } from 'react';
import OverviewTab from './tabs/OverviewTab';
import GalleryTab from './tabs/GalleryTab';
import WorkshopsTab from './tabs/WorkshopsTab';
import ShopTab from './tabs/ShopTab';
import SnailMailTab from './tabs/SnailMailTab';
import CustomersTab from './tabs/CustomersTab';
import JournalTab from './tabs/JournalTab';
import OrdersBookingsTab from './tabs/OrdersBookingsTab';
import EmailUpdatesTab from './tabs/EmailUpdatesTab';
import { FormInput, FormActions } from './FormFields';

const TABS = [
  { id: 'overview', label: 'Overview', component: OverviewTab },
  { id: 'orders', label: 'Orders & Bookings', component: OrdersBookingsTab },
  { id: 'shop', label: 'Shop', component: ShopTab },
  { id: 'workshops', label: 'Workshops', component: WorkshopsTab },
  { id: 'gallery', label: 'Gallery', component: GalleryTab },
  { id: 'journal', label: 'Art & Journal', component: JournalTab },
  { id: 'customers', label: 'Customers', component: CustomersTab },
  { id: 'snailmail', label: 'Snail Mail', component: SnailMailTab },
  { id: 'updates', label: 'Email Updates', component: EmailUpdatesTab },
  { id: 'profile', label: 'Site Profile', component: () => <div id="site-profile-admin-root" /> }, // The Enhancer mounts here automatically
];

export default function AdminApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  const [loginPasscode, setLoginPasscode] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  useEffect(() => {
    const handleHash = () => setIsOpen(window.location.hash === '#admin' || window.location.hash === '#admin-panel');
    window.addEventListener('hashchange', handleHash);
    handleHash();
    
    // Check existing token
    const t = window.localStorage.getItem('ubhi-api-token');
    if (t) setToken(t);
    
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  if (!isOpen) return null;

  async function handleLogin(e) {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError('');
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode: loginPasscode }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      window.localStorage.setItem('ubhi-api-token', data.token);
      setToken(data.token);
    } catch (err) {
      setLoginError(err.message);
    } finally {
      setLoggingIn(false);
    }
  }

  function handleLogout() {
    window.localStorage.removeItem('ubhi-api-token');
    setToken('');
  }

  const ActiveComponent = TABS.find(t => t.id === activeTab)?.component || OverviewTab;

  // We hide the legacy page-admin to prevent duplicate UI or conflicts
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 999999,
      background: '#fdf7ee', display: 'flex', flexDirection: 'column',
      fontFamily: 'var(--font-sans, system-ui, sans-serif)',
    }}>
      <style>{`#page-admin { display: none !important; }`}</style>
      
      {!token ? (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(80,50,10,0.1)', width: '100%', maxWidth: '400px' }}>
            <h2 style={{ margin: '0 0 10px', fontSize: '1.5rem', color: '#3a2a10', textAlign: 'center' }}>The Keeper's Desk</h2>
            <p style={{ margin: '0 0 24px', fontSize: '0.9rem', color: '#7a6040', textAlign: 'center' }}>Enter your passcode to unlock the dashboard.</p>
            <form onSubmit={handleLogin}>
              <FormInput
                label="Passcode"
                type="password"
                value={loginPasscode}
                onChange={e => setLoginPasscode(e.target.value)}
                required
              />
              {loginError && <p style={{ color: '#a02828', fontSize: '0.85rem', marginTop: '10px' }}>{loginError}</p>}
              <div style={{ marginTop: '24px' }}>
                <button type="submit" disabled={loggingIn} style={{
                  width: '100%', padding: '12px', borderRadius: '12px', border: 'none',
                  background: '#a6741f', color: '#fff', fontSize: '1rem', fontWeight: 600, cursor: 'pointer'
                }}>
                  {loggingIn ? 'Unlocking...' : 'Unlock'}
                </button>
              </div>
            </form>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
               <a href="#home" style={{ color: '#a6741f', fontSize: '0.85rem', textDecoration: 'none' }}>← Back to site</a>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Admin Header */}
          <header style={{
            background: '#fff', borderBottom: '1px solid rgba(166,116,31,0.15)',
            padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <strong style={{ fontSize: '1.2rem', color: '#3a2a10' }}>Ubhi Admin</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <a href="#home" style={{ color: '#a6741f', fontSize: '0.88rem', textDecoration: 'none', fontWeight: 600 }}>View Public Site</a>
              <button onClick={handleLogout} style={{
                background: 'transparent', border: 'none', color: '#7a6040', cursor: 'pointer', fontSize: '0.88rem', fontWeight: 600
              }}>Sign Out</button>
            </div>
          </header>
          
          <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
            {/* Sidebar */}
            <aside style={{
              width: '240px', background: 'rgba(255,255,255,0.5)', borderRight: '1px solid rgba(166,116,31,0.1)',
              padding: '24px 16px', overflowY: 'auto'
            }}>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {TABS.map(tab => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        padding: '10px 14px', borderRadius: '10px', border: 'none', textAlign: 'left',
                        background: isActive ? '#a6741f' : 'transparent',
                        color: isActive ? '#fff' : '#5a4420',
                        fontWeight: isActive ? 600 : 500, fontSize: '0.9rem', cursor: 'pointer',
                        transition: 'background 0.2s'
                      }}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </aside>
            
            {/* Main Content Area */}
            <main style={{ flex: 1, padding: '32px 40px', overflowY: 'auto' }}>
              <ActiveComponent />
            </main>
          </div>
        </>
      )}
    </div>
  );
}
