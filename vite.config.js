import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  plugins: [
    [vue()],
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  build: {
    commonjsOptions: {
      ignoreTryCatch: (id) => id !== 'stream',
    },
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: [
      {
        find: '~',
        replacement: `${__dirname}/src`,
      },
      {
        find: 'process',
        replacement: 'process/browser',
      },
      {
        find: 'stream',
        replacement: 'stream-browserify',
      },
      {
        find: 'zlib',
        replacement: 'browserify-zlib',
      },
      {
        find: 'util',
        replacement: 'util',
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "~/scss/main.scss";
        `,
      },
    },
  },
});
