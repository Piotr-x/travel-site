const path = require('path');

module.exports = {
    mode: 'none',
    entry: "./app/assets/scripts/js/app.js",
    output: {
        path: path.resolve(__dirname, "./app/assets/scripts/compiled"),
        filename: "App.js"
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