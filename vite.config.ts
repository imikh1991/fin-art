import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), tsconfigPaths()],
});
