import commonjs from "@rollup/plugin-commonjs"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"
import css from "rollup-plugin-import-css"

const globalePlugins = [
  commonjs({ include: /node_modules/ }),
  babel({ babelHelpers: "bundled" }),
  nodeResolve({
    moduleDirectories: "node_modules",
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  }),
  css({
    output: "style.css",
  }),
]

const config = {
  input: "src/lib/index.js",
  output: [
    {
      file: "dist/umd/index.js",
      format: "umd",
      name: "signedA.Modal",
      globals: {
        react: "React",
        "prop-types": "PropTypes",
      },
    },
    {
      file: "dist/index.js",
      format: "esm",
      name: "signedA.Modal",
      globals: {
        react: "React",
        "prop-types": "PropTypes",
      },
    },
  ],
  external: ["react", "prop-types"],
  plugins: globalePlugins,
}

export default config
