/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#101828",
        darkGray: "#475467",
        gray: "#6C717B",
        red: "#E44848",
        darkRed: "#D84343",
        yellow: "#FFC531",
        lightGray: "#DADDE1",
        silver: "#F2F4F7",
        darkWhite: "#F7F7F7",
        white: "#FFFFFF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: [
          "12px",
          { lineHeight: "18px", letterSpacing: "-0.02em", fontWeight: 400 },
        ],
        sm: [
          "14px",
          { lineHeight: "20px", letterSpacing: "-0.02em", fontWeight: 400 },
        ],
        base: ["16px", { lineHeight: "24px", fontWeight: 500 }],
        lg: [
          "18px",
          { lineHeight: "28px", letterSpacing: "-0.02em", fontWeight: 500 },
        ],
        custom: ["20px", { lineHeight: "1.2", fontWeight: 600 }],
        xl: ["24px", { lineHeight: "32px", fontWeight: 600 }],
        "2xl": [
          "30px",
          { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: 600 },
        ],
        "3xl": [
          "36px",
          { lineHeight: "54px", letterSpacing: "-0.02em", fontWeight: 600 },
        ],
        "4xl": [
          "48px",
          { lineHeight: "32px", letterSpacing: "-0.02em", fontWeight: 600 },
        ],
      },
    },
  },
  plugins: [],
};
