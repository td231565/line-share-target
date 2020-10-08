module.exports = {
  // 打包時，要排除哪些第三方套件包
  /*
    如果不加
    import Vue from 'vue';
    就會把整個 Vue 的 Source 都打包裡你的程式，會肥滋滋的
    因為我們用了 cdnjs ，所以不需要再打包
    */
  // https://webpack.js.org/configuration/externals/#externals
  // https://ithelp.ithome.com.tw/articles/10187554
  externals: {
    vue: 'Vue'
  },
}