/** @type {import('tailwindcss').Config} */
export default {
  //configure files to scan for Tailwind classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", //include all relevant files in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
