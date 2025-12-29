import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/CV/",
  plugins: [react()],
  server: {
    allowedHosts: [".ngrok-free.dev"],
  },
  publicDir: "public",
});
