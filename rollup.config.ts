import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: {
    scaleLinear: 'src/lib/d3/scaleLinear.js',
    axisBottom: 'src/lib/d3/axisBottom.js'
  },
  output: {
    dir: 'src/lib/d3/out',
    format: 'es'
  },
  plugins: [nodeResolve()]
};