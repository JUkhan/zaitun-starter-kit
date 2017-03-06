var path=require('path');
var webpack = require('webpack');
var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';
var entry = PRODUCTION
	?	[
			'./src/main.js'
		]
	:	[
			'./src/main.js',
			'webpack/hot/dev-server',
			'webpack-dev-server/client?http://localhost:8080'
		];

var plugins = PRODUCTION
	? 	[
			 new webpack.optimize.UglifyJsPlugin(),
			// new ExtractTextPlugin('style-[contenthash:10].css'),
			// new HTMLWebpackPlugin({
			// 	template: 'index-template.html'
			// })
		]
	: 	[
			new webpack.HotModuleReplacementPlugin()
		];
plugins.push(
	new webpack.DefinePlugin({
		DEVELOPMENT: JSON.stringify(DEVELOPMENT),
		PRODUCTION: JSON.stringify(PRODUCTION)
	})
);
module.exports={
	devtool: 'source-map',
    entry:entry,
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel-loader'],
			exclude: /node_modules/
		},
		//  {
		// 	test: /\.(png|jpg|gif)$/,
		// 	loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]'],
		// 	exclude: /node_modules/
		// }, {
		// 	test: /\.css$/,
		// 	loaders: cssLoader,
		// 	exclude: /node_modules/
		// }
		]
	},
    output:{
        path:path.join(__dirname, 'dist'),
        publicPath:'/dist/',
        filename:'bundle.js'
    },
    plugins:plugins
}