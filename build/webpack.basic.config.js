const path = require("path");
const DIST_PATH = path.resolve(__dirname,"../dist");
const APP_PATH = path.resolve(__dirname,"../src");
const EXCLUDE_PATH = path.resolve(__dirname,"../node_modules");

module.exports = {
	entry:{
		app:"./src/app.js"
	},
	output:{
		filename:"js/build.js",
		path:DIST_PATH
	},
	module:{
		rules:[
			{
				test:/\.jsx?$/,
				use:[
					{loader:"babel-loader"}
				],
				exclude:EXCLUDE_PATH,
				include:APP_PATH,        
			}
            
		]
	}
};