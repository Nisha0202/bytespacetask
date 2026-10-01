import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#0038E0", dark: "#002BB0", soft: "#E8EDFF" },
        lime: { DEFAULT: "#D2F81C", dark: "#B9DE0A" },
        ink: "#1C1C1E",
      },
      fontFamily: {
        heading: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Plus Jakarta Sans Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px rgba(10, 30, 90, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
