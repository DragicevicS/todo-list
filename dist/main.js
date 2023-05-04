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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* color pallete */\n  --color-1: #1B262C;\n  --color-2: #0F4C75;\n  --color-3: #3282B8;\n  --color-4: #BBE1FA;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template: 0.5fr 6fr 0.3fr / minmax(min-content, 0.8fr) 5fr;\n  width: 100%;\n  height: 100vh;\n  background-color: var(--color-1);\n}\n\n/* header */\n\nheader {\n  grid-area: 1/2/2/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: max(100%, 350px);\n  background-color: var(--color-2);\n}\n\nheader img {\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%);\n  -webkit-transition: .3s ease-in-out;\n  transition: .3s ease-in-out;\n}\n\nheader img:hover {\n  cursor: pointer;\n  -webkit-filter: grayscale(0);\n\tfilter: grayscale(0);\n}\n\n.sidebar-btn-div {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  padding-left: 0.5em;\n}\n\n.sidebar-btn-div img {\n  width: 2.2em;\n  height: 2.2em;\n}\n\n.h1-div {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  color: var(--color-4);\n  font-family: 'Sigmar', cursive;\n  font-size: 1.1rem;\n  font-style: italic;\n  letter-spacing: 2px;\n}\n\n.profile-div {\n  display: flex;\n  gap: 1.2em;\n  padding-right: 1em;\n}\n\n.profile-div img {\n  width: 2.1em;\n  height: 2.1em;\n}\n\n/* nav */\n\nnav {\n  grid-area: 1/1/4/2;\n  flex-direction: column;\n  align-items: center;\n  gap: 1em;\n  padding: 3px;\n  background-color: var(--color-3);\n  font-family: 'Oswald', sans-serif;\n}\n\n.nav-logo-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.3em;\n  padding-bottom: 1.6em;\n  color: var(--color-4);\n  font-size: 2.1rem;\n  font-family: 'Sigmar', cursive;\n  font-style: italic;\n  letter-spacing: 2px;\n}\n\n.nav-logo-div img {\n  width: 2.1em;\n  height: 2.1em;\n}\n\nnav ul {\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n}\n\nnav li {\n  display: flex;\n  align-items: center;\n  gap: 0.5em;\n  padding: 8px 1em;\n  color: var(--color-4);\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\nnav ul li:hover {\n  background-color: #0F4C75;\n  transition: 0.3 ease-in-out;\n}\n\nnav li>img {\n  width: 1.5em;\n  height: 1.5em;\n}\n\nnav hr {\n  margin: 1em;\n  width: 80%;\n  color: var(--color-4);\n}\n\n/* main */\n\nmain {\n  grid-area: 2/2/3/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5em;\n  width: 60%;\n  height: 90%;\n  border: solid 3px var(--color-4);\n  border-radius: 10px;\n  padding: 1em;\n  color: var(--color-4);\n}\n\n.content > h2 {\n  font-family: 'Sigmar', cursive;\n  font-size: 1.8rem;\n  font-style: italic;\n}\n\n/* main - add task */\n\n.content form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  font-size: 1.5rem;\n  font-family: 'Oswald', sans-serif;\n}\n\n#title,\n#details,\n#category,\n#date,\n#submit {\n  font-size: 1.2rem;\n  padding: 10px;\n  background-color: var(--color-1);\n  border: solid 2px var(--color-4);\n  color: var(--color-4);\n  border-radius: 10px;\n}\n\n#title:hover,\n#details:hover,\n#category:hover,\n#date:hover,\n#submit:hover {\n  border: solid 2px var(--color-2);\n}\n\n.content form textarea {\n  resize: none;\n}\n\n.important-div,\n.date-div {\n  display: flex;\n  align-items: center;\n  gap: 1.2em;\n  padding-top: 0.3em;\n}\n\n.important-div>div {\n  display: flex;\n  gap: 0.5em;\n}\n\n.btn-div {\n  text-align: center;\n}\n\n#submit {\n  padding: 0.5em 1.1em;\n  font-family: 'Sigmar', cursive;\n  font-style: italic;\n  font-size: 1.4rem;\n}\n\n/* main - home */\n\n.task-list-div {\n  width: 100%;\n  height: 100%;\n  border: solid 1px var(--color-4);\n}\n\n/* footer */\n\nfooter {\n  grid-area: 3/2/4/3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--color-2);\n  color: var(--color-4);\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: italic;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Sigmar&display=swap');\n\n:root {\n  /* color pallete */\n  --color-1: #1B262C;\n  --color-2: #0F4C75;\n  --color-3: #3282B8;\n  --color-4: #BBE1FA;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template: 0.5fr 6fr 0.3fr / minmax(min-content, 0.8fr) 5fr;\n  width: 100%;\n  height: 100vh;\n  background-color: var(--color-1);\n}\n\n/* header */\n\nheader {\n  grid-area: 1/2/2/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: max(100%, 350px);\n  background-color: var(--color-2);\n}\n\nheader img {\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%);\n  -webkit-transition: .3s ease-in-out;\n  transition: .3s ease-in-out;\n}\n\nheader img:hover {\n  cursor: pointer;\n  -webkit-filter: grayscale(0);\n\tfilter: grayscale(0);\n}\n\n.sidebar-btn-div {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  padding-left: 0.5em;\n}\n\n.sidebar-btn-div img {\n  width: 2.2em;\n  height: 2.2em;\n}\n\n.h1-div {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  color: var(--color-4);\n  font-family: 'Sigmar', cursive;\n  font-size: 1.1rem;\n  font-style: italic;\n  letter-spacing: 2px;\n}\n\n.profile-div {\n  display: flex;\n  gap: 1.2em;\n  padding-right: 1em;\n}\n\n.profile-div img {\n  width: 2.1em;\n  height: 2.1em;\n}\n\n/* nav */\n\nnav {\n  grid-area: 1/1/4/2;\n  flex-direction: column;\n  align-items: center;\n  gap: 1em;\n  padding: 3px;\n  background-color: var(--color-3);\n  font-family: 'Oswald', sans-serif;\n}\n\n.nav-logo-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.3em;\n  padding-bottom: 1.6em;\n  color: var(--color-4);\n  font-size: 2.1rem;\n  font-family: 'Sigmar', cursive;\n  font-style: italic;\n  letter-spacing: 2px;\n}\n\n.nav-logo-div img {\n  width: 2.1em;\n  height: 2.1em;\n}\n\nnav ul {\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n}\n\nnav li {\n  display: flex;\n  align-items: center;\n  gap: 0.5em;\n  padding: 8px 1em;\n  color: var(--color-4);\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\nnav ul li:hover {\n  background-color: #0F4C75;\n  transition: 0.3 ease-in-out;\n}\n\nnav li>img {\n  width: 1.5em;\n  height: 1.5em;\n}\n\nnav hr {\n  margin: 1em;\n  width: 80%;\n  color: var(--color-4);\n}\n\n/* main */\n\nmain {\n  grid-area: 2/2/3/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5em;\n  width: 60%;\n  height: 90%;\n  border: solid 3px var(--color-4);\n  border-radius: 10px;\n  padding: 1em;\n  color: var(--color-4);\n}\n\n.content > h2 {\n  font-family: 'Sigmar', cursive;\n  font-size: 1.8rem;\n  font-style: italic;\n}\n\n/* main - add task */\n\n.content form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  font-size: 1.5rem;\n  font-family: 'Oswald', sans-serif;\n}\n\n#title,\n#details,\n#category,\n#date,\n#submit {\n  font-size: 1.2rem;\n  padding: 10px;\n  background-color: var(--color-1);\n  border: solid 2px var(--color-4);\n  color: var(--color-4);\n  border-radius: 10px;\n}\n\n#title:hover,\n#details:hover,\n#category:hover,\n#date:hover,\n#submit:hover {\n  border: solid 2px var(--color-2);\n}\n\n.content form textarea {\n  resize: none;\n}\n\n.important-div,\n.date-div {\n  display: flex;\n  align-items: center;\n  gap: 1.2em;\n  padding-top: 0.3em;\n}\n\n.important-div>div {\n  display: flex;\n  gap: 0.5em;\n}\n\n.btn-div {\n  text-align: center;\n}\n\n#submit {\n  padding: 0.5em 1.1em;\n  font-family: 'Sigmar', cursive;\n  font-style: italic;\n  font-size: 1.4rem;\n}\n\n/* main - home */\n\n.task-list-div {\n  width: 100%;\n  height: 100%;\n  border: solid 1px var(--color-4);\n}\n\n/* footer */\n\nfooter {\n  grid-area: 3/2/4/3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--color-2);\n  color: var(--color-4);\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: italic;\n}"],"sourceRoot":""}]);
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
  detailsLabel.textContent = 'Details';
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
  categoryLabel.textContent = 'Choose category:';
  const categorySelect = document.createElement('select');
  categorySelect.setAttribute('name', 'category');
  categorySelect.setAttribute('id', 'category');
  categorySelect.required = true;
  const optionBlank = newOption();
  optionBlank.textContent = '';
  optionBlank.disabled = true;
  optionBlank.selected = true;
  optionBlank.value = true;
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
  importantInputYes.setAttribute('id', 'yes');
  const importantInputYesLabel = newLabel();
  importantInputYesLabel.textContent = 'Yes';
  importantInputYesLabel.setAttribute('for', 'yes');
  const importantInputNo = newInput();
  importantInputNo.setAttribute('type', 'radio');
  importantInputNo.setAttribute('name', 'important');
  importantInputNo.setAttribute('id', 'no');
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
const newDiv = () => document.createElement('div');
const newImg = () => document.createElement('img');
const newLi = () => document.createElement('li');
const newA = () => document.createElement('a');
const newP = () => document.createElement('p');

const contentDiv = document.querySelector('.content');

function homeLoad() {
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  contentDiv.appendChild(h2);
  h2.textContent = 'Home - All Tasks';
  const taskListDiv = newDiv();
  taskListDiv.classList.add('task-list-div');
  contentDiv.appendChild(taskListDiv);
};

function todayLoad() {
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  contentDiv.appendChild(h2);
  h2.textContent = 'Today';
  const taskListDiv = newDiv();
  taskListDiv.classList.add('task-list-div');
  contentDiv.appendChild(taskListDiv);
};

function thisWeekLoad() {
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  contentDiv.appendChild(h2);
  h2.textContent = 'This week';
  const taskListDiv = newDiv();
  taskListDiv.classList.add('task-list-div');
  contentDiv.appendChild(taskListDiv);
};

function importantLoad() {
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  contentDiv.appendChild(h2);
  h2.textContent = 'Important';
  const taskListDiv = newDiv();
  taskListDiv.classList.add('task-list-div');
  contentDiv.appendChild(taskListDiv);
};

function workLoad() {
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  contentDiv.appendChild(h2);
  h2.textContent = 'Work';
  const taskListDiv = newDiv();
  taskListDiv.classList.add('task-list-div');
  contentDiv.appendChild(taskListDiv);
};

function personalLoad() {
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  contentDiv.appendChild(h2);
  h2.textContent = 'Personal';
  const taskListDiv = newDiv();
  taskListDiv.classList.add('task-list-div');
  contentDiv.appendChild(taskListDiv);
};

function hobbiesLoad() {
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  contentDiv.appendChild(h2);
  h2.textContent = 'Hobbies';
  const taskListDiv = newDiv();
  taskListDiv.classList.add('task-list-div');
  contentDiv.appendChild(taskListDiv);
};

function otherLoad() {
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  contentDiv.appendChild(h2);
  h2.textContent = 'Other';
  const taskListDiv = newDiv();
  taskListDiv.classList.add('task-list-div');
  contentDiv.appendChild(taskListDiv);
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

/***/ "./src/images/sidebar.png":
/*!********************************!*\
  !*** ./src/images/sidebar.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8963cf4ec9f6fd4b0cd.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2E7QUFDQTtBQUNOO0FBQ21GOztBQUUvRyxtREFBVTtBQUNWLGdEQUFPO0FBQ1AsbURBQVU7QUFDViwrQ0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZCZmYW1pbHk9U2lnbWFyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qIGNvbG9yIHBhbGxldGUgKi9cXG4gIC0tY29sb3ItMTogIzFCMjYyQztcXG4gIC0tY29sb3ItMjogIzBGNEM3NTtcXG4gIC0tY29sb3ItMzogIzMyODJCODtcXG4gIC0tY29sb3ItNDogI0JCRTFGQTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMC41ZnIgNmZyIDAuM2ZyIC8gbWlubWF4KG1pbi1jb250ZW50LCAwLjhmcikgNWZyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XFxufVxcblxcbi8qIGhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IG1heCgxMDAlLCAzNTBweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuaGVhZGVyIGltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDApO1xcblxcdGZpbHRlcjogZ3JheXNjYWxlKDApO1xcbn1cXG5cXG4uc2lkZWJhci1idG4tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHBhZGRpbmctbGVmdDogMC41ZW07XFxufVxcblxcbi5zaWRlYmFyLWJ0bi1kaXYgaW1nIHtcXG4gIHdpZHRoOiAyLjJlbTtcXG4gIGhlaWdodDogMi4yZW07XFxufVxcblxcbi5oMS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgZm9udC1mYW1pbHk6ICdTaWdtYXInLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4ucHJvZmlsZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS4yZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxufVxcblxcbi5wcm9maWxlLWRpdiBpbWcge1xcbiAgd2lkdGg6IDIuMWVtO1xcbiAgaGVpZ2h0OiAyLjFlbTtcXG59XFxuXFxuLyogbmF2ICovXFxuXFxubmF2IHtcXG4gIGdyaWQtYXJlYTogMS8xLzQvMjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxZW07XFxuICBwYWRkaW5nOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm5hdi1sb2dvLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjNlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjZlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGZvbnQtc2l6ZTogMi4xcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdTaWdtYXInLCBjdXJzaXZlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLm5hdi1sb2dvLWRpdiBpbWcge1xcbiAgd2lkdGg6IDIuMWVtO1xcbiAgaGVpZ2h0OiAyLjFlbTtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5uYXYgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNWVtO1xcbiAgcGFkZGluZzogOHB4IDFlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5uYXYgdWwgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBGNEM3NTtcXG4gIHRyYW5zaXRpb246IDAuMyBlYXNlLWluLW91dDtcXG59XFxuXFxubmF2IGxpPmltZyB7XFxuICB3aWR0aDogMS41ZW07XFxuICBoZWlnaHQ6IDEuNWVtO1xcbn1cXG5cXG5uYXYgaHIge1xcbiAgbWFyZ2luOiAxZW07XFxuICB3aWR0aDogODAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbn1cXG5cXG4vKiBtYWluICovXFxuXFxubWFpbiB7XFxuICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNWVtO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tY29sb3ItNCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMWVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbn1cXG5cXG4uY29udGVudCA+IGgyIHtcXG4gIGZvbnQtZmFtaWx5OiAnU2lnbWFyJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKiBtYWluIC0gYWRkIHRhc2sgKi9cXG5cXG4uY29udGVudCBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3RpdGxlLFxcbiNkZXRhaWxzLFxcbiNjYXRlZ29yeSxcXG4jZGF0ZSxcXG4jc3VibWl0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItNCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jdGl0bGU6aG92ZXIsXFxuI2RldGFpbHM6aG92ZXIsXFxuI2NhdGVnb3J5OmhvdmVyLFxcbiNkYXRlOmhvdmVyLFxcbiNzdWJtaXQ6aG92ZXIge1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItMik7XFxufVxcblxcbi5jb250ZW50IGZvcm0gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uaW1wb3J0YW50LWRpdixcXG4uZGF0ZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuMmVtO1xcbiAgcGFkZGluZy10b3A6IDAuM2VtO1xcbn1cXG5cXG4uaW1wb3J0YW50LWRpdj5kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41ZW07XFxufVxcblxcbi5idG4tZGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3N1Ym1pdCB7XFxuICBwYWRkaW5nOiAwLjVlbSAxLjFlbTtcXG4gIGZvbnQtZmFtaWx5OiAnU2lnbWFyJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4vKiBtYWluIC0gaG9tZSAqL1xcblxcbi50YXNrLWxpc3QtZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbi8qIGZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICBncmlkLWFyZWE6IDMvMi80LzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrREFBK0Q7RUFDL0QsV0FBVztFQUNYLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7O0FBRUEsV0FB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O0VBQ3JCLHlDQUF5QztFQUN6QyxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkJmZhbWlseT1TaWdtYXImZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLyogY29sb3IgcGFsbGV0ZSAqL1xcbiAgLS1jb2xvci0xOiAjMUIyNjJDO1xcbiAgLS1jb2xvci0yOiAjMEY0Qzc1O1xcbiAgLS1jb2xvci0zOiAjMzI4MkI4O1xcbiAgLS1jb2xvci00OiAjQkJFMUZBO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAwLjVmciA2ZnIgMC4zZnIgLyBtaW5tYXgobWluLWNvbnRlbnQsIDAuOGZyKSA1ZnI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogbWF4KDEwMCUsIDM1MHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbn1cXG5cXG5oZWFkZXIgaW1nIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5oZWFkZXIgaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxuXFx0ZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxufVxcblxcbi5zaWRlYmFyLWJ0bi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcXG59XFxuXFxuLnNpZGViYXItYnRuLWRpdiBpbWcge1xcbiAgd2lkdGg6IDIuMmVtO1xcbiAgaGVpZ2h0OiAyLjJlbTtcXG59XFxuXFxuLmgxLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICBmb250LWZhbWlseTogJ1NpZ21hcicsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbi5wcm9maWxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG59XFxuXFxuLnByb2ZpbGUtZGl2IGltZyB7XFxuICB3aWR0aDogMi4xZW07XFxuICBoZWlnaHQ6IDIuMWVtO1xcbn1cXG5cXG4vKiBuYXYgKi9cXG5cXG5uYXYge1xcbiAgZ3JpZC1hcmVhOiAxLzEvNC8yO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubmF2LWxvZ28tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuM2VtO1xcbiAgcGFkZGluZy1ib3R0b206IDEuNmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgZm9udC1zaXplOiAyLjFyZW07XFxuICBmb250LWZhbWlseTogJ1NpZ21hcicsIGN1cnNpdmU7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4ubmF2LWxvZ28tZGl2IGltZyB7XFxuICB3aWR0aDogMi4xZW07XFxuICBoZWlnaHQ6IDIuMWVtO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbm5hdiBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxuICBwYWRkaW5nOiA4cHggMWVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm5hdiB1bCBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEY0Qzc1O1xcbiAgdHJhbnNpdGlvbjogMC4zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5uYXYgbGk+aW1nIHtcXG4gIHdpZHRoOiAxLjVlbTtcXG4gIGhlaWdodDogMS41ZW07XFxufVxcblxcbm5hdiBociB7XFxuICBtYXJnaW46IDFlbTtcXG4gIHdpZHRoOiA4MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbi8qIG1haW4gKi9cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogMi8yLzMvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1jb2xvci00KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbi5jb250ZW50ID4gaDIge1xcbiAgZm9udC1mYW1pbHk6ICdTaWdtYXInLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qIG1haW4gLSBhZGQgdGFzayAqL1xcblxcbi5jb250ZW50IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jdGl0bGUsXFxuI2RldGFpbHMsXFxuI2NhdGVnb3J5LFxcbiNkYXRlLFxcbiNzdWJtaXQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci00KTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiN0aXRsZTpob3ZlcixcXG4jZGV0YWlsczpob3ZlcixcXG4jY2F0ZWdvcnk6aG92ZXIsXFxuI2RhdGU6aG92ZXIsXFxuI3N1Ym1pdDpob3ZlciB7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci0yKTtcXG59XFxuXFxuLmNvbnRlbnQgZm9ybSB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5pbXBvcnRhbnQtZGl2LFxcbi5kYXRlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS4yZW07XFxuICBwYWRkaW5nLXRvcDogMC4zZW07XFxufVxcblxcbi5pbXBvcnRhbnQtZGl2PmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLmJ0bi1kaXYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jc3VibWl0IHtcXG4gIHBhZGRpbmc6IDAuNWVtIDEuMWVtO1xcbiAgZm9udC1mYW1pbHk6ICdTaWdtYXInLCBjdXJzaXZlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi8qIG1haW4gLSBob21lICovXFxuXFxuLnRhc2stbGlzdC1kaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogMy8yLzQvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVGFza0xvYWQoKSB7XG4gIGNvbnN0IG5ld0RpdiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBuZXdJbWcgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgbmV3TGFiZWwgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBuZXdPcHRpb24gPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3QgbmV3SW5wdXQgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIudGV4dENvbnRlbnQgPSAnQWRkIGEgdGFzayc7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgdGl0bGVMYWJlbCA9IG5ld0xhYmVsKCk7XG4gIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUnO1xuICBjb25zdCB0aXRsZUlucHV0ID0gbmV3SW5wdXQoKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1doYXQgZG8geW91IG5lZWQgdG8gZG8/Jyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG4gIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IGRldGFpbHNMYWJlbCA9IG5ld0xhYmVsKCk7XG4gIGRldGFpbHNMYWJlbC50ZXh0Q29udGVudCA9ICdEZXRhaWxzJztcbiAgY29uc3QgZGV0YWlsc1RleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgZGV0YWlsc1RleHRhcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXRhaWxzJyk7XG4gIGRldGFpbHNUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RldGFpbHMnKTtcbiAgZGV0YWlsc1RleHRhcmVhLnNldEF0dHJpYnV0ZSgncm93cycsICczJyk7XG4gIGRldGFpbHNUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcyNTAnKTtcbiAgZGV0YWlsc1RleHRhcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHRhc2suLi4nKTtcbiAgZGV0YWlsc1RleHRhcmVhLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRldGFpbHNMYWJlbCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGV0YWlsc1RleHRhcmVhKTtcblxuICBjb25zdCBjYXRlZ29yeUxhYmVsID0gbmV3TGFiZWwoKTtcbiAgY2F0ZWdvcnlMYWJlbC50ZXh0Q29udGVudCA9ICdDaG9vc2UgY2F0ZWdvcnk6JztcbiAgY29uc3QgY2F0ZWdvcnlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgY2F0ZWdvcnlTZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ2NhdGVnb3J5Jyk7XG4gIGNhdGVnb3J5U2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2F0ZWdvcnknKTtcbiAgY2F0ZWdvcnlTZWxlY3QucmVxdWlyZWQgPSB0cnVlO1xuICBjb25zdCBvcHRpb25CbGFuayA9IG5ld09wdGlvbigpO1xuICBvcHRpb25CbGFuay50ZXh0Q29udGVudCA9ICcnO1xuICBvcHRpb25CbGFuay5kaXNhYmxlZCA9IHRydWU7XG4gIG9wdGlvbkJsYW5rLnNlbGVjdGVkID0gdHJ1ZTtcbiAgb3B0aW9uQmxhbmsudmFsdWUgPSB0cnVlO1xuICBjb25zdCBvcHRpb25Xb3JrID0gbmV3T3B0aW9uKCk7XG4gIG9wdGlvbldvcmsudGV4dENvbnRlbnQgPSAnV29yayc7XG4gIG9wdGlvbldvcmsudmFsdWUgPSAnV29yayc7XG4gIGNvbnN0IG9wdGlvblBlcnNvbmFsID0gbmV3T3B0aW9uKCk7XG4gIG9wdGlvblBlcnNvbmFsLnRleHRDb250ZW50ID0gJ1BlcnNvbmFsJztcbiAgb3B0aW9uUGVyc29uYWwudmFsdWUgPSAnUGVyc29uYWwnO1xuICBjb25zdCBvcHRpb25Ib2JiaWVzID0gbmV3T3B0aW9uKCk7XG4gIG9wdGlvbkhvYmJpZXMudGV4dENvbnRlbnQgPSAnSG9iYmllcyc7XG4gIG9wdGlvbkhvYmJpZXMudmFsdWUgPSAnSG9iYmllcyc7XG4gIGNvbnN0IG9wdGlvbk90aGVyID0gbmV3T3B0aW9uKCk7XG4gIG9wdGlvbk90aGVyLnRleHRDb250ZW50ID0gJ090aGVyJztcbiAgb3B0aW9uT3RoZXIudmFsdWUgPSAnT3RoZXInO1xuICBjYXRlZ29yeVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25CbGFuayk7XG4gIGNhdGVnb3J5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbldvcmspO1xuICBjYXRlZ29yeVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25QZXJzb25hbCk7XG4gIGNhdGVnb3J5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkhvYmJpZXMpO1xuICBjYXRlZ29yeVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25PdGhlcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2F0ZWdvcnlMYWJlbCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2F0ZWdvcnlTZWxlY3QpO1xuXG4gIGNvbnN0IGltcG9ydGFudERpdiA9IG5ld0RpdigpO1xuICBpbXBvcnRhbnREaXYuY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50LWRpdicpO1xuICBjb25zdCBpbXBvcnRhbnRMYWJlbCA9IG5ld0xhYmVsKCk7XG4gIGltcG9ydGFudExhYmVsLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudD8gJztcbiAgaW1wb3J0YW50RGl2LmFwcGVuZENoaWxkKGltcG9ydGFudExhYmVsKTtcbiAgY29uc3QgaW1wb3J0YW50SW5wdXREaXYgPSBuZXdEaXYoKTtcbiAgY29uc3QgaW1wb3J0YW50SW5wdXRZZXMgPSBuZXdJbnB1dCgpO1xuICBpbXBvcnRhbnRJbnB1dFllcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgaW1wb3J0YW50SW5wdXRZZXMuc2V0QXR0cmlidXRlKCduYW1lJywgJ2ltcG9ydGFudCcpO1xuICBpbXBvcnRhbnRJbnB1dFllcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3llcycpO1xuICBjb25zdCBpbXBvcnRhbnRJbnB1dFllc0xhYmVsID0gbmV3TGFiZWwoKTtcbiAgaW1wb3J0YW50SW5wdXRZZXNMYWJlbC50ZXh0Q29udGVudCA9ICdZZXMnO1xuICBpbXBvcnRhbnRJbnB1dFllc0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3llcycpO1xuICBjb25zdCBpbXBvcnRhbnRJbnB1dE5vID0gbmV3SW5wdXQoKTtcbiAgaW1wb3J0YW50SW5wdXROby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgaW1wb3J0YW50SW5wdXROby5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnaW1wb3J0YW50Jyk7XG4gIGltcG9ydGFudElucHV0Tm8uc2V0QXR0cmlidXRlKCdpZCcsICdubycpO1xuICBpbXBvcnRhbnRJbnB1dE5vLmNoZWNrZWQgPSB0cnVlO1xuICBjb25zdCBpbXBvcnRhbnRJbnB1dE5vTGFiZWwgPSBuZXdMYWJlbCgpO1xuICBpbXBvcnRhbnRJbnB1dE5vTGFiZWwudGV4dENvbnRlbnQgPSAnTm8nO1xuICBpbXBvcnRhbnRJbnB1dE5vTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbm8nKTtcbiAgaW1wb3J0YW50SW5wdXREaXYuYXBwZW5kQ2hpbGQoaW1wb3J0YW50SW5wdXRZZXMpO1xuICBpbXBvcnRhbnRJbnB1dERpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnRJbnB1dFllc0xhYmVsKTtcbiAgaW1wb3J0YW50SW5wdXREaXYuYXBwZW5kQ2hpbGQoaW1wb3J0YW50SW5wdXRObyk7XG4gIGltcG9ydGFudElucHV0RGl2LmFwcGVuZENoaWxkKGltcG9ydGFudElucHV0Tm9MYWJlbCk7XG4gIGltcG9ydGFudERpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnRJbnB1dERpdik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoaW1wb3J0YW50RGl2KTtcblxuICBjb25zdCBkYXRlRGl2ID0gbmV3RGl2KCk7XG4gIGRhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZGF0ZS1kaXYnKTtcbiAgY29uc3QgZGF0ZUxhYmVsID0gbmV3TGFiZWwoKTtcbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0RhdGU6ICc7XG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gbmV3SW5wdXQoKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZScpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XG4gIGRhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkYXRlRGl2KTtcblxuICBjb25zdCBidG5EaXYgPSBuZXdEaXYoKTtcbiAgYnRuRGl2LmNsYXNzTGlzdC5hZGQoJ2J0bi1kaXYnKTtcbiAgY29uc3Qgc3VibWl0QnRuID0gbmV3SW5wdXQoKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnbmFtZScsICdzdWJtaXQnKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0Jyk7XG4gIHN1Ym1pdEJ0bi52YWx1ZSA9ICdBZGQnXG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICBmb3JtLmFwcGVuZENoaWxkKGJ0bkRpdik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3RlckxvYWQoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCDCqSAyMDIzIERyYWdpY2V2aWNTJztcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHApO1xufTsiLCJpbXBvcnQgc2lkZWJhciBmcm9tICcuL2ltYWdlcy9zaWRlYmFyLnBuZyc7XG5pbXBvcnQgYWNjb3VudCBmcm9tICcuL2ltYWdlcy9hY2NvdW50LnBuZyc7XG5pbXBvcnQgYWRkIGZyb20gJy4vaW1hZ2VzL2FkZC5wbmcnO1xuaW1wb3J0IGFkZFRhc2tMb2FkIGZyb20gJy4vYWRkLXRhc2snO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXJMb2FkKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuICBjb25zdCBuZXdEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbmV3SW1nID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgY29uc3Qgc2lkZWJhckJ0bkRpdiA9IG5ld0RpdigpO1xuICBzaWRlYmFyQnRuRGl2LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItYnRuLWRpdicpO1xuICBjb25zdCBoMURpdiA9IG5ld0RpdigpO1xuICBoMURpdi5jbGFzc0xpc3QuYWRkKCdoMS1kaXYnKTtcbiAgY29uc3QgcHJvZmlsZURpdiA9IG5ld0RpdigpO1xuICBwcm9maWxlRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2ZpbGUtZGl2Jyk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHNpZGViYXJCdG5EaXYpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDFEaXYpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvZmlsZURpdik7XG5cbiAgY29uc3Qgc2lkZWJhckltZyA9IG5ld0ltZygpO1xuICBzaWRlYmFySW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc2lkZWJhcik7XG5cbiAgc2lkZWJhckJ0bkRpdi5hcHBlbmRDaGlsZChzaWRlYmFySW1nKTtcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLnRleHRDb250ZW50ID0gJ1RvRG8gTGlzdCc7XG5cbiAgaDFEaXYuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIGNvbnN0IGFkZEltZyA9IG5ld0ltZygpO1xuICBhZGRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBhZGQpO1xuICBjb25zdCBhY2NvdW50SW1nID0gbmV3SW1nKCk7XG4gIGFjY291bnRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBhY2NvdW50KTtcblxuICBwcm9maWxlRGl2LmFwcGVuZENoaWxkKGFkZEltZyk7XG4gIHByb2ZpbGVEaXYuYXBwZW5kQ2hpbGQoYWNjb3VudEltZyk7XG5cbiAgLy8gaGlkaW5nIC8gZGlzcGxheWluZyB0aGUgbmF2aWdhdGlvbiBvbiBjbGlja1xuICBzaWRlYmFySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChuYXYuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICBuYXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGhlYWRlci5zdHlsZS5ncmlkQXJlYSA9ICcxLzEvMi8zJztcbiAgICAgIG1haW4uc3R5bGUuZ3JpZEFyZWEgPSAnMi8xLzMvMyc7XG4gICAgICBmb290ZXIuc3R5bGUuZ3JpZEFyZWEgPSAnMy8xLzQvMydcbiAgICB9IGVsc2Uge1xuICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBoZWFkZXIuc3R5bGUuZ3JpZEFyZWEgPSAnMS8yLzIvMyc7XG4gICAgICBtYWluLnN0eWxlLmdyaWRBcmVhID0gJzIvMi8zLzMnO1xuICAgICAgZm9vdGVyLnN0eWxlLmdyaWRBcmVhID0gJzMvMi80LzMnXG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gZGlzcGxheWluZyBcIkFkZCB0YXNrXCIgZm9ybSBvbiBtYWluXG4gIGFkZEltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2tMb2FkKTtcblxufTsiLCJjb25zdCBuZXdEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG5ld0ltZyA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuY29uc3QgbmV3TGkgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuY29uc3QgbmV3QSA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmNvbnN0IG5ld1AgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gaG9tZUxvYWQoKSB7XG4gIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgaDIudGV4dENvbnRlbnQgPSAnSG9tZSAtIEFsbCBUYXNrcyc7XG4gIGNvbnN0IHRhc2tMaXN0RGl2ID0gbmV3RGl2KCk7XG4gIHRhc2tMaXN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdC1kaXYnKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdG9kYXlMb2FkKCkge1xuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMik7XG4gIGgyLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgY29uc3QgdGFza0xpc3REaXYgPSBuZXdEaXYoKTtcbiAgdGFza0xpc3REaXYuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0LWRpdicpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RGl2KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlzV2Vla0xvYWQoKSB7XG4gIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgaDIudGV4dENvbnRlbnQgPSAnVGhpcyB3ZWVrJztcbiAgY29uc3QgdGFza0xpc3REaXYgPSBuZXdEaXYoKTtcbiAgdGFza0xpc3REaXYuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0LWRpdicpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RGl2KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpbXBvcnRhbnRMb2FkKCkge1xuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMik7XG4gIGgyLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG4gIGNvbnN0IHRhc2tMaXN0RGl2ID0gbmV3RGl2KCk7XG4gIHRhc2tMaXN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdC1kaXYnKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gd29ya0xvYWQoKSB7XG4gIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgaDIudGV4dENvbnRlbnQgPSAnV29yayc7XG4gIGNvbnN0IHRhc2tMaXN0RGl2ID0gbmV3RGl2KCk7XG4gIHRhc2tMaXN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdC1kaXYnKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcGVyc29uYWxMb2FkKCkge1xuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMik7XG4gIGgyLnRleHRDb250ZW50ID0gJ1BlcnNvbmFsJztcbiAgY29uc3QgdGFza0xpc3REaXYgPSBuZXdEaXYoKTtcbiAgdGFza0xpc3REaXYuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0LWRpdicpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RGl2KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBob2JiaWVzTG9hZCgpIHtcbiAgY29udGVudERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICBoMi50ZXh0Q29udGVudCA9ICdIb2JiaWVzJztcbiAgY29uc3QgdGFza0xpc3REaXYgPSBuZXdEaXYoKTtcbiAgdGFza0xpc3REaXYuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0LWRpdicpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RGl2KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBvdGhlckxvYWQoKSB7XG4gIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgaDIudGV4dENvbnRlbnQgPSAnT3RoZXInO1xuICBjb25zdCB0YXNrTGlzdERpdiA9IG5ld0RpdigpO1xuICB0YXNrTGlzdERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QtZGl2Jyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0xpc3REaXYpO1xufTsiLCJpbXBvcnQgbmF2TG9nbyBmcm9tICcuL2ltYWdlcy9uYXYtbG9nby5wbmcnO1xuaW1wb3J0IHN0YXIgZnJvbSAnLi9pbWFnZXMvc3Rhci5wbmcnO1xuaW1wb3J0IHdlZWsgZnJvbSAnLi9pbWFnZXMvd2Vlay5wbmcnO1xuaW1wb3J0IHRvZGF5IGZyb20gJy4vaW1hZ2VzL3RvZGF5LnBuZyc7XG5pbXBvcnQgaG9tZSBmcm9tICcuL2ltYWdlcy9ob21lLnBuZyc7XG5pbXBvcnQgd29yayBmcm9tICcuL2ltYWdlcy93b3JrLnBuZyc7XG5pbXBvcnQgcGVyc29uYWwgZnJvbSAnLi9pbWFnZXMvcGVyc29uYWwucG5nJztcbmltcG9ydCBob2JiaWVzIGZyb20gJy4vaW1hZ2VzL2hvYmJpZXMucG5nJztcbmltcG9ydCBvdGhlciBmcm9tICcuL2ltYWdlcy9vdGhlci5wbmcnO1xuaW1wb3J0IHsgaG9tZUxvYWQsIHRvZGF5TG9hZCwgdGhpc1dlZWtMb2FkLCBpbXBvcnRhbnRMb2FkLCB3b3JrTG9hZCwgcGVyc29uYWxMb2FkLCBob2JiaWVzTG9hZCwgb3RoZXJMb2FkIH0gZnJvbSAnLi9tYWluJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2TG9hZCgpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG4gIG5hdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBjb25zdCBuZXdEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbmV3SW1nID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IG5ld0xpID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbmV3QSA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29uc3QgbmV3UCA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBjb25zdCBuYXZMb2dvRGl2ID0gbmV3RGl2KCk7XG4gIG5hdkxvZ29EaXYuY2xhc3NMaXN0LmFkZCgnbmF2LWxvZ28tZGl2Jyk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKG5hdkxvZ29EaXYpO1xuXG4gIGNvbnN0IG5hdkxvZ29JbWcgPSBuZXdJbWcoKTtcbiAgbmF2TG9nb0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIG5hdkxvZ28pO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLnRleHRDb250ZW50ID0gJ1RETCc7XG5cbiAgbmF2TG9nb0Rpdi5hcHBlbmRDaGlsZChuYXZMb2dvSW1nKTtcbiAgbmF2TG9nb0Rpdi5hcHBlbmRDaGlsZChoMSk7XG5cbiAgY29uc3QgdWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdWwxLmNsYXNzTGlzdC5hZGQoJ3VsLTEnKTtcbiAgY29uc3QgdWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdWwyLmNsYXNzTGlzdC5hZGQoJ3VsLTInKTtcblxuICBuYXYuYXBwZW5kQ2hpbGQodWwxKTtcblxuICB1bDEuYXBwZW5kQ2hpbGQobmV3TGkoKSk7XG4gIHVsMS5hcHBlbmRDaGlsZChuZXdMaSgpKTtcbiAgdWwxLmFwcGVuZENoaWxkKG5ld0xpKCkpO1xuICB1bDEuYXBwZW5kQ2hpbGQobmV3TGkoKSk7XG5cbiAgdWwxLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKG5ld0ltZygpKTtcbiAgdWwxLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKG5ld1AoKSk7XG4gIHVsMS5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGhvbWUpO1xuICB1bDEuZmlyc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgdWwxLmZpcnN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaG9tZUxvYWQpO1xuXG4gIHVsMS5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChuZXdJbWcoKSk7XG4gIHVsMS5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChuZXdQKCkpO1xuICB1bDEuY2hpbGRyZW5bMV0uZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKCdzcmMnLCB0b2RheSk7XG4gIHVsMS5jaGlsZHJlblsxXS5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgdWwxLmNoaWxkcmVuWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9kYXlMb2FkKTtcblxuICB1bDEuY2hpbGRyZW5bMl0uYXBwZW5kQ2hpbGQobmV3SW1nKCkpO1xuICB1bDEuY2hpbGRyZW5bMl0uYXBwZW5kQ2hpbGQobmV3UCgpKTtcbiAgdWwxLmNoaWxkcmVuWzJdLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZSgnc3JjJywgd2Vlayk7XG4gIHVsMS5jaGlsZHJlblsyXS5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ1RoaXMgV2Vlayc7XG4gIHVsMS5jaGlsZHJlblsyXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXNXZWVrTG9hZCk7XG5cbiAgdWwxLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQobmV3SW1nKCkpO1xuICB1bDEubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChuZXdQKCkpO1xuICB1bDEubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHN0YXIpO1xuICB1bDEubGFzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG4gIHVsMS5sYXN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW1wb3J0YW50TG9hZCk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xuXG4gIG5hdi5hcHBlbmRDaGlsZCh1bDIpO1xuXG4gIHVsMi5hcHBlbmRDaGlsZChuZXdMaSgpKTtcbiAgdWwyLmFwcGVuZENoaWxkKG5ld0xpKCkpO1xuICB1bDIuYXBwZW5kQ2hpbGQobmV3TGkoKSk7XG4gIHVsMi5hcHBlbmRDaGlsZChuZXdMaSgpKTtcblxuICB1bDIuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQobmV3SW1nKCkpO1xuICB1bDIuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQobmV3UCgpKTtcbiAgdWwyLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZSgnc3JjJywgd29yayk7XG4gIHVsMi5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ1dvcmsnO1xuICB1bDIuZmlyc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3b3JrTG9hZCk7XG5cbiAgdWwyLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKG5ld0ltZygpKTtcbiAgdWwyLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKG5ld1AoKSk7XG4gIHVsMi5jaGlsZHJlblsxXS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBlcnNvbmFsKTtcbiAgdWwyLmNoaWxkcmVuWzFdLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnUGVyc29uYWwnO1xuICB1bDIuY2hpbGRyZW5bMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwZXJzb25hbExvYWQpO1xuXG4gIHVsMi5jaGlsZHJlblsyXS5hcHBlbmRDaGlsZChuZXdJbWcoKSk7XG4gIHVsMi5jaGlsZHJlblsyXS5hcHBlbmRDaGlsZChuZXdQKCkpO1xuICB1bDIuY2hpbGRyZW5bMl0uZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKCdzcmMnLCBob2JiaWVzKTtcbiAgdWwyLmNoaWxkcmVuWzJdLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnSG9iYmllcyc7XG4gIHVsMi5jaGlsZHJlblsyXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvYmJpZXNMb2FkKTtcblxuICB1bDIubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChuZXdJbWcoKSk7XG4gIHVsMi5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKG5ld1AoKSk7XG4gIHVsMi5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZSgnc3JjJywgb3RoZXIpO1xuICB1bDIubGFzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ090aGVyJztcbiAgdWwyLmxhc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvdGhlckxvYWQpXG5cbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBoZWFkZXJMb2FkIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBmb290ZXJMb2FkIGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCBuYXZMb2FkIGZyb20gJy4vbmF2JztcbmltcG9ydCB7IGhvbWVMb2FkLCB0b2RheUxvYWQsIHRoaXNXZWVrTG9hZCwgaW1wb3J0YW50TG9hZCwgd29ya0xvYWQsIHBlcnNvbmFsTG9hZCwgaG9iYmllc0xvYWQgfSBmcm9tICcuL21haW4nO1xuXG5oZWFkZXJMb2FkKCk7XG5uYXZMb2FkKCk7XG5mb290ZXJMb2FkKCk7XG5ob21lTG9hZCgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=