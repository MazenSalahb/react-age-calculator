import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-age-calculator",
  plugins: [
    react(),
    VitePWA({
      manifest: {
        publicPath: "/react-age-calculator/",
        name: "Age calculator",
        description: "an app that calculate your age.",
        icons: [
          {
            src: "/react-age-calculator/favicon.png", // Changed the path to the icon
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      registerType: "prompt",
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
