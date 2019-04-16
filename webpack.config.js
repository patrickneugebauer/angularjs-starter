// typescript setup
// https://webpack.js.org/guides/typescript/

// webpack-dev-server setup
// https://webpack.js.org/configuration/dev-server/

// plugin to copy index.html form src -> dist
// https://webpack.js.org/plugins/copy-webpack-plugin/

// add path aliases in typescript
// https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping

// add path aliases in webpack
// https://webpack.js.org/configuration/resolve/#resolvealias

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
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      "@app": path.resolve(__dirname, 'src/app'),
      "@components": path.resolve(__dirname, 'src/components/components'),
      "@features": path.resolve(__dirname, 'src/features/features'),
      "@services": path.resolve(__dirname, 'src/services/services'),
    }
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
