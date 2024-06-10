const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查

  // 第一种配置代理的方法

  // devServer: {
  //   proxy: "http://localhost:9090",
  // },

  //这种方法无法避免路径 与public里面的资源重名的问题(就是控制到底走不走代理)(有有限匹配前端资源)
  //且不能配置多个代理

  // 第二种配置代理的方法
  devServer: {
    proxy: {
      "/server1": {
        target: "http://localhost:9090",
        pathRewrite: { "^/server1": "" }, //代理服务器转发的时候会将server1也转发,所以这里把server1重写成空
        ws: false, //是否支持websocket服务
        changeOrigin: true, //要不要改变请求的 host.要改变的话请求的时候告诉服务器的端口号就会和服务器一致
      },
      //配置第二个代理服务器
      "/server2": {
        target: "http://localhost:5050",
        pathRewrite: { "^/server2": "" }, //代理服务器转发的时候会将server1也转发,所以这里把server1重写成空
        ws: false, //是否支持websocket服务
        changeOrigin: true, //要不要改变请求的 host.要改变的话请求的时候告诉服务器的端口号就会和服务器一致
      },
    },
  },
});
