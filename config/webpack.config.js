const path = require("path");
const webpack = require("webpack");
const portfinder = require('portfinder');
const pkg = require('../package.json');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "../dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devtool: 'inline-source-map', 
  devServer: {
    contentBase: path.resolve(__dirname, "../public/"),
    port: new Promise((resolve, reject) => {
      portfinder.getPort({port: 3000,stopPort: 9999 }, (err, port) => {
        if (port!=3000){
          console.log('3000端口已被占用，正在使用：' + port+'端口启动程序')
          resolve(port);
        }else{
          reject(3000)
        }
      })
    }),
    publicPath: "/dist/",
    hot: true,
	after(){
		     console.log(`
			 
===================================
      ${pkg.description} 项目
-----------------------------------
===================================
      `);
	}
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};