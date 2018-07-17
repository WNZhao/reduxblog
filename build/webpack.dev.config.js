const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const baseWebpackconfig = require("./webpack.basic.config");
const webpack = require("webpack");
const path = require("path");

module.exports = merge(baseWebpackconfig,{
	mode:"development",
	output:{
		filename:"js/[name].[hash:8].js"
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:"./index.html",
			inject:"body",
			/* minify:{
				html5:true
			}, */
			hash:false
		}),
		/* new CleanWebpackPlugin(['../dist'],{
			allowExternal:true
		}), */
		new webpack.HotModuleReplacementPlugin()
	],
	devServer:{
		port:"8080",
		historyApiFallback:true,
		hot:true,
		// https:true,
		open:true,
		noInfo:true,
		proxy:{}
	}
});