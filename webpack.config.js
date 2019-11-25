const path = require("path");

module.exports = function(env, argv) {
  return {
    entry: {
      main: path.resolve("src", "client", "index.ts"),
    },
    mode: process.env.NODE_ENV || "production",
    output: {
      filename: "main.js",
      path: path.resolve(process.cwd(), "dist"),
      publicPath: "/",
    },
    devtool: "cheap-module-eval-source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "ts-loader",
            },
          ],
        },
      ],
    },
  };
};
