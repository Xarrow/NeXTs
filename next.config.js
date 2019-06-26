const withCSS = require('@zeit/next-css')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.css'] = (file) => { }
}
//  use style.css
//  wepack config
module.exports = withCSS({
    cssModules: true,
    //  包形式， SSR 还是静态页面
    // target: 'server',
    target: 'serverless',
    webpack: function (config) {
        config.node = { fs: 'empty', net: "empty", tls: "empty" };
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
