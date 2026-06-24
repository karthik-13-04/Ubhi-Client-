export default function MantraTicker({ text = 'I am the ritual. I am the magic. The mundane is sacred.' }) {
  return (
    <div className="mantra-strip" aria-label="Site mantra">
      <div className="mantra-track">
        <span>{text}</span>
        <span className="ticker-dot">•</span>
        <span>{text}</span>
        <span className="ticker-dot">•</span>
        <span>{text}</span>
        <span className="ticker-dot">•</span>
        <span>{text}</span>
      </div>
      <div className="mantra-track" aria-hidden="true">
        <span>{text}</span>
        <span className="ticker-dot">•</span>
        <span>{text}</span>
        <span className="ticker-dot">•</span>
        <span>{text}</span>
        <span className="ticker-dot">•</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
