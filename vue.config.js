const port = 9789 // dev port
module.exports = {
  publicPath: './',
  outputDir: './dist/web',
  assetsDir: '',
  pages: {
    page1: './src/pages/page1/main.ts',
    page2: './src/pages/page2/main.ts'
  },
  devServer: {
    port: port,
    historyApiFallback: {
      rewrites: [{ from: /.*/, to: '/page1.html' }]
    },
    open: true,
    index: '/page1.html',
    overlay: {
      warnings: false,
      errors: true
    }
  },
  lintOnSave: true,
  parallel: false
}
