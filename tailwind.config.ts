import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        default: {
          blue: { 50: '#60A5FA' },
        },
        purple: {
          15: '#E3E0FB',
          30: '#BFB9F1',
          40: '#A9A1ED',
          60: '#6050D7',
          70: '#3B28CC',
          80: '#2E1DA4',
        },
        black: {
          30: '#E5E7EB',
          90: '#1F2937',
          95: '#45454A',
          99: '#0F0F10',
        },
        gray: {
          100: '#F9FAFB',
          200: '#F3F4F6',
          300: '#E5E7EB',
          500: '#9CA3AF',
          600: '#6B7280',
          800: '#374151',
          900: '#1F2937',
          990: '#111827',
        },
        primary: {
          purple: {
            5: '#F8F7FF',
            10: '#F1F0FF',
            20: '#D4D0F6',
            40: '#A9A1ED',
            45: '#F8F7FF',
            50: '#8479E2',
            60: '#6050D7',
            70: '#3B28CC',
            80: '#2E1DA4',
          },
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'go-down': {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(1000px)' },
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
        'border-beam-reverse': {
          '0%': {
            'offset-distance': '100%',
          },
          '100%': {
            'offset-distance': '0',
          },
        },
        'spin-around': {
          // '0%': {
          //   transform: 'translateZ(0) rotate(0)',
          // },
          // '15%, 35%': {
          //   transform: 'translateZ(0) rotate(90deg)',
          // },
          // '65%, 85%': {
          //   transform: 'translateZ(0) rotate(270deg)',
          // },
          '100%': {
            // transform: 'translateY(100%)',
          },
        },
        slide: {
          to: {
            // transform: 'translate(calc(100cqw - 100%), 0)',
          },
        },
      },
      animation: {
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-show': 'fade-show 0.5s ease-out',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        slide: 'slide var(--speed) ease-in-out infinite alternate',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '2-356': 'repeat(2, minmax(0, 356px))',

        // Complex site-specific column configuration
        footer: '200px minmax(900px, 1fr) 100px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
