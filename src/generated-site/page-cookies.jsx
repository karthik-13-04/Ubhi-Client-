export default function PageCookies() {
  return (
    <div id="page-cookies" className="page legal-page">
      <div className="legal-wrap">
        <p className="eyebrow">
          the fine print
        </p>
        <h1>
          Cookie Policy
        </h1>
        <p className="legal-note">
          ⚠️ Placeholder — update once analytics/tools are chosen at deploy.
        </p>
        <div className="legal-body">
          <h3>
            What cookies we use
          </h3>
          <p>
            <strong>
              Essential
            </strong>
             — to remember your cart, sign-in and preferences (always on). 
            <strong>
              Analytics
            </strong>
             — to understand how the site is used (only with your consent).
          </p>
          <h3>
            Managing your choices
          </h3>
          <p>
            You chose your preferences in the banner when you first visited. 
            <button type="button" className="legal-inline-btn" id="reopen-cookie-banner">
              Change cookie preferences
            </button>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
