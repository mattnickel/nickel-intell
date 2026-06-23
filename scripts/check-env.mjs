import { existsSync, readFileSync } from 'node:fs'

function readEnvVar(name) {
  if (process.env[name]?.trim()) {
    return process.env[name].trim()
  }

  if (existsSync('.env')) {
    const match = readFileSync('.env', 'utf8').match(
      new RegExp(`^${name}=(.+)$`, 'm'),
    )
    if (match?.[1]?.trim()) return match[1].trim()
  }

  return ''
}

const requiredVars = [
  {
    name: 'VITE_CAL_LINK',
    label: 'Coaching intro call',
    example: 'matt-nickel-ppb0vr/free-intro-call',
  },
  {
    name: 'VITE_CAL_LINK_FRACTIONAL',
    label: 'Fractional CTO discovery call',
    example: 'matt-nickel-ppb0vr/fractional-consulting-intro-call',
  },
]

const missing = requiredVars.filter(({ name }) => !readEnvVar(name))

if (process.env.CF_PAGES === '1' && missing.length > 0) {
  console.error(`
Cloudflare Pages build failed: missing Cal.com environment variable(s).

Fix:
  1. Open your Pages project in the Cloudflare dashboard
  2. Settings → Environment variables
  3. Add these for Production:
${missing
  .map(
    ({ name, label, example }) =>
      `       ${name}  (${label})\n       Value: ${example}`,
  )
  .join('\n')}
  4. Deployments → Retry deployment (or push a new commit)

Use only the path after cal.com/ — not the full URL.
`)
  process.exit(1)
}

if (missing.length === 0) {
  console.log('Cal.com links configured for build.')
}
