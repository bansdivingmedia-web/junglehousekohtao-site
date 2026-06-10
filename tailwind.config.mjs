export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        jungle: "#11100f",
        moss: "#6f7568",
        sand: "#d8c6a4",
        cream: "#f8f3ea",
        linen: "#fffdf8",
        terracotta: "#9d6148",
        gold: "#b99a64",
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
