import type { Metadata, Viewport } from 'next'
import { preload } from 'react-dom'
import './globals.css'

export const metadata: Metadata = {
  title: 'Best Lawyers®',
  description:
    'Premier Placement helps clients discover your practice earlier in their search for legal counsel.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#12100c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  preload('/fonts/IBMPlexSerif-Regular.ttf', {
    as: 'font',
    type: 'font/ttf',
    crossOrigin: 'anonymous',
  })
  preload('/fonts/IBMPlexSans-Regular.ttf', {
    as: 'font',
    type: 'font/ttf',
    crossOrigin: 'anonymous',
  })

  return (
    <html lang="en" className="bg-background">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
