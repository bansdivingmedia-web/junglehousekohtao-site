export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        jungle: "#153b2d",
        moss: "#64715f",
        sand: "#d8c6a4",
        cream: "#fbf7ed",
        linen: "#fffdf8",
        terracotta: "#b56443",
        gold: "#c29a56",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 22px 60px rgba(24, 58, 45, 0.12)",
      },
    },
  },
  plugins: [],
};
