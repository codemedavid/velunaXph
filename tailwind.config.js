/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft Luxury Peptide Wellness Theme
        'theme-bg': '#FFFFFF',        // Pure white background
        'theme-text': '#3B2A6F',      // Deep Purple (headings)
        'theme-accent': '#B9A7D3',    // Lavender Purple (primary)
        'theme-accent-hover': '#3B2A6F', // Deep Purple for hover
        'theme-secondary': '#FAF7F5', // Soft off-white (UI backgrounds)
        'text-secondary': '#5A4A7A',  // Muted purple (body text)

        // Lavender scale (primary brand color)
        lavender: {
          50: '#F5F2F9',
          100: '#EBE5F3',
          200: '#D9CEE6',
          300: '#C7B7D9',
          400: '#B9A7D3',  // Primary lavender
          500: '#A08BC4',
          600: '#8A73B3',
          700: '#6F5A96',
          800: '#554378',
          900: '#3B2A6F',  // Deep purple
        },
        // Magenta kept for backward compatibility, mapped to lavender
        magenta: {
          50: '#F5F2F9',
          100: '#EBE5F3',
          200: '#D9CEE6',
          300: '#C7B7D9',
          400: '#B9A7D3',
          500: '#A08BC4',
          600: '#8A73B3',
          700: '#6F5A96',
          800: '#554378',
          900: '#3B2A6F',
        },
        // Primary scale mapped to lavender
        primary: {
          50: '#F5F2F9',
          100: '#EBE5F3',
          200: '#D9CEE6',
          300: '#C7B7D9',
          400: '#B9A7D3',
          500: '#A08BC4',
          600: '#8A73B3',
          700: '#6F5A96',
          800: '#554378',
          900: '#3B2A6F',
        },
        // Blush Pink (secondary wellness color)
        blush: {
          50: '#FEF2F4',
          100: '#FDCDD4',
          200: '#F9A8B5',
          300: '#F28C99',  // Main blush
          400: '#E87585',
          500: '#D65F71',
          600: '#C24A5E',
          700: '#A3374B',
          800: '#832839',
          900: '#641C2A',
        },
        // Soft Gold (accent for vitality/premium)
        gold: {
          50: '#FEFAED',
          100: '#FCF0C8',
          200: '#FAE5A3',
          300: '#F8DA7E',
          400: '#F6C453',  // Main gold
          500: '#E5B23D',
          600: '#C9962E',
          700: '#A87A21',
          800: '#875F17',
          900: '#66450F',
        },
        // Beige (warm neutral)
        beige: {
          50: '#FAF7F5',
          100: '#F5EFEA',
          200: '#EDE4DC',
          300: '#E6D2C8',  // Main beige
          400: '#D4BFB3',
          500: '#C2ADA0',
          600: '#A8918A',
          700: '#8E7674',
          800: '#745B5E',
          900: '#5A4248',
        },
        // Accent colors
        accent: {
          light: '#C7B7D9',   // Light lavender
          DEFAULT: '#B9A7D3', // Lavender
          dark: '#3B2A6F',    // Deep purple
          blush: '#F28C99',   // Blush pink
          gold: '#F6C453',    // Soft gold
          white: '#FFFFFF',
          black: '#3B2A6F',
        },
        // Navy kept for backward compatibility, mapped to deep purple tones
        navy: {
          50: '#F5F2F9',
          100: '#EBE5F3',
          200: '#D9CEE6',
          300: '#C7B7D9',
          400: '#B9A7D3',
          500: '#A08BC4',
          600: '#8A73B3',
          700: '#6F5A96',
          800: '#554378',
          900: '#3B2A6F',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'medium': '0 4px 15px rgba(0, 0, 0, 0.05)',
        'hover': '0 8px 25px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out',
        'slideIn': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
