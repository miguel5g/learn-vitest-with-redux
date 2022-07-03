/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    root: './src',
    globals: true,
    clearMocks: true,
    environment: 'jsdom',
    setupFiles: './setup-test.ts',
    reporters: 'verbose',
    coverage: {
      reporter: ['lcov'],
      extension: ['tsx', 'ts'],
      all: true,
      src: ['./src'],
      exclude: ['*.spec.tsx']
    },
  },
});
