import { describe, expect, it } from 'vitest'
import { DEFAULT_MEETING_URL, normalizeMeetingUrl, resolveMeetingUrlFromSearch } from './meeting-url'

describe('meeting-url utilities', () => {
  it('returns null for empty or missing values', () => {
    expect(normalizeMeetingUrl('')).toBeNull()
    expect(normalizeMeetingUrl('   ')).toBeNull()
    expect(normalizeMeetingUrl(undefined)).toBeNull()
    expect(normalizeMeetingUrl(null)).toBeNull()
  })

  it('returns a fallback URL for unsupported or invalid inputs', () => {
    expect(normalizeMeetingUrl('http://meetings.hubspot.com/joyce-spinner')).toBeNull()
    expect(normalizeMeetingUrl('https://example.com/joyce-spinner')).toBeNull()
    expect(normalizeMeetingUrl('javascript:alert(1)')).toBeNull()
    expect(normalizeMeetingUrl('not a url')).toBeNull()
  })

  it('normalizes and accepts allowed HubSpot meeting URLs', () => {
    expect(normalizeMeetingUrl('https://meetings.hubspot.com/joyce-spinner')).toBe(
      'https://meetings.hubspot.com/joyce-spinner',
    )
    expect(normalizeMeetingUrl('https://meetings.hubspot.com/joyce-spinner?source=instapage')).toBe(
      'https://meetings.hubspot.com/joyce-spinner?source=instapage',
    )
  })

  it('resolves meeting_url search param and falls back safely', () => {
    expect(resolveMeetingUrlFromSearch('?meeting_url=https%3A%2F%2Fmeetings.hubspot.com%2Fjoyce-spinner')).toBe(
      'https://meetings.hubspot.com/joyce-spinner',
    )
    expect(resolveMeetingUrlFromSearch('?meeting_url=https%3A%2F%2Fexample.com%2Fbad')).toBe(DEFAULT_MEETING_URL)
    expect(resolveMeetingUrlFromSearch('?foo=bar')).toBe(DEFAULT_MEETING_URL)
  })
})
