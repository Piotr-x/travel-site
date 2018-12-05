const path = require('path');

module.exports = {
    mode: 'none',
    entry: {
        App: "./app/assets/scripts/js/App.js",
        Vendor: "./app/assets/scripts/js/Vendor.js"
    },
    output: {
        path: path.resolve(__dirname, "./app/assets/scripts/compiled"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};