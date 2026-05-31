import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LUXESPACES - Premium Furniture & Home Transformation',
  description: 'Transform your space into a luxurious sanctuary. Premium furniture design, manufacturing, and complete home transformation solutions.',
  openGraph: {
    title: 'LUXESPACES - Premium Home Transformation',
    description: 'From white apartments to dream homes. Complete home transformation solutions.',
    url: 'https://luxespaces.vercel.app',
    siteName: 'LUXESPACES',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'LUXESPACES - Premium Home Transformation',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUXESPACES - Premium Home Transformation',
    description: 'Transform your space into a luxurious sanctuary.',
    images: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=630&fit=crop'],
  },
  icons: {
    icon: '✨',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
