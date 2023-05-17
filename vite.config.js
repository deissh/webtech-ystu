import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import { createHtmlPlugin } from 'vite-plugin-html'


export default defineConfig({
  plugins: [
    // legacy({
    //   targets: ['defaults', 'not IE 11'],
    // }),
    createHtmlPlugin({
      pages: [{
        template: 'index.html',
        filename: 'index.html',
      }, {
        template: 'tables.html',
        filename: 'tables.html',
      }],
    })
  ],
  preview: {
    open: true,
  },
  server: {
    open: true,
  },
  root: 'src',
  base: '',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
