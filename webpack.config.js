const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path");

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'app.bundle.js'
  },
    // PATH RESOLVE
  resolve: {
      extensions: ['.js', '.json', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  //DEV SERVER ENTRY POINT
  // devServer: {
  //   contentBase: path.resolve(__dirname, "./src"),
  //   port: 3500,
  //   watchContentBase: true,
  //   open: true
  // }
}
