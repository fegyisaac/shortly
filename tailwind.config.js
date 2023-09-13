/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {

      "xs": "375px",
      "sm": "480px",
      "md": "640px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },

    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        Primary: "hsl(180, 66%, 49%)",
        Primary_10: "hsl(180, 74%, 64%)",
        DViolet_600: "hsl(257, 27%, 26%)",
        Secondary: "hsl(0, 87%, 67%)",
        Gray_10: "hsl(0, 0%, 89%)",
        Gray_40: "hsl(0, 0%, 70%)",
        Gray_60: "hsl(0, 0%, 51%)",
        GViolet_50: "hsl(257, 7%, 63%)",
        DBlue_900: "hsl(255, 11%, 22%)",
        DViolet_900: "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
};
