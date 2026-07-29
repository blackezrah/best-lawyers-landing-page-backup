import type { Metadata, Viewport } from 'next'
import { preload } from 'react-dom'
import './globals.css'
import { HubspotModalProvider } from '@/components/premier/hubspot-modal'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bestlawyers.com'),

  title: 'Best Lawyers®',

  description:
    'Premier Placement helps clients discover your practice earlier in their search for legal counsel.',

  alternates: {
    canonical: '/premier-placement',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1A1F25',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  preload('/fonts/Gentleman-Regular.woff', {
    as: 'font',
    type: 'font/woff',
    crossOrigin: 'anonymous',
  })
  preload('/fonts/Gentleman-Light.woff', {
    as: 'font',
    type: 'font/woff',
    crossOrigin: 'anonymous',
  })
  preload('/fonts/Optima-Regular.ttf', {
    as: 'font',
    type: 'font/ttf',
    crossOrigin: 'anonymous',
  })

  return (
    <html lang="en" className="bg-background">
      <body className="antialiased font-sans">
        <HubspotModalProvider>{children}</HubspotModalProvider>
      </body>
    </html>
  )
}
