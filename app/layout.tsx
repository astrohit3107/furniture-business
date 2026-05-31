import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LUXESPACES - Premium Furniture & Home Transformation',
  description: 'Transform your space into a luxurious sanctuary.',
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
        <link
          href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          html {
            scroll-behavior: smooth;
            -webkit-font-smoothing: antialiased;
          }
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background-color: #fafaf8;
            color: #0a0a0a;
            line-height: 1.6;
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Clash Display', system-ui;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 1rem;
            color: #0a0a0a;
          }
          
          h1 { font-size: clamp(2rem, 8vw, 4.5rem); }
          h2 { font-size: clamp(1.75rem, 6vw, 3.5rem); }
          h3 { font-size: clamp(1.25rem, 4vw, 2rem); }
          
          p {
            margin-bottom: 1rem;
            font-size: clamp(0.875rem, 2vw, 1.125rem);
            color: #3a3a3a;
            line-height: 1.8;
          }
          
          a {
            text-decoration: none;
            color: #d4a574;
            transition: all 0.3s ease;
          }
          
          a:hover {
            color: #ea580c;
          }
          
          button {
            cursor: pointer;
            border: none;
            font-family: inherit;
            transition: all 0.3s ease;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
          }
          
          button:hover {
            transform: translateY(-2px);
          }
          
          .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 1rem;
          }
          
          section {
            padding: 4rem 1rem;
          }
          
          @media (min-width: 768px) {
            section {
              padding: 6rem 2rem;
            }
          }
          
          @media (min-width: 1024px) {
            section {
              padding: 8rem 4rem;
            }
          }
          
          .bg-black {
            background-color: #0a0a0a;
            color: #fafaf8;
          }
          
          .bg-beige {
            background-color: #f5f1ed;
          }
          
          .text-gold {
            color: #d4a574;
          }
          
          .text-white {
            color: #fafaf8;
          }
          
          .shadow-luxury {
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          }
          
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-slide-in-up {
            animation: slideInUp 0.6s ease-out forwards;
          }
          
          img {
            max-width: 100%;
            height: auto;
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
