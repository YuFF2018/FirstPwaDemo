const Base = require('./base');
const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const ENV = process.env.NODE_ENV;
const optimization = {
    nodeEnv: ENV,
    runtimeChunk: true,
    runtimeChunk: {
        name: entrypoint => `runtimechunk~${entrypoint.name}`
    },
    removeEmptyChunks: true,
    namedModules: true,
    splitChunks: {
        automaticNameDelimiter: '~',
        chunks: "async",
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: true,
        minSize: 30000,
        minChunks: 1,
        cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
            },
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
            }
        }
    }
}

const performance = {
    hints: false,
    maxEntrypointSize: 300000,
    maxAssetSize: 300000,
    assetFilter: function (assetFilename) {
        return /\.(css|js)$/.test(assetFilename);
    }
}


const ProdConfig = merge(Base.BaseConfig, {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: Base.jsRule
            },
            {
                test: /\.css$/,
                use: [ExtractCssChunks.hotLoader, ExtractCssChunks.loader, Base.cssNoModuleRule, Base.postCssRule]
            },
            {
                test: /\.scss$/,
                use: [ExtractCssChunks.hotLoader, ExtractCssChunks.loader, Base.cssRule, Base.postCssRule, Base.scssRule]
            },
            {
                test: /\.less$/,
                use: [ExtractCssChunks.hotLoader, ExtractCssChunks.loader, Base.cssNoModuleRule, Base.postCssRule, Base.lessRule]
            },
            ...Base.staticRule
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], { verbose: true, root: path.resolve(__dirname, ".."), watch: true, beforeEmit: true }),
        new ExtractCssChunks({
            filename: "css/[name]_[hash:8].css",
            chunkFilename: "chunks/css/[name]_[hash:8]_[id].css",
            hot: false,
            orderWarning: true,
            reloadAll: true,
            cssModules: true
        })
    ],
    optimization,
    performance
});

module.exports  = ProdConfig