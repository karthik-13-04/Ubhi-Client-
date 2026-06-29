export default function PageAbout() {
  return (
    <div id="page-about" className="page is-active">
      <section id="about" className="about section-pad">
        <div className="about-geo" aria-hidden="true">
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <ellipse id="ab-petal" cx="250" cy="158" rx="27" ry="92" stroke="rgba(201,151,42,0.16)" strokeWidth="0.6" />
            </defs>
            <circle cx="250" cy="250" r="246" stroke="rgba(201,151,42,0.16)" strokeWidth="0.7" />
            <circle cx="250" cy="250" r="234" stroke="rgba(181,96,122,0.10)" strokeWidth="0.5" />
            <circle cx="250" cy="250" r="120" stroke="rgba(201,151,42,0.10)" strokeWidth="0.5" />
            <use href="#ab-petal" transform="rotate(0 250 250)" />
            <use href="#ab-petal" transform="rotate(30 250 250)" />
            <use href="#ab-petal" transform="rotate(60 250 250)" />
            <use href="#ab-petal" transform="rotate(90 250 250)" />
            <use href="#ab-petal" transform="rotate(120 250 250)" />
            <use href="#ab-petal" transform="rotate(150 250 250)" />
            <use href="#ab-petal" transform="rotate(180 250 250)" />
            <use href="#ab-petal" transform="rotate(210 250 250)" />
            <use href="#ab-petal" transform="rotate(240 250 250)" />
            <use href="#ab-petal" transform="rotate(270 250 250)" />
            <use href="#ab-petal" transform="rotate(300 250 250)" />
            <use href="#ab-petal" transform="rotate(330 250 250)" />
            <g stroke="rgba(201,151,42,0.20)" strokeWidth="0.7">
              <circle cx="250" cy="250" r="58" />
              <circle cx="250" cy="192" r="58" />
              <circle cx="250" cy="308" r="58" />
              <circle cx="300.2" cy="221" r="58" />
              <circle cx="300.2" cy="279" r="58" />
              <circle cx="199.8" cy="221" r="58" />
              <circle cx="199.8" cy="279" r="58" />
            </g>
            <polygon points="250,72 405,318 95,318" stroke="rgba(201,151,42,0.16)" strokeWidth="0.5" />
            <polygon points="250,428 405,182 95,182" stroke="rgba(181,96,122,0.14)" strokeWidth="0.5" />
            <circle cx="250" cy="250" r="14" stroke="rgba(181,96,122,0.32)" strokeWidth="0.8" />
          </svg>
        </div>
        <div className="about-content reveal">
          <div className="about-left">
            <img src="/assets/ubhi-logo-transparent.png" alt="Ubhi calligraphy mark" className="about-logo" />
            <p className="eyebrow">
              about Chelsea Kaur Ubhi
            </p>
            <h2>
              My universe,
              <br />
              my 
              <span className="about-accent">
                story
              </span>
            </h2>
            <div className="about-flourish" aria-hidden="true">
              <svg viewBox="0 0 180 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="6" y1="14" x2="74" y2="14" stroke="rgba(201,151,42,0.55)" strokeWidth="1" />
                <line x1="106" y1="14" x2="174" y2="14" stroke="rgba(201,151,42,0.55)" strokeWidth="1" />
                <path d="M90,3 Q96,9 90,14 Q84,9 90,3Z" fill="rgba(201,151,42,0.55)" />
                <path d="M90,25 Q96,19 90,14 Q84,19 90,25Z" fill="rgba(201,151,42,0.55)" />
                <circle cx="90" cy="14" r="2" fill="rgba(181,96,122,0.85)" />
              </svg>
            </div>
            <div className="about-social" aria-label="Find Chelsea">
              <a className="soc-ig" href="https://instagram.com/ubhi.in" target="_blank" rel="noopener noreferrer" aria-label="Ubhi on Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a className="soc-pin" href="https://in.pinterest.com/chelseaubhi/" target="_blank" rel="noopener noreferrer" aria-label="Ubhi on Pinterest">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-3.6 19.3c-.08-.8-.15-2 .04-2.9l1.15-4.9s-.3-.6-.3-1.4c0-1.3.77-2.3 1.72-2.3.8 0 1.2.6 1.2 1.34 0 .8-.52 2.04-.8 3.18-.22.95.48 1.73 1.42 1.73 1.7 0 3-1.8 3-4.4 0-2.3-1.65-3.9-4-3.9-2.73 0-4.33 2.04-4.33 4.15 0 .82.32 1.7.72 2.18a.3.3 0 0 1 .06.28l-.28 1.13c-.04.18-.15.22-.34.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.97-.53-2.29-1.15l-.62 2.37c-.22.87-.83 1.96-1.24 2.62A10 10 0 1 0 12 2z" />
                </svg>
              </a>
              <a className="soc-mail" href="mailto:hello@ubhi.in" aria-label="Email Ubhi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3.5 7l8.5 6 8.5-6" />
                </svg>
              </a>
            </div>
          </div>
          <div className="about-right">
            <p>
              For years, my world was defined by working across biomedical science, medical advertising, and pharmacy. I spent my days analyzing data and studying how to heal the body from the outside in. Yet, I felt a quiet pull toward a different kind of restoration, one that couldn't be measured in a lab.
            </p>
            <p>
              I found that missing thread when I began weaving together somatic movement, raw craftsmanship, and ancient philosophy. Through meditation, yoga, breathwork, and art, I realized that real healing happens when the mind goes quiet and when we begin to create.
            </p>
            <p>
              Ubhi is the sanctuary where these two halves of my journey meet. It is a space where my scientific understanding of the body and nervous system aligns with the intuitive wisdom of slow art. Because here, I believe that the act of making and creating is itself the medicine.
            </p>
            <p className="about-signature">
              — Chelsea Kaur Ubhi
            </p>
          </div>
          <div className="about-cta">
            <button className="button button-secondary" type="button" data-page-link="workshops" data-goto-booking="">
              Begin your practice
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
