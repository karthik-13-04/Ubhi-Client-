'use client';

export default function StatusBadge({ status }) {
  const map = {
    // Orders
    'Preparing with care': { bg: 'rgba(201,151,42,0.15)', color: '#8a5f10', label: 'Preparing' },
    'Shipped':             { bg: 'rgba(45,139,124,0.15)', color: '#1d6e62', label: 'Shipped' },
    'Delivered':           { bg: 'rgba(74,112,96,0.18)',  color: '#2a5c40', label: 'Delivered' },
    'Cancelled':           { bg: 'rgba(180,60,60,0.14)',  color: '#a02828', label: 'Cancelled' },
    // Bookings
    'Reserved':            { bg: 'rgba(57,73,106,0.13)',  color: '#2c3f6e', label: 'Reserved' },
    'Confirmed':           { bg: 'rgba(45,139,124,0.15)', color: '#1d6e62', label: 'Confirmed' },
    'Attended':            { bg: 'rgba(74,112,96,0.18)',  color: '#2a5c40', label: 'Attended' },
    // Generic
    'Active':              { bg: 'rgba(45,139,124,0.15)', color: '#1d6e62', label: 'Active' },
    'Inactive':            { bg: 'rgba(120,96,60,0.12)',  color: '#5a4420', label: 'Inactive' },
    'Published':           { bg: 'rgba(74,112,96,0.18)',  color: '#2a5c40', label: 'Published' },
    'Draft':               { bg: 'rgba(120,96,60,0.12)',  color: '#5a4420', label: 'Draft' },
    'Paid':                { bg: 'rgba(74,112,96,0.18)',  color: '#2a5c40', label: 'Paid' },
    'Unpaid':              { bg: 'rgba(201,151,42,0.15)', color: '#8a5f10', label: 'Unpaid' },
  };

  const s = status ? (map[status] || { bg: 'rgba(120,96,60,0.10)', color: '#5a4420', label: status }) : null;
  if (!s) return null;

  return (
    <span style={{
      display: 'inline-block',
      padding: '2px 10px',
      borderRadius: '20px',
      fontSize: '0.78rem',
      fontWeight: 600,
      letterSpacing: '0.02em',
      background: s.bg,
      color: s.color,
      whiteSpace: 'nowrap',
    }}>
      {s.label}
    </span>
  );
}
