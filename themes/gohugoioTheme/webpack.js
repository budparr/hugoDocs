const webpack = require("webpack")
const path = require("path")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports =  env => {
	console.log('NODE_ENV: ', process.env.NODE_ENV); // 'local'
	return {
	mode: "production",
	entry: {
		app: "./assets/index.js"
	},
	output: {		
		path: path.resolve(__dirname, "assets/output"),    
    filename: "js/[name].js", // string
	},
	module: {
		rules: [			
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env"]						
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader"
					}	
					// If you prefer to load CSS in JS, comment out MiniCssExtractPlugin and just use this:
					//"css-loader"	
				]
			},		
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: {							
							publicPath: "/font-files",
							name: '[name][hash].[ext]',
							outputPath: './../../static/font-files/'
							// useRelativePath: true	
						},
					},
				],
			}
		],
	},
	plugins: [		
		new webpack.DefinePlugin({
			ENVIRONMENT: JSON.stringify(process.env.NODE_ENV)
		}),
		new CleanWebpackPlugin(
			[
				"./static/font-files/",				
				"./assets/output",
			],

			{
				root: __dirname,
				verbose: true,
				dry: false,
				allowExternal: true,
			}
		),
		new MiniCssExtractPlugin({
			filename: `./fonts/fonts.css`
		})	
	],
	}
	
}