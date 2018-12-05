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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_StickyHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _modules_ScrollTo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);




var mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_0__["default"]();
var stickyHeader = new _modules_StickyHeader__WEBPACK_IMPORTED_MODULE_2__["default"]();
var scrollTo = new _modules_ScrollTo__WEBPACK_IMPORTED_MODULE_3__["default"]();
new _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_1__["default"](".feature-item", 0.85);
new _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_1__["default"](".testimonial", 0.85);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MobileMenu =
/*#__PURE__*/
function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    this.siteHeader = document.querySelector('.site-header');
    this.menuIcon = document.querySelector('.site-header__menu-icon');
    this.menuContent = document.querySelector('.site-header__menu-content');
    this.events();
  }

  _createClass(MobileMenu, [{
    key: "events",
    value: function events() {
      this.menuIcon.addEventListener('click', this.toggleTheMenu.bind(this));
    }
  }, {
    key: "toggleTheMenu",
    value: function toggleTheMenu() {
      this.menuContent.classList.toggle('site-header__menu-content--is-visible');
      this.siteHeader.classList.toggle('site-header--is-expanded');
      this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
    }
  }]);

  return MobileMenu;
}();

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RevealOnScroll =
/*#__PURE__*/
function () {
  function RevealOnScroll(els, offset) {
    _classCallCheck(this, RevealOnScroll);

    this.itemsToReveal = document.querySelectorAll(els);
    this.revealerPoint = offset;
    this.hideInitially();
    this.events();
  }

  _createClass(RevealOnScroll, [{
    key: "hideInitially",
    value: function hideInitially() {
      this.itemsToReveal.forEach(function (e) {
        return e.classList.add('reveal-item');
      });
    }
  }, {
    key: "reveal",
    value: function reveal() {
      var _this = this;

      var windowHeight = window.innerHeight;
      this.itemsToReveal.forEach(function (e) {
        var revealerTop = e.getBoundingClientRect().top;

        if (revealerTop < windowHeight * _this.revealerPoint) {
          e.classList.add('reveal-item--is-visible');
        }
      });
    }
  }, {
    key: "events",
    value: function events() {
      window.addEventListener('scroll', this.reveal.bind(this));
    }
  }]);

  return RevealOnScroll;
}();

/* harmony default export */ __webpack_exports__["default"] = (RevealOnScroll);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StickyHeader =
/*#__PURE__*/
function () {
  function StickyHeader() {
    _classCallCheck(this, StickyHeader);

    this.siteHeader = document.querySelector('.site-header');
    this.headerTriggerElement = document.querySelector('.large-hero__title');
    this.pageSections = document.querySelectorAll('.page-section');
    this.windowHeight = window.innerHeight;
    this.events();
  }

  _createClass(StickyHeader, [{
    key: "reveal",
    value: function reveal() {
      var _this = this;

      var titleBottom = this.headerTriggerElement.getBoundingClientRect().bottom;

      if (titleBottom < 0) {
        this.siteHeader.classList.add('site-header--dark');
      } else {
        this.siteHeader.classList.remove('site-header--dark');
      }

      this.pageSections.forEach(function (e) {
        var sectionId = e.getAttribute('data-matching-link');
        var headerLink = document.querySelector(sectionId);
        var sectionHeader = e.getBoundingClientRect().top;
        var sectionBottom = e.getBoundingClientRect().bottom;

        if (sectionHeader < _this.windowHeight * 0.3 && sectionBottom > _this.windowHeight * 0.3) {
          headerLink.className = 'primary-nav--is-active';
        } else {
          headerLink.classList.remove('primary-nav--is-active');
        }
      });
    }
  }, {
    key: "events",
    value: function events() {
      window.addEventListener('scroll', this.reveal.bind(this));
    }
  }]);

  return StickyHeader;
}();

/* harmony default export */ __webpack_exports__["default"] = (StickyHeader);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ScrollTo =
/*#__PURE__*/
function () {
  function ScrollTo() {
    _classCallCheck(this, ScrollTo);

    this.headerLinks = document.querySelectorAll('.site-header a:not(.btn)');
    this.events();
  }

  _createClass(ScrollTo, [{
    key: "scroll",
    value: function scroll(sectionId) {
      console.log(sectionId.getBoundingClientRect().top + window.scrollY);
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: sectionId.getBoundingClientRect().top + window.scrollY
      });
    }
  }, {
    key: "events",
    value: function events() {
      var _this = this;

      this.headerLinks.forEach(function (e) {
        var linkId = e.getAttribute('id');
        var sectionId = document.querySelector("[data-matching-link=\"#".concat(linkId, "\"]"));
        e.addEventListener('click', function (event) {
          event.preventDefault();

          _this.scroll(sectionId);
        }, false);
      });
    }
  }]);

  return ScrollTo;
}();

/* harmony default export */ __webpack_exports__["default"] = (ScrollTo);

/***/ })
/******/ ]);