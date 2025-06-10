import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      Authentication: path.resolve(__dirname, "./src/Authentication"),
      Routes: path.resolve(__dirname, "./src/Routes"),
      Components: path.resolve(__dirname, "./src/Components"),
      Configs: path.resolve(__dirname, "./src/Configs"),
      Layout: path.resolve(__dirname, "./src/Layout"),
      Mock: path.resolve(__dirname, "./src/Mock"),
      Pages: path.resolve(__dirname, "./src/Pages"),
      Resources: path.resolve(__dirname, "./src/Resources"),
      Schemas: path.resolve(__dirname, "./src/Schemas"),
      Services: path.resolve(__dirname, "./src/Services"),
      NotFound: path.resolve(__dirname, "./src/NotFound"),
      Router: path.resolve(__dirname, "./src/Router"),
    },
  },
});
