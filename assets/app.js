/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UserAgent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UserAgent */ "./src/scripts/modules/UserAgent.js");
/* harmony import */ var _modules_AnimationScrollPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/AnimationScrollPage */ "./src/scripts/modules/AnimationScrollPage.js");
/* harmony import */ var _modules_Popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Popup */ "./src/scripts/modules/Popup.js");
/* harmony import */ var _modules_SelectC8__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/SelectC8 */ "./src/scripts/modules/SelectC8.js");
/* harmony import */ var _modules_LazyLoadImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/LazyLoadImage */ "./src/scripts/modules/LazyLoadImage.js");
/* harmony import */ var _modules_CheckDevice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/CheckDevice */ "./src/scripts/modules/CheckDevice.js");
/* harmony import */ var _modules_BrowserDetection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/BrowserDetection */ "./src/scripts/modules/BrowserDetection.js");
// import 'slick-carousel/slick/slick'
// import './modules/FixHeight';







console.log('App Desktop');

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

      this.removeloading();

      if ($(window).width() >= 1024) {
        this.animationEle();
      }

      $(window).on('scroll resize', function () {
        if ($(window).width() >= 1024) {
          _this.animationEle();
        }
      });
    }
  }, {
    key: "removeloading",
    value: function removeloading() {
      $('#loadding-page').addClass('hide-loader');
    }
  }, {
    key: "animationEle",
    value: function animationEle() {
      var _this2 = this;

      this.$elems = $('.animation');
      this.winH = window.innerHeight;
      this.winW = window.innerWidth;
      this.offset = this.winH;

      if (this.winW > 1024 && !$('body').hasClass('no-animation')) {
        this.wintop = $(window).scrollTop();
        this.$elems.each(function (index, ele) {
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

/***/ "./src/scripts/modules/BrowserDetection.js":
/*!*************************************************!*\
  !*** ./src/scripts/modules/BrowserDetection.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BrowserDetection)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var BrowserDetection = /*#__PURE__*/function () {
  function BrowserDetection() {
    _classCallCheck(this, BrowserDetection);

    this.$html = $('html');
  }

  _createClass(BrowserDetection, [{
    key: "browserDetection",
    value: function browserDetection() {
      var isExplorer = (navigator.userAgent.indexOf('MSIE') || navigator.userAgent.indexOf('rv:15')) > -1;
      var isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
      var isSafari = navigator.userAgent.indexOf('Safari') > -1;
      var isChrome = navigator.userAgent.indexOf('Chrome') > -1;

      if (isExplorer || document.documentMode) {
        this.$html.addClass('ie');
      }

      if (isFirefox) {
        this.$html.addClass('firefox');
      }

      if (isChrome && isSafari) {
        this.$html.addClass('chrome');
      }

      if (!isChrome && isSafari) {
        this.$html.addClass('safari');
      }

      if (/Edge/.test(navigator.userAgent)) {
        this.$html.addClass('edge');
      }
    }
  }]);

  return BrowserDetection;
}();


new BrowserDetection().browserDetection();

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

/***/ "./src/scripts/modules/CheckDevice.js":
/*!********************************************!*\
  !*** ./src/scripts/modules/CheckDevice.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckDevice)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var CheckDevice = /*#__PURE__*/function () {
  function CheckDevice() {
    _classCallCheck(this, CheckDevice);

    this.$html = $('html');
  }

  _createClass(CheckDevice, [{
    key: "checkDevice",
    value: function checkDevice() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.$html.addClass('touch');
      } else {
        this.$html.addClass('no-touch');
      }
    }
  }]);

  return CheckDevice;
}();


new CheckDevice().checkDevice();

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

      $(this.lazyimage).each(function (index, element) {
        var elementScroll = $(element).offset().top - window.innerHeight - window.innerHeight / 3.5;
        var scrollBody = $(window).scrollTop();

        if (elementScroll < scrollBody) {
          var elementTmp = element.tagName;
          callBack.call(elementTmp, element);

          if ($(element).parents('.slider-lazy').hasClass('slick-initialized')) {
            _this3.hasSlider(element);
          }
        }
      });
    }
  }]);

  return LazyLoadImage;
}();


new LazyLoadImage().init();

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
        $hasLazy.each(function (index, el) {
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
        return urlYoutube + v + '?autoplay=1&rel=0&showinfo=0';
      }

      if (url.toLowerCase().indexOf('vimeo.com') !== -1 && url.toLowerCase().indexOf('player.vimeo.com/video') === -1) {
        var parts = url.split('/');
        var v2 = parts.pop();
        return "https://player.vimeo.com/video/".concat(v2, "?autoplay=1&muted=0");
      }

      if (url.toLowerCase().indexOf('youtu.be') !== -1) {
        var parts2 = url.split('/');
        var v3 = parts2.pop();
        return urlYoutube + v3 + '?autoplay=1&rel=0&showinfo=0';
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
        }, 100);
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
    this.arrow = '<span class="caret-c8 icomoon icon-chevron-down absolute right-7 top-8"></span>';
    this.dropdownOpen = '.dropdown-select-c8.show, .dropdown-menu.show';
    this.title = '';
  }

  _createClass(SelectC8, [{
    key: "init",
    value: function init() {
      if (this.$callSelectC8.length) {
        this.renderSelectToDropdown();
        this.clickToggle();
        this.clickSelect();
        this.focusSelect();
        this.closeSelect();
        this.changeSelectC8();
        this.hoverLiRemoveClass();
        this.clickOutClose();
        this.keyOption();
      }
    }
  }, {
    key: "renderHtml",
    value: function renderHtml(element, textTitle) {
      var eleParent = $(element).parent();
      eleParent.find('.dropdown').remove();
      eleParent.after().append("<div class='dropdown shadow-none rounded-0 border-0 no-bg h-auto p-0 relative  ".concat(this.dropdownSelectC8, "'>\n          <a class='dropdown-toggle form-control shadow-none no-underline relative' href='javascript:;' role='button' data-toggle='dropdown' aria-haspopup='true'>\n          <span class=\"filter-option d-block text-truncate\">").concat(textTitle, "</span>").concat(this.arrow, "</a>\n          <div class='dropdown-menu dropdown-menu-c8 absolute top-full left-0 right-0 hidden border-1 border-t-0  border-black bg-white text-reset w-full rounded-0'>\n          <ul class=\"list-inline m-0 pl-0 list-none\"></ul>\n          </div>\n        </div>"));
      $(element).each(function (idx, elm) {
        var tabIndex = 1;
        var disabled = '';
        $(element).find('option', elm).each(function (id, el) {
          if ($(el).prop('disabled')) {
            disabled = 'disabled';
          }

          eleParent.find('.dropdown ul').append("<li class=\"".concat(disabled, " m-0 p-0\" tabindex=\"").concat(tabIndex, "\">\n        <a href=\"javascript:;\" class=\"block width-full px-10 py-5 border-b-1 border-rgbaBlack no-underline ").concat(disabled, "\">").concat(el.text, "</a>\n        </li>"));
          tabIndex++;
          disabled = '';
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
        $(element).children('option').each(function (indexChild, elementChild) {
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

      this.$callSelectC8.each(function (index, element) {
        if (!$(element).hasClass('select-done')) {
          _this2.title = $(element).data('title');

          _this2.titleUndefined(element);

          _this2.renderHtml(element, _this2.title);

          var active = $(element).parents(_this2.formSelectC8).find('.dropdown-select-c8 .filter-option').text();
          $(element).parents(_this2.formSelectC8).find('.dropdown-menu li').each(function (id, el) {
            if (active === $(el).find('a').text()) {
              $(el).addClass('selected');
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

      $(document).on('click', '.dropdown-toggle', function (e) {
        var $dropdownRemove = $('.dropdown-menu, .dropdown-select-c8');
        var ele = e.currentTarget;
        var eleParent = $(ele).parent();
        var eleParents = eleParent.find(_this3.dropdownMenu);
        var show = 'show z-10';
        var hidden = 'hidden';

        if (eleParent.hasClass(show)) {
          eleParent.removeClass(show);
          eleParents.addClass(hidden);
        } else {
          $dropdownRemove.removeClass(show);
          eleParent.addClass(show);
          eleParents.removeClass(hidden);
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
        $(ele).parents(this.formSelectC8).find(this.$callSelectC8Option).eq(index).removeAttr(selected);

        if ($(ele).parents('ul').find('li.selected:not(.disabled)').length < 1) {
          string = $(ele).parents('ul').find('li.disabled a').text().trim() + ', ';
        }
      } else {
        $(ele).parent().addClass(selected).removeClass('not-hover');
      }

      $(ele).parents('ul').find('li.selected:not(.disabled)').each(function (indexLI, el) {
        var value = $(el).find('a').text().trim();
        string += value + ', ';
      });

      if (!$(ele).parents('.' + this.dropdownSelectC8).hasClass('no-trigger-active')) {
        $(ele).parents('.' + this.dropdownSelectC8).find('.dropdown-toggle .filter-option').text(string.slice(0, string.length - 2));
      }

      dropParent.find(this.$callSelectC8Option).prop(selected, false);
      setTimeout(function () {
        $.each(string.split(', '), function (i, e) {
          dropParent.find(".select-c8 option[value=\"".concat(e, "\"]")).attr(selected, selected);
        });
        dropParent.find(_this4.$callSelectC8).change();
      }, 100);
      return false;
    }
  }, {
    key: "singleSelect",
    value: function singleSelect(ele, index) {
      var _this5 = this;

      var text = $(ele).text();

      if (!$(ele).parents('.' + this.dropdownSelectC8).hasClass('no-trigger-active')) {
        $(ele).parents('.' + this.dropdownSelectC8).find('.dropdown-toggle .filter-option').text(text);
      }

      $(ele).parents('ul').find('li').removeClass('selected');
      $(ele).parent().addClass('selected');
      var dropParent = $(ele).parents(this.formSelectC8);
      setTimeout(function () {
        $(ele).parents(_this5.formSelectC8).find(_this5.$callSelectC8Option).removeAttr('selected').eq(index).attr('selected', 'selected');
        var val = $(ele).parents(_this5.formSelectC8).find(_this5.$callSelectC8Option).eq(index).val();
        dropParent.find(_this5.$callSelectC8).val(val).change();
        $(ele).parents('.dropdown-menu, .dropdown-select-c8').removeClass('show z-10');
        $(ele).parents(_this5.dropdownMenu).addClass('hidden');
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
        $(ele).parents('.form-control').find('.dropdown-toggle').addClass('active');
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
    key: "focusSelectUp",
    value: function focusSelectUp(liFocus, index, totalOption, li, focus) {
      if (liFocus.length < 1 || index === 0) {
        li.removeClass(focus).eq(totalOption - 1).addClass(focus);
      } else {
        li.removeClass(focus).eq(index).prev().addClass(focus);
      }
    }
  }, {
    key: "focusSelectDown",
    value: function focusSelectDown(liFocus, index, totalOption, li, focus) {
      if (liFocus.length < 1 || totalOption - 1 === index) {
        li.removeClass(focus).first().addClass(focus);
      } else {
        li.removeClass(focus).eq(index).next().addClass(focus);
      }
    }
  }, {
    key: "focusSelect",
    value: function focusSelect() {
      var _this8 = this;

      $('.' + this.dropdownSelectC8).keydown(function (e) {
        var ele = e.currentTarget;
        var li = $(ele).find('li');
        var liFocus = $(ele).find('li.focus');
        var totalOption = li.length;
        var index = liFocus.index();
        var focus = 'focus';

        switch (e.keyCode) {
          case 13:
            if (liFocus.length && $(ele).find('li.focus.disabled').length === 0) {
              li.removeClass('selected');
              liFocus.addClass('selected').removeClass(focus).find('a').trigger('click');
            }

            break;

          case 38:
            $(ele).addClass(focus);

            _this8.focusSelectUp(liFocus, index, totalOption, li, focus);

            break;

          case 40:
            $(ele).addClass(focus);

            _this8.focusSelectDown(liFocus, index, totalOption, li, focus);

            break;

          case 9:
            li.removeClass(focus);
            break;

          default:
            break;
        }
      });
    }
  }, {
    key: "closeSelect",
    value: function closeSelect() {
      $('.' + this.dropdownSelectC8).on('hide.bs.dropdown', function () {
        $('.dropdown-select-c8, .dropdown-select-c8 li').removeClass('focus');
      });
    }
  }, {
    key: "changeSelectC8",
    value: function changeSelectC8() {
      var _this9 = this;

      this.$callSelectC8.change(function () {
        _this9.$callSelectC8.trigger('changeSelect');
      });
    }
  }, {
    key: "clickOutClose",
    value: function clickOutClose() {
      var _this10 = this;

      $(document).click(function (event) {
        if (!$(event.target).closest('.dropdown-select-c8.show, .dropdown-menu.show, .dropdown-select-c8 *').length) {
          $(_this10.dropdownOpen).removeClass('show z-10');
          $(_this10.dropdownMenu).addClass('hidden');
        }
      });
    }
  }, {
    key: "keyOption",
    value: function keyOption() {
      var _this11 = this;

      $(document).keyup(function (e) {
        if (e.keyCode === 27 && $('.dropdown-select-c8.show').length) {
          $(_this11.dropdownOpen).removeClass('show z-10');
          $(_this11.dropdownMenu).addClass('hidden');
        }

        window.addEventListener('keydown', function (keydownEvent) {
          if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1 && $('.dropdown-select-c8.show').length) {
            keydownEvent.preventDefault();
          }
        }, false);
      });
    }
  }]);

  return SelectC8;
}();


new SelectC8().init();

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
/* harmony import */ var _CallBackLazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CallBackLazy */ "./src/scripts/modules/CallBackLazy.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var callBack = new _CallBackLazy__WEBPACK_IMPORTED_MODULE_0__["default"]();

var UserAgent = /*#__PURE__*/function () {
  function UserAgent() {
    _classCallCheck(this, UserAgent);
  }

  _createClass(UserAgent, [{
    key: "init",
    value: function init() {
      console.log('init');
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


/***/ }),

/***/ "./src/styles/print.scss":
/*!*******************************!*\
  !*** ./src/styles/print.scss ***!
  \*******************************/
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
/******/ 			"assets/print": 0,
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
/******/ 	__webpack_require__.O(undefined, ["assets/print","assets/app"], () => (__webpack_require__("./src/scripts/app.js")))
/******/ 	__webpack_require__.O(undefined, ["assets/print","assets/app"], () => (__webpack_require__("./src/styles/app.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/print","assets/app"], () => (__webpack_require__("./src/styles/print.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;