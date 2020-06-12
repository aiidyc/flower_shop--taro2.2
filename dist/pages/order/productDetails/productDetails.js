(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/order/productDetails/productDetails"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/order/productDetails/productDetails.jsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/order/productDetails/productDetails.jsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./productDetails.scss */ "./src/pages/order/productDetails/productDetails.scss");

var _home = __webpack_require__(/*! ./../../../assets/tab-bar/home.png */ "./src/assets/tab-bar/home.png");

var _home2 = _interopRequireDefault(_home);

var _cart = __webpack_require__(/*! ./../../../assets/tab-bar/cart.png */ "./src/assets/tab-bar/cart.png");

var _cart2 = _interopRequireDefault(_cart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var images = [{
  url: 'https://s1.ax1x.com/2020/06/04/t0T8Rf.png',
  id: '5',
  title: '夏日福利【巴黎午后】旋转吧银河',
  subTitle: '献给你爱的那个她',
  price: '¥188'
}, {
  url: 'https://s1.ax1x.com/2020/06/04/t0T3JP.png',
  id: '6',
  title: '夏日福利【巴黎午后】旋转吧银河',
  subTitle: '献给你爱的那个她',
  price: '¥188'
}, {
  url: 'https://s1.ax1x.com/2020/06/04/t0ou40.png',
  id: '1',
  title: '夏日福利【巴黎午后】旋转吧银河',
  subTitle: '献给你爱的那个她',
  price: '¥188'
}, {
  url: 'https://s1.ax1x.com/2020/06/04/t0wNtI.jpg',
  id: '2',
  title: '夏日福利【巴黎午后】旋转吧银河',
  subTitle: '献给你爱的那个她',
  price: '¥188'
}, {
  url: 'https://s1.ax1x.com/2020/06/04/t0TERK.png',
  id: '3',
  title: '夏日福利【巴黎午后】旋转吧银河',
  subTitle: '献给你爱的那个她',
  price: '¥188'
}, {
  url: 'https://s1.ax1x.com/2020/06/04/t0TVxO.png',
  id: '4',
  title: '夏日福利【巴黎午后】旋转吧银河',
  subTitle: '献给你爱的那个她',
  price: '¥188'
}];

var ProduceDetails = (_temp2 = _class = function (_Taro$Component) {
  _inherits(ProduceDetails, _Taro$Component);

  function ProduceDetails() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ProduceDetails);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProduceDetails.__proto__ || Object.getPrototypeOf(ProduceDetails)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '商品详情'
    }, _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "$compid__132", "$compid__133", "$compid__134", "home", "cart"], _this.customComponents = ["NewSwiper", "GoodsDetails", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProduceDetails, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(ProduceDetails.prototype.__proto__ || Object.getPrototypeOf(ProduceDetails.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__132"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__132 = _genCompid2[0],
          $compid__132 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__133"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__133 = _genCompid4[0],
          $compid__133 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__134"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__134 = _genCompid6[0],
          $compid__134 = _genCompid6[1];

      var props = this.__props;
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ color: "#D5B67A" });
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ width: '26px', height: '26px', marginBottom: '1px' });
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)({ width: '26px', height: '26px', marginBottom: '1px' });
      var anonymousState__temp4 = { color: '#737373' };
      _taroWeapp.propsManager.set({
        "img": images,
        "height": '100%'
      }, $compid__132, $prevCompid__132);
      _taroWeapp.propsManager.set({
        "circle": true,
        "style": anonymousState__temp4
      }, $compid__133, $prevCompid__133);
      _taroWeapp.propsManager.set({
        "type": "primary",
        "circle": true
      }, $compid__134, $prevCompid__134);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        $compid__132: $compid__132,
        $compid__133: $compid__133,
        $compid__134: $compid__134,
        home: _home2.default,
        cart: _cart2.default
      });
      return this.__state;
    }
  }]);

  return ProduceDetails;
}(_taroWeapp2.default.Component), _class.$$events = [], _class.$$componentPath = "pages/order/productDetails/productDetails", _temp2);


ProduceDetails.config = { navigationBarTitleText: '商品详情' };
exports.default = ProduceDetails;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(ProduceDetails, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/order/productDetails/productDetails.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/order/productDetails/productDetails.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/order/productDetails/productDetails.wxml";

/***/ }),

/***/ "./src/assets/tab-bar/cart.png":
/*!*************************************!*\
  !*** ./src/assets/tab-bar/cart.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAA8hJREFUaEPtWu1R3DAQ1YoCQioIVBCoIFAAJ7mCkAqAChIqCKkAUoGlowCgAqCCkAqAAm43szeyRwjLsnz24WHiXzfn08fT7r7dfToQ7+SBd4JD/AcyNUu+H4vM5/NDIjoPT5iInoQQhohOiqLgz5N+wFpLbTskomut9f6kUQghGMi1EOJL20allMXBwYGZMphljJRluRduEgAuAOCT+/5UKfVj8kCaNmitvRBCfHXvbpRSr8BOCViUtay1bIHvU9gsETHp/CqKgsOg8YkCuby81IhYTgFItQcA+DabzdhTXj1RIGVZ7kgpb6cEhFMCEW03pYPWhBhQ8ykiRk07FmApJcdm7eIxBk0BuRNCfH5r5gpSRCODpoBw7lAOiFVK6bFOvm1eY8wjAGzybwDgZDabnb1KF20T+MxFRHda6911AwljFRF3i6JgT3nxtFokrMOUUmsvMoPDfNZaLy2TBYQzvpTyqhoUO40xrWSMuQWAHbfGb6XUYTYQHuAzFyLutyWloQGVZbklpfyzUh6pBhtjHt6q5gpdGxE/xlqKpM8H1Bc17dDWcN7gs+a9UqpysbwYcZP5Nddai0efdoUQrRV40iJvxVxdabeOn5RLNDAX1zoPqXGrvu9KuzlANqWUjx4Fr4W5cmMz6VoMwBjzBAAf+DP38ACwjuKx7kjbyvfOFnEBn+zrV3WltvGImHTnThax1nKRdjTmZmNzE9FfrfVWau1OQObz+TER/fQmu0lNPND7J0T80VQkZtVa1Y8bmCuaYQcCkD1NJ4uENc8Uda5OQBxz1TUX9yZExDQ8GSm1M5CYRpztAz0GENGDlPI0pqDwlJ2BOBr2e/geW+o/hMForbdjM2QBKcuSszzrSlUf339n+SNbK+8sIB6LMa8nuT1/r/ERqYauF5AhNzjUXL2AOBc7IqJDANhi/2X1HhFZn+3NZCzTLhaLIwBYCuZdNN+sWss/Nc4pAHDFAMLTZECOlrPLfGPMOQA0Cwstmm9vIMYYBhG9Yuhzw9VFME8JH1mu1SBsWwBgyZ8VyJrJcmUjv/cgomcp5bKE5zqrah9Y0GlTOrOA+MUjL+iLZX7PEpM1Y4HtS07+WL/qHjSPhFVwJc+44K+7yDGACCFWU1GCQH9xZ1J1i0S058dND9eqZR++A2EGdOsee+sPmxA73AJnS0Zhm9DkgqnDyYoRXsC5Ebe+1b2Jv+49Iu71ySVtRelgPXt4QgxmY2OD/zHBbMV39DfMXovF4qIPiKCB4250BwA4sd4h4tlgHeJQZcSY82S71pibWWXuf+1nMVF0h2ZYAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/tab-bar/home.png":
/*!*************************************!*\
  !*** ./src/assets/tab-bar/home.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAA9hJREFUaEPtmf9V2zAQx3XyAKUTQCconaB0ACJ7gsIEhQmACcoGhAlsZQFgAsIG6QZhAHR93zwlz77ItmI7j5TG/0H84z53uu+dTqQ+yEUfhEPtQXYtkvuI/DcRyfP8mIiuiCgFNDNPiejWGHO/DSdsZWlNJpMzZr4LGczMj8ycZVk2HxJocBBr7W+l1EWTkYgOM/8YEmYwkDzPD4joNxGdlSGY+Q8Rwftfxf/nHmY6RGQGAfEQD0R0LIyyzrkzeD603Jh5niTJ+enpadEXpjeIT+qciI6EMffGmEp08jw/IaKCiD6V7yWi89FoNO4D0wvEQyASB8Kwy9FodBsyzD/zKGGUUlC0y64wnUFqlsqr1vqizbtYilrrx0DejJn5sosIdAKx1l4ppa5F8r4y80mWZVHJ62GwnIx4TydF2xikKIo7qUxKqRef1FEQZcOttYD5KWBmvtZEvy8apEGZAIFIdC5wdYq2iTxHgeR5fkREUCYpr2vK1DVZAeOcu+2qaK0gdcqklLoxxlTypCvE8rkGRbs2xtw0vb8RxHsJ1VrKa2/drzMK0ddao0DKTmCcpul53XO1INbaX9D2gDKlWZZBOrd2eUUDzPdYRQuChJQJPRMzAyJaSfqS1iga5Bnd86xShMt/eGWCvC72EKWrtzJ1hbLWIg9Rt1YXejSpaJWIFEWBduNEfPTeOTcmIuwvUJHRfvTqi9qghNTfEBHqSmV/42G+LSNTAbHWsoRA42etxXpdVGBmnqVp+qXNmD6/yyg45z4rpVACKj2acw57mkW+ShAkN5JclTtSay1uXiWeMaZVtgcGWRjs5Rnd86HP2eNlIV4zCDcrpeblZNoVEDgHy04pBRun5W4iyrO7BLJxHSk/sAfpmCiBZF8l9T4i8ECXpYWeKUmSQ+nBt7e3l7aWfyci4iUSjaYsrGWmxv35u4P4fcuz7JZD65qZizRNs9Bv7w4SavKa8r1uDLQLIKsWh5lfMbQWIChmi87BX9YYIxtU5GSlUSy3IltXLeSG1vq59KHgDrIoihlaDH/fkzFmLZfeG+REa/3QBiIUcA8il9hgvRbmuvuICPfuc6SttyvvEHGvcw5bzMoQYjKZXDAzTquWV1C1ZLsj3+W3uRgGrtQsZiMXlSNNZ4J1TgjB+r5tbZjQ4sgXY4yccK49EgXiDUAEKkOzBgOChQ73e4+jllQOe+repbXOYk60okF8wcP0pA3myTmH+VftULthNFrh2eQkKxpk+QW/zLB+5VHbFIc3Md5bRiZJEhxjY9mU3wUHTDGCkkO4xr6tLdH/ld83jsiugn0YkL+UUvxR7wJsdQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/pages/order/productDetails/productDetails.jsx":
/*!***********************************************************!*\
  !*** ./src/pages/order/productDetails/productDetails.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productDetails_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productDetails.jsx?taro&type=template&parse=PAGE& */ "./src/pages/order/productDetails/productDetails.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _productDetails_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productDetails.jsx?taro&type=script&parse=PAGE& */ "./src/pages/order/productDetails/productDetails.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _productDetails_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _productDetails_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/order/productDetails/productDetails.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************!*\
  !*** ./src/pages/order/productDetails/productDetails.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_productDetails_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./productDetails.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/order/productDetails/productDetails.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_productDetails_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_productDetails_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_productDetails_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_productDetails_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_productDetails_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/order/productDetails/productDetails.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************************!*\
  !*** ./src/pages/order/productDetails/productDetails.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_productDetails_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./productDetails.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/order/productDetails/productDetails.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_productDetails_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_productDetails_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_productDetails_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_productDetails_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/order/productDetails/productDetails.scss":
/*!************************************************************!*\
  !*** ./src/pages/order/productDetails/productDetails.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/order/productDetails/productDetails.jsx","runtime","taro","vendors"]]]);