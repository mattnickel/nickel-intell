import { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'

type CalEmbedProps = {
  calLink: string
  envVarName?: string
}

export default function CalEmbed({
  calLink,
  envVarName = 'VITE_CAL_LINK',
}: CalEmbedProps) {
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

  if (!calLink) {
    return (
      <p className="cal-setup-notice">
        Add your Cal.com link to <code>.env</code> as{' '}
        <code>{envVarName}=your-username/event-type</code>, then restart the
        dev server.
      </p>
    )
  }

  return (
    <Cal
      calLink={calLink}
      className="cal-embed-frame"
      config={{ layout: 'month_view' }}
    />
  )
}
