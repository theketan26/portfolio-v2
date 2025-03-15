/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      '**/*.{js,ts,jsx,tsx,mdx}',
      '**/*.{js,ts,jsx,tsx,mdx}',
      '**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 8s linear infinite',
          'float': 'floating 6s ease-in-out infinite',
          'float-delay': 'floating 8s ease-in-out 2s infinite',
          'float-slow': 'floating 10s ease-in-out 1s infinite',
          'blink': 'blinking 1s step-end infinite',
        },
        keyframes: {
          floating: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-15px)' },
          },
          blinking: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0' },
          },
        },
      },
    },
    plugins: [],
  }