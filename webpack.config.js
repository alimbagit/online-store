const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "index.tsx"),

  },


  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".ts", ".tsx", ".scss", ".png", ".jpg"],
    modules: ["node_modules", path.resolve(__dirname, "src")],
  },
  module: {
    rules: [
      {
        test: /\.html/,
        use: ["html-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "ts-loader",
            options: { configFile: path.resolve(__dirname, "tsconfig.json") },
          },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              esModule:false
            }
          },
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/index.html",
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    host: '0.0.0.0',
    port: 7700,
    historyApiFallback: true,
  },
};
