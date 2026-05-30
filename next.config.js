/** @type {import('next').NextConfig} */

const nextConfig = {
  // React production mode
  reactStrictMode: true,

  // Image optimization for Vercel
  images: {
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'images.pixabay.com',
      'cdn.example.com',
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheValidationSeconds: 60 * 60 * 24 * 365,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // SWC minification (faster builds)
  swcMinify: true,

  // Compression
  compress: true,

  // Powering the type checking (disabled in build for speed)
  typescript: {
    tsconfigPath: './tsconfig.json',
  },

  // ESLint configuration
  eslint: {
    dirs: ['src', 'app', 'pages'],
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },

  // Custom headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https:;",
          },
        ],
      },
      // Cache static assets
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache images
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Rewrites
  async rewrites() {
    return {
      beforeFiles: [
        // For API routes if needed
      ],
    };
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    return config;
  },

  // Performance optimizations
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'gsap'],
  },

  // Production source maps (set to false for smaller bundle)
  productionBrowserSourceMaps: false,

  // Generate ETags for static files
  generateEtags: true,

  // PoweredBy header removal (security)
  poweredByHeader: false,

  // Trailing slash configuration
  trailingSlash: false,

  // Strict mode for development
  strictMode: true,
};

module.exports = nextConfig;

