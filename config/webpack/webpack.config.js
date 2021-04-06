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
        use: [
          { loader: "style-loader" },
          {
            //配置CSS module
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path][name]-[local]-[hash:base64:5]", //自定义模块化的类名
            },
          },
        ],
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
    filename: "bundle.[hash:8].js",
  },
};
