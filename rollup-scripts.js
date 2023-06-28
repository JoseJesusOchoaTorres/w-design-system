import generatePackageJson from "rollup-plugin-generate-package-json";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import fs from "fs";

import packageJson from "./package.json" assert { type: "json" };

export const plugins = [
  terser(),
  postcss(),
  resolve(),
  commonjs(),
  typescript({ tsconfig: "tsconfig.json" }),
];

const getFolders = (entry) => {
  const dirs = fs.readdirSync(entry);
  const dirsWithoutIndex = dirs
    .filter((name) => name !== "index.ts")
    .filter((name) => name !== "utils");
  return dirsWithoutIndex;
};

const subfolderPlugins = (folderName) => [
  ...plugins,
  generatePackageJson({
    baseContents: {
      name: `${packageJson.name}/${folderName}`,
      private: true,
      main: "../cjs/index.js",
      module: "./index.js",
      types: "./index.d.ts",
    },
  }),
];

export const folderBuilds = getFolders("./src/components").map((folder) => {
  return {
    input: `src/components/${folder}/index.ts`,
    output: {
      file: `dist/${folder}/index.js`,
      sourcemap: true,
      exports: "named",
      format: "esm",
    },
    plugins: subfolderPlugins(folder),
    external: ["react", "react-dom"],
  };
});
