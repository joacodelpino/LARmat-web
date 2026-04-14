/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f24a49',
        secondary: '#000000',
        accent: '#74020c',
        neutral: '#f2c979',
      },
      fontFamily: {
        heavy: ['"Franklin Gothic Heavy"', 'sans-serif'],
        medium: ['"Franklin Gothic Medium"', 'sans-serif'],
        book: ['"Franklin Gothic Book"', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'marquee': 'marquee 35s linear infinite',
        'ambient-orbit': 'ambientOrbit 11s ease-in-out infinite',
        'ambient-orbit-alt': 'ambientOrbitAlt 15s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.35s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.35s ease-out forwards',
        'card-nudge': 'cardNudge 0.3s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        cardNudge: {
          '0%':   { transform: 'scale(1)' },
          '40%':  { transform: 'scale(0.97)' },
          '100%': { transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        ambientOrbit: {
          '0%':   { transform: 'translate(0px, 0px) scale(1)' },
          '20%':  { transform: 'translate(220px, -90px) scale(1.12)' },
          '45%':  { transform: 'translate(400px, 60px) scale(0.93)' },
          '65%':  { transform: 'translate(260px, 150px) scale(1.07)' },
          '85%':  { transform: 'translate(70px, 100px) scale(0.96)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        ambientOrbitAlt: {
          '0%':   { transform: 'translate(0px, 0px) scale(1)' },
          '15%':  { transform: 'translate(-180px, 60px) scale(0.92)' },
          '40%':  { transform: 'translate(-320px, -80px) scale(1.1)' },
          '70%':  { transform: 'translate(-120px, -140px) scale(0.97)' },
          '90%':  { transform: 'translate(60px, -60px) scale(1.05)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
