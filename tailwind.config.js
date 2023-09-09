/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    xs: "375px",
    // => @media (min-width: 640px) { ... }

    sm: "480px",
    // => @media (min-width: 640px) { ... }

    md: "640px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }

    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },

    extend: {
      colors: {
        Primary: "hsl(180, 66%, 49%)",
        DViolet_900: "hsl(257, 27%, 26%)",
        Secondary: "hsl(0, 87%, 67%)",
        Gray_10: "hsl(0, 0%, 75%)",
        GViolet_50: "hsl(257, 7%, 63%)",
        DBlue_900: "hsl(255, 11%, 22%)",
        DViolet_900: "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
};
