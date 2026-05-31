import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LUXESPACES - Premium Furniture & Home Transformation',
  description: 'Transform your space into a luxurious sanctuary. Premium furniture design, manufacturing, and complete home transformation solutions.',
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
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
