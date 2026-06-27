export default function PageFaq() {
  return (
    <div id="page-faq" className="page legal-page">
      <div className="legal-wrap">
        <p className="eyebrow">
          good to know
        </p>
        <h1>
          Questions &amp; Answers
        </h1>
        <p className="legal-note">
          Placeholder Q&amp;A — refine the wording before launch.
        </p>
        <div className="legal-body faq-list">
          <details>
            <summary>
              Where are the workshops held?
            </summary>
            <p>
              In-person gatherings are held in London, and they're open to seekers travelling from anywhere in the world. When you book, tell us where you're joining from and we'll confirm the details with you.
            </p>
          </details>
          <details>
            <summary>
              How does the Snail Mail Club work?
            </summary>
            <p>
              Each month a hand-finished parcel — slow pages, a pressed print, a small thing to hold — is posted to your door within the UK. You choose a commitment length; longer journeys include welcome gifts from Chelsea's pottery wheel.
            </p>
          </details>
          <details>
            <summary>
              Can I cancel my subscription?
            </summary>
            <p>
              Yes — any time, in a couple of clicks from 
              <a href="/account#account" data-page-link="account">
                Your Almanac
              </a>
               (or just email us). You'll keep receiving parcels until the end of your current paid period.
            </p>
          </details>
          <details>
            <summary>
              Where do you ship?
            </summary>
            <p>
              The Shop and Snail Mail Club currently post within the United Kingdom. Full shipping details are on the 
              <a href="/shipping#shipping" data-page-link="shipping">
                Shipping
              </a>
               page.
            </p>
          </details>
          <details>
            <summary>
              What's your returns policy?
            </summary>
            <p>
              Unused items can be returned within 14 days. See 
              <a href="/refunds#refunds" data-page-link="refunds">
                Returns &amp; Refunds
              </a>
               for the full details.
            </p>
          </details>
          <details>
            <summary>
              How are payments handled?
            </summary>
            <p>
              All payments are processed securely by Stripe. We never see or store your card details.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
