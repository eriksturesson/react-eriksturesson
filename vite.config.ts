import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Byggmappen (som tidigare var "build" i CRA)
  },
});
