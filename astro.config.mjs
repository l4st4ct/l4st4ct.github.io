// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://l4st4ct.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
