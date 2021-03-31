const path = require("path");
const webpack = require("webpack");
const pkg = require("../../package.json");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const portfinder = require("portfinder");

const { DEV_SERVER_PORT } = require("../env");

const devConfig = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../../public/"),
    port: DEV_SERVER_PORT,
    publicPath: "/dist/",
    hot: true,
    after() {
      console.log(`
			 
===================================
      ${pkg.description} 项目
-----------------------------------
===================================
      `);
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = DEV_SERVER_PORT;
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err);
    } else {
      devConfig.devServer.port = port;
      console.log("项目端口号：" + port);
      resolve(devConfig);
    }
  });
});
