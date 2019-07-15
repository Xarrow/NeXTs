const withCSS = require('@zeit/next-css')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.css'] = (file) => { }
}
//  use style.css
//  wepack config
module.exports = withCSS({
    cssModules: true,
    //  包形式， SSR 还是静态页面
    target: 'server',
    // target: 'serverless',
    webpack: function (config,options) {
        config.node = { fs: 'empty', net: "empty", tls: "empty" };

        // css optimization
        config.module.rules.push({
            test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: 'raw-loader',
        });
        if (Array.isArray(config.optimization.minimizer)) {
            config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
        }
        return config;
    },

    // 到处静态资源路由配置
    exportPathMap: function () {
        return {
            "/": { page: "/" },
            "/about": { page: "/about" },
            // "/gallery?name=liangqunru&pageSize=10": { page: "gallery", query: { name:"liangqunru", pageSize:10,title: "gallery" } }
        }
    }
});
