import { existsSync, readFileSync } from 'node:fs'

function getCalLink() {
  if (process.env.VITE_CAL_LINK?.trim()) {
    return process.env.VITE_CAL_LINK.trim()
  }

  if (existsSync('.env')) {
    const match = readFileSync('.env', 'utf8').match(/^VITE_CAL_LINK=(.+)$/m)
    if (match?.[1]?.trim()) return match[1].trim()
  }

  return ''
}

const calLink = getCalLink()

if (process.env.CF_PAGES === '1' && !calLink) {
  console.error(`
Cloudflare Pages build failed: VITE_CAL_LINK is not set.

Fix:
  1. Open your Pages project in the Cloudflare dashboard
  2. Settings → Environment variables
  3. Add variable for Production:
       Name:  VITE_CAL_LINK
       Value: matt-nickel-ppb0vr/free-intro-call
  4. Deployments → Retry deployment (or push a new commit)

Use only the path after cal.com/ — not the full URL.
`)
  process.exit(1)
}

if (calLink) {
  console.log('Cal.com link configured for build.')
}
