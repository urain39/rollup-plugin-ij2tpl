'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rollupPluginutils = require('rollup-pluginutils');
var ij2tpl = require('ij2tpl');

// rollup-plugin-ij2tpl.js
function IJ2Loader(options) {
    if (!options) { options = {}; }

    if (!options.include)
        options.include = ['**/*.ij2', '**/*.ij2.*'];

    if (!options.ij2tplPath)
        options.ij2tplPath = 'ij2tpl';

    var filter = rollupPluginutils.createFilter(options.include, options.exclude),
        plugin = {
        name: "IJ2Loader",
        transform: function (code, name) {
            if (filter(name)) {
                var renderer = ij2tpl.parse(code, options.prefix, options.suffix);
                return 'import { Renderer } from \'' + options.ij2tplPath + '\';\n' +
                'export const template = new Renderer(' + JSON.stringify(renderer.treeRoot) + ')\n';
            }
        }
    };

    return plugin;
}

exports.IJ2Loader = IJ2Loader;
