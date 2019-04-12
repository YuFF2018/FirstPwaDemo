const Base = require('./base');
const path = require('path');
const merge = require('webpack-merge');
const port = Math.floor(Math.random() * 1000) + 8000;

const devServer = {
    host: "localhost",
    port,
    open: true,
    hot: true,
    inline: true,
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    proxy: {
        '/proxy/*': {
            target: 'https://alpha-dayu.aidigger.com',
            pathRewrite: {
                '/proxy': '/api'
            },
            changeOrigin: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                withCredentials: true,
                cookie: 'code=598001; skey=YQA5S0nQGLaBA/Zg3EfuZiBgSBsz2MGc',
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Aceept, Connection, User-Agent, Cookie"
            }
        }
    }
}

module.exports = merge(Base.BaseConfig, {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: Base.jsRule 
            },
            {
               test: /\.css$/,
               use: [Base.styleRule, Base.cssNoModuleRule, Base.postCssRule] 
            },
            {
                test: /\.s(c|a)ss$/,
                use: [Base.styleRule, Base.cssRule, Base.postCssRule, Base.scssRule]
            },
            {
                test: /\.less$/,
                use: [Base.styleRule, Base.cssNoModuleRule, Base.postCssRule, Base.lessRule]
            },
            ...Base.staticRule
        ]
    },
    devtool: "eval-source-map",
    devServer
})