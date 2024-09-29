import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { string } from 'rollup-plugin-string';

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.min.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()],
    },
  ],
  plugins: [
    json(),
    string({
      include: '**/*.css',
    }),
    nodeResolve(),
    // terser(),
  ],
};
