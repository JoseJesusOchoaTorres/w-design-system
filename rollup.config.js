import dts from "rollup-plugin-dts";

import packageJson from "./package.json" assert { type: "json" };

import { folderBuilds, plugins } from "./rollup-scripts.js";

export default [
  {
    input: "src/index.ts",
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
    ],
    plugins: plugins,
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.(css|less|scss)$/],
    plugins: [dts()],
  },
  ...folderBuilds,
];
