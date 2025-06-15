
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

// Helper to find all JS files in a directory recursively
function findJsFiles(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
        results = results.concat(findJsFiles(filePath));
      } else if (filePath.endsWith('.js')) {
        // Return path relative to project root
        results.push(path.relative(process.cwd(), filePath).replace(/\\/g, '/'));
      }
    });
  } catch (error) {
    // Silently ignore if directory doesn't exist
  }
  return results;
}

const protoJsFiles = findJsFiles('protogen');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    viteCommonjs(),
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
    include: [
      ...protoJsFiles,
      'grpc-web',
      'google-protobuf',
    ],
  },
}));
