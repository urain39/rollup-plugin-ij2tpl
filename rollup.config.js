// rollup.config.js

export default {
  input: 'index.mjs',
  output: {
      format: 'cjs',
      file: 'index.js'
  },
  external: [ 'ij2tpl', 'rollup-pluginutils' ]
};
