module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "./bundled/bundle.js"
    },
module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
}
};