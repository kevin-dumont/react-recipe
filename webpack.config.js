const path = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");

module.exports = function(env, argv) {
  const base = {
    mode: process.env.NODE_ENV || "production",

    devtool: "cheap-module-eval-source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [new CheckerPlugin()],
  };

  const client = {
    ...base,
    entry: [path.resolve("src", "client", "index.tsx")],
    output: {
      filename: "main.js",
      path: path.resolve(process.cwd(), "dist"),
      publicPath: "/",
    },
    externals: {
      react: "React",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "awesome-typescript-loader",
            },
          ],
        },
      ],
    },
  };

  const server = {
    ...base,
    target: "node",
    entry: ["webpack/hot/dev-server", path.resolve("src", "server", "index.tsx")],
    output: {
      filename: "server.js",
      path: path.resolve(process.cwd(), "dist"),
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "awesome-typescript-loader",
              options: {
                configFileName: "tsconfig-server.json",
              },
            },
          ],
        },
      ],
    },
    plugins: [...base.plugins],
  };

  return [client, server];
};
