export const DEFAULT_MEETING_URL = 'https://meetings.hubspot.com/joyce-spinner'
const ALLOWED_MEETING_HOSTNAMES = ['meetings.hubspot.com']

export function normalizeMeetingUrl(urlValue: string | null | undefined): string | null {
  const rawValue = urlValue?.trim()
  if (!rawValue) {
    return null
  }

  try {
    const url = new URL(rawValue)
    if (url.protocol !== 'https:') {
      return null
    }

    if (!ALLOWED_MEETING_HOSTNAMES.includes(url.hostname.toLowerCase())) {
      return null
    }

    return url.toString()
  } catch {
    return null
  }
}

export function resolveMeetingUrlFromSearch(search: string): string {
  const params = new URLSearchParams(search)
  const meetingUrl = params.get('meeting_url')
  return normalizeMeetingUrl(meetingUrl) ?? DEFAULT_MEETING_URL
}
