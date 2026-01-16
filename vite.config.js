import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5049,
    proxy: {
      "/api": {
        target: "httpshttp://localhost:5049",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
