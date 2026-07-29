'use client'

import { useEffect, useState } from 'react'
import { DEFAULT_MEETING_URL, resolveMeetingUrlFromSearch } from './meeting-url'

export function useMeetingUrl() {
  const [meetingUrl, setMeetingUrl] = useState(DEFAULT_MEETING_URL)

  useEffect(() => {
    if (typeof window === 'undefined') return
    setMeetingUrl(resolveMeetingUrlFromSearch(window.location.search))
  }, [])

  return meetingUrl
}
