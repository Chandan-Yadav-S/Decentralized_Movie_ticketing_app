/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000", // Black background
        purple: "#6c5ce7", // Soft purple
        pink: "#fd79a8", // Pinkish shade
        darkPurple: "#1e1e2e", // Dark purple
        lightPink: "#ffcccc", // Light pink for highlights
        purpleHover: "#5a4cc9", // Slightly darker purple for hover effects
        darkGray: "#121212", // Dark gray for subtle accents
      },
      boxShadow: {
        purpleGlow: "0 4px 10px rgba(108, 92, 231, 0.4)", // Custom purple glow shadow
        pinkGlow: "0 4px 10px rgba(253, 121, 168, 0.4)", // Custom pink glow shadow
      },
      spacing: {
        128: "32rem", // Extended spacing for large layouts
        144: "36rem",
      },
      fontSize: {
        xxs: "0.65rem", // Extra small font size
      },
      animation: {
        bounceSlow: "bounce 2s infinite", // Slower bounce animation
      },
    },
  },
  plugins: [],
};
