/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        blackish: "#0B0A0C",
        yellowish: "#FEFFE8",
      },
    },
  },
  plugins: [],
};
