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
                    style: 'src/style.css'
                },
                output: {
                    entryFileNames: 'entry-[name].js',
                    assetFileNames: 'asset-[name].[ext]'
                },
            }
        }
    }
)
