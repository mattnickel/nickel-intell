import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import { CAL_LINK_FRACTIONAL } from '../config/cal'

const SERVICES = [
  {
    icon: '◈',
    title: 'Fractional CTO',
    description:
      'Senior technical leadership on demand — roadmap, architecture, hiring, and exec alignment without a full-time hire.',
  },
  {
    icon: '◎',
    title: 'AI strategy & implementation',
    description:
      'Cut through the hype. Identify where AI creates real leverage, design pragmatic adoption, and help your team ship responsibly.',
  },
  {
    icon: '◉',
    title: 'Platform & delivery',
    description:
      'Untangle legacy constraints, modernize platforms, and build engineering practices that scale with the business.',
  },
  {
    icon: '◇',
    title: 'Technical due diligence',
    description:
      'Investor- or acquisition-ready assessments: team capability, architecture risk, and what it will actually take to execute.',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Assess',
    description:
      'Understand your business goals, team, tech stack, and where the bottlenecks really are.',
  },
  {
    number: '02',
    title: 'Align',
    description:
      'Build a clear technical strategy and roadmap that founders, product, and engineering can rally around.',
  },
  {
    number: '03',
    title: 'Execute',
    description:
      'Work alongside your team — in the room for key decisions, reviews, and the hard trade-offs.',
  },
  {
    number: '04',
    title: 'Transition',
    description:
      'Leave systems, documentation, and a stronger team that can carry momentum forward.',
  },
]

const WHO_I_WORK_WITH = [
  'Startups needing senior technical leadership before a full-time CTO',
  'Growth-stage companies scaling engineering and platform complexity',
  'Founders navigating AI adoption without a clear path forward',
  'Leadership teams preparing for fundraising, M&A, or major replatforming',
]

export default function FractionalCTOPage() {
  return (
    <>
      <section className="hero hero--fractional">
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Fractional CTO &amp; AI leadership
            </div>
            <h1 className="hero-title">
              Technical leadership that ships — not slides
            </h1>
            <p className="hero-subtitle">
              I embed with founders and leadership teams as a fractional CTO —
              setting strategy, guiding AI adoption, and helping engineering
              organizations deliver with clarity and speed.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Book a discovery call
              </a>
              <a href="#services" className="btn btn-secondary">
                See services
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-value">Fractional</div>
                <div className="stat-label">CTO, advisor, or project lead</div>
              </div>
              <div className="stat">
                <div className="stat-value">Hands-on</div>
                <div className="stat-label">Strategy plus execution in the room</div>
              </div>
              <div className="stat">
                <div className="stat-value">AI-ready</div>
                <div className="stat-label">Pragmatic adoption, not hype cycles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="offer-banner">
        <div className="container offer-banner-inner">
          <p>
            Looking for 1:1 leadership coaching instead?{' '}
            <Link to="/">Explore engineering leadership coaching →</Link>
          </p>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <span className="section-label">Services</span>
          <h2 className="section-title">Where I embed with your team</h2>
          <p className="section-lead">
            Engagements are tailored to your stage — from a focused sprint to
            ongoing fractional leadership. No bloated decks, no vendor lock-in.
          </p>
          <div className="services-grid">
            {SERVICES.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="section approach">
        <div className="container">
          <span className="section-label">Approach</span>
          <h2 className="section-title">How engagements work</h2>
          <p className="section-lead">
            This is hands-on advisory — I join your team where it matters,
            make decisions with you, and build capability that outlasts the
            engagement.
          </p>
          <div className="steps">
            {STEPS.map((step) => (
              <div key={step.number} className="step">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <span className="section-label">About</span>
          <h2 className="section-title">An operator in the room, not a PowerPoint shop</h2>
          <div className="about-grid">
            <div className="about-panel">
              <blockquote>
                &ldquo;The best technical leadership doesn&apos;t create
                dependency — it creates capability.&rdquo;
              </blockquote>
              <cite>— Matt Nickel, Nickel Intelligence</cite>
            </div>
            <div className="about-text">
              <p>
                I&apos;ve built and led engineering teams through product
                launches, platform migrations, and the messy middle of scaling —
                including helping organizations figure out where AI actually
                fits.
              </p>
              <p>
                Through Nickel Intelligence, I work as a fractional CTO and
                technical advisor: direct access to senior leadership without
                the overhead of a large firm. I partner with founders and exec
                teams who need someone who can think strategically and still
                read the code review.
              </p>
              <ul className="about-list">
                {WHO_I_WORK_WITH.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        calLink={CAL_LINK_FRACTIONAL}
        calEnvVarName="VITE_CAL_LINK_FRACTIONAL"
        title="Let's talk about your technical roadmap"
        lead="Book a free discovery call. Tell me about your company, team, and what you're trying to build — I'll be straight about whether I can help."
        cardTitle="Schedule a discovery call"
        cardDescription="Come ready to discuss your product, engineering team, and where you need senior technical leadership most."
      />
    </>
  )
}
