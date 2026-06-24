import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import { CAL_LINK_FRACTIONAL } from '../config/cal'
import headshot from '../assets/matt-nickel-headshot.png'

const OUTCOMES_BEFORE = [
  'A backlog full of good ideas — and no agreed top priority',
  'Product, engineering, and leadership pulling toward different bets',
  'Roadmap reviews reopening decisions that should already be settled',
  'New initiatives added before current priorities reach the market',
]

const OUTCOMES_AFTER = [
  'A ranked priority stack leadership can commit to',
  'One clear next bet — with technical trade-offs already worked through',
  'Product and engineering aligned on sequence, scope, and ownership',
  'A decision framework for evaluating the next opportunity',
]

const SERVICES = [
  {
    icon: '◈',
    title: 'AI Product Strategy Sprint',
    meta: '2 weeks',
    description:
      'In two weeks, I help your leadership team identify, rank, and scope the highest-leverage AI opportunities.',
  },
  {
    icon: '◎',
    title: 'Product–Engineering Alignment Workshop',
    meta: '1–2 days',
    description:
      'When every feature sounds important, the team needs a clear decision process. Rank the top initiatives, stress-test feasibility, and align on the next bet.',
  },
  {
    icon: '◉',
    title: 'Fractional CTO',
    meta: 'Ongoing',
    description:
      'Ongoing senior technical leadership when priorities keep shifting: roadmap, architecture, hiring, and the judgment to protect focus.',
  },
  {
    icon: '◇',
    title: 'Technical due diligence',
    meta: 'Project-based',
    description:
      'Walk into your fundraise or acquisition with eyes open: team capability, architecture risk, and what it will actually take to execute.',
  },
]

const PACKAGES = [
  {
    name: 'AI Product Strategy Sprint',
    duration: '2 weeks',
    description:
      'In two weeks, I help your leadership team identify, rank, and scope the highest-leverage AI opportunities.',
    includes: [
      'Executive discovery and stakeholder interviews',
      'Use-case prioritization with technical feasibility checks',
      'A roadmap your engineering team can begin immediately',
      'Clear guidance on what to build, buy, or skip',
    ],
  },
  {
    name: 'Product–Engineering Alignment Workshop',
    duration: '1–2 days',
    description:
      'For founders with more opportunities than capacity — and a team that needs agreement on what comes next.',
    includes: [
      'Rank and score your top initiatives together',
      'Technical evaluation of what\'s realistic this quarter',
      'A shared priority stack everyone commits to',
      'A decision process for the next opportunity',
    ],
  },
]

const DELIVERABLES = [
  {
    number: '01',
    title: 'Clarity on what comes first',
    description:
      'We rank initiatives against business goals, technical feasibility, and team capacity until there is a clear priority stack.',
  },
  {
    number: '02',
    title: 'A roadmap people rally around',
    description:
      'Founders, product, and engineering aligned on what comes next — with the trade-offs already worked through so debates don\'t restart every week.',
  },
  {
    number: '03',
    title: 'Trade-offs resolved in the room',
    description:
      'Hands-on leadership for the hard calls: architecture, hiring, AI scope, and the trade-offs that stall without senior judgment.',
  },
  {
    number: '04',
    title: 'Capability that stays with the team',
    description:
      'Documentation, systems, and stronger operating habits so the team carries momentum forward after the engagement.',
  },
]

const WHO_I_WORK_WITH = [
  'Founders with more product ideas than engineering capacity',
  'Series A and growth-stage companies that need alignment on what comes next',
  'Leadership teams starting new initiatives faster than they finish current ones',
  'Teams preparing for fundraising, M&A, or major replatforming who need a clear technical story',
]

const PROOF_POINTS = [
  {
    value: '6 AI-first products',
    label: 'Delivered from 0 to 1 with roadmaps, reusable systems, and high-velocity iteration',
  },
  {
    value: '$18M+ funded',
    label: 'Supported through strong product strategy, technical clarity, and cross-functional alignment',
  },
  {
    value: '$15M revenue',
    label: 'Unlocked by modernizing a monolithic edtech platform into headless services',
  },
  {
    value: '100M+ users',
    label: 'Experience with products and platforms built for meaningful scale across B2B and B2C markets',
  },
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
              The <em>clarity</em> to build what matters next
            </h1>
            <p className="hero-subtitle">
              You have more opportunities than capacity — and no clear top
              priority. I help founders and leadership teams rank what matters,
              align product and engineering, and turn focus into execution.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Book a discovery call
              </a>
              <a href="#packages" className="btn btn-secondary">
                See engagements
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-value">Ranked priorities</div>
                <div className="stat-label">A clear top priority your whole team commits to</div>
              </div>
              <div className="stat">
                <div className="stat-value">In the room</div>
                <div className="stat-label">Senior technical judgment for decisions that affect execution</div>
              </div>
              <div className="stat">
                <div className="stat-value">Fewer debates</div>
                <div className="stat-label">Trade-offs worked through once, not every sprint</div>
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

      <section className="section proof">
        <div className="container">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Strategic clarity backed by shipped outcomes</h2>
          <p className="section-lead">
            I bring the pattern recognition of an operator who has taken products
            from idea to market, modernized platforms under pressure, and turned
            technical strategy into business momentum.
          </p>
          <div className="proof-grid">
            {PROOF_POINTS.map((point) => (
              <div key={point.value} className="proof-card">
                <div className="proof-value">{point.value}</div>
                <p>{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="outcomes" className="section">
        <div className="container">
          <span className="section-label">Outcomes</span>
          <h2 className="section-title">From competing priorities to strategic clarity</h2>
          <p className="section-lead">
            Most founders do not need more ideas. They need a clear top priority,
            a shared rationale, and the discipline to keep the team focused.
          </p>
          <div className="outcomes-grid">
            <div className="outcome-panel">
              <div className="outcome-label">Before</div>
              <ul className="outcome-list">
                {OUTCOMES_BEFORE.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="outcome-panel outcome-panel--after">
              <div className="outcome-label">After</div>
              <ul className="outcome-list">
                {OUTCOMES_AFTER.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <span className="section-label">Services</span>
          <h2 className="section-title">Where I help leadership teams create momentum</h2>
          <p className="section-lead">
            Engagements are tailored to your stage — from a focused sprint to
            ongoing fractional leadership — with clear decisions, clear owners,
            and a roadmap the team can act on.
          </p>
          <div className="services-grid">
            {SERVICES.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <div className="service-meta">{service.meta}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="section approach">
        <div className="container">
          <span className="section-label">Engagements</span>
          <h2 className="section-title">Fixed sprints that lock your priorities</h2>
          <p className="section-lead">
            Focused engagements with a ranked roadmap at the end: easier to
            evaluate, faster to start, and built to align the people responsible
            for execution.
          </p>
          <div className="packages-grid">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className="package-card">
                <div className="package-header">
                  <div>
                    <h3>{pkg.name}</h3>
                    <p className="package-tagline">{pkg.description}</p>
                  </div>
                  <div className="package-price-block">
                    <div className="package-meta">{pkg.duration}</div>
                  </div>
                </div>
                <ul className="package-includes">
                  {pkg.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="packages-note">
            Need ongoing fractional leadership instead of a sprint?{' '}
            <a href="#contact">Book a discovery call</a> and we&apos;ll scope
            what fits.
          </p>
        </div>
      </section>

      <section id="approach" className="section">
        <div className="container">
          <span className="section-label">Deliverables</span>
          <h2 className="section-title">What you walk away with</h2>
          <p className="section-lead">
            This is hands-on advisory for the decisions that shape execution:
            what to build, what to pause, and how to keep the team aligned.
          </p>
          <div className="steps">
            {DELIVERABLES.map((step) => (
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
          <h2 className="section-title">Senior judgment for product and engineering trade-offs</h2>
          <div className="about-grid">
            <div className="about-panel">
              <img
                src={headshot}
                alt="Matt Nickel"
                className="about-photo"
              />
              <blockquote>
                &ldquo;Good leadership creates clarity your team can act on.&rdquo;
              </blockquote>
              <cite>— Matt Nickel, Nickel Intelligence</cite>
            </div>
            <div className="about-text">
              <p>
                I&apos;ve spent 18 years building and leading engineering teams
                through product launches, platform migrations, and the complex
                middle of scaling — including helping organizations figure out
                where AI actually fits.
              </p>
              <p>
                Through Nickel Intelligence, I work as a fractional CTO and
                technical advisor: direct access to senior leadership without
                the overhead of a large firm. I partner with founders and exec
                teams who need someone who can prioritize clearly, translate
                technical trade-offs into business terms, and still read the
                code review.
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
        title="Get clarity on your top priority"
        lead="Book a free discovery call. Tell me about your product, your backlog, and what is competing for top priority — I&apos;ll be direct about whether I can help and what a sprint or fractional engagement would deliver."
        cardTitle="Schedule a discovery call"
        cardDescription="Come ready to talk about your feature backlog, your stakeholders, and what a clear priority stack would unlock for the business."
      />
    </>
  )
}
