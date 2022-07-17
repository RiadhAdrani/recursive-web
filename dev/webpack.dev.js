const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");

const mode = "development";

module.exports = merge(common, {
    mode,
    entry: "./dev/experimental/dev.js",
    output: {
        filename: "dev.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    devtool: "source-map",
    optimization: { minimize: false },
    plugins: [
        new webpack.DefinePlugin({
            "typeof window": JSON.stringify("object"),
            "process.env.NODE_ENV": JSON.stringify(mode),
        }),
    ],
});
