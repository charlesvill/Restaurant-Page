/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_lincolnheights_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/lincolnheights.jpg */ \"./src/images/lincolnheights.jpg\");\n/* harmony import */ var _images_birria_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/birria.jpg */ \"./src/images/birria.jpg\");\n/* harmony import */ var _images_taco_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/taco.png */ \"./src/images/taco.png\");\n\n\n\n\nfunction loadPage(){\n    const parentdiv = document.querySelector(\"#content\");\n\n    const navbar = document.createElement('div'); \n    navbar.className = \"navbar\";\n    parentdiv.appendChild(navbar);\n    navbar.innerHTML = `\n    <button>Menu</button>\n    <button>Locations</button>\n    <button>Nutrition</button>\n    <button>Giftcards</button>`;\n\n    const header = document.createElement('div');\n    header.className = \"header\";\n    parentdiv.appendChild(header);\n\n    const name = document.createElement('h2');\n    name.className = \"name\";\n    name.textContent = \"TACOS EL GUAPO\";\n    header.appendChild(name);\n\n    const icon = new Image();\n    icon.src = _images_taco_png__WEBPACK_IMPORTED_MODULE_2__;\n    icon.className = \"siteIcon\";\n    header.appendChild(icon);\n\n    \n\n\n    const visualcont = document.createElement('div');\n    visualcont.className = \"visualContainer\";\n    parentdiv.appendChild(visualcont);\n\n    visualcont.innerHTML = \n    `<p class=\"text\">The best tacos in town!</p>`;\n\n    const aboutCont = document.createElement('div');\n    aboutCont.className = \"aboutCont\";\n    aboutCont.innerHTML = `<p>About us</p>\n    <p>Our goal was simple: bring a piece of that 'casera' experience\n    eating street tacos on the neighborhood corner of your grandmas house.\n    handmade tortillas with locally sourced maiz and organic grassfed meat\n    for that real 'just like home' experience.</p>`\n\n    const b_groundIMG = new Image();\n    b_groundIMG.src = _images_birria_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    b_groundIMG.className= \"tacosImage\"\n    visualcont.appendChild(b_groundIMG);\n\n    const storyCont = document.createElement('div');\n    storyCont.className = \"storyCont\";\n    visualcont.appendChild(storyCont);\n    storyCont.innerHTML = `\n    <p>Our Story</p>\n    <p>Our roots come from beautiful Lincoln Heights here in Los Angeles. We've locally owned and operated since 1998 and have since expanded with three food trucks in the greater L.A. area.</p>\n    `\n\n    const story_img = new Image();\n    story_img.src = _images_lincolnheights_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    story_img.className = \"storyImg\";\n    visualcont.appendChild(story_img);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/loadPage.js?");

/***/ }),

/***/ "./src/images/birria.jpg":
/*!*******************************!*\
  !*** ./src/images/birria.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3f0cd5f809b9fed3e542.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/birria.jpg?");

/***/ }),

/***/ "./src/images/lincolnheights.jpg":
/*!***************************************!*\
  !*** ./src/images/lincolnheights.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a3f790e5a27ef50125ad.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/lincolnheights.jpg?");

/***/ }),

/***/ "./src/images/taco.png":
/*!*****************************!*\
  !*** ./src/images/taco.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cd489b0ac183a0b5e0ef.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/taco.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/loadPage.js");
/******/ 	
/******/ })()
;