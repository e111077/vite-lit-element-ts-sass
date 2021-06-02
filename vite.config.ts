import { defineConfig } from 'vite'
import litcss from 'rollup-plugin-postcss-lit';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // entry: 'src/components/MyElement/my-element.ts',
      entry: 'src/components/double-extended-element/double-extended-element.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit-element/,
    }
  },
  plugins: [
    {
      ...litcss(),
      enforce: 'post'
    }
  ]
})
