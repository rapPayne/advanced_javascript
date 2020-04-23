module.exports = {
  entry: './index.ts',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
};