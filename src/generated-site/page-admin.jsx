export default function PageAdmin() {
  return (
    <div id="page-admin" className="page">
      <div id="admin-gate" className="admin-gate-wrapper reveal">
        <div className="admin-login-card">
          <div className="admin-login-header">
            <svg viewBox="0 0 100 100" className="admin-login-yantra">
              <circle cx="50" cy="50" r="45" stroke="var(--aurora-gold)" strokeWidth="0.75" fill="none" />
              <polygon points="50,15 80,70 20,70" stroke="var(--aurora-gold)" strokeWidth="0.5" fill="none" />
              <polygon points="50,85 80,30 20,30" stroke="var(--aurora-gold)" strokeWidth="0.5" fill="none" />
            </svg>
            <h3>
              The Keeper's Desk
            </h3>
            <p>
              A quiet passcode keeps this drawer shut. Slip it in to come inside.
            </p>
          </div>
          <form id="admin-login-form">
            <div className="sanctuary-input-group">
              <label htmlFor="admin-passcode">
                Passcode
              </label>
              <input type="password" id="admin-passcode" required placeholder="••••••••" />
            </div>
            <p id="admin-login-error" className="admin-error-text" style={{ display: "none", color: "var(--aurora-rose)", fontSize: "0.85rem", marginTop: "-16px", marginBottom: "16px" }}></p>
            <button type="submit" className="button button-primary" style={{ width: "100%", textAlign: "center" }}>
              Unlock the Desk
            </button>
          </form>
        </div>
      </div>
      <div id="admin-dashboard" className="admin-dashboard-wrapper" style={{ display: "none" }}>
        <div className="admin-header">
          <div className="admin-header-rail">
            <button type="button" id="admin-nav-toggle" className="admin-nav-toggle" aria-label="Show or hide the menu" aria-controls="admin-tabs-nav" aria-expanded="true" title="Hide / show the menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <a className="admin-header-brand" href="/#home" aria-label="Ubhi home">
              <img src="/assets/ubhi-logo-transparent.png" alt="Ubhi" />
              <span>
                The Keeper's Desk
              </span>
            </a>
            <button type="button" className="button button-secondary" id="admin-logout-btn">
              Lock the Desk
            </button>
          </div>
          <div className="admin-welcome">
            <h3>
              The Keeper's Desk
            </h3>
            <p>
              Where the workshops, shop, members' sheet, journal &amp; archives are kept — tended by hand.
            </p>
          </div>
        </div>
        <div className="admin-tabs-nav" id="admin-tabs-nav" role="navigation" aria-label="Admin sections">
          <button type="button" className="admin-tab-btn is-active" data-admin-tab="overview">
            Overview
          </button>
          <button type="button" className="admin-tab-btn" data-admin-tab="gallery">
            Gallery
          </button>
          <button type="button" className="admin-tab-btn" data-admin-tab="artfolio">
            Art Portfolio
          </button>
          <button type="button" className="admin-tab-btn" data-admin-tab="workshops">
            Workshops
          </button>
          <button type="button" className="admin-tab-btn" data-admin-tab="shop">
            Shop
          </button>
          <button type="button" className="admin-tab-btn" data-admin-tab="snail">
            Snail Mail
          </button>
          <button type="button" className="admin-tab-btn" data-admin-tab="customers">
            Customers
          </button>
          <button type="button" className="admin-tab-btn" data-admin-tab="journal">
            Art &amp; Journal
          </button>
          <button type="button" className="admin-tab-btn" data-admin-tab="orders">
            Orders & Bookings
          </button>
          <button type="button" className="admin-tab-btn" data-admin-tab="updates">
            Email Updates
          </button>
          <button type="button" className="admin-tab-btn" data-admin-tab="profile">
            Site Profile
          </button>
          <button type="button" className="admin-tab-btn" data-admin-tab="settings">
            Settings
          </button>
        </div>
        <div id="admin-nav-scrim" className="admin-nav-scrim" hidden></div>
        <div className="admin-tab-content is-active" id="admin-tab-overview">
          <div className="admin-section-card ov-insights">
            <div className="admin-card-header-actions">
              <h4 style={{ margin: "0" }}>
                Business health
              </h4>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--mist)", lineHeight: "1.5", margin: "-2px 0 16px" }}>
              Your key numbers, worked out live from your subscribers, orders and bookings.
            </p>
            <div className="admin-overview-grid ov-metrics">
              <div className="admin-stat-card stat-mrr">
                <span className="admin-stat-label">
                  Monthly recurring revenue
                </span>
                <span className="admin-stat-number" id="ov-mrr">
                  £0
                </span>
                <span className="admin-stat-sub" id="ov-mrr-sub">
                  from 0 subscribers
                </span>
              </div>
              <div className="admin-stat-card stat-active">
                <span className="admin-stat-label">
                  Active subscribers
                </span>
                <span className="admin-stat-number" id="ov-active">
                  0
                </span>
                <span className="admin-stat-sub" id="ov-active-sub">
                  Snail Mail Club
                </span>
              </div>
              <div className="admin-stat-card stat-churn">
                <span className="admin-stat-label">
                  Churn (cancelled)
                </span>
                <span className="admin-stat-number" id="ov-churn">
                  0%
                </span>
                <span className="admin-stat-sub" id="ov-churn-sub">
                  0 of 0 members
                </span>
              </div>
              <div className="admin-stat-card stat-revmonth">
                <span className="admin-stat-label">
                  Revenue this month
                </span>
                <span className="admin-stat-number" id="ov-revmonth">
                  £0
                </span>
                <span className="admin-stat-sub">
                  subs + shop + workshops
                </span>
              </div>
            </div>
            <div className="ov-insights-row">
              <div className="ov-panel">
                <div className="ov-panel-title">
                  Revenue, last 6 months
                </div>
                <div className="ov-bars" id="ov-trend"></div>
              </div>
              <div className="ov-panel">
                <div className="ov-panel-title">
                  Top sellers
                </div>
                <ul className="ov-top" id="ov-top">
                  <li>
                    <span className="ov-top-n">
                      —
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="admin-section-card">
            <div className="admin-card-header-actions">
              <h4 style={{ margin: "0" }}>
                A view from the desk
              </h4>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--mist)", lineHeight: "1.5", margin: "-2px 0 18px" }}>
              Everything at a glance — figures refresh each time you open this tab.
            </p>
            <div className="admin-overview-grid">
              <div className="admin-stat-card stat-orders">
                <span className="admin-stat-label">
                  Shop Orders
                </span>
                <span className="admin-stat-number" id="ov-orders-count">
                  0
                </span>
                <span className="admin-stat-sub" id="ov-orders-sub">
                  £0 received
                </span>
              </div>
              <div className="admin-stat-card stat-bookings">
                <span className="admin-stat-label">
                  Workshop Bookings
                </span>
                <span className="admin-stat-number" id="ov-bookings-count">
                  0
                </span>
                <span className="admin-stat-sub" id="ov-bookings-sub">
                  £0 reserved
                </span>
              </div>
              <div className="admin-stat-card stat-members">
                <span className="admin-stat-label">
                  Snail Mail Members
                </span>
                <span className="admin-stat-number" id="ov-members-count">
                  0
                </span>
                <span className="admin-stat-sub" id="ov-members-sub">
                  0 active · 0 paused
                </span>
              </div>
              <div className="admin-stat-card stat-subs">
                <span className="admin-stat-label">
                  Email Subscribers
                </span>
                <span className="admin-stat-number" id="ov-subs-count">
                  0
                </span>
                <span className="admin-stat-sub">
                  on the keep-posted list
                </span>
              </div>
              <div className="admin-stat-card stat-shop">
                <span className="admin-stat-label">
                  Shop Pieces
                </span>
                <span className="admin-stat-number" id="ov-shop-count">
                  0
                </span>
                <span className="admin-stat-sub" id="ov-shop-sub">
                  0 low on stock
                </span>
              </div>
              <div className="admin-stat-card stat-workshops">
                <span className="admin-stat-label">
                  Workshops
                </span>
                <span className="admin-stat-number" id="ov-workshops-count">
                  0
                </span>
                <span className="admin-stat-sub">
                  in the catalogue
                </span>
              </div>
              <div className="admin-stat-card stat-journal">
                <span className="admin-stat-label">
                  Art &amp; Journal
                </span>
                <span className="admin-stat-number" id="ov-journal-count">
                  0
                </span>
                <span className="admin-stat-sub">
                  posts published
                </span>
              </div>
              <div className="admin-stat-card stat-gallery">
                <span className="admin-stat-label">
                  Gallery Images
                </span>
                <span className="admin-stat-number" id="ov-gallery-count">
                  0
                </span>
                <span className="admin-stat-sub">
                  in the home carousel
                </span>
              </div>
            </div>
          </div>
          <div className="admin-section-card">
            <h4>
              Needs a gentle eye
            </h4>
            <ul className="admin-attention-list" id="admin-overview-attention">
              <li className="calm">
                <span className="att-dot"></span>
                All calm — nothing needs your attention right now.
              </li>
            </ul>
          </div>
        </div>
        <div className="admin-tab-content" id="admin-tab-gallery">
          <div className="admin-section-card">
            <h4>
              Add Gallery Image (Home Carousel)
            </h4>
            <form id="admin-add-gallery-form" className="admin-grid-form">
              <div className="admin-form-group">
                <label>
                  Image Resource
                </label>
                <div className="image-upload-wrapper">
                  <input type="text" id="admin-gallery-url" placeholder="assets/filename.png or https://url.com/img.jpg" />
                  <span style={{ padding: "0 8px", color: "rgba(255,255,255,0.4)" }}>
                    or
                  </span>
                  <input type="file" id="admin-gallery-file" accept="image/*" />
                </div>
              </div>
              <div className="admin-form-group">
                <label>
                  Alt / Caption Description
                </label>
                <input type="text" id="admin-gallery-alt" placeholder="e.g. Somatic movement practice" required />
              </div>
              <button type="submit" className="button button-primary">
                Publish Image
              </button>
            </form>
          </div>
          <div className="admin-section-card admin-list-card">
            <h4>
              Current Gallery Images
            </h4>
            <input type="text" className="admin-list-search" id="admin-gallery-search" placeholder="Search images by caption…" />
            <div className="admin-gallery-list" id="admin-gallery-items-list"></div>
          </div>
        </div>
        <div className="admin-tab-content" id="admin-tab-artfolio">
          <div className="admin-section-card">
            <h4>
              Add a New Art Piece
            </h4>
            <p className="admin-help-text">
              Each piece is one artwork. Give it a title and a first photo (the 
              <strong>
                cover
              </strong>
               shown in the gallery). After it's added you can attach more photos to it below — visitors will 
              <strong>
                swipe
              </strong>
               through them when they open the piece.
            </p>
            <form id="admin-add-artpiece-form" className="admin-grid-form">
              <div className="admin-form-group">
                <label>
                  Title
                </label>
                <input type="text" id="admin-artpiece-title" placeholder="e.g. Sacred Geometry — Study no. 4" required />
              </div>
              <div className="admin-form-group">
                <label>
                  Cover photo
                </label>
                <div className="image-upload-wrapper">
                  <input type="text" id="admin-artpiece-url" placeholder="assets/filename.png or https://url.com/img.jpg" />
                  <span style={{ padding: "0 8px", color: "rgba(255,255,255,0.4)" }}>
                    or
                  </span>
                  <input type="file" id="admin-artpiece-file" accept="image/*" />
                </div>
              </div>
              <button type="submit" className="button button-primary">
                Add Piece
              </button>
            </form>
          </div>
          <div className="admin-section-card admin-list-card">
            <h4>
              Your Art Pieces
            </h4>
            <div id="admin-artfolio-list"></div>
          </div>
        </div>
        <div className="admin-tab-content" id="admin-tab-workshops">
          <div className="admin-section-card">
            <h4>
              Add New Workshop
            </h4>
            <form id="admin-add-workshop-form" className="admin-grid-form">
              <div className="admin-form-row col-3">
                <div className="admin-form-group">
                  <label>
                    Workshop Title
                  </label>
                  <input type="text" id="admin-workshop-title" placeholder="e.g. Somatic Pottery" required />
                </div>
                <div className="admin-form-group">
                  <label>
                    Category / Eyebrow
                  </label>
                  <input type="text" id="admin-workshop-eyebrow" placeholder="e.g. Clay · 14 October" required />
                </div>
                <div className="admin-form-group">
                  <label>
                    Poster Image (URL or File)
                  </label>
                  <div className="image-upload-wrapper">
                    <input type="text" id="admin-workshop-img-url" placeholder="assets/pots.png" />
                    <input type="file" id="admin-workshop-img-file" accept="image/*" />
                  </div>
                </div>
              </div>
              <div className="admin-form-row col-4">
                <div className="admin-form-group">
                  <label>
                    Time
                  </label>
                  <input type="text" id="admin-workshop-time" placeholder="e.g. 10:30–13:00" required />
                </div>
                <div className="admin-form-group">
                  <label>
                    Place
                  </label>
                  <input type="text" id="admin-workshop-place" placeholder="e.g. Hackney studio" required />
                </div>
                <div className="admin-form-group">
                  <label>
                    Price (£)
                  </label>
                  <input type="number" id="admin-workshop-price" placeholder="58" required />
                </div>
                <div className="admin-form-group">
                  <label>
                    Seat Capacity
                  </label>
                  <input type="number" id="admin-workshop-capacity" placeholder="10" required />
                </div>
              </div>
              <div className="admin-form-group">
                <label>
                  Description
                </label>
                <textarea id="admin-workshop-desc" placeholder="Write description of the practice..." required></textarea>
              </div>
              <button type="submit" className="button button-primary">
                Publish Workshop
              </button>
            </form>
          </div>
          <div className="admin-section-card admin-list-card">
            <h4>
              Active Workshops
            </h4>
            <input type="text" className="admin-list-search" id="admin-workshops-search" placeholder="Search workshops by title, theme or place…" />
            <div className="admin-table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>
                      Workshop
                    </th>
                    <th>
                      Details
                    </th>
                    <th>
                      Price
                    </th>
                    <th>
                      Spaces
                    </th>
                    <th>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody id="admin-workshops-table-body"></tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="admin-tab-content" id="admin-tab-shop">
          <div className="admin-section-card">
            <h4>
              Add Shop Product
            </h4>
            <form id="admin-add-shop-form" className="admin-grid-form">
              <div className="admin-form-row col-3">
                <div className="admin-form-group">
                  <label>
                    Product Name
                  </label>
                  <input type="text" id="admin-shop-name" placeholder="e.g. Indigo Clay Bowl" required />
                </div>
                <div className="admin-form-group">
                  <label>
                    Category / Eyebrow
                  </label>
                  <input type="text" id="admin-shop-eyebrow" placeholder="e.g. Altari object" required />
                </div>
                <div className="admin-form-group">
                  <label>
                    Price (£)
                  </label>
                  <input type="number" id="admin-shop-price" placeholder="42" required />
                </div>
              </div>
              <div className="admin-form-row col-3">
                <div className="admin-form-group">
                  <label>
                    Total Stock
                  </label>
                  <input type="number" id="admin-shop-stock-total" placeholder="50" required />
                </div>
                <div className="admin-form-group">
                  <label>
                    Stock Remaining
                  </label>
                  <input type="number" id="admin-shop-stock-remaining" placeholder="12" required />
                </div>
                <div className="admin-form-group">
                  <label>
                    Product Image (URL, File or Vector Theme)
                  </label>
                  <div className="image-upload-wrapper">
                    <input type="text" id="admin-shop-img-url" placeholder="assets/bowl.png" />
                    <input type="file" id="admin-shop-img-file" accept="image/*" />
                    <select id="admin-shop-vector-theme">
                      <option value="">
                        -- Or Select SVG Theme --
                      </option>
                      <option value="yantra">
                        Yantra Mandala
                      </option>
                      <option value="lotus">
                        Lotus Geometry
                      </option>
                      <option value="concentric">
                        Concentric Rings
                      </option>
                      <option value="lines">
                        Astrological Coordinates
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="admin-form-group">
                <label>
                  Product Description
                </label>
                <textarea id="admin-shop-desc-text" placeholder="Write description of product..." required></textarea>
              </div>
              <button type="submit" className="button button-primary">
                Publish Product
              </button>
            </form>
          </div>
          <div className="admin-section-card admin-list-card">
            <h4>
              Current Shop Catalog
            </h4>
            <input type="text" className="admin-list-search" id="admin-shop-search" placeholder="Search products by name or category…" />
            <div className="admin-table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>
                      Product
                    </th>
                    <th>
                      Category
                    </th>
                    <th>
                      Price
                    </th>
                    <th>
                      Stock (Total / Left)
                    </th>
                    <th>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody id="admin-shop-table-body"></tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="admin-tab-content" id="admin-tab-snail">
          <div className="admin-subtabs" id="admin-snail-subtabs">
            <button type="button" className="admin-subtab is-active" data-subtab="admin-sub-snail-members">
              👥 Members
            </button>
            <button type="button" className="admin-subtab" data-subtab="admin-sub-snail-pricing">
              💷 Pricing
            </button>
            <button type="button" className="admin-subtab" data-subtab="admin-sub-snail-archive">
              📸 Visual Archive
            </button>
            <button type="button" className="admin-subtab" data-subtab="admin-sub-snail-reviews">
              💌 Testimonials
            </button>
          </div>
          <div id="admin-sub-snail-pricing" className="admin-subpanel">
            <div className="admin-section-card">
              <div className="admin-card-header-actions">
                <h4>
                  Subscription Prices 💷
                </h4>
                <button type="button" className="button button-primary" id="admin-snail-prices-save">
                  Save Prices ✓
                </button>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--mist)", margin: "0 0 14px" }}>
                Set the monthly price for each Snail Mail plan. Saving updates the live subscription page instantly.
              </p>
              <div id="admin-snail-prices-list"></div>
              <div id="admin-snail-prices-msg" style={{ marginTop: "10px", color: "var(--aurora-teal)", fontSize: "0.88rem", minHeight: "1.1em" }}></div>
            </div>
          </div>
          <div id="admin-sub-snail-members" className="admin-subpanel is-active">
            <div className="admin-section-card">
              <div className="admin-card-header-actions">
                <h4>
                  Snail Mail Members Sheet
                </h4>
                <div className="admin-header-buttons">
                  <button type="button" className="button button-secondary" id="admin-print-stickers-btn">
                    Print Address Stickers 🖨️
                  </button>
                  <button type="button" className="button button-primary" id="admin-export-csv-btn">
                    Export Member Sheet (CSV) 📊
                  </button>
                </div>
              </div>
              <div className="admin-stats-panel" style={{ display: "flex", gap: "20px", marginBottom: "20px", flexWrap: "wrap" }}>
                <div className="admin-stat-card" style={{ flex: "1", minWidth: "150px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-color)", padding: "12px 16px", borderRadius: "8px" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--mist)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Total Subscribers
                  </span>
                  <h3 id="admin-snail-total-count" style={{ margin: "4px 0 0 0", fontFamily: "var(--font-header)", color: "var(--gold)", fontSize: "1.8rem" }}>
                    0
                  </h3>
                </div>
                <div className="admin-stat-card" style={{ flex: "1", minWidth: "150px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-color)", padding: "12px 16px", borderRadius: "8px" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--mist)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Active Members
                  </span>
                  <h3 id="admin-snail-active-count" style={{ margin: "4px 0 0 0", fontFamily: "var(--font-header)", color: "var(--aurora-teal)", fontSize: "1.8rem" }}>
                    0
                  </h3>
                </div>
                <div className="admin-stat-card" style={{ flex: "1", minWidth: "150px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-color)", padding: "12px 16px", borderRadius: "8px" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--mist)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Inactive Members
                  </span>
                  <h3 id="admin-snail-inactive-count" style={{ margin: "4px 0 0 0", fontFamily: "var(--font-header)", color: "var(--aurora-rose)", fontSize: "1.8rem" }}>
                    0
                  </h3>
                </div>
              </div>
              <div className="admin-toolbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", marginBottom: "16px", flexWrap: "wrap" }}>
                <div style={{ flex: "1", minWidth: "280px", position: "relative" }}>
                  <input type="text" id="admin-snail-members-search" placeholder="Search by name, email, contact number or address..." style={{ width: "100%", padding: "10px 14px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-color)", borderRadius: "4px", color: "var(--gold)", fontSize: "0.9rem" }} />
                  <span id="admin-snail-search-clear" style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", color: "var(--mist)", display: "none", fontSize: "1.1rem", userSelect: "none" }}>
                    &times;
                  </span>
                </div>
                <button type="button" className="button button-primary" id="admin-toggle-add-member-btn" style={{ padding: "9px 18px", fontSize: "0.72rem", whiteSpace: "nowrap", minHeight: "0" }}>
                  ✚ Add an offline subscriber
                </button>
              </div>
              <div id="admin-add-member-panel" style={{ display: "none", background: "rgba(201,151,42,0.07)", border: "1px solid var(--glass-border)", borderLeft: "3px solid var(--aurora-gold)", borderRadius: "8px", padding: "18px", marginBottom: "18px" }}>
                <h5 style={{ margin: "0 0 4px", fontFamily: "'Fraunces', serif", fontStyle: "italic", color: "var(--stardust-full)", fontSize: "1.25rem" }}>
                  ✍️ Sign up a member by hand
                </h5>
                <p style={{ margin: "0 0 16px", fontSize: "0.86rem", color: "var(--mist)", lineHeight: "1.5" }}>
                  For walk-ins, markets &amp; offline sign-ups — add them straight to the members sheet below. They are saved as 
                  <strong>
                    Active
                  </strong>
                  .
                </p>
                <form id="admin-add-member-form" className="admin-grid-form">
                  <div className="admin-form-row col-3">
                    <div className="admin-form-group">
                      <label htmlFor="admin-m-name">
                        Full Name
                      </label>
                      <input type="text" id="admin-m-name" required placeholder="Jane Doe" />
                    </div>
                    <div className="admin-form-group">
                      <label htmlFor="admin-m-email">
                        Email Address
                      </label>
                      <input type="email" id="admin-m-email" required placeholder="jane@example.com" />
                    </div>
                    <div className="admin-form-group">
                      <label htmlFor="admin-m-contact">
                        Contact Number
                      </label>
                      <input type="text" id="admin-m-contact" required placeholder="+44 7700 900011" />
                    </div>
                  </div>
                  <div className="admin-form-row col-3">
                    <div className="admin-form-group">
                      <label htmlFor="admin-m-plan">
                        Plan
                      </label>
                      <select id="admin-m-plan" required>
                        <option value="Monthly">
                          Monthly Subscription
                        </option>
                        <option value="6 Months">
                          6 Months Journey
                        </option>
                        <option value="12 Months">
                          12 Months Journey
                        </option>
                      </select>
                    </div>
                    <div className="admin-form-group">
                      <label htmlFor="admin-m-billing">
                        Billing Rate
                      </label>
                      <input type="text" id="admin-m-billing" required placeholder="e.g. £18 / month, or £168 for 12 months" />
                    </div>
                    <div className="admin-form-group">
                      <label htmlFor="admin-m-date">
                        Date Subscribed
                      </label>
                      <input type="date" id="admin-m-date" required />
                    </div>
                  </div>
                  <div className="admin-form-group">
                    <label htmlFor="admin-m-address">
                      Shipping Address
                    </label>
                    <textarea id="admin-m-address" required placeholder="14 Primrose Gardens, London, NW3 4YT, United Kingdom" rows="3" style={{ fontFamily: "inherit", fontSize: "0.9rem" }}></textarea>
                  </div>
                  <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                    <button type="submit" className="button button-primary">
                      Save Subscriber
                    </button>
                    <button type="button" className="button button-secondary" id="admin-cancel-add-member-btn">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
              <div className="admin-table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th className="sortable" data-sort="name" style={{ cursor: "pointer", userSelect: "none" }}>
                        Member 
                        <span className="sort-icon" id="sort-name-icon">
                          ↕
                        </span>
                      </th>
                      <th className="sortable" data-sort="email" style={{ cursor: "pointer", userSelect: "none" }}>
                        Email 
                        <span className="sort-icon" id="sort-email-icon">
                          ↕
                        </span>
                      </th>
                      <th className="sortable" data-sort="contact" style={{ cursor: "pointer", userSelect: "none" }}>
                        Contact 
                        <span className="sort-icon" id="sort-contact-icon">
                          ↕
                        </span>
                      </th>
                      <th className="sortable" data-sort="plan" style={{ cursor: "pointer", userSelect: "none" }}>
                        Plan 
                        <span className="sort-icon" id="sort-plan-icon">
                          ↕
                        </span>
                      </th>
                      <th>
                        Billing
                      </th>
                      <th style={{ maxWidth: "250px" }}>
                        Shipping Address
                      </th>
                      <th className="sortable" data-sort="dateSubscribed" style={{ cursor: "pointer", userSelect: "none" }}>
                        Date Subscribed 
                        <span className="sort-icon" id="sort-dateSubscribed-icon">
                          ↕
                        </span>
                      </th>
                      <th className="sortable" data-sort="status" style={{ cursor: "pointer", userSelect: "none" }}>
                        Status 
                        <span className="sort-icon" id="sort-status-icon">
                          ↕
                        </span>
                      </th>
                      <th style={{ textAlign: "center" }}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody id="admin-snail-members-table-body"></tbody>
                </table>
              </div>
              <div className="admin-pagination-wrapper" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px", flexWrap: "wrap", gap: "16px", borderTop: "1px solid var(--border-color)", paddingTop: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "var(--mist)" }}>
                  <span>
                    Show
                  </span>
                  <select id="admin-snail-members-page-size" defaultValue="25" style={{ padding: "4px 8px", background: "rgba(0,0,0,0.3)", border: "1px solid var(--border-color)", color: "var(--gold)", borderRadius: "4px", cursor: "pointer" }}>
                    <option value="10">
                      10
                    </option>
                    <option value="25">
                      25
                    </option>
                    <option value="50">
                      50
                    </option>
                    <option value="100">
                      100
                    </option>
                    <option value="200">
                      200
                    </option>
                  </select>
                  <span>
                    entries per page
                  </span>
                </div>
                <div id="admin-snail-pagination-info" style={{ fontSize: "0.85rem", color: "var(--mist)" }}>
                  
                    Showing 1 to 25 of 0 entries
                  
                </div>
                <div className="admin-pagination-buttons" id="admin-snail-pagination-controls" style={{ display: "flex", gap: "4px", alignItems: "center" }}></div>
              </div>
            </div>
          </div>
          <div id="admin-sub-snail-archive" className="admin-subpanel">
            <div className="admin-section-card">
              <h4>
                Visual Archive Photos (Moons Archive Slider)
              </h4>
              <form id="admin-add-snail-photo-form" className="admin-grid-form">
                <div className="admin-form-row col-2">
                  <div className="admin-form-group">
                    <label>
                      Snapshot Image (URL or File)
                    </label>
                    <div className="image-upload-wrapper">
                      <input type="text" id="admin-snail-photo-url" placeholder="assets/archive-vol.png" />
                      <input type="file" id="admin-snail-photo-file" accept="image/*" />
                    </div>
                  </div>
                  <div className="admin-form-group">
                    <label>
                      Caption Text
                    </label>
                    <input type="text" id="admin-snail-photo-caption" placeholder="e.g. January — Vol. 01: AUM ॐ" required />
                  </div>
                </div>
                <button type="submit" className="button button-primary">
                  Add Archive Snapshot
                </button>
              </form>
              <div className="admin-slider-list" id="admin-snail-photos-list"></div>
            </div>
          </div>
          <div id="admin-sub-snail-reviews" className="admin-subpanel">
            <div className="admin-section-card">
              <h4>
                Love & Reviews (Postcards Testimonials Slider)
              </h4>
              <form id="admin-add-snail-review-form" className="admin-grid-form">
                <div className="admin-form-row col-2">
                  <div className="admin-form-group">
                    <label>
                      Member Name / Author
                    </label>
                    <input type="text" id="admin-snail-review-author" placeholder="e.g. Eleanor K. 🌿" required />
                  </div>
                  <div className="admin-form-group">
                    <label>
                      Stamp Icon (Emoji)
                    </label>
                    <input type="text" id="admin-snail-review-stamp" placeholder="e.g. 🪷" required />
                  </div>
                </div>
                <div className="admin-form-group">
                  <label>
                    Review Quote
                  </label>
                  <textarea id="admin-snail-review-text" placeholder="Write member quote here..." required></textarea>
                </div>
                <button type="submit" className="button button-primary">
                  Add Postcard Review
                </button>
              </form>
              <div className="admin-slider-list" id="admin-snail-reviews-list"></div>
            </div>
          </div>
        </div>
        <div className="admin-tab-content" id="admin-tab-journal">
          <div className="admin-section-card">
            <h4>
              Add an Art or Journal Entry
            </h4>
            <p className="admin-form-hint" style={{ fontSize: "0.86rem", color: "var(--mist)", lineHeight: "1.55", margin: "-4px 0 16px" }}>
              Two kinds of post: a 
              <strong>
                written entry
              </strong>
               (a motif up top, your words below), or an 
              <strong>
                art&nbsp;+&nbsp;words
              </strong>
               post — pick 
              <em>
                “Upload my artwork”
              </em>
               for the header and 
              <em>
                “Write the entry”
              </em>
               for the words, and your handmade piece appears up top with your writing beneath it.
            </p>
            <form id="admin-add-journal-form" className="admin-grid-form">
              <div className="admin-form-row col-3">
                <div className="admin-form-group">
                  <label>
                    Journal Title
                  </label>
                  <input type="text" id="admin-journal-title" placeholder="e.g. The Geometry of Silk" required />
                </div>
                <div className="admin-form-group">
                  <label>
                    Tag / Discipline
                  </label>
                  <select id="admin-journal-tag" required>
                    <option value="Philosophy">
                      Philosophy
                    </option>
                    <option value="Geometry">
                      Geometry
                    </option>
                    <option value="Craft">
                      Craft
                    </option>
                    <option value="Somatic">
                      Somatic
                    </option>
                    <option value="Yoga">
                      Yoga
                    </option>
                    <option value="Breathwork">
                      Breathwork
                    </option>
                  </select>
                </div>
                <div className="admin-form-group">
                  <label>
                    Entry Date
                  </label>
                  <input type="text" id="admin-journal-date" placeholder="e.g. June 2026" required />
                </div>
              </div>
              <div className="admin-form-group">
                <label>
                  Header — a motif, or a photo of your art
                </label>
                <div className="admin-radio-group">
                  <label>
                    <input type="radio" name="journal-visual-type" value="vector" defaultChecked />
                     A hand-drawn motif
                  </label>
                  <label>
                    <input type="radio" name="journal-visual-type" value="image" />
                     Upload my artwork (a photo)
                  </label>
                </div>
                <div className="image-upload-wrapper mt-8" id="journal-image-uploader-wrapper" style={{ display: "none" }}>
                  <input type="text" id="admin-journal-img-url" placeholder="assets/custom-journal.png" />
                  <input type="file" id="admin-journal-img-file" accept="image/*" />
                </div>
              </div>
              <div className="admin-form-group">
                <label>
                  The words
                </label>
                <div className="admin-radio-group">
                  <label>
                    <input type="radio" name="journal-content-type" value="text" defaultChecked />
                     Write the entry
                  </label>
                  <label>
                    <input type="radio" name="journal-content-type" value="image" />
                     Upload a scan of a written page instead
                  </label>
                </div>
              </div>
              <div className="admin-form-group" id="journal-text-content-wrapper">
                <label>
                  Poetic Narrative / Essay Content
                </label>
                <textarea id="admin-journal-content" style={{ minHeight: "240px" }} placeholder="Write the full journal essay text..."></textarea>
              </div>
              <div className="admin-form-group" id="journal-image-content-wrapper" style={{ display: "none" }}>
                <label>
                  Upload Journal Entry Image Content (Base64 file or URL)
                </label>
                <div className="image-upload-wrapper">
                  <input type="text" id="admin-journal-content-img-url" placeholder="assets/handwritten-page.png" />
                  <input type="file" id="admin-journal-content-img-file" accept="image/*" />
                </div>
              </div>
              <button type="submit" className="button button-primary">
                Publish Entry
              </button>
            </form>
          </div>
          <div className="admin-section-card admin-list-card">
            <h4>
              Current Journal Posts
            </h4>
            <input type="text" className="admin-list-search" id="admin-journal-search" placeholder="Search posts by title or tag…" />
            <div className="admin-table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>
                      Journal Entry
                    </th>
                    <th>
                      Tag
                    </th>
                    <th>
                      Date
                    </th>
                    <th>
                      Type
                    </th>
                    <th>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody id="admin-journal-table-body"></tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="admin-tab-content" id="admin-tab-orders">
          <div className="admin-subtabs" id="admin-orders-subtabs">
            <button type="button" className="admin-subtab is-active" data-subtab="orders">
              📦 Shop Orders 
              <span className="admin-subtab-n" id="subtab-orders-count">
                0
              </span>
            </button>
            <button type="button" className="admin-subtab" data-subtab="bookings">
              🎟️ Workshop Bookings 
              <span className="admin-subtab-n" id="subtab-bookings-count">
                0
              </span>
            </button>
          </div>
          <div id="admin-sub-orders" className="admin-subpanel is-active">
            <div className="admin-section-card">
              <div className="admin-card-header-actions">
                <h4>
                  Shop Purchase Orders Logs
                </h4>
                <div className="admin-header-buttons">
                  <button type="button" className="button button-primary" id="admin-export-orders-csv-btn">
                    Export Orders (CSV) 📊
                  </button>
                  <button type="button" className="button button-secondary" id="admin-clear-orders-btn" style={{ background: "var(--aurora-rose)", borderColor: "var(--aurora-rose)", color: "var(--dark-cosmos)" }}>
                    Clear All Orders ⚠️
                  </button>
                </div>
              </div>
              <div style={{ marginBottom: "16px", position: "relative" }}>
                <input type="text" id="admin-orders-search" placeholder="Search orders by customer name, email, street address, or product..." style={{ width: "100%", padding: "10px 14px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-color)", borderRadius: "4px", color: "var(--gold)", fontSize: "0.9rem" }} />
              </div>
              <div id="admin-orders-controls" className="admin-list-controls"></div>
              <div id="admin-orders-bulkbar" className="admin-bulk-bar" hidden></div>
              <div className="admin-table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th style={{ width: "36px", textAlign: "center" }}>
                        <input type="checkbox" id="orders-select-all" aria-label="Select all orders on this page" />
                      </th>
                      <th className="admin-th-sort" data-osort="date">
                        Date
                      </th>
                      <th className="admin-th-sort" data-osort="name">
                        Customer
                      </th>
                      <th>
                        Email
                      </th>
                      <th>
                        Mobile
                      </th>
                      <th>
                        Product(s)
                      </th>
                      <th className="admin-th-sort" data-osort="total">
                        Total
                      </th>
                      <th style={{ maxWidth: "200px" }}>
                        Address
                      </th>
                      <th>
                        Status
                      </th>
                      <th style={{ textAlign: "center" }}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody id="admin-shop-orders-table-body"></tbody>
                </table>
              </div>
              <div id="admin-orders-pagination" className="admin-pager"></div>
            </div>
          </div>
          <div id="admin-sub-bookings" className="admin-subpanel">
            <div className="admin-section-card">
              <div className="admin-card-header-actions">
                <h4>
                  Workshop Booking Reservations Logs
                </h4>
                <div className="admin-header-buttons">
                  <button type="button" className="button button-primary" id="admin-export-bookings-csv-btn">
                    Export Reservations (CSV) 📊
                  </button>
                  <button type="button" className="button button-secondary" id="admin-clear-bookings-btn" style={{ background: "var(--aurora-rose)", borderColor: "var(--aurora-rose)", color: "var(--dark-cosmos)" }}>
                    Clear All Bookings ⚠️
                  </button>
                </div>
              </div>
              <div style={{ marginBottom: "16px", position: "relative" }}>
                <input type="text" id="admin-bookings-search" placeholder="Search reservations by customer name, email, workshop title, or notes..." style={{ width: "100%", padding: "10px 14px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-color)", borderRadius: "4px", color: "var(--gold)", fontSize: "0.9rem" }} />
              </div>
              <div id="admin-bookings-controls" className="admin-list-controls"></div>
              <div id="admin-bookings-bulkbar" className="admin-bulk-bar" hidden></div>
              <div className="admin-table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th style={{ width: "36px", textAlign: "center" }}>
                        <input type="checkbox" id="bookings-select-all" aria-label="Select all reservations on this page" />
                      </th>
                      <th className="admin-th-sort" data-bsort="date">
                        Date Booked
                      </th>
                      <th className="admin-th-sort" data-bsort="name">
                        Customer
                      </th>
                      <th>
                        Email
                      </th>
                      <th>
                        Mobile
                      </th>
                      <th>
                        Workshop
                      </th>
                      <th className="admin-th-sort" data-bsort="price">
                        Price
                      </th>
                      <th style={{ maxWidth: "250px" }}>
                        Notes
                      </th>
                      <th style={{ textAlign: "center" }}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody id="admin-workshop-bookings-table-body"></tbody>
                </table>
              </div>
              <div id="admin-bookings-pagination" className="admin-pager"></div>
            </div>
          </div>
          <div className="admin-section-card" style={{ border: "1px solid var(--aurora-gold)" }}>
            <h4 style={{ color: "var(--gold)" }}>
              Local Database Backup & Restoration Tool
            </h4>
            <p style={{ fontSize: "0.88rem", color: "var(--mist)", lineHeight: "1.5", marginBottom: "16px" }}>
              
                  Since all site information (gallery photos, workshops catalog, shop items, subscribers database, journal posts, orders, and bookings) is stored directly in your browser's local cache, clearing your cache will reset the database. 
                  Use this utility to export your entire database as a single file to keep a backup or to move it to another computer/browser.
                
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <button type="button" className="button button-primary" id="admin-db-backup-btn" style={{ padding: "10px 18px" }}>
                💾 Download Full Database Backup
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", borderLeft: "1px solid var(--border-color)", paddingLeft: "16px" }}>
                <label htmlFor="admin-db-restore-file" className="button button-secondary" style={{ margin: "0", cursor: "pointer", display: "inline-block" }}>
                  📂 Restore Backup File
                </label>
                <input type="file" id="admin-db-restore-file" accept=".json" style={{ display: "none" }} />
                <span id="admin-db-restore-filename" style={{ color: "var(--mist)", fontSize: "0.85rem", fontStyle: "italic" }}>
                  No file selected
                </span>
                <button type="button" className="button button-primary" id="admin-db-restore-confirm-btn" style={{ display: "none", background: "var(--aurora-teal)", borderColor: "var(--aurora-teal)", color: "var(--dark-cosmos)" }}>
                  Apply Restore 🔄
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="admin-tab-content" id="admin-tab-updates">
          <div className="admin-section-card">
            <div className="admin-card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "14px" }}>
              <h4>
                Email Update List
              </h4>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button type="button" className="button button-primary" id="admin-updates-export-btn">
                  Export Emails (CSV) 📊
                </button>
                <button type="button" className="button button-ghost" id="admin-updates-clear-btn">
                  Clear All
                </button>
              </div>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--mist)", lineHeight: "1.5", margin: "6px 0 14px" }}>
              
                  Everyone who asked to be kept posted about new workshops &amp; shop pieces. Download to a spreadsheet anytime.
                
            </p>
            <div id="admin-updates-stats" style={{ marginBottom: "14px" }}></div>
            <div style={{ overflowX: "auto" }}>
              <table className="admin-table" id="admin-updates-table" style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left" }}>
                      #
                    </th>
                    <th style={{ textAlign: "left" }}>
                      Name
                    </th>
                    <th style={{ textAlign: "left" }}>
                      Email
                    </th>
                    <th style={{ textAlign: "left" }}>
                      Interested in
                    </th>
                    <th style={{ textAlign: "left" }}>
                      Date
                    </th>
                    <th style={{ textAlign: "center" }}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody id="admin-updates-table-body"></tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="admin-tab-content" id="admin-tab-customers">
          <div className="admin-section-card">
            <div className="admin-card-header-actions">
              <h4>
                Customers &mdash; sign-in accounts 
                <span id="admin-customers-count" className="admin-count-pill"></span>
              </h4>
              <div className="admin-header-buttons">
                <button type="button" className="button button-primary" id="admin-customer-add-btn">
                  + Add customer
                </button>
              </div>
            </div>
            <p style={{ fontSize: "0.86rem", color: "var(--mist)", lineHeight: "1.5", margin: "-2px 0 14px" }}>
              Everyone with a sign-in account. View their orders &amp; bookings, set or reset a password, or pause access. 
              <em>
                Snail&nbsp;Mail subscriptions are managed in the 
                <strong>
                  Snail Mail
                </strong>
                 tab; the newsletter list lives in 
                <strong>
                  Email Updates
                </strong>
                .
              </em>
            </p>
            <div style={{ marginBottom: "14px", position: "relative" }}>
              <input type="text" className="admin-list-search" id="admin-customers-search" placeholder="Search customers by name or email…" style={{ width: "100%", padding: "10px 14px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-color)", borderRadius: "4px", color: "var(--gold)", fontSize: "0.9rem" }} />
            </div>
            <div className="admin-table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>
                      Name
                    </th>
                    <th>
                      Email
                    </th>
                    <th>
                      Joined
                    </th>
                    <th style={{ textAlign: "center" }}>
                      Orders
                    </th>
                    <th>
                      Subscription
                    </th>
                    <th>
                      Status
                    </th>
                    <th style={{ textAlign: "center" }}>
                      Manage
                    </th>
                  </tr>
                </thead>
                <tbody id="admin-customers-table-body"></tbody>
              </table>
            </div>
          </div>
          <div className="admin-section-card" id="admin-customer-detail" style={{ display: "none" }}></div>
        </div>
        <div className="admin-tab-content" id="admin-tab-profile">
          <div className="admin-subtabs" id="admin-profile-subtabs">
            <button type="button" className="admin-subtab is-active" data-subtab="admin-sub-profile-text">
              📝 Website Text
            </button>
            <button type="button" className="admin-subtab" data-subtab="admin-sub-profile-contact">
              📇 Contact &amp; Social
            </button>
          </div>
          <div id="admin-sub-profile-text" className="admin-subpanel is-active">
            <div className="admin-section-card">
              <div id="admin-profile-studio-root"></div>
            </div>
          </div>
          <div id="admin-sub-profile-contact" className="admin-subpanel">
            <div className="admin-section-card">
              <div className="admin-card-header-actions">
                <h4>
                  Contact &amp; Social
                </h4>
                <button type="button" className="button button-primary" id="set-contact-save">
                  Save ✓
                </button>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--mist)", margin: "0 0 16px" }}>
                These update everywhere they appear — header, footer, and the contact page.
              </p>
              <div className="admin-grid-form">
                <div className="admin-form-row col-2">
                  <div className="admin-form-group">
                    <label htmlFor="set-email">
                      Email address
                    </label>
                    <input type="email" id="set-email" placeholder="hello@ubhi.in" />
                  </div>
                  <div className="admin-form-group">
                    <label htmlFor="set-phone">
                      Phone (optional)
                    </label>
                    <input type="text" id="set-phone" placeholder="+44 7700 900000" />
                  </div>
                </div>
                <div className="admin-form-group">
                  <label htmlFor="set-address">
                    Address / studio location
                  </label>
                  <input type="text" id="set-address" placeholder="London, United Kingdom" />
                </div>
                <div className="admin-form-row col-2">
                  <div className="admin-form-group">
                    <label htmlFor="set-instagram">
                      Instagram link
                    </label>
                    <input type="text" id="set-instagram" placeholder="https://instagram.com/ubhi.in" />
                  </div>
                  <div className="admin-form-group">
                    <label htmlFor="set-pinterest">
                      Pinterest link
                    </label>
                    <input type="text" id="set-pinterest" placeholder="https://in.pinterest.com/chelseaubhi/" />
                  </div>
                </div>
              </div>
              <h5 style={{ margin: "22px 0 4px", fontFamily: "'Fraunces',serif", fontStyle: "italic", color: "var(--stardust-full)", fontSize: "1.15rem" }}>
                More social links
              </h5>
              <p style={{ fontSize: "0.84rem", color: "var(--mist)", margin: "0 0 12px" }}>
                Add any other platforms (Facebook, TikTok, YouTube, WhatsApp…). These show in the 
                <strong>
                  footer
                </strong>
                 at the bottom of the site — not the header. Pop an emoji in the icon box (e.g. 📘 ▶️ 💬 🎵).
              </p>
              <div id="extra-socials-list"></div>
              <button type="button" className="button button-secondary" id="add-extra-social" style={{ marginTop: "6px" }}>
                ✚ Add a social link
              </button>
              <div id="set-contact-msg" style={{ marginTop: "14px", color: "var(--aurora-teal)", fontSize: "0.88rem", minHeight: "1.1em" }}></div>
            </div>
          </div>
        </div>
        <div className="admin-tab-content" id="admin-tab-settings">
          <div className="admin-section-card" style={{ maxWidth: "540px" }}>
            <h4>
              Server connection 
              <span id="srv-status-pill" className="srv-pill srv-off">
                Not connected
              </span>
            </h4>
            <p style={{ fontSize: "0.88rem", color: "var(--mist)", lineHeight: "1.5", margin: "-2px 0 16px" }}>
              Connect to the Ubhi server to make your edits 
              <strong>
                real and shared everywhere
              </strong>
               — saved off this browser, visible to every visitor on every device, with images hosted properly. While connected, everything you change is saved to the server automatically.
            </p>
            <form id="admin-srv-form" className="admin-grid-form">
              <div className="admin-form-group">
                <label>
                  Owner / staff email
                </label>
                <input type="email" id="srv-email" placeholder="owner@ubhi.local" autoComplete="username" />
              </div>
              <div className="admin-form-group">
                <label>
                  Password
                </label>
                <input type="password" id="srv-pass" placeholder="••••••••" autoComplete="current-password" />
              </div>
              <p id="srv-msg" style={{ display: "none", fontSize: "0.85rem", margin: "0" }}></p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <button type="submit" className="button button-primary">
                  Connect
                </button>
                <button type="button" id="srv-disconnect" className="button button-secondary" style={{ display: "none" }}>
                  Disconnect
                </button>
              </div>
            </form>
          </div>
          <div className="admin-section-card" style={{ maxWidth: "540px" }}>
            <h4>
              Change Admin Passcode
            </h4>
            <p style={{ fontSize: "0.88rem", color: "var(--mist)", lineHeight: "1.5", margin: "-2px 0 18px" }}>
              This is the passcode that unlocks the Keeper's Desk. Pick something only you know — it is saved on this device.
            </p>
            <form id="admin-change-pass-form" className="admin-grid-form">
              <div className="admin-form-group">
                <label>
                  Current passcode
                </label>
                <input type="password" id="admin-current-pass" placeholder="••••••••" required />
              </div>
              <div className="admin-form-group">
                <label>
                  New passcode
                </label>
                <input type="password" id="admin-new-pass" placeholder="At least 4 characters" required />
              </div>
              <div className="admin-form-group">
                <label>
                  Confirm new passcode
                </label>
                <input type="password" id="admin-confirm-pass" placeholder="Repeat the new passcode" required />
              </div>
              <p id="admin-pass-msg" style={{ display: "none", fontSize: "0.85rem", margin: "0" }}></p>
              <button type="submit" className="button button-primary">
                Update Passcode
              </button>
            </form>
          </div>
          <div className="admin-section-card" style={{ maxWidth: "540px", borderLeft: "3px solid var(--aurora-rose)" }}>
            <h4>
              Reset to fresh data
            </h4>
            <p style={{ fontSize: "0.88rem", color: "var(--mist)", lineHeight: "1.5", margin: "-2px 0 14px" }}>
              If the saved data ever gets into a strange state, this wipes 
              <strong>
                all
              </strong>
               content stored in this browser — orders, bookings, members, subscribers, and any workshops, products or posts you've added — and restores the original sample content. Your passcode is kept. 
              <strong>
                This cannot be undone
              </strong>
              , so download a backup first (Orders &amp; Bookings → Database Backup) if you might want the data back.
            </p>
            <button type="button" className="button button-secondary" id="admin-reset-data-btn" style={{ background: "var(--aurora-rose)", borderColor: "var(--aurora-rose)", color: "#fff", padding: "9px 18px", fontSize: "0.72rem", minHeight: "0" }}>
              Reset to fresh data ⚠️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
