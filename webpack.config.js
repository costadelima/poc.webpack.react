const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    // options: {
                    //     presets: ["@babel/preset-env", "@babel/preset-react"],
                    // },
                },
            }],
    },
    plugins: [
      new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'index.html',
        template: 'src/index.html'
      })
    ]
};