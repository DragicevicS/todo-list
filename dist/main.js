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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* color pallete */\n  --color-1: #1B262C;\n  --color-2: #0F4C75;\n  --color-3: #3282B8;\n  --color-4: #BBE1FA;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template: 0.5fr 6fr 0.3fr / minmax(min-content, 0.8fr) 5fr;\n  width: 100%;\n  height: 100vh;\n  background-color: var(--color-1);\n}\n\n/* header */\n\nheader {\n  grid-area: 1/2/2/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: max(100%, 350px);\n  background-color: var(--color-2);\n  box-shadow: 0 0 10px;\n}\n\nheader img {\n  transition: transform .2s ease;\n}\n\nheader img:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n}\n\n.sidebar-btn-div {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  padding-left: 0.5em;\n}\n\n.sidebar-btn-div img {\n  width: 2.2em;\n  height: 2.2em;\n}\n\n.h1-div {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  color: var(--color-4);\n  font-family: 'Sigmar', cursive;\n  font-size: 1.1rem;\n  font-style: italic;\n  letter-spacing: 2px;\n}\n\n.h1-div h1 {\n  cursor: pointer;\n}\n\n.profile-div {\n  display: flex;\n  gap: 1.2em;\n  padding-right: 1em;\n}\n\n.profile-div img {\n  width: 2.1em;\n  height: 2.1em;\n}\n\n/* nav */\n\nnav {\n  grid-area: 1/1/4/2;\n  flex-direction: column;\n  align-items: center;\n  gap: 1em;\n  padding: 3px;\n  height: max(100%, 40em);\n  background-color: var(--color-3);\n  font-family: 'Oswald', sans-serif;\n  box-shadow: 0 0 10px;\n}\n\n.nav-logo-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.3em;\n  padding-bottom: 1.6em;\n  color: var(--color-4);\n  font-size: 2.1rem;\n  font-family: 'Sigmar', cursive;\n  font-style: italic;\n  letter-spacing: 2px;\n}\n\n.nav-logo-div img {\n  width: 2.1em;\n  height: 2.1em;\n}\n\nnav ul {\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n}\n\nnav li {\n  display: flex;\n  align-items: center;\n  gap: 0.5em;\n  padding: 8px 1em;\n  color: var(--color-1);\n  font-size: 1.5rem;\n  cursor: pointer;\n  transition: transform .1s ease;\n  border-radius: 10px;\n}\n\nnav ul li:hover {\n  background-color: #0F4C75;\n  transition: 0.3 ease-in-out;\n  transform: scale(1.05);\n  color: var(--color-4);\n}\n\nnav li>img {\n  width: 1.5em;\n  height: 1.5em;\n}\n\nnav hr {\n  margin: 1em;\n  width: 80%;\n  color: var(--color-4);\n}\n\n/* main */\n\nmain {\n  grid-area: 2/2/3/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5em;\n  width: clamp(200px, 80%, 1000px);\n  height: 100%;\n  padding: 1em;\n  color: var(--color-4);\n}\n\n.content > h2 {\n  font-family: 'Sigmar', cursive;\n  font-size: 1.8rem;\n  font-style: italic;\n}\n\n/* main - add task */\n\n.content form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  font-size: 1.5rem;\n  font-family: 'Oswald', sans-serif;\n}\n\n#title,\n#details,\n#category,\n#date,\n#submit {\n  font-size: 1.2rem;\n  padding: 10px;\n  background-color: var(--color-1);\n  border: solid 2px var(--color-4);\n  color: var(--color-4);\n  border-radius: 10px;\n}\n\n#title:hover,\n#details:hover,\n#category:hover,\n#date:hover,\n#submit:hover {\n  border: solid 2px var(--color-2);\n}\n\n#category:hover,\n#date:hover,\n#submit:hover,\n#true:hover,\n#false:hover {\n  cursor: pointer;\n}\n\n#submit:hover {\n  transform: scale(1.05);\n}\n\n.content form textarea {\n  resize: none;\n}\n\n.important-div,\n.date-div {\n  display: flex;\n  align-items: center;\n  gap: 1.2em;\n  padding-top: 0.3em;\n}\n\n.important-div>div {\n  display: flex;\n  gap: 0.5em;\n}\n\n.btn-div {\n  text-align: center;\n}\n\n#submit {\n  padding: 0.5em 1.1em;\n  font-family: 'Sigmar', cursive;\n  font-style: italic;\n  font-size: 1.4rem;\n  transition: transform .2s ease;\n}\n\n/* main - lists */\n\n.task-list-div {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n  font-family: 'Oswald', sans-serif;\n  overflow: auto;\n}\n\n.list-item {\n  display: grid;\n  grid-template: 3em / min-content 1fr 0.3fr repeat(3, min-content);\n  align-items: center;\n  gap: 0.7em;\n  padding: 0 0.7em;\n  width: max(100%, 30em);\n  height: 3em;\n  border: solid 1px var(--color-4);\n  transition: transform .1s ease;\n  text-decoration: line-through;\n  border-radius: 10px;\n}\n\n.list-img {\n  width: 1.2em;\n  height: 1.2em;\n}\n\n.list-img:hover {\n  cursor: pointer;\n}\n\n.list-item:hover {\n  background-color: var(--color-2);\n  transform: scale(1.01);\n}\n\n/* main - details */\n\n.details-div {\n  position: absolute;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5em;\n  padding: 1em;\n  width: 22em;\n  height: min-content;\n  background-color: var(--color-2);\n  color: var(--color-4);\n  border: solid 2px var(--color-4);\n  border-radius: 10px;\n  font-family: 'Oswald', sans-serif;\n  font-size: 1.3rem;\n}\n\n.details-btn-div {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 1em;\n  width: 100%;\n}\n\n.details-btn {\n  width: 5em;\n  padding: 5px;\n  background-color: var(--color-2);\n  color: var(--color-4);\n  border: solid 2px var(--color-4);\n  border-radius: 10px;\n  transition: transform .2s ease;\n}\n\n.details-btn:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  border-color: var(--color-1);\n}\n\n/* footer */\n\nfooter {\n  grid-area: 3/2/4/3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--color-2);\n  color: var(--color-4);\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: italic;\n  box-shadow: 2px 0 10px black;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Sigmar&display=swap');\n\n:root {\n  /* color pallete */\n  --color-1: #1B262C;\n  --color-2: #0F4C75;\n  --color-3: #3282B8;\n  --color-4: #BBE1FA;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template: 0.5fr 6fr 0.3fr / minmax(min-content, 0.8fr) 5fr;\n  width: 100%;\n  height: 100vh;\n  background-color: var(--color-1);\n}\n\n/* header */\n\nheader {\n  grid-area: 1/2/2/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: max(100%, 350px);\n  background-color: var(--color-2);\n  box-shadow: 0 0 10px;\n}\n\nheader img {\n  transition: transform .2s ease;\n}\n\nheader img:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n}\n\n.sidebar-btn-div {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  padding-left: 0.5em;\n}\n\n.sidebar-btn-div img {\n  width: 2.2em;\n  height: 2.2em;\n}\n\n.h1-div {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  color: var(--color-4);\n  font-family: 'Sigmar', cursive;\n  font-size: 1.1rem;\n  font-style: italic;\n  letter-spacing: 2px;\n}\n\n.h1-div h1 {\n  cursor: pointer;\n}\n\n.profile-div {\n  display: flex;\n  gap: 1.2em;\n  padding-right: 1em;\n}\n\n.profile-div img {\n  width: 2.1em;\n  height: 2.1em;\n}\n\n/* nav */\n\nnav {\n  grid-area: 1/1/4/2;\n  flex-direction: column;\n  align-items: center;\n  gap: 1em;\n  padding: 3px;\n  height: max(100%, 40em);\n  background-color: var(--color-3);\n  font-family: 'Oswald', sans-serif;\n  box-shadow: 0 0 10px;\n}\n\n.nav-logo-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.3em;\n  padding-bottom: 1.6em;\n  color: var(--color-4);\n  font-size: 2.1rem;\n  font-family: 'Sigmar', cursive;\n  font-style: italic;\n  letter-spacing: 2px;\n}\n\n.nav-logo-div img {\n  width: 2.1em;\n  height: 2.1em;\n}\n\nnav ul {\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n}\n\nnav li {\n  display: flex;\n  align-items: center;\n  gap: 0.5em;\n  padding: 8px 1em;\n  color: var(--color-1);\n  font-size: 1.5rem;\n  cursor: pointer;\n  transition: transform .1s ease;\n  border-radius: 10px;\n}\n\nnav ul li:hover {\n  background-color: #0F4C75;\n  transition: 0.3 ease-in-out;\n  transform: scale(1.05);\n  color: var(--color-4);\n}\n\nnav li>img {\n  width: 1.5em;\n  height: 1.5em;\n}\n\nnav hr {\n  margin: 1em;\n  width: 80%;\n  color: var(--color-4);\n}\n\n/* main */\n\nmain {\n  grid-area: 2/2/3/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5em;\n  width: clamp(200px, 80%, 1000px);\n  height: 100%;\n  padding: 1em;\n  color: var(--color-4);\n}\n\n.content > h2 {\n  font-family: 'Sigmar', cursive;\n  font-size: 1.8rem;\n  font-style: italic;\n}\n\n/* main - add task */\n\n.content form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  font-size: 1.5rem;\n  font-family: 'Oswald', sans-serif;\n}\n\n#title,\n#details,\n#category,\n#date,\n#submit {\n  font-size: 1.2rem;\n  padding: 10px;\n  background-color: var(--color-1);\n  border: solid 2px var(--color-4);\n  color: var(--color-4);\n  border-radius: 10px;\n}\n\n#title:hover,\n#details:hover,\n#category:hover,\n#date:hover,\n#submit:hover {\n  border: solid 2px var(--color-2);\n}\n\n#category:hover,\n#date:hover,\n#submit:hover,\n#true:hover,\n#false:hover {\n  cursor: pointer;\n}\n\n#submit:hover {\n  transform: scale(1.05);\n}\n\n.content form textarea {\n  resize: none;\n}\n\n.important-div,\n.date-div {\n  display: flex;\n  align-items: center;\n  gap: 1.2em;\n  padding-top: 0.3em;\n}\n\n.important-div>div {\n  display: flex;\n  gap: 0.5em;\n}\n\n.btn-div {\n  text-align: center;\n}\n\n#submit {\n  padding: 0.5em 1.1em;\n  font-family: 'Sigmar', cursive;\n  font-style: italic;\n  font-size: 1.4rem;\n  transition: transform .2s ease;\n}\n\n/* main - lists */\n\n.task-list-div {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n  font-family: 'Oswald', sans-serif;\n  overflow: auto;\n}\n\n.list-item {\n  display: grid;\n  grid-template: 3em / min-content 1fr 0.3fr repeat(3, min-content);\n  align-items: center;\n  gap: 0.7em;\n  padding: 0 0.7em;\n  width: max(100%, 30em);\n  height: 3em;\n  border: solid 1px var(--color-4);\n  transition: transform .1s ease;\n  text-decoration: line-through;\n  border-radius: 10px;\n}\n\n.list-img {\n  width: 1.2em;\n  height: 1.2em;\n}\n\n.list-img:hover {\n  cursor: pointer;\n}\n\n.list-item:hover {\n  background-color: var(--color-2);\n  transform: scale(1.01);\n}\n\n/* main - details */\n\n.details-div {\n  position: absolute;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5em;\n  padding: 1em;\n  width: 22em;\n  height: min-content;\n  background-color: var(--color-2);\n  color: var(--color-4);\n  border: solid 2px var(--color-4);\n  border-radius: 10px;\n  font-family: 'Oswald', sans-serif;\n  font-size: 1.3rem;\n}\n\n.details-btn-div {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 1em;\n  width: 100%;\n}\n\n.details-btn {\n  width: 5em;\n  padding: 5px;\n  background-color: var(--color-2);\n  color: var(--color-4);\n  border: solid 2px var(--color-4);\n  border-radius: 10px;\n  transition: transform .2s ease;\n}\n\n.details-btn:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  border-color: var(--color-1);\n}\n\n/* footer */\n\nfooter {\n  grid-area: 3/2/4/3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--color-2);\n  color: var(--color-4);\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: italic;\n  box-shadow: 2px 0 10px black;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
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

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
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
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main */ "./src/main.js");






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

  // loading home page by clicking on the title
  h1.addEventListener('click', _main__WEBPACK_IMPORTED_MODULE_4__.homeLoad);
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");








const newDiv = () => document.createElement('div');
const newImg = () => document.createElement('img');
const newSpan = () => document.createElement('span');

const body = document.querySelector('body');
const main = document.querySelector('main');
const contentDiv = document.querySelector('.content');
const h2 = document.createElement('h2');
const taskListDiv = newDiv();
taskListDiv.classList.add('task-list-div');

const detailsDiv = newDiv();
detailsDiv.classList.add('details-div');
detailsDiv.style.display = 'none';
detailsDiv.appendChild(newDiv());
detailsDiv.appendChild(newDiv());
detailsDiv.appendChild(newDiv());
detailsDiv.appendChild(newDiv());
detailsDiv.appendChild(newDiv());
detailsDiv.appendChild(newDiv());
detailsDiv.lastElementChild.classList.add('details-btn-div');

const editBtn = document.createElement('button');
editBtn.setAttribute('type', 'button');
editBtn.textContent = 'Edit';
editBtn.classList.add('details-btn', 'edit-btn');
const okBtn = document.createElement('button');
okBtn.setAttribute('type', 'button');
okBtn.textContent = 'Ok';
okBtn.classList.add('details-btn', 'ok-btn');
detailsDiv.lastElementChild.appendChild(editBtn);
detailsDiv.lastElementChild.appendChild(okBtn);

function listTasks(category) { // displays tasks filtering them based on category
  taskListDiv.textContent = '';
  let defaultTaskList = [];
  let taskList = localStorage.getItem('taskList');
  taskList = JSON.parse(taskList || JSON.stringify(defaultTaskList));
  
  for (let i=0; i < taskList.length; i++) {
    // creating img elements for every task
    const checkedImg = newImg();
    checkedImg.setAttribute('src', _images_checked_png__WEBPACK_IMPORTED_MODULE_0__);
    checkedImg.classList.add('list-img', 'checked');
    const uncheckedImg = newImg();
    uncheckedImg.setAttribute('src', _images_unchecked_png__WEBPACK_IMPORTED_MODULE_1__);
    uncheckedImg.classList.add('list-img', 'checked');
    const starImg = newImg();
    starImg.setAttribute('src', _images_star_png__WEBPACK_IMPORTED_MODULE_2__);
    starImg.classList.add('list-img', 'important');
    const starEmptyImg = newImg();
    starEmptyImg.setAttribute('src', _images_star_empty_png__WEBPACK_IMPORTED_MODULE_3__);
    starEmptyImg.classList.add('list-img', 'important');
    const infoImg = newImg();
    infoImg.setAttribute('src', _images_info_png__WEBPACK_IMPORTED_MODULE_4__);
    infoImg.classList.add('list-img', 'info');
    const removeImg = newImg();
    removeImg.setAttribute('src', _images_remove_png__WEBPACK_IMPORTED_MODULE_5__);
    removeImg.classList.add('list-img', 'remove');

    function appendList(category) { // appends all html elements for selected task 
      let task = taskList[i];
      let taskInfo = newDiv();
      taskInfo.setAttribute('id', i);
      taskInfo.classList.add('list-item');

      if (task.checked == 'false') {
        taskInfo.appendChild(uncheckedImg);
        taskInfo.style.textDecoration = 'none';
        taskInfo.style.opacity = '1';
      }
      if (task.checked == 'true') {
        taskInfo.appendChild(checkedImg);
        taskInfo.style.textDecoration = 'line-through';
        taskInfo.style.opacity = '0.4';
      }

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

    // filtering task based on which category they belong and displaying them accordingly
    if (category == 'home') appendList(category);
    else if (category == 'today') { if ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(taskList[i].date))) appendList(category); }
    else if (category == 'this week') { if ((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(taskList[i].date))) appendList(category); }
    else if (category == 'important') { if (taskList[i].important == 'true') appendList(category); }
    else if (category == 'work') { if (taskList[i].category == 'Work') appendList(); }
    else if (category == 'personal') { if (taskList[i].category == 'Personal') appendList(category); }
    else if (category == 'hobbies') { if (taskList[i].category == 'Hobbies') appendList(category); }
    else if (category == 'other') { if (taskList[i].category == 'Other') appendList(); }
    else return;
  };

  toggleDoneStatus(category);
  toggleImportantStatus(category); 
  removeTask(category);
  toggleTaskDetails(category);
  main.appendChild(detailsDiv);
};

const toggleDoneStatus = (category) => { // toggles status of a task in local storage
  const checkedBtn = document.querySelectorAll('.checked');
  for (let i=0; i < checkedBtn.length; i++) {
    checkedBtn[i].addEventListener('click', (e) => {
      const taskId = e.target.closest('div').id;
      const taskList = JSON.parse(localStorage.getItem('taskList'));
      taskList[taskId].checked = taskList[taskId].checked == 'true' ? 'false' : 'true';
      localStorage.setItem('taskList', JSON.stringify(taskList));
      listTasks(category);
    });
  };
};

const toggleImportantStatus = (category) => { // toggles importance status of a task in local storage
  const importantBtn = document.querySelectorAll('.important');
  for (let i=0; i < importantBtn.length; i++) {
    importantBtn[i].addEventListener('click', (e) => {
      const taskId = e.target.closest('div').id;
      const taskList = JSON.parse(localStorage.getItem('taskList'));
      taskList[taskId].important = taskList[taskId].important == 'true' ? 'false' : 'true';
      localStorage.setItem('taskList', JSON.stringify(taskList));
      listTasks(category);
    });
  };
};

const toggleTaskDetails = (category) => { // toggles display of the details window
  const infoBtn = document.querySelectorAll('.info');
  for (let i=0; i < infoBtn.length; i++) {
    infoBtn[i].addEventListener('click', (e) => {
      const taskId = e.target.closest('div').id;
      const taskList = JSON.parse(localStorage.getItem('taskList'));

      // display information about selected task
      detailsDiv.style.display = detailsDiv.style.display == 'flex' ? 'none' : 'flex';
      detailsDiv.firstElementChild.textContent = `Title: ${taskList[taskId].title}`;
      const details = taskList[taskId].details == '' ? 'none' : taskList[taskId].details;
      detailsDiv.children[1].textContent = `Details: ${details}`;
      detailsDiv.children[2].textContent = `Due date: ${taskList[taskId].date}`;
      detailsDiv.children[3].textContent = `Category: ${taskList[taskId].category}`;
      const important = taskList[taskId].important == 'true' ? 'yes' : 'no';
      detailsDiv.children[4].textContent = `Important: ${important}`;

      // clicking anywhere on the body hides details window
      if (detailsDiv.style.display == 'flex') {
        body.addEventListener('click', (e) => {
          if (e.target.classList != 'details-div' && e.target.classList != 'details-btn edit-btn' && e.target.classList != 'list-img info') detailsDiv.style.display = 'none';
        });
      };
    });
  };
};

const removeTask = (category) => { // removing tasks from locale storage
  const removeBtn = document.querySelectorAll('.remove');
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

// loading functions for each category
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

module.exports = __webpack_require__.p + "db89204398021c165567.png";

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

module.exports = __webpack_require__.p + "6bfcaf00df59a372f2c8.png";

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

module.exports = __webpack_require__.p + "9947226900fa707b8e39.png";

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

module.exports = __webpack_require__.p + "ee9e8ec26b9cbb65caee.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNhO0FBQ0E7QUFDTjtBQUNNOztBQUVsQyxtREFBVTtBQUNWLGdEQUFPO0FBQ1AsbURBQVU7QUFDViwrQ0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGQtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkJmZhbWlseT1TaWdtYXImZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLyogY29sb3IgcGFsbGV0ZSAqL1xcbiAgLS1jb2xvci0xOiAjMUIyNjJDO1xcbiAgLS1jb2xvci0yOiAjMEY0Qzc1O1xcbiAgLS1jb2xvci0zOiAjMzI4MkI4O1xcbiAgLS1jb2xvci00OiAjQkJFMUZBO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAwLjVmciA2ZnIgMC4zZnIgLyBtaW5tYXgobWluLWNvbnRlbnQsIDAuOGZyKSA1ZnI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogbWF4KDEwMCUsIDM1MHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHg7XFxufVxcblxcbmhlYWRlciBpbWcge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlO1xcbn1cXG5cXG5oZWFkZXIgaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnNpZGViYXItYnRuLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcbn1cXG5cXG4uc2lkZWJhci1idG4tZGl2IGltZyB7XFxuICB3aWR0aDogMi4yZW07XFxuICBoZWlnaHQ6IDIuMmVtO1xcbn1cXG5cXG4uaDEtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGZvbnQtZmFtaWx5OiAnU2lnbWFyJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLmgxLWRpdiBoMSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9maWxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG59XFxuXFxuLnByb2ZpbGUtZGl2IGltZyB7XFxuICB3aWR0aDogMi4xZW07XFxuICBoZWlnaHQ6IDIuMWVtO1xcbn1cXG5cXG4vKiBuYXYgKi9cXG5cXG5uYXYge1xcbiAgZ3JpZC1hcmVhOiAxLzEvNC8yO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGhlaWdodDogbWF4KDEwMCUsIDQwZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMyk7XFxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweDtcXG59XFxuXFxuLm5hdi1sb2dvLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjNlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjZlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGZvbnQtc2l6ZTogMi4xcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdTaWdtYXInLCBjdXJzaXZlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLm5hdi1sb2dvLWRpdiBpbWcge1xcbiAgd2lkdGg6IDIuMWVtO1xcbiAgaGVpZ2h0OiAyLjFlbTtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5uYXYgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNWVtO1xcbiAgcGFkZGluZzogOHB4IDFlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxubmF2IHVsIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRjRDNzU7XFxuICB0cmFuc2l0aW9uOiAwLjMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbn1cXG5cXG5uYXYgbGk+aW1nIHtcXG4gIHdpZHRoOiAxLjVlbTtcXG4gIGhlaWdodDogMS41ZW07XFxufVxcblxcbm5hdiBociB7XFxuICBtYXJnaW46IDFlbTtcXG4gIHdpZHRoOiA4MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbi8qIG1haW4gKi9cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogMi8yLzMvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxuICB3aWR0aDogY2xhbXAoMjAwcHgsIDgwJSwgMTAwMHB4KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLmNvbnRlbnQgPiBoMiB7XFxuICBmb250LWZhbWlseTogJ1NpZ21hcicsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyogbWFpbiAtIGFkZCB0YXNrICovXFxuXFxuLmNvbnRlbnQgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbiN0aXRsZSxcXG4jZGV0YWlscyxcXG4jY2F0ZWdvcnksXFxuI2RhdGUsXFxuI3N1Ym1pdCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLTQpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3RpdGxlOmhvdmVyLFxcbiNkZXRhaWxzOmhvdmVyLFxcbiNjYXRlZ29yeTpob3ZlcixcXG4jZGF0ZTpob3ZlcixcXG4jc3VibWl0OmhvdmVyIHtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLTIpO1xcbn1cXG5cXG4jY2F0ZWdvcnk6aG92ZXIsXFxuI2RhdGU6aG92ZXIsXFxuI3N1Ym1pdDpob3ZlcixcXG4jdHJ1ZTpob3ZlcixcXG4jZmFsc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc3VibWl0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5jb250ZW50IGZvcm0gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uaW1wb3J0YW50LWRpdixcXG4uZGF0ZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuMmVtO1xcbiAgcGFkZGluZy10b3A6IDAuM2VtO1xcbn1cXG5cXG4uaW1wb3J0YW50LWRpdj5kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41ZW07XFxufVxcblxcbi5idG4tZGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3N1Ym1pdCB7XFxuICBwYWRkaW5nOiAwLjVlbSAxLjFlbTtcXG4gIGZvbnQtZmFtaWx5OiAnU2lnbWFyJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlO1xcbn1cXG5cXG4vKiBtYWluIC0gbGlzdHMgKi9cXG5cXG4udGFzay1saXN0LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDNlbSAvIG1pbi1jb250ZW50IDFmciAwLjNmciByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC43ZW07XFxuICBwYWRkaW5nOiAwIDAuN2VtO1xcbiAgd2lkdGg6IG1heCgxMDAlLCAzMGVtKTtcXG4gIGhlaWdodDogM2VtO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY29sb3ItNCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGVhc2U7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5saXN0LWltZyB7XFxuICB3aWR0aDogMS4yZW07XFxuICBoZWlnaHQ6IDEuMmVtO1xcbn1cXG5cXG4ubGlzdC1pbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdC1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG59XFxuXFxuLyogbWFpbiAtIGRldGFpbHMgKi9cXG5cXG4uZGV0YWlscy1kaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHdpZHRoOiAyMmVtO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItNCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5kZXRhaWxzLWJ0bi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRldGFpbHMtYnRuIHtcXG4gIHdpZHRoOiA1ZW07XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLTQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZTtcXG59XFxuXFxuLmRldGFpbHMtYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItMSk7XFxufVxcblxcbi8qIGZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICBncmlkLWFyZWE6IDMvMi80LzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGJveC1zaGFkb3c6IDJweCAwIDEwcHggYmxhY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0RBQStEO0VBQy9ELFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBLFFB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QWlDO0VBQ2pDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLDRCQUE0QjtBQUM5Qjs7QUFFQSxXQUFXOztBQUVYO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkJmZhbWlseT1TaWdtYXImZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLyogY29sb3IgcGFsbGV0ZSAqL1xcbiAgLS1jb2xvci0xOiAjMUIyNjJDO1xcbiAgLS1jb2xvci0yOiAjMEY0Qzc1O1xcbiAgLS1jb2xvci0zOiAjMzI4MkI4O1xcbiAgLS1jb2xvci00OiAjQkJFMUZBO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAwLjVmciA2ZnIgMC4zZnIgLyBtaW5tYXgobWluLWNvbnRlbnQsIDAuOGZyKSA1ZnI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogbWF4KDEwMCUsIDM1MHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHg7XFxufVxcblxcbmhlYWRlciBpbWcge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlO1xcbn1cXG5cXG5oZWFkZXIgaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnNpZGViYXItYnRuLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcbn1cXG5cXG4uc2lkZWJhci1idG4tZGl2IGltZyB7XFxuICB3aWR0aDogMi4yZW07XFxuICBoZWlnaHQ6IDIuMmVtO1xcbn1cXG5cXG4uaDEtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGZvbnQtZmFtaWx5OiAnU2lnbWFyJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLmgxLWRpdiBoMSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9maWxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG59XFxuXFxuLnByb2ZpbGUtZGl2IGltZyB7XFxuICB3aWR0aDogMi4xZW07XFxuICBoZWlnaHQ6IDIuMWVtO1xcbn1cXG5cXG4vKiBuYXYgKi9cXG5cXG5uYXYge1xcbiAgZ3JpZC1hcmVhOiAxLzEvNC8yO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGhlaWdodDogbWF4KDEwMCUsIDQwZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMyk7XFxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweDtcXG59XFxuXFxuLm5hdi1sb2dvLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjNlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjZlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGZvbnQtc2l6ZTogMi4xcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdTaWdtYXInLCBjdXJzaXZlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLm5hdi1sb2dvLWRpdiBpbWcge1xcbiAgd2lkdGg6IDIuMWVtO1xcbiAgaGVpZ2h0OiAyLjFlbTtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5uYXYgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNWVtO1xcbiAgcGFkZGluZzogOHB4IDFlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxubmF2IHVsIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRjRDNzU7XFxuICB0cmFuc2l0aW9uOiAwLjMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbn1cXG5cXG5uYXYgbGk+aW1nIHtcXG4gIHdpZHRoOiAxLjVlbTtcXG4gIGhlaWdodDogMS41ZW07XFxufVxcblxcbm5hdiBociB7XFxuICBtYXJnaW46IDFlbTtcXG4gIHdpZHRoOiA4MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbi8qIG1haW4gKi9cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogMi8yLzMvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxuICB3aWR0aDogY2xhbXAoMjAwcHgsIDgwJSwgMTAwMHB4KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLmNvbnRlbnQgPiBoMiB7XFxuICBmb250LWZhbWlseTogJ1NpZ21hcicsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyogbWFpbiAtIGFkZCB0YXNrICovXFxuXFxuLmNvbnRlbnQgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbiN0aXRsZSxcXG4jZGV0YWlscyxcXG4jY2F0ZWdvcnksXFxuI2RhdGUsXFxuI3N1Ym1pdCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLTQpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3RpdGxlOmhvdmVyLFxcbiNkZXRhaWxzOmhvdmVyLFxcbiNjYXRlZ29yeTpob3ZlcixcXG4jZGF0ZTpob3ZlcixcXG4jc3VibWl0OmhvdmVyIHtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLTIpO1xcbn1cXG5cXG4jY2F0ZWdvcnk6aG92ZXIsXFxuI2RhdGU6aG92ZXIsXFxuI3N1Ym1pdDpob3ZlcixcXG4jdHJ1ZTpob3ZlcixcXG4jZmFsc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc3VibWl0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5jb250ZW50IGZvcm0gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uaW1wb3J0YW50LWRpdixcXG4uZGF0ZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuMmVtO1xcbiAgcGFkZGluZy10b3A6IDAuM2VtO1xcbn1cXG5cXG4uaW1wb3J0YW50LWRpdj5kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41ZW07XFxufVxcblxcbi5idG4tZGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3N1Ym1pdCB7XFxuICBwYWRkaW5nOiAwLjVlbSAxLjFlbTtcXG4gIGZvbnQtZmFtaWx5OiAnU2lnbWFyJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlO1xcbn1cXG5cXG4vKiBtYWluIC0gbGlzdHMgKi9cXG5cXG4udGFzay1saXN0LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDNlbSAvIG1pbi1jb250ZW50IDFmciAwLjNmciByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC43ZW07XFxuICBwYWRkaW5nOiAwIDAuN2VtO1xcbiAgd2lkdGg6IG1heCgxMDAlLCAzMGVtKTtcXG4gIGhlaWdodDogM2VtO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY29sb3ItNCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGVhc2U7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5saXN0LWltZyB7XFxuICB3aWR0aDogMS4yZW07XFxuICBoZWlnaHQ6IDEuMmVtO1xcbn1cXG5cXG4ubGlzdC1pbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdC1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG59XFxuXFxuLyogbWFpbiAtIGRldGFpbHMgKi9cXG5cXG4uZGV0YWlscy1kaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHdpZHRoOiAyMmVtO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItNCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5kZXRhaWxzLWJ0bi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRldGFpbHMtYnRuIHtcXG4gIHdpZHRoOiA1ZW07XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLTQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZTtcXG59XFxuXFxuLmRldGFpbHMtYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItMSk7XFxufVxcblxcbi8qIGZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICBncmlkLWFyZWE6IDMvMi80LzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGJveC1zaGFkb3c6IDJweCAwIDEwcHggYmxhY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRhc2tMb2FkKCkge1xuICBjb25zdCBuZXdEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbmV3SW1nID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IG5ld0xhYmVsID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgbmV3T3B0aW9uID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IG5ld0lucHV0ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29udGVudERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLnRleHRDb250ZW50ID0gJ0FkZCBhIHRhc2snO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBuZXdMYWJlbCgpO1xuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgY29uc3QgdGl0bGVJbnB1dCA9IG5ld0lucHV0KCk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdXaGF0IGRvIHlvdSBuZWVkIHRvIGRvPycpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBjb25zdCBkZXRhaWxzTGFiZWwgPSBuZXdMYWJlbCgpO1xuICBkZXRhaWxzTGFiZWwudGV4dENvbnRlbnQgPSAnRGV0YWlscyAob3B0aW9uYWwpJztcbiAgY29uc3QgZGV0YWlsc1RleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgZGV0YWlsc1RleHRhcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXRhaWxzJyk7XG4gIGRldGFpbHNUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RldGFpbHMnKTtcbiAgZGV0YWlsc1RleHRhcmVhLnNldEF0dHJpYnV0ZSgncm93cycsICczJyk7XG4gIGRldGFpbHNUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcyNTAnKTtcbiAgZGV0YWlsc1RleHRhcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHRhc2suLi4nKTtcbiAgZGV0YWlsc1RleHRhcmVhLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRldGFpbHNMYWJlbCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGV0YWlsc1RleHRhcmVhKTtcblxuICBjb25zdCBjYXRlZ29yeUxhYmVsID0gbmV3TGFiZWwoKTtcbiAgY2F0ZWdvcnlMYWJlbC50ZXh0Q29udGVudCA9ICdDaG9vc2UgY2F0ZWdvcnknO1xuICBjb25zdCBjYXRlZ29yeVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBjYXRlZ29yeVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2F0ZWdvcnknKTtcbiAgY2F0ZWdvcnlTZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjYXRlZ29yeScpO1xuICBjYXRlZ29yeVNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbnN0IG9wdGlvbkJsYW5rID0gbmV3T3B0aW9uKCk7XG4gIG9wdGlvbkJsYW5rLnRleHRDb250ZW50ID0gJyc7XG4gIG9wdGlvbkJsYW5rLnNlbGVjdGVkID0gdHJ1ZTtcbiAgb3B0aW9uQmxhbmsudmFsdWUgPSAnJztcbiAgY29uc3Qgb3B0aW9uV29yayA9IG5ld09wdGlvbigpO1xuICBvcHRpb25Xb3JrLnRleHRDb250ZW50ID0gJ1dvcmsnO1xuICBvcHRpb25Xb3JrLnZhbHVlID0gJ1dvcmsnO1xuICBjb25zdCBvcHRpb25QZXJzb25hbCA9IG5ld09wdGlvbigpO1xuICBvcHRpb25QZXJzb25hbC50ZXh0Q29udGVudCA9ICdQZXJzb25hbCc7XG4gIG9wdGlvblBlcnNvbmFsLnZhbHVlID0gJ1BlcnNvbmFsJztcbiAgY29uc3Qgb3B0aW9uSG9iYmllcyA9IG5ld09wdGlvbigpO1xuICBvcHRpb25Ib2JiaWVzLnRleHRDb250ZW50ID0gJ0hvYmJpZXMnO1xuICBvcHRpb25Ib2JiaWVzLnZhbHVlID0gJ0hvYmJpZXMnO1xuICBjb25zdCBvcHRpb25PdGhlciA9IG5ld09wdGlvbigpO1xuICBvcHRpb25PdGhlci50ZXh0Q29udGVudCA9ICdPdGhlcic7XG4gIG9wdGlvbk90aGVyLnZhbHVlID0gJ090aGVyJztcbiAgY2F0ZWdvcnlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uQmxhbmspO1xuICBjYXRlZ29yeVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25Xb3JrKTtcbiAgY2F0ZWdvcnlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uUGVyc29uYWwpO1xuICBjYXRlZ29yeVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25Ib2JiaWVzKTtcbiAgY2F0ZWdvcnlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uT3RoZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGNhdGVnb3J5TGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0KTtcblxuICBjb25zdCBpbXBvcnRhbnREaXYgPSBuZXdEaXYoKTtcbiAgaW1wb3J0YW50RGl2LmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudC1kaXYnKTtcbiAgY29uc3QgaW1wb3J0YW50TGFiZWwgPSBuZXdMYWJlbCgpO1xuICBpbXBvcnRhbnRMYWJlbC50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQ/ICc7XG4gIGltcG9ydGFudERpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnRMYWJlbCk7XG4gIGNvbnN0IGltcG9ydGFudElucHV0RGl2ID0gbmV3RGl2KCk7XG4gIGNvbnN0IGltcG9ydGFudElucHV0WWVzID0gbmV3SW5wdXQoKTtcbiAgaW1wb3J0YW50SW5wdXRZZXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIGltcG9ydGFudElucHV0WWVzLnNldEF0dHJpYnV0ZSgnbmFtZScsICdpbXBvcnRhbnQnKTtcbiAgaW1wb3J0YW50SW5wdXRZZXMuc2V0QXR0cmlidXRlKCdpZCcsICd0cnVlJyk7XG4gIGNvbnN0IGltcG9ydGFudElucHV0WWVzTGFiZWwgPSBuZXdMYWJlbCgpO1xuICBpbXBvcnRhbnRJbnB1dFllc0xhYmVsLnRleHRDb250ZW50ID0gJ1llcyc7XG4gIGltcG9ydGFudElucHV0WWVzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAneWVzJyk7XG4gIGNvbnN0IGltcG9ydGFudElucHV0Tm8gPSBuZXdJbnB1dCgpO1xuICBpbXBvcnRhbnRJbnB1dE5vLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICBpbXBvcnRhbnRJbnB1dE5vLnNldEF0dHJpYnV0ZSgnbmFtZScsICdpbXBvcnRhbnQnKTtcbiAgaW1wb3J0YW50SW5wdXROby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZhbHNlJyk7XG4gIGltcG9ydGFudElucHV0Tm8uY2hlY2tlZCA9IHRydWU7XG4gIGNvbnN0IGltcG9ydGFudElucHV0Tm9MYWJlbCA9IG5ld0xhYmVsKCk7XG4gIGltcG9ydGFudElucHV0Tm9MYWJlbC50ZXh0Q29udGVudCA9ICdObyc7XG4gIGltcG9ydGFudElucHV0Tm9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdubycpO1xuICBpbXBvcnRhbnRJbnB1dERpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnRJbnB1dFllcyk7XG4gIGltcG9ydGFudElucHV0RGl2LmFwcGVuZENoaWxkKGltcG9ydGFudElucHV0WWVzTGFiZWwpO1xuICBpbXBvcnRhbnRJbnB1dERpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnRJbnB1dE5vKTtcbiAgaW1wb3J0YW50SW5wdXREaXYuYXBwZW5kQ2hpbGQoaW1wb3J0YW50SW5wdXROb0xhYmVsKTtcbiAgaW1wb3J0YW50RGl2LmFwcGVuZENoaWxkKGltcG9ydGFudElucHV0RGl2KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChpbXBvcnRhbnREaXYpO1xuXG4gIGNvbnN0IGRhdGVEaXYgPSBuZXdEaXYoKTtcbiAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkYXRlLWRpdicpO1xuICBjb25zdCBkYXRlTGFiZWwgPSBuZXdMYWJlbCgpO1xuICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRGF0ZTogJztcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBuZXdJbnB1dCgpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcbiAgZGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuXG4gIGNvbnN0IGJ0bkRpdiA9IG5ld0RpdigpO1xuICBidG5EaXYuY2xhc3NMaXN0LmFkZCgnYnRuLWRpdicpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBuZXdJbnB1dCgpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCduYW1lJywgJ3N1Ym1pdCcpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQnKTtcbiAgc3VibWl0QnRuLnZhbHVlID0gJ0FkZCdcbiAgYnRuRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnRuRGl2KTtcblxuICBjb25zdCBjcmVhdGVUYXNrID0gKHRpdGxlLCBkZXRhaWxzLCBjYXRlZ29yeSwgaW1wb3J0YW50LCBkYXRlLCBjaGVja2VkKSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgZGV0YWlscywgY2F0ZWdvcnksIGltcG9ydGFudCwgZGF0ZSwgY2hlY2tlZH07XG4gIH07XG4gIFxuICBsZXQgZGVmYXVsdFRhc2tMaXN0ID0gW107XG4gIGxldCB0YXNrTGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpO1xuICB0YXNrTGlzdCA9IEpTT04ucGFyc2UodGFza0xpc3QgfHwgSlNPTi5zdHJpbmdpZnkoZGVmYXVsdFRhc2tMaXN0KSk7XG5cbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMnKS52YWx1ZTtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeScpLnZhbHVlO1xuICAgIGNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbXBvcnRhbnRcIl06Y2hlY2tlZCcpLmlkO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuXG4gICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2sodGl0bGUsIGRldGFpbHMsIGNhdGVnb3J5LCBpbXBvcnRhbnQsIGRhdGUsICdmYWxzZScpO1xuICAgIHRhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG4gIH0pO1xufTtcblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9vdGVyTG9hZCgpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0IMKpIDIwMjMgRHJhZ2ljZXZpY1MnO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQocCk7XG59OyIsImltcG9ydCBzaWRlYmFyIGZyb20gJy4vaW1hZ2VzL3NpZGViYXIucG5nJztcbmltcG9ydCBhY2NvdW50IGZyb20gJy4vaW1hZ2VzL2FjY291bnQucG5nJztcbmltcG9ydCBhZGQgZnJvbSAnLi9pbWFnZXMvYWRkLnBuZyc7XG5pbXBvcnQgYWRkVGFza0xvYWQgZnJvbSAnLi9hZGQtdGFzayc7XG5pbXBvcnQgeyBob21lTG9hZCB9IGZyb20gJy4vbWFpbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlckxvYWQoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG4gIGNvbnN0IG5ld0RpdiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBuZXdJbWcgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICBjb25zdCBzaWRlYmFyQnRuRGl2ID0gbmV3RGl2KCk7XG4gIHNpZGViYXJCdG5EaXYuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1idG4tZGl2Jyk7XG4gIGNvbnN0IGgxRGl2ID0gbmV3RGl2KCk7XG4gIGgxRGl2LmNsYXNzTGlzdC5hZGQoJ2gxLWRpdicpO1xuICBjb25zdCBwcm9maWxlRGl2ID0gbmV3RGl2KCk7XG4gIHByb2ZpbGVEaXYuY2xhc3NMaXN0LmFkZCgncHJvZmlsZS1kaXYnKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2lkZWJhckJ0bkRpdik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoMURpdik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChwcm9maWxlRGl2KTtcblxuICBjb25zdCBzaWRlYmFySW1nID0gbmV3SW1nKCk7XG4gIHNpZGViYXJJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBzaWRlYmFyKTtcblxuICBzaWRlYmFyQnRuRGl2LmFwcGVuZENoaWxkKHNpZGViYXJJbWcpO1xuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEudGV4dENvbnRlbnQgPSAnVG9EbyBMaXN0JztcblxuICBoMURpdi5hcHBlbmRDaGlsZChoMSk7XG5cbiAgY29uc3QgYWRkSW1nID0gbmV3SW1nKCk7XG4gIGFkZEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGFkZCk7XG4gIGNvbnN0IGFjY291bnRJbWcgPSBuZXdJbWcoKTtcbiAgYWNjb3VudEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGFjY291bnQpO1xuXG4gIHByb2ZpbGVEaXYuYXBwZW5kQ2hpbGQoYWRkSW1nKTtcbiAgcHJvZmlsZURpdi5hcHBlbmRDaGlsZChhY2NvdW50SW1nKTtcblxuICAvLyBoaWRpbmcgLyBkaXNwbGF5aW5nIHRoZSBuYXZpZ2F0aW9uIG9uIGNsaWNrXG4gIHNpZGViYXJJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKG5hdi5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgaGVhZGVyLnN0eWxlLmdyaWRBcmVhID0gJzEvMS8yLzMnO1xuICAgICAgbWFpbi5zdHlsZS5ncmlkQXJlYSA9ICcyLzEvMy8zJztcbiAgICAgIGZvb3Rlci5zdHlsZS5ncmlkQXJlYSA9ICczLzEvNC8zJ1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGhlYWRlci5zdHlsZS5ncmlkQXJlYSA9ICcxLzIvMi8zJztcbiAgICAgIG1haW4uc3R5bGUuZ3JpZEFyZWEgPSAnMi8yLzMvMyc7XG4gICAgICBmb290ZXIuc3R5bGUuZ3JpZEFyZWEgPSAnMy8yLzQvMydcbiAgICB9O1xuICB9KTtcblxuICAvLyBkaXNwbGF5aW5nIFwiQWRkIHRhc2tcIiBmb3JtIG9uIG1haW5cbiAgYWRkSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFza0xvYWQpO1xuXG4gIC8vIGxvYWRpbmcgaG9tZSBwYWdlIGJ5IGNsaWNraW5nIG9uIHRoZSB0aXRsZVxuICBoMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvbWVMb2FkKTtcbn07IiwiaW1wb3J0IGNoZWNrZWQgZnJvbSAnLi9pbWFnZXMvY2hlY2tlZC5wbmcnO1xuaW1wb3J0IHVuY2hlY2tlZCBmcm9tICcuL2ltYWdlcy91bmNoZWNrZWQucG5nJztcbmltcG9ydCBzdGFyIGZyb20gJy4vaW1hZ2VzL3N0YXIucG5nJztcbmltcG9ydCBzdGFyRW1wdHkgZnJvbSAnLi9pbWFnZXMvc3Rhci1lbXB0eS5wbmcnO1xuaW1wb3J0IGluZm8gZnJvbSAnLi9pbWFnZXMvaW5mby5wbmcnO1xuaW1wb3J0IHJlbW92ZSBmcm9tICcuL2ltYWdlcy9yZW1vdmUucG5nJztcbmltcG9ydCB7IGlzVG9kYXksIGlzVGhpc1dlZWsgfSBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IG5ld0RpdiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbmV3SW1nID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5jb25zdCBuZXdTcGFuID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuY29uc3QgdGFza0xpc3REaXYgPSBuZXdEaXYoKTtcbnRhc2tMaXN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdC1kaXYnKTtcblxuY29uc3QgZGV0YWlsc0RpdiA9IG5ld0RpdigpO1xuZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWRpdicpO1xuZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChuZXdEaXYoKSk7XG5kZXRhaWxzRGl2LmFwcGVuZENoaWxkKG5ld0RpdigpKTtcbmRldGFpbHNEaXYuYXBwZW5kQ2hpbGQobmV3RGl2KCkpO1xuZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChuZXdEaXYoKSk7XG5kZXRhaWxzRGl2LmFwcGVuZENoaWxkKG5ld0RpdigpKTtcbmRldGFpbHNEaXYuYXBwZW5kQ2hpbGQobmV3RGl2KCkpO1xuZGV0YWlsc0Rpdi5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtYnRuLWRpdicpO1xuXG5jb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5lZGl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbmVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG5lZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtYnRuJywgJ2VkaXQtYnRuJyk7XG5jb25zdCBva0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xub2tCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xub2tCdG4udGV4dENvbnRlbnQgPSAnT2snO1xub2tCdG4uY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1idG4nLCAnb2stYnRuJyk7XG5kZXRhaWxzRGl2Lmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5kZXRhaWxzRGl2Lmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQob2tCdG4pO1xuXG5mdW5jdGlvbiBsaXN0VGFza3MoY2F0ZWdvcnkpIHsgLy8gZGlzcGxheXMgdGFza3MgZmlsdGVyaW5nIHRoZW0gYmFzZWQgb24gY2F0ZWdvcnlcbiAgdGFza0xpc3REaXYudGV4dENvbnRlbnQgPSAnJztcbiAgbGV0IGRlZmF1bHRUYXNrTGlzdCA9IFtdO1xuICBsZXQgdGFza0xpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKTtcbiAgdGFza0xpc3QgPSBKU09OLnBhcnNlKHRhc2tMaXN0IHx8IEpTT04uc3RyaW5naWZ5KGRlZmF1bHRUYXNrTGlzdCkpO1xuICBcbiAgZm9yIChsZXQgaT0wOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBjcmVhdGluZyBpbWcgZWxlbWVudHMgZm9yIGV2ZXJ5IHRhc2tcbiAgICBjb25zdCBjaGVja2VkSW1nID0gbmV3SW1nKCk7XG4gICAgY2hlY2tlZEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNoZWNrZWQpO1xuICAgIGNoZWNrZWRJbWcuY2xhc3NMaXN0LmFkZCgnbGlzdC1pbWcnLCAnY2hlY2tlZCcpO1xuICAgIGNvbnN0IHVuY2hlY2tlZEltZyA9IG5ld0ltZygpO1xuICAgIHVuY2hlY2tlZEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHVuY2hlY2tlZCk7XG4gICAgdW5jaGVja2VkSW1nLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaW1nJywgJ2NoZWNrZWQnKTtcbiAgICBjb25zdCBzdGFySW1nID0gbmV3SW1nKCk7XG4gICAgc3RhckltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHN0YXIpO1xuICAgIHN0YXJJbWcuY2xhc3NMaXN0LmFkZCgnbGlzdC1pbWcnLCAnaW1wb3J0YW50Jyk7XG4gICAgY29uc3Qgc3RhckVtcHR5SW1nID0gbmV3SW1nKCk7XG4gICAgc3RhckVtcHR5SW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc3RhckVtcHR5KTtcbiAgICBzdGFyRW1wdHlJbWcuY2xhc3NMaXN0LmFkZCgnbGlzdC1pbWcnLCAnaW1wb3J0YW50Jyk7XG4gICAgY29uc3QgaW5mb0ltZyA9IG5ld0ltZygpO1xuICAgIGluZm9JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbmZvKTtcbiAgICBpbmZvSW1nLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaW1nJywgJ2luZm8nKTtcbiAgICBjb25zdCByZW1vdmVJbWcgPSBuZXdJbWcoKTtcbiAgICByZW1vdmVJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCByZW1vdmUpO1xuICAgIHJlbW92ZUltZy5jbGFzc0xpc3QuYWRkKCdsaXN0LWltZycsICdyZW1vdmUnKTtcblxuICAgIGZ1bmN0aW9uIGFwcGVuZExpc3QoY2F0ZWdvcnkpIHsgLy8gYXBwZW5kcyBhbGwgaHRtbCBlbGVtZW50cyBmb3Igc2VsZWN0ZWQgdGFzayBcbiAgICAgIGxldCB0YXNrID0gdGFza0xpc3RbaV07XG4gICAgICBsZXQgdGFza0luZm8gPSBuZXdEaXYoKTtcbiAgICAgIHRhc2tJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCBpKTtcbiAgICAgIHRhc2tJbmZvLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbScpO1xuXG4gICAgICBpZiAodGFzay5jaGVja2VkID09ICdmYWxzZScpIHtcbiAgICAgICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodW5jaGVja2VkSW1nKTtcbiAgICAgICAgdGFza0luZm8uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgICAgIHRhc2tJbmZvLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICB9XG4gICAgICBpZiAodGFzay5jaGVja2VkID09ICd0cnVlJykge1xuICAgICAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChjaGVja2VkSW1nKTtcbiAgICAgICAgdGFza0luZm8uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgICAgdGFza0luZm8uc3R5bGUub3BhY2l0eSA9ICcwLjQnO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0aXRsZSA9IG5ld1NwYW4oKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgY29uc3QgZGF0ZSA9IG5ld1NwYW4oKTtcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrLmRhdGU7XG4gICAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgICAgaWYgKHRhc2suaW1wb3J0YW50ID09ICdmYWxzZScpIHRhc2tJbmZvLmFwcGVuZENoaWxkKHN0YXJFbXB0eUltZyk7XG4gICAgICBpZiAodGFzay5pbXBvcnRhbnQgPT0gJ3RydWUnKSB0YXNrSW5mby5hcHBlbmRDaGlsZChzdGFySW1nKTtcblxuICAgICAgdGFza0luZm8uYXBwZW5kQ2hpbGQoaW5mb0ltZyk7XG4gICAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChyZW1vdmVJbWcpO1xuXG4gICAgICB0YXNrTGlzdERpdi5hcHBlbmRDaGlsZCh0YXNrSW5mbyk7XG4gICAgfTtcblxuICAgIC8vIGZpbHRlcmluZyB0YXNrIGJhc2VkIG9uIHdoaWNoIGNhdGVnb3J5IHRoZXkgYmVsb25nIGFuZCBkaXNwbGF5aW5nIHRoZW0gYWNjb3JkaW5nbHlcbiAgICBpZiAoY2F0ZWdvcnkgPT0gJ2hvbWUnKSBhcHBlbmRMaXN0KGNhdGVnb3J5KTtcbiAgICBlbHNlIGlmIChjYXRlZ29yeSA9PSAndG9kYXknKSB7IGlmIChpc1RvZGF5KG5ldyBEYXRlKHRhc2tMaXN0W2ldLmRhdGUpKSkgYXBwZW5kTGlzdChjYXRlZ29yeSk7IH1cbiAgICBlbHNlIGlmIChjYXRlZ29yeSA9PSAndGhpcyB3ZWVrJykgeyBpZiAoaXNUaGlzV2VlayhuZXcgRGF0ZSh0YXNrTGlzdFtpXS5kYXRlKSkpIGFwcGVuZExpc3QoY2F0ZWdvcnkpOyB9XG4gICAgZWxzZSBpZiAoY2F0ZWdvcnkgPT0gJ2ltcG9ydGFudCcpIHsgaWYgKHRhc2tMaXN0W2ldLmltcG9ydGFudCA9PSAndHJ1ZScpIGFwcGVuZExpc3QoY2F0ZWdvcnkpOyB9XG4gICAgZWxzZSBpZiAoY2F0ZWdvcnkgPT0gJ3dvcmsnKSB7IGlmICh0YXNrTGlzdFtpXS5jYXRlZ29yeSA9PSAnV29yaycpIGFwcGVuZExpc3QoKTsgfVxuICAgIGVsc2UgaWYgKGNhdGVnb3J5ID09ICdwZXJzb25hbCcpIHsgaWYgKHRhc2tMaXN0W2ldLmNhdGVnb3J5ID09ICdQZXJzb25hbCcpIGFwcGVuZExpc3QoY2F0ZWdvcnkpOyB9XG4gICAgZWxzZSBpZiAoY2F0ZWdvcnkgPT0gJ2hvYmJpZXMnKSB7IGlmICh0YXNrTGlzdFtpXS5jYXRlZ29yeSA9PSAnSG9iYmllcycpIGFwcGVuZExpc3QoY2F0ZWdvcnkpOyB9XG4gICAgZWxzZSBpZiAoY2F0ZWdvcnkgPT0gJ290aGVyJykgeyBpZiAodGFza0xpc3RbaV0uY2F0ZWdvcnkgPT0gJ090aGVyJykgYXBwZW5kTGlzdCgpOyB9XG4gICAgZWxzZSByZXR1cm47XG4gIH07XG5cbiAgdG9nZ2xlRG9uZVN0YXR1cyhjYXRlZ29yeSk7XG4gIHRvZ2dsZUltcG9ydGFudFN0YXR1cyhjYXRlZ29yeSk7IFxuICByZW1vdmVUYXNrKGNhdGVnb3J5KTtcbiAgdG9nZ2xlVGFza0RldGFpbHMoY2F0ZWdvcnkpO1xuICBtYWluLmFwcGVuZENoaWxkKGRldGFpbHNEaXYpO1xufTtcblxuY29uc3QgdG9nZ2xlRG9uZVN0YXR1cyA9IChjYXRlZ29yeSkgPT4geyAvLyB0b2dnbGVzIHN0YXR1cyBvZiBhIHRhc2sgaW4gbG9jYWwgc3RvcmFnZVxuICBjb25zdCBjaGVja2VkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrZWQnKTtcbiAgZm9yIChsZXQgaT0wOyBpIDwgY2hlY2tlZEJ0bi5sZW5ndGg7IGkrKykge1xuICAgIGNoZWNrZWRCdG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdCgnZGl2JykuaWQ7XG4gICAgICBjb25zdCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykpO1xuICAgICAgdGFza0xpc3RbdGFza0lkXS5jaGVja2VkID0gdGFza0xpc3RbdGFza0lkXS5jaGVja2VkID09ICd0cnVlJyA/ICdmYWxzZScgOiAndHJ1ZSc7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuICAgICAgbGlzdFRhc2tzKGNhdGVnb3J5KTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbmNvbnN0IHRvZ2dsZUltcG9ydGFudFN0YXR1cyA9IChjYXRlZ29yeSkgPT4geyAvLyB0b2dnbGVzIGltcG9ydGFuY2Ugc3RhdHVzIG9mIGEgdGFzayBpbiBsb2NhbCBzdG9yYWdlXG4gIGNvbnN0IGltcG9ydGFudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbXBvcnRhbnQnKTtcbiAgZm9yIChsZXQgaT0wOyBpIDwgaW1wb3J0YW50QnRuLmxlbmd0aDsgaSsrKSB7XG4gICAgaW1wb3J0YW50QnRuW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2RpdicpLmlkO1xuICAgICAgY29uc3QgdGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpKTtcbiAgICAgIHRhc2tMaXN0W3Rhc2tJZF0uaW1wb3J0YW50ID0gdGFza0xpc3RbdGFza0lkXS5pbXBvcnRhbnQgPT0gJ3RydWUnID8gJ2ZhbHNlJyA6ICd0cnVlJztcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG4gICAgICBsaXN0VGFza3MoY2F0ZWdvcnkpO1xuICAgIH0pO1xuICB9O1xufTtcblxuY29uc3QgdG9nZ2xlVGFza0RldGFpbHMgPSAoY2F0ZWdvcnkpID0+IHsgLy8gdG9nZ2xlcyBkaXNwbGF5IG9mIHRoZSBkZXRhaWxzIHdpbmRvd1xuICBjb25zdCBpbmZvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZm8nKTtcbiAgZm9yIChsZXQgaT0wOyBpIDwgaW5mb0J0bi5sZW5ndGg7IGkrKykge1xuICAgIGluZm9CdG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdCgnZGl2JykuaWQ7XG4gICAgICBjb25zdCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykpO1xuXG4gICAgICAvLyBkaXNwbGF5IGluZm9ybWF0aW9uIGFib3V0IHNlbGVjdGVkIHRhc2tcbiAgICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9IGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9PSAnZmxleCcgPyAnbm9uZScgOiAnZmxleCc7XG4gICAgICBkZXRhaWxzRGl2LmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gYFRpdGxlOiAke3Rhc2tMaXN0W3Rhc2tJZF0udGl0bGV9YDtcbiAgICAgIGNvbnN0IGRldGFpbHMgPSB0YXNrTGlzdFt0YXNrSWRdLmRldGFpbHMgPT0gJycgPyAnbm9uZScgOiB0YXNrTGlzdFt0YXNrSWRdLmRldGFpbHM7XG4gICAgICBkZXRhaWxzRGl2LmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gYERldGFpbHM6ICR7ZGV0YWlsc31gO1xuICAgICAgZGV0YWlsc0Rpdi5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IGBEdWUgZGF0ZTogJHt0YXNrTGlzdFt0YXNrSWRdLmRhdGV9YDtcbiAgICAgIGRldGFpbHNEaXYuY2hpbGRyZW5bM10udGV4dENvbnRlbnQgPSBgQ2F0ZWdvcnk6ICR7dGFza0xpc3RbdGFza0lkXS5jYXRlZ29yeX1gO1xuICAgICAgY29uc3QgaW1wb3J0YW50ID0gdGFza0xpc3RbdGFza0lkXS5pbXBvcnRhbnQgPT0gJ3RydWUnID8gJ3llcycgOiAnbm8nO1xuICAgICAgZGV0YWlsc0Rpdi5jaGlsZHJlbls0XS50ZXh0Q29udGVudCA9IGBJbXBvcnRhbnQ6ICR7aW1wb3J0YW50fWA7XG5cbiAgICAgIC8vIGNsaWNraW5nIGFueXdoZXJlIG9uIHRoZSBib2R5IGhpZGVzIGRldGFpbHMgd2luZG93XG4gICAgICBpZiAoZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID09ICdmbGV4Jykge1xuICAgICAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0ICE9ICdkZXRhaWxzLWRpdicgJiYgZS50YXJnZXQuY2xhc3NMaXN0ICE9ICdkZXRhaWxzLWJ0biBlZGl0LWJ0bicgJiYgZS50YXJnZXQuY2xhc3NMaXN0ICE9ICdsaXN0LWltZyBpbmZvJykgZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG59O1xuXG5jb25zdCByZW1vdmVUYXNrID0gKGNhdGVnb3J5KSA9PiB7IC8vIHJlbW92aW5nIHRhc2tzIGZyb20gbG9jYWxlIHN0b3JhZ2VcbiAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZScpO1xuICBmb3IgKGxldCBpPTA7IGkgPCByZW1vdmVCdG4ubGVuZ3RoOyBpKyspIHtcbiAgICByZW1vdmVCdG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdCgnZGl2JykuaWQ7XG4gICAgICBjb25zdCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykpO1xuICAgICAgdGFza0xpc3Quc3BsaWNlKHRhc2tJZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuICAgICAgbGlzdFRhc2tzKGNhdGVnb3J5KTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbi8vIGxvYWRpbmcgZnVuY3Rpb25zIGZvciBlYWNoIGNhdGVnb3J5XG5leHBvcnQgZnVuY3Rpb24gaG9tZUxvYWQoKSB7XG4gIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcbiAgaDIudGV4dENvbnRlbnQgPSAnSG9tZSAtIEFsbCBUYXNrcyc7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RGl2KTtcbiAgbGlzdFRhc2tzKCdob21lJyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdG9kYXlMb2FkKCkge1xuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGgyLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0xpc3REaXYpO1xuICB0YXNrTGlzdERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBsaXN0VGFza3MoJ3RvZGF5Jyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdGhpc1dlZWtMb2FkKCkge1xuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGgyLnRleHRDb250ZW50ID0gJ1RoaXMgd2Vlayc7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RGl2KTtcbiAgdGFza0xpc3REaXYudGV4dENvbnRlbnQgPSAnJztcbiAgbGlzdFRhc2tzKCd0aGlzIHdlZWsnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpbXBvcnRhbnRMb2FkKCkge1xuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGgyLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RGl2KTtcbiAgdGFza0xpc3REaXYudGV4dENvbnRlbnQgPSAnJztcbiAgbGlzdFRhc2tzKCdpbXBvcnRhbnQnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB3b3JrTG9hZCgpIHtcbiAgY29udGVudERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBoMi50ZXh0Q29udGVudCA9ICdXb3JrJztcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0xpc3REaXYpO1xuICB0YXNrTGlzdERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBsaXN0VGFza3MoJ3dvcmsnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzb25hbExvYWQoKSB7XG4gIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcbiAgaDIudGV4dENvbnRlbnQgPSAnUGVyc29uYWwnO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XG4gIHRhc2tMaXN0RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGxpc3RUYXNrcygncGVyc29uYWwnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBob2JiaWVzTG9hZCgpIHtcbiAgY29udGVudERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBoMi50ZXh0Q29udGVudCA9ICdIb2JiaWVzJztcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0xpc3REaXYpO1xuICB0YXNrTGlzdERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBsaXN0VGFza3MoJ2hvYmJpZXMnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBvdGhlckxvYWQoKSB7XG4gIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcbiAgaDIudGV4dENvbnRlbnQgPSAnT3RoZXInO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XG4gIHRhc2tMaXN0RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGxpc3RUYXNrcygnb3RoZXInKTtcbn07IiwiaW1wb3J0IG5hdkxvZ28gZnJvbSAnLi9pbWFnZXMvbmF2LWxvZ28ucG5nJztcbmltcG9ydCBzdGFyIGZyb20gJy4vaW1hZ2VzL3N0YXIucG5nJztcbmltcG9ydCB3ZWVrIGZyb20gJy4vaW1hZ2VzL3dlZWsucG5nJztcbmltcG9ydCB0b2RheSBmcm9tICcuL2ltYWdlcy90b2RheS5wbmcnO1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9pbWFnZXMvaG9tZS5wbmcnO1xuaW1wb3J0IHdvcmsgZnJvbSAnLi9pbWFnZXMvd29yay5wbmcnO1xuaW1wb3J0IHBlcnNvbmFsIGZyb20gJy4vaW1hZ2VzL3BlcnNvbmFsLnBuZyc7XG5pbXBvcnQgaG9iYmllcyBmcm9tICcuL2ltYWdlcy9ob2JiaWVzLnBuZyc7XG5pbXBvcnQgb3RoZXIgZnJvbSAnLi9pbWFnZXMvb3RoZXIucG5nJztcbmltcG9ydCB7IGhvbWVMb2FkLCB0b2RheUxvYWQsIHRoaXNXZWVrTG9hZCwgaW1wb3J0YW50TG9hZCwgd29ya0xvYWQsIHBlcnNvbmFsTG9hZCwgaG9iYmllc0xvYWQsIG90aGVyTG9hZCB9IGZyb20gJy4vbWFpbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdkxvYWQoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuICBuYXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgY29uc3QgbmV3RGl2ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5ld0ltZyA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBuZXdMaSA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IG5ld0EgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IG5ld1AgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgY29uc3QgbmF2TG9nb0RpdiA9IG5ld0RpdigpO1xuICBuYXZMb2dvRGl2LmNsYXNzTGlzdC5hZGQoJ25hdi1sb2dvLWRpdicpO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChuYXZMb2dvRGl2KTtcblxuICBjb25zdCBuYXZMb2dvSW1nID0gbmV3SW1nKCk7XG4gIG5hdkxvZ29JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBuYXZMb2dvKTtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS50ZXh0Q29udGVudCA9ICdUREwnO1xuXG4gIG5hdkxvZ29EaXYuYXBwZW5kQ2hpbGQobmF2TG9nb0ltZyk7XG4gIG5hdkxvZ29EaXYuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIGNvbnN0IHVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHVsMS5jbGFzc0xpc3QuYWRkKCd1bC0xJyk7XG4gIGNvbnN0IHVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHVsMi5jbGFzc0xpc3QuYWRkKCd1bC0yJyk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKHVsMSk7XG5cbiAgdWwxLmFwcGVuZENoaWxkKG5ld0xpKCkpO1xuICB1bDEuYXBwZW5kQ2hpbGQobmV3TGkoKSk7XG4gIHVsMS5hcHBlbmRDaGlsZChuZXdMaSgpKTtcbiAgdWwxLmFwcGVuZENoaWxkKG5ld0xpKCkpO1xuXG4gIHVsMS5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChuZXdJbWcoKSk7XG4gIHVsMS5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChuZXdQKCkpO1xuICB1bDEuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKCdzcmMnLCBob21lKTtcbiAgdWwxLmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIHVsMS5maXJzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvbWVMb2FkKTtcblxuICB1bDEuY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQobmV3SW1nKCkpO1xuICB1bDEuY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQobmV3UCgpKTtcbiAgdWwxLmNoaWxkcmVuWzFdLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZSgnc3JjJywgdG9kYXkpO1xuICB1bDEuY2hpbGRyZW5bMV0ubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gIHVsMS5jaGlsZHJlblsxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZGF5TG9hZCk7XG5cbiAgdWwxLmNoaWxkcmVuWzJdLmFwcGVuZENoaWxkKG5ld0ltZygpKTtcbiAgdWwxLmNoaWxkcmVuWzJdLmFwcGVuZENoaWxkKG5ld1AoKSk7XG4gIHVsMS5jaGlsZHJlblsyXS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHdlZWspO1xuICB1bDEuY2hpbGRyZW5bMl0ubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnO1xuICB1bDEuY2hpbGRyZW5bMl0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzV2Vla0xvYWQpO1xuXG4gIHVsMS5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKG5ld0ltZygpKTtcbiAgdWwxLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQobmV3UCgpKTtcbiAgdWwxLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKCdzcmMnLCBzdGFyKTtcbiAgdWwxLmxhc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuICB1bDEubGFzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGltcG9ydGFudExvYWQpO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKTtcblxuICBuYXYuYXBwZW5kQ2hpbGQodWwyKTtcblxuICB1bDIuYXBwZW5kQ2hpbGQobmV3TGkoKSk7XG4gIHVsMi5hcHBlbmRDaGlsZChuZXdMaSgpKTtcbiAgdWwyLmFwcGVuZENoaWxkKG5ld0xpKCkpO1xuICB1bDIuYXBwZW5kQ2hpbGQobmV3TGkoKSk7XG5cbiAgdWwyLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKG5ld0ltZygpKTtcbiAgdWwyLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKG5ld1AoKSk7XG4gIHVsMi5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHdvcmspO1xuICB1bDIuZmlyc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdXb3JrJztcbiAgdWwyLmZpcnN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd29ya0xvYWQpO1xuXG4gIHVsMi5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChuZXdJbWcoKSk7XG4gIHVsMi5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChuZXdQKCkpO1xuICB1bDIuY2hpbGRyZW5bMV0uZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKCdzcmMnLCBwZXJzb25hbCk7XG4gIHVsMi5jaGlsZHJlblsxXS5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ1BlcnNvbmFsJztcbiAgdWwyLmNoaWxkcmVuWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGVyc29uYWxMb2FkKTtcblxuICB1bDIuY2hpbGRyZW5bMl0uYXBwZW5kQ2hpbGQobmV3SW1nKCkpO1xuICB1bDIuY2hpbGRyZW5bMl0uYXBwZW5kQ2hpbGQobmV3UCgpKTtcbiAgdWwyLmNoaWxkcmVuWzJdLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZSgnc3JjJywgaG9iYmllcyk7XG4gIHVsMi5jaGlsZHJlblsyXS5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ0hvYmJpZXMnO1xuICB1bDIuY2hpbGRyZW5bMl0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBob2JiaWVzTG9hZCk7XG5cbiAgdWwyLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQobmV3SW1nKCkpO1xuICB1bDIubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChuZXdQKCkpO1xuICB1bDIubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsIG90aGVyKTtcbiAgdWwyLmxhc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdPdGhlcic7XG4gIHVsMi5sYXN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3RoZXJMb2FkKVxuXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaGVhZGVyTG9hZCBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgZm9vdGVyTG9hZCBmcm9tICcuL2Zvb3Rlcic7XG5pbXBvcnQgbmF2TG9hZCBmcm9tICcuL25hdic7XG5pbXBvcnQgeyBob21lTG9hZCB9IGZyb20gJy4vbWFpbic7XG5cbmhlYWRlckxvYWQoKTtcbm5hdkxvYWQoKTtcbmZvb3RlckxvYWQoKTtcbmhvbWVMb2FkKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==