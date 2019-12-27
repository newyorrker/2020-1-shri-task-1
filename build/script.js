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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/BodyClickHandler.js":
/*!************************************!*\
  !*** ./src/js/BodyClickHandler.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks */ "./src/js/blocks.js");


var checkClick = function checkClick(event) {
  if (!event) return;
  var target = event.target;

  if (_blocks__WEBPACK_IMPORTED_MODULE_0__["blocks"].length > 0) {
    _blocks__WEBPACK_IMPORTED_MODULE_0__["blocks"].some(function (block) {
      var element = target.closest(block.selector);

      if (element) {
        block.handler(element, target);
        return true;
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  on: function on() {
    if (document.body) {
      document.body.addEventListener('click', checkClick);
    } else {
      console.error('document is ' + document);
    }
  },
  off: function off() {
    if (document.body) {
      document.body.removeEventListener('click', checkClick);
    } else {
      console.error('document is ' + document);
    }
  }
});

/***/ }),

/***/ "./src/js/blocks.js":
/*!**************************!*\
  !*** ./src/js/blocks.js ***!
  \**************************/
/*! exports provided: blocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blocks", function() { return blocks; });
/* harmony import */ var _blocks_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/accordion */ "./src/js/blocks/accordion.js");
/* harmony import */ var _blocks_onOffSwitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/onOffSwitch */ "./src/js/blocks/onOffSwitch.js");


var blocks = [{
  selector: '.e-accordion',
  handler: _blocks_accordion__WEBPACK_IMPORTED_MODULE_0__["accordion"]
}, {
  selector: '.onoffswitch',
  handler: _blocks_onOffSwitch__WEBPACK_IMPORTED_MODULE_1__["onOffSwitch"]
}];


/***/ }),

/***/ "./src/js/blocks/accordion.js":
/*!************************************!*\
  !*** ./src/js/blocks/accordion.js ***!
  \************************************/
/*! exports provided: accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accordion", function() { return accordion; });
var accordion = function accordion(element, target) {
  element.classList.toggle('e-accordion_state_active');
};

/***/ }),

/***/ "./src/js/blocks/onOffSwitch.js":
/*!**************************************!*\
  !*** ./src/js/blocks/onOffSwitch.js ***!
  \**************************************/
/*! exports provided: onOffSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onOffSwitch", function() { return onOffSwitch; });
/* harmony import */ var _utils_domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelper */ "./src/js/utils/domHelper.js");


var toggleButton = function toggleButton(element) {
  element.classList.toggle('onoffswitch_checked');
  document.body.classList.toggle('black');
};

var toggleTheme = function toggleTheme() {
  var theme = {
    "default": 'theme_color_project-default',
    inverse: 'theme_color_project-inverse'
  };
  var themeElements = document.getElementsByClassName('theme');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = themeElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var element = _step.value;
      var classList = element.classList;

      if (classList.contains(theme["default"]) || classList.contains(theme.inverse)) {
        Object(_utils_domHelper__WEBPACK_IMPORTED_MODULE_0__["toggleListClasses"])(classList, theme);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  ;
};

var onOffSwitch = function onOffSwitch(element) {
  //change button state 
  toggleButton(element); //change page theme

  toggleTheme();
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BodyClickHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BodyClickHandler */ "./src/js/BodyClickHandler.js");


_BodyClickHandler__WEBPACK_IMPORTED_MODULE_1__["default"].on();

window.testOff = function testOff() {
  _BodyClickHandler__WEBPACK_IMPORTED_MODULE_1__["default"].off();
};

/***/ }),

/***/ "./src/js/utils/domHelper.js":
/*!***********************************!*\
  !*** ./src/js/utils/domHelper.js ***!
  \***********************************/
/*! exports provided: toggleListClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleListClasses", function() { return toggleListClasses; });
var toggleListClasses = function toggleListClasses(classList, themes) {
  for (var theme in themes) {
    if (themes.hasOwnProperty(theme)) {
      classList.toggle(themes[theme]);
    }
  }
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=script.js.map