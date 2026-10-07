import react from '@vitejs/plugin-react';

import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

import { prerender } from './vite/prerender-plugin';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env,
    },
    plugins: [
      react(),
      viteTsconfigPaths(),
      prerender({
        sitemapPath: 'public/sitemap.xml',
        siteUrl: 'https://www.birdia.fr',
        exclude: (route) => route.startsWith('/template') || route === '/campagne-publicitaire',
      }),
    ],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        '@pages': path.resolve(__dirname, './src/pages'),
        '@store': path.resolve(__dirname, './src/common/store'),
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: 'build',
      sourcemap: 'hidden',
    },
  };
});
