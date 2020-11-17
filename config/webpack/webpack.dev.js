const path = require("path");
const webpack = require("webpack");
const pkg = require('../../package.json');
const {merge} = require('webpack-merge')
const common = require('./webpack.config.js')


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "../../public/"),
        port: 8088,
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
})
