/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#44403c",

          "secondary": "#9ca3af",

          "accent": "#d1d5db",

          "neutral": "#1f2937",

          "base-100": "#9ca3af",

          "info": "#111827",

          "success": "#f5f5f4",

          "warning": "#78716c",

          "error": "#4b5563",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

