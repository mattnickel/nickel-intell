import CalEmbed from './CalEmbed'
import { CAL_BOOKING_URL, CONTACT_EMAIL } from '../config/cal'

type ContactSectionProps = {
  title?: string
  lead?: string
  cardTitle?: string
  cardDescription?: string
}

export default function ContactSection({
  title = "Let's see if we're a fit",
  lead = "Book a free 30-minute intro call. Tell me what you're dealing with — I'll be honest about whether we're a fit, even if that means pointing you somewhere else.",
  cardTitle = 'Pick a time',
  cardDescription = 'No prep required. Come ready to talk about your situation, your team, and what you want to be different six months from now.',
}: ContactSectionProps) {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="section-label">Contact</span>
        <h2 className="section-title">{title}</h2>
        <p className="section-lead">{lead}</p>
        <div className="contact-card contact-card--booking">
          <h3>{cardTitle}</h3>
          <p>{cardDescription}</p>
          <div className="cal-embed">
            <CalEmbed />
          </div>
          <p className="contact-alt">
            Prefer email?{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            {CAL_BOOKING_URL && (
              <>
                {' '}
                ·{' '}
                <a href={CAL_BOOKING_URL} target="_blank" rel="noreferrer">
                  Open in Cal.com
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
