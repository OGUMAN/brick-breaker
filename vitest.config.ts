// vitest.config.ts
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname), // або path.resolve(__dirname, 'src') якщо у тебе є src/
      "@": path.resolve(__dirname), // або path.resolve(__dirname, 'src') якщо у тебе є src/
    },
  },
});
