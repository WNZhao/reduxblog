const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.basic.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(baseWebpackConfig,{
	mode:"production",
	entry:{
		app:"./src/app.js",
		framework:["react","react-dom","react-router-dom"]
	},
	output:{
		filename:"js/[name].[chunkhash:8].js"
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:"./index.html",
			inject:"body",
			minify:{
				removeComments:true,
				collapseWhitespace:false,
				removeAttributeQuotes:true
			}
		}),
		new CleanWebpackPlugin(["../dist"],{allowExternal:true})
	],
	optimization:{
		//代码抽离
		splitChunks:{
			chunks:"all",
			minChunks:1,
			minSize:0,
			cacheGroups:{
				framework:{
					test:"framework",
					name:"framework",
					enforce:true
				}
			}
		}
	}
});