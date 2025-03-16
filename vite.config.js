import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import * as sass from "sass";

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     preprocessorOptions: {
//       scss: {
//         implementation: sass, // ✅ Force modern Dart Sass
//         additionalData: `@use "./src/styles/_variables.scss" as *;`,
//       },
//     },
//   },
// });
