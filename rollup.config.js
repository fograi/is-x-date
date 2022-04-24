import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import packageJson from "./package.json";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
export default {
  input: "./src/is-x-date.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
    {
      file: packageJson.browser,
      format: "umd",
      name: "IsXDate",
      noConflict: true,
      banner: ";",
    },
  ],
  plugins: [commonjs(), typescript(), terser(), filesize()],
};
