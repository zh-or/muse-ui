module.exports = {
    productionSourceMap: false,
    assetsDir: 'static',
    pages: {
        index: {
            // page 的入口
            entry: 'demo/main.js',
            // 模板来源
            template: 'demo/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'demo',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },
    /*css: {
        extract: false
    },*/
    chainWebpack: config => {
        /*config.module
            .rule('js')
            .include
            .add('/src')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })*/
    }

}
