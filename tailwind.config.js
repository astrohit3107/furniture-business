/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'luxury-white': '#fafaf8',
        'luxury-beige': '#f5f1ed',
        'luxury-black': '#0a0a0a',
        'luxury-gold': '#d4a574',
        'luxury-charcoal': '#3a3a3a',
      },
      fontFamily: {
        'clash': ['Clash Display', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'slide-in-up': 'slideInUp 0.6s ease-out forwards',
        'slide-in-down': 'slideInDown 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'luxury-lg': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'luxury-gold': '0 10px 30px rgba(212, 165, 116, 0.2)',
      },
    },
  },
  plugins: [],
};
