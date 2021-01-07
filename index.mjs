// rollup-plugin-ij2tpl.js
import { createFilter } from 'rollup-pluginutils';
import { parse } from 'ij2tpl';
export function IJ2Loader(options) {
  if (!options) { options = {}; }

  if (!options.include)
    options.include = ['**/*.ij2', '**/*.ij2.*'];

  if (!options.ij2tplPath)
    options.ij2tplPath = 'ij2tpl';

  var filter = createFilter(options.include, options.exclude)
    ,plugin = {
      name: 'IJ2Loader'
      ,transform: function (code, name) {
        if (filter(name)) {
          var renderer = parse(code, options.prefix, options.suffix);
          return 'import { Renderer } from \'' + options.ij2tplPath + '\';\n' +
                'export const template = new Renderer(' + JSON.stringify(renderer.treeRoot) + ');\n';
        }
      }
    };

    return plugin;
}
