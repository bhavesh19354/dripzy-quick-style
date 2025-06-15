
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import glob from 'fast-glob';

// Get all protogen JS files for dependency optimization
const protogenFiles = glob.sync('protogen/**/*.js');

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    viteCommonjs({
      include: [
        "protogen/**/*.js",
        "node_modules/**"
      ],
    }),
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: protogenFiles,
  },
  build: {
    rollupOptions: {
      // Make sure CommonJS is properly transpiled from protogen
      // This helps Vite NOT skip protogen files in transformation phase
      external: [],
    },
    commonjsOptions: {
      include: [/protogen\/.+\.js/, /node_modules/],
    },
  },
}));
