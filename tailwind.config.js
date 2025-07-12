/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          0: '#1C232B',
          1: '#6C7289',
        },
        secondary: {
          500: '#3D8168',
          700: '#1A4032',
        },
        surface: {
          0: '#F2EAE2',
          1: '#FFFFFF',
        },
      },
    },
    fontSize: {
      preset1: ['2rem', { lineHeight: '100%', letterSpacing: '0px' }],
      preset2: ['0.875rem', { lineHeight: '110%', letterSpacing: '0px' }],
      preset3: ['0.875rem', { lineHeight: '160%', letterSpacing: '0px' }],
      preset4: ['0.75rem', { lineHeight: '120%', letterSpacing: '0.3125rem' }],
      preset5: ['0.8125rem', { lineHeight: '120%', letterSpacing: '0px' }],
    },
    fontFamily: {
      fraunces: ['Fraunces', 'serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}
