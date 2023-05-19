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
        template: 'tables.html',
        filename: 'tables.html',
      },{
        template: 'sign_in.html',
        filename: 'sign_in.html',
      }, {
        template: 'sign_up.html',
        filename: 'sign_up.html',
      }, {
        template: 'index.html',
        filename: 'index.html',
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
