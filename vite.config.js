import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Optional alias for cleaner imports
    },
  },
  build: {
    assetsInlineLimit: 0, // Ensure assets are not inlined as base64
  },
});
