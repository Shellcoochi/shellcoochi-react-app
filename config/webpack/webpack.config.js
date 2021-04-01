const path = require("path");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      "@src": path.resolve("src"),
      "@component": path.resolve("src/component"),
    },
  },
  output: {
    path: path.resolve(__dirname, "../../dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
};
