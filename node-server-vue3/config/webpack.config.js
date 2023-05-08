let path = require('path')
let nodeExternals = require('webpack-node-externals')
let { VueLoaderPlugin } = require("vue-loader/dist/index")

module.exports = {
    target: 'node', // 不会将node模块打包到输出文件中，fs path...
    mode: 'development',
    entry: './src/server/index.js', // 相对操作npm指令时所在的位置
    output: {
        filename: 'server_bundle.js',
        path: path.resolve(__dirname, "../build/server")
    },
    resolve: {
        extensions: ['.js', '.vue']  // 项目中打包时，这些扩展名文件，可以省略后缀
    },
    externals: [nodeExternals()], // 排除 node_module 里的依赖
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader', // 通过bable-loader 转换js文件
                options: {
                    presets: [
                        "@babel/preset-env"
                    ]
                },
                test: /\.vue$/,
                loader: "vue-loader"

            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}