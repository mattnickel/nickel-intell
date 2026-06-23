import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import { CAL_LINK } from '../config/cal'

const COACHING_AREAS = [
  {
    icon: '◈',
    title: 'New to the role',
    description:
      'You were promoted because you were great at the work — now you need to lead the people doing it. Build confidence in the fundamentals fast.',
  },
  {
    icon: '◎',
    title: 'Hard leadership moments',
    description:
      'Underperformers, reorgs, exec pressure, team conflict. Get a clear head and a plan before the conversation you’ve been avoiding.',
  },
  {
    icon: '◉',
    title: 'Growing as a leader',
    description:
      'Influence across the org, manage managers, or step toward director and VP. Navigate the shift from doer to multiplier.',
  },
  {
    icon: '◇',
    title: 'Burnout in a toxic environment',
    description:
      'You’re exhausted, doubting yourself, and not sure if it’s you or the org. Sort through what’s fixable, what’s not, and what you need to protect your health and career.',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Connect',
    description:
      'A free intro call to see if we’re a fit — your context, your goals, no sales pitch.',
  },
  {
    number: '02',
    title: 'Clarify',
    description:
      'Define what you want to change: a specific challenge, a skill gap, or a broader leadership transition.',
  },
  {
    number: '03',
    title: 'Coach',
    description:
      'Regular 1:1 sessions focused on your real situations — not generic frameworks from a slide deck.',
  },
  {
    number: '04',
    title: 'Grow',
    description:
      'Build judgment and habits you keep using long after our engagement ends.',
  },
]

const WHO_I_COACH = [
  'Engineering managers — first-time and experienced',
  'Tech leads stepping into people leadership',
  'Directors and VPs navigating org scale',
  'Staff+ engineers leading through influence',
]

export default function CoachingPage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Coaching for engineering leadership
            </div>
            <h1 className="hero-title">
              Lead your team with more <em>clarity</em> and less guesswork
            </h1>
            <p className="hero-subtitle">
              I coach engineering managers and tech leaders through the moments
              that don&apos;t come with a playbook — tough people calls, growing
              scope, and the loneliness of being the one responsible.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Book a free intro call
              </a>
              <a href="#approach" className="btn btn-secondary">
                How It Works
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-value">1:1</div>
                <div className="stat-label">Confidential coaching sessions</div>
              </div>
              <div className="stat">
                <div className="stat-value">EM-focused</div>
                <div className="stat-label">Built for engineering leaders</div>
              </div>
              <div className="stat">
                <div className="stat-value">Remote</div>
                <div className="stat-label">Video sessions, flexible scheduling</div>
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

      <section id="coaching" className="section">
        <div className="container">
          <span className="section-label">Coaching</span>
          <h2 className="section-title">What we work on together</h2>
          <p className="section-lead">
            Every engagement is different, but most coaching clients come with
            one of these — or a combination that keeps them up at night.
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

      <section id="approach" className="section approach">
        <div className="container">
          <span className="section-label">Approach</span>
          <h2 className="section-title">How coaching works</h2>
          <p className="section-lead">
            This isn&apos;t consulting where I join your standups or write your
            roadmap. It&apos;s a dedicated space for you to think out loud,
            pressure-test decisions, and grow as a leader.
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
          <h2 className="section-title">A coach who&apos;s sat in your chair</h2>
          <div className="about-grid">
            <div className="about-panel">
              <blockquote>
                &ldquo;Good coaching doesn&apos;t give you answers — it helps you
                find your own, faster.&rdquo;
              </blockquote>
              <cite>— Matt Nickel, Nickel Intelligence</cite>
            </div>
            <div className="about-text">
              <p>
                I&apos;ve spent years as an engineering leader — managing teams,
                hiring, delivering under pressure, and learning (often the hard
                way) what actually works when you&apos;re responsible for people,
                not just code.
              </p>
              <p>
                Nickel Intelligence is my coaching practice for engineering
                leaders. I work with managers and directors who want a trusted
                thinking partner: someone who understands the technical context
                and the human side of the job.
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
        title="Let's see if we're a fit"
        lead="Book a free 30-minute intro call. Tell me what you're dealing with — I'll be honest about whether coaching is the right move, even if that means pointing you somewhere else."
        cardDescription="No prep required. Just come ready to talk about your role, your team, and what you'd like to be different six months from now."
      />
    </>
  )
}
