import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LUXESPACES - Premium Home Transformation',
  description: 'From bare walls to beautiful living. Complete home transformation solution with custom furniture, interior design, and premium installations.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Premium luxury furniture and home transformation solutions" />
        <meta name="theme-color" content="#000000" />
        
        {/* Preload fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LUXESPACES - Premium Home Transformation" />
        <meta property="og:description" content="Complete home transformation with custom furniture and interior design" />
        <meta property="og:image" content="/og-image.jpg" />
      </head>
      <body className="bg-white">
        {children}
        
        {/* Analytics (optional) */}
        <script async src="https://cdn.example.com/analytics.js" />
      </body>
    </html>
  )
}
