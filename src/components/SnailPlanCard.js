'use client';
export default function SnailPlanCard({ plan, onSelect }) {
  return (
    <div className={`snail-plan-card ${plan.popular ? 'is-popular' : ''}`}>
      {plan.popular && <div className="plan-badge">Most Popular</div>}
      <h3 className="plan-title">{plan.title}</h3>
      <div className="plan-price">
        <span className="amount">${plan.price}</span>
        <span className="period">/{plan.interval}</span>
      </div>
      <p className="plan-description">{plan.description}</p>
      <ul className="plan-features">
        {plan.features?.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <button className="plan-btn" onClick={() => onSelect && onSelect(plan)}>
        Subscribe
      </button>
    </div>
  );
}
