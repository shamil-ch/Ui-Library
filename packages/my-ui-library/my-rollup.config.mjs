// my-rollup.config.mjs
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: '/home/arjun/analystt.ai project/packages/my-ui-library/index.js',
  output: {
    file: 'dist/my-ui-library.js',
    format: 'umd',
    name: 'UILibrary',
    globals: {
      'snabbdom': 'snabbdom',
      'snabbdom/modules/class': 'snabbdom/modules/class',
      'snabbdom/modules/props': 'snabbdom/modules/props',
      'snabbdom/modules/style': 'snabbdom/modules/style',
      'snabbdom/modules/eventlisteners': 'snabbdom/modules/eventlisteners',
    },
  },
  external: ['snabbdom', 'snabbdom/modules/class', 'snabbdom/modules/props', 'snabbdom/modules/style', 'snabbdom/modules/eventlisteners'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
  ],
};
