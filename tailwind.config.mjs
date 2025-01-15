/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // colors: {
    // 	'background': '#f9f9f9',
    //   'blue': {
    //     regular: "#24294F",
    //     lighter: "#284B63",
    //   },
    //   'red': "#812B1E",
    //   'pink': "#721C9",
    //   'purple': "#4A3CBB",
    //   'green': "#385C45",
    // },
    fontFamily: {
      sans: [
        "Inter light",
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
        background: "#f9f9f9",
        blue: {
          regular: "#24294F",
          lighter: "#284B63",
        },
        red: "#812B1E",
        pink: "#721C9",
        purple: "#4A3CBB",
        green: "#385C45",
      },
    },
  },
  plugins: [],
};
