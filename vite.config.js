import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn: (warning, warn) => {
        // Ignore specific warnings
        if (warning.code === 'UNRESOLVED_IMPORT') return;
        warn(warning); // Otherwise, forward the warning
      },
    },
  },
});

