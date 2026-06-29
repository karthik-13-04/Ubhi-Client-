const fs = require('fs');

const overviewPath = 'src/components/admin/AdminOverview.jsx';
let overviewContent = fs.readFileSync(overviewPath, 'utf8');

// Replace the static IDs with React state variables using useStore
const overviewReact = `import React from 'react';
import { useStore } from '../../hooks/useStore';

export default function AdminOverview() {
  const { data } = useStore();
  const members = data.members || [];
  const orders = data.orders || [];
  const bookings = data.bookings || [];
  
  // Calculate basic stats
  const activeMembers = members.filter(m => m.status === 'active');
  const mrr = activeMembers.reduce((sum, m) => sum + (m.plan === 'yearly' ? (m.price || 40)/12 : (m.price || 4)), 0);
  const churnedMembers = members.filter(m => m.status === 'cancelled');
  const churnRate = members.length > 0 ? (churnedMembers.length / members.length) * 100 : 0;
  
  return (
    <div className="admin-tab-content is-active" id="admin-tab-overview">
      <div className="admin-section-card ov-insights">
        <div className="admin-card-header-actions">
          <h4 style={{ margin: "0" }}>Business health</h4>
        </div>
        <p style={{ fontSize: "0.88rem", color: "var(--mist)", lineHeight: "1.5", margin: "-2px 0 16px" }}>
          Your key numbers, worked out live from your subscribers, orders and bookings.
        </p>
        <div className="admin-overview-grid ov-metrics">
          <div className="admin-stat-card stat-mrr">
            <span className="admin-stat-label">Monthly recurring revenue</span>
            <span className="admin-stat-number">£{Math.round(mrr)}</span>
            <span className="admin-stat-sub">from {activeMembers.length} subscribers</span>
          </div>
          <div className="admin-stat-card stat-active">
            <span className="admin-stat-label">Active subscribers</span>
            <span className="admin-stat-number">{activeMembers.length}</span>
            <span className="admin-stat-sub">Snail Mail Club</span>
          </div>
          <div className="admin-stat-card stat-churn">
            <span className="admin-stat-label">Churn (cancelled)</span>
            <span className="admin-stat-number">{churnRate.toFixed(1)}%</span>
            <span className="admin-stat-sub">{churnedMembers.length} of {members.length} members</span>
          </div>
          <div className="admin-stat-card stat-revmonth">
            <span className="admin-stat-label">Total Orders</span>
            <span className="admin-stat-number">{orders.length}</span>
            <span className="admin-stat-sub">subs + shop + workshops</span>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(overviewPath, overviewReact);
console.log('Refactored AdminOverview.jsx');
