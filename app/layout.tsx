import type { Metadata, Viewport } from 'next'
import { preload } from 'react-dom'
import './globals.css'
import { HubspotModalProvider } from '@/components/premier/hubspot-modal'
import { SmoothScrollProvider } from '@/components/premier/smooth-scroll-provider'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bestlawyers.com'),

  title: 'Best Lawyers®',

  description:
    'Premier Placement helps clients discover your practice earlier in their search for legal counsel.',

  alternates: {
    canonical: '/premier-placement',
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/bl-favicon.png', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#282e3a',
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
        <SmoothScrollProvider>
          <HubspotModalProvider>{children}</HubspotModalProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
