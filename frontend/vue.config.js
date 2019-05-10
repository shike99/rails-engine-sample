module.exports = {
  chainWebpack: config => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  pages: {
    admin: 'src/pages/admin/index.ts',
    home: 'src/pages/home/index.ts',
  },
  devServer: {
    public: 'localhost:8080',
    host: '0.0.0.0',
    port: 8080,
  },
}
