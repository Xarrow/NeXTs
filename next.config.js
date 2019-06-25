const withCSS = require('@zeit/next-css')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.css'] = (file) => { }
}
//  use style.css
//  wepack config
module.exports = withCSS({
    cssModules: true,
    target: 'serverless',
    webpack: function (config) {
        config.node = { fs: 'empty', net: "empty", tls: "empty" };
        return config;
    },
})
