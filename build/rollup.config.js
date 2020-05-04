import commonjs from "rollup-plugin-commonjs"; // Convert CommonJS modules to ES6
import copy from "rollup-plugin-copy";
import vue from "rollup-plugin-vue"; // Handle .vue SFC files
import buble from "rollup-plugin-buble"; // Transpile/polyfill with reasonable browser support

export default {
  input: "src/plugin.js",
  external: ["vue"],
  output: {
    name: "VueKaiUI",
    exports: "named",
    globals: {
      vue: "Vue",
    },
  },
  plugins: [
    commonjs(),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function
    }),
    buble(),
    copy({
      targets: [{ src: "src/assets", dest: "dist" }],
    }),
  ],
};
