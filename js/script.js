/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/booksCardTemplate.js":
/*!*********************************************!*\
  !*** ./src/js/modules/booksCardTemplate.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar bookCardTemplate = {\n  wrap: '.j-cards',\n  tag: 'article',\n  tagClass: 'products-card-mini',\n  setContent: function setContent(data) {\n    return \"<h2 class=\\\"product-card-mini__title\\\">\\n            <a href=\\\"\".concat(data.uri, \"\\\">\").concat(data.name, \"</a>\\n          </h2>\\n          <a href=\\\"\").concat(data.uri, \"\\\" class=\\\"product-card-mini__img-wrap\\\">\\n            <img src=\\\"img/books_all/\").concat(data.uri, \".png\\\" class=\\\"products-card-mini__img\\\">\\n          </a>\\n          <p class=\\\"product-card-mini__descr\\\">\").concat(data.desc, \" </p>\\n          <div class=\\\"product-card-mini__price\\\">\").concat(data.price, \" &#8381</div>\");\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (bookCardTemplate);\n\n//# sourceURL=webpack:///./src/js/modules/booksCardTemplate.js?");

/***/ }),

/***/ "./src/js/modules/createElement.js":
/*!*****************************************!*\
  !*** ./src/js/modules/createElement.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction createElement(book, template) {\n  var article = document.createElement(template.tag);\n  article.classList.add(template.tagClass);\n  article.innerHTML = template.setContent(book);\n  return article;\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (createElement);\n\n//# sourceURL=webpack:///./src/js/modules/createElement.js?");

/***/ }),

/***/ "./src/js/modules/insertElement.js":
/*!*****************************************!*\
  !*** ./src/js/modules/insertElement.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/js/modules/createElement.js\");\n\n\nfunction insertElement(array, template) {\n  var wrap = document.querySelector(template.wrap);\n  array.forEach(function (item) {\n    var book = Object(_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, template);\n    var wrap = document.querySelector(template.wrap);\n    wrap.appendChild(book); // console.log();\n  });\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (insertElement);\n\n//# sourceURL=webpack:///./src/js/modules/insertElement.js?");

/***/ }),

/***/ "./src/js/modules/sendRequest.js":
/*!***************************************!*\
  !*** ./src/js/modules/sendRequest.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction sendRequest(data, onSuccess) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', data);\n  xhr.send();\n\n  xhr.onreadystatechange = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      var responseObj = JSON.parse(xhr.responseText);\n      onSuccess(responseObj);\n    } else {\n      console.log(\"\\u0436\\u0434\\u0443\" + xhr.readyState);\n    }\n  };\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (sendRequest);\n\n//# sourceURL=webpack:///./src/js/modules/sendRequest.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_insertElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/insertElement.js */ \"./src/js/modules/insertElement.js\");\n/* harmony import */ var _modules_booksCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/booksCardTemplate.js */ \"./src/js/modules/booksCardTemplate.js\");\n/* harmony import */ var _modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sendRequest.js */ \"./src/js/modules/sendRequest.js\");\n\n\n // import initMap from './modules/map.js'\n// if (document.querySelector(bookCardTemplate.wrap)) {\n//   insertElement(data.items, bookCardTemplate);\n// }\n//объект данных для запроса\n\nvar url = {\n  page: 1,\n  perPage: 8,\n  type: ''\n};\nvar wrap = document.querySelector(_modules_booksCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrap);\n\nif (wrap) {\n  var dataAjax = createDataAjax();\n  Object(_modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dataAjax, function (responseObj) {\n    if (wrap.children) {\n      wrap.innerHTML = '';\n    }\n\n    Object(_modules_insertElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(responseObj.items, _modules_booksCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  });\n}\n\n; // вешаем слушатель на табы\n\nvar tabsWrap = document.querySelector('.j-tabs');\nvar tabsArray = Array.from(tabsWrap.children);\ntabsArray.forEach(function (tab) {\n  var link = tab.firstElementChild;\n  link.addEventListener('click', function (event) {\n    event.preventDefault();\n    url.type = event.target.dataset.type;\n    var dataAjax = createDataAjax();\n    Object(_modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dataAjax, function (responseObj) {\n      if (wrap.children) {\n        wrap.innerHTML = '';\n      }\n\n      Object(_modules_insertElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(responseObj.items, _modules_booksCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    });\n  });\n}); //функция подготовык урла для гет запроса\n\nfunction createDataAjax() {\n  if (window.matchMedia(\"(min-width: 768px)\").matches) {\n    url.perPage = 8;\n  } else {\n    url.perPage = 3;\n  }\n\n  return \"https://api.do-epixx.ru/htmlpro/bookstore/books/get/\".concat(url.page, \"/\").concat(url.perPage, \"/\").concat(url.type);\n}\n\n; // function sendRequest(data) {\n//   let xhr = new XMLHttpRequest;\n//   xhr.open('GET', data);\n//   xhr.send();\n//   xhr.onreadystatechange = function() {\n//     if(xhr.readyState === 4 && xhr.status === 200) {\n//       const request =JSON.parse(xhr.responseText);\n//       console.log(request);\n//       const wrap = document.querySelector(bookCardTemplate.wrap);\n//       if( wrap.children ) {\n//         wrap.innerHTML = '';\n//       }\n//       if (document.querySelector(bookCardTemplate.wrap)) {\n//         insertElement(request.items, bookCardTemplate);\n//       }\n//     } else {\n//       console.log(`жду`+ xhr.readyState);\n//     }\n//   };\n// };\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });