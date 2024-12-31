const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js', // ����� ����� ������ ����������
  output: {
    path: path.resolve(__dirname, './static/frontend'), // ����� ��� �������� ������
    filename: '[name].js', // ��� ��������� �����
  },
  module: {
    rules: [
      {
        test: /\.js$/, // ������������ ����� .js
        exclude: /node_modules/, // ��������� ����� node_modules
        use: {
          loader: 'babel-loader', // ���������� babel-loader
        },
      },
      {
        test: /\.css$/, // ������������ ����� .css
        use: ['style-loader', 'css-loader'], // ���������� style-loader � css-loader
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // ������������ �����������
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // ��������� ������������ ��� � ����
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