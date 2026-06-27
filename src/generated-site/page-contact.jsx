export default function PageContact() {
  return (
    <div id="page-contact" className="page legal-page">
      <div className="legal-wrap">
        <p className="eyebrow">
          say hello
        </p>
        <h1>
          Contact
        </h1>
        <p className="legal-lead">
          A real person reads every message — usually Chelsea. We aim to reply within two working days.
        </p>
        <form id="contact-form" className="legal-form" autoComplete="on">
          <div className="legal-form-row">
            <label>
              Your name
              <input type="text" id="contact-name" required placeholder="Jane Doe" />
            </label>
            <label>
              Email
              <input type="email" id="contact-email" required placeholder="you@example.com" />
            </label>
          </div>
          <label>
            Subject
                
            <select id="contact-subject">
              <option>
                A general question
              </option>
              <option>
                Workshops
              </option>
              <option>
                Shop order
              </option>
              <option>
                Snail Mail subscription
              </option>
              <option>
                Press &amp; collaborations
              </option>
            </select>
          </label>
          <label>
            Message
            <textarea id="contact-message" rows="5" required placeholder="Write as little or as much as you like…"></textarea>
          </label>
          <p id="contact-msg" className="legal-form-msg" style={{ display: "none" }}></p>
          <button type="submit" className="button button-primary">
            Send message
          </button>
        </form>
        <div className="legal-contact-details">
          <p>
            <strong>
              Email
            </strong>
            <br />
            <a href="mailto:hello@ubhi.in">
              hello@ubhi.in
            </a>
          </p>
          <p data-site-row="phone" style={{ display: "none" }}>
            <strong>
              Phone
            </strong>
            <br />
            <span data-site="phone"></span>
          </p>
          <p>
            <strong>
              Studio
            </strong>
            <br />
            <span data-site="address">
              London, United Kingdom
            </span>
          </p>
          <p>
            <strong>
              Find us
            </strong>
            <br />
            <a href="https://instagram.com/ubhi.in" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
             &middot; 
            <a href="https://in.pinterest.com/chelseaubhi/" target="_blank" rel="noopener noreferrer">
              Pinterest
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
