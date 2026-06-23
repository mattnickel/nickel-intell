/** Cal.com booking path, e.g. "your-username/intro-call" */
export const CAL_LINK = import.meta.env.VITE_CAL_LINK ?? ''

/** Cal.com booking path for fractional CTO / advisory work */
export const CAL_LINK_FRACTIONAL =
  import.meta.env.VITE_CAL_LINK_FRACTIONAL ?? ''

export function calBookingUrl(calLink: string) {
  return calLink ? `https://cal.com/${calLink}` : ''
}

export const CAL_BOOKING_URL = calBookingUrl(CAL_LINK)
export const CAL_FRACTIONAL_BOOKING_URL = calBookingUrl(CAL_LINK_FRACTIONAL)

export const CONTACT_EMAIL = 'hello@nickel-intelligence.com'
