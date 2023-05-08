let path = require('path')
let nodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node',
    mode: 'development',
    entry: './src/server/index.js', // 相对操作npm指令时所在的位置
    output: {
        filename: 'server_bundle.js',
        path: path.resolve(__dirname, "../build/server")
    },
    externals: [nodeExternals()] // 排除node_module 里的依赖
}