'use client';
import { useState } from 'react';

export default function SubscribeForm({ className = '' }) {
  const [name, setName] = useState('');
  const [interest, setInterest] = useState('Everything');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, interest })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Subscription failed');
      
      setStatus('success');
      setMessage('Welcome to the inner circle. Check your inbox soon.');
      setEmail('');
      setName('');
      setInterest('Everything');
    } catch (err) {
      setStatus('error');
      setMessage(err.message);
    }
  };

  return (
    <form className={`subscribe-form ${className}`} onSubmit={handleSubmit}>
      <input
        className="subscribe-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        autoComplete="name"
        disabled={status === 'loading' || status === 'success'}
      />
      <input
        className="subscribe-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        disabled={status === 'loading' || status === 'success'}
      />
      <select
        className="subscribe-input subscribe-interest"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        disabled={status === 'loading' || status === 'success'}
        aria-label="What you'd like to hear about"
      >
        <option value="Everything">Everything</option>
        <option value="Workshops">Workshops</option>
        <option value="Shop">Shop pieces</option>
        <option value="Snail Mail">Snail Mail</option>
      </select>
      <button
        className="button button-primary subscribe-btn"
        type="submit"
        disabled={status === 'loading' || status === 'success'}
      >
        {status === 'loading' ? 'Sending...' : 'Keep me posted'}
      </button>
      {message && (
        <p className={`subscribe-msg ${status === 'success' ? 'is-ok' : 'is-error'}`}>{message}</p>
      )}
    </form>
  );
}
