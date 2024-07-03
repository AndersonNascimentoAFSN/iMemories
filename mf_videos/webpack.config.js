const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');
require('dotenv').config({ path: './.env' }); 
const deps = require("./package.json").dependencies;

module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:3001/",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "mf_videos",
      filename: "remoteEntry.js",
      remotes: {
        'mf_drawer': "mf_drawer@http://localhost:3000/remoteEntry.js",
      },
      exposes: {
        './App': './src/App.ts',
        './AppVideosPage': './src/pages/app-videos-page/AppVideosPage.ts',
        './AppFavoritesPage': './src/pages/app-favorites-page/AppFavoritesPage.ts',
        './AppFavoritesPage': './src/pages/app-favorites-page/AppFavoritesPage.ts',
      },
      shared: {
        ...deps,
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv()
  ],
});
