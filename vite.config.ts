import fs from "fs";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      // Begränsa max antal samtidiga async fs-operations (t.ex. 10)
      maxParallelFileOps: 10,
    },
  },
});
