import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname),
      '@calmweb/shared': resolve(__dirname, '../../packages/shared/src'),
      '@dracon/wxt-shared/byok': resolve(__dirname, 'tests/__mocks__/@dracon/wxt-shared.ts'),
      '@dracon/wxt-shared': resolve(__dirname, 'tests/__mocks__/@dracon/wxt-shared.ts'),
    },
  },
});
