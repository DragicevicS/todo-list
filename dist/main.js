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







const newDiv = () => document.createElement('div');
const newImg = () => document.createElement('img');
const newLi = () => document.createElement('li');
const newA = () => document.createElement('a');
const newSpan = () => document.createElement('span');

const contentDiv = document.querySelector('.content');
const h2 = document.createElement('h2');
const taskListDiv = newDiv();
taskListDiv.classList.add('task-list-div');

function listTasks() {
  taskListDiv.textContent = '';
  let defaultTaskList = [];
  let taskList = localStorage.getItem('taskList');
  taskList = JSON.parse(taskList || JSON.stringify(defaultTaskList));
  
  for (let i=0; i < taskList.length; i++) {
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
};





function homeLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Home - All Tasks';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  listTasks();

  const removeBtn = document.querySelectorAll('.remove-img');
  for (let i=0; i < removeBtn.length; i++) {
  removeBtn[i].addEventListener('click', (e) => {
    const taskId = e.target.closest('div').id;
    const taskList = JSON.parse(localStorage.getItem('taskList'));
    taskList.splice(taskId, 1);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    listTasks();
  });
  };
};

function todayLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Today';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
};

function thisWeekLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'This week';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
};

function importantLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Important';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
};

function workLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Work';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
};

function personalLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Personal';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
};

function hobbiesLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Hobbies';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
};

function otherLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Other';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLFNBQVMsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxTQUFTLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLG9IQUFvSCxXQUFXLDhDQUE4Qyx1QkFBdUIsdUJBQXVCLHVCQUF1QixHQUFHLE9BQU8sY0FBYyxlQUFlLDJCQUEyQixH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QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUllO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDJDO0FBQ0E7QUFDUjtBQUNFOztBQUV0QjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLGdEQUFPOztBQUV4Qzs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYTtBQUNBO0FBQ047QUFDbUY7O0FBRS9HLG1EQUFVO0FBQ1YsZ0RBQU87QUFDUCxtREFBVTtBQUNWLCtDQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGQtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkJmZhbWlseT1TaWdtYXImZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLyogY29sb3IgcGFsbGV0ZSAqL1xcbiAgLS1jb2xvci0xOiAjMUIyNjJDO1xcbiAgLS1jb2xvci0yOiAjMEY0Qzc1O1xcbiAgLS1jb2xvci0zOiAjMzI4MkI4O1xcbiAgLS1jb2xvci00OiAjQkJFMUZBO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAwLjVmciA2ZnIgMC4zZnIgLyBtaW5tYXgobWluLWNvbnRlbnQsIDAuOGZyKSA1ZnI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogbWF4KDEwMCUsIDM1MHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbn1cXG5cXG5oZWFkZXIgaW1nIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5oZWFkZXIgaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxuXFx0ZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxufVxcblxcbi5zaWRlYmFyLWJ0bi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcXG59XFxuXFxuLnNpZGViYXItYnRuLWRpdiBpbWcge1xcbiAgd2lkdGg6IDIuMmVtO1xcbiAgaGVpZ2h0OiAyLjJlbTtcXG59XFxuXFxuLmgxLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICBmb250LWZhbWlseTogJ1NpZ21hcicsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbi5wcm9maWxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG59XFxuXFxuLnByb2ZpbGUtZGl2IGltZyB7XFxuICB3aWR0aDogMi4xZW07XFxuICBoZWlnaHQ6IDIuMWVtO1xcbn1cXG5cXG4vKiBuYXYgKi9cXG5cXG5uYXYge1xcbiAgZ3JpZC1hcmVhOiAxLzEvNC8yO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubmF2LWxvZ28tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuM2VtO1xcbiAgcGFkZGluZy1ib3R0b206IDEuNmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgZm9udC1zaXplOiAyLjFyZW07XFxuICBmb250LWZhbWlseTogJ1NpZ21hcicsIGN1cnNpdmU7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4ubmF2LWxvZ28tZGl2IGltZyB7XFxuICB3aWR0aDogMi4xZW07XFxuICBoZWlnaHQ6IDIuMWVtO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbm5hdiBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxuICBwYWRkaW5nOiA4cHggMWVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm5hdiB1bCBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEY0Qzc1O1xcbiAgdHJhbnNpdGlvbjogMC4zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5uYXYgbGk+aW1nIHtcXG4gIHdpZHRoOiAxLjVlbTtcXG4gIGhlaWdodDogMS41ZW07XFxufVxcblxcbm5hdiBociB7XFxuICBtYXJnaW46IDFlbTtcXG4gIHdpZHRoOiA4MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbi8qIG1haW4gKi9cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogMi8yLzMvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBwYWRkaW5nOiAxZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbi5jb250ZW50ID4gaDIge1xcbiAgZm9udC1mYW1pbHk6ICdTaWdtYXInLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qIG1haW4gLSBhZGQgdGFzayAqL1xcblxcbi5jb250ZW50IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jdGl0bGUsXFxuI2RldGFpbHMsXFxuI2NhdGVnb3J5LFxcbiNkYXRlLFxcbiNzdWJtaXQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci00KTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiN0aXRsZTpob3ZlcixcXG4jZGV0YWlsczpob3ZlcixcXG4jY2F0ZWdvcnk6aG92ZXIsXFxuI2RhdGU6aG92ZXIsXFxuI3N1Ym1pdDpob3ZlciB7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci0yKTtcXG59XFxuXFxuI3N1Ym1pdDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItMik7XFxufVxcblxcbi5jb250ZW50IGZvcm0gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uaW1wb3J0YW50LWRpdixcXG4uZGF0ZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuMmVtO1xcbiAgcGFkZGluZy10b3A6IDAuM2VtO1xcbn1cXG5cXG4uaW1wb3J0YW50LWRpdj5kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41ZW07XFxufVxcblxcbi5idG4tZGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3N1Ym1pdCB7XFxuICBwYWRkaW5nOiAwLjVlbSAxLjFlbTtcXG4gIGZvbnQtZmFtaWx5OiAnU2lnbWFyJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4vKiBtYWluIC0gbGlzdHMgKi9cXG5cXG4udGFzay1saXN0LWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogM2VtIC8gbWluLWNvbnRlbnQgMWZyIDAuM2ZyIHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjdlbTtcXG4gIHBhZGRpbmc6IDAgMC43ZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM2VtO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbi5saXN0LWltZyB7XFxuICB3aWR0aDogMS4yZW07XFxuICBoZWlnaHQ6IDEuMmVtO1xcbn1cXG5cXG4ubGlzdC1pbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiAzLzIvNC8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0RBQStEO0VBQy9ELFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw0QkFBNEI7Q0FDN0Isb0JBQW9CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUEsUUFBUTs7QUFFUjtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUNBQWlDO0FBQ25DOztBQUVBOzs7OztFQUtFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7OztFQUtFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixpRUFBaUU7RUFDakUsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7RUFDWCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIseUNBQXlDO0VBQ3pDLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQmZmFtaWx5PVNpZ21hciZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAvKiBjb2xvciBwYWxsZXRlICovXFxuICAtLWNvbG9yLTE6ICMxQjI2MkM7XFxuICAtLWNvbG9yLTI6ICMwRjRDNzU7XFxuICAtLWNvbG9yLTM6ICMzMjgyQjg7XFxuICAtLWNvbG9yLTQ6ICNCQkUxRkE7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDAuNWZyIDZmciAwLjNmciAvIG1pbm1heChtaW4tY29udGVudCwgMC44ZnIpIDVmcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiBtYXgoMTAwJSwgMzUwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxufVxcblxcbmhlYWRlciBpbWcge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmhlYWRlciBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwKTtcXG5cXHRmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcXG59XFxuXFxuLnNpZGViYXItYnRuLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcbn1cXG5cXG4uc2lkZWJhci1idG4tZGl2IGltZyB7XFxuICB3aWR0aDogMi4yZW07XFxuICBoZWlnaHQ6IDIuMmVtO1xcbn1cXG5cXG4uaDEtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGZvbnQtZmFtaWx5OiAnU2lnbWFyJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLnByb2ZpbGUtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuMmVtO1xcbiAgcGFkZGluZy1yaWdodDogMWVtO1xcbn1cXG5cXG4ucHJvZmlsZS1kaXYgaW1nIHtcXG4gIHdpZHRoOiAyLjFlbTtcXG4gIGhlaWdodDogMi4xZW07XFxufVxcblxcbi8qIG5hdiAqL1xcblxcbm5hdiB7XFxuICBncmlkLWFyZWE6IDEvMS80LzI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMWVtO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMyk7XFxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5uYXYtbG9nby1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4zZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMS42ZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICBmb250LXNpemU6IDIuMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnU2lnbWFyJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbi5uYXYtbG9nby1kaXYgaW1nIHtcXG4gIHdpZHRoOiAyLjFlbTtcXG4gIGhlaWdodDogMi4xZW07XFxufVxcblxcbm5hdiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxubmF2IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDhweCAxZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2IHVsIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRjRDNzU7XFxuICB0cmFuc2l0aW9uOiAwLjMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbm5hdiBsaT5pbWcge1xcbiAgd2lkdGg6IDEuNWVtO1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG59XFxuXFxubmF2IGhyIHtcXG4gIG1hcmdpbjogMWVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLyogbWFpbiAqL1xcblxcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVlbTtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLmNvbnRlbnQgPiBoMiB7XFxuICBmb250LWZhbWlseTogJ1NpZ21hcicsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyogbWFpbiAtIGFkZCB0YXNrICovXFxuXFxuLmNvbnRlbnQgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbiN0aXRsZSxcXG4jZGV0YWlscyxcXG4jY2F0ZWdvcnksXFxuI2RhdGUsXFxuI3N1Ym1pdCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLTQpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3RpdGxlOmhvdmVyLFxcbiNkZXRhaWxzOmhvdmVyLFxcbiNjYXRlZ29yeTpob3ZlcixcXG4jZGF0ZTpob3ZlcixcXG4jc3VibWl0OmhvdmVyIHtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLTIpO1xcbn1cXG5cXG4jc3VibWl0OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG59XFxuXFxuLmNvbnRlbnQgZm9ybSB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5pbXBvcnRhbnQtZGl2LFxcbi5kYXRlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS4yZW07XFxuICBwYWRkaW5nLXRvcDogMC4zZW07XFxufVxcblxcbi5pbXBvcnRhbnQtZGl2PmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLmJ0bi1kaXYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jc3VibWl0IHtcXG4gIHBhZGRpbmc6IDAuNWVtIDEuMWVtO1xcbiAgZm9udC1mYW1pbHk6ICdTaWdtYXInLCBjdXJzaXZlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi8qIG1haW4gLSBsaXN0cyAqL1xcblxcbi50YXNrLWxpc3QtZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAzZW0gLyBtaW4tY29udGVudCAxZnIgMC4zZnIgcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuN2VtO1xcbiAgcGFkZGluZzogMCAwLjdlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLmxpc3QtaW1nIHtcXG4gIHdpZHRoOiAxLjJlbTtcXG4gIGhlaWdodDogMS4yZW07XFxufVxcblxcbi5saXN0LWltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIGZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICBncmlkLWFyZWE6IDMvMi80LzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRhc2tMb2FkKCkge1xuICBjb25zdCBuZXdEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbmV3SW1nID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IG5ld0xhYmVsID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgbmV3T3B0aW9uID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IG5ld0lucHV0ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29udGVudERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLnRleHRDb250ZW50ID0gJ0FkZCBhIHRhc2snO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBuZXdMYWJlbCgpO1xuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgY29uc3QgdGl0bGVJbnB1dCA9IG5ld0lucHV0KCk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdXaGF0IGRvIHlvdSBuZWVkIHRvIGRvPycpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBjb25zdCBkZXRhaWxzTGFiZWwgPSBuZXdMYWJlbCgpO1xuICBkZXRhaWxzTGFiZWwudGV4dENvbnRlbnQgPSAnRGV0YWlscyAob3B0aW9uYWwpJztcbiAgY29uc3QgZGV0YWlsc1RleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgZGV0YWlsc1RleHRhcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXRhaWxzJyk7XG4gIGRldGFpbHNUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RldGFpbHMnKTtcbiAgZGV0YWlsc1RleHRhcmVhLnNldEF0dHJpYnV0ZSgncm93cycsICczJyk7XG4gIGRldGFpbHNUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcyNTAnKTtcbiAgZGV0YWlsc1RleHRhcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHRhc2suLi4nKTtcbiAgZGV0YWlsc1RleHRhcmVhLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRldGFpbHNMYWJlbCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGV0YWlsc1RleHRhcmVhKTtcblxuICBjb25zdCBjYXRlZ29yeUxhYmVsID0gbmV3TGFiZWwoKTtcbiAgY2F0ZWdvcnlMYWJlbC50ZXh0Q29udGVudCA9ICdDaG9vc2UgY2F0ZWdvcnknO1xuICBjb25zdCBjYXRlZ29yeVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBjYXRlZ29yeVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2F0ZWdvcnknKTtcbiAgY2F0ZWdvcnlTZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjYXRlZ29yeScpO1xuICBjYXRlZ29yeVNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbnN0IG9wdGlvbkJsYW5rID0gbmV3T3B0aW9uKCk7XG4gIG9wdGlvbkJsYW5rLnRleHRDb250ZW50ID0gJyc7XG4gIG9wdGlvbkJsYW5rLnNlbGVjdGVkID0gdHJ1ZTtcbiAgb3B0aW9uQmxhbmsudmFsdWUgPSAnJztcbiAgY29uc3Qgb3B0aW9uV29yayA9IG5ld09wdGlvbigpO1xuICBvcHRpb25Xb3JrLnRleHRDb250ZW50ID0gJ1dvcmsnO1xuICBvcHRpb25Xb3JrLnZhbHVlID0gJ1dvcmsnO1xuICBjb25zdCBvcHRpb25QZXJzb25hbCA9IG5ld09wdGlvbigpO1xuICBvcHRpb25QZXJzb25hbC50ZXh0Q29udGVudCA9ICdQZXJzb25hbCc7XG4gIG9wdGlvblBlcnNvbmFsLnZhbHVlID0gJ1BlcnNvbmFsJztcbiAgY29uc3Qgb3B0aW9uSG9iYmllcyA9IG5ld09wdGlvbigpO1xuICBvcHRpb25Ib2JiaWVzLnRleHRDb250ZW50ID0gJ0hvYmJpZXMnO1xuICBvcHRpb25Ib2JiaWVzLnZhbHVlID0gJ0hvYmJpZXMnO1xuICBjb25zdCBvcHRpb25PdGhlciA9IG5ld09wdGlvbigpO1xuICBvcHRpb25PdGhlci50ZXh0Q29udGVudCA9ICdPdGhlcic7XG4gIG9wdGlvbk90aGVyLnZhbHVlID0gJ090aGVyJztcbiAgY2F0ZWdvcnlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uQmxhbmspO1xuICBjYXRlZ29yeVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25Xb3JrKTtcbiAgY2F0ZWdvcnlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uUGVyc29uYWwpO1xuICBjYXRlZ29yeVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25Ib2JiaWVzKTtcbiAgY2F0ZWdvcnlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uT3RoZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGNhdGVnb3J5TGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0KTtcblxuICBjb25zdCBpbXBvcnRhbnREaXYgPSBuZXdEaXYoKTtcbiAgaW1wb3J0YW50RGl2LmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudC1kaXYnKTtcbiAgY29uc3QgaW1wb3J0YW50TGFiZWwgPSBuZXdMYWJlbCgpO1xuICBpbXBvcnRhbnRMYWJlbC50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQ/ICc7XG4gIGltcG9ydGFudERpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnRMYWJlbCk7XG4gIGNvbnN0IGltcG9ydGFudElucHV0RGl2ID0gbmV3RGl2KCk7XG4gIGNvbnN0IGltcG9ydGFudElucHV0WWVzID0gbmV3SW5wdXQoKTtcbiAgaW1wb3J0YW50SW5wdXRZZXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIGltcG9ydGFudElucHV0WWVzLnNldEF0dHJpYnV0ZSgnbmFtZScsICdpbXBvcnRhbnQnKTtcbiAgaW1wb3J0YW50SW5wdXRZZXMuc2V0QXR0cmlidXRlKCdpZCcsICd0cnVlJyk7XG4gIGNvbnN0IGltcG9ydGFudElucHV0WWVzTGFiZWwgPSBuZXdMYWJlbCgpO1xuICBpbXBvcnRhbnRJbnB1dFllc0xhYmVsLnRleHRDb250ZW50ID0gJ1llcyc7XG4gIGltcG9ydGFudElucHV0WWVzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAneWVzJyk7XG4gIGNvbnN0IGltcG9ydGFudElucHV0Tm8gPSBuZXdJbnB1dCgpO1xuICBpbXBvcnRhbnRJbnB1dE5vLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICBpbXBvcnRhbnRJbnB1dE5vLnNldEF0dHJpYnV0ZSgnbmFtZScsICdpbXBvcnRhbnQnKTtcbiAgaW1wb3J0YW50SW5wdXROby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZhbHNlJyk7XG4gIGltcG9ydGFudElucHV0Tm8uY2hlY2tlZCA9IHRydWU7XG4gIGNvbnN0IGltcG9ydGFudElucHV0Tm9MYWJlbCA9IG5ld0xhYmVsKCk7XG4gIGltcG9ydGFudElucHV0Tm9MYWJlbC50ZXh0Q29udGVudCA9ICdObyc7XG4gIGltcG9ydGFudElucHV0Tm9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdubycpO1xuICBpbXBvcnRhbnRJbnB1dERpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnRJbnB1dFllcyk7XG4gIGltcG9ydGFudElucHV0RGl2LmFwcGVuZENoaWxkKGltcG9ydGFudElucHV0WWVzTGFiZWwpO1xuICBpbXBvcnRhbnRJbnB1dERpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnRJbnB1dE5vKTtcbiAgaW1wb3J0YW50SW5wdXREaXYuYXBwZW5kQ2hpbGQoaW1wb3J0YW50SW5wdXROb0xhYmVsKTtcbiAgaW1wb3J0YW50RGl2LmFwcGVuZENoaWxkKGltcG9ydGFudElucHV0RGl2KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChpbXBvcnRhbnREaXYpO1xuXG4gIGNvbnN0IGRhdGVEaXYgPSBuZXdEaXYoKTtcbiAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkYXRlLWRpdicpO1xuICBjb25zdCBkYXRlTGFiZWwgPSBuZXdMYWJlbCgpO1xuICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRGF0ZTogJztcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBuZXdJbnB1dCgpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcbiAgZGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuXG4gIGNvbnN0IGJ0bkRpdiA9IG5ld0RpdigpO1xuICBidG5EaXYuY2xhc3NMaXN0LmFkZCgnYnRuLWRpdicpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBuZXdJbnB1dCgpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCduYW1lJywgJ3N1Ym1pdCcpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQnKTtcbiAgc3VibWl0QnRuLnZhbHVlID0gJ0FkZCdcbiAgYnRuRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnRuRGl2KTtcblxuXG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSAodGl0bGUsIGRldGFpbHMsIGNhdGVnb3J5LCBpbXBvcnRhbnQsIGRhdGUsIGNoZWNrZWQpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXRhaWxzLCBjYXRlZ29yeSwgaW1wb3J0YW50LCBkYXRlLCBjaGVja2VkfTtcbiAgfTtcbiAgXG4gIGxldCBkZWZhdWx0VGFza0xpc3QgPSBbXTtcbiAgbGV0IHRhc2tMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0Jyk7XG4gIHRhc2tMaXN0ID0gSlNPTi5wYXJzZSh0YXNrTGlzdCB8fCBKU09OLnN0cmluZ2lmeShkZWZhdWx0VGFza0xpc3QpKTtcblxuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscycpLnZhbHVlO1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5JykudmFsdWU7XG4gICAgY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltcG9ydGFudFwiXTpjaGVja2VkJykuaWQ7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG5cbiAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayh0aXRsZSwgZGV0YWlscywgY2F0ZWdvcnksIGltcG9ydGFudCwgZGF0ZSwgJ2ZhbHNlJyk7XG4gICAgdGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgfSk7XG59O1xuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb290ZXJMb2FkKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgwqkgMjAyMyBEcmFnaWNldmljUyc7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChwKTtcbn07IiwiaW1wb3J0IHNpZGViYXIgZnJvbSAnLi9pbWFnZXMvc2lkZWJhci5wbmcnO1xuaW1wb3J0IGFjY291bnQgZnJvbSAnLi9pbWFnZXMvYWNjb3VudC5wbmcnO1xuaW1wb3J0IGFkZCBmcm9tICcuL2ltYWdlcy9hZGQucG5nJztcbmltcG9ydCBhZGRUYXNrTG9hZCBmcm9tICcuL2FkZC10YXNrJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyTG9hZCgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgY29uc3QgbmV3RGl2ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5ld0ltZyA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gIGNvbnN0IHNpZGViYXJCdG5EaXYgPSBuZXdEaXYoKTtcbiAgc2lkZWJhckJ0bkRpdi5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWJ0bi1kaXYnKTtcbiAgY29uc3QgaDFEaXYgPSBuZXdEaXYoKTtcbiAgaDFEaXYuY2xhc3NMaXN0LmFkZCgnaDEtZGl2Jyk7XG4gIGNvbnN0IHByb2ZpbGVEaXYgPSBuZXdEaXYoKTtcbiAgcHJvZmlsZURpdi5jbGFzc0xpc3QuYWRkKCdwcm9maWxlLWRpdicpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChzaWRlYmFyQnRuRGl2KTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGgxRGl2KTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHByb2ZpbGVEaXYpO1xuXG4gIGNvbnN0IHNpZGViYXJJbWcgPSBuZXdJbWcoKTtcbiAgc2lkZWJhckltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNpZGViYXIpO1xuXG4gIHNpZGViYXJCdG5EaXYuYXBwZW5kQ2hpbGQoc2lkZWJhckltZyk7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS50ZXh0Q29udGVudCA9ICdUb0RvIExpc3QnO1xuXG4gIGgxRGl2LmFwcGVuZENoaWxkKGgxKTtcblxuICBjb25zdCBhZGRJbWcgPSBuZXdJbWcoKTtcbiAgYWRkSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYWRkKTtcbiAgY29uc3QgYWNjb3VudEltZyA9IG5ld0ltZygpO1xuICBhY2NvdW50SW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYWNjb3VudCk7XG5cbiAgcHJvZmlsZURpdi5hcHBlbmRDaGlsZChhZGRJbWcpO1xuICBwcm9maWxlRGl2LmFwcGVuZENoaWxkKGFjY291bnRJbWcpO1xuXG4gIC8vIGhpZGluZyAvIGRpc3BsYXlpbmcgdGhlIG5hdmlnYXRpb24gb24gY2xpY2tcbiAgc2lkZWJhckltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAobmF2LnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBoZWFkZXIuc3R5bGUuZ3JpZEFyZWEgPSAnMS8xLzIvMyc7XG4gICAgICBtYWluLnN0eWxlLmdyaWRBcmVhID0gJzIvMS8zLzMnO1xuICAgICAgZm9vdGVyLnN0eWxlLmdyaWRBcmVhID0gJzMvMS80LzMnXG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgaGVhZGVyLnN0eWxlLmdyaWRBcmVhID0gJzEvMi8yLzMnO1xuICAgICAgbWFpbi5zdHlsZS5ncmlkQXJlYSA9ICcyLzIvMy8zJztcbiAgICAgIGZvb3Rlci5zdHlsZS5ncmlkQXJlYSA9ICczLzIvNC8zJ1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIGRpc3BsYXlpbmcgXCJBZGQgdGFza1wiIGZvcm0gb24gbWFpblxuICBhZGRJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrTG9hZCk7XG5cbn07IiwiaW1wb3J0IGNoZWNrZWQgZnJvbSAnLi9pbWFnZXMvY2hlY2tlZC5wbmcnO1xuaW1wb3J0IHVuY2hlY2tlZCBmcm9tICcuL2ltYWdlcy91bmNoZWNrZWQucG5nJztcbmltcG9ydCBzdGFyIGZyb20gJy4vaW1hZ2VzL3N0YXIucG5nJztcbmltcG9ydCBzdGFyRW1wdHkgZnJvbSAnLi9pbWFnZXMvc3Rhci1lbXB0eS5wbmcnO1xuaW1wb3J0IGluZm8gZnJvbSAnLi9pbWFnZXMvaW5mby5wbmcnO1xuaW1wb3J0IHJlbW92ZSBmcm9tICcuL2ltYWdlcy9yZW1vdmUucG5nJztcblxuY29uc3QgbmV3RGl2ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBuZXdJbWcgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNvbnN0IG5ld0xpID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbmNvbnN0IG5ld0EgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5jb25zdCBuZXdTcGFuID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbmNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbmNvbnN0IHRhc2tMaXN0RGl2ID0gbmV3RGl2KCk7XG50YXNrTGlzdERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QtZGl2Jyk7XG5cbmZ1bmN0aW9uIGxpc3RUYXNrcygpIHtcbiAgdGFza0xpc3REaXYudGV4dENvbnRlbnQgPSAnJztcbiAgbGV0IGRlZmF1bHRUYXNrTGlzdCA9IFtdO1xuICBsZXQgdGFza0xpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKTtcbiAgdGFza0xpc3QgPSBKU09OLnBhcnNlKHRhc2tMaXN0IHx8IEpTT04uc3RyaW5naWZ5KGRlZmF1bHRUYXNrTGlzdCkpO1xuICBcbiAgZm9yIChsZXQgaT0wOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjaGVja2VkSW1nID0gbmV3SW1nKCk7XG4gICAgY2hlY2tlZEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNoZWNrZWQpO1xuICAgIGNoZWNrZWRJbWcuY2xhc3NMaXN0LmFkZCgnbGlzdC1pbWcnKTtcbiAgICBjb25zdCB1bmNoZWNrZWRJbWcgPSBuZXdJbWcoKTtcbiAgICB1bmNoZWNrZWRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCB1bmNoZWNrZWQpO1xuICAgIHVuY2hlY2tlZEltZy5jbGFzc0xpc3QuYWRkKCdsaXN0LWltZycpO1xuICAgIGNvbnN0IHN0YXJJbWcgPSBuZXdJbWcoKTtcbiAgICBzdGFySW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc3Rhcik7XG4gICAgc3RhckltZy5jbGFzc0xpc3QuYWRkKCdsaXN0LWltZycpO1xuICAgIGNvbnN0IHN0YXJFbXB0eUltZyA9IG5ld0ltZygpO1xuICAgIHN0YXJFbXB0eUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHN0YXJFbXB0eSk7XG4gICAgc3RhckVtcHR5SW1nLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaW1nJyk7XG4gICAgY29uc3QgaW5mb0ltZyA9IG5ld0ltZygpO1xuICAgIGluZm9JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbmZvKTtcbiAgICBpbmZvSW1nLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaW1nJyk7XG4gICAgY29uc3QgcmVtb3ZlSW1nID0gbmV3SW1nKCk7XG4gICAgcmVtb3ZlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgcmVtb3ZlKTtcbiAgICByZW1vdmVJbWcuY2xhc3NMaXN0LmFkZCgnbGlzdC1pbWcnLCAncmVtb3ZlLWltZycpO1xuXG4gICAgbGV0IHRhc2sgPSB0YXNrTGlzdFtpXTtcbiAgICBsZXQgdGFza0luZm8gPSBuZXdEaXYoKTtcbiAgICB0YXNrSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgaSk7XG4gICAgdGFza0luZm8uY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtJyk7XG5cbiAgICBpZiAodGFzay5jaGVja2VkID09ICdmYWxzZScpIHRhc2tJbmZvLmFwcGVuZENoaWxkKHVuY2hlY2tlZEltZyk7XG4gICAgaWYgKHRhc2suY2hlY2tlZCA9PSAndHJ1ZScpIHRhc2tJbmZvLmFwcGVuZENoaWxkKGNoZWNrZWRJbWcpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBuZXdTcGFuKCk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGRhdGUgPSBuZXdTcGFuKCk7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZTtcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgIGlmICh0YXNrLmltcG9ydGFudCA9PSAnZmFsc2UnKSB0YXNrSW5mby5hcHBlbmRDaGlsZChzdGFyRW1wdHlJbWcpO1xuICAgIGlmICh0YXNrLmltcG9ydGFudCA9PSAndHJ1ZScpIHRhc2tJbmZvLmFwcGVuZENoaWxkKHN0YXJJbWcpO1xuXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQoaW5mb0ltZyk7XG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQocmVtb3ZlSW1nKTtcblxuICAgIHRhc2tMaXN0RGl2LmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcbiAgfTtcbn07XG5cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVMb2FkKCkge1xuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGgyLnRleHRDb250ZW50ID0gJ0hvbWUgLSBBbGwgVGFza3MnO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XG4gIGxpc3RUYXNrcygpO1xuXG4gIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUtaW1nJyk7XG4gIGZvciAobGV0IGk9MDsgaSA8IHJlbW92ZUJ0bi5sZW5ndGg7IGkrKykge1xuICByZW1vdmVCdG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2RpdicpLmlkO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSk7XG4gICAgdGFza0xpc3Quc3BsaWNlKHRhc2tJZCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgICBsaXN0VGFza3MoKTtcbiAgfSk7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdG9kYXlMb2FkKCkge1xuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGgyLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0xpc3REaXYpO1xuICB0YXNrTGlzdERpdi50ZXh0Q29udGVudCA9ICcnO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXNXZWVrTG9hZCgpIHtcbiAgY29udGVudERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBoMi50ZXh0Q29udGVudCA9ICdUaGlzIHdlZWsnO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XG4gIHRhc2tMaXN0RGl2LnRleHRDb250ZW50ID0gJyc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0YW50TG9hZCgpIHtcbiAgY29udGVudERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBoMi50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XG4gIHRhc2tMaXN0RGl2LnRleHRDb250ZW50ID0gJyc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gd29ya0xvYWQoKSB7XG4gIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcbiAgaDIudGV4dENvbnRlbnQgPSAnV29yayc7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RGl2KTtcbiAgdGFza0xpc3REaXYudGV4dENvbnRlbnQgPSAnJztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzb25hbExvYWQoKSB7XG4gIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcbiAgaDIudGV4dENvbnRlbnQgPSAnUGVyc29uYWwnO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XG4gIHRhc2tMaXN0RGl2LnRleHRDb250ZW50ID0gJyc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaG9iYmllc0xvYWQoKSB7XG4gIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcbiAgaDIudGV4dENvbnRlbnQgPSAnSG9iYmllcyc7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RGl2KTtcbiAgdGFza0xpc3REaXYudGV4dENvbnRlbnQgPSAnJztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBvdGhlckxvYWQoKSB7XG4gIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcbiAgaDIudGV4dENvbnRlbnQgPSAnT3RoZXInO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XG4gIHRhc2tMaXN0RGl2LnRleHRDb250ZW50ID0gJyc7XG59OyIsImltcG9ydCBuYXZMb2dvIGZyb20gJy4vaW1hZ2VzL25hdi1sb2dvLnBuZyc7XG5pbXBvcnQgc3RhciBmcm9tICcuL2ltYWdlcy9zdGFyLnBuZyc7XG5pbXBvcnQgd2VlayBmcm9tICcuL2ltYWdlcy93ZWVrLnBuZyc7XG5pbXBvcnQgdG9kYXkgZnJvbSAnLi9pbWFnZXMvdG9kYXkucG5nJztcbmltcG9ydCBob21lIGZyb20gJy4vaW1hZ2VzL2hvbWUucG5nJztcbmltcG9ydCB3b3JrIGZyb20gJy4vaW1hZ2VzL3dvcmsucG5nJztcbmltcG9ydCBwZXJzb25hbCBmcm9tICcuL2ltYWdlcy9wZXJzb25hbC5wbmcnO1xuaW1wb3J0IGhvYmJpZXMgZnJvbSAnLi9pbWFnZXMvaG9iYmllcy5wbmcnO1xuaW1wb3J0IG90aGVyIGZyb20gJy4vaW1hZ2VzL290aGVyLnBuZyc7XG5pbXBvcnQgeyBob21lTG9hZCwgdG9kYXlMb2FkLCB0aGlzV2Vla0xvYWQsIGltcG9ydGFudExvYWQsIHdvcmtMb2FkLCBwZXJzb25hbExvYWQsIGhvYmJpZXNMb2FkLCBvdGhlckxvYWQgfSBmcm9tICcuL21haW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZMb2FkKCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcbiAgbmF2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGNvbnN0IG5ld0RpdiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBuZXdJbWcgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgbmV3TGkgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBuZXdBID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb25zdCBuZXdQID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGNvbnN0IG5hdkxvZ29EaXYgPSBuZXdEaXYoKTtcbiAgbmF2TG9nb0Rpdi5jbGFzc0xpc3QuYWRkKCduYXYtbG9nby1kaXYnKTtcblxuICBuYXYuYXBwZW5kQ2hpbGQobmF2TG9nb0Rpdik7XG5cbiAgY29uc3QgbmF2TG9nb0ltZyA9IG5ld0ltZygpO1xuICBuYXZMb2dvSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgbmF2TG9nbyk7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEudGV4dENvbnRlbnQgPSAnVERMJztcblxuICBuYXZMb2dvRGl2LmFwcGVuZENoaWxkKG5hdkxvZ29JbWcpO1xuICBuYXZMb2dvRGl2LmFwcGVuZENoaWxkKGgxKTtcblxuICBjb25zdCB1bDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICB1bDEuY2xhc3NMaXN0LmFkZCgndWwtMScpO1xuICBjb25zdCB1bDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICB1bDIuY2xhc3NMaXN0LmFkZCgndWwtMicpO1xuXG4gIG5hdi5hcHBlbmRDaGlsZCh1bDEpO1xuXG4gIHVsMS5hcHBlbmRDaGlsZChuZXdMaSgpKTtcbiAgdWwxLmFwcGVuZENoaWxkKG5ld0xpKCkpO1xuICB1bDEuYXBwZW5kQ2hpbGQobmV3TGkoKSk7XG4gIHVsMS5hcHBlbmRDaGlsZChuZXdMaSgpKTtcblxuICB1bDEuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQobmV3SW1nKCkpO1xuICB1bDEuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQobmV3UCgpKTtcbiAgdWwxLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZSgnc3JjJywgaG9tZSk7XG4gIHVsMS5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICB1bDEuZmlyc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBob21lTG9hZCk7XG5cbiAgdWwxLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKG5ld0ltZygpKTtcbiAgdWwxLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKG5ld1AoKSk7XG4gIHVsMS5jaGlsZHJlblsxXS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRvZGF5KTtcbiAgdWwxLmNoaWxkcmVuWzFdLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICB1bDEuY2hpbGRyZW5bMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2RheUxvYWQpO1xuXG4gIHVsMS5jaGlsZHJlblsyXS5hcHBlbmRDaGlsZChuZXdJbWcoKSk7XG4gIHVsMS5jaGlsZHJlblsyXS5hcHBlbmRDaGlsZChuZXdQKCkpO1xuICB1bDEuY2hpbGRyZW5bMl0uZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKCdzcmMnLCB3ZWVrKTtcbiAgdWwxLmNoaWxkcmVuWzJdLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJztcbiAgdWwxLmNoaWxkcmVuWzJdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpc1dlZWtMb2FkKTtcblxuICB1bDEubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChuZXdJbWcoKSk7XG4gIHVsMS5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKG5ld1AoKSk7XG4gIHVsMS5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZSgnc3JjJywgc3Rhcik7XG4gIHVsMS5sYXN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50JztcbiAgdWwxLmxhc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbXBvcnRhbnRMb2FkKTtcblxuICBuYXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKHVsMik7XG5cbiAgdWwyLmFwcGVuZENoaWxkKG5ld0xpKCkpO1xuICB1bDIuYXBwZW5kQ2hpbGQobmV3TGkoKSk7XG4gIHVsMi5hcHBlbmRDaGlsZChuZXdMaSgpKTtcbiAgdWwyLmFwcGVuZENoaWxkKG5ld0xpKCkpO1xuXG4gIHVsMi5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChuZXdJbWcoKSk7XG4gIHVsMi5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChuZXdQKCkpO1xuICB1bDIuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKCdzcmMnLCB3b3JrKTtcbiAgdWwyLmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnV29yayc7XG4gIHVsMi5maXJzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHdvcmtMb2FkKTtcblxuICB1bDIuY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQobmV3SW1nKCkpO1xuICB1bDIuY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQobmV3UCgpKTtcbiAgdWwyLmNoaWxkcmVuWzFdLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZSgnc3JjJywgcGVyc29uYWwpO1xuICB1bDIuY2hpbGRyZW5bMV0ubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdQZXJzb25hbCc7XG4gIHVsMi5jaGlsZHJlblsxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBlcnNvbmFsTG9hZCk7XG5cbiAgdWwyLmNoaWxkcmVuWzJdLmFwcGVuZENoaWxkKG5ld0ltZygpKTtcbiAgdWwyLmNoaWxkcmVuWzJdLmFwcGVuZENoaWxkKG5ld1AoKSk7XG4gIHVsMi5jaGlsZHJlblsyXS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGhvYmJpZXMpO1xuICB1bDIuY2hpbGRyZW5bMl0ubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdIb2JiaWVzJztcbiAgdWwyLmNoaWxkcmVuWzJdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaG9iYmllc0xvYWQpO1xuXG4gIHVsMi5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKG5ld0ltZygpKTtcbiAgdWwyLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQobmV3UCgpKTtcbiAgdWwyLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKCdzcmMnLCBvdGhlcik7XG4gIHVsMi5sYXN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnT3RoZXInO1xuICB1bDIubGFzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG90aGVyTG9hZClcblxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGhlYWRlckxvYWQgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IGZvb3RlckxvYWQgZnJvbSAnLi9mb290ZXInO1xuaW1wb3J0IG5hdkxvYWQgZnJvbSAnLi9uYXYnO1xuaW1wb3J0IHsgaG9tZUxvYWQsIHRvZGF5TG9hZCwgdGhpc1dlZWtMb2FkLCBpbXBvcnRhbnRMb2FkLCB3b3JrTG9hZCwgcGVyc29uYWxMb2FkLCBob2JiaWVzTG9hZCB9IGZyb20gJy4vbWFpbic7XG5cbmhlYWRlckxvYWQoKTtcbm5hdkxvYWQoKTtcbmZvb3RlckxvYWQoKTtcbmhvbWVMb2FkKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==