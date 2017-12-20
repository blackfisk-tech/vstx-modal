const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  externals: {
    lodash: 'lodash'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'vstx-modal.min.js',
      libraryTarget: 'window',
      library: 'vstxModal',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/vstxModal.vue'),
    output: {
      filename: 'vstx-modal.js',
      libraryTarget: 'umd',
      library: 'vstxModal',
      umdNamedDefine: true
    }
  })
];