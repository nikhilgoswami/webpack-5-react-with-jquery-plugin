const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [webpackNodeExternals()],
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
            ],
          },
        },
      },
      
    ],
  },
};
