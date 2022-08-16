import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"
import css from "rollup-plugin-import-css"

const basePlugins = [
  babel({ babelHelpers: "bundled" }),
  commonjs(),
  css({
    output: "../styles/style.css",
  }),
  resolve({
    moduleDirectories: "node_modules",
    extensions: ["js", "jsx", "ts", "tsx"],
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
  plugins: basePlugins,
}

export default config
