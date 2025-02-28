/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#004a99",
        "secondary": "#e5e7eb",
        "accent": "#60a5fa",
        "neutral": "#d1d5db",
        "base-100": "#ffffff",
        "info": "#3b82f6",
        "success": "#00ff00",
        "warning": "#fff308",
        "error": "#ff0000",
          },
        },
      ],
    },
    plugins: [
      require('daisyui')
    ],
    theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
};
