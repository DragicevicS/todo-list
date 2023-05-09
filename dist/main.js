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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* color pallete */\n  --color-1: #1B262C;\n  --color-2: #0F4C75;\n  --color-3: #3282B8;\n  --color-4: #BBE1FA;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template: 0.5fr 6fr 0.3fr / minmax(min-content, 0.8fr) 5fr;\n  width: 100%;\n  height: 100vh;\n  background-color: var(--color-1);\n}\n\n/* header */\n\nheader {\n  grid-area: 1/2/2/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: max(100%, 350px);\n  background-color: var(--color-2);\n  box-shadow: 0 0 10px;\n}\n\nheader img {\n  transition: transform .2s ease;\n}\n\nheader img:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n}\n\n.sidebar-btn-div {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  padding-left: 0.5em;\n}\n\n.sidebar-btn-div img {\n  width: 2.2em;\n  height: 2.2em;\n}\n\n.h1-div {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  color: var(--color-4);\n  font-family: 'Sigmar', cursive;\n  font-size: 1.1rem;\n  font-style: italic;\n  letter-spacing: 2px;\n}\n\n.h1-div h1 {\n  cursor: pointer;\n}\n\n.profile-div {\n  display: flex;\n  gap: 1.2em;\n  padding-right: 1em;\n}\n\n.profile-div img {\n  width: 2.1em;\n  height: 2.1em;\n}\n\n/* nav */\n\nnav {\n  grid-area: 1/1/4/2;\n  flex-direction: column;\n  align-items: center;\n  gap: 1em;\n  padding: 3px;\n  height: max(100%, 40em);\n  background-color: var(--color-3);\n  font-family: 'Oswald', sans-serif;\n  box-shadow: 0 0 10px;\n}\n\n.nav-logo-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.3em;\n  padding-bottom: 1.6em;\n  color: var(--color-4);\n  font-size: 2.1rem;\n  font-family: 'Sigmar', cursive;\n  font-style: italic;\n  letter-spacing: 2px;\n}\n\n.nav-logo-div img {\n  width: 2.1em;\n  height: 2.1em;\n}\n\nnav ul {\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n}\n\nnav li {\n  display: flex;\n  align-items: center;\n  gap: 0.5em;\n  padding: 8px 1em;\n  color: var(--color-1);\n  font-size: 1.5rem;\n  cursor: pointer;\n  transition: transform .1s ease;\n  border-radius: 10px;\n}\n\nnav ul li:hover {\n  background-color: #0F4C75;\n  transition: 0.3 ease-in-out;\n  transform: scale(1.05);\n  color: var(--color-4);\n}\n\nnav li>img {\n  width: 1.5em;\n  height: 1.5em;\n}\n\nnav hr {\n  margin: 1em;\n  width: 80%;\n  color: var(--color-4);\n}\n\n/* main */\n\nmain {\n  grid-area: 2/2/3/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5em;\n  width: clamp(200px, 80%, 1000px);\n  height: 100%;\n  padding: 1em;\n  color: var(--color-4);\n}\n\n.content > h2 {\n  font-family: 'Sigmar', cursive;\n  font-size: 1.8rem;\n  font-style: italic;\n}\n\n/* main - add task */\n\n.content form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  font-size: 1.5rem;\n  font-family: 'Oswald', sans-serif;\n}\n\n#title,\n#details,\n#category,\n#date,\n.btn {\n  font-size: 1.2rem;\n  padding: 10px;\n  background-color: var(--color-1);\n  border: solid 2px var(--color-4);\n  color: var(--color-4);\n  border-radius: 10px;\n}\n\n#title:hover,\n#details:hover,\n#category:hover,\n#date:hover,\n.btn:hover {\n  border: solid 2px var(--color-2);\n}\n\n#category:hover,\n#date:hover,\n.btn:hover,\n#true:hover,\n#false:hover {\n  cursor: pointer;\n}\n\n.btn:hover {\n  transform: scale(1.05);\n}\n\n.content form textarea {\n  resize: none;\n}\n\n.important-div,\n.date-div {\n  display: flex;\n  align-items: center;\n  gap: 1.2em;\n  padding-top: 0.3em;\n}\n\n.important-div>div {\n  display: flex;\n  gap: 0.5em;\n}\n\n.btn-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n  margin-top: 1em;\n}\n\n.btn {\n  padding: 0.5em 1.1em;\n  font-family: 'Sigmar', cursive;\n  font-style: italic;\n  font-size: 1.4rem;\n  transition: transform .2s ease;\n}\n\nform p {\n  margin-top: 1em;\n}\n\n/* main - lists */\n\n.task-list-div {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n  font-family: 'Oswald', sans-serif;\n  overflow: auto;\n}\n\n.list-item {\n  display: grid;\n  grid-template: 3em / min-content 1fr 0.3fr repeat(3, min-content);\n  align-items: center;\n  gap: 0.7em;\n  padding: 0 0.7em;\n  width: max(100%, 30em);\n  height: 3em;\n  border: solid 1px var(--color-4);\n  transition: transform .1s ease;\n  text-decoration: line-through;\n  border-radius: 10px;\n}\n\n.list-img {\n  width: 1.2em;\n  height: 1.2em;\n}\n\n.list-img:hover {\n  cursor: pointer;\n}\n\n.list-item:hover {\n  background-color: var(--color-2);\n  transform: scale(1.01);\n}\n\n/* main - details */\n\n.details-div {\n  position: absolute;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5em;\n  padding: 1em;\n  width: 22em;\n  height: min-content;\n  background-color: var(--color-2);\n  color: var(--color-4);\n  border: solid 2px var(--color-4);\n  border-radius: 10px;\n  font-family: 'Oswald', sans-serif;\n  font-size: 1.3rem;\n}\n\n.details-btn-div {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 1em;\n  width: 100%;\n}\n\n.details-btn {\n  width: 5em;\n  padding: 5px;\n  background-color: var(--color-2);\n  color: var(--color-4);\n  border: solid 2px var(--color-4);\n  border-radius: 10px;\n  transition: transform .2s ease;\n}\n\n.details-btn:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  border-color: var(--color-1);\n}\n\n/* footer */\n\nfooter {\n  grid-area: 3/2/4/3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--color-2);\n  color: var(--color-4);\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: italic;\n  box-shadow: 2px 0 10px black;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Sigmar&display=swap');\n\n:root {\n  /* color pallete */\n  --color-1: #1B262C;\n  --color-2: #0F4C75;\n  --color-3: #3282B8;\n  --color-4: #BBE1FA;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template: 0.5fr 6fr 0.3fr / minmax(min-content, 0.8fr) 5fr;\n  width: 100%;\n  height: 100vh;\n  background-color: var(--color-1);\n}\n\n/* header */\n\nheader {\n  grid-area: 1/2/2/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: max(100%, 350px);\n  background-color: var(--color-2);\n  box-shadow: 0 0 10px;\n}\n\nheader img {\n  transition: transform .2s ease;\n}\n\nheader img:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n}\n\n.sidebar-btn-div {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  padding-left: 0.5em;\n}\n\n.sidebar-btn-div img {\n  width: 2.2em;\n  height: 2.2em;\n}\n\n.h1-div {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  color: var(--color-4);\n  font-family: 'Sigmar', cursive;\n  font-size: 1.1rem;\n  font-style: italic;\n  letter-spacing: 2px;\n}\n\n.h1-div h1 {\n  cursor: pointer;\n}\n\n.profile-div {\n  display: flex;\n  gap: 1.2em;\n  padding-right: 1em;\n}\n\n.profile-div img {\n  width: 2.1em;\n  height: 2.1em;\n}\n\n/* nav */\n\nnav {\n  grid-area: 1/1/4/2;\n  flex-direction: column;\n  align-items: center;\n  gap: 1em;\n  padding: 3px;\n  height: max(100%, 40em);\n  background-color: var(--color-3);\n  font-family: 'Oswald', sans-serif;\n  box-shadow: 0 0 10px;\n}\n\n.nav-logo-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.3em;\n  padding-bottom: 1.6em;\n  color: var(--color-4);\n  font-size: 2.1rem;\n  font-family: 'Sigmar', cursive;\n  font-style: italic;\n  letter-spacing: 2px;\n}\n\n.nav-logo-div img {\n  width: 2.1em;\n  height: 2.1em;\n}\n\nnav ul {\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n}\n\nnav li {\n  display: flex;\n  align-items: center;\n  gap: 0.5em;\n  padding: 8px 1em;\n  color: var(--color-1);\n  font-size: 1.5rem;\n  cursor: pointer;\n  transition: transform .1s ease;\n  border-radius: 10px;\n}\n\nnav ul li:hover {\n  background-color: #0F4C75;\n  transition: 0.3 ease-in-out;\n  transform: scale(1.05);\n  color: var(--color-4);\n}\n\nnav li>img {\n  width: 1.5em;\n  height: 1.5em;\n}\n\nnav hr {\n  margin: 1em;\n  width: 80%;\n  color: var(--color-4);\n}\n\n/* main */\n\nmain {\n  grid-area: 2/2/3/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5em;\n  width: clamp(200px, 80%, 1000px);\n  height: 100%;\n  padding: 1em;\n  color: var(--color-4);\n}\n\n.content > h2 {\n  font-family: 'Sigmar', cursive;\n  font-size: 1.8rem;\n  font-style: italic;\n}\n\n/* main - add task */\n\n.content form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  font-size: 1.5rem;\n  font-family: 'Oswald', sans-serif;\n}\n\n#title,\n#details,\n#category,\n#date,\n.btn {\n  font-size: 1.2rem;\n  padding: 10px;\n  background-color: var(--color-1);\n  border: solid 2px var(--color-4);\n  color: var(--color-4);\n  border-radius: 10px;\n}\n\n#title:hover,\n#details:hover,\n#category:hover,\n#date:hover,\n.btn:hover {\n  border: solid 2px var(--color-2);\n}\n\n#category:hover,\n#date:hover,\n.btn:hover,\n#true:hover,\n#false:hover {\n  cursor: pointer;\n}\n\n.btn:hover {\n  transform: scale(1.05);\n}\n\n.content form textarea {\n  resize: none;\n}\n\n.important-div,\n.date-div {\n  display: flex;\n  align-items: center;\n  gap: 1.2em;\n  padding-top: 0.3em;\n}\n\n.important-div>div {\n  display: flex;\n  gap: 0.5em;\n}\n\n.btn-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n  margin-top: 1em;\n}\n\n.btn {\n  padding: 0.5em 1.1em;\n  font-family: 'Sigmar', cursive;\n  font-style: italic;\n  font-size: 1.4rem;\n  transition: transform .2s ease;\n}\n\nform p {\n  margin-top: 1em;\n}\n\n/* main - lists */\n\n.task-list-div {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n  font-family: 'Oswald', sans-serif;\n  overflow: auto;\n}\n\n.list-item {\n  display: grid;\n  grid-template: 3em / min-content 1fr 0.3fr repeat(3, min-content);\n  align-items: center;\n  gap: 0.7em;\n  padding: 0 0.7em;\n  width: max(100%, 30em);\n  height: 3em;\n  border: solid 1px var(--color-4);\n  transition: transform .1s ease;\n  text-decoration: line-through;\n  border-radius: 10px;\n}\n\n.list-img {\n  width: 1.2em;\n  height: 1.2em;\n}\n\n.list-img:hover {\n  cursor: pointer;\n}\n\n.list-item:hover {\n  background-color: var(--color-2);\n  transform: scale(1.01);\n}\n\n/* main - details */\n\n.details-div {\n  position: absolute;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5em;\n  padding: 1em;\n  width: 22em;\n  height: min-content;\n  background-color: var(--color-2);\n  color: var(--color-4);\n  border: solid 2px var(--color-4);\n  border-radius: 10px;\n  font-family: 'Oswald', sans-serif;\n  font-size: 1.3rem;\n}\n\n.details-btn-div {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 1em;\n  width: 100%;\n}\n\n.details-btn {\n  width: 5em;\n  padding: 5px;\n  background-color: var(--color-2);\n  color: var(--color-4);\n  border: solid 2px var(--color-4);\n  border-radius: 10px;\n  transition: transform .2s ease;\n}\n\n.details-btn:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  border-color: var(--color-1);\n}\n\n/* footer */\n\nfooter {\n  grid-area: 3/2/4/3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--color-2);\n  color: var(--color-4);\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: italic;\n  box-shadow: 2px 0 10px black;\n}"],"sourceRoot":""}]);
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
  titleInput.setAttribute('maxlength', '60');
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
  dateDiv.appendChild(dateInput);
  form.appendChild(dateDiv);

  const btnDiv = newDiv();
  btnDiv.classList.add('btn-div');
  const submitBtn = newInput();
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('name', 'submit');
  submitBtn.setAttribute('id', 'submit');
  submitBtn.classList.add('btn');
  submitBtn.value = 'Add'
  btnDiv.appendChild(submitBtn);
  form.appendChild(btnDiv);

  const createTask = (title, details, category, important, date, checked) => {
    return {title, details, category, important, date, checked};
  };
  
  let defaultTaskList = [];
  let taskList = localStorage.getItem('taskList');
  taskList = JSON.parse(taskList || JSON.stringify(defaultTaskList));

  const para = document.createElement('p');
  form.appendChild(para);

  function validateForm() {
    if (titleInput.value == '') {
      titleInput.style.borderColor = '#ff8080';
      para.textContent = 'Please fill out all the required fields.';
    } else titleInput.style.borderColor = '#BBE1FA';
    if (optionBlank.selected) {
      categorySelect.style.borderColor = '#ff8080';
      para.textContent = 'Please fill out all the required fields.';
    } else categorySelect.style.borderColor = '#BBE1FA';
    if (dateInput.value == '') {
      dateInput.style.borderColor = '#ff8080';
      para.textContent = 'Please fill out all the required fields.';
    } else dateInput.style.borderColor = '#BBE1FA';
  };

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validateForm();
    if (titleInput.value != '' && !optionBlank.selected && dateInput.value != '') {
      const taskList = JSON.parse(localStorage.getItem('taskList'));
      const title = document.getElementById('title').value;
      const details = document.getElementById('details').value;
      const category = document.getElementById('category').value;
      const important = document.querySelector('input[name="important"]:checked').id;
      const date = document.getElementById('date').value;

      const newTask = createTask(title, details, category, important, date, 'false');
      taskList.push(newTask);
      window.localStorage.setItem('taskList', JSON.stringify(taskList));
      
      para.textContent = 'Task added successfully!'
    };
  });
};


/***/ }),

/***/ "./src/edit-task.js":
/*!**************************!*\
  !*** ./src/edit-task.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editTaskLoad)
/* harmony export */ });
function editTaskLoad(id) {
  const newDiv = () => document.createElement('div');
  const newLabel = () => document.createElement('label');
  const newOption = () => document.createElement('option');
  const newInput = () => document.createElement('input');

  let defaultTaskList = [];
  let taskList = localStorage.getItem('taskList');
  taskList = JSON.parse(taskList || JSON.stringify(defaultTaskList));

  const contentDiv = document.querySelector('.content');
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  h2.textContent = 'Edit task';
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
  titleInput.value = taskList[id].title;
  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  const detailsLabel = newLabel();
  detailsLabel.textContent = 'Details';
  const detailsTextarea = document.createElement('textarea');
  detailsTextarea.setAttribute('name', 'details');
  detailsTextarea.setAttribute('id', 'details');
  detailsTextarea.setAttribute('rows', '3');
  detailsTextarea.setAttribute('maxlength', '250');
  detailsTextarea.setAttribute('placeholder', 'Short description of the task...');
  detailsTextarea.setAttribute('autocomplete', 'off');
  detailsTextarea.value = taskList[id].details;
  form.appendChild(detailsLabel);
  form.appendChild(detailsTextarea);

  const categoryLabel = newLabel();
  categoryLabel.textContent = 'Choose category';
  const categorySelect = document.createElement('select');
  categorySelect.setAttribute('name', 'category');
  categorySelect.setAttribute('id', 'category');
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
  if (taskList[id].category == 'Work') optionWork.selected = true;
  if (taskList[id].category == 'Personal') optionPersonal.selected = true;
  if (taskList[id].category == 'Hobbies') optionHobbies.selected = true;
  if (taskList[id].category == 'Other') optionOther.selected = true;
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
  const importantInputNoLabel = newLabel();
  importantInputNoLabel.textContent = 'No';
  importantInputNoLabel.setAttribute('for', 'no');
  if (taskList[id].important == 'true') importantInputYes.checked = true;
  if (taskList[id].important == 'false') importantInputNo.checked = true;
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
  dateInput.value = taskList[id].date;
  dateDiv.appendChild(dateInput);
  form.appendChild(dateDiv);

  const btnDiv = newDiv();
  btnDiv.classList.add('btn-div');
  const submitEditBtn = newInput();
  submitEditBtn.setAttribute('type', 'submit');
  submitEditBtn.setAttribute('name', 'submit');
  submitEditBtn.setAttribute('id', 'submit');
  submitEditBtn.classList.add('btn');
  submitEditBtn.value = 'Edit'
  btnDiv.appendChild(submitEditBtn);
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.classList.add('btn');
  btnDiv.appendChild(cancelBtn);
  form.appendChild(btnDiv);

  const para = document.createElement('p');
  form.appendChild(para);

  function validateForm() {
    if (titleInput.value == '') {
      titleInput.style.borderColor = '#ff8080';
      para.textContent = 'Please fill out all the required fields.';
    } else titleInput.style.borderColor = '#BBE1FA';
    if (dateInput.value == '') {
      dateInput.style.borderColor = '#ff8080';
      para.textContent = 'Please fill out all the required fields.';
    } else dateInput.style.borderColor = '#BBE1FA';
  };

  submitEditBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validateForm();
    if (titleInput.value != '' && dateInput.value != '') {
      taskList[id].title = document.getElementById('title').value;
      taskList[id].details = document.getElementById('details').value;
      taskList[id].category = document.getElementById('category').value;
      taskList[id].important = document.querySelector('input[name="important"]:checked').id;
      taskList[id].date = document.getElementById('date').value;

      window.localStorage.setItem('taskList', JSON.stringify(taskList));

      para.textContent = 'Task edited successfully!'
    };
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var _edit_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-task */ "./src/edit-task.js");









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

    function appendList() { // appends all html elements for selected task 
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
    appendList();
    if (category == 'today') if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(taskList[i].date))) taskListDiv.children[i].style.display = 'none';
    if (category == 'this week') if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(taskList[i].date))) taskListDiv.children[i].style.display = 'none';
    if (category == 'important') if (taskList[i].important != 'true') taskListDiv.children[i].style.display = 'none';
    if (category == 'work') if (taskList[i].category != 'Work') taskListDiv.children[i].style.display = 'none';
    if (category == 'personal') if (taskList[i].category != 'Personal') taskListDiv.children[i].style.display = 'none';
    if (category == 'hobbies') if (taskList[i].category != 'Hobbies') taskListDiv.children[i].style.display = 'none';
    if (category == 'other') if (taskList[i].category != 'Other') taskListDiv.children[i].style.display = 'none';
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

const toggleTaskDetails = () => { // toggles display of the details window
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

      editBtn.addEventListener('click', (e) => {
        if (e.target.classList == 'details-btn edit-btn') (0,_edit_task__WEBPACK_IMPORTED_MODULE_6__["default"])(taskId);
      });
      // clicking anywhere on the body hides details window
      if (detailsDiv.style.display == 'flex') {
        body.addEventListener('click', (e) => {
          if (e.target.classList != 'details-div' && e.target.classList != 'list-img info') detailsDiv.style.display = 'none';
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
  ul2.lastElementChild.addEventListener('click', _main__WEBPACK_IMPORTED_MODULE_9__.otherLoad);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDbktlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7O0FDOUplO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0wyQztBQUNBO0FBQ1I7QUFDRTtBQUNIOztBQUVuQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLGdEQUFPOztBQUV4Qzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNkJBQTZCLDRDQUFHO0FBQ2hDO0FBQ0EsaUNBQWlDLGdEQUFPOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsbUNBQW1DLGlEQUFXOztBQUU5QztBQUNBLCtCQUErQiwyQ0FBUTtBQUN2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0QyQztBQUNJO0FBQ1Y7QUFDVztBQUNYO0FBQ0k7QUFDTTtBQUNSOztBQUV2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFCQUFxQjtBQUNyQztBQUNBO0FBQ0EsbUNBQW1DLGdEQUFPO0FBQzFDO0FBQ0E7QUFDQSxxQ0FBcUMsa0RBQVM7QUFDOUM7QUFDQTtBQUNBLGdDQUFnQyw2Q0FBSTtBQUNwQztBQUNBO0FBQ0EscUNBQXFDLG1EQUFTO0FBQzlDO0FBQ0E7QUFDQSxnQ0FBZ0MsNkNBQUk7QUFDcEM7QUFDQTtBQUNBLGtDQUFrQywrQ0FBTTtBQUN4Qzs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLG9EQUFPO0FBQ3pDLHNDQUFzQyxvREFBVTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QztBQUN6QztBQUNBLGdCQUFnQix1QkFBdUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsOENBQThDO0FBQzlDO0FBQ0EsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxrQ0FBa0M7QUFDbEM7QUFDQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJELHVCQUF1QjtBQUNsRjtBQUNBLHVEQUF1RCxRQUFRO0FBQy9ELHdEQUF3RCxzQkFBc0I7QUFDOUUsd0RBQXdELDBCQUEwQjtBQUNsRjtBQUNBLHlEQUF5RCxVQUFVOztBQUVuRTtBQUNBLDBEQUEwRCxzREFBWTtBQUN0RSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFE0QztBQUNQO0FBQ0E7QUFDRTtBQUNGO0FBQ0E7QUFDUTtBQUNGO0FBQ0o7QUFDbUY7O0FBRTNHO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxpQ0FBaUMsaURBQU87QUFDeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4REFBOEQsNkNBQUk7QUFDbEU7QUFDQSxrREFBa0QsMkNBQVE7O0FBRTFEO0FBQ0E7QUFDQSx3REFBd0QsOENBQUs7QUFDN0Q7QUFDQSw0Q0FBNEMsNENBQVM7O0FBRXJEO0FBQ0E7QUFDQSx3REFBd0QsNkNBQUk7QUFDNUQ7QUFDQSw0Q0FBNEMsK0NBQVk7O0FBRXhEO0FBQ0E7QUFDQSw2REFBNkQsNkNBQUk7QUFDakU7QUFDQSxpREFBaUQsZ0RBQWE7O0FBRTlEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4REFBOEQsNkNBQUk7QUFDbEU7QUFDQSxrREFBa0QsMkNBQVE7O0FBRTFEO0FBQ0E7QUFDQSx3REFBd0QsaURBQVE7QUFDaEU7QUFDQSw0Q0FBNEMsK0NBQVk7O0FBRXhEO0FBQ0E7QUFDQSx3REFBd0QsZ0RBQU87QUFDL0Q7QUFDQSw0Q0FBNEMsOENBQVc7O0FBRXZEO0FBQ0E7QUFDQSw2REFBNkQsOENBQUs7QUFDbEU7QUFDQSxpREFBaUQsNENBQVM7QUFDMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNhO0FBQ0E7QUFDTjtBQUNNOztBQUVsQyxtREFBVTtBQUNWLGdEQUFPO0FBQ1AsbURBQVU7QUFDViwrQ0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGQtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWRpdC10YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQmZmFtaWx5PVNpZ21hciZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAvKiBjb2xvciBwYWxsZXRlICovXFxuICAtLWNvbG9yLTE6ICMxQjI2MkM7XFxuICAtLWNvbG9yLTI6ICMwRjRDNzU7XFxuICAtLWNvbG9yLTM6ICMzMjgyQjg7XFxuICAtLWNvbG9yLTQ6ICNCQkUxRkE7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDAuNWZyIDZmciAwLjNmciAvIG1pbm1heChtaW4tY29udGVudCwgMC44ZnIpIDVmcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiBtYXgoMTAwJSwgMzUwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweDtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2U7XFxufVxcblxcbmhlYWRlciBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uc2lkZWJhci1idG4tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHBhZGRpbmctbGVmdDogMC41ZW07XFxufVxcblxcbi5zaWRlYmFyLWJ0bi1kaXYgaW1nIHtcXG4gIHdpZHRoOiAyLjJlbTtcXG4gIGhlaWdodDogMi4yZW07XFxufVxcblxcbi5oMS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgZm9udC1mYW1pbHk6ICdTaWdtYXInLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4uaDEtZGl2IGgxIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2ZpbGUtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuMmVtO1xcbiAgcGFkZGluZy1yaWdodDogMWVtO1xcbn1cXG5cXG4ucHJvZmlsZS1kaXYgaW1nIHtcXG4gIHdpZHRoOiAyLjFlbTtcXG4gIGhlaWdodDogMi4xZW07XFxufVxcblxcbi8qIG5hdiAqL1xcblxcbm5hdiB7XFxuICBncmlkLWFyZWE6IDEvMS80LzI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMWVtO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgaGVpZ2h0OiBtYXgoMTAwJSwgNDBlbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4O1xcbn1cXG5cXG4ubmF2LWxvZ28tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuM2VtO1xcbiAgcGFkZGluZy1ib3R0b206IDEuNmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgZm9udC1zaXplOiAyLjFyZW07XFxuICBmb250LWZhbWlseTogJ1NpZ21hcicsIGN1cnNpdmU7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4ubmF2LWxvZ28tZGl2IGltZyB7XFxuICB3aWR0aDogMi4xZW07XFxuICBoZWlnaHQ6IDIuMWVtO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbm5hdiBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxuICBwYWRkaW5nOiA4cHggMWVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGVhc2U7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5uYXYgdWwgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBGNEM3NTtcXG4gIHRyYW5zaXRpb246IDAuMyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbm5hdiBsaT5pbWcge1xcbiAgd2lkdGg6IDEuNWVtO1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG59XFxuXFxubmF2IGhyIHtcXG4gIG1hcmdpbjogMWVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLyogbWFpbiAqL1xcblxcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVlbTtcXG4gIHdpZHRoOiBjbGFtcCgyMDBweCwgODAlLCAxMDAwcHgpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbn1cXG5cXG4uY29udGVudCA+IGgyIHtcXG4gIGZvbnQtZmFtaWx5OiAnU2lnbWFyJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKiBtYWluIC0gYWRkIHRhc2sgKi9cXG5cXG4uY29udGVudCBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3RpdGxlLFxcbiNkZXRhaWxzLFxcbiNjYXRlZ29yeSxcXG4jZGF0ZSxcXG4uYnRuIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItNCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jdGl0bGU6aG92ZXIsXFxuI2RldGFpbHM6aG92ZXIsXFxuI2NhdGVnb3J5OmhvdmVyLFxcbiNkYXRlOmhvdmVyLFxcbi5idG46aG92ZXIge1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItMik7XFxufVxcblxcbiNjYXRlZ29yeTpob3ZlcixcXG4jZGF0ZTpob3ZlcixcXG4uYnRuOmhvdmVyLFxcbiN0cnVlOmhvdmVyLFxcbiNmYWxzZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLmNvbnRlbnQgZm9ybSB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5pbXBvcnRhbnQtZGl2LFxcbi5kYXRlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS4yZW07XFxuICBwYWRkaW5nLXRvcDogMC4zZW07XFxufVxcblxcbi5pbXBvcnRhbnQtZGl2PmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLmJ0bi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG5cXG4uYnRuIHtcXG4gIHBhZGRpbmc6IDAuNWVtIDEuMWVtO1xcbiAgZm9udC1mYW1pbHk6ICdTaWdtYXInLCBjdXJzaXZlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2U7XFxufVxcblxcbmZvcm0gcCB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxufVxcblxcbi8qIG1haW4gLSBsaXN0cyAqL1xcblxcbi50YXNrLWxpc3QtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogM2VtIC8gbWluLWNvbnRlbnQgMWZyIDAuM2ZyIHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjdlbTtcXG4gIHBhZGRpbmc6IDAgMC43ZW07XFxuICB3aWR0aDogbWF4KDEwMCUsIDMwZW0pO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jb2xvci00KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgZWFzZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmxpc3QtaW1nIHtcXG4gIHdpZHRoOiAxLjJlbTtcXG4gIGhlaWdodDogMS4yZW07XFxufVxcblxcbi5saXN0LWltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saXN0LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbn1cXG5cXG4vKiBtYWluIC0gZGV0YWlscyAqL1xcblxcbi5kZXRhaWxzLWRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDAuNWVtO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgd2lkdGg6IDIyZW07XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci00KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmRldGFpbHMtYnRuLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGV0YWlscy1idG4ge1xcbiAgd2lkdGg6IDVlbTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItNCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlO1xcbn1cXG5cXG4uZGV0YWlscy1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogMy8yLzQvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgYm94LXNoYWRvdzogMnB4IDAgMTBweCBibGFjaztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrREFBK0Q7RUFDL0QsV0FBVztFQUNYLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZ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QztFQUNoQyw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtBQUN4Qjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsNEJBQTRCO0FBQzlCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQix5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQmZmFtaWx5PVNpZ21hciZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAvKiBjb2xvciBwYWxsZXRlICovXFxuICAtLWNvbG9yLTE6ICMxQjI2MkM7XFxuICAtLWNvbG9yLTI6ICMwRjRDNzU7XFxuICAtLWNvbG9yLTM6ICMzMjgyQjg7XFxuICAtLWNvbG9yLTQ6ICNCQkUxRkE7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDAuNWZyIDZmciAwLjNmciAvIG1pbm1heChtaW4tY29udGVudCwgMC44ZnIpIDVmcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiBtYXgoMTAwJSwgMzUwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweDtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2U7XFxufVxcblxcbmhlYWRlciBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uc2lkZWJhci1idG4tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHBhZGRpbmctbGVmdDogMC41ZW07XFxufVxcblxcbi5zaWRlYmFyLWJ0bi1kaXYgaW1nIHtcXG4gIHdpZHRoOiAyLjJlbTtcXG4gIGhlaWdodDogMi4yZW07XFxufVxcblxcbi5oMS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgZm9udC1mYW1pbHk6ICdTaWdtYXInLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4uaDEtZGl2IGgxIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2ZpbGUtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuMmVtO1xcbiAgcGFkZGluZy1yaWdodDogMWVtO1xcbn1cXG5cXG4ucHJvZmlsZS1kaXYgaW1nIHtcXG4gIHdpZHRoOiAyLjFlbTtcXG4gIGhlaWdodDogMi4xZW07XFxufVxcblxcbi8qIG5hdiAqL1xcblxcbm5hdiB7XFxuICBncmlkLWFyZWE6IDEvMS80LzI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMWVtO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgaGVpZ2h0OiBtYXgoMTAwJSwgNDBlbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4O1xcbn1cXG5cXG4ubmF2LWxvZ28tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuM2VtO1xcbiAgcGFkZGluZy1ib3R0b206IDEuNmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgZm9udC1zaXplOiAyLjFyZW07XFxuICBmb250LWZhbWlseTogJ1NpZ21hcicsIGN1cnNpdmU7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4ubmF2LWxvZ28tZGl2IGltZyB7XFxuICB3aWR0aDogMi4xZW07XFxuICBoZWlnaHQ6IDIuMWVtO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbm5hdiBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxuICBwYWRkaW5nOiA4cHggMWVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGVhc2U7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5uYXYgdWwgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBGNEM3NTtcXG4gIHRyYW5zaXRpb246IDAuMyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbm5hdiBsaT5pbWcge1xcbiAgd2lkdGg6IDEuNWVtO1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG59XFxuXFxubmF2IGhyIHtcXG4gIG1hcmdpbjogMWVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLyogbWFpbiAqL1xcblxcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVlbTtcXG4gIHdpZHRoOiBjbGFtcCgyMDBweCwgODAlLCAxMDAwcHgpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbn1cXG5cXG4uY29udGVudCA+IGgyIHtcXG4gIGZvbnQtZmFtaWx5OiAnU2lnbWFyJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKiBtYWluIC0gYWRkIHRhc2sgKi9cXG5cXG4uY29udGVudCBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3RpdGxlLFxcbiNkZXRhaWxzLFxcbiNjYXRlZ29yeSxcXG4jZGF0ZSxcXG4uYnRuIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItNCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jdGl0bGU6aG92ZXIsXFxuI2RldGFpbHM6aG92ZXIsXFxuI2NhdGVnb3J5OmhvdmVyLFxcbiNkYXRlOmhvdmVyLFxcbi5idG46aG92ZXIge1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItMik7XFxufVxcblxcbiNjYXRlZ29yeTpob3ZlcixcXG4jZGF0ZTpob3ZlcixcXG4uYnRuOmhvdmVyLFxcbiN0cnVlOmhvdmVyLFxcbiNmYWxzZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLmNvbnRlbnQgZm9ybSB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5pbXBvcnRhbnQtZGl2LFxcbi5kYXRlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS4yZW07XFxuICBwYWRkaW5nLXRvcDogMC4zZW07XFxufVxcblxcbi5pbXBvcnRhbnQtZGl2PmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLmJ0bi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG5cXG4uYnRuIHtcXG4gIHBhZGRpbmc6IDAuNWVtIDEuMWVtO1xcbiAgZm9udC1mYW1pbHk6ICdTaWdtYXInLCBjdXJzaXZlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2U7XFxufVxcblxcbmZvcm0gcCB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxufVxcblxcbi8qIG1haW4gLSBsaXN0cyAqL1xcblxcbi50YXNrLWxpc3QtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogM2VtIC8gbWluLWNvbnRlbnQgMWZyIDAuM2ZyIHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjdlbTtcXG4gIHBhZGRpbmc6IDAgMC43ZW07XFxuICB3aWR0aDogbWF4KDEwMCUsIDMwZW0pO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jb2xvci00KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgZWFzZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmxpc3QtaW1nIHtcXG4gIHdpZHRoOiAxLjJlbTtcXG4gIGhlaWdodDogMS4yZW07XFxufVxcblxcbi5saXN0LWltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saXN0LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbn1cXG5cXG4vKiBtYWluIC0gZGV0YWlscyAqL1xcblxcbi5kZXRhaWxzLWRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDAuNWVtO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgd2lkdGg6IDIyZW07XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci00KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmRldGFpbHMtYnRuLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGV0YWlscy1idG4ge1xcbiAgd2lkdGg6IDVlbTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItNCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlO1xcbn1cXG5cXG4uZGV0YWlscy1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogMy8yLzQvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgYm94LXNoYWRvdzogMnB4IDAgMTBweCBibGFjaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVGFza0xvYWQoKSB7XG4gIGNvbnN0IG5ld0RpdiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBuZXdMYWJlbCA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IG5ld09wdGlvbiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBuZXdJbnB1dCA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi50ZXh0Q29udGVudCA9ICdBZGQgYSB0YXNrJztcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMik7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gbmV3TGFiZWwoKTtcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBuZXdJbnB1dCgpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnV2hhdCBkbyB5b3UgbmVlZCB0byBkbz8nKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICc2MCcpO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IGRldGFpbHNMYWJlbCA9IG5ld0xhYmVsKCk7XG4gIGRldGFpbHNMYWJlbC50ZXh0Q29udGVudCA9ICdEZXRhaWxzIChvcHRpb25hbCknO1xuICBjb25zdCBkZXRhaWxzVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBkZXRhaWxzVGV4dGFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RldGFpbHMnKTtcbiAgZGV0YWlsc1RleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGV0YWlscycpO1xuICBkZXRhaWxzVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywgJzMnKTtcbiAgZGV0YWlsc1RleHRhcmVhLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzI1MCcpO1xuICBkZXRhaWxzVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgdGFzay4uLicpO1xuICBkZXRhaWxzVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGV0YWlsc0xhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXRhaWxzVGV4dGFyZWEpO1xuXG4gIGNvbnN0IGNhdGVnb3J5TGFiZWwgPSBuZXdMYWJlbCgpO1xuICBjYXRlZ29yeUxhYmVsLnRleHRDb250ZW50ID0gJ0Nob29zZSBjYXRlZ29yeSc7XG4gIGNvbnN0IGNhdGVnb3J5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNhdGVnb3J5U2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdjYXRlZ29yeScpO1xuICBjYXRlZ29yeVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhdGVnb3J5Jyk7XG4gIGNvbnN0IG9wdGlvbkJsYW5rID0gbmV3T3B0aW9uKCk7XG4gIG9wdGlvbkJsYW5rLnRleHRDb250ZW50ID0gJyc7XG4gIG9wdGlvbkJsYW5rLnNlbGVjdGVkID0gdHJ1ZTtcbiAgb3B0aW9uQmxhbmsudmFsdWUgPSAnJztcbiAgY29uc3Qgb3B0aW9uV29yayA9IG5ld09wdGlvbigpO1xuICBvcHRpb25Xb3JrLnRleHRDb250ZW50ID0gJ1dvcmsnO1xuICBvcHRpb25Xb3JrLnZhbHVlID0gJ1dvcmsnO1xuICBjb25zdCBvcHRpb25QZXJzb25hbCA9IG5ld09wdGlvbigpO1xuICBvcHRpb25QZXJzb25hbC50ZXh0Q29udGVudCA9ICdQZXJzb25hbCc7XG4gIG9wdGlvblBlcnNvbmFsLnZhbHVlID0gJ1BlcnNvbmFsJztcbiAgY29uc3Qgb3B0aW9uSG9iYmllcyA9IG5ld09wdGlvbigpO1xuICBvcHRpb25Ib2JiaWVzLnRleHRDb250ZW50ID0gJ0hvYmJpZXMnO1xuICBvcHRpb25Ib2JiaWVzLnZhbHVlID0gJ0hvYmJpZXMnO1xuICBjb25zdCBvcHRpb25PdGhlciA9IG5ld09wdGlvbigpO1xuICBvcHRpb25PdGhlci50ZXh0Q29udGVudCA9ICdPdGhlcic7XG4gIG9wdGlvbk90aGVyLnZhbHVlID0gJ090aGVyJztcbiAgY2F0ZWdvcnlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uQmxhbmspO1xuICBjYXRlZ29yeVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25Xb3JrKTtcbiAgY2F0ZWdvcnlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uUGVyc29uYWwpO1xuICBjYXRlZ29yeVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25Ib2JiaWVzKTtcbiAgY2F0ZWdvcnlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uT3RoZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGNhdGVnb3J5TGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0KTtcblxuICBjb25zdCBpbXBvcnRhbnREaXYgPSBuZXdEaXYoKTtcbiAgaW1wb3J0YW50RGl2LmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudC1kaXYnKTtcbiAgY29uc3QgaW1wb3J0YW50TGFiZWwgPSBuZXdMYWJlbCgpO1xuICBpbXBvcnRhbnRMYWJlbC50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQ/ICc7XG4gIGltcG9ydGFudERpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnRMYWJlbCk7XG4gIGNvbnN0IGltcG9ydGFudElucHV0RGl2ID0gbmV3RGl2KCk7XG4gIGNvbnN0IGltcG9ydGFudElucHV0WWVzID0gbmV3SW5wdXQoKTtcbiAgaW1wb3J0YW50SW5wdXRZZXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIGltcG9ydGFudElucHV0WWVzLnNldEF0dHJpYnV0ZSgnbmFtZScsICdpbXBvcnRhbnQnKTtcbiAgaW1wb3J0YW50SW5wdXRZZXMuc2V0QXR0cmlidXRlKCdpZCcsICd0cnVlJyk7XG4gIGNvbnN0IGltcG9ydGFudElucHV0WWVzTGFiZWwgPSBuZXdMYWJlbCgpO1xuICBpbXBvcnRhbnRJbnB1dFllc0xhYmVsLnRleHRDb250ZW50ID0gJ1llcyc7XG4gIGltcG9ydGFudElucHV0WWVzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAneWVzJyk7XG4gIGNvbnN0IGltcG9ydGFudElucHV0Tm8gPSBuZXdJbnB1dCgpO1xuICBpbXBvcnRhbnRJbnB1dE5vLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICBpbXBvcnRhbnRJbnB1dE5vLnNldEF0dHJpYnV0ZSgnbmFtZScsICdpbXBvcnRhbnQnKTtcbiAgaW1wb3J0YW50SW5wdXROby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZhbHNlJyk7XG4gIGltcG9ydGFudElucHV0Tm8uY2hlY2tlZCA9IHRydWU7XG4gIGNvbnN0IGltcG9ydGFudElucHV0Tm9MYWJlbCA9IG5ld0xhYmVsKCk7XG4gIGltcG9ydGFudElucHV0Tm9MYWJlbC50ZXh0Q29udGVudCA9ICdObyc7XG4gIGltcG9ydGFudElucHV0Tm9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdubycpO1xuICBpbXBvcnRhbnRJbnB1dERpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnRJbnB1dFllcyk7XG4gIGltcG9ydGFudElucHV0RGl2LmFwcGVuZENoaWxkKGltcG9ydGFudElucHV0WWVzTGFiZWwpO1xuICBpbXBvcnRhbnRJbnB1dERpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnRJbnB1dE5vKTtcbiAgaW1wb3J0YW50SW5wdXREaXYuYXBwZW5kQ2hpbGQoaW1wb3J0YW50SW5wdXROb0xhYmVsKTtcbiAgaW1wb3J0YW50RGl2LmFwcGVuZENoaWxkKGltcG9ydGFudElucHV0RGl2KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChpbXBvcnRhbnREaXYpO1xuXG4gIGNvbnN0IGRhdGVEaXYgPSBuZXdEaXYoKTtcbiAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkYXRlLWRpdicpO1xuICBjb25zdCBkYXRlTGFiZWwgPSBuZXdMYWJlbCgpO1xuICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRGF0ZTogJztcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBuZXdJbnB1dCgpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuXG4gIGNvbnN0IGJ0bkRpdiA9IG5ld0RpdigpO1xuICBidG5EaXYuY2xhc3NMaXN0LmFkZCgnYnRuLWRpdicpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBuZXdJbnB1dCgpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCduYW1lJywgJ3N1Ym1pdCcpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQnKTtcbiAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICBzdWJtaXRCdG4udmFsdWUgPSAnQWRkJ1xuICBidG5EaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChidG5EaXYpO1xuXG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSAodGl0bGUsIGRldGFpbHMsIGNhdGVnb3J5LCBpbXBvcnRhbnQsIGRhdGUsIGNoZWNrZWQpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXRhaWxzLCBjYXRlZ29yeSwgaW1wb3J0YW50LCBkYXRlLCBjaGVja2VkfTtcbiAgfTtcbiAgXG4gIGxldCBkZWZhdWx0VGFza0xpc3QgPSBbXTtcbiAgbGV0IHRhc2tMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0Jyk7XG4gIHRhc2tMaXN0ID0gSlNPTi5wYXJzZSh0YXNrTGlzdCB8fCBKU09OLnN0cmluZ2lmeShkZWZhdWx0VGFza0xpc3QpKTtcblxuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmb3JtLmFwcGVuZENoaWxkKHBhcmEpO1xuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpIHtcbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PSAnJykge1xuICAgICAgdGl0bGVJbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjZmY4MDgwJztcbiAgICAgIHBhcmEudGV4dENvbnRlbnQgPSAnUGxlYXNlIGZpbGwgb3V0IGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzLic7XG4gICAgfSBlbHNlIHRpdGxlSW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI0JCRTFGQSc7XG4gICAgaWYgKG9wdGlvbkJsYW5rLnNlbGVjdGVkKSB7XG4gICAgICBjYXRlZ29yeVNlbGVjdC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjZmY4MDgwJztcbiAgICAgIHBhcmEudGV4dENvbnRlbnQgPSAnUGxlYXNlIGZpbGwgb3V0IGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzLic7XG4gICAgfSBlbHNlIGNhdGVnb3J5U2VsZWN0LnN0eWxlLmJvcmRlckNvbG9yID0gJyNCQkUxRkEnO1xuICAgIGlmIChkYXRlSW5wdXQudmFsdWUgPT0gJycpIHtcbiAgICAgIGRhdGVJbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjZmY4MDgwJztcbiAgICAgIHBhcmEudGV4dENvbnRlbnQgPSAnUGxlYXNlIGZpbGwgb3V0IGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzLic7XG4gICAgfSBlbHNlIGRhdGVJbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjQkJFMUZBJztcbiAgfTtcblxuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YWxpZGF0ZUZvcm0oKTtcbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSAhPSAnJyAmJiAhb3B0aW9uQmxhbmsuc2VsZWN0ZWQgJiYgZGF0ZUlucHV0LnZhbHVlICE9ICcnKSB7XG4gICAgICBjb25zdCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykpO1xuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscycpLnZhbHVlO1xuICAgICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKS52YWx1ZTtcbiAgICAgIGNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbXBvcnRhbnRcIl06Y2hlY2tlZCcpLmlkO1xuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG5cbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKHRpdGxlLCBkZXRhaWxzLCBjYXRlZ29yeSwgaW1wb3J0YW50LCBkYXRlLCAnZmFsc2UnKTtcbiAgICAgIHRhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgICAgIFxuICAgICAgcGFyYS50ZXh0Q29udGVudCA9ICdUYXNrIGFkZGVkIHN1Y2Nlc3NmdWxseSEnXG4gICAgfTtcbiAgfSk7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdFRhc2tMb2FkKGlkKSB7XG4gIGNvbnN0IG5ld0RpdiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBuZXdMYWJlbCA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IG5ld09wdGlvbiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBuZXdJbnB1dCA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgbGV0IGRlZmF1bHRUYXNrTGlzdCA9IFtdO1xuICBsZXQgdGFza0xpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKTtcbiAgdGFza0xpc3QgPSBKU09OLnBhcnNlKHRhc2tMaXN0IHx8IEpTT04uc3RyaW5naWZ5KGRlZmF1bHRUYXNrTGlzdCkpO1xuXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIudGV4dENvbnRlbnQgPSAnRWRpdCB0YXNrJztcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMik7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gbmV3TGFiZWwoKTtcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBuZXdJbnB1dCgpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnV2hhdCBkbyB5b3UgbmVlZCB0byBkbz8nKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcbiAgdGl0bGVJbnB1dC52YWx1ZSA9IHRhc2tMaXN0W2lkXS50aXRsZTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBjb25zdCBkZXRhaWxzTGFiZWwgPSBuZXdMYWJlbCgpO1xuICBkZXRhaWxzTGFiZWwudGV4dENvbnRlbnQgPSAnRGV0YWlscyc7XG4gIGNvbnN0IGRldGFpbHNUZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGRldGFpbHNUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGV0YWlscycpO1xuICBkZXRhaWxzVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsICdkZXRhaWxzJyk7XG4gIGRldGFpbHNUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMycpO1xuICBkZXRhaWxzVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMjUwJyk7XG4gIGRldGFpbHNUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Nob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSB0YXNrLi4uJyk7XG4gIGRldGFpbHNUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcbiAgZGV0YWlsc1RleHRhcmVhLnZhbHVlID0gdGFza0xpc3RbaWRdLmRldGFpbHM7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGV0YWlsc0xhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXRhaWxzVGV4dGFyZWEpO1xuXG4gIGNvbnN0IGNhdGVnb3J5TGFiZWwgPSBuZXdMYWJlbCgpO1xuICBjYXRlZ29yeUxhYmVsLnRleHRDb250ZW50ID0gJ0Nob29zZSBjYXRlZ29yeSc7XG4gIGNvbnN0IGNhdGVnb3J5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNhdGVnb3J5U2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdjYXRlZ29yeScpO1xuICBjYXRlZ29yeVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhdGVnb3J5Jyk7XG4gIGNvbnN0IG9wdGlvbldvcmsgPSBuZXdPcHRpb24oKTtcbiAgb3B0aW9uV29yay50ZXh0Q29udGVudCA9ICdXb3JrJztcbiAgb3B0aW9uV29yay52YWx1ZSA9ICdXb3JrJztcbiAgY29uc3Qgb3B0aW9uUGVyc29uYWwgPSBuZXdPcHRpb24oKTtcbiAgb3B0aW9uUGVyc29uYWwudGV4dENvbnRlbnQgPSAnUGVyc29uYWwnO1xuICBvcHRpb25QZXJzb25hbC52YWx1ZSA9ICdQZXJzb25hbCc7XG4gIGNvbnN0IG9wdGlvbkhvYmJpZXMgPSBuZXdPcHRpb24oKTtcbiAgb3B0aW9uSG9iYmllcy50ZXh0Q29udGVudCA9ICdIb2JiaWVzJztcbiAgb3B0aW9uSG9iYmllcy52YWx1ZSA9ICdIb2JiaWVzJztcbiAgY29uc3Qgb3B0aW9uT3RoZXIgPSBuZXdPcHRpb24oKTtcbiAgb3B0aW9uT3RoZXIudGV4dENvbnRlbnQgPSAnT3RoZXInO1xuICBvcHRpb25PdGhlci52YWx1ZSA9ICdPdGhlcic7XG4gIGlmICh0YXNrTGlzdFtpZF0uY2F0ZWdvcnkgPT0gJ1dvcmsnKSBvcHRpb25Xb3JrLnNlbGVjdGVkID0gdHJ1ZTtcbiAgaWYgKHRhc2tMaXN0W2lkXS5jYXRlZ29yeSA9PSAnUGVyc29uYWwnKSBvcHRpb25QZXJzb25hbC5zZWxlY3RlZCA9IHRydWU7XG4gIGlmICh0YXNrTGlzdFtpZF0uY2F0ZWdvcnkgPT0gJ0hvYmJpZXMnKSBvcHRpb25Ib2JiaWVzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgaWYgKHRhc2tMaXN0W2lkXS5jYXRlZ29yeSA9PSAnT3RoZXInKSBvcHRpb25PdGhlci5zZWxlY3RlZCA9IHRydWU7XG4gIGNhdGVnb3J5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbldvcmspO1xuICBjYXRlZ29yeVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25QZXJzb25hbCk7XG4gIGNhdGVnb3J5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkhvYmJpZXMpO1xuICBjYXRlZ29yeVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25PdGhlcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2F0ZWdvcnlMYWJlbCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2F0ZWdvcnlTZWxlY3QpO1xuXG4gIGNvbnN0IGltcG9ydGFudERpdiA9IG5ld0RpdigpO1xuICBpbXBvcnRhbnREaXYuY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50LWRpdicpO1xuICBjb25zdCBpbXBvcnRhbnRMYWJlbCA9IG5ld0xhYmVsKCk7XG4gIGltcG9ydGFudExhYmVsLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudD8gJztcbiAgaW1wb3J0YW50RGl2LmFwcGVuZENoaWxkKGltcG9ydGFudExhYmVsKTtcbiAgY29uc3QgaW1wb3J0YW50SW5wdXREaXYgPSBuZXdEaXYoKTtcbiAgY29uc3QgaW1wb3J0YW50SW5wdXRZZXMgPSBuZXdJbnB1dCgpO1xuICBpbXBvcnRhbnRJbnB1dFllcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgaW1wb3J0YW50SW5wdXRZZXMuc2V0QXR0cmlidXRlKCduYW1lJywgJ2ltcG9ydGFudCcpO1xuICBpbXBvcnRhbnRJbnB1dFllcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RydWUnKTtcbiAgY29uc3QgaW1wb3J0YW50SW5wdXRZZXNMYWJlbCA9IG5ld0xhYmVsKCk7XG4gIGltcG9ydGFudElucHV0WWVzTGFiZWwudGV4dENvbnRlbnQgPSAnWWVzJztcbiAgaW1wb3J0YW50SW5wdXRZZXNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd5ZXMnKTtcbiAgY29uc3QgaW1wb3J0YW50SW5wdXRObyA9IG5ld0lucHV0KCk7XG4gIGltcG9ydGFudElucHV0Tm8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIGltcG9ydGFudElucHV0Tm8uc2V0QXR0cmlidXRlKCduYW1lJywgJ2ltcG9ydGFudCcpO1xuICBpbXBvcnRhbnRJbnB1dE5vLnNldEF0dHJpYnV0ZSgnaWQnLCAnZmFsc2UnKTtcbiAgY29uc3QgaW1wb3J0YW50SW5wdXROb0xhYmVsID0gbmV3TGFiZWwoKTtcbiAgaW1wb3J0YW50SW5wdXROb0xhYmVsLnRleHRDb250ZW50ID0gJ05vJztcbiAgaW1wb3J0YW50SW5wdXROb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25vJyk7XG4gIGlmICh0YXNrTGlzdFtpZF0uaW1wb3J0YW50ID09ICd0cnVlJykgaW1wb3J0YW50SW5wdXRZZXMuY2hlY2tlZCA9IHRydWU7XG4gIGlmICh0YXNrTGlzdFtpZF0uaW1wb3J0YW50ID09ICdmYWxzZScpIGltcG9ydGFudElucHV0Tm8uY2hlY2tlZCA9IHRydWU7XG4gIGltcG9ydGFudElucHV0RGl2LmFwcGVuZENoaWxkKGltcG9ydGFudElucHV0WWVzKTtcbiAgaW1wb3J0YW50SW5wdXREaXYuYXBwZW5kQ2hpbGQoaW1wb3J0YW50SW5wdXRZZXNMYWJlbCk7XG4gIGltcG9ydGFudElucHV0RGl2LmFwcGVuZENoaWxkKGltcG9ydGFudElucHV0Tm8pO1xuICBpbXBvcnRhbnRJbnB1dERpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnRJbnB1dE5vTGFiZWwpO1xuICBpbXBvcnRhbnREaXYuYXBwZW5kQ2hpbGQoaW1wb3J0YW50SW5wdXREaXYpO1xuICBmb3JtLmFwcGVuZENoaWxkKGltcG9ydGFudERpdik7XG5cbiAgY29uc3QgZGF0ZURpdiA9IG5ld0RpdigpO1xuICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2RhdGUtZGl2Jyk7XG4gIGNvbnN0IGRhdGVMYWJlbCA9IG5ld0xhYmVsKCk7XG4gIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlOiAnO1xuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IG5ld0lucHV0KCk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xuICBkYXRlSW5wdXQudmFsdWUgPSB0YXNrTGlzdFtpZF0uZGF0ZTtcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuXG4gIGNvbnN0IGJ0bkRpdiA9IG5ld0RpdigpO1xuICBidG5EaXYuY2xhc3NMaXN0LmFkZCgnYnRuLWRpdicpO1xuICBjb25zdCBzdWJtaXRFZGl0QnRuID0gbmV3SW5wdXQoKTtcbiAgc3VibWl0RWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIHN1Ym1pdEVkaXRCdG4uc2V0QXR0cmlidXRlKCduYW1lJywgJ3N1Ym1pdCcpO1xuICBzdWJtaXRFZGl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0Jyk7XG4gIHN1Ym1pdEVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gIHN1Ym1pdEVkaXRCdG4udmFsdWUgPSAnRWRpdCdcbiAgYnRuRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEVkaXRCdG4pO1xuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgYnRuRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnRuRGl2KTtcblxuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmb3JtLmFwcGVuZENoaWxkKHBhcmEpO1xuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpIHtcbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PSAnJykge1xuICAgICAgdGl0bGVJbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjZmY4MDgwJztcbiAgICAgIHBhcmEudGV4dENvbnRlbnQgPSAnUGxlYXNlIGZpbGwgb3V0IGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzLic7XG4gICAgfSBlbHNlIHRpdGxlSW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI0JCRTFGQSc7XG4gICAgaWYgKGRhdGVJbnB1dC52YWx1ZSA9PSAnJykge1xuICAgICAgZGF0ZUlucHV0LnN0eWxlLmJvcmRlckNvbG9yID0gJyNmZjgwODAnO1xuICAgICAgcGFyYS50ZXh0Q29udGVudCA9ICdQbGVhc2UgZmlsbCBvdXQgYWxsIHRoZSByZXF1aXJlZCBmaWVsZHMuJztcbiAgICB9IGVsc2UgZGF0ZUlucHV0LnN0eWxlLmJvcmRlckNvbG9yID0gJyNCQkUxRkEnO1xuICB9O1xuXG4gIHN1Ym1pdEVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YWxpZGF0ZUZvcm0oKTtcbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSAhPSAnJyAmJiBkYXRlSW5wdXQudmFsdWUgIT0gJycpIHtcbiAgICAgIHRhc2tMaXN0W2lkXS50aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgICAgdGFza0xpc3RbaWRdLmRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscycpLnZhbHVlO1xuICAgICAgdGFza0xpc3RbaWRdLmNhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5JykudmFsdWU7XG4gICAgICB0YXNrTGlzdFtpZF0uaW1wb3J0YW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltcG9ydGFudFwiXTpjaGVja2VkJykuaWQ7XG4gICAgICB0YXNrTGlzdFtpZF0uZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG5cbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuXG4gICAgICBwYXJhLnRleHRDb250ZW50ID0gJ1Rhc2sgZWRpdGVkIHN1Y2Nlc3NmdWxseSEnXG4gICAgfTtcbiAgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3RlckxvYWQoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCDCqSAyMDIzIERyYWdpY2V2aWNTJztcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHApO1xufTsiLCJpbXBvcnQgc2lkZWJhciBmcm9tICcuL2ltYWdlcy9zaWRlYmFyLnBuZyc7XG5pbXBvcnQgYWNjb3VudCBmcm9tICcuL2ltYWdlcy9hY2NvdW50LnBuZyc7XG5pbXBvcnQgYWRkIGZyb20gJy4vaW1hZ2VzL2FkZC5wbmcnO1xuaW1wb3J0IGFkZFRhc2tMb2FkIGZyb20gJy4vYWRkLXRhc2snO1xuaW1wb3J0IHsgaG9tZUxvYWQgfSBmcm9tICcuL21haW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXJMb2FkKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuICBjb25zdCBuZXdEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbmV3SW1nID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgY29uc3Qgc2lkZWJhckJ0bkRpdiA9IG5ld0RpdigpO1xuICBzaWRlYmFyQnRuRGl2LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItYnRuLWRpdicpO1xuICBjb25zdCBoMURpdiA9IG5ld0RpdigpO1xuICBoMURpdi5jbGFzc0xpc3QuYWRkKCdoMS1kaXYnKTtcbiAgY29uc3QgcHJvZmlsZURpdiA9IG5ld0RpdigpO1xuICBwcm9maWxlRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2ZpbGUtZGl2Jyk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHNpZGViYXJCdG5EaXYpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDFEaXYpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvZmlsZURpdik7XG5cbiAgY29uc3Qgc2lkZWJhckltZyA9IG5ld0ltZygpO1xuICBzaWRlYmFySW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc2lkZWJhcik7XG5cbiAgc2lkZWJhckJ0bkRpdi5hcHBlbmRDaGlsZChzaWRlYmFySW1nKTtcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLnRleHRDb250ZW50ID0gJ1RvRG8gTGlzdCc7XG5cbiAgaDFEaXYuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIGNvbnN0IGFkZEltZyA9IG5ld0ltZygpO1xuICBhZGRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBhZGQpO1xuICBjb25zdCBhY2NvdW50SW1nID0gbmV3SW1nKCk7XG4gIGFjY291bnRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBhY2NvdW50KTtcblxuICBwcm9maWxlRGl2LmFwcGVuZENoaWxkKGFkZEltZyk7XG4gIHByb2ZpbGVEaXYuYXBwZW5kQ2hpbGQoYWNjb3VudEltZyk7XG5cbiAgLy8gaGlkaW5nIC8gZGlzcGxheWluZyB0aGUgbmF2aWdhdGlvbiBvbiBjbGlja1xuICBzaWRlYmFySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChuYXYuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICBuYXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGhlYWRlci5zdHlsZS5ncmlkQXJlYSA9ICcxLzEvMi8zJztcbiAgICAgIG1haW4uc3R5bGUuZ3JpZEFyZWEgPSAnMi8xLzMvMyc7XG4gICAgICBmb290ZXIuc3R5bGUuZ3JpZEFyZWEgPSAnMy8xLzQvMydcbiAgICB9IGVsc2Uge1xuICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBoZWFkZXIuc3R5bGUuZ3JpZEFyZWEgPSAnMS8yLzIvMyc7XG4gICAgICBtYWluLnN0eWxlLmdyaWRBcmVhID0gJzIvMi8zLzMnO1xuICAgICAgZm9vdGVyLnN0eWxlLmdyaWRBcmVhID0gJzMvMi80LzMnXG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gZGlzcGxheWluZyBcIkFkZCB0YXNrXCIgZm9ybSBvbiBtYWluXG4gIGFkZEltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2tMb2FkKTtcblxuICAvLyBsb2FkaW5nIGhvbWUgcGFnZSBieSBjbGlja2luZyBvbiB0aGUgdGl0bGVcbiAgaDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBob21lTG9hZCk7XG59OyIsImltcG9ydCBjaGVja2VkIGZyb20gJy4vaW1hZ2VzL2NoZWNrZWQucG5nJztcbmltcG9ydCB1bmNoZWNrZWQgZnJvbSAnLi9pbWFnZXMvdW5jaGVja2VkLnBuZyc7XG5pbXBvcnQgc3RhciBmcm9tICcuL2ltYWdlcy9zdGFyLnBuZyc7XG5pbXBvcnQgc3RhckVtcHR5IGZyb20gJy4vaW1hZ2VzL3N0YXItZW1wdHkucG5nJztcbmltcG9ydCBpbmZvIGZyb20gJy4vaW1hZ2VzL2luZm8ucG5nJztcbmltcG9ydCByZW1vdmUgZnJvbSAnLi9pbWFnZXMvcmVtb3ZlLnBuZyc7XG5pbXBvcnQgeyBpc1RvZGF5LCBpc1RoaXNXZWVrIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IGVkaXRUYXNrTG9hZCBmcm9tICcuL2VkaXQtdGFzayc7XG5cbmNvbnN0IG5ld0RpdiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbmV3SW1nID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5jb25zdCBuZXdTcGFuID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuY29uc3QgdGFza0xpc3REaXYgPSBuZXdEaXYoKTtcbnRhc2tMaXN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdC1kaXYnKTtcblxuY29uc3QgZGV0YWlsc0RpdiA9IG5ld0RpdigpO1xuZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWRpdicpO1xuZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChuZXdEaXYoKSk7XG5kZXRhaWxzRGl2LmFwcGVuZENoaWxkKG5ld0RpdigpKTtcbmRldGFpbHNEaXYuYXBwZW5kQ2hpbGQobmV3RGl2KCkpO1xuZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChuZXdEaXYoKSk7XG5kZXRhaWxzRGl2LmFwcGVuZENoaWxkKG5ld0RpdigpKTtcbmRldGFpbHNEaXYuYXBwZW5kQ2hpbGQobmV3RGl2KCkpO1xuZGV0YWlsc0Rpdi5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtYnRuLWRpdicpO1xuXG5jb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5lZGl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbmVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG5lZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtYnRuJywgJ2VkaXQtYnRuJyk7XG5jb25zdCBva0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xub2tCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xub2tCdG4udGV4dENvbnRlbnQgPSAnT2snO1xub2tCdG4uY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1idG4nLCAnb2stYnRuJyk7XG5kZXRhaWxzRGl2Lmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5kZXRhaWxzRGl2Lmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQob2tCdG4pO1xuXG5mdW5jdGlvbiBsaXN0VGFza3MoY2F0ZWdvcnkpIHsgLy8gZGlzcGxheXMgdGFza3MgZmlsdGVyaW5nIHRoZW0gYmFzZWQgb24gY2F0ZWdvcnlcbiAgdGFza0xpc3REaXYudGV4dENvbnRlbnQgPSAnJztcbiAgbGV0IGRlZmF1bHRUYXNrTGlzdCA9IFtdO1xuICBsZXQgdGFza0xpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKTtcbiAgdGFza0xpc3QgPSBKU09OLnBhcnNlKHRhc2tMaXN0IHx8IEpTT04uc3RyaW5naWZ5KGRlZmF1bHRUYXNrTGlzdCkpO1xuICBcbiAgZm9yIChsZXQgaT0wOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBjcmVhdGluZyBpbWcgZWxlbWVudHMgZm9yIGV2ZXJ5IHRhc2tcbiAgICBjb25zdCBjaGVja2VkSW1nID0gbmV3SW1nKCk7XG4gICAgY2hlY2tlZEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNoZWNrZWQpO1xuICAgIGNoZWNrZWRJbWcuY2xhc3NMaXN0LmFkZCgnbGlzdC1pbWcnLCAnY2hlY2tlZCcpO1xuICAgIGNvbnN0IHVuY2hlY2tlZEltZyA9IG5ld0ltZygpO1xuICAgIHVuY2hlY2tlZEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHVuY2hlY2tlZCk7XG4gICAgdW5jaGVja2VkSW1nLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaW1nJywgJ2NoZWNrZWQnKTtcbiAgICBjb25zdCBzdGFySW1nID0gbmV3SW1nKCk7XG4gICAgc3RhckltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHN0YXIpO1xuICAgIHN0YXJJbWcuY2xhc3NMaXN0LmFkZCgnbGlzdC1pbWcnLCAnaW1wb3J0YW50Jyk7XG4gICAgY29uc3Qgc3RhckVtcHR5SW1nID0gbmV3SW1nKCk7XG4gICAgc3RhckVtcHR5SW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc3RhckVtcHR5KTtcbiAgICBzdGFyRW1wdHlJbWcuY2xhc3NMaXN0LmFkZCgnbGlzdC1pbWcnLCAnaW1wb3J0YW50Jyk7XG4gICAgY29uc3QgaW5mb0ltZyA9IG5ld0ltZygpO1xuICAgIGluZm9JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbmZvKTtcbiAgICBpbmZvSW1nLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaW1nJywgJ2luZm8nKTtcbiAgICBjb25zdCByZW1vdmVJbWcgPSBuZXdJbWcoKTtcbiAgICByZW1vdmVJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCByZW1vdmUpO1xuICAgIHJlbW92ZUltZy5jbGFzc0xpc3QuYWRkKCdsaXN0LWltZycsICdyZW1vdmUnKTtcblxuICAgIGZ1bmN0aW9uIGFwcGVuZExpc3QoKSB7IC8vIGFwcGVuZHMgYWxsIGh0bWwgZWxlbWVudHMgZm9yIHNlbGVjdGVkIHRhc2sgXG4gICAgICBsZXQgdGFzayA9IHRhc2tMaXN0W2ldO1xuICAgICAgbGV0IHRhc2tJbmZvID0gbmV3RGl2KCk7XG4gICAgICB0YXNrSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgaSk7XG4gICAgICB0YXNrSW5mby5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0nKTtcblxuICAgICAgaWYgKHRhc2suY2hlY2tlZCA9PSAnZmFsc2UnKSB7XG4gICAgICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHVuY2hlY2tlZEltZyk7XG4gICAgICAgIHRhc2tJbmZvLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICAgICAgICB0YXNrSW5mby5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgfVxuICAgICAgaWYgKHRhc2suY2hlY2tlZCA9PSAndHJ1ZScpIHtcbiAgICAgICAgdGFza0luZm8uYXBwZW5kQ2hpbGQoY2hlY2tlZEltZyk7XG4gICAgICAgIHRhc2tJbmZvLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICAgIHRhc2tJbmZvLnN0eWxlLm9wYWNpdHkgPSAnMC40JztcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGl0bGUgPSBuZXdTcGFuKCk7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgIGNvbnN0IGRhdGUgPSBuZXdTcGFuKCk7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gdGFzay5kYXRlO1xuICAgICAgdGFza0luZm8uYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICAgIGlmICh0YXNrLmltcG9ydGFudCA9PSAnZmFsc2UnKSB0YXNrSW5mby5hcHBlbmRDaGlsZChzdGFyRW1wdHlJbWcpO1xuICAgICAgaWYgKHRhc2suaW1wb3J0YW50ID09ICd0cnVlJykgdGFza0luZm8uYXBwZW5kQ2hpbGQoc3RhckltZyk7XG5cbiAgICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKGluZm9JbWcpO1xuICAgICAgdGFza0luZm8uYXBwZW5kQ2hpbGQocmVtb3ZlSW1nKTtcblxuICAgICAgdGFza0xpc3REaXYuYXBwZW5kQ2hpbGQodGFza0luZm8pO1xuICAgIH07XG5cbiAgICAvLyBmaWx0ZXJpbmcgdGFzayBiYXNlZCBvbiB3aGljaCBjYXRlZ29yeSB0aGV5IGJlbG9uZyBhbmQgZGlzcGxheWluZyB0aGVtIGFjY29yZGluZ2x5XG4gICAgYXBwZW5kTGlzdCgpO1xuICAgIGlmIChjYXRlZ29yeSA9PSAndG9kYXknKSBpZiAoIWlzVG9kYXkobmV3IERhdGUodGFza0xpc3RbaV0uZGF0ZSkpKSB0YXNrTGlzdERpdi5jaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGlmIChjYXRlZ29yeSA9PSAndGhpcyB3ZWVrJykgaWYgKCFpc1RoaXNXZWVrKG5ldyBEYXRlKHRhc2tMaXN0W2ldLmRhdGUpKSkgdGFza0xpc3REaXYuY2hpbGRyZW5baV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpZiAoY2F0ZWdvcnkgPT0gJ2ltcG9ydGFudCcpIGlmICh0YXNrTGlzdFtpXS5pbXBvcnRhbnQgIT0gJ3RydWUnKSB0YXNrTGlzdERpdi5jaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGlmIChjYXRlZ29yeSA9PSAnd29yaycpIGlmICh0YXNrTGlzdFtpXS5jYXRlZ29yeSAhPSAnV29yaycpIHRhc2tMaXN0RGl2LmNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaWYgKGNhdGVnb3J5ID09ICdwZXJzb25hbCcpIGlmICh0YXNrTGlzdFtpXS5jYXRlZ29yeSAhPSAnUGVyc29uYWwnKSB0YXNrTGlzdERpdi5jaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGlmIChjYXRlZ29yeSA9PSAnaG9iYmllcycpIGlmICh0YXNrTGlzdFtpXS5jYXRlZ29yeSAhPSAnSG9iYmllcycpIHRhc2tMaXN0RGl2LmNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaWYgKGNhdGVnb3J5ID09ICdvdGhlcicpIGlmICh0YXNrTGlzdFtpXS5jYXRlZ29yeSAhPSAnT3RoZXInKSB0YXNrTGlzdERpdi5jaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIHRvZ2dsZURvbmVTdGF0dXMoY2F0ZWdvcnkpO1xuICB0b2dnbGVJbXBvcnRhbnRTdGF0dXMoY2F0ZWdvcnkpOyBcbiAgcmVtb3ZlVGFzayhjYXRlZ29yeSk7XG4gIHRvZ2dsZVRhc2tEZXRhaWxzKGNhdGVnb3J5KTtcbiAgbWFpbi5hcHBlbmRDaGlsZChkZXRhaWxzRGl2KTtcbn07XG5cbmNvbnN0IHRvZ2dsZURvbmVTdGF0dXMgPSAoY2F0ZWdvcnkpID0+IHsgLy8gdG9nZ2xlcyBzdGF0dXMgb2YgYSB0YXNrIGluIGxvY2FsIHN0b3JhZ2VcbiAgY29uc3QgY2hlY2tlZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2VkJyk7XG4gIGZvciAobGV0IGk9MDsgaSA8IGNoZWNrZWRCdG4ubGVuZ3RoOyBpKyspIHtcbiAgICBjaGVja2VkQnRuW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2RpdicpLmlkO1xuICAgICAgY29uc3QgdGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpKTtcbiAgICAgIHRhc2tMaXN0W3Rhc2tJZF0uY2hlY2tlZCA9IHRhc2tMaXN0W3Rhc2tJZF0uY2hlY2tlZCA9PSAndHJ1ZScgPyAnZmFsc2UnIDogJ3RydWUnO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgICAgIGxpc3RUYXNrcyhjYXRlZ29yeSk7XG4gICAgfSk7XG4gIH07XG59O1xuXG5jb25zdCB0b2dnbGVJbXBvcnRhbnRTdGF0dXMgPSAoY2F0ZWdvcnkpID0+IHsgLy8gdG9nZ2xlcyBpbXBvcnRhbmNlIHN0YXR1cyBvZiBhIHRhc2sgaW4gbG9jYWwgc3RvcmFnZVxuICBjb25zdCBpbXBvcnRhbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1wb3J0YW50Jyk7XG4gIGZvciAobGV0IGk9MDsgaSA8IGltcG9ydGFudEJ0bi5sZW5ndGg7IGkrKykge1xuICAgIGltcG9ydGFudEJ0bltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYnKS5pZDtcbiAgICAgIGNvbnN0IHRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSk7XG4gICAgICB0YXNrTGlzdFt0YXNrSWRdLmltcG9ydGFudCA9IHRhc2tMaXN0W3Rhc2tJZF0uaW1wb3J0YW50ID09ICd0cnVlJyA/ICdmYWxzZScgOiAndHJ1ZSc7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuICAgICAgbGlzdFRhc2tzKGNhdGVnb3J5KTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbmNvbnN0IHRvZ2dsZVRhc2tEZXRhaWxzID0gKCkgPT4geyAvLyB0b2dnbGVzIGRpc3BsYXkgb2YgdGhlIGRldGFpbHMgd2luZG93XG4gIGNvbnN0IGluZm9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5mbycpO1xuICBmb3IgKGxldCBpPTA7IGkgPCBpbmZvQnRuLmxlbmd0aDsgaSsrKSB7XG4gICAgaW5mb0J0bltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYnKS5pZDtcbiAgICAgIGNvbnN0IHRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSk7XG5cbiAgICAgIC8vIGRpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgc2VsZWN0ZWQgdGFza1xuICAgICAgZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID09ICdmbGV4JyA/ICdub25lJyA6ICdmbGV4JztcbiAgICAgIGRldGFpbHNEaXYuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7dGFza0xpc3RbdGFza0lkXS50aXRsZX1gO1xuICAgICAgY29uc3QgZGV0YWlscyA9IHRhc2tMaXN0W3Rhc2tJZF0uZGV0YWlscyA9PSAnJyA/ICdub25lJyA6IHRhc2tMaXN0W3Rhc2tJZF0uZGV0YWlscztcbiAgICAgIGRldGFpbHNEaXYuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBgRGV0YWlsczogJHtkZXRhaWxzfWA7XG4gICAgICBkZXRhaWxzRGl2LmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gYER1ZSBkYXRlOiAke3Rhc2tMaXN0W3Rhc2tJZF0uZGF0ZX1gO1xuICAgICAgZGV0YWlsc0Rpdi5jaGlsZHJlblszXS50ZXh0Q29udGVudCA9IGBDYXRlZ29yeTogJHt0YXNrTGlzdFt0YXNrSWRdLmNhdGVnb3J5fWA7XG4gICAgICBjb25zdCBpbXBvcnRhbnQgPSB0YXNrTGlzdFt0YXNrSWRdLmltcG9ydGFudCA9PSAndHJ1ZScgPyAneWVzJyA6ICdubyc7XG4gICAgICBkZXRhaWxzRGl2LmNoaWxkcmVuWzRdLnRleHRDb250ZW50ID0gYEltcG9ydGFudDogJHtpbXBvcnRhbnR9YDtcblxuICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QgPT0gJ2RldGFpbHMtYnRuIGVkaXQtYnRuJykgZWRpdFRhc2tMb2FkKHRhc2tJZCk7XG4gICAgICB9KTtcbiAgICAgIC8vIGNsaWNraW5nIGFueXdoZXJlIG9uIHRoZSBib2R5IGhpZGVzIGRldGFpbHMgd2luZG93XG4gICAgICBpZiAoZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID09ICdmbGV4Jykge1xuICAgICAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0ICE9ICdkZXRhaWxzLWRpdicgJiYgZS50YXJnZXQuY2xhc3NMaXN0ICE9ICdsaXN0LWltZyBpbmZvJykgZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG59O1xuXG5jb25zdCByZW1vdmVUYXNrID0gKGNhdGVnb3J5KSA9PiB7IC8vIHJlbW92aW5nIHRhc2tzIGZyb20gbG9jYWxlIHN0b3JhZ2VcbiAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZScpO1xuICBmb3IgKGxldCBpPTA7IGkgPCByZW1vdmVCdG4ubGVuZ3RoOyBpKyspIHtcbiAgICByZW1vdmVCdG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdCgnZGl2JykuaWQ7XG4gICAgICBjb25zdCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykpO1xuICAgICAgdGFza0xpc3Quc3BsaWNlKHRhc2tJZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuICAgICAgbGlzdFRhc2tzKGNhdGVnb3J5KTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbi8vIGxvYWRpbmcgZnVuY3Rpb25zIGZvciBlYWNoIGNhdGVnb3J5XG5leHBvcnQgZnVuY3Rpb24gaG9tZUxvYWQoKSB7XG4gIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcbiAgaDIudGV4dENvbnRlbnQgPSAnSG9tZSAtIEFsbCBUYXNrcyc7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RGl2KTtcbiAgbGlzdFRhc2tzKCdob21lJyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdG9kYXlMb2FkKCkge1xuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGgyLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0xpc3REaXYpO1xuICB0YXNrTGlzdERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBsaXN0VGFza3MoJ3RvZGF5Jyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdGhpc1dlZWtMb2FkKCkge1xuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGgyLnRleHRDb250ZW50ID0gJ1RoaXMgd2Vlayc7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RGl2KTtcbiAgdGFza0xpc3REaXYudGV4dENvbnRlbnQgPSAnJztcbiAgbGlzdFRhc2tzKCd0aGlzIHdlZWsnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpbXBvcnRhbnRMb2FkKCkge1xuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGgyLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RGl2KTtcbiAgdGFza0xpc3REaXYudGV4dENvbnRlbnQgPSAnJztcbiAgbGlzdFRhc2tzKCdpbXBvcnRhbnQnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB3b3JrTG9hZCgpIHtcbiAgY29udGVudERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBoMi50ZXh0Q29udGVudCA9ICdXb3JrJztcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0xpc3REaXYpO1xuICB0YXNrTGlzdERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBsaXN0VGFza3MoJ3dvcmsnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzb25hbExvYWQoKSB7XG4gIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcbiAgaDIudGV4dENvbnRlbnQgPSAnUGVyc29uYWwnO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XG4gIHRhc2tMaXN0RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGxpc3RUYXNrcygncGVyc29uYWwnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBob2JiaWVzTG9hZCgpIHtcbiAgY29udGVudERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBoMi50ZXh0Q29udGVudCA9ICdIb2JiaWVzJztcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0xpc3REaXYpO1xuICB0YXNrTGlzdERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBsaXN0VGFza3MoJ2hvYmJpZXMnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBvdGhlckxvYWQoKSB7XG4gIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcbiAgaDIudGV4dENvbnRlbnQgPSAnT3RoZXInO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XG4gIHRhc2tMaXN0RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGxpc3RUYXNrcygnb3RoZXInKTtcbn07IiwiaW1wb3J0IG5hdkxvZ28gZnJvbSAnLi9pbWFnZXMvbmF2LWxvZ28ucG5nJztcbmltcG9ydCBzdGFyIGZyb20gJy4vaW1hZ2VzL3N0YXIucG5nJztcbmltcG9ydCB3ZWVrIGZyb20gJy4vaW1hZ2VzL3dlZWsucG5nJztcbmltcG9ydCB0b2RheSBmcm9tICcuL2ltYWdlcy90b2RheS5wbmcnO1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9pbWFnZXMvaG9tZS5wbmcnO1xuaW1wb3J0IHdvcmsgZnJvbSAnLi9pbWFnZXMvd29yay5wbmcnO1xuaW1wb3J0IHBlcnNvbmFsIGZyb20gJy4vaW1hZ2VzL3BlcnNvbmFsLnBuZyc7XG5pbXBvcnQgaG9iYmllcyBmcm9tICcuL2ltYWdlcy9ob2JiaWVzLnBuZyc7XG5pbXBvcnQgb3RoZXIgZnJvbSAnLi9pbWFnZXMvb3RoZXIucG5nJztcbmltcG9ydCB7IGhvbWVMb2FkLCB0b2RheUxvYWQsIHRoaXNXZWVrTG9hZCwgaW1wb3J0YW50TG9hZCwgd29ya0xvYWQsIHBlcnNvbmFsTG9hZCwgaG9iYmllc0xvYWQsIG90aGVyTG9hZCB9IGZyb20gJy4vbWFpbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdkxvYWQoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuICBuYXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgY29uc3QgbmV3RGl2ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5ld0ltZyA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBuZXdMaSA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IG5ld1AgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgY29uc3QgbmF2TG9nb0RpdiA9IG5ld0RpdigpO1xuICBuYXZMb2dvRGl2LmNsYXNzTGlzdC5hZGQoJ25hdi1sb2dvLWRpdicpO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChuYXZMb2dvRGl2KTtcblxuICBjb25zdCBuYXZMb2dvSW1nID0gbmV3SW1nKCk7XG4gIG5hdkxvZ29JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBuYXZMb2dvKTtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS50ZXh0Q29udGVudCA9ICdUREwnO1xuXG4gIG5hdkxvZ29EaXYuYXBwZW5kQ2hpbGQobmF2TG9nb0ltZyk7XG4gIG5hdkxvZ29EaXYuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIGNvbnN0IHVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHVsMS5jbGFzc0xpc3QuYWRkKCd1bC0xJyk7XG4gIGNvbnN0IHVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHVsMi5jbGFzc0xpc3QuYWRkKCd1bC0yJyk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKHVsMSk7XG5cbiAgdWwxLmFwcGVuZENoaWxkKG5ld0xpKCkpO1xuICB1bDEuYXBwZW5kQ2hpbGQobmV3TGkoKSk7XG4gIHVsMS5hcHBlbmRDaGlsZChuZXdMaSgpKTtcbiAgdWwxLmFwcGVuZENoaWxkKG5ld0xpKCkpO1xuXG4gIHVsMS5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChuZXdJbWcoKSk7XG4gIHVsMS5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChuZXdQKCkpO1xuICB1bDEuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKCdzcmMnLCBob21lKTtcbiAgdWwxLmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIHVsMS5maXJzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvbWVMb2FkKTtcblxuICB1bDEuY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQobmV3SW1nKCkpO1xuICB1bDEuY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQobmV3UCgpKTtcbiAgdWwxLmNoaWxkcmVuWzFdLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZSgnc3JjJywgdG9kYXkpO1xuICB1bDEuY2hpbGRyZW5bMV0ubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gIHVsMS5jaGlsZHJlblsxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZGF5TG9hZCk7XG5cbiAgdWwxLmNoaWxkcmVuWzJdLmFwcGVuZENoaWxkKG5ld0ltZygpKTtcbiAgdWwxLmNoaWxkcmVuWzJdLmFwcGVuZENoaWxkKG5ld1AoKSk7XG4gIHVsMS5jaGlsZHJlblsyXS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHdlZWspO1xuICB1bDEuY2hpbGRyZW5bMl0ubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnO1xuICB1bDEuY2hpbGRyZW5bMl0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzV2Vla0xvYWQpO1xuXG4gIHVsMS5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKG5ld0ltZygpKTtcbiAgdWwxLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQobmV3UCgpKTtcbiAgdWwxLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKCdzcmMnLCBzdGFyKTtcbiAgdWwxLmxhc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuICB1bDEubGFzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGltcG9ydGFudExvYWQpO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKTtcblxuICBuYXYuYXBwZW5kQ2hpbGQodWwyKTtcblxuICB1bDIuYXBwZW5kQ2hpbGQobmV3TGkoKSk7XG4gIHVsMi5hcHBlbmRDaGlsZChuZXdMaSgpKTtcbiAgdWwyLmFwcGVuZENoaWxkKG5ld0xpKCkpO1xuICB1bDIuYXBwZW5kQ2hpbGQobmV3TGkoKSk7XG5cbiAgdWwyLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKG5ld0ltZygpKTtcbiAgdWwyLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKG5ld1AoKSk7XG4gIHVsMi5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHdvcmspO1xuICB1bDIuZmlyc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdXb3JrJztcbiAgdWwyLmZpcnN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd29ya0xvYWQpO1xuXG4gIHVsMi5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChuZXdJbWcoKSk7XG4gIHVsMi5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChuZXdQKCkpO1xuICB1bDIuY2hpbGRyZW5bMV0uZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKCdzcmMnLCBwZXJzb25hbCk7XG4gIHVsMi5jaGlsZHJlblsxXS5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ1BlcnNvbmFsJztcbiAgdWwyLmNoaWxkcmVuWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGVyc29uYWxMb2FkKTtcblxuICB1bDIuY2hpbGRyZW5bMl0uYXBwZW5kQ2hpbGQobmV3SW1nKCkpO1xuICB1bDIuY2hpbGRyZW5bMl0uYXBwZW5kQ2hpbGQobmV3UCgpKTtcbiAgdWwyLmNoaWxkcmVuWzJdLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZSgnc3JjJywgaG9iYmllcyk7XG4gIHVsMi5jaGlsZHJlblsyXS5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ0hvYmJpZXMnO1xuICB1bDIuY2hpbGRyZW5bMl0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBob2JiaWVzTG9hZCk7XG5cbiAgdWwyLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQobmV3SW1nKCkpO1xuICB1bDIubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChuZXdQKCkpO1xuICB1bDIubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsIG90aGVyKTtcbiAgdWwyLmxhc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdPdGhlcic7XG4gIHVsMi5sYXN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3RoZXJMb2FkKTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBoZWFkZXJMb2FkIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBmb290ZXJMb2FkIGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCBuYXZMb2FkIGZyb20gJy4vbmF2JztcbmltcG9ydCB7IGhvbWVMb2FkIH0gZnJvbSAnLi9tYWluJztcblxuaGVhZGVyTG9hZCgpO1xubmF2TG9hZCgpO1xuZm9vdGVyTG9hZCgpO1xuaG9tZUxvYWQoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9