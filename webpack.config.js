const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const bundleOutputDir = './wwwroot/dist';
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    return [{
        mode: 'development',
        stats: { modules: false },
        context: __dirname,
        resolve: { extensions: [ '.js', '.ts' ] },
        entry: { 'main': './ClientApp/boot.ts' },
        devtool: false,
        module: {
            rules: [
                { test: /\.vue\.html$/, include: /ClientApp/, loader: 'vue-loader', options: { loaders: { js: 'awesome-typescript-loader?silent=true' } } },
                { test: /\.ts$/, include: /ClientApp/, use: 'awesome-typescript-loader?silent=true' },
                { test: /\.css$/, use: isDevBuild ? [ 'style-loader', 'css-loader' ] : ExtractTextPlugin.extract({ use: 'css-loader?minimize' }) },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' },
                {
                    test: /\.scss$/,
                    use: [
                        process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader" // compiles Sass to CSS, using Node Sass by default
                    ]
                }
            ]
        },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',
            publicPath: 'dist/'
        },
        plugins: [
            new CheckerPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(isDevBuild ? 'development' : 'production')
                }
            }),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            }),
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
            // Plugins that apply in production builds only
            new webpack.optimize.UglifyJsPlugin(),
            new ExtractTextPlugin('site.css')
        ])
    }];
};
