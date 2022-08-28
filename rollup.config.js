import commonjs from "@rollup/plugin-commonjs"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"
import css from "rollup-plugin-import-css"

const mainInput = "src/lib/index.js"

const mainExternal = ["react", "prop-types"]

const mainPlugins = [
  commonjs({ include: /node_modules/ }),
  babel({ babelHelpers: "bundled" }),
  nodeResolve({
    moduleDirectories: ["node_modules", "src/lib"],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  }),
]

const esmBuildPlugins = [
  ...mainPlugins,
  css({
    output: "style.css",
  }),
]

const config = [
  {
    input: mainInput,
    output: {
      file: "dist/index.js",
      format: "esm",
      globals: {
        react: "React",
        "prop-types": "PropTypes",
      },
    },
    external: mainExternal,
    plugins: esmBuildPlugins,
  },
]

export default config
