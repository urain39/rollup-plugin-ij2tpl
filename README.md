# Rollup-Plugin-IJ2TPL

## Usage:

```js
// rollup.config.js

import { IJ2Loader } from 'rollup-plugin-ij2tpl';

export default {
  ...
  plugins: [ IJ2Loader({ij2tplPath: '../node_modules/ij2tpl/ij2tpl', prefix: '${', suffix: '}'}) ]
  ...
};
```

```js
// test.js

import { template as testTemplate } from './templates/test.ij2.html';
```

```html
<!-- templates/test.ij2.html -->

<div id="content" class="container">
    <p>Hello World!</p>
</div>
```
