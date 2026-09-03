// ponytail: every section lives in this one file with its content data.
// A one-page site does not need a directory of one-component files.

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How it works' },
  { href: '#stories', label: 'Stories' },
  { href: '#faq', label: 'FAQ' },
]

const FEATURES = [
  {
    emoji: '🩺',
    title: 'Book a vet in two taps',
    body: 'Real availability from clinics near you, in-person or video. Your pet’s history travels with the booking, so nobody starts from scratch.',
  },
  {
    emoji: '💉',
    title: 'Records and shot reminders',
    body: 'Vaccines, weight, allergies, medications and lab results in one profile. Pawllo nudges you before anything expires.',
  },
  {
    emoji: '✂️',
    title: 'Grooming and daycare',
    body: 'Compare groomers and daycares by price, distance and reviews. Rebook a favourite in a single tap.',
  },
  {
    emoji: '🛒',
    title: 'Food and supplies on repeat',
    body: 'Set the bag size and the interval once. Food, litter and treats arrive before you notice the bin is empty.',
  },
  {
    emoji: '🐕',
    title: 'Walks you can watch',
    body: 'Live GPS route, distance, and photos from the walker — plus a note on whether business was taken care of.',
  },
  {
    emoji: '🏡',
    title: 'Sitters you can trust',
    body: 'Background-checked sitters with verified reviews, in-app messaging and payment held until the stay is done.',
  },
]

const STEPS = [
  {
    n: '01',
    title: 'Add your pet',
    body: 'Name, breed, birthday, and a photo. Import existing records from your clinic or snap a picture of the paper ones.',
  },
  {
    n: '02',
    title: 'Pick a service',
    body: 'Vet, groomer, walker, sitter or a delivery. Pawllo shows only providers that actually have a slot open.',
  },
  {
    n: '03',
    title: 'Watch one timeline',
    body: 'Every appointment, dose, delivery and walk lands in the same feed — shared with anyone else who helps care for your pet.',
  },
]

const STORIES = [
  {
    quote:
      'Two dogs, one senior cat, three sets of medication. Before Pawllo that lived on sticky notes and I still got it wrong.',
    name: 'Renata M.',
    role: 'three pets, Lisbon',
  },
  {
    quote:
      'My sister and I share the app. She takes the Tuesday vet run and I do not have to explain anything twice.',
    name: 'Devon A.',
    role: 'one very large dog, Leeds',
  },
  {
    quote:
      'The vaccine reminder caught a booster I was two weeks late on. That alone paid for the year.',
    name: 'Priya S.',
    role: 'rescue cat, Bengaluru',
  },
]

const FAQS = [
  {
    q: 'How much does Pawllo cost?',
    a: 'The app, pet profiles and reminders are free forever. You pay providers directly for their services, and Pawllo takes a small booking fee that is shown before you confirm.',
  },
  {
    q: 'Can I add more than one pet?',
    a: 'Yes — unlimited pets on every plan, each with its own profile, records and timeline. Households with a dog, two cats and a rabbit are very much the norm.',
  },
  {
    q: 'Will my vet actually be on it?',
    a: 'Pawllo works with over 4,000 clinics. If yours is not listed you can still log visits manually, and we will send them an invitation on your behalf.',
  },
  {
    q: 'Who can see my pet’s records?',
    a: 'Only you and the people you invite. Providers see the relevant history for a booking you made, nothing more, and never your contact details until you confirm.',
  },
  {
    q: 'What if I need to cancel a booking?',
    a: 'Cancel free of charge up to 24 hours before. Inside that window the provider’s own policy applies, and it is shown in the app before you book.',
  },
]

function PawIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mark-glyph">
      <circle cx="7" cy="7.5" r="2.6" />
      <circle cx="12" cy="5.6" r="2.6" />
      <circle cx="17" cy="7.5" r="2.6" />
      <circle cx="19.4" cy="12.6" r="2.3" />
      <path d="M12 10.6c3.4 0 6 2.6 6 5.4 0 2.2-1.7 3.6-4 3.6-1 0-1.4-.4-2-.4s-1 .4-2 .4c-2.3 0-4-1.4-4-3.6 0-2.8 2.6-5.4 6-5.4Z" />
    </svg>
  )
}

export function Nav() {
  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main">
        <a className="mark" href="#top">
          <PawIcon />
          <span>Pawllo</span>
        </a>
        {/* ponytail: links simply hide under 768px. A hamburger drawer is state, JS and a focus trap for four anchors. */}
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a className="btn btn-primary btn-sm" href="#get">
          Get the app
        </a>
      </nav>
    </header>
  )
}

function PhoneMockup() {
  return (
    <div className="phone" role="img" aria-label="The Pawllo app showing Mochi's day: a vet appointment at 9:40, a flea tablet due, and a completed 2.4 kilometre walk.">
      <div className="phone-screen">
        <div className="phone-top">
          <span className="phone-avatar" aria-hidden="true">🐕</span>
          <div>
            <strong>Mochi</strong>
            <span className="phone-sub">Shiba Inu · 4 yrs</span>
          </div>
        </div>
        <p className="phone-label">Today</p>
        <ul className="phone-feed">
          <li>
            <span className="dot dot-brand" aria-hidden="true" />
            <div>
              <strong>Vet — annual check</strong>
              <span>9:40 · Dr. Okafor, Fernside</span>
            </div>
          </li>
          <li>
            <span className="dot dot-accent" aria-hidden="true" />
            <div>
              <strong>Flea tablet due</strong>
              <span>With breakfast</span>
            </div>
          </li>
          <li className="is-done">
            <span className="dot dot-done" aria-hidden="true" />
            <div>
              <strong>Morning walk</strong>
              <span>2.4 km · 38 min · Sam</span>
            </div>
          </li>
        </ul>
        <div className="phone-cta">Book something</div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">One app · every pet · every service</p>
          <h1>
            Everything your pet needs, <em>finally</em> in one place.
          </h1>
          <p className="lede">
            Vet visits, vaccine reminders, grooming, food deliveries, walks and sitters — booked,
            tracked and remembered in a single timeline. No more sticky notes on the fridge.
          </p>
          <div className="hero-actions" id="get">
            <a className="btn btn-primary" href="#features">
              Download for iOS
            </a>
            <a className="btn btn-ghost" href="#features">
              Download for Android
            </a>
          </div>
          <p className="hero-note">Free to use · 4,000+ partner clinics · No card to sign up</p>
        </div>
        <PhoneMockup />
      </div>
    </section>
  )
}

export function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <p className="eyebrow">Features</p>
        <h2>Six jobs. One app.</h2>
        <p className="section-lede">
          Pet care is scattered across a clinic portal, three group chats and a shopping app. Pawllo
          collapses it into one.
        </p>
        <ul className="cards">
          {FEATURES.map((f) => (
            <li className="card" key={f.title}>
              <span className="card-emoji" aria-hidden="true">
                {f.emoji}
              </span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section className="section section-tint" id="how">
      <div className="container">
        <p className="eyebrow">How it works</p>
        <h2>Set up in about four minutes.</h2>
        <ol className="steps">
          {STEPS.map((s) => (
            <li key={s.n}>
              <span className="step-n" aria-hidden="true">
                {s.n}
              </span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Stories() {
  return (
    <section className="section" id="stories">
      <div className="container">
        <p className="eyebrow">Stories</p>
        <h2>From people with too many animals.</h2>
        <ul className="quotes">
          {STORIES.map((s) => (
            <li className="quote" key={s.name}>
              <blockquote>{s.quote}</blockquote>
              <p className="quote-by">
                <strong>{s.name}</strong>
                <span>{s.role}</span>
              </p>
            </li>
          ))}
        </ul>
        <p className="fineprint">Illustrative examples. Names and details are fictional.</p>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section className="section section-tint" id="faq">
      <div className="container container-narrow">
        <p className="eyebrow">FAQ</p>
        <h2>Questions people actually ask.</h2>
        {/* ponytail: native <details> is the accordion. No open-state, no JS, keyboard support for free. */}
        <div className="faq">
          {FAQS.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Cta() {
  return (
    <section className="cta">
      <div className="container">
        <h2>Your pet has one life. Stop running it out of six apps.</h2>
        <div className="hero-actions">
          <a className="btn btn-accent" href="#top">
            Download for iOS
          </a>
          <a className="btn btn-onbrand" href="#top">
            Download for Android
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="mark mark-light" href="#top">
            <PawIcon />
            <span>Pawllo</span>
          </a>
          <p className="footer-note">One app for everything your pet needs.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="mailto:hello@pawllo.example">hello@pawllo.example</a></li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <p className="copyright">
          © {new Date().getFullYear()} Pawllo. A demo site — Pawllo is not a real product.
        </p>
      </div>
    </footer>
  )
}
