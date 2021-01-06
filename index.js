// rollup-plugin-ij2tpl.js
import { createFilter } from 'rollup-pluginutils';
import { parse } from 'ij2tpl';
export function IJ2Loader(options) {
    if (options === void 0) { options = {}; }
    if (!options.include)
        options.include = ['**/*.ij2', '**/*.ij2.*'];
    var filter = createFilter(options.include, options.exclude);
    var plugin = {
        name: "IJ2Loader",
        transform: function (code, name) {
            if (filter(name)) {
                var renderer = parse(code);
                return "export const template = " + JSON.stringify(renderer.treeRoot);
            }
        }
    };
    return plugin;
}
