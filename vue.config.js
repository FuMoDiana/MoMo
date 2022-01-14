const path = require('path')

module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        const dir = path.resolve(__dirname, 'src/assets/icons')
        config.module
            .rule('svg-sprite')
            .test(/\.svg$/)
            .include.add(dir).end() //dir这个路径下的svg使用这个loader
            .use('svg-sprite-loader').loader('svg-sprite-loader').options({ extract: false }).end()

        config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{ plainSprite: true }])
        config.module.rule('svg').exclude.add(dir) //vue-cli默认情况下会使用url-loader对svg进行处理，让url-loader只处理除dir文件夹外的svg
    }
}