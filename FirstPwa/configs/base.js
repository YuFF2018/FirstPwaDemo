const path = require('path');
const pkg = require('../package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ENV = process.env.NODE_ENV;

const jsRule = {
    loader: "babel-loader",
    options: {
        cacheDirectory: ".cache"
    }
};

const styleRule = {
    loader: 'style-loader',
};

const cssRule = {
    loader: "css-loader",
    options: {
        import: true,
        modules: true,
        soucreMap: true,
        localIdentName: '[name]-[local]-[hash:base64:8]',
        importLoaders: 1
    }
};

const cssNoModuleRule = {
    loader: "css-loader",
    options: {
        import: true,
        soucreMap: true,
        localIdentName: '[name]-[local]-[hash:base64:8]',
        importLoaders: 1
    }
};


const postCssRule = {
    loader: 'postcss-loader',
    options: {
        ident: 'postcss',
        plugins: [
            require('postcss-import')(),
            require('autoprefixer')()
        ]
    }
}


const lessRule = {
    loader: "less-loader",
    options: {
        javascriptEnabled: true,
    }
};

const scssRule = {
    loader: "sass-loader"
}

const staticRule = [{
    test: /\.(ttf|eot|woff)/,
    use: {
        loader: "file-loader",
        options: {
            name: "font/[name]-[hash:16].[ext]"
        }
    },
    exclude: /node_modules/
},
{
    test: /\.(png|jpg|gif|svg)$/,
    use: [{
        loader: "url-loader",
        options: {
            limit: 8192,
            mimetype: 'image/png',
            name: "assets/[name]-[hash:16].[ext]"
        }
    }]
}]

module.exports = {
    BaseConfig: {
        mode: ENV,
        context: path.resolve(__dirname, '..'),
        entry: {
            main: './src',
            react: ["react", "react-dom"],
            dva: "dva"
        },
        output: {
            path: path.resolve(__dirname, "../dist"),
            chunkFilename: "chunks/js/[hash:8]_[name]_[id].js",
            filename: "js/[hash:8]_[name].js",
            publicPath: '/'
        },
        resolve: {
            extensions: [".js", ".css", ".scss", ".less", ".json"]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./template.html",
                filename: "index.html",
                title: pkg.name
            }),
            new ManifestPlugin()
        ],
    },
    styleRule,
    cssRule,
    cssNoModuleRule,
    postCssRule,
    scssRule,
    lessRule,
    jsRule,
    staticRule
}