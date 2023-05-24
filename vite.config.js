import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
    server: {
        host: true,
        port: '8085',
        hot: true
    },
    plugins: [
        vue(),
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                {
                    'axios': [
                        ['default', 'axios']
                    ]
                }]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src',
                import.meta.url))
        }
    }
});
