/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Oswald&family=Sigmar&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* color pallete */\n  --color-1: #1B262C;\n  --color-2: #0F4C75;\n  --color-3: #3282B8;\n  --color-4: #BBE1FA;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template: 0.5fr 6fr 0.3fr / minmax(min-content, 0.8fr) 5fr;\n  width: 100%;\n  height: 100vh;\n  background-color: var(--color-1);\n}\n\n/* header */\n\nheader {\n  grid-area: 1/2/2/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: max(100%, 350px);\n  background-color: var(--color-2);\n}\n\nheader img {\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%);\n  -webkit-transition: .3s ease-in-out;\n  transition: .3s ease-in-out;\n}\n\nheader img:hover {\n  cursor: pointer;\n  -webkit-filter: grayscale(0);\n\tfilter: grayscale(0);\n}\n\n.sidebar-btn-div {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  padding-left: 0.5em;\n}\n\n.sidebar-btn-div img {\n  width: 2.2em;\n  height: 2.2em;\n}\n\n.h1-div {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  color: var(--color-4);\n  font-family: 'Sigmar', cursive;\n  font-size: 1.1rem;\n  font-style: italic;\n  letter-spacing: 2px;\n}\n\n.profile-div {\n  display: flex;\n  gap: 1.2em;\n  padding-right: 1em;\n}\n\n.profile-div img {\n  width: 2.1em;\n  height: 2.1em;\n}\n\n/* nav */\n\nnav {\n  grid-area: 1/1/4/2;\n  flex-direction: column;\n  align-items: center;\n  gap: 1em;\n  padding: 3px;\n  background-color: var(--color-3);\n  font-family: 'Oswald', sans-serif;\n}\n\n.nav-logo-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.3em;\n  padding-bottom: 1.6em;\n  color: var(--color-4);\n  font-size: 2.1rem;\n  font-family: 'Sigmar', cursive;\n  font-style: italic;\n  letter-spacing: 2px;\n}\n\n.nav-logo-div img {\n  width: 2.1em;\n  height: 2.1em;\n}\n\nnav ul {\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n}\n\nnav li {\n  display: flex;\n  align-items: center;\n  gap: 0.5em;\n  padding: 8px 1em;\n  color: var(--color-4);\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\nnav ul li:hover {\n  background-color: #0F4C75;\n  transition: 0.3 ease-in-out;\n}\n\nnav li>img {\n  width: 1.5em;\n  height: 1.5em;\n}\n\nnav hr {\n  margin: 1em;\n  width: 80%;\n  color: var(--color-4);\n}\n\n/* main */\n\nmain {\n  grid-area: 2/2/3/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5em;\n  width: 80%;\n  height: 90%;\n  padding: 1em;\n  color: var(--color-4);\n}\n\n.content > h2 {\n  font-family: 'Sigmar', cursive;\n  font-size: 1.8rem;\n  font-style: italic;\n}\n\n/* main - add task */\n\n.content form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  font-size: 1.5rem;\n  font-family: 'Oswald', sans-serif;\n}\n\n#title,\n#details,\n#category,\n#date,\n#submit {\n  font-size: 1.2rem;\n  padding: 10px;\n  background-color: var(--color-1);\n  border: solid 2px var(--color-4);\n  color: var(--color-4);\n  border-radius: 10px;\n}\n\n#title:hover,\n#details:hover,\n#category:hover,\n#date:hover,\n#submit:hover {\n  border: solid 2px var(--color-2);\n}\n\n#submit:hover {\n  color: var(--color-2);\n}\n\n.content form textarea {\n  resize: none;\n}\n\n.important-div,\n.date-div {\n  display: flex;\n  align-items: center;\n  gap: 1.2em;\n  padding-top: 0.3em;\n}\n\n.important-div>div {\n  display: flex;\n  gap: 0.5em;\n}\n\n.btn-div {\n  text-align: center;\n}\n\n#submit {\n  padding: 0.5em 1.1em;\n  font-family: 'Sigmar', cursive;\n  font-style: italic;\n  font-size: 1.4rem;\n}\n\n/* main - lists */\n\n.task-list-div {\n  width: 100%;\n  height: 100%;\n  font-family: 'Oswald', sans-serif;\n}\n\n.list-item {\n  display: grid;\n  grid-template: 3em / min-content 1fr 0.3fr repeat(3, min-content);\n  align-items: center;\n  gap: 0.7em;\n  padding: 0 0.7em;\n  width: 100%;\n  height: 3em;\n  border: solid 1px var(--color-4);\n}\n\n.list-img {\n  width: 1.2em;\n  height: 1.2em;\n}\n\n.list-img:hover {\n  cursor: pointer;\n}\n\n/* footer */\n\nfooter {\n  grid-area: 3/2/4/3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--color-2);\n  color: var(--color-4);\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: italic;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Sigmar&display=swap');\n\n:root {\n  /* color pallete */\n  --color-1: #1B262C;\n  --color-2: #0F4C75;\n  --color-3: #3282B8;\n  --color-4: #BBE1FA;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template: 0.5fr 6fr 0.3fr / minmax(min-content, 0.8fr) 5fr;\n  width: 100%;\n  height: 100vh;\n  background-color: var(--color-1);\n}\n\n/* header */\n\nheader {\n  grid-area: 1/2/2/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: max(100%, 350px);\n  background-color: var(--color-2);\n}\n\nheader img {\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%);\n  -webkit-transition: .3s ease-in-out;\n  transition: .3s ease-in-out;\n}\n\nheader img:hover {\n  cursor: pointer;\n  -webkit-filter: grayscale(0);\n\tfilter: grayscale(0);\n}\n\n.sidebar-btn-div {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  padding-left: 0.5em;\n}\n\n.sidebar-btn-div img {\n  width: 2.2em;\n  height: 2.2em;\n}\n\n.h1-div {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  color: var(--color-4);\n  font-family: 'Sigmar', cursive;\n  font-size: 1.1rem;\n  font-style: italic;\n  letter-spacing: 2px;\n}\n\n.profile-div {\n  display: flex;\n  gap: 1.2em;\n  padding-right: 1em;\n}\n\n.profile-div img {\n  width: 2.1em;\n  height: 2.1em;\n}\n\n/* nav */\n\nnav {\n  grid-area: 1/1/4/2;\n  flex-direction: column;\n  align-items: center;\n  gap: 1em;\n  padding: 3px;\n  background-color: var(--color-3);\n  font-family: 'Oswald', sans-serif;\n}\n\n.nav-logo-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.3em;\n  padding-bottom: 1.6em;\n  color: var(--color-4);\n  font-size: 2.1rem;\n  font-family: 'Sigmar', cursive;\n  font-style: italic;\n  letter-spacing: 2px;\n}\n\n.nav-logo-div img {\n  width: 2.1em;\n  height: 2.1em;\n}\n\nnav ul {\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n}\n\nnav li {\n  display: flex;\n  align-items: center;\n  gap: 0.5em;\n  padding: 8px 1em;\n  color: var(--color-4);\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\nnav ul li:hover {\n  background-color: #0F4C75;\n  transition: 0.3 ease-in-out;\n}\n\nnav li>img {\n  width: 1.5em;\n  height: 1.5em;\n}\n\nnav hr {\n  margin: 1em;\n  width: 80%;\n  color: var(--color-4);\n}\n\n/* main */\n\nmain {\n  grid-area: 2/2/3/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5em;\n  width: 80%;\n  height: 90%;\n  padding: 1em;\n  color: var(--color-4);\n}\n\n.content > h2 {\n  font-family: 'Sigmar', cursive;\n  font-size: 1.8rem;\n  font-style: italic;\n}\n\n/* main - add task */\n\n.content form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  font-size: 1.5rem;\n  font-family: 'Oswald', sans-serif;\n}\n\n#title,\n#details,\n#category,\n#date,\n#submit {\n  font-size: 1.2rem;\n  padding: 10px;\n  background-color: var(--color-1);\n  border: solid 2px var(--color-4);\n  color: var(--color-4);\n  border-radius: 10px;\n}\n\n#title:hover,\n#details:hover,\n#category:hover,\n#date:hover,\n#submit:hover {\n  border: solid 2px var(--color-2);\n}\n\n#submit:hover {\n  color: var(--color-2);\n}\n\n.content form textarea {\n  resize: none;\n}\n\n.important-div,\n.date-div {\n  display: flex;\n  align-items: center;\n  gap: 1.2em;\n  padding-top: 0.3em;\n}\n\n.important-div>div {\n  display: flex;\n  gap: 0.5em;\n}\n\n.btn-div {\n  text-align: center;\n}\n\n#submit {\n  padding: 0.5em 1.1em;\n  font-family: 'Sigmar', cursive;\n  font-style: italic;\n  font-size: 1.4rem;\n}\n\n/* main - lists */\n\n.task-list-div {\n  width: 100%;\n  height: 100%;\n  font-family: 'Oswald', sans-serif;\n}\n\n.list-item {\n  display: grid;\n  grid-template: 3em / min-content 1fr 0.3fr repeat(3, min-content);\n  align-items: center;\n  gap: 0.7em;\n  padding: 0 0.7em;\n  width: 100%;\n  height: 3em;\n  border: solid 1px var(--color-4);\n}\n\n.list-img {\n  width: 1.2em;\n  height: 1.2em;\n}\n\n.list-img:hover {\n  cursor: pointer;\n}\n\n/* footer */\n\nfooter {\n  grid-area: 3/2/4/3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--color-2);\n  color: var(--color-4);\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: italic;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/add-task.js":
/*!*************************!*\
  !*** ./src/add-task.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTaskLoad)
/* harmony export */ });
function addTaskLoad() {
  const newDiv = () => document.createElement('div');
  const newImg = () => document.createElement('img');
  const newLabel = () => document.createElement('label');
  const newOption = () => document.createElement('option');
  const newInput = () => document.createElement('input');

  const contentDiv = document.querySelector('.content');
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  h2.textContent = 'Add a task';
  contentDiv.appendChild(h2);

  const form = document.createElement('form');
  contentDiv.appendChild(form);

  const titleLabel = newLabel();
  titleLabel.textContent = 'Title';
  const titleInput = newInput();
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'title');
  titleInput.setAttribute('id', 'title');
  titleInput.setAttribute('placeholder', 'What do you need to do?');
  titleInput.setAttribute('autocomplete', 'off');
  titleInput.required = true;
  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  const detailsLabel = newLabel();
  detailsLabel.textContent = 'Details (optional)';
  const detailsTextarea = document.createElement('textarea');
  detailsTextarea.setAttribute('name', 'details');
  detailsTextarea.setAttribute('id', 'details');
  detailsTextarea.setAttribute('rows', '3');
  detailsTextarea.setAttribute('maxlength', '250');
  detailsTextarea.setAttribute('placeholder', 'Short description of the task...');
  detailsTextarea.setAttribute('autocomplete', 'off');
  form.appendChild(detailsLabel);
  form.appendChild(detailsTextarea);

  const categoryLabel = newLabel();
  categoryLabel.textContent = 'Choose category';
  const categorySelect = document.createElement('select');
  categorySelect.setAttribute('name', 'category');
  categorySelect.setAttribute('id', 'category');
  categorySelect.required = true;
  const optionBlank = newOption();
  optionBlank.textContent = '';
  optionBlank.selected = true;
  optionBlank.value = '';
  const optionWork = newOption();
  optionWork.textContent = 'Work';
  optionWork.value = 'Work';
  const optionPersonal = newOption();
  optionPersonal.textContent = 'Personal';
  optionPersonal.value = 'Personal';
  const optionHobbies = newOption();
  optionHobbies.textContent = 'Hobbies';
  optionHobbies.value = 'Hobbies';
  const optionOther = newOption();
  optionOther.textContent = 'Other';
  optionOther.value = 'Other';
  categorySelect.appendChild(optionBlank);
  categorySelect.appendChild(optionWork);
  categorySelect.appendChild(optionPersonal);
  categorySelect.appendChild(optionHobbies);
  categorySelect.appendChild(optionOther);
  form.appendChild(categoryLabel);
  form.appendChild(categorySelect);

  const importantDiv = newDiv();
  importantDiv.classList.add('important-div');
  const importantLabel = newLabel();
  importantLabel.textContent = 'Important? ';
  importantDiv.appendChild(importantLabel);
  const importantInputDiv = newDiv();
  const importantInputYes = newInput();
  importantInputYes.setAttribute('type', 'radio');
  importantInputYes.setAttribute('name', 'important');
  importantInputYes.setAttribute('id', 'true');
  const importantInputYesLabel = newLabel();
  importantInputYesLabel.textContent = 'Yes';
  importantInputYesLabel.setAttribute('for', 'yes');
  const importantInputNo = newInput();
  importantInputNo.setAttribute('type', 'radio');
  importantInputNo.setAttribute('name', 'important');
  importantInputNo.setAttribute('id', 'false');
  importantInputNo.checked = true;
  const importantInputNoLabel = newLabel();
  importantInputNoLabel.textContent = 'No';
  importantInputNoLabel.setAttribute('for', 'no');
  importantInputDiv.appendChild(importantInputYes);
  importantInputDiv.appendChild(importantInputYesLabel);
  importantInputDiv.appendChild(importantInputNo);
  importantInputDiv.appendChild(importantInputNoLabel);
  importantDiv.appendChild(importantInputDiv);
  form.appendChild(importantDiv);

  const dateDiv = newDiv();
  dateDiv.classList.add('date-div');
  const dateLabel = newLabel();
  dateLabel.textContent = 'Date: ';
  dateDiv.appendChild(dateLabel);
  const dateInput = newInput();
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('name', 'date');
  dateInput.setAttribute('id', 'date');
  dateInput.required = true;
  dateDiv.appendChild(dateInput);
  form.appendChild(dateDiv);

  const btnDiv = newDiv();
  btnDiv.classList.add('btn-div');
  const submitBtn = newInput();
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('name', 'submit');
  submitBtn.setAttribute('id', 'submit');
  submitBtn.value = 'Add'
  btnDiv.appendChild(submitBtn);
  form.appendChild(btnDiv);


  const createTask = (title, details, category, important, date, checked) => {
    return {title, details, category, important, date, checked};
  };
  
  let defaultTaskList = [];
  let taskList = localStorage.getItem('taskList');
  taskList = JSON.parse(taskList || JSON.stringify(defaultTaskList));

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const details = document.getElementById('details').value;
    const category = document.getElementById('category').value;
    const important = document.querySelector('input[name="important"]:checked').id;
    const date = document.getElementById('date').value;

    const newTask = createTask(title, details, category, important, date, 'false');
    taskList.push(newTask);
    window.localStorage.setItem('taskList', JSON.stringify(taskList));
  });
};



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footerLoad)
/* harmony export */ });
function footerLoad() {
  const footer = document.querySelector('footer');
  const p = document.createElement('p');
  p.textContent = 'Copyright © 2023 DragicevicS';
  footer.appendChild(p);
};

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ headerLoad)
/* harmony export */ });
/* harmony import */ var _images_sidebar_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/sidebar.png */ "./src/images/sidebar.png");
/* harmony import */ var _images_account_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/account.png */ "./src/images/account.png");
/* harmony import */ var _images_add_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/add.png */ "./src/images/add.png");
/* harmony import */ var _add_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-task */ "./src/add-task.js");





function headerLoad() {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const newDiv = () => document.createElement('div');
  const newImg = () => document.createElement('img');

  const sidebarBtnDiv = newDiv();
  sidebarBtnDiv.classList.add('sidebar-btn-div');
  const h1Div = newDiv();
  h1Div.classList.add('h1-div');
  const profileDiv = newDiv();
  profileDiv.classList.add('profile-div');

  header.appendChild(sidebarBtnDiv);
  header.appendChild(h1Div);
  header.appendChild(profileDiv);

  const sidebarImg = newImg();
  sidebarImg.setAttribute('src', _images_sidebar_png__WEBPACK_IMPORTED_MODULE_0__);

  sidebarBtnDiv.appendChild(sidebarImg);

  const h1 = document.createElement('h1');
  h1.textContent = 'ToDo List';

  h1Div.appendChild(h1);

  const addImg = newImg();
  addImg.setAttribute('src', _images_add_png__WEBPACK_IMPORTED_MODULE_2__);
  const accountImg = newImg();
  accountImg.setAttribute('src', _images_account_png__WEBPACK_IMPORTED_MODULE_1__);

  profileDiv.appendChild(addImg);
  profileDiv.appendChild(accountImg);

  // hiding / displaying the navigation on click
  sidebarImg.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
      nav.style.display = 'none';
      header.style.gridArea = '1/1/2/3';
      main.style.gridArea = '2/1/3/3';
      footer.style.gridArea = '3/1/4/3'
    } else {
      nav.style.display = 'flex';
      header.style.gridArea = '1/2/2/3';
      main.style.gridArea = '2/2/3/3';
      footer.style.gridArea = '3/2/4/3'
    };
  });

  // displaying "Add task" form on main
  addImg.addEventListener('click', _add_task__WEBPACK_IMPORTED_MODULE_3__["default"]);

};

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hobbiesLoad": () => (/* binding */ hobbiesLoad),
/* harmony export */   "homeLoad": () => (/* binding */ homeLoad),
/* harmony export */   "importantLoad": () => (/* binding */ importantLoad),
/* harmony export */   "otherLoad": () => (/* binding */ otherLoad),
/* harmony export */   "personalLoad": () => (/* binding */ personalLoad),
/* harmony export */   "thisWeekLoad": () => (/* binding */ thisWeekLoad),
/* harmony export */   "todayLoad": () => (/* binding */ todayLoad),
/* harmony export */   "workLoad": () => (/* binding */ workLoad)
/* harmony export */ });
/* harmony import */ var _images_checked_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/checked.png */ "./src/images/checked.png");
/* harmony import */ var _images_unchecked_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/unchecked.png */ "./src/images/unchecked.png");
/* harmony import */ var _images_star_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/star.png */ "./src/images/star.png");
/* harmony import */ var _images_star_empty_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/star-empty.png */ "./src/images/star-empty.png");
/* harmony import */ var _images_info_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/info.png */ "./src/images/info.png");
/* harmony import */ var _images_remove_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/remove.png */ "./src/images/remove.png");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");








const newDiv = () => document.createElement('div');
const newImg = () => document.createElement('img');
const newLi = () => document.createElement('li');
const newA = () => document.createElement('a');
const newSpan = () => document.createElement('span');

const contentDiv = document.querySelector('.content');
const h2 = document.createElement('h2');
const taskListDiv = newDiv();
taskListDiv.classList.add('task-list-div');

function listTasks(category) {
  taskListDiv.textContent = '';
  let defaultTaskList = [];
  let taskList = localStorage.getItem('taskList');
  taskList = JSON.parse(taskList || JSON.stringify(defaultTaskList));

  for (let i=0; i < taskList.length; i++) {
    let currentDate = new Date().toJSON().slice(0, 10);
    const checkedImg = newImg();
    checkedImg.setAttribute('src', _images_checked_png__WEBPACK_IMPORTED_MODULE_0__);
    checkedImg.classList.add('list-img');
    const uncheckedImg = newImg();
    uncheckedImg.setAttribute('src', _images_unchecked_png__WEBPACK_IMPORTED_MODULE_1__);
    uncheckedImg.classList.add('list-img');
    const starImg = newImg();
    starImg.setAttribute('src', _images_star_png__WEBPACK_IMPORTED_MODULE_2__);
    starImg.classList.add('list-img');
    const starEmptyImg = newImg();
    starEmptyImg.setAttribute('src', _images_star_empty_png__WEBPACK_IMPORTED_MODULE_3__);
    starEmptyImg.classList.add('list-img');
    const infoImg = newImg();
    infoImg.setAttribute('src', _images_info_png__WEBPACK_IMPORTED_MODULE_4__);
    infoImg.classList.add('list-img');
    const removeImg = newImg();
    removeImg.setAttribute('src', _images_remove_png__WEBPACK_IMPORTED_MODULE_5__);
    removeImg.classList.add('list-img', 'remove-img');

    function appendList() {
      let task = taskList[i];
      let taskInfo = newDiv();
      taskInfo.setAttribute('id', i);
      taskInfo.classList.add('list-item');

      if (task.checked == 'false') taskInfo.appendChild(uncheckedImg);
      if (task.checked == 'true') taskInfo.appendChild(checkedImg);

      const title = newSpan();
      title.textContent = task.title;
      taskInfo.appendChild(title);

      const date = newSpan();
      date.textContent = task.date;
      taskInfo.appendChild(date);

      if (task.important == 'false') taskInfo.appendChild(starEmptyImg);
      if (task.important == 'true') taskInfo.appendChild(starImg);

      taskInfo.appendChild(infoImg);
      taskInfo.appendChild(removeImg);

      taskListDiv.appendChild(taskInfo);
    };

    if (category == 'home') { appendList(); removeTask(category); }
    else if (category == 'today') { if (taskList[i].date == currentDate) appendList(); removeTask(category); }
    else if (category == 'this week') { if ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(taskList[i].date))) appendList(); removeTask(category); }
    else if (category == 'important') { if (taskList[i].important == 'true') appendList(); removeTask(category); }
    else if (category == 'work') { if (taskList[i].category == 'Work') appendList(); removeTask(category); }
    else if (category == 'personal') { if (taskList[i].category == 'Personal') appendList(); removeTask(category); }
    else if (category == 'hobbies') { if (taskList[i].category == 'Hobbies') appendList(); removeTask(category); }
    else if (category == 'other') { if (taskList[i].category == 'Other') appendList(); removeTask(category); }
    else return;
  };
};

const removeTask = (category) => {
  const removeBtn = document.querySelectorAll('.remove-img');
  for (let i=0; i < removeBtn.length; i++) {
  removeBtn[i].addEventListener('click', (e) => {
    const taskId = e.target.closest('div').id;
    const taskList = JSON.parse(localStorage.getItem('taskList'));
    taskList.splice(taskId, 1);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    listTasks(category);
  });
  };
};

function homeLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Home - All Tasks';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  listTasks('home');
};

function todayLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Today';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
  listTasks('today');
};

function thisWeekLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'This week';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
  listTasks('this week');
};

function importantLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Important';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
  listTasks('important');
};

function workLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Work';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
  listTasks('work');
};

function personalLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Personal';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
  listTasks('personal');
};

function hobbiesLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Hobbies';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
  listTasks('hobbies');
};

function otherLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Other';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
  listTasks('other');
};

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navLoad)
/* harmony export */ });
/* harmony import */ var _images_nav_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/nav-logo.png */ "./src/images/nav-logo.png");
/* harmony import */ var _images_star_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/star.png */ "./src/images/star.png");
/* harmony import */ var _images_week_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/week.png */ "./src/images/week.png");
/* harmony import */ var _images_today_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/today.png */ "./src/images/today.png");
/* harmony import */ var _images_home_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/home.png */ "./src/images/home.png");
/* harmony import */ var _images_work_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/work.png */ "./src/images/work.png");
/* harmony import */ var _images_personal_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/personal.png */ "./src/images/personal.png");
/* harmony import */ var _images_hobbies_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/hobbies.png */ "./src/images/hobbies.png");
/* harmony import */ var _images_other_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/other.png */ "./src/images/other.png");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main */ "./src/main.js");











function navLoad() {
  const nav = document.querySelector('nav');
  nav.style.display = 'flex';
  const newDiv = () => document.createElement('div');
  const newImg = () => document.createElement('img');
  const newLi = () => document.createElement('li');
  const newA = () => document.createElement('a');
  const newP = () => document.createElement('p');

  const navLogoDiv = newDiv();
  navLogoDiv.classList.add('nav-logo-div');

  nav.appendChild(navLogoDiv);

  const navLogoImg = newImg();
  navLogoImg.setAttribute('src', _images_nav_logo_png__WEBPACK_IMPORTED_MODULE_0__);
  const h1 = document.createElement('h1');
  h1.textContent = 'TDL';

  navLogoDiv.appendChild(navLogoImg);
  navLogoDiv.appendChild(h1);

  const ul1 = document.createElement('ul');
  ul1.classList.add('ul-1');
  const ul2 = document.createElement('ul');
  ul2.classList.add('ul-2');

  nav.appendChild(ul1);

  ul1.appendChild(newLi());
  ul1.appendChild(newLi());
  ul1.appendChild(newLi());
  ul1.appendChild(newLi());

  ul1.firstElementChild.appendChild(newImg());
  ul1.firstElementChild.appendChild(newP());
  ul1.firstElementChild.firstElementChild.setAttribute('src', _images_home_png__WEBPACK_IMPORTED_MODULE_4__);
  ul1.firstElementChild.lastElementChild.textContent = 'Home';
  ul1.firstElementChild.addEventListener('click', _main__WEBPACK_IMPORTED_MODULE_9__.homeLoad);

  ul1.children[1].appendChild(newImg());
  ul1.children[1].appendChild(newP());
  ul1.children[1].firstElementChild.setAttribute('src', _images_today_png__WEBPACK_IMPORTED_MODULE_3__);
  ul1.children[1].lastElementChild.textContent = 'Today';
  ul1.children[1].addEventListener('click', _main__WEBPACK_IMPORTED_MODULE_9__.todayLoad);

  ul1.children[2].appendChild(newImg());
  ul1.children[2].appendChild(newP());
  ul1.children[2].firstElementChild.setAttribute('src', _images_week_png__WEBPACK_IMPORTED_MODULE_2__);
  ul1.children[2].lastElementChild.textContent = 'This Week';
  ul1.children[2].addEventListener('click', _main__WEBPACK_IMPORTED_MODULE_9__.thisWeekLoad);

  ul1.lastElementChild.appendChild(newImg());
  ul1.lastElementChild.appendChild(newP());
  ul1.lastElementChild.firstElementChild.setAttribute('src', _images_star_png__WEBPACK_IMPORTED_MODULE_1__);
  ul1.lastElementChild.lastElementChild.textContent = 'Important';
  ul1.lastElementChild.addEventListener('click', _main__WEBPACK_IMPORTED_MODULE_9__.importantLoad);

  nav.appendChild(document.createElement('hr'));

  nav.appendChild(ul2);

  ul2.appendChild(newLi());
  ul2.appendChild(newLi());
  ul2.appendChild(newLi());
  ul2.appendChild(newLi());

  ul2.firstElementChild.appendChild(newImg());
  ul2.firstElementChild.appendChild(newP());
  ul2.firstElementChild.firstElementChild.setAttribute('src', _images_work_png__WEBPACK_IMPORTED_MODULE_5__);
  ul2.firstElementChild.lastElementChild.textContent = 'Work';
  ul2.firstElementChild.addEventListener('click', _main__WEBPACK_IMPORTED_MODULE_9__.workLoad);

  ul2.children[1].appendChild(newImg());
  ul2.children[1].appendChild(newP());
  ul2.children[1].firstElementChild.setAttribute('src', _images_personal_png__WEBPACK_IMPORTED_MODULE_6__);
  ul2.children[1].lastElementChild.textContent = 'Personal';
  ul2.children[1].addEventListener('click', _main__WEBPACK_IMPORTED_MODULE_9__.personalLoad);

  ul2.children[2].appendChild(newImg());
  ul2.children[2].appendChild(newP());
  ul2.children[2].firstElementChild.setAttribute('src', _images_hobbies_png__WEBPACK_IMPORTED_MODULE_7__);
  ul2.children[2].lastElementChild.textContent = 'Hobbies';
  ul2.children[2].addEventListener('click', _main__WEBPACK_IMPORTED_MODULE_9__.hobbiesLoad);

  ul2.lastElementChild.appendChild(newImg());
  ul2.lastElementChild.appendChild(newP());
  ul2.lastElementChild.firstElementChild.setAttribute('src', _images_other_png__WEBPACK_IMPORTED_MODULE_8__);
  ul2.lastElementChild.lastElementChild.textContent = 'Other';
  ul2.lastElementChild.addEventListener('click', _main__WEBPACK_IMPORTED_MODULE_9__.otherLoad)

};

/***/ }),

/***/ "./src/images/account.png":
/*!********************************!*\
  !*** ./src/images/account.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f8bbf2b619183ae7910.png";

/***/ }),

/***/ "./src/images/add.png":
/*!****************************!*\
  !*** ./src/images/add.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1b0d9e8eda310ffc4ae.png";

/***/ }),

/***/ "./src/images/checked.png":
/*!********************************!*\
  !*** ./src/images/checked.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0aaf3e3a69f6b32a8d4.png";

/***/ }),

/***/ "./src/images/hobbies.png":
/*!********************************!*\
  !*** ./src/images/hobbies.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38147c4f439c16b2da66.png";

/***/ }),

/***/ "./src/images/home.png":
/*!*****************************!*\
  !*** ./src/images/home.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8d79261a792a9688a12.png";

/***/ }),

/***/ "./src/images/info.png":
/*!*****************************!*\
  !*** ./src/images/info.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49e0b432104428183fba.png";

/***/ }),

/***/ "./src/images/nav-logo.png":
/*!*********************************!*\
  !*** ./src/images/nav-logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da36c3758df961b64365.png";

/***/ }),

/***/ "./src/images/other.png":
/*!******************************!*\
  !*** ./src/images/other.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4b9ebf1e457f005b362.png";

/***/ }),

/***/ "./src/images/personal.png":
/*!*********************************!*\
  !*** ./src/images/personal.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f1424c88aaa0e0eef8f.png";

/***/ }),

/***/ "./src/images/remove.png":
/*!*******************************!*\
  !*** ./src/images/remove.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ce1f523c16f7af7ecc0.png";

/***/ }),

/***/ "./src/images/sidebar.png":
/*!********************************!*\
  !*** ./src/images/sidebar.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8963cf4ec9f6fd4b0cd.png";

/***/ }),

/***/ "./src/images/star-empty.png":
/*!***********************************!*\
  !*** ./src/images/star-empty.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1933edbaaeb43c553b8d.png";

/***/ }),

/***/ "./src/images/star.png":
/*!*****************************!*\
  !*** ./src/images/star.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bdb0a1ad92e4a856270.png";

/***/ }),

/***/ "./src/images/today.png":
/*!******************************!*\
  !*** ./src/images/today.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dcfd7cc0680180077957.png";

/***/ }),

/***/ "./src/images/unchecked.png":
/*!**********************************!*\
  !*** ./src/images/unchecked.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de5515a85914b6da6f02.png";

/***/ }),

/***/ "./src/images/week.png":
/*!*****************************!*\
  !*** ./src/images/week.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce108ea3016db0b52f45.png";

/***/ }),

/***/ "./src/images/work.png":
/*!*****************************!*\
  !*** ./src/images/work.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbaad36d21f542603d35.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main */ "./src/main.js");






(0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_nav__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_main__WEBPACK_IMPORTED_MODULE_4__.homeLoad)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGtJQUFrSTtBQUNsSTtBQUNBLGlEQUFpRCw4Q0FBOEMsdUJBQXVCLHVCQUF1Qix1QkFBdUIsR0FBRyxPQUFPLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxVQUFVLGtCQUFrQixvRUFBb0UsZ0JBQWdCLGtCQUFrQixxQ0FBcUMsR0FBRyw0QkFBNEIsdUJBQXVCLGtCQUFrQix3QkFBd0IsNEJBQTRCLDRCQUE0QixxQ0FBcUMsR0FBRyxnQkFBZ0Isb0NBQW9DLDRCQUE0Qix3Q0FBd0MsZ0NBQWdDLEdBQUcsc0JBQXNCLG9CQUFvQixpQ0FBaUMseUJBQXlCLEdBQUcsc0JBQXNCLGtCQUFrQixtQkFBbUIsZ0NBQWdDLHdCQUF3QixHQUFHLDBCQUEwQixpQkFBaUIsa0JBQWtCLEdBQUcsYUFBYSxrQkFBa0IsbUJBQW1CLGdDQUFnQywwQkFBMEIsbUNBQW1DLHNCQUFzQix1QkFBdUIsd0JBQXdCLEdBQUcsa0JBQWtCLGtCQUFrQixlQUFlLHVCQUF1QixHQUFHLHNCQUFzQixpQkFBaUIsa0JBQWtCLEdBQUcsc0JBQXNCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLGFBQWEsaUJBQWlCLHFDQUFxQyxzQ0FBc0MsR0FBRyxtQkFBbUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZUFBZSwwQkFBMEIsMEJBQTBCLHNCQUFzQixtQ0FBbUMsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1QixpQkFBaUIsa0JBQWtCLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLDBCQUEwQixHQUFHLFlBQVksa0JBQWtCLHdCQUF3QixlQUFlLHFCQUFxQiwwQkFBMEIsc0JBQXNCLG9CQUFvQixHQUFHLHFCQUFxQiw4QkFBOEIsZ0NBQWdDLEdBQUcsZ0JBQWdCLGlCQUFpQixrQkFBa0IsR0FBRyxZQUFZLGdCQUFnQixlQUFlLDBCQUEwQixHQUFHLHdCQUF3Qix1QkFBdUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyxjQUFjLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsaUJBQWlCLDBCQUEwQixHQUFHLG1CQUFtQixtQ0FBbUMsc0JBQXNCLHVCQUF1QixHQUFHLDRDQUE0QyxrQkFBa0IsMkJBQTJCLGNBQWMsZ0JBQWdCLHNCQUFzQixzQ0FBc0MsR0FBRyxxREFBcUQsc0JBQXNCLGtCQUFrQixxQ0FBcUMscUNBQXFDLDBCQUEwQix3QkFBd0IsR0FBRyxtRkFBbUYscUNBQXFDLEdBQUcsbUJBQW1CLDBCQUEwQixHQUFHLDRCQUE0QixpQkFBaUIsR0FBRyxnQ0FBZ0Msa0JBQWtCLHdCQUF3QixlQUFlLHVCQUF1QixHQUFHLHdCQUF3QixrQkFBa0IsZUFBZSxHQUFHLGNBQWMsdUJBQXVCLEdBQUcsYUFBYSx5QkFBeUIsbUNBQW1DLHVCQUF1QixzQkFBc0IsR0FBRywwQ0FBMEMsZ0JBQWdCLGlCQUFpQixzQ0FBc0MsR0FBRyxnQkFBZ0Isa0JBQWtCLHNFQUFzRSx3QkFBd0IsZUFBZSxxQkFBcUIsZ0JBQWdCLGdCQUFnQixxQ0FBcUMsR0FBRyxlQUFlLGlCQUFpQixrQkFBa0IsR0FBRyxxQkFBcUIsb0JBQW9CLEdBQUcsNEJBQTRCLHVCQUF1QixrQkFBa0IsNEJBQTRCLHdCQUF3QixxQ0FBcUMsMEJBQTBCLDhDQUE4Qyx1QkFBdUIsR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLFNBQVMsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxTQUFTLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLG9IQUFvSCxXQUFXLDhDQUE4Qyx1QkFBdUIsdUJBQXVCLHVCQUF1QixHQUFHLE9BQU8sY0FBYyxlQUFlLDJCQUEyQixH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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2E7QUFDQTtBQUNOO0FBQ21GOztBQUUvRyxtREFBVTtBQUNWLGdEQUFPO0FBQ1AsbURBQVU7QUFDViwrQ0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZCZmYW1pbHk9U2lnbWFyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qIGNvbG9yIHBhbGxldGUgKi9cXG4gIC0tY29sb3ItMTogIzFCMjYyQztcXG4gIC0tY29sb3ItMjogIzBGNEM3NTtcXG4gIC0tY29sb3ItMzogIzMyODJCODtcXG4gIC0tY29sb3ItNDogI0JCRTFGQTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMC41ZnIgNmZyIDAuM2ZyIC8gbWlubWF4KG1pbi1jb250ZW50LCAwLjhmcikgNWZyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XFxufVxcblxcbi8qIGhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IG1heCgxMDAlLCAzNTBweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuaGVhZGVyIGltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDApO1xcblxcdGZpbHRlcjogZ3JheXNjYWxlKDApO1xcbn1cXG5cXG4uc2lkZWJhci1idG4tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHBhZGRpbmctbGVmdDogMC41ZW07XFxufVxcblxcbi5zaWRlYmFyLWJ0bi1kaXYgaW1nIHtcXG4gIHdpZHRoOiAyLjJlbTtcXG4gIGhlaWdodDogMi4yZW07XFxufVxcblxcbi5oMS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgZm9udC1mYW1pbHk6ICdTaWdtYXInLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4ucHJvZmlsZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS4yZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxufVxcblxcbi5wcm9maWxlLWRpdiBpbWcge1xcbiAgd2lkdGg6IDIuMWVtO1xcbiAgaGVpZ2h0OiAyLjFlbTtcXG59XFxuXFxuLyogbmF2ICovXFxuXFxubmF2IHtcXG4gIGdyaWQtYXJlYTogMS8xLzQvMjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxZW07XFxuICBwYWRkaW5nOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm5hdi1sb2dvLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjNlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjZlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGZvbnQtc2l6ZTogMi4xcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdTaWdtYXInLCBjdXJzaXZlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLm5hdi1sb2dvLWRpdiBpbWcge1xcbiAgd2lkdGg6IDIuMWVtO1xcbiAgaGVpZ2h0OiAyLjFlbTtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5uYXYgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNWVtO1xcbiAgcGFkZGluZzogOHB4IDFlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5uYXYgdWwgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBGNEM3NTtcXG4gIHRyYW5zaXRpb246IDAuMyBlYXNlLWluLW91dDtcXG59XFxuXFxubmF2IGxpPmltZyB7XFxuICB3aWR0aDogMS41ZW07XFxuICBoZWlnaHQ6IDEuNWVtO1xcbn1cXG5cXG5uYXYgaHIge1xcbiAgbWFyZ2luOiAxZW07XFxuICB3aWR0aDogODAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbn1cXG5cXG4vKiBtYWluICovXFxuXFxubWFpbiB7XFxuICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNWVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbn1cXG5cXG4uY29udGVudCA+IGgyIHtcXG4gIGZvbnQtZmFtaWx5OiAnU2lnbWFyJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKiBtYWluIC0gYWRkIHRhc2sgKi9cXG5cXG4uY29udGVudCBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3RpdGxlLFxcbiNkZXRhaWxzLFxcbiNjYXRlZ29yeSxcXG4jZGF0ZSxcXG4jc3VibWl0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItNCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jdGl0bGU6aG92ZXIsXFxuI2RldGFpbHM6aG92ZXIsXFxuI2NhdGVnb3J5OmhvdmVyLFxcbiNkYXRlOmhvdmVyLFxcbiNzdWJtaXQ6aG92ZXIge1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItMik7XFxufVxcblxcbiNzdWJtaXQ6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbn1cXG5cXG4uY29udGVudCBmb3JtIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmltcG9ydGFudC1kaXYsXFxuLmRhdGUtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjNlbTtcXG59XFxuXFxuLmltcG9ydGFudC1kaXY+ZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNWVtO1xcbn1cXG5cXG4uYnRuLWRpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNzdWJtaXQge1xcbiAgcGFkZGluZzogMC41ZW0gMS4xZW07XFxuICBmb250LWZhbWlseTogJ1NpZ21hcicsIGN1cnNpdmU7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLyogbWFpbiAtIGxpc3RzICovXFxuXFxuLnRhc2stbGlzdC1kaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDNlbSAvIG1pbi1jb250ZW50IDFmciAwLjNmciByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC43ZW07XFxuICBwYWRkaW5nOiAwIDAuN2VtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNlbTtcXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWNvbG9yLTQpO1xcbn1cXG5cXG4ubGlzdC1pbWcge1xcbiAgd2lkdGg6IDEuMmVtO1xcbiAgaGVpZ2h0OiAxLjJlbTtcXG59XFxuXFxuLmxpc3QtaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogMy8yLzQvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtEQUErRDtFQUMvRCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQSxXQUFXOztBQUVYO0VBQ0Us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QUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6QyxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkJmZhbWlseT1TaWdtYXImZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLyogY29sb3IgcGFsbGV0ZSAqL1xcbiAgLS1jb2xvci0xOiAjMUIyNjJDO1xcbiAgLS1jb2xvci0yOiAjMEY0Qzc1O1xcbiAgLS1jb2xvci0zOiAjMzI4MkI4O1xcbiAgLS1jb2xvci00OiAjQkJFMUZBO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAwLjVmciA2ZnIgMC4zZnIgLyBtaW5tYXgobWluLWNvbnRlbnQsIDAuOGZyKSA1ZnI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogbWF4KDEwMCUsIDM1MHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbn1cXG5cXG5oZWFkZXIgaW1nIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5oZWFkZXIgaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxuXFx0ZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxufVxcblxcbi5zaWRlYmFyLWJ0bi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcXG59XFxuXFxuLnNpZGViYXItYnRuLWRpdiBpbWcge1xcbiAgd2lkdGg6IDIuMmVtO1xcbiAgaGVpZ2h0OiAyLjJlbTtcXG59XFxuXFxuLmgxLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICBmb250LWZhbWlseTogJ1NpZ21hcicsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbi5wcm9maWxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG59XFxuXFxuLnByb2ZpbGUtZGl2IGltZyB7XFxuICB3aWR0aDogMi4xZW07XFxuICBoZWlnaHQ6IDIuMWVtO1xcbn1cXG5cXG4vKiBuYXYgKi9cXG5cXG5uYXYge1xcbiAgZ3JpZC1hcmVhOiAxLzEvNC8yO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubmF2LWxvZ28tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuM2VtO1xcbiAgcGFkZGluZy1ib3R0b206IDEuNmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgZm9udC1zaXplOiAyLjFyZW07XFxuICBmb250LWZhbWlseTogJ1NpZ21hcicsIGN1cnNpdmU7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4ubmF2LWxvZ28tZGl2IGltZyB7XFxuICB3aWR0aDogMi4xZW07XFxuICBoZWlnaHQ6IDIuMWVtO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbm5hdiBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxuICBwYWRkaW5nOiA4cHggMWVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm5hdiB1bCBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEY0Qzc1O1xcbiAgdHJhbnNpdGlvbjogMC4zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5uYXYgbGk+aW1nIHtcXG4gIHdpZHRoOiAxLjVlbTtcXG4gIGhlaWdodDogMS41ZW07XFxufVxcblxcbm5hdiBociB7XFxuICBtYXJnaW46IDFlbTtcXG4gIHdpZHRoOiA4MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbi8qIG1haW4gKi9cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogMi8yLzMvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBwYWRkaW5nOiAxZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbi5jb250ZW50ID4gaDIge1xcbiAgZm9udC1mYW1pbHk6ICdTaWdtYXInLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qIG1haW4gLSBhZGQgdGFzayAqL1xcblxcbi5jb250ZW50IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jdGl0bGUsXFxuI2RldGFpbHMsXFxuI2NhdGVnb3J5LFxcbiNkYXRlLFxcbiNzdWJtaXQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci00KTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiN0aXRsZTpob3ZlcixcXG4jZGV0YWlsczpob3ZlcixcXG4jY2F0ZWdvcnk6aG92ZXIsXFxuI2RhdGU6aG92ZXIsXFxuI3N1Ym1pdDpob3ZlciB7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci0yKTtcXG59XFxuXFxuI3N1Ym1pdDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItMik7XFxufVxcblxcbi5jb250ZW50IGZvcm0gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uaW1wb3J0YW50LWRpdixcXG4uZGF0ZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuMmVtO1xcbiAgcGFkZGluZy10b3A6IDAuM2VtO1xcbn1cXG5cXG4uaW1wb3J0YW50LWRpdj5kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41ZW07XFxufVxcblxcbi5idG4tZGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3N1Ym1pdCB7XFxuICBwYWRkaW5nOiAwLjVlbSAxLjFlbTtcXG4gIGZvbnQtZmFtaWx5OiAnU2lnbWFyJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4vKiBtYWluIC0gbGlzdHMgKi9cXG5cXG4udGFzay1saXN0LWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogM2VtIC8gbWluLWNvbnRlbnQgMWZyIDAuM2ZyIHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjdlbTtcXG4gIHBhZGRpbmc6IDAgMC43ZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM2VtO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbi5saXN0LWltZyB7XFxuICB3aWR0aDogMS4yZW07XFxuICBoZWlnaHQ6IDEuMmVtO1xcbn1cXG5cXG4ubGlzdC1pbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiAzLzIvNC8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRhc2tMb2FkKCkge1xuICBjb25zdCBuZXdEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbmV3SW1nID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IG5ld0xhYmVsID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgbmV3T3B0aW9uID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IG5ld0lucHV0ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29udGVudERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLnRleHRDb250ZW50ID0gJ0FkZCBhIHRhc2snO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBuZXdMYWJlbCgpO1xuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgY29uc3QgdGl0bGVJbnB1dCA9IG5ld0lucHV0KCk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdXaGF0IGRvIHlvdSBuZWVkIHRvIGRvPycpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBjb25zdCBkZXRhaWxzTGFiZWwgPSBuZXdMYWJlbCgpO1xuICBkZXRhaWxzTGFiZWwudGV4dENvbnRlbnQgPSAnRGV0YWlscyAob3B0aW9uYWwpJztcbiAgY29uc3QgZGV0YWlsc1RleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgZGV0YWlsc1RleHRhcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXRhaWxzJyk7XG4gIGRldGFpbHNUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RldGFpbHMnKTtcbiAgZGV0YWlsc1RleHRhcmVhLnNldEF0dHJpYnV0ZSgncm93cycsICczJyk7XG4gIGRldGFpbHNUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcyNTAnKTtcbiAgZGV0YWlsc1RleHRhcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHRhc2suLi4nKTtcbiAgZGV0YWlsc1RleHRhcmVhLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRldGFpbHNMYWJlbCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGV0YWlsc1RleHRhcmVhKTtcblxuICBjb25zdCBjYXRlZ29yeUxhYmVsID0gbmV3TGFiZWwoKTtcbiAgY2F0ZWdvcnlMYWJlbC50ZXh0Q29udGVudCA9ICdDaG9vc2UgY2F0ZWdvcnknO1xuICBjb25zdCBjYXRlZ29yeVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBjYXRlZ29yeVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2F0ZWdvcnknKTtcbiAgY2F0ZWdvcnlTZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjYXRlZ29yeScpO1xuICBjYXRlZ29yeVNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbnN0IG9wdGlvbkJsYW5rID0gbmV3T3B0aW9uKCk7XG4gIG9wdGlvbkJsYW5rLnRleHRDb250ZW50ID0gJyc7XG4gIG9wdGlvbkJsYW5rLnNlbGVjdGVkID0gdHJ1ZTtcbiAgb3B0aW9uQmxhbmsudmFsdWUgPSAnJztcbiAgY29uc3Qgb3B0aW9uV29yayA9IG5ld09wdGlvbigpO1xuICBvcHRpb25Xb3JrLnRleHRDb250ZW50ID0gJ1dvcmsnO1xuICBvcHRpb25Xb3JrLnZhbHVlID0gJ1dvcmsnO1xuICBjb25zdCBvcHRpb25QZXJzb25hbCA9IG5ld09wdGlvbigpO1xuICBvcHRpb25QZXJzb25hbC50ZXh0Q29udGVudCA9ICdQZXJzb25hbCc7XG4gIG9wdGlvblBlcnNvbmFsLnZhbHVlID0gJ1BlcnNvbmFsJztcbiAgY29uc3Qgb3B0aW9uSG9iYmllcyA9IG5ld09wdGlvbigpO1xuICBvcHRpb25Ib2JiaWVzLnRleHRDb250ZW50ID0gJ0hvYmJpZXMnO1xuICBvcHRpb25Ib2JiaWVzLnZhbHVlID0gJ0hvYmJpZXMnO1xuICBjb25zdCBvcHRpb25PdGhlciA9IG5ld09wdGlvbigpO1xuICBvcHRpb25PdGhlci50ZXh0Q29udGVudCA9ICdPdGhlcic7XG4gIG9wdGlvbk90aGVyLnZhbHVlID0gJ090aGVyJztcbiAgY2F0ZWdvcnlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uQmxhbmspO1xuICBjYXRlZ29yeVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25Xb3JrKTtcbiAgY2F0ZWdvcnlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uUGVyc29uYWwpO1xuICBjYXRlZ29yeVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25Ib2JiaWVzKTtcbiAgY2F0ZWdvcnlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uT3RoZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGNhdGVnb3J5TGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0KTtcblxuICBjb25zdCBpbXBvcnRhbnREaXYgPSBuZXdEaXYoKTtcbiAgaW1wb3J0YW50RGl2LmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudC1kaXYnKTtcbiAgY29uc3QgaW1wb3J0YW50TGFiZWwgPSBuZXdMYWJlbCgpO1xuICBpbXBvcnRhbnRMYWJlbC50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQ/ICc7XG4gIGltcG9ydGFudERpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnRMYWJlbCk7XG4gIGNvbnN0IGltcG9ydGFudElucHV0RGl2ID0gbmV3RGl2KCk7XG4gIGNvbnN0IGltcG9ydGFudElucHV0WWVzID0gbmV3SW5wdXQoKTtcbiAgaW1wb3J0YW50SW5wdXRZZXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIGltcG9ydGFudElucHV0WWVzLnNldEF0dHJpYnV0ZSgnbmFtZScsICdpbXBvcnRhbnQnKTtcbiAgaW1wb3J0YW50SW5wdXRZZXMuc2V0QXR0cmlidXRlKCdpZCcsICd0cnVlJyk7XG4gIGNvbnN0IGltcG9ydGFudElucHV0WWVzTGFiZWwgPSBuZXdMYWJlbCgpO1xuICBpbXBvcnRhbnRJbnB1dFllc0xhYmVsLnRleHRDb250ZW50ID0gJ1llcyc7XG4gIGltcG9ydGFudElucHV0WWVzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAneWVzJyk7XG4gIGNvbnN0IGltcG9ydGFudElucHV0Tm8gPSBuZXdJbnB1dCgpO1xuICBpbXBvcnRhbnRJbnB1dE5vLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICBpbXBvcnRhbnRJbnB1dE5vLnNldEF0dHJpYnV0ZSgnbmFtZScsICdpbXBvcnRhbnQnKTtcbiAgaW1wb3J0YW50SW5wdXROby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZhbHNlJyk7XG4gIGltcG9ydGFudElucHV0Tm8uY2hlY2tlZCA9IHRydWU7XG4gIGNvbnN0IGltcG9ydGFudElucHV0Tm9MYWJlbCA9IG5ld0xhYmVsKCk7XG4gIGltcG9ydGFudElucHV0Tm9MYWJlbC50ZXh0Q29udGVudCA9ICdObyc7XG4gIGltcG9ydGFudElucHV0Tm9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdubycpO1xuICBpbXBvcnRhbnRJbnB1dERpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnRJbnB1dFllcyk7XG4gIGltcG9ydGFudElucHV0RGl2LmFwcGVuZENoaWxkKGltcG9ydGFudElucHV0WWVzTGFiZWwpO1xuICBpbXBvcnRhbnRJbnB1dERpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnRJbnB1dE5vKTtcbiAgaW1wb3J0YW50SW5wdXREaXYuYXBwZW5kQ2hpbGQoaW1wb3J0YW50SW5wdXROb0xhYmVsKTtcbiAgaW1wb3J0YW50RGl2LmFwcGVuZENoaWxkKGltcG9ydGFudElucHV0RGl2KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChpbXBvcnRhbnREaXYpO1xuXG4gIGNvbnN0IGRhdGVEaXYgPSBuZXdEaXYoKTtcbiAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkYXRlLWRpdicpO1xuICBjb25zdCBkYXRlTGFiZWwgPSBuZXdMYWJlbCgpO1xuICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRGF0ZTogJztcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBuZXdJbnB1dCgpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcbiAgZGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuXG4gIGNvbnN0IGJ0bkRpdiA9IG5ld0RpdigpO1xuICBidG5EaXYuY2xhc3NMaXN0LmFkZCgnYnRuLWRpdicpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBuZXdJbnB1dCgpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCduYW1lJywgJ3N1Ym1pdCcpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQnKTtcbiAgc3VibWl0QnRuLnZhbHVlID0gJ0FkZCdcbiAgYnRuRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnRuRGl2KTtcblxuXG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSAodGl0bGUsIGRldGFpbHMsIGNhdGVnb3J5LCBpbXBvcnRhbnQsIGRhdGUsIGNoZWNrZWQpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXRhaWxzLCBjYXRlZ29yeSwgaW1wb3J0YW50LCBkYXRlLCBjaGVja2VkfTtcbiAgfTtcbiAgXG4gIGxldCBkZWZhdWx0VGFza0xpc3QgPSBbXTtcbiAgbGV0IHRhc2tMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0Jyk7XG4gIHRhc2tMaXN0ID0gSlNPTi5wYXJzZSh0YXNrTGlzdCB8fCBKU09OLnN0cmluZ2lmeShkZWZhdWx0VGFza0xpc3QpKTtcblxuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscycpLnZhbHVlO1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5JykudmFsdWU7XG4gICAgY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltcG9ydGFudFwiXTpjaGVja2VkJykuaWQ7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG5cbiAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayh0aXRsZSwgZGV0YWlscywgY2F0ZWdvcnksIGltcG9ydGFudCwgZGF0ZSwgJ2ZhbHNlJyk7XG4gICAgdGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgfSk7XG59O1xuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb290ZXJMb2FkKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgwqkgMjAyMyBEcmFnaWNldmljUyc7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChwKTtcbn07IiwiaW1wb3J0IHNpZGViYXIgZnJvbSAnLi9pbWFnZXMvc2lkZWJhci5wbmcnO1xuaW1wb3J0IGFjY291bnQgZnJvbSAnLi9pbWFnZXMvYWNjb3VudC5wbmcnO1xuaW1wb3J0IGFkZCBmcm9tICcuL2ltYWdlcy9hZGQucG5nJztcbmltcG9ydCBhZGRUYXNrTG9hZCBmcm9tICcuL2FkZC10YXNrJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyTG9hZCgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgY29uc3QgbmV3RGl2ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5ld0ltZyA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gIGNvbnN0IHNpZGViYXJCdG5EaXYgPSBuZXdEaXYoKTtcbiAgc2lkZWJhckJ0bkRpdi5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWJ0bi1kaXYnKTtcbiAgY29uc3QgaDFEaXYgPSBuZXdEaXYoKTtcbiAgaDFEaXYuY2xhc3NMaXN0LmFkZCgnaDEtZGl2Jyk7XG4gIGNvbnN0IHByb2ZpbGVEaXYgPSBuZXdEaXYoKTtcbiAgcHJvZmlsZURpdi5jbGFzc0xpc3QuYWRkKCdwcm9maWxlLWRpdicpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChzaWRlYmFyQnRuRGl2KTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGgxRGl2KTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHByb2ZpbGVEaXYpO1xuXG4gIGNvbnN0IHNpZGViYXJJbWcgPSBuZXdJbWcoKTtcbiAgc2lkZWJhckltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNpZGViYXIpO1xuXG4gIHNpZGViYXJCdG5EaXYuYXBwZW5kQ2hpbGQoc2lkZWJhckltZyk7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS50ZXh0Q29udGVudCA9ICdUb0RvIExpc3QnO1xuXG4gIGgxRGl2LmFwcGVuZENoaWxkKGgxKTtcblxuICBjb25zdCBhZGRJbWcgPSBuZXdJbWcoKTtcbiAgYWRkSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYWRkKTtcbiAgY29uc3QgYWNjb3VudEltZyA9IG5ld0ltZygpO1xuICBhY2NvdW50SW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYWNjb3VudCk7XG5cbiAgcHJvZmlsZURpdi5hcHBlbmRDaGlsZChhZGRJbWcpO1xuICBwcm9maWxlRGl2LmFwcGVuZENoaWxkKGFjY291bnRJbWcpO1xuXG4gIC8vIGhpZGluZyAvIGRpc3BsYXlpbmcgdGhlIG5hdmlnYXRpb24gb24gY2xpY2tcbiAgc2lkZWJhckltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAobmF2LnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBoZWFkZXIuc3R5bGUuZ3JpZEFyZWEgPSAnMS8xLzIvMyc7XG4gICAgICBtYWluLnN0eWxlLmdyaWRBcmVhID0gJzIvMS8zLzMnO1xuICAgICAgZm9vdGVyLnN0eWxlLmdyaWRBcmVhID0gJzMvMS80LzMnXG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgaGVhZGVyLnN0eWxlLmdyaWRBcmVhID0gJzEvMi8yLzMnO1xuICAgICAgbWFpbi5zdHlsZS5ncmlkQXJlYSA9ICcyLzIvMy8zJztcbiAgICAgIGZvb3Rlci5zdHlsZS5ncmlkQXJlYSA9ICczLzIvNC8zJ1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIGRpc3BsYXlpbmcgXCJBZGQgdGFza1wiIGZvcm0gb24gbWFpblxuICBhZGRJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrTG9hZCk7XG5cbn07IiwiaW1wb3J0IGNoZWNrZWQgZnJvbSAnLi9pbWFnZXMvY2hlY2tlZC5wbmcnO1xuaW1wb3J0IHVuY2hlY2tlZCBmcm9tICcuL2ltYWdlcy91bmNoZWNrZWQucG5nJztcbmltcG9ydCBzdGFyIGZyb20gJy4vaW1hZ2VzL3N0YXIucG5nJztcbmltcG9ydCBzdGFyRW1wdHkgZnJvbSAnLi9pbWFnZXMvc3Rhci1lbXB0eS5wbmcnO1xuaW1wb3J0IGluZm8gZnJvbSAnLi9pbWFnZXMvaW5mby5wbmcnO1xuaW1wb3J0IHJlbW92ZSBmcm9tICcuL2ltYWdlcy9yZW1vdmUucG5nJztcbmltcG9ydCB7IGZvcm1hdCwgaXNUaGlzV2VlayB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgbmV3RGl2ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBuZXdJbWcgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNvbnN0IG5ld0xpID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbmNvbnN0IG5ld0EgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5jb25zdCBuZXdTcGFuID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbmNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbmNvbnN0IHRhc2tMaXN0RGl2ID0gbmV3RGl2KCk7XG50YXNrTGlzdERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QtZGl2Jyk7XG5cbmZ1bmN0aW9uIGxpc3RUYXNrcyhjYXRlZ29yeSkge1xuICB0YXNrTGlzdERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBsZXQgZGVmYXVsdFRhc2tMaXN0ID0gW107XG4gIGxldCB0YXNrTGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpO1xuICB0YXNrTGlzdCA9IEpTT04ucGFyc2UodGFza0xpc3QgfHwgSlNPTi5zdHJpbmdpZnkoZGVmYXVsdFRhc2tMaXN0KSk7XG5cbiAgZm9yIChsZXQgaT0wOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsIDEwKTtcbiAgICBjb25zdCBjaGVja2VkSW1nID0gbmV3SW1nKCk7XG4gICAgY2hlY2tlZEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNoZWNrZWQpO1xuICAgIGNoZWNrZWRJbWcuY2xhc3NMaXN0LmFkZCgnbGlzdC1pbWcnKTtcbiAgICBjb25zdCB1bmNoZWNrZWRJbWcgPSBuZXdJbWcoKTtcbiAgICB1bmNoZWNrZWRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCB1bmNoZWNrZWQpO1xuICAgIHVuY2hlY2tlZEltZy5jbGFzc0xpc3QuYWRkKCdsaXN0LWltZycpO1xuICAgIGNvbnN0IHN0YXJJbWcgPSBuZXdJbWcoKTtcbiAgICBzdGFySW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc3Rhcik7XG4gICAgc3RhckltZy5jbGFzc0xpc3QuYWRkKCdsaXN0LWltZycpO1xuICAgIGNvbnN0IHN0YXJFbXB0eUltZyA9IG5ld0ltZygpO1xuICAgIHN0YXJFbXB0eUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHN0YXJFbXB0eSk7XG4gICAgc3RhckVtcHR5SW1nLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaW1nJyk7XG4gICAgY29uc3QgaW5mb0ltZyA9IG5ld0ltZygpO1xuICAgIGluZm9JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbmZvKTtcbiAgICBpbmZvSW1nLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaW1nJyk7XG4gICAgY29uc3QgcmVtb3ZlSW1nID0gbmV3SW1nKCk7XG4gICAgcmVtb3ZlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgcmVtb3ZlKTtcbiAgICByZW1vdmVJbWcuY2xhc3NMaXN0LmFkZCgnbGlzdC1pbWcnLCAncmVtb3ZlLWltZycpO1xuXG4gICAgZnVuY3Rpb24gYXBwZW5kTGlzdCgpIHtcbiAgICAgIGxldCB0YXNrID0gdGFza0xpc3RbaV07XG4gICAgICBsZXQgdGFza0luZm8gPSBuZXdEaXYoKTtcbiAgICAgIHRhc2tJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCBpKTtcbiAgICAgIHRhc2tJbmZvLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbScpO1xuXG4gICAgICBpZiAodGFzay5jaGVja2VkID09ICdmYWxzZScpIHRhc2tJbmZvLmFwcGVuZENoaWxkKHVuY2hlY2tlZEltZyk7XG4gICAgICBpZiAodGFzay5jaGVja2VkID09ICd0cnVlJykgdGFza0luZm8uYXBwZW5kQ2hpbGQoY2hlY2tlZEltZyk7XG5cbiAgICAgIGNvbnN0IHRpdGxlID0gbmV3U3BhbigpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICBjb25zdCBkYXRlID0gbmV3U3BhbigpO1xuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZTtcbiAgICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICBpZiAodGFzay5pbXBvcnRhbnQgPT0gJ2ZhbHNlJykgdGFza0luZm8uYXBwZW5kQ2hpbGQoc3RhckVtcHR5SW1nKTtcbiAgICAgIGlmICh0YXNrLmltcG9ydGFudCA9PSAndHJ1ZScpIHRhc2tJbmZvLmFwcGVuZENoaWxkKHN0YXJJbWcpO1xuXG4gICAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChpbmZvSW1nKTtcbiAgICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHJlbW92ZUltZyk7XG5cbiAgICAgIHRhc2tMaXN0RGl2LmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcbiAgICB9O1xuXG4gICAgaWYgKGNhdGVnb3J5ID09ICdob21lJykgeyBhcHBlbmRMaXN0KCk7IHJlbW92ZVRhc2soY2F0ZWdvcnkpOyB9XG4gICAgZWxzZSBpZiAoY2F0ZWdvcnkgPT0gJ3RvZGF5JykgeyBpZiAodGFza0xpc3RbaV0uZGF0ZSA9PSBjdXJyZW50RGF0ZSkgYXBwZW5kTGlzdCgpOyByZW1vdmVUYXNrKGNhdGVnb3J5KTsgfVxuICAgIGVsc2UgaWYgKGNhdGVnb3J5ID09ICd0aGlzIHdlZWsnKSB7IGlmIChpc1RoaXNXZWVrKG5ldyBEYXRlKHRhc2tMaXN0W2ldLmRhdGUpKSkgYXBwZW5kTGlzdCgpOyByZW1vdmVUYXNrKGNhdGVnb3J5KTsgfVxuICAgIGVsc2UgaWYgKGNhdGVnb3J5ID09ICdpbXBvcnRhbnQnKSB7IGlmICh0YXNrTGlzdFtpXS5pbXBvcnRhbnQgPT0gJ3RydWUnKSBhcHBlbmRMaXN0KCk7IHJlbW92ZVRhc2soY2F0ZWdvcnkpOyB9XG4gICAgZWxzZSBpZiAoY2F0ZWdvcnkgPT0gJ3dvcmsnKSB7IGlmICh0YXNrTGlzdFtpXS5jYXRlZ29yeSA9PSAnV29yaycpIGFwcGVuZExpc3QoKTsgcmVtb3ZlVGFzayhjYXRlZ29yeSk7IH1cbiAgICBlbHNlIGlmIChjYXRlZ29yeSA9PSAncGVyc29uYWwnKSB7IGlmICh0YXNrTGlzdFtpXS5jYXRlZ29yeSA9PSAnUGVyc29uYWwnKSBhcHBlbmRMaXN0KCk7IHJlbW92ZVRhc2soY2F0ZWdvcnkpOyB9XG4gICAgZWxzZSBpZiAoY2F0ZWdvcnkgPT0gJ2hvYmJpZXMnKSB7IGlmICh0YXNrTGlzdFtpXS5jYXRlZ29yeSA9PSAnSG9iYmllcycpIGFwcGVuZExpc3QoKTsgcmVtb3ZlVGFzayhjYXRlZ29yeSk7IH1cbiAgICBlbHNlIGlmIChjYXRlZ29yeSA9PSAnb3RoZXInKSB7IGlmICh0YXNrTGlzdFtpXS5jYXRlZ29yeSA9PSAnT3RoZXInKSBhcHBlbmRMaXN0KCk7IHJlbW92ZVRhc2soY2F0ZWdvcnkpOyB9XG4gICAgZWxzZSByZXR1cm47XG4gIH07XG59O1xuXG5jb25zdCByZW1vdmVUYXNrID0gKGNhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUtaW1nJyk7XG4gIGZvciAobGV0IGk9MDsgaSA8IHJlbW92ZUJ0bi5sZW5ndGg7IGkrKykge1xuICByZW1vdmVCdG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2RpdicpLmlkO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSk7XG4gICAgdGFza0xpc3Quc3BsaWNlKHRhc2tJZCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgICBsaXN0VGFza3MoY2F0ZWdvcnkpO1xuICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBob21lTG9hZCgpIHtcbiAgY29udGVudERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBoMi50ZXh0Q29udGVudCA9ICdIb21lIC0gQWxsIFRhc2tzJztcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0xpc3REaXYpO1xuICBsaXN0VGFza3MoJ2hvbWUnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RheUxvYWQoKSB7XG4gIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcbiAgaDIudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XG4gIHRhc2tMaXN0RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGxpc3RUYXNrcygndG9kYXknKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlzV2Vla0xvYWQoKSB7XG4gIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcbiAgaDIudGV4dENvbnRlbnQgPSAnVGhpcyB3ZWVrJztcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0xpc3REaXYpO1xuICB0YXNrTGlzdERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBsaXN0VGFza3MoJ3RoaXMgd2VlaycpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydGFudExvYWQoKSB7XG4gIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcbiAgaDIudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50JztcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0xpc3REaXYpO1xuICB0YXNrTGlzdERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBsaXN0VGFza3MoJ2ltcG9ydGFudCcpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdvcmtMb2FkKCkge1xuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGgyLnRleHRDb250ZW50ID0gJ1dvcmsnO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XG4gIHRhc2tMaXN0RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGxpc3RUYXNrcygnd29yaycpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNvbmFsTG9hZCgpIHtcbiAgY29udGVudERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBoMi50ZXh0Q29udGVudCA9ICdQZXJzb25hbCc7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RGl2KTtcbiAgdGFza0xpc3REaXYudGV4dENvbnRlbnQgPSAnJztcbiAgbGlzdFRhc2tzKCdwZXJzb25hbCcpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhvYmJpZXNMb2FkKCkge1xuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGgyLnRleHRDb250ZW50ID0gJ0hvYmJpZXMnO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XG4gIHRhc2tMaXN0RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGxpc3RUYXNrcygnaG9iYmllcycpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG90aGVyTG9hZCgpIHtcbiAgY29udGVudERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBoMi50ZXh0Q29udGVudCA9ICdPdGhlcic7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RGl2KTtcbiAgdGFza0xpc3REaXYudGV4dENvbnRlbnQgPSAnJztcbiAgbGlzdFRhc2tzKCdvdGhlcicpO1xufTsiLCJpbXBvcnQgbmF2TG9nbyBmcm9tICcuL2ltYWdlcy9uYXYtbG9nby5wbmcnO1xuaW1wb3J0IHN0YXIgZnJvbSAnLi9pbWFnZXMvc3Rhci5wbmcnO1xuaW1wb3J0IHdlZWsgZnJvbSAnLi9pbWFnZXMvd2Vlay5wbmcnO1xuaW1wb3J0IHRvZGF5IGZyb20gJy4vaW1hZ2VzL3RvZGF5LnBuZyc7XG5pbXBvcnQgaG9tZSBmcm9tICcuL2ltYWdlcy9ob21lLnBuZyc7XG5pbXBvcnQgd29yayBmcm9tICcuL2ltYWdlcy93b3JrLnBuZyc7XG5pbXBvcnQgcGVyc29uYWwgZnJvbSAnLi9pbWFnZXMvcGVyc29uYWwucG5nJztcbmltcG9ydCBob2JiaWVzIGZyb20gJy4vaW1hZ2VzL2hvYmJpZXMucG5nJztcbmltcG9ydCBvdGhlciBmcm9tICcuL2ltYWdlcy9vdGhlci5wbmcnO1xuaW1wb3J0IHsgaG9tZUxvYWQsIHRvZGF5TG9hZCwgdGhpc1dlZWtMb2FkLCBpbXBvcnRhbnRMb2FkLCB3b3JrTG9hZCwgcGVyc29uYWxMb2FkLCBob2JiaWVzTG9hZCwgb3RoZXJMb2FkIH0gZnJvbSAnLi9tYWluJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2TG9hZCgpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG4gIG5hdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBjb25zdCBuZXdEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbmV3SW1nID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IG5ld0xpID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbmV3QSA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29uc3QgbmV3UCA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBjb25zdCBuYXZMb2dvRGl2ID0gbmV3RGl2KCk7XG4gIG5hdkxvZ29EaXYuY2xhc3NMaXN0LmFkZCgnbmF2LWxvZ28tZGl2Jyk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKG5hdkxvZ29EaXYpO1xuXG4gIGNvbnN0IG5hdkxvZ29JbWcgPSBuZXdJbWcoKTtcbiAgbmF2TG9nb0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIG5hdkxvZ28pO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLnRleHRDb250ZW50ID0gJ1RETCc7XG5cbiAgbmF2TG9nb0Rpdi5hcHBlbmRDaGlsZChuYXZMb2dvSW1nKTtcbiAgbmF2TG9nb0Rpdi5hcHBlbmRDaGlsZChoMSk7XG5cbiAgY29uc3QgdWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdWwxLmNsYXNzTGlzdC5hZGQoJ3VsLTEnKTtcbiAgY29uc3QgdWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdWwyLmNsYXNzTGlzdC5hZGQoJ3VsLTInKTtcblxuICBuYXYuYXBwZW5kQ2hpbGQodWwxKTtcblxuICB1bDEuYXBwZW5kQ2hpbGQobmV3TGkoKSk7XG4gIHVsMS5hcHBlbmRDaGlsZChuZXdMaSgpKTtcbiAgdWwxLmFwcGVuZENoaWxkKG5ld0xpKCkpO1xuICB1bDEuYXBwZW5kQ2hpbGQobmV3TGkoKSk7XG5cbiAgdWwxLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKG5ld0ltZygpKTtcbiAgdWwxLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKG5ld1AoKSk7XG4gIHVsMS5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGhvbWUpO1xuICB1bDEuZmlyc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgdWwxLmZpcnN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaG9tZUxvYWQpO1xuXG4gIHVsMS5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChuZXdJbWcoKSk7XG4gIHVsMS5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChuZXdQKCkpO1xuICB1bDEuY2hpbGRyZW5bMV0uZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKCdzcmMnLCB0b2RheSk7XG4gIHVsMS5jaGlsZHJlblsxXS5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgdWwxLmNoaWxkcmVuWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9kYXlMb2FkKTtcblxuICB1bDEuY2hpbGRyZW5bMl0uYXBwZW5kQ2hpbGQobmV3SW1nKCkpO1xuICB1bDEuY2hpbGRyZW5bMl0uYXBwZW5kQ2hpbGQobmV3UCgpKTtcbiAgdWwxLmNoaWxkcmVuWzJdLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZSgnc3JjJywgd2Vlayk7XG4gIHVsMS5jaGlsZHJlblsyXS5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ1RoaXMgV2Vlayc7XG4gIHVsMS5jaGlsZHJlblsyXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXNXZWVrTG9hZCk7XG5cbiAgdWwxLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQobmV3SW1nKCkpO1xuICB1bDEubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChuZXdQKCkpO1xuICB1bDEubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHN0YXIpO1xuICB1bDEubGFzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG4gIHVsMS5sYXN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW1wb3J0YW50TG9hZCk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xuXG4gIG5hdi5hcHBlbmRDaGlsZCh1bDIpO1xuXG4gIHVsMi5hcHBlbmRDaGlsZChuZXdMaSgpKTtcbiAgdWwyLmFwcGVuZENoaWxkKG5ld0xpKCkpO1xuICB1bDIuYXBwZW5kQ2hpbGQobmV3TGkoKSk7XG4gIHVsMi5hcHBlbmRDaGlsZChuZXdMaSgpKTtcblxuICB1bDIuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQobmV3SW1nKCkpO1xuICB1bDIuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQobmV3UCgpKTtcbiAgdWwyLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZSgnc3JjJywgd29yayk7XG4gIHVsMi5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ1dvcmsnO1xuICB1bDIuZmlyc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3b3JrTG9hZCk7XG5cbiAgdWwyLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKG5ld0ltZygpKTtcbiAgdWwyLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKG5ld1AoKSk7XG4gIHVsMi5jaGlsZHJlblsxXS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBlcnNvbmFsKTtcbiAgdWwyLmNoaWxkcmVuWzFdLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnUGVyc29uYWwnO1xuICB1bDIuY2hpbGRyZW5bMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwZXJzb25hbExvYWQpO1xuXG4gIHVsMi5jaGlsZHJlblsyXS5hcHBlbmRDaGlsZChuZXdJbWcoKSk7XG4gIHVsMi5jaGlsZHJlblsyXS5hcHBlbmRDaGlsZChuZXdQKCkpO1xuICB1bDIuY2hpbGRyZW5bMl0uZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKCdzcmMnLCBob2JiaWVzKTtcbiAgdWwyLmNoaWxkcmVuWzJdLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnSG9iYmllcyc7XG4gIHVsMi5jaGlsZHJlblsyXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvYmJpZXNMb2FkKTtcblxuICB1bDIubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChuZXdJbWcoKSk7XG4gIHVsMi5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKG5ld1AoKSk7XG4gIHVsMi5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZSgnc3JjJywgb3RoZXIpO1xuICB1bDIubGFzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ090aGVyJztcbiAgdWwyLmxhc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvdGhlckxvYWQpXG5cbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBoZWFkZXJMb2FkIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBmb290ZXJMb2FkIGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCBuYXZMb2FkIGZyb20gJy4vbmF2JztcbmltcG9ydCB7IGhvbWVMb2FkLCB0b2RheUxvYWQsIHRoaXNXZWVrTG9hZCwgaW1wb3J0YW50TG9hZCwgd29ya0xvYWQsIHBlcnNvbmFsTG9hZCwgaG9iYmllc0xvYWQgfSBmcm9tICcuL21haW4nO1xuXG5oZWFkZXJMb2FkKCk7XG5uYXZMb2FkKCk7XG5mb290ZXJMb2FkKCk7XG5ob21lTG9hZCgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=