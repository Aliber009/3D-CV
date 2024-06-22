import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from '@vitejs/plugin-legacy';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
        targets: ['defaults', 'not IE 11']
    }),
    viteStaticCopy({
        targets: [
            {
                src: 'public/.nojekyll',
                dest: '.'
            }
        ]
    })
],
  base: '/3D-CV/'
});
