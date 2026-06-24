import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import { CAL_LINK } from '../config/cal'
import headshot from '../assets/matt-nickel-headshot.png'

const OUTCOMES_BEFORE = [
  'Escalations keep pulling you out of planned work',
  'Product, engineering, and leadership are not aligned on priorities',
  'Too many decisions depend on you personally',
  'Executive updates lack a clear story of progress, risk, and next steps',
]

const OUTCOMES_AFTER = [
  'Predictable delivery leadership can trust',
  'Clear priorities your team can explain and act on',
  'Difficult conversations handled with preparation and confidence',
  'A credible operating narrative for your manager, peers, and team',
]

const COACHING_AREAS = [
  {
    icon: '◈',
    title: 'Establish credibility in the first 90 days',
    description:
      'You were promoted for delivery. Now you need the delegation, feedback, and 1:1 rhythm that helps the team execute without you in every thread.',
  },
  {
    icon: '◎',
    title: 'Handle high-stakes people decisions',
    description:
      'Underperformance, conflict, reorgs, and executive pressure all require clarity before action. Walk in knowing the outcome you need and how to communicate it.',
  },
  {
    icon: '◉',
    title: 'Expand scope without becoming the bottleneck',
    description:
      'Influence across product, manage managers, or step toward director and VP. Get clear on where your leverage is so you can lead through others.',
  },
  {
    icon: '◇',
    title: 'Lead well in a difficult environment',
    description:
      'Burnout, self-doubt, a difficult boss, or a strained org can make every decision feel personal. Separate what is fixable from what needs a different response.',
  },
]

const PACKAGE_INCLUDES = [
  'Six confidential 1:1 sessions over six weeks',
  'Frameworks for feedback, prioritization, and exec communication',
  'Homework between sessions — applied to your real situations, not hypotheticals',
  'Direct access via email between sessions for urgent moments',
]

const DELIVERABLES = [
  {
    number: '01',
    title: 'Clarity on your bottleneck',
    description:
      'We name the leadership constraint costing you the most — stalled delivery, a people issue, or executive misalignment — and stop treating symptoms.',
  },
  {
    number: '02',
    title: 'A plan you can execute',
    description:
      'A concrete next move for the conversation, reorg, roadmap conflict, or communication gap that has been slowing you down.',
  },
  {
    number: '03',
    title: 'Judgment that outlasts coaching',
    description:
      'Frameworks you reuse on the next hard call — so you\'re not starting from zero every time something breaks.',
  },
  {
    number: '04',
    title: 'Leadership credibility strengthened',
    description:
      'Your team and executives see a leader who communicates clearly, acts decisively, and creates predictable momentum.',
  },
]

const WHO_I_COACH = [
  'Engineering managers — first-time and experienced',
  'Tech leads stepping into people leadership',
  'Directors and VPs navigating org scale',
  'Staff+ engineers leading through influence',
]

const PROOF_POINTS = [
  {
    value: '18 years',
    label: 'Building and leading SaaS, fintech, edtech, healthtech, and AI product teams',
  },
  {
    value: 'Low turnover',
    label: 'Built across multiple teams through clear ownership, healthy communication, and trust',
  },
  {
    value: '20+ people',
    label: 'Directed across 4 teams while improving collaboration, culture, and reliable releases',
  },
  {
    value: 'Remote teams',
    label: 'Recruited, hired, and empowered distributed teams that delivered reliably and sustainably',
  },
]

export default function CoachingPage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Engineering leadership coaching
            </div>
            <h1 className="hero-title">
              The <em>clarity</em> to lead a team that delivers
            </h1>
            <p className="hero-subtitle">
              I help engineering managers and tech leaders turn stalled execution,
              difficult people decisions, and executive pressure into predictable
              delivery — so you keep your credibility and your team keeps moving.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Book a free intro call
              </a>
              <a href="#outcomes" className="btn btn-secondary">
                See what changes
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-value">6 weeks</div>
                <div className="stat-label">Structured engagement with a clear arc</div>
              </div>
              <div className="stat">
                <div className="stat-value">Your situations</div>
                <div className="stat-label">Underperformers, reorgs, roadmap fights</div>
              </div>
              <div className="stat">
                <div className="stat-value">Confidential</div>
                <div className="stat-label">A safe space to pressure-test hard calls</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="offer-banner">
        <div className="container offer-banner-inner">
          <p>
            Need hands-on technical leadership instead?{' '}
            <Link to="/fractional-cto">Explore fractional CTO &amp; AI advisory →</Link>
          </p>
        </div>
      </section>

      <section className="section proof">
        <div className="container">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Leadership clarity backed by real operating experience</h2>
          <p className="section-lead">
            I coach from the work itself: hiring, developing managers,
            sustaining team health, and delivering under pressure when the
            stakes are real.
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
          <h2 className="section-title">From reactive leadership to clear execution</h2>
          <p className="section-lead">
            Coaching clients come because something is costing them time,
            credibility, or momentum. Here&apos;s what shifts when the real
            constraint is clear.
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

      <section id="coaching" className="section">
        <div className="container">
          <span className="section-label">Focus areas</span>
          <h2 className="section-title">Where coaching creates leverage</h2>
          <p className="section-lead">
            Every engagement is different, but most coaching clients arrive with
            one of these leadership constraints.
          </p>
          <div className="services-grid">
            {COACHING_AREAS.map((area) => (
              <article key={area.title} className="service-card">
                <div className="service-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="section approach">
        <div className="container">
          <span className="section-label">Engagement</span>
          <h2 className="section-title">6-Week Leadership Intensive</h2>
          <p className="section-lead">
            A focused engagement with a clear before and after: sharper
            communication, stronger decisions, and a leadership system you can
            keep using.
          </p>
          <div className="package-card package-card--featured">
            <div className="package-header">
              <div>
                <h3>6-Week Leadership Intensive</h3>
                <p className="package-tagline">
                  For engineering managers who need to lead through a real
                  challenge, strengthen credibility, and restore momentum.
                </p>
              </div>
              <div className="package-price-block">
                <div className="package-price">$2,000</div>
                <div className="package-meta">Six 1:1 sessions · 6 weeks</div>
              </div>
            </div>
            <ul className="package-includes">
              {PACKAGE_INCLUDES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary package-cta">
              Start with a free intro call
            </a>
          </div>
        </div>
      </section>

      <section id="approach" className="section">
        <div className="container">
          <span className="section-label">Deliverables</span>
          <h2 className="section-title">What you walk away with</h2>
          <p className="section-lead">
            This is a dedicated space to get clear, make better decisions, and
            build leadership judgment you keep using long after we stop meeting.
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
          <h2 className="section-title">Coaching from real engineering leadership experience</h2>
          <div className="about-grid">
            <div className="about-panel">
              <img
                src={headshot}
                alt="Matt Nickel"
                className="about-photo"
              />
              <blockquote>
                &ldquo;Clarity is kindness. First for yourself, then for your team.&rdquo;
              </blockquote>
              <cite>— Matt Nickel, Nickel Intelligence</cite>
            </div>
            <div className="about-text">
              <p>
                I&apos;ve spent 18 years as a technology leader — managing teams,
                hiring, delivering under pressure, and learning what actually
                works when you&apos;re responsible for people, not just code.
              </p>
              <p>
                Nickel Intelligence is my coaching practice for engineering
                leaders who want a trusted thinking partner: someone who
                understands the technical context, knows how healthy teams
                deliver, and helps you cut through noise to the decision that
                moves your team forward.
              </p>
              <ul className="about-list">
                {WHO_I_COACH.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        calLink={CAL_LINK}
        calEnvVarName="VITE_CAL_LINK"
        title="Get clarity on your biggest bottleneck"
        lead="Book a free 30-minute intro call. Bring the leadership problem that&apos;s costing you the most — I&apos;ll tell you honestly if I can help, and what would change in the first six weeks if we worked together."
        cardDescription="No prep required. Come ready to talk about your role, your team, and what clear looks like six months from now."
      />
    </>
  )
}
