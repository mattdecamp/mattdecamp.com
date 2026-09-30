// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      // Example for Local Provider
      provider: fontProviders.local(),
      name: "Chivo",
      cssVariable: "--font-chivo",
      options: {
        variants: [
          {
            weight: "200 400 500 600 800", // String defines the variable range
            style: "normal",
            src: ["./src/assets/fonts/Chivo-VariableFont_wght.ttf"],
          },
        ],
      },
    },
    {
      // Example for Local Provider
      provider: fontProviders.local(),
      name: "Chivo Italic",
      cssVariable: "--font-chivo-italic",
      options: {
        variants: [
          {
            weight: "200 400 500 600 800", // String defines the variable range
            style: "italic",
            src: ["./src/assets/fonts/Chivo-Italic-VariableFont_wght.ttf"],
          },
        ],
      },
    },
  ],
  site: "https://mattdecamp.com",
});