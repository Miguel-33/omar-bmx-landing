// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-blue": "#00d4ff",
        "neon-green": "#00ff87",
        "neon-purple": "#9b00ff",
      },
      boxShadow: {
        neon: "0 0 20px rgba(0, 212, 255, 1), 0 0 30px rgba(0, 212, 255, 0.5)",
      },
      spacing: {
        "spacing-8": "8px",
        "spacing-16": "16px",
      },
    },
  },
  plugins: [],
};
