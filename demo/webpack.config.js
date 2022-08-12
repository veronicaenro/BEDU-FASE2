const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    // configuracion de entrada y salida del bundle
    entry:{
        bundle: './src/js/index.js'
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
             // cargando assets
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: './src/index.html',
        })
    ],
    // Server
    devServer: {
        static:{
            directory: path.resolve(__dirname, 'dist')
        },
        port:3000,
        open:true,
        hot: true
    }
}
