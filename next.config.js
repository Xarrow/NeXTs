const withCSS = require('@zeit/next-css')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.css'] = (file) => { }
}
module.exports = withCSS({
    cssModules: true
})
// for now build
module.exports = {
    target: 'serverless'
}