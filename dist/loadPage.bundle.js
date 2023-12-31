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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateHome: () => (/* binding */ generateHome),\n/* harmony export */   loadPage: () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _images_tacosbannerfixed_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/tacosbannerfixed.jpg */ \"./src/images/tacosbannerfixed.jpg\");\n/* harmony import */ var _images_lincolnheights_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/lincolnheights.jpg */ \"./src/images/lincolnheights.jpg\");\n/* harmony import */ var _images_birria_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/birria.jpg */ \"./src/images/birria.jpg\");\n/* harmony import */ var _images_moustache_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/moustache.png */ \"./src/images/moustache.png\");\n\n\n\n\n\nfunction createUI(parentCont){\n    const navbar = document.createElement('div'); \n    navbar.className = \"navbar\";\n    parentCont.appendChild(navbar);\n    navbar.innerHTML = \n    `\n    \n        <button class=\"tab tmenu\">Menu</button>\n        <button class=\"tab tlocations\">Locations</button>\n        <button class=\"tab tnutrition\">Nutrition</button>\n        <button class=\"tab tcontact\">Contact</button>\n    \n    `;\n\n    const header = document.createElement('div');\n    header.className = \"header\";\n    parentCont.appendChild(header);\n\n    const sitenameCont = document.createElement('div');\n    sitenameCont.className = 'siteNameCont';\n    header.appendChild(sitenameCont);\n\n    const name = document.createElement('p');\n    name.className = \"name\";\n    name.textContent = \"TACOS EL GUAPO\";\n    sitenameCont.appendChild(name);\n\n    const icon = new Image();\n    icon.src = _images_moustache_png__WEBPACK_IMPORTED_MODULE_3__;\n    icon.className = \"siteIcon\";\n    sitenameCont.appendChild(icon);\n\n    const orderbtn = document.createElement('button');\n    orderbtn.className = \"orderBtn\";\n    orderbtn.textContent = \"Order now\";\n    header.appendChild(orderbtn);\n\n}\n\nfunction generateHome(visualcont){\n    \n\n    const bannerCont = document.createElement('div');\n    bannerCont.className = \"bannerCont\";\n    visualcont.appendChild(bannerCont);\n    \n    const bannerImg = new Image();\n    bannerImg.className = \"bannerImg\"; \n    bannerImg.src = _images_tacosbannerfixed_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    bannerCont.appendChild(bannerImg);\n\n    const bannertxt = document.createElement('p');\n    bannertxt.className = 'bannerTxt';\n    bannertxt.textContent = \"Taste the Difference!\";\n    bannerCont.appendChild(bannertxt);\n\n    const aboutBox = document.createElement('div');\n    aboutBox.className = \"featuredBox\";\n    visualcont.appendChild(aboutBox);\n\n    const aboutCont = document.createElement('div');\n    aboutCont.className = \"aboutCont\";\n    aboutCont.innerHTML = `<p class= \"featTitle\">About us</p>\n    <p class= \"featText\">Our goal was simple: \n    bring a piece of that 'casera' experience\n    eating street tacos on the neighborhood corner of your grandmas house.\n    handmade tortillas with locally sourced maiz and organic grassfed meat\n    for that real 'just like home' flavor.</p>`;\n    aboutBox.appendChild(aboutCont);\n\n    const b_groundIMG = new Image();\n    b_groundIMG.src = _images_birria_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    b_groundIMG.className= \"tacosImg\"\n    aboutBox.appendChild(b_groundIMG);\n\n    const storyBox = document.createElement('div');\n    storyBox.className = \"featuredBox\";\n    visualcont.appendChild(storyBox);\n\n    const storyCont = document.createElement('div');\n    storyCont.className = \"storyCont\";\n    storyBox.appendChild(storyCont);\n    storyCont.innerHTML = `\n    <p class= \"featTitle\">Our Story</p>\n    <p class= \"featText\">Our roots come from beautiful Lincoln Heights here in Los Angeles. We've locally owned and operated since 1998 and have since expanded with three food trucks in the greater L.A. area.</p>\n    `\n    const story_img = new Image();\n    story_img.src = _images_lincolnheights_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    story_img.className = \"storyImg\";\n    storyBox.appendChild(story_img);\n}\n\nfunction loadPage(){\n    \n    const parentdiv = document.querySelector(\".content\");\n    createUI(parentdiv);\n\n    const visualcont = document.createElement('div');\n    visualcont.className = \"visualContainer\";\n    parentdiv.appendChild(visualcont);\n\n    generateHome(visualcont);\n    \n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadPage.js?");

/***/ }),

/***/ "./src/images/birria.jpg":
/*!*******************************!*\
  !*** ./src/images/birria.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e561e1d06aa4ca783ff.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/birria.jpg?");

/***/ }),

/***/ "./src/images/lincolnheights.jpg":
/*!***************************************!*\
  !*** ./src/images/lincolnheights.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf23d3c9cc5c2fb5504f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/lincolnheights.jpg?");

/***/ }),

/***/ "./src/images/moustache.png":
/*!**********************************!*\
  !*** ./src/images/moustache.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2a654c597cdb74e11a68.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/moustache.png?");

/***/ }),

/***/ "./src/images/tacosbannerfixed.jpg":
/*!*****************************************!*\
  !*** ./src/images/tacosbannerfixed.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4737663e31b86ef944d5.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/tacosbannerfixed.jpg?");

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