/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!************************************!*\
  !*** multi ./src/renderers/dom.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/renderers/dom.js */"4qhl");


/***/ }),

/***/ "4qhl":
/*!******************************!*\
  !*** ./src/renderers/dom.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"i8i4\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/App */ \"r8ck\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.css */ \"VxdY\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  initialData: window.__R_DATA.initialData\n}), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNHFobC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvZG9tLmpzP2UyYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJ2NvbXBvbmVudHMvQXBwJztcblxuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguY3NzJztcblxuUmVhY3RET00uaHlkcmF0ZShcbiAgPEFwcCBpbml0aWFsRGF0YT17d2luZG93Ll9fUl9EQVRBLmluaXRpYWxEYXRhfSAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4qhl\n");

/***/ }),

/***/ "Al62":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Math science\nvar utils = {\n  // Sum an array\n  sum: function sum(arr) {\n    return arr.reduce(function (acc, curr) {\n      return acc + curr;\n    }, 0);\n  },\n  // create an array of numbers between min and max (edges included)\n  range: function range(min, max) {\n    return Array.from({\n      length: max - min + 1\n    }, function (_, i) {\n      return min + i;\n    });\n  },\n  // pick a random number between min and max (edges included)\n  random: function random(min, max) {\n    return min + Math.floor(Math.random() * (max - min + 1));\n  },\n  // Given an array of numbers and a max...\n  // Pick a random sum (< max) from the set of all available sums in arr\n  randomSumIn: function randomSumIn(arr, max) {\n    var sets = [[]];\n    var sums = [];\n\n    for (var i = 0; i < arr.length; i++) {\n      for (var j = 0, len = sets.length; j < len; j++) {\n        var candidateSet = sets[j].concat(arr[i]);\n        var candidateSum = utils.sum(candidateSet);\n\n        if (candidateSum <= max) {\n          sets.push(candidateSet);\n          sums.push(candidateSum);\n        }\n      }\n    }\n\n    return sums[utils.random(0, sums.length - 1)];\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (utils);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWw2Mi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlscy5qcz8wMjVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1hdGggc2NpZW5jZVxuY29uc3QgdXRpbHMgPSB7XG4gICAgLy8gU3VtIGFuIGFycmF5XG4gICAgc3VtOiBhcnIgPT4gYXJyLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLCAwKSxcbiAgXG4gICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIG51bWJlcnMgYmV0d2VlbiBtaW4gYW5kIG1heCAoZWRnZXMgaW5jbHVkZWQpXG4gICAgcmFuZ2U6IChtaW4sIG1heCkgPT4gQXJyYXkuZnJvbSh7IGxlbmd0aDogbWF4IC0gbWluICsgMSB9LCAoXywgaSkgPT4gbWluICsgaSksXG4gIFxuICAgIC8vIHBpY2sgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXggKGVkZ2VzIGluY2x1ZGVkKVxuICAgIHJhbmRvbTogKG1pbiwgbWF4KSA9PiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpLFxuICBcbiAgICAvLyBHaXZlbiBhbiBhcnJheSBvZiBudW1iZXJzIGFuZCBhIG1heC4uLlxuICAgIC8vIFBpY2sgYSByYW5kb20gc3VtICg8IG1heCkgZnJvbSB0aGUgc2V0IG9mIGFsbCBhdmFpbGFibGUgc3VtcyBpbiBhcnJcbiAgICByYW5kb21TdW1JbjogKGFyciwgbWF4KSA9PiB7XG4gICAgICBjb25zdCBzZXRzID0gW1tdXTtcbiAgICAgIGNvbnN0IHN1bXMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwLCBsZW4gPSBzZXRzLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgY29uc3QgY2FuZGlkYXRlU2V0ID0gc2V0c1tqXS5jb25jYXQoYXJyW2ldKTtcbiAgICAgICAgICBjb25zdCBjYW5kaWRhdGVTdW0gPSB1dGlscy5zdW0oY2FuZGlkYXRlU2V0KTtcbiAgICAgICAgICBpZiAoY2FuZGlkYXRlU3VtIDw9IG1heCkge1xuICAgICAgICAgICAgc2V0cy5wdXNoKGNhbmRpZGF0ZVNldCk7XG4gICAgICAgICAgICBzdW1zLnB1c2goY2FuZGlkYXRlU3VtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzdW1zW3V0aWxzLnJhbmRvbSgwLCBzdW1zLmxlbmd0aCAtIDEpXTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBMUJBO0FBNkJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///Al62\n");

/***/ }),

/***/ "VxdY":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnhkWS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzRlNDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///VxdY\n");

/***/ }),

/***/ "Xwlx":
/*!****************************************!*\
  !*** ./src/components/StarsDisplay.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"Al62\");\n\n\n\nvar StarsDisplay = function StarsDisplay(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].range(1, props.count).map(function (starId) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: starId,\n      className: \"star\"\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StarsDisplay);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWHdseC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N0YXJzRGlzcGxheS5qcz81ZjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmNvbnN0IFN0YXJzRGlzcGxheSA9IHByb3BzID0+IChcblx0PD5cbiAgICB7dXRpbHMucmFuZ2UoMSwgcHJvcHMuY291bnQpLm1hcChzdGFySWQgPT5cbiAgICAgIDxkaXYga2V5PXtzdGFySWR9IGNsYXNzTmFtZT1cInN0YXJcIiAvPlxuICAgICl9XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhcnNEaXNwbGF5OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUZBO0FBQ0E7QUFPQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///Xwlx\n");

/***/ }),

/***/ "enYR":
/*!**************************************!*\
  !*** ./src/components/PlayNumber.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar PlayNumber = function PlayNumber(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"number\",\n    style: {\n      backgroundColor: colors[props.status]\n    },\n    onClick: function onClick() {\n      return props.onClick(props.number, props.status);\n    }\n  }, props.number);\n}; // Color Theme\n\n\nvar colors = {\n  available: 'lightgray',\n  used: 'lightgreen',\n  wrong: 'lightcoral',\n  candidate: 'deepskyblue'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayNumber);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5ZUi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BsYXlOdW1iZXIuanM/N2E3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBQbGF5TnVtYmVyID0gcHJvcHMgPT4gKFxuXHQ8YnV0dG9uIFxuICAgIGNsYXNzTmFtZT1cIm51bWJlclwiIFxuICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3JzW3Byb3BzLnN0YXR1c10gfX1cbiAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrKHByb3BzLm51bWJlciwgcHJvcHMuc3RhdHVzKX1cbiAgPlxuICAgIHtwcm9wcy5udW1iZXJ9XG4gIDwvYnV0dG9uPlxuKTtcblxuLy8gQ29sb3IgVGhlbWVcbmNvbnN0IGNvbG9ycyA9IHtcbiAgICBhdmFpbGFibGU6ICdsaWdodGdyYXknLFxuICAgIHVzZWQ6ICdsaWdodGdyZWVuJyxcbiAgICB3cm9uZzogJ2xpZ2h0Y29yYWwnLFxuICAgIGNhbmRpZGF0ZTogJ2RlZXBza3libHVlJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXlOdW1iZXI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///enYR\n");

/***/ }),

/***/ "jBhc":
/*!**************************************!*\
  !*** ./src/components/PlayButton.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar PlayButton = function PlayButton(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"game-done\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"message\",\n    style: {\n      color: props.gameStatus == \"won\" ? \"green\" : \"red\"\n    }\n  }, props.gameStatus == \"won\" ? \"You Won!\" : \"Game Over!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: props.onClick\n  }, \"Play Again\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiakJoYy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BsYXlCdXR0b24uanM/OGMxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBQbGF5QnV0dG9uID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1kb25lXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIiBzdHlsZT17eyBjb2xvcjogcHJvcHMuZ2FtZVN0YXR1cyA9PSBcIndvblwiID8gXCJncmVlblwiIDogXCJyZWRcIiB9fT57IHByb3BzLmdhbWVTdGF0dXMgPT0gXCJ3b25cIiA/IFwiWW91IFdvbiFcIiA6IFwiR2FtZSBPdmVyIVwiIH08L3A+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMub25DbGlja30+UGxheSBBZ2FpbjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheUJ1dHRvbjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jBhc\n");

/***/ }),

/***/ "oy3Y":
/*!********************************!*\
  !*** ./src/components/Game.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"RIqP\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"Al62\");\n/* harmony import */ var _StarsDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StarsDisplay */ \"Xwlx\");\n/* harmony import */ var _PlayNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayNumber */ \"enYR\");\n/* harmony import */ var _PlayButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PlayButton */ \"jBhc\");\n\n\n\n\n\n\n\n\nvar useGameState = function useGameState() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].random(1, 9)),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      stars = _useState2[0],\n      setStars = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].range(1, 9)),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),\n      availableNums = _useState4[0],\n      setAvailableNums = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),\n      candidateNums = _useState6[0],\n      setCandidateNums = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(10),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),\n      timer = _useState8[0],\n      setTimer = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (timer > 0 && availableNums.length > 0) {\n      var timerId = setTimeout(function () {\n        setTimer(timer - 1);\n      }, 1000);\n      return function () {\n        return clearTimeout(timerId);\n      };\n    }\n  });\n\n  var play = function play(num, status) {\n    if (status !== \"used\") {\n      var newCandidateNums = candidateNums;\n\n      if (status == \"available\") {\n        newCandidateNums = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(candidateNums), [num]);\n        setCandidateNums(newCandidateNums);\n      }\n\n      if (_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sum(newCandidateNums) == stars) {\n        var newAvailableNums = availableNums.filter(function (n) {\n          return !newCandidateNums.includes(n);\n        });\n        setAvailableNums(newAvailableNums);\n        setCandidateNums([]);\n        setStars(_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].randomSumIn(newAvailableNums, 9));\n      }\n\n      if (status == \"candidate\" || status == \"wrong\") {\n        var _availableNums = candidateNums.filter(function (n) {\n          return n != num;\n        });\n\n        setCandidateNums(_availableNums);\n      }\n    }\n  };\n\n  return {\n    stars: stars,\n    availableNums: availableNums,\n    candidateNums: candidateNums,\n    timer: timer,\n    play: play\n  };\n};\n\nvar Game = function Game(_ref) {\n  var restart = _ref.restart;\n\n  var _useGameState = useGameState(),\n      stars = _useGameState.stars,\n      availableNums = _useGameState.availableNums,\n      candidateNums = _useGameState.candidateNums,\n      timer = _useGameState.timer,\n      play = _useGameState.play;\n\n  var candidatesAreWrong = _utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sum(candidateNums) > stars;\n  var gameStatus = availableNums.length == 0 && timer > 0 ? \"won\" : timer > 0 ? \"playing\" : \"Lost\";\n\n  var numberStatus = function numberStatus(number) {\n    if (!availableNums.includes(number)) {\n      return 'used';\n    }\n\n    if (candidateNums.includes(number)) {\n      return candidatesAreWrong ? 'wrong' : 'candidate';\n    }\n\n    return 'available';\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"game\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"help\"\n  }, \"Pick 1 or more numbers that sum to the number of stars\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"left\"\n  }, gameStatus == \"playing\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_StarsDisplay__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    count: stars\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PlayButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    gameStatus: gameStatus,\n    onClick: restart\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"right\"\n  }, _utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].range(1, 9).map(function (number) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PlayNumber__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      key: number,\n      status: numberStatus(number),\n      number: number,\n      onClick: play\n    });\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"timer\"\n  }, \"Time Remaining: \", timer));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3kzWS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUuanM/YTMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vdXRpbHNcIjtcblxuaW1wb3J0IFN0YXJzRGlzcGxheSBmcm9tIFwiLi9TdGFyc0Rpc3BsYXlcIjtcbmltcG9ydCBQbGF5TnVtYmVyIGZyb20gXCIuL1BsYXlOdW1iZXJcIjtcbmltcG9ydCBQbGF5QnV0dG9uIGZyb20gXCIuL1BsYXlCdXR0b25cIjtcblxuY29uc3QgdXNlR2FtZVN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzdGFycywgc2V0U3RhcnNdID0gdXNlU3RhdGUodXRpbHMucmFuZG9tKDEsIDkpKTtcbiAgICBjb25zdCBbYXZhaWxhYmxlTnVtcywgc2V0QXZhaWxhYmxlTnVtc10gPSB1c2VTdGF0ZSh1dGlscy5yYW5nZSgxLCA5KSk7XG4gICAgY29uc3QgW2NhbmRpZGF0ZU51bXMsIHNldENhbmRpZGF0ZU51bXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUoMTApO1xuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZih0aW1lciA+IDAgJiYgYXZhaWxhYmxlTnVtcy5sZW5ndGggPiAwKXtcbiAgICAgICAgY29uc3QgdGltZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4geyBzZXRUaW1lcih0aW1lciAtIDEpOyB9LCAxMDAwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBwbGF5ID0gKG51bSwgc3RhdHVzKSA9PiB7XG4gICAgICBpZihzdGF0dXMgIT09IFwidXNlZFwiKXtcbiAgICAgICAgbGV0IG5ld0NhbmRpZGF0ZU51bXMgPSBjYW5kaWRhdGVOdW1zO1xuICAgICAgICBpZihzdGF0dXMgPT0gXCJhdmFpbGFibGVcIil7XG4gICAgICAgICAgbmV3Q2FuZGlkYXRlTnVtcyA9IFsuLi5jYW5kaWRhdGVOdW1zLCBudW1dO1xuICAgICAgICAgIHNldENhbmRpZGF0ZU51bXMobmV3Q2FuZGlkYXRlTnVtcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodXRpbHMuc3VtKG5ld0NhbmRpZGF0ZU51bXMpID09IHN0YXJzKXtcbiAgICAgICAgICAgIGNvbnN0IG5ld0F2YWlsYWJsZU51bXMgPSBhdmFpbGFibGVOdW1zLmZpbHRlcihuID0+ICFuZXdDYW5kaWRhdGVOdW1zLmluY2x1ZGVzKG4pKTtcbiAgICAgICAgICAgIHNldEF2YWlsYWJsZU51bXMobmV3QXZhaWxhYmxlTnVtcyk7XG4gICAgICAgICAgICBzZXRDYW5kaWRhdGVOdW1zKFtdKTtcbiAgICAgICAgICAgIHNldFN0YXJzKHV0aWxzLnJhbmRvbVN1bUluKG5ld0F2YWlsYWJsZU51bXMsIDkpKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYoc3RhdHVzID09IFwiY2FuZGlkYXRlXCIgfHwgc3RhdHVzID09IFwid3JvbmdcIil7XG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGVOdW1zID0gY2FuZGlkYXRlTnVtcy5maWx0ZXIoIG4gPT4gbiAhPSBudW0gKTtcbiAgICAgICAgICAgIHNldENhbmRpZGF0ZU51bXMoYXZhaWxhYmxlTnVtcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtzdGFycywgYXZhaWxhYmxlTnVtcywgY2FuZGlkYXRlTnVtcywgdGltZXIsIHBsYXl9O1xuICB9XG4gIFxuICBjb25zdCBHYW1lID0gKHtyZXN0YXJ0fSkgPT4ge1xuICAgIGNvbnN0IHtzdGFycywgYXZhaWxhYmxlTnVtcywgY2FuZGlkYXRlTnVtcywgdGltZXIsIHBsYXl9ID0gdXNlR2FtZVN0YXRlKCk7XG4gICAgY29uc3QgY2FuZGlkYXRlc0FyZVdyb25nID0gdXRpbHMuc3VtKGNhbmRpZGF0ZU51bXMpID4gc3RhcnM7XG4gICAgY29uc3QgZ2FtZVN0YXR1cyA9IGF2YWlsYWJsZU51bXMubGVuZ3RoID09IDAgJiYgdGltZXIgPiAwID8gXCJ3b25cIiA6IHRpbWVyID4gMCA/IFwicGxheWluZ1wiIDogXCJMb3N0XCI7XG4gICAgXG4gICAgY29uc3QgbnVtYmVyU3RhdHVzID0gKG51bWJlcikgPT4ge1xuICAgICAgaWYgKCFhdmFpbGFibGVOdW1zLmluY2x1ZGVzKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuICd1c2VkJztcbiAgICAgIH1cbiAgICAgIGlmIChjYW5kaWRhdGVOdW1zLmluY2x1ZGVzKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXNBcmVXcm9uZyA/ICd3cm9uZyc6ICdjYW5kaWRhdGUnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdhdmFpbGFibGUnO1xuICAgIH07XG4gICAgXG4gICAgXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHBcIj5cbiAgICAgICAgICBQaWNrIDEgb3IgbW9yZSBudW1iZXJzIHRoYXQgc3VtIHRvIHRoZSBudW1iZXIgb2Ygc3RhcnNcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIGdhbWVTdGF0dXMgPT0gXCJwbGF5aW5nXCIgPyBcbiAgICAgICAgICAgICAgPFN0YXJzRGlzcGxheSBjb3VudD17c3RhcnN9Lz5cbiAgICAgICAgICAgICAgOiBcbiAgICAgICAgICAgICAgPFBsYXlCdXR0b24gZ2FtZVN0YXR1cz17Z2FtZVN0YXR1c30gb25DbGljaz17cmVzdGFydH0vPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgICAgIHt1dGlscy5yYW5nZSgxLCA5KS5tYXAobnVtYmVyID0+XG4gICAgICAgICAgICA8UGxheU51bWJlciBcbiAgICAgICAgICAgICAgICBrZXk9e251bWJlcn0gXG4gICAgICAgICAgICAgICAgc3RhdHVzPXtudW1iZXJTdGF0dXMobnVtYmVyKX1cbiAgICAgICAgICAgICAgICBudW1iZXI9e251bWJlcn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtwbGF5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXJcIj5UaW1lIFJlbWFpbmluZzoge3RpbWVyfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBVUE7QUFBQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///oy3Y\n");

/***/ }),

/***/ "r8ck":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ \"oy3Y\");\n\n\n // STAR MATCH - V4\n\nvar StarMatch = function StarMatch() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      gameId = _useState2[0],\n      setGameId = _useState2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Game__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    key: gameId,\n    restart: function restart() {\n      return setGameId(gameId + 1);\n    }\n  });\n};\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StarMatch, null);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjhjay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC5qcz9hZmM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xuLy8gU1RBUiBNQVRDSCAtIFY0XG5cbmNvbnN0IFN0YXJNYXRjaCA9ICgpID0+IHtcbiAgY29uc3QgWyBnYW1lSWQsIHNldEdhbWVJZCBdID0gdXNlU3RhdGUoMSk7XG4gIHJldHVybiA8R2FtZSBrZXk9e2dhbWVJZH0gcmVzdGFydD17KCkgPT4gc2V0R2FtZUlkKGdhbWVJZCArIDEpfS8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPFN0YXJNYXRjaCAvPlxuICApO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///r8ck\n");

/***/ })

/******/ });