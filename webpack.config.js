// https://webpack.js.org/guides/typescript/
// https://webpack.js.org/configuration/dev-server/
// https://webpack.js.org/plugins/copy-webpack-plugin/

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    new CopyPlugin([
      { from: 'src/index.html', to: 'index.html' }
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080
  }
};
