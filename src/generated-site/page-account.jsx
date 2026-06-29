export default function PageAccount() {
  return (
    <div id="page-account" className="page is-active">
      <div id="member-gate" className="member-gate-wrapper reveal">
        <div className="member-login-card">
          <span className="member-login-wax" aria-hidden="true">
            UBHI
          </span>
          <h2 className="member-login-title">
            Your Almanac
          </h2>
          <p className="member-login-script">
            a quiet corner, kept for you
          </p>
          <p className="member-login-sub">
            Sign in to manage your Snail Mail, and look back over your orders &amp; workshops.
          </p>
          <form id="member-login-form" autoComplete="off">
            <div className="member-field">
              <label htmlFor="member-email">
                Email
              </label>
              <input type="email" id="member-email" placeholder="you@example.com" required />
            </div>
            <div className="member-field">
              <label htmlFor="member-pass">
                Password
              </label>
              <input type="password" id="member-pass" placeholder="••••••••" required />
            </div>
            <p id="member-login-msg" className="member-login-msg" style={{ display: "none" }}></p>
            <button type="submit" className="button button-primary member-login-btn">
              Sign in
            </button>
          </form>
          <div className="member-login-foot">
            <a href="#" id="member-forgot">
              Forgot password?
            </a>
            <span>
              New here? 
              <a href="#" id="member-create">
                Create an account
              </a>
            </span>
          </div>
          <p className="member-demo-note">
            Demo preview — sign in with 
            <strong>
              abhi@ubhi.in
            </strong>
             &middot; passcode 
            <strong>
              ubhi123
            </strong>
            .
          </p>
        </div>
      </div>
      <div id="member-dashboard" className="member-dashboard-wrapper" style={{ display: "none" }}>
        <header className="member-masthead">
          <div>
            <p className="member-eyebrow">
              Your Almanac
            </p>
            <h2 className="member-greeting">
              Hello, 
              <span id="member-name">
                friend
              </span>
            </h2>
          </div>
          <button type="button" className="button button-secondary" id="member-logout-btn">
            Sign out
          </button>
        </header>
        <div className="member-grid">
          <section className="member-card member-card-wide">
            <div className="member-card-head">
              <h3>
                Your Snail Mail
              </h3>
            </div>
            <div id="member-subscription"></div>
          </section>
          <section className="member-card">
            <div className="member-card-head">
              <h3>
                Your Orders
              </h3>
            </div>
            <div id="member-orders"></div>
          </section>
          <section className="member-card">
            <div className="member-card-head">
              <h3>
                Your Workshops
              </h3>
            </div>
            <div id="member-workshops"></div>
          </section>
        </div>
      </div>
    </div>
  );
}
