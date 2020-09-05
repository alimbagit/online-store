const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.html/,
        use: ['html-loader']
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: '/node_modules/',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: "ts-loader",
            options: { configFile: path.resolve(__dirname, "tsconfig.json") },
          },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/index.html",
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 7700,
    historyApiFallback: true,
  },
};
