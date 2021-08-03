const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { dirname } = require('path')

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'build'),
        filename:'build.js',
        publicPath: '/'
    },
    resolve:{
        extensions:['.js','.jsx'] 
    },
    module: {
        rules:[
            {
                test:/\.(js|jsx)/,
                exclude:/node_modules/,
                use: {
                    loader:'babel-loader'
                }
            },
            {
                test:/\.html/,
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            },
            {
                test:/\.(s*)css/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase:'./build',
        historyApiFallback: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'./assets/[name].css'
        })
    ]

}
