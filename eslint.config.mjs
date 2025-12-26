import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import js from "@eslint/js";

export default defineConfig([
  globalIgnores(["**/*.js", "**/*.mjs", "**/*.cjs"]),
  {
    extends: [js.configs.recommended, ...nextCoreWebVitals],
  }
]);
