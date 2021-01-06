// rollup.config.js

import { IJ2Loader } from '../index';

export default {
  input: './test.js',
  plugins: [ IJ2Loader({ij2tplPath: '../../node_modules/ij2tpl/ij2tpl', prefix: '${'}) ],
  output: {
      format: 'umd',
      file: 'bundle.js'
  }
};
