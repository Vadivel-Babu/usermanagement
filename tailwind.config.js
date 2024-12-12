import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AD8EDD",
        secondary: "#BEFB7A",
        "light-secondary": "#e7ffc9",
      },
      backgroundImage: {
        "my-gradient": "linear-gradient(102deg, #BEFB7A 5.11%, #d1ffb0 100%)",
        gradient:
          "linear-gradient(87deg, rgba(194,255,0,0.06214985994397759) 67%, rgba(224,255,34,0.5) 100%)",
      },
      "mobile-gradient":
        "linear-gradient(150deg, rgba(194,255,0,0.06214985994397759) 67%, rgba(224,255,34,0.5) 100%)",
    },
  },
  plugins: [nextui()],
};
