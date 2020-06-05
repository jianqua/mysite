const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.html/,
        use: [
          {
            loader: 'html-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: false,
              name: '[sha512:hash:base64:7].[ext]',
              outputPath: 'img/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin({
      filename: 'css/[name].[hash].css'
    }),
    new HtmlWebpackPlugin({
      title: '首页',
      filename: 'index.html',
      template: 'src/template/index.html'
    }),
    new HtmlWebpackPlugin({
      title: '日志',
      filename: 'articles.html',
      template: 'src/template/articles.html'
    }),
    new HtmlWebpackPlugin({
      title: '日志详情',
      filename: 'article.html',
      template: 'src/template/article.html'
    }),
    new HtmlWebpackPlugin({
      title: '演示',
      filename: 'demos.html',
      template: 'src/template/demos.html'
    }),
    new HtmlWebpackPlugin({
      title: '关于',
      filename: 'about.html',
      template: 'src/template/about.html'
    })
  ]
}
