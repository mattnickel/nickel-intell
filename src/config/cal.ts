/** Cal.com booking path, e.g. "your-username/intro-call" */
export const CAL_LINK = import.meta.env.VITE_CAL_LINK ?? ''

export const CAL_BOOKING_URL = CAL_LINK ? `https://cal.com/${CAL_LINK}` : ''

export const CONTACT_EMAIL = 'hello@nickelintelligence.com'
