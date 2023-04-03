const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false
})
module.exports = {
  publicPath: "./",
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        // 此处的写法，目的是为了 将 /api 替换成http://10.224.130.115:5000/login
        target: "http://10.224.130.115:5000/login",
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
      "/table": {
        //  /now/50953
        target: "http://10.224.130.115:5000",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/table": "",
        },
      },
    },
  },
};

