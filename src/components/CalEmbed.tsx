import { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'
import { CAL_LINK } from '../config/cal'

export default function CalEmbed() {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi()
      cal('ui', {
        styles: {
          branding: {
            brandColor: '#c9a227',
          },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  if (!CAL_LINK) {
    return (
      <p className="cal-setup-notice">
        Add your Cal.com link to <code>.env</code> as{' '}
        <code>VITE_CAL_LINK=your-username/event-type</code>, then restart the
        dev server.
      </p>
    )
  }

  return (
    <Cal
      calLink={CAL_LINK}
      className="cal-embed-frame"
      config={{ layout: 'month_view' }}
    />
  )
}
