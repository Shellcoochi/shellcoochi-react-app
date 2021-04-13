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
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          {
            //配置CSS module
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path][name]-[local]-[contenthash:base64:5]", //自定义模块化的类名
            },
          },
          { loader: "less-loader" },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",//解决html模板图片图片引用问题
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
    path: path.resolve(__dirname, "../../dist"),
    publicPath: "/",
    filename: "bundle.[contenthash:8].js", //通过哈希值解决JS缓存问题(在没有修改JS要打包的内容时，不会重新打包一个JS文件)
  },
};
