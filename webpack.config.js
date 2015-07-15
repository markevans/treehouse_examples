module.exports = {
  context: __dirname + "/app",
  entry: "./app.js",

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      }
    ],
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist"
  }
}
