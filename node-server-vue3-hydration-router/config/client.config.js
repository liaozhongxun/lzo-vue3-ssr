let path = require('path')
let { VueLoaderPlugin } = require("vue-loader/dist/index")
let { DefinePlugin } = require("webpack")

module.exports = {
    target: 'web', // 不会将node模块打包到输出文件中，fs path...
    mode: 'development',
    entry: './src/client/index.js', // 相对操作npm指令时所在的位置
    output: {
        filename: 'client_bundle.js',
        path: path.resolve(__dirname, "../build/client")
    },
    resolve: {
        extensions: ['.js', '.vue']  // 项目中打包时，这些扩展名文件，可以省略后缀
    },
    plugins: [
        new VueLoaderPlugin(),
        new DefinePlugin({
            __VUE_OPTIONS_API__: false, // 项目中不需要 options api，打包时排除相应代码
            __VUE_PROD_DEVTOOLS__: false, // 明确说明生成环境不写要DEVTOOLS调试
        })
    ],
    // externals: [nodeExternals()], // 排除 node_module 里的依赖, target代表客户端，客户端不需要这个
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
    }
}