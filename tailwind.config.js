/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF9900',      // AWS Orange
        secondary: {
          DEFAULT: '#E7EDF3',    // Light text for dark mode
          light: '#C9D1D9',      // For "light" mode
        },
        accent: {
          DEFAULT: '#5BA4E5',    // Lighter blue for dark mode
          light: '#58A6FF',      // For "light" mode
        },
        text: {
          DEFAULT: '#E7EDF3',    // Light text (dark mode)
          light: '#A0AEC0',      // Muted light text
          'less-dark': '#C9D1D9', // For "light" mode
        },
        background: {
          DEFAULT: '#0D1117',    // Dark background
          'less-dark': '#1C2128', // "Light" mode (still dark)
        },
        surface: {
          DEFAULT: '#161B22',    // Dark surface
          'less-dark': '#2D333B', // "Light" mode surface
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        'h1-mobile': '2rem',
        'h1-desktop': '3rem',
        'h2-mobile': '1.5rem',
        'h2-desktop': '2rem',
        'h3-mobile': '1.25rem',
        'h3-desktop': '1.5rem',
      },
      spacing: {
        'section-mobile': '2rem',
        'section-desktop': '4rem',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
