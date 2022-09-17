import { defineConfig } from 'vite';
import fs from 'node:fs/promises';
import preact from '@preact/preset-vite';

export default defineConfig(async () => {
  const pkg = JSON.parse(
    (await fs.readFile('./package.json')).toString('utf-8')
  );
  const dependencies = Object.keys(pkg.dependencies);
  return {
    plugins: [preact()],
    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
    build: {
      minify: false,
      rollupOptions: {
        input: './src/index.tsx',
        external(source, importer, isResolved) {
          if (
            importer &&
            !isResolved &&
            dependencies.some((d) => d == source || source.startsWith(d + '/'))
          ) {
            return true;
          }
        },
      },
      lib: {
        entry: './src/index.tsx',
        formats: ['es'],
        fileName: () => 'index.js',
      },
    },
  };
});
