/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 0 20px 3px rgb(0 0 0 / 5%)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      card: '0 0 30px 0 rgba(0,0,0,.11)'
    },
    extend: {
      screens: {
        '3xl': '1786px',
      },
      colors: {
        'bleue-karoy': {
            '10': '#f4fbfe',
            '30': '#bdedfc',
            '40' : '#80a1b8',
            '50': '#1880ae',
            //'50': '#004271',
            // '100': '#190f3c',
            //'100': '#192850',
            '100': '#004271', 
        },
        'second': {
          '10': '#F1F5F9',
          '20': '#E2E8F0', 
          '30': '#bdedfc',
          //'50' : '#0197c8',
          '50': '#57adbf',
          // '100': '#190f3c',
          //'100': '#192850',
          '100': '#004271',
        },
        'categorie': {
          '2': '#139855'
        }
      },
      boxShadow: {
        karoy: '0 0 20px 3px rgb(0 0 0 / 5%)'
      },
      fontFamily: {
        sans: ['var(--font-work)']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.red.700'),
            h1: {
              color: theme('colors.red.800'),
            },
            h3: {
              color: theme('colors.gray.800'),
            },
            strong: {
              color: theme('colors.gray.800'),
            },
            a: {
              color: theme('colors.green.500'),
              '&:hover': {
                color: theme('colors.green.600')
              },
            },
          },
        },
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
}
