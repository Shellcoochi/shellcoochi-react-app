const path = require("path");
const webpack = require("webpack");
const pkg = require("../../package.json");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const portfinder = require("portfinder");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const inquirer = require("inquirer");
const { DEV_SERVER_PORT } = process.env;

const devConfig = merge(common, {
  mode: "production",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../../dist"),
    port: DEV_SERVER_PORT,
    publicPath: "/",
    compress: true,
    historyApiFallback: true, //刷新或者手动输入路由地址时，会报 Cannot GET /detail,设置为true
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(), //通过clean-webpack-plugin插件删除输出目中之前旧的文件
    new HtmlWebpackPlugin({
      template: "./public/index.html", //使用自定义HTML模板
      inject: true, //true或者'body'：所有JavaScript资源插入到body元素的底部,'head': 所有JavaScript资源插入到head元素中,false： 所有静态资源css和JavaScript都不会注入到模板文件中
      // 压缩html代码
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true,
      },
    }), //此插件运行build命令可在输出路径下生成index.html文件，需注意此插件与webpack的版本对应关系
    new MiniCssExtractPlugin(),
  ],
});

module.exports = devConfig;
