var webpack = require('webpack');

module.exports = {
	entry:'./app.js',
	output:{
		path:__dirname,
		filename:'bundle.js'
	},
	devServer:{
		historyApiFallback:true,
		hot:true,
		inline:true
	},

	module:{
		loaders:[
			{
				test:/\.jsx?$/,
				loader:'babel-loader',
				exclude:/node_modules/,
				query:{
					presets:['react','es2015']
				}
			},
			{
				test:/\.css$/,
				loaders:['style-loader','css-loader'],
			}
		],
		
	},

	plugins:[
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings:false
			}
		})
	],
	resolve:{
		extensions:['.js','.jsx']
	}
}