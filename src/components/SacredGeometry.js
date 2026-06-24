export default function SacredGeometry({ type, className = '' }) {
  if (type === 'hero-geo') {
    return (
      <svg className={`hero-geo ${className}`} viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <circle cx="400" cy="400" r="380" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
        <circle cx="400" cy="400" r="300" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        <circle cx="400" cy="400" r="200" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
        <circle cx="400" cy="400" r="80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8"/>
        <path d="M400 20 L400 780 M20 400 L780 400" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <path d="M131 131 L669 669 M131 669 L669 131" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      </svg>
    );
  }
  
  if (type === 'breath-rings') {
    return (
      <svg className={`breath-rings ${className}`} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle className="ring r1" cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle className="ring r2" cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle className="ring r3" cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    );
  }
  
  return null;
}
