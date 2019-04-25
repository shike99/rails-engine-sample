module.exports = {
  // filenameHashing: false,
  chainWebpack: config => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  pages: {
    admin: 'src/admin/index.ts',
  },
}