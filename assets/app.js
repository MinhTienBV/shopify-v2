/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_FixHeight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/FixHeight */ "./src/scripts/modules/FixHeight.js");
/* harmony import */ var _modules_UserAgent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UserAgent */ "./src/scripts/modules/UserAgent.js");
/* harmony import */ var _modules_AnimationScrollPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/AnimationScrollPage */ "./src/scripts/modules/AnimationScrollPage.js");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Header */ "./src/scripts/modules/Header.js");
/* harmony import */ var _modules_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Menu */ "./src/scripts/modules/Menu.js");
/* harmony import */ var _modules_Popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Popup */ "./src/scripts/modules/Popup.js");
/* harmony import */ var _modules_SelectC8__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/SelectC8 */ "./src/scripts/modules/SelectC8.js");
/* harmony import */ var _modules_SliderDemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/SliderDemo */ "./src/scripts/modules/SliderDemo.js");
/* harmony import */ var _modules_LazyLoadImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/LazyLoadImage */ "./src/scripts/modules/LazyLoadImage.js");
/* harmony import */ var _modules_FormAnimation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/FormAnimation */ "./src/scripts/modules/FormAnimation.js");
// import external dependencies
// import $ from 'jquery';
// import 'slick-carousel/slick/slick'
// import 'jquery-lazy/jquery.lazy'
// import modules










console.log('App Desktop 2');

/***/ }),

/***/ "./src/scripts/modules/AnimationScrollPage.js":
/*!****************************************************!*\
  !*** ./src/scripts/modules/AnimationScrollPage.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnimationScrollPage)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var AnimationScrollPage = /*#__PURE__*/function () {
  function AnimationScrollPage() {
    _classCallCheck(this, AnimationScrollPage);

    this.$elems = $('.animation');
    this.winH = window.innerHeight;
    this.winW = window.innerWidth;
    this.offset = window.innerHeight;
    this.wintop = null;
    this.topcoords = null;
  }

  _createClass(AnimationScrollPage, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.animationEle();
      $(window).on('scroll resize', function () {
        _this.animationEle();
      });
    }
  }, {
    key: "animationEle",
    value: function animationEle() {
      var _this2 = this;

      this.offset = this.winH;

      if ($('body').hasClass('has-animation')) {
        this.wintop = $(window).scrollTop();
        this.$elems.each(function (_index, ele) {
          var $elm = $(ele);

          if ($elm.hasClass('set-animation')) {
            return true;
          }

          _this2.topcoords = $elm.offset().top;

          if (_this2.wintop > _this2.topcoords - _this2.offset) {
            $elm.addClass('set-animation');
          }

          return true;
        });
      }
    }
  }]);

  return AnimationScrollPage;
}();


new AnimationScrollPage().init();

/***/ }),

/***/ "./src/scripts/modules/CallBackLazy.js":
/*!*********************************************!*\
  !*** ./src/scripts/modules/CallBackLazy.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CallBackLazy)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var CallBackLazy = /*#__PURE__*/function () {
  function CallBackLazy() {
    _classCallCheck(this, CallBackLazy);

    this.$html = $('html');
  }

  _createClass(CallBackLazy, [{
    key: "call",
    value: function call(elementTmp, element) {
      var datasrc = element.getAttribute('data-src');

      if (elementTmp === 'IMG') {
        element.setAttribute('src', datasrc);
      } else {
        $(element).css({
          'background-image': "url('".concat(datasrc, "')")
        });
      }

      $(element).addClass('b-loaded').removeClass('lazy').removeAttr('data-src');
    }
  }]);

  return CallBackLazy;
}();



/***/ }),

/***/ "./src/scripts/modules/ConvertHeight.js":
/*!**********************************************!*\
  !*** ./src/scripts/modules/ConvertHeight.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ConvertHeight = function ($) {
  $.fn.convertHeight = function () {
    var element = $(this);
    $(element).height('auto');
    var h1 = 0;
    var itemss = $(element);
    itemss.each(function () {
      if (h1 < $(this).height()) {
        h1 = $(this).height();
      }
    });
    itemss.each(function () {
      $(this).height(h1);
    });
  };
}($);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConvertHeight);

/***/ }),

/***/ "./src/scripts/modules/FixHeight.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/FixHeight.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConvertHeight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConvertHeight */ "./src/scripts/modules/ConvertHeight.js");
 // import 'jquery-match-height'

var FixHeight = function () {
  var _this = $('.mod-equaheight');

  var _items = $('.equaheight-item'); // let _itemsV2 = $('.equaheight-item-v2')


  if (_this.length) {
    var EquaHeight = function EquaHeight() {
      _this.each(function (index, el) {
        $(el).find(_items).convertHeight(); // $(el).find(_itemsV2).matchHeight({
        //   byRow: true,
        //   property: 'height',
        //   target: null,
        //   remove: false
        // })
      });
    };

    EquaHeight();
    $(window).resize(function () {
      EquaHeight();
    });
  }
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FixHeight);

/***/ }),

/***/ "./src/scripts/modules/FormAnimation.js":
/*!**********************************************!*\
  !*** ./src/scripts/modules/FormAnimation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormAnimation)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FormAnimation = /*#__PURE__*/function () {
  function FormAnimation() {
    _classCallCheck(this, FormAnimation);

    this.formGroup = '.form-group-v2';
    this.formControl = 'input.form-control';
    this.activeFocus = 'active-focus';
    this.$hasFormAni = $('.form-ani');
  }

  _createClass(FormAnimation, [{
    key: "init",
    value: function init() {
      if (this.$hasFormAni.length) {
        this.formFocus();
        this.formChange();
        this.checkValue();
        this.documentClick();
      }
    }
  }, {
    key: "checkValue",
    value: function checkValue() {
      var _this = this;

      this.$hasFormAni.find(this.formControl).each(function (_index, el) {
        var eleParent = $(el).parents(_this.formGroup);

        if ($(el)[0].value.length) {
          eleParent.addClass(_this.activeFocus);
        } else {
          eleParent.removeClass(_this.activeFocus);
        }
      });
    }
  }, {
    key: "formFocus",
    value: function formFocus() {
      var _this2 = this;

      this.$hasFormAni.find(this.formGroup).on('focus', this.formControl, function (e) {
        var ele = e.currentTarget;

        _this2.checkValue();

        $(ele).parents(_this2.formGroup).addClass(_this2.activeFocus);
      });
      this.$hasFormAni.find(this.formGroup).on('focusout', this.formControl, function () {
        _this2.checkValue();
      });
    }
  }, {
    key: "formChange",
    value: function formChange() {
      var _this3 = this;

      this.$hasFormAni.find(this.formGroup).on('change', this.formControl, function () {
        _this3.checkValue();
      });
    }
  }, {
    key: "documentClick",
    value: function documentClick() {
      var _this4 = this;

      $(document).on('click focus', function (e) {
        var ele = e.target;

        if (!$(ele).is('.form-group-v2 .form-control')) {
          _this4.checkValue();
        }
      });
    }
  }]);

  return FormAnimation;
}();


new FormAnimation().init();

/***/ }),

/***/ "./src/scripts/modules/Header.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/Header.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);

    this.$header = $('#header');
    this._numberScrol = 0;
    this.scrollTop = 0;
    this["class"] = 'pin-header';
  }

  _createClass(Header, [{
    key: "init",
    value: function init() {
      if (this.$header.length) {
        this.scrollPinHeader();
      }
    }
  }, {
    key: "scrollPinHeader",
    value: function scrollPinHeader() {
      var _this = this;

      this.settingPin();
      $(window).on('scroll resize orientationchange', function () {
        _this.settingPin();
      });
    }
  }, {
    key: "settingPin",
    value: function settingPin() {
      this.scrollTop = $(window).scrollTop();

      if (this.scrollTop > this._numberScrol) {
        this.$header.addClass(this["class"]);
      } else {
        this.$header.removeClass(this["class"]);
      }
    }
  }]);

  return Header;
}();


new Header().init();

/***/ }),

/***/ "./src/scripts/modules/LazyLoadImage.js":
/*!**********************************************!*\
  !*** ./src/scripts/modules/LazyLoadImage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LazyLoadImage)
/* harmony export */ });
/* harmony import */ var _CallBackLazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CallBackLazy */ "./src/scripts/modules/CallBackLazy.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var callBack = new _CallBackLazy__WEBPACK_IMPORTED_MODULE_0__["default"]();

var LazyLoadImage = /*#__PURE__*/function () {
  function LazyLoadImage() {
    _classCallCheck(this, LazyLoadImage);

    this.lazyimage = '.lazy:visible';
  }

  _createClass(LazyLoadImage, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.lazyLoadImage();
      $(window).on('resize orientationchange', function () {
        _this.lazyLoadImage();
      });
      $(window).on('beforeprint', function () {
        _this.lazyLoadAllPrint();
      });
    }
  }, {
    key: "lazyLoadImage",
    value: function lazyLoadImage() {
      var _this2 = this;

      if ($(this.lazyimage).length) {
        this.hasSlider();
        this.lazyloadimageCustom();
        $(window).on('scroll', function () {
          _this2.lazyloadimageCustom();
        });
      }
    }
  }, {
    key: "hasSlider",
    value: function hasSlider(element) {
      var sliderLazy = $(element).parents('.slider-lazy');
      var prevActive = sliderLazy.find('.slick-current').prev().find('.lazy');
      var nextActive = sliderLazy.find('.slick-current').next().find('.lazy');
      var srcprev = prevActive.attr('data-src');
      var srcnext = nextActive.attr('data-src');

      if (prevActive.length) {
        if (prevActive[0].nodeName === 'IMG') {
          prevActive.attr('src', srcprev);
        } else {
          prevActive.css({
            'background-image': "url('".concat(srcprev, "')")
          });
        }
      }

      if (nextActive.length) {
        if (nextActive[0].nodeName === 'IMG') {
          nextActive.attr('src', srcnext);
        } else {
          nextActive.css({
            'background-image': "url('".concat(srcnext, "')")
          });
        }
      }

      prevActive.removeClass('lazy').addClass('b-loaded');
      nextActive.removeClass('lazy').addClass('b-loaded');
    }
  }, {
    key: "lazyloadimageCustom",
    value: function lazyloadimageCustom() {
      var _this3 = this;

      $(this.lazyimage).each(function (_index, element) {
        var elementScroll = $(element).offset().top - window.innerHeight - window.innerHeight / 3.5;
        var scrollBody = $(window).scrollTop(); // console.log(element, elementScroll, scrollBody)

        if (elementScroll < scrollBody) {
          // console.log(element, $(element).offset().width)
          var elementTmp = element.tagName;
          callBack.call(elementTmp, element);

          if ($(element).parents('.fix-height').length) {
            $(element).on('load', function () {
              setTimeout(function () {
                window.callFixHeight();
              }, 200);
            });
          }

          if ($(element).parents('.slider-lazy').hasClass('slick-initialized')) {
            _this3.hasSlider(element);
          }
        }
      });
    }
  }, {
    key: "lazyLoadAllPrint",
    value: function lazyLoadAllPrint() {
      var $imgLazy = $('img.lazy:visible,img.lazy.show-print');
      var imgLength = 0;

      if ($imgLazy.length) {
        $('body').prepend("<div class=\"hidden mess-print text-red\">Images aren't loaded entirely yet. Please cancel this print and try again.</div>");
        $imgLazy.each(function (_index, element) {
          $(element).attr('src', $(element).attr('data-src'));
          $(element).addClass('b-loaded').removeClass('lazy').removeClass('lazy-trigger').removeAttr('data-src');

          element.onload = function () {
            imgLength += 1;

            if ($imgLazy.length === imgLength) {
              $('.mess-print').remove();
            }
          };
        });
      }
    }
  }]);

  return LazyLoadImage;
}();


new LazyLoadImage().init();

/***/ }),

/***/ "./src/scripts/modules/Menu.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/Menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Menu = /*#__PURE__*/function () {
  function Menu() {
    _classCallCheck(this, Menu);

    this.$this = $('#main-menu');
    this.elementItem = '.hamburger-menu, html, #main-menu, #header';
    this.$header = $('#header, #main-menu-mobile');
    this.li = this.$this.find('.main-menu-ul >li>a');
    this.liLevel1 = this.$this.find('.main-menu-ul >li');
    this.liLeve2 = this.$this.find('.main-menu-ul .main-menu-dropdown li>a');
    this.isopenmenu = 'is-open-menu';
    this.isopenmenuchild = 'open-menu-child';
    this.isopenchild = 'is-open-child';
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      if (this.$this.length) {
        this.openMainMenu();
        this.clickArowOpenDropdownMenuLeve1();
        this.clickLiOpenDropdownMenuLeve1();
        this.clickArowOpenDropdownMenuLeve2();
        this.clickOutsite();
        this.clickLiOpenDropdownMenuLeve2();
      }
    }
    /* micro function */

  }, {
    key: "microOpenCloseLevel1",
    value: function microOpenCloseLevel1(currentElement, openClass) {
      var isLiLv1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var ele = currentElement.currentTarget;
      var eleParent = $(ele).parent();

      if ($(window).width() < 1025) {
        if (eleParent.find('ul').length && !eleParent.hasClass(openClass)) {
          this.liLevel1.removeClass(openClass);
          eleParent.addClass(openClass);

          if (isLiLv1) {
            return false;
          }
        } else {
          eleParent.removeClass(openClass);
        }
      }

      return true;
    }
    /* end micro */

  }, {
    key: "openMainMenu",
    value: function openMainMenu() {
      var _this = this;

      this.$header.on('click', '.hamburger-menu', function (e) {
        var ele = e.currentTarget;

        if ($(ele).hasClass(_this.isopenmenu)) {
          $(_this.elementItem).removeClass(_this.isopenmenu);
        } else {
          $(_this.elementItem).addClass(_this.isopenmenu);
        }
      });
    }
  }, {
    key: "clickArowOpenDropdownMenuLeve1",
    value: function clickArowOpenDropdownMenuLeve1() {
      var _this2 = this;

      this.liLevel1.on('click', '.arrows-lv1', function (e) {
        _this2.microOpenCloseLevel1(e, _this2.isopenchild);
      });
    }
  }, {
    key: "clickLiOpenDropdownMenuLeve1",
    value: function clickLiOpenDropdownMenuLeve1() {
      var _this3 = this;

      this.li.on('click', function (e) {
        return _this3.microOpenCloseLevel1(e, _this3.isopenchild, true);
      });
    }
  }, {
    key: "clickArowOpenDropdownMenuLeve2",
    value: function clickArowOpenDropdownMenuLeve2() {
      var _this4 = this;

      this.$this.find('.main-menu-ul').on('click', '.arrows-lv2', function (e) {
        var ele = e.currentTarget;
        var eleParent = $(ele).parent();

        if ($(window).width() < 1025) {
          if (eleParent.find('.menu-child').length && !eleParent.hasClass(_this4.isopenmenuchild)) {
            eleParent.addClass(_this4.isopenmenuchild);
          } else {
            // eleParent.addClass(this.isopenmenuchild)
            eleParent.removeClass(_this4.isopenmenuchild);
          }
        }
      });
    }
  }, {
    key: "clickOutsite",
    value: function clickOutsite() {
      var _this5 = this;

      $(document).on('click', function (event) {
        if (!$(event.target).closest('#header.is-open-menu').length) {
          $(_this5.elementItem).removeClass(_this5.isopenmenu);
        }
      });
    }
  }, {
    key: "clickLiOpenDropdownMenuLeve2",
    value: function clickLiOpenDropdownMenuLeve2() {
      var _this6 = this;

      this.liLeve2.on('click', function (e) {
        var ele = e.currentTarget;
        var eleParent = $(ele).parent();

        if ($(window).width() < 1025 && eleParent.find('ul').length && !eleParent.hasClass(_this6.isopenmenuchild)) {
          _this6.li.removeClass(_this6.isopenmenuchild);

          eleParent.addClass(_this6.isopenmenuchild);
          return false;
        }

        return true;
      });
    }
  }]);

  return Menu;
}();


new Menu().init();

/***/ }),

/***/ "./src/scripts/modules/Popup.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/Popup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
/* harmony import */ var _CallBackLazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CallBackLazy */ "./src/scripts/modules/CallBackLazy.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* popup-js 2.0 by @thien.ho
* License: MIT
*/

var callBack = new _CallBackLazy__WEBPACK_IMPORTED_MODULE_0__["default"]();

var Popup = /*#__PURE__*/function () {
  function Popup() {
    _classCallCheck(this, Popup);

    this.$html = $('html');
    this.$modPop = '.mod-popup';
    this.$ClosePopup = '.popup-is-close';
    this.$openPopup = '.popup-is-open';
    this.closeContent = '<span class="icomoon icon-close"></span><span class="sr-only">Close Popup</span>';
    this.closeLink = "<a href=\"javascript:;\" class=\"popup-is-close no-underline\">\n    <span class=\"icomoon icon-close\"></span>\n    <span class=\"sr-only\">Close Popup</span>\n    </a>";
    this.contentInner = "<div class=\"popup-inner\">\n    <h3>The requested content cannot be loaded. <br> Please try again later.</h3>\n    </div>";
    this.widthContent = 'container';
    this.widthContentTmp = 'container';
    this.popupstatic = 'popup-static';
    this.popcontent = '.popup-content';
    this.popShow = 'popup-show';
    this.popinner = '.popup-inner';
    this.noelement = 'no-element';
    this.iframe = '';
  }

  _createClass(Popup, [{
    key: "init",
    value: function init() {
      if (this.$html.length) {
        this.openPopupGallery();
        this.clickOutSite();
        this.clickClosePopup();
      }
    }
    /**
     * Function
     */

  }, {
    key: "renderPopup",
    value: function renderPopup() {
      var html = "<div class=\"mod-popup ".concat(this.popShow, "\">\n    <div class=\"popup-container inset-0 absolute\">\n    <div class=\"popup-content ").concat(this.widthContent, "\">\n    <div class=\"mask-pop-overlay\"></div>\n    </div>\n    </div>\n    </div>");
      $(document.body).append(html);
    }
  }, {
    key: "loadLazyOnLoad",
    value: function loadLazyOnLoad() {
      var $hasLazy = $('.popup-inner .lazy');

      if ($hasLazy.length) {
        $hasLazy.each(function (_index, el) {
          var element = el;
          var elementTmp = $(element)[0].tagName;
          callBack.call(elementTmp, element);
        });
      }
    }
  }, {
    key: "convertToEmbed",
    value: function convertToEmbed(url) {
      var urlYoutube = 'https://www.youtube.com/embed/';

      if (url.toLowerCase().indexOf('youtube.com') !== -1 && url.toLowerCase().indexOf('youtube.com/embed') === -1) {
        var tempV = url.split('?v=')[1];
        var v = tempV.split('&')[0];
        return "".concat(urlYoutube).concat(v, "?autoplay=1&rel=0&showinfo=0");
      }

      if (url.toLowerCase().indexOf('vimeo.com') !== -1 && url.toLowerCase().indexOf('player.vimeo.com/video') === -1) {
        var parts = url.split('/');
        var v2 = parts.pop();
        return "https://player.vimeo.com/video/".concat(v2, "?autoplay=1&muted=0");
      }

      if (url.toLowerCase().indexOf('youtu.be') !== -1) {
        var parts2 = url.split('/');
        var v3 = parts2.pop();
        return "".concat(urlYoutube).concat(v3, "?autoplay=1&rel=0&showinfo=0");
      }

      return url;
    }
  }, {
    key: "addMutedVideo",
    value: function addMutedVideo(url) {
      if (url.toLowerCase().indexOf('youtube.com') === -1) {
        if (url.toLowerCase().indexOf('?') === -1) {
          return url + '?muted=0';
        } else {
          return url + '&muted=0';
        }
      }

      return url;
    }
  }, {
    key: "popupVideo",
    value: function popupVideo(ele) {
      var srcVideo = $(ele).attr('href');
      srcVideo = this.convertToEmbed(srcVideo);
      srcVideo = this.addMutedVideo(srcVideo);
      this.iframe = "<div class=\"popup-inner popup-video \">\n              <div class=\"embed-responsive relative embed-responsive-16by9\">\n                <iframe title=\"Video lightbox\" class=\"embed-responsive-item absolute inset-0 w-full h-full\" src=\"".concat(srcVideo, "\" frameborder=\"0\"></iframe>\n              </div>\n            </div>");
      this.renderPopup();
      var $popupContent = $(this.$modPop).find(this.popcontent);
      $popupContent.append(this.iframe);
      $popupContent.find(this.popinner).append(this.closeLink);
    }
  }, {
    key: "popupContent",
    value: function popupContent(tmpContent) {
      var cloneTmp = '';
      cloneTmp = $(tmpContent).find(this.popinner).clone();
      this.renderPopup();
      var $popupContent = $(this.$modPop).find(this.popcontent);

      if ($(tmpContent).length) {
        $popupContent.append(cloneTmp);
      } else {
        $popupContent.addClass(this.noelement).append(this.contentInner);
      }

      $popupContent.find(this.popinner).append(this.closeLink);
    }
  }, {
    key: "openPopupGallery",
    value: function openPopupGallery() {
      var _this = this;

      this.$html.on('click', this.$openPopup, function (e) {
        // cal lazy img into popup
        var ele = e.currentTarget;
        var htmlClass = $(ele).data('htmlclass');
        var tmpContent = $(ele).data('id');
        var tmpPopup = $(ele).data('popup');
        var tmpWidthContent = $(tmpContent).data('content');
        $(ele).addClass('is-click');

        _this.loadLazyOnLoad();

        if ($(tmpContent).hasClass('mod-popup-static')) {
          $(tmpContent).addClass(_this.popupstatic);
        } else {
          if (typeof tmpWidthContent !== 'undefined') {
            _this.widthContent = tmpWidthContent;
          }

          if (tmpPopup === 'video') {
            _this.popupVideo(ele);
          } else {
            _this.popupContent(tmpContent);
          }
        }

        if ($(tmpContent).hasClass(_this.popupstatic)) {
          $(tmpContent).addClass(_this.popShow);
        } else {
          $(_this.$modPop).addClass(_this.popShow);
        }

        _this.$html.addClass(htmlClass).addClass('popup-open');

        setTimeout(function () {
          _this.$html.addClass('popup-animation');
        }, 100); // callBack()

        return false;
      });
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      var classHtml = this.$html.find('.is-click').data('htmlclass');
      this.$html.removeClass('popup-open popup-animation ' + classHtml);

      if (this.$html.find('.' + this.popShow).hasClass(this.popupstatic)) {
        this.$html.find('.' + this.popupstatic).removeClass(this.popShow);
      } else {
        $(this.$modPop).remove();
      }

      this.$html.find('.is-click').removeClass('is-click');
      this.widthContent = this.widthContentTmp;
    }
  }, {
    key: "clickClosePopup",
    value: function clickClosePopup() {
      var _this2 = this;

      this.$html.on('click', this.$ClosePopup, function () {
        _this2.closePopup();
      });
    }
  }, {
    key: "clickOutSite",
    value: function clickOutSite() {
      var _this3 = this;

      this.$html.on('click', '.mask-pop-overlay', function () {
        _this3.closePopup();
      });
      $(window).keydown(function (e) {
        if (e.keyCode === 27 && $('.mod-popup').length || e.keyCode === 13 && $(e.target).hasClass('popup-is-close')) {
          _this3.closePopup();
        }
      });
    }
  }]);

  return Popup;
}();


new Popup().init();

/***/ }),

/***/ "./src/scripts/modules/SelectC8.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/SelectC8.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectC8)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SelectC8 = /*#__PURE__*/function () {
  function SelectC8() {
    _classCallCheck(this, SelectC8);

    this.$callSelectC8 = $('.select-c8');
    this.$callSelectC8Option = '.select-c8 option';
    this.formSelectC8 = '.form-select-c8';
    this.dropdownSelectC8 = 'dropdown-select-c8';
    this.dropdownMenu = '.dropdown-menu';
    this.arrow = '<span class="caret-c8 icomoon icon-chevron-down absolute z-1 right-7 top-8"></span>';
    this.dropdownOpen = ".dropdown-select-c8.show, ".concat(this.dropdownMenu, ".show");
    this.title = '';
    this.ariaSelected = 'aria-selected';
    this.ariaExpanded = 'aria-expanded';
    this.ulListBox = 'ul[role="listbox"]';
    this.dropToggle = '.dropdown-toggle';
    this.hidden = 'hidden';
    this.show = 'show';
    this.liSelected = 'li.selected';
    this.textSelected = 'selected';
    this.ariaActivedescendant = 'aria-activedescendant';
  }

  _createClass(SelectC8, [{
    key: "init",
    value: function init() {
      if (this.$callSelectC8.length) {
        this.renderSelectToDropdown();
        this.clickToggle();
        this.clickSelect();
        this.changeSelectC8();
        this.hoverLiRemoveClass();
        this.clickOutClose();
        this.keyOption();
        this.roleSelectDropdownCloseAction();
        this.searchChareaterSelectbox();
      }
    }
  }, {
    key: "renderHtml",
    value: function renderHtml(element, textTitle) {
      var randomId = Math.floor(Math.random() * 10e9);
      var idSelect = element.id || randomId;
      idSelect = "id-".concat(idSelect);
      var $label = $(element).prevAll('label');
      var ariaLabel = '';

      if ($label.length) {
        if ($label.get(0).id) {
          ariaLabel = "".concat($label.get(0).id);
        } else {
          ariaLabel = "id-".concat(randomId, "-label");
          $label.attr('id', ariaLabel);
        }
      }

      var eleParent = $(element).parent();
      eleParent.find('.dropdown').remove();
      eleParent.after().append("<div class='dropdown shadow-none z-10 rounded-0 border-0 no-bg h-auto p-0 relative  ".concat(this.dropdownSelectC8, "'>\n          <a class='dropdown-toggle form-control shadow-none no-underline relative border-1 border-solid border-primary-100 w-full font-bold px-10 py-5 flex items-center text-decoration box-shadow' href='javascript:;' role='combobox' data-toggle='dropdown'aria-haspopup='listbox' aria-expanded=\"false\" role=\"combobox\" aria-controls=\"").concat(idSelect, "\" aria-labelledby=\"").concat(ariaLabel, "\" ").concat(this.ariaActivedescendant, ">\n          <span class=\"filter-option d-block text-truncate overflow-hidden text-ellipsis whitespace-nowrap font-bold pr-10 leading-none text-lg\">").concat(textTitle, "</span>").concat(this.arrow, "</a>\n          <div class='dropdown-menu dropdown-menu-c8 absolute top-full left-0 right-0 hidden border-1 border-t-0 bg-white text-reset w-full rounded-0 p-0 m-0 border-solid border-primary-100'>\n          <ul class=\"list-inline m-0 pl-0 list-none\" role=\"listbox\" id=\"").concat(idSelect, "\" aria-labelledby=\"").concat(ariaLabel, "\"></ul>\n          </div>\n        </div>"));
      $(element).each(function (_idx, elm) {
        var tabIndex = 1;
        var disabled = '';
        var hidenText = '';
        $(element).find('option', elm).each(function (id, el) {
          if ($(el).prop('disabled')) {
            disabled = 'disabled';
            hidenText = "<span class=\"sr-only\">&nbsp; disabled</span>";
          }

          eleParent.find('.dropdown ul').append("<li ".concat(disabled, " class=\"").concat(disabled, " m-0 p-0 font-bold text-lg leading-none\" role=\"option\" aria-selected=\"false\" id=\"combo-").concat(idSelect, "-").concat(id, "\">\n        <a href=\"javascript:;\" ").concat(disabled, " class=\"block width-full px-10 py-5 border-b-1 border-rgbaBlack hover:bg-primary-200 hover:text-white no-underline ").concat(disabled, "\">").concat(el.text, " ").concat(hidenText, "</a>\n        </li>"));
          tabIndex++;
          disabled = '';
          hidenText = '';
        });
      });
    }
  }, {
    key: "titleUndefined",
    value: function titleUndefined(element) {
      var _this = this;

      this.title = $(element).data('title');

      if (typeof title === 'undefined') {
        var indexActive = 0;
        $(element).children('option').each(function (_indexChild, elementChild) {
          if (typeof $(elementChild).attr('selected') !== 'undefined') {
            _this.title = $(elementChild).text();
            indexActive = $(elementChild).index();
          }
        });

        if (indexActive === 0) {
          this.title = $(element).find('option').first().attr('selected', 'selected').text();
        }
      }

      return this.title;
    }
  }, {
    key: "renderSelectToDropdown",
    value: function renderSelectToDropdown() {
      var _this2 = this;

      this.$callSelectC8.each(function (_index, element) {
        if (!$(element).hasClass('select-done')) {
          _this2.title = $(element).data('title');

          _this2.titleUndefined(element);

          _this2.renderHtml(element, _this2.title);

          var active = $(element).parents(_this2.formSelectC8).find('.dropdown-select-c8 .filter-option').text();
          $(element).parents(_this2.formSelectC8).find("".concat(_this2.dropdownMenu, " li")).each(function (_id, el) {
            if (active === $(el).find('a').text()) {
              $(el).addClass('selected').attr(_this2.ariaSelected, true);
            }
          });
          $(element).addClass('select-done');
          _this2.title = '';
        }
      });
    }
  }, {
    key: "clickToggle",
    value: function clickToggle() {
      var _this3 = this;

      $(document).on('click', this.dropToggle, function (e) {
        var $dropdownRemove = $("".concat(_this3.dropdownMenu, ", .dropdown-select-c8"));
        var ele = e.currentTarget;
        var eleParent = $(ele).parent();
        var eleParents = eleParent.find(_this3.dropdownMenu);

        if (eleParent.hasClass(_this3.show)) {
          eleParent.removeClass(_this3.show);
          eleParents.addClass(_this3.hidden);
          $(ele).attr(_this3.ariaExpanded, false);
        } else {
          $dropdownRemove.removeClass(_this3.show);
          eleParent.addClass(_this3.show);
          eleParents.removeClass(_this3.hidden);
          $(ele).attr(_this3.ariaExpanded, true);
        }

        return false;
      });
    }
  }, {
    key: "multiSelect",
    value: function multiSelect(ele, index) {
      var _this4 = this;

      var dropParent = $(ele).parents(this.formSelectC8);
      var selected = 'selected';
      var string = '';

      if ($(ele).parent().hasClass(selected)) {
        $(ele).parent().removeClass(selected).addClass('not-hover');
        $(ele).parents(this.formSelectC8).find(this.$callSelectC8Option).eq(index).removeAttr(selected); // val = $(ele).parents(formSelectC8).find($callSelectC8Option).eq(index).val()

        if ($(ele).parents('ul').find('li.selected:not(.disabled)').length < 1) {
          string = $(ele).parents('ul').find('li.disabled a').text().trim() + ', '; // string.slice(0, string.length - 2)
        }
      } else {
        $(ele).parent().addClass(selected).removeClass('not-hover');
      }

      $(ele).parents('ul').find('li.selected:not(.disabled)').each(function (_indexLI, el) {
        // index = indexLI
        var value = $(el).find('a').text().trim();
        string += value + ', ';
      });

      if (!$(ele).parents('.' + this.dropdownSelectC8).hasClass('no-trigger-active')) {
        $(ele).parents('.' + this.dropdownSelectC8).find('.dropdown-toggle .filter-option').text(string.slice(0, string.length - 2));
      }

      dropParent.find(this.$callSelectC8Option).prop(selected, false);
      setTimeout(function () {
        $.each(string.split(', '), function (_i, e) {
          dropParent.find(".select-c8 option[value=\"".concat(e, "\"]")).attr(selected, selected);
        });
        dropParent.find(_this4.$callSelectC8).change();
      }, 100); // console.log('string: ' + string)

      return false;
    }
  }, {
    key: "singleSelect",
    value: function singleSelect(ele, index) {
      var _this5 = this;

      var text = $(ele).text();

      if ($(ele).parent().hasClass('disabled')) {
        return false;
      }

      if (!$(ele).parents('.' + this.dropdownSelectC8).hasClass('no-trigger-active')) {
        $(ele).parents('.' + this.dropdownSelectC8).find('.dropdown-toggle .filter-option').text(text);
      }

      $(ele).parents('ul').find('li').removeClass('selected').attr(this.ariaSelected, false);
      $(ele).parent().addClass('selected').attr(this.ariaSelected, true);
      var dropParent = $(ele).parents(this.formSelectC8);
      setTimeout(function () {
        dropParent.find(_this5.$callSelectC8Option).removeAttr('selected').eq(index).attr('selected', 'selected').prop('selected', true);
        var val = dropParent.find(_this5.$callSelectC8Option).prop('selected', true).eq(index).val();
        dropParent.find(_this5.$callSelectC8).val(val).change();
        $(ele).parents("".concat(_this5.dropdownMenu, ", .dropdown-select-c8")).removeClass(_this5.show);
        $(ele).parents(_this5.dropdownMenu).addClass(_this5.hidden);
        dropParent.find(_this5.dropToggle).attr(_this5.ariaActivedescendant, $(ele).parents('ul').find(_this5.liSelected).attr('id'));
      }, 100);
    }
  }, {
    key: "clickSelect",
    value: function clickSelect() {
      var _this6 = this;

      $(document).on('click', '.dropdown-select-c8 li a', function (e) {
        var ele = e.currentTarget;
        var index = $(ele).parents('li').index();
        $('.' + _this6.dropdownSelectC8).removeClass('focus');
        $(ele).parents('.form-control').find(_this6.dropToggle).addClass('active');
        $(ele).parents('ul').find('li').removeClass('focus');

        if ($(ele).parents(_this6.formSelectC8).hasClass('multiselect')) {
          _this6.multiSelect(ele, index);
        } else {
          _this6.singleSelect(ele, index);
        }
      });
    }
  }, {
    key: "hoverLiRemoveClass",
    value: function hoverLiRemoveClass() {
      var _this7 = this;

      $('.' + this.dropdownSelectC8).find('li').on('hover', function () {
        $('.' + _this7.dropdownSelectC8).find('li').removeClass('not-hover').find('a').blur();
      });
    }
  }, {
    key: "changeSelectC8",
    value: function changeSelectC8() {
      var _this8 = this;

      this.$callSelectC8.change(function () {
        _this8.$callSelectC8.trigger('changeSelect');
      });
    }
  }, {
    key: "clickOutClose",
    value: function clickOutClose() {
      var _this9 = this;

      $(document).click(function (event) {
        if (!$(event.target).closest('.dropdown-select-c8.show, .dropdown-menu.show, .dropdown-select-c8 *').length) {
          $(_this9.dropdownOpen).find(_this9.dropToggle).attr(_this9.ariaExpanded, false);
          $(_this9.dropdownOpen).removeClass(_this9.show);
          $(_this9.dropdownMenu).addClass(_this9.hidden);
        }
      });
    }
  }, {
    key: "keyOption",
    value: function keyOption() {
      var _this10 = this;

      $(document).keyup(function (e) {
        if (e.keyCode === 27 && $('.dropdown-select-c8.show').length) {
          $(_this10.dropdownOpen).find(_this10.dropToggle).attr(_this10.ariaExpanded, false);
          $(_this10.dropdownOpen).removeClass(_this10.show);
          $(_this10.dropdownMenu).addClass(_this10.hidden);
        }

        window.addEventListener('keydown', function (keydownEvent) {
          // space and arrow keys
          if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1 && $('.dropdown-select-c8.show').length) {
            keydownEvent.preventDefault();
          }
        }, false);
      });
    }
  }, {
    key: "isElementInView",
    value: function isElementInView(element) {
      var bounding = element.getBoundingClientRect();
      var $select = $('.dropdown-menu.dropdown-menu-c8');
      return bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= $select.innerHeight() && bounding.right <= $select.innerWidth();
    }
  }, {
    key: "scrollToScreen",
    value: function scrollToScreen($liCurrent) {
      if (!this.isElementInView($liCurrent[0])) {
        $liCurrent[0].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }
    }
  }, {
    key: "openDropDown",
    value: function openDropDown($ele) {
      var $dropdownRemove = $('.dropdown-menu, .dropdown-select-c8');
      var eleParent = $ele.parent();
      var eleParents = eleParent.find(this.dropdownMenu);
      $dropdownRemove.removeClass(this.show);
      eleParent.addClass(this.show);
      eleParents.removeClass(this.hidden);
      $ele.attr(this.ariaExpanded, 'true');
    }
  }, {
    key: "selectedNext",
    value: function selectedNext(indexNext, $ele) {
      var $liSelected = $ele.parent().find(this.liSelected);
      var $taindex0 = $ele.parents('.' + this.dropdownSelectC8).find('li');
      $liSelected.removeClass('selected');
      $taindex0.eq(indexNext).addClass('selected');
      $ele.attr(this.ariaActivedescendant, $taindex0.eq(indexNext).attr('id'));
      this.scrollToScreen($taindex0.eq(indexNext));
    }
  }, {
    key: "selectedPrev",
    value: function selectedPrev(indexPrev, $ele) {
      var $liSelected = $ele.parent().find(this.liSelected);
      var $taindex0 = $ele.parents('.' + this.dropdownSelectC8).find('li');
      $liSelected.removeClass('selected');
      $taindex0.eq(indexPrev).addClass('selected');
      $ele.attr(this.ariaActivedescendant, $taindex0.eq(indexPrev).attr('id'));
      this.scrollToScreen($taindex0.eq(indexPrev));
    }
  }, {
    key: "handleTabSelectDropdown",
    value: function handleTabSelectDropdown(index, eleParent, eleParents, indexLiLast, $taindex0, $ele) {
      if ($('.' + this.dropdownSelectC8).hasClass(this.show)) {
        if (index !== indexLiLast) {
          var indexNext = index + 1 < $taindex0.length ? index + 1 : 0;
          this.selectedNext(indexNext, $ele);
        } else {
          eleParent.removeClass(this.show);
          eleParents.addClass(this.hidden);
        }
      }
    }
  }, {
    key: "handlePgDnSelectDropdown",
    value: function handlePgDnSelectDropdown(index, indexLiLast, $taindex0, $ele) {
      if ($('.' + this.dropdownSelectC8).hasClass(this.show)) {
        var indexRemain = indexLiLast - index;

        if (index !== indexLiLast && indexRemain >= 10) {
          var indexNext = index + 10 < $taindex0.length ? index + 10 : 0;
          this.selectedNext(indexNext, $ele);
        } else {
          var _indexNext = index + indexRemain < $taindex0.length ? index + indexRemain : 0;

          this.selectedNext(_indexNext, $ele);
        }
      }
    }
  }, {
    key: "handlePgUpSelectDropdown",
    value: function handlePgUpSelectDropdown(index, indexLiFirst, $taindex0, $ele) {
      if ($('.' + this.dropdownSelectC8).hasClass(this.show)) {
        var indexRemain = index - indexLiFirst;

        if (index !== indexLiFirst && indexRemain >= 10) {
          var indexPrev = index - 10 >= 0 ? index - 10 : $taindex0.length - 10;
          this.selectedPrev(indexPrev, $ele);
        } else {
          var _indexPrev = index - indexRemain >= 0 ? index - indexRemain : $taindex0.length - indexRemain;

          this.selectedPrev(_indexPrev, $ele);
        }
      }
    }
  }, {
    key: "handleSpaceAndEnterDropdown",
    value: function handleSpaceAndEnterDropdown(eleParent, eleParents, $dropdownRemove, $ele) {
      var $textSelected = $ele.parent().find('li.selected a');

      if (eleParent.hasClass(this.show)) {
        $($textSelected).trigger('click');
        eleParent.removeClass(this.show);
        eleParents.addClass(this.hidden);
        $ele.attr(this.ariaExpanded, false);
      } else {
        $dropdownRemove.removeClass(this.show);
        eleParent.addClass(this.show);
        eleParents.removeClass(this.hidden);
        $ele.attr(this.ariaExpanded, true);
      }
    }
  }, {
    key: "handleArrowUpDropdown",
    value: function handleArrowUpDropdown(index, indexLiFirst, $taindex0, $ele) {
      if ($('.' + this.dropdownSelectC8).hasClass(this.show) && index !== indexLiFirst) {
        var indexPrev = index - 1 >= 0 ? index - 1 : $taindex0.length - 1;
        this.selectedPrev(indexPrev, $ele);
      }

      this.openDropDown($ele);
    }
  }, {
    key: "handleArrowDownDropdown",
    value: function handleArrowDownDropdown(index, indexLiLast, $taindex0, $ele) {
      if ($('.' + this.dropdownSelectC8).hasClass(this.show) && index !== indexLiLast) {
        var indexNext = index + 1 < $taindex0.length ? index + 1 : 0;
        this.selectedNext(indexNext, $ele);
      }

      this.openDropDown($ele);
    }
  }, {
    key: "handleHomeSelectDropdown",
    value: function handleHomeSelectDropdown($liSelected, $liFirst, $taindex0, indexLiFirst, $ele) {
      this.openDropDown($ele);
      $liSelected.removeClass('selected');
      $liFirst.parent().addClass('selected');
      this.scrollToScreen($taindex0.eq(indexLiFirst));
    }
  }, {
    key: "handleEndSelectDropdown",
    value: function handleEndSelectDropdown($liSelected, $liLast, $taindex0, indexLiLast, $ele) {
      this.openDropDown($ele);
      $liSelected.removeClass('selected');
      $liLast.parent().addClass('selected');
      this.scrollToScreen($taindex0.eq(indexLiLast));
    }
  }, {
    key: "roleSelectDropdownCloseAction",
    value: function roleSelectDropdownCloseAction() {
      var _this11 = this;

      $(document).on('keydown', '[role="combobox"]', function (e) {
        var code = e.keyCode;
        var ele = e.currentTarget;
        var $liFirst = $(ele).parent().find('li:first a');
        var $liLast = $(ele).parent().find('li:last a');
        var $liSelected = $(ele).parent().find(_this11.liSelected);
        var $taindex0 = $(ele).parents('.' + _this11.dropdownSelectC8).find('li');
        var index = $taindex0.index($liSelected);
        var indexLiFirst = $taindex0.index($(ele).parent().find('li:first'));
        var indexLiLast = $taindex0.index($(ele).parent().find('li:last'));
        var $dropdownRemove = $('.dropdown-menu, .dropdown-select-c8');
        var eleParent = $(ele).parent();
        var eleParents = eleParent.find(_this11.dropdownMenu);

        switch (code) {
          case 9:
            _this11.handleTabSelectDropdown(index, eleParent, eleParents, indexLiLast, $taindex0, $(ele));

            break;

          case 34:
            _this11.handlePgDnSelectDropdown(index, indexLiLast, $taindex0, $(ele));

            break;

          case 33:
            _this11.handlePgUpSelectDropdown(index, indexLiFirst, $taindex0, $(ele));

            break;

          case 13:
          case 32:
            e.preventDefault();

            _this11.handleSpaceAndEnterDropdown(eleParent, eleParents, $dropdownRemove, $(ele));

            break;

          case 38:
            e.preventDefault();

            _this11.handleArrowUpDropdown(index, indexLiFirst, $taindex0, $(ele));

            break;

          case 40:
            e.preventDefault();

            _this11.handleArrowDownDropdown(index, indexLiLast, $taindex0, $(ele));

            break;

          case 36:
            e.preventDefault();

            _this11.handleHomeSelectDropdown($liSelected, $liFirst, $taindex0, indexLiFirst, $(ele));

            break;

          case 35:
            e.preventDefault();

            _this11.handleEndSelectDropdown($liSelected, $liLast, $taindex0, indexLiLast, $(ele));

            break;

          default:
            break;
        }
      });
    }
  }, {
    key: "searchChareaterSelectbox",
    value: function searchChareaterSelectbox() {
      var _this12 = this;

      $(document).on('keydown', '[role="combobox"]', function (ev) {
        var $target = $(ev.currentTarget);
        var $parent = $target.parents('.' + _this12.dropdownSelectC8);
        var $listbox = $parent.find('[role="listbox"]');
        var $listOptions = $parent.find('[role="option"]').find('a');
        var code = ev.keyCode || ev.which;
        var _char = ev.key;
        var options = [];
        var searchOptions = [];
        var indexGoto = -1;

        var searchString = _this12.getSearchString(_char);

        var indexActive = $parent.find(".".concat(_this12.textSelected)).index() + 1;

        if (code > 64 && code < 91 || code > 47 && code < 58) {
          if ($('.' + _this12.dropdownSelectC8).hasClass(_this12.hidden)) {
            _this12.openDropDown($target);
          }

          $listOptions.each(function (_idx, elm) {
            options.push($(elm).text().trim());
          });
          var orderedOptions = options.slice(indexActive).concat(options.slice(0, indexActive));
          searchString = _this12.getSearchString(_char);

          var allSameLetter = function allSameLetter(array) {
            return array.every(function (letter) {
              return letter === array[0];
            });
          };

          searchOptions = orderedOptions.filter(function (opt) {
            return opt.toLowerCase().indexOf(searchString.toLowerCase()) === 0;
          });
          var firstMatch = searchOptions[0];

          if (firstMatch) {
            indexGoto = options.indexOf(firstMatch);
          } else if (allSameLetter(searchString.split(''))) {
            searchOptions = orderedOptions.filter(function (opt) {
              return opt.toLowerCase().indexOf(searchString[0].toLowerCase()) === 0;
            });
            indexGoto = options.indexOf(searchOptions[0]);
          } else {
            indexGoto = -1;
          }

          if (indexGoto > -1) {
            _this12.maintainScrollVisibility($listOptions[indexGoto], $listbox.parent()[0]);

            $listOptions.parent().removeClass(_this12.textSelected);
            $listOptions.eq(indexGoto).parent().addClass(_this12.textSelected);
            var LiActive = $('.' + _this12.dropdownSelectC8).find(_this12.liSelected);
            $target.attr(_this12.ariaActivedescendant, LiActive.attr('id'));
          }
        }
      });
    }
  }, {
    key: "maintainScrollVisibility",
    value: function maintainScrollVisibility(activeElement, scrollParent) {
      var offsetHeight = activeElement.offsetHeight,
          offsetTop = activeElement.offsetTop;
      var scrollTop = scrollParent.scrollTop,
          parentOffsetHeight = scrollParent.offsetHeight;
      var isAbove = offsetTop < scrollTop;
      var isBelow = offsetTop + offsetHeight > scrollTop + parentOffsetHeight;

      if (isAbove) {
        scrollParent.scrollTo(0, offsetTop);
      }

      if (isBelow) {
        scrollParent.scrollTo(0, offsetTop - parentOffsetHeight + offsetHeight);
      }
    }
  }, {
    key: "getSearchString",
    value: function getSearchString(_char2) {
      var _this13 = this;

      if (typeof this.searchTimeout === 'number') {
        window.clearTimeout(this.searchTimeout);
      }

      this.searchTimeout = window.setTimeout(function () {
        _this13.searchString = '';
      }, 500);
      this.searchString += _char2;
      return this.searchString;
    }
  }]);

  return SelectC8;
}();


new SelectC8().init();

/***/ }),

/***/ "./src/scripts/modules/SliderDemo.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/SliderDemo.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SliderDemo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SliderDemo = /*#__PURE__*/function () {
  function SliderDemo() {
    _classCallCheck(this, SliderDemo);

    this.$this = $('.mod-slider');
  }

  _createClass(SliderDemo, [{
    key: "init",
    value: function init() {
      if (this.$this.length) {
        this.addSlick();
      }
    }
  }, {
    key: "addSlick",
    value: function addSlick() {
      this.$this.find('.slider').slick({
        rows: 0,
        adaptiveHeight: true,
        prevArrow: '<button aria-label="Prev slider" class="slick-prev arrows text-primary-100 h1"><span class="icomoon icon-chevron-left"></span></button>',
        nextArrow: '<button aria-label="Next slider" class="slick-next arrows text-primary-100 h1"><span class="icomoon icon-chevron-right"></span></button>'
      });
    }
  }]);

  return SliderDemo;
}();


new SliderDemo().init();

/***/ }),

/***/ "./src/scripts/modules/UserAgent.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/UserAgent.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserAgent)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var UserAgent = /*#__PURE__*/function () {
  function UserAgent() {
    _classCallCheck(this, UserAgent);

    this.$html = $('html');
  }

  _createClass(UserAgent, [{
    key: "init",
    value: function init() {
      console.log('test');
    }
  }]);

  return UserAgent;
}();


new UserAgent().init();

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/app": 0,
/******/ 			"assets/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkshopify"] = self["webpackChunkshopify"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/app"], () => (__webpack_require__("./src/scripts/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/app"], () => (__webpack_require__("./src/styles/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;