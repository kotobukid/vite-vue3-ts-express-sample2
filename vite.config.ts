import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: './out',
        assetsDir: './as',
        rollupOptions: {
            input: {
                main: 'src/main.ts',
                sub: 'src/sub.ts',
            }
        },
    }
})
