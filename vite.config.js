import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/TaskFlow-PWA/",

  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",

      manifest: {
        name: "TaskFlow PWA",
        short_name: "TaskFlow",
        description: "Task Management Progressive Web App",

        theme_color: "#16a34a",
        background_color: "#166534",

        display: "standalone",
        orientation: "portrait",

        start_url: "./",
        scope: "./",

        icons: [
          {
            src: "icons/icon-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icons/icon-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,ico}"]
      }
    })
  ]
});