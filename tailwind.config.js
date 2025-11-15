/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF9900',      // AWS Orange
        secondary: '#232F3E',    // AWS Dark Blue
        accent: '#146EB4',       // AWS Light Blue
        text: {
          DEFAULT: '#16191F',    // Dark text
          light: '#687078',      // Light text
        },
        background: '#FFFFFF',   // White background
        surface: '#F7F9FA',      // Light gray surface
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
