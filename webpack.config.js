const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },

    devServer: {
        //static: {
         //   directory: path.join(__dirname, "dist"),
        //},
        static: path.resolve(__dirname, 'dist'),
        port: 9000,
        compress: true,
        //porn: 9000,
    },
};