(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, (function () {
		var current = global['freeze-click'];
		var exports = global['freeze-click'] = {};
		factory(exports);
		exports.noConflict = function () { global['freeze-click'] = current; return exports; };
	}()));
}(this, function (exports) { 'use strict';

	var MODULE_NAME="freeze-click";function freezeClick(){}

	exports.MODULE_NAME = MODULE_NAME;
	exports.freezeClick = freezeClick;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=freeze-click.dev.js.map
