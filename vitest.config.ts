import { fileURLToPath, URL } from "url";
import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
    },
  },
  resolve: {
    alias: [
      {
        find: "~/",
        replacement: fileURLToPath(new URL("./src/", import.meta.url)),
      },
    ],
  },
});
