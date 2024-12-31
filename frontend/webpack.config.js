const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js', // точка входа вашего приложения
  output: {
    path: path.resolve(__dirname, './static/frontend'), // папка для выходных файлов
    filename: '[name].js', // имя выходного файла
  },
  module: {
    rules: [
      {
        test: /\.js$/, // обрабатываем файлы .js
        exclude: /node_modules/, // исключаем папку node_modules
        use: {
          loader: 'babel-loader', // используем babel-loader
        },
      },
      {
        test: /\.css$/, // обрабатываем файлы .css
        use: ['style-loader', 'css-loader'], // используем style-loader и css-loader
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // обрабатываем изображения
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // сохраняем оригинальное имя и путь
            },
          },
        ],
      },
    ],
  },
  optimization: {
  minimize: true,
  },
  plugins: [
  new webpack.DefinePlugin({
      "process.env": {
      NODE_ENV: JSON.stringify("development"),
      },
  }),
  ],


};