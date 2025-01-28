const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './scripts/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'), 
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.GITHUBTOKEN': JSON.stringify(process.env.GITHUBTOKEN),
      'process.env.APIKEY': JSON.stringify(process.env.APIKEY),
      'process.env.SERVICEKEY': JSON.stringify(process.env.SERVICEKEY),
      'process.env.TEMPLATEKEY': JSON.stringify(process.env.TEMPLATEKEY),
      'process.env.SO_APIKEY': JSON.stringify(process.env.SO_APIKEY),
    }),
  ],
};
