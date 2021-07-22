import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/lib/d3/module.js',
  output: {
    file: 'src/lib/d3/index.js',
    format: 'es'
  },
  plugins: [nodeResolve()]
};