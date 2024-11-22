import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
    },
    container: {
      center: "true",
      padding: "1rem",
      screens: {
        xs: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1332px",
        "2xl": "1332px",
      },
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: "#0000ff",
          light: "#4169e1",
        },
        red: "#f25252",
        green: "#5ceb51",
      },
      fontFamily: {
        manrope: "Manrope",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
