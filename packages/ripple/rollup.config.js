import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import visualizer from 'rollup-plugin-visualizer';

export default{
  input: 'src/index.jsx',
  output: [
    { file: 'dist/styled-flexboxgrid.es.js', format: 'es' },
  ],
  plugins: [
    nodeResolve({
      extensions: ['.js', '.jsx', '.json'],
    }),
    commonjs(),
    babel(),
    uglify(),
    visualizer({ filename: './bundle-stats.html' }),
  ],
  external: ['react', 'styled-components'],
  exports: 'named',
  globals: { react: 'React', 'styled-components': 'styled' },
};
