/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "segoe ui",
        "Roboto",
        "helvetica neue",
        "Arial",
        "sans-serif",
      ],
      serif: ["Patua One", "serif"],
      mono: [
        "Menlo",
        "Consolas",
        "Monaco",
        "Liberation Mono",
        "Lucida Console",
        "monospace",
      ],
    },
    extend: {
      colors: {
        // background: "#f9f9f9",
        generalBlue: "#24294F",
        generalBlueLight: "#284B63",
        about: "#812B1E",
        book: "#721C99",
        music: "#4A3CBB",
        blog: "#385C45",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
