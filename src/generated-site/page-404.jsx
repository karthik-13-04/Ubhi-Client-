export default function Page404() {
  return (
    <div id="page-404" className="page is-active legal-page">
      <div className="legal-wrap legal-404">
        <span className="legal-404-wax" aria-hidden="true">
          ?
        </span>
        <p className="eyebrow">
          a letter gone astray
        </p>
        <h1>
          This page wandered off.
        </h1>
        <p className="legal-lead">
          We couldn't find what you were looking for — perhaps it was never posted, or the address has changed.
        </p>
        <div className="legal-404-links">
          <a href="/#home" data-page-link="home" className="button button-primary">
            Back home
          </a>
          <a href="/workshops#workshops" data-page-link="workshops">
            Workshops
          </a>
          <a href="/shop#shop" data-page-link="shop">
            Shop
          </a>
          <a href="/snail-mail#snail-mail" data-page-link="snail-mail">
            Snail Mail
          </a>
          <a href="/journal#journal" data-page-link="journal">
            Art &amp; Journal
          </a>
        </div>
      </div>
    </div>
  );
}
