// rollup.config.js

import { IJ2Loader } from '../index';

export default {
  input: './test.js',
  plugins: [ IJ2Loader() ],
  output: {
      format: 'umd',
      file: 'bundle.js'
  }
};