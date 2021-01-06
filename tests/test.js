// test.js

import { Renderer } from '../node_modules/ij2tpl/ij2tpl';
import { template as testTemplate } from './templates/test.ij2.html';

console.log(new Renderer(testTemplate).render({name: 'IJ2TPL'}));

