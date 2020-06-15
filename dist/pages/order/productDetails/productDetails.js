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
    }, _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "$compid__1594", "$compid__1595", "$compid__1596", "home", "cart"], _this.customComponents = ["NewSwiper", "GoodsDetails", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__1594"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__1594 = _genCompid2[0],
          $compid__1594 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__1595"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__1595 = _genCompid4[0],
          $compid__1595 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__1596"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__1596 = _genCompid6[0],
          $compid__1596 = _genCompid6[1];

      var props = this.__props;
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ color: "#D5B67A" });
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ width: '26px', height: '26px', marginBottom: '1px' });
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)({ width: '26px', height: '26px', marginBottom: '1px' });
      var anonymousState__temp4 = { color: '#737373' };
      _taroWeapp.propsManager.set({
        "img": images,
        "height": '100%'
      }, $compid__1594, $prevCompid__1594);
      _taroWeapp.propsManager.set({
        "circle": true,
        "style": anonymousState__temp4
      }, $compid__1595, $prevCompid__1595);
      _taroWeapp.propsManager.set({
        "type": "primary",
        "circle": true
      }, $compid__1596, $prevCompid__1596);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        $compid__1594: $compid__1594,
        $compid__1595: $compid__1595,
        $compid__1596: $compid__1596,
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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAA8tJREFUaEPtWtFR3DAQ3fWn/RFSQaCCcJ/HeiZHBSEVhFQAVBCoAKgglwpyVMAxI3Gfd6kgpALgAz6lzN7YjBCyLPnsw5PBPwzYXu/Trt7uPoFSyn0A+AHWpbW+Q8RJmqZHg8Hgzr7ft99RSql9Tmmtp3me7/bNcdsfBjIFgE8+RxHxy87OzqTPYJCdm81mI9tJpdQYAD4Ufz8houPeA3E5KIQYI+LX4t4VEb0A2ydgy4i4LiklR+B7T5ydJElyPhwOeRs4r0og19fXe1rrXz0BUrrxjYg45V9cvohsA8C8T0C4JGRZtuUqB5VAGIBFzSdJklSGtivASinem08pXsWgXiBCiAUifnxt5rJKhJNB6yLCteNzAeSCiPa6WnmfXSHELSJu8DNa66M8z8/s5+uAmMy1IKLBuoFIKe29OiCiRSyQZ30YEXmBdwHSKgP3RLSMTBQQrvhKqUvjJedqdAGgtCmlZObkqHBa/czznBc3DojNXEmS7PqKUtuAZrPZplLqj2E3vo4YK3LzWj2XPWKkafq+aqSozXmT+nyhbTsaRTY8sabW+nee58sUa5paJnOttXk0aRcAvB14SERehblCabeMTi0Qm7mSJNkaDoe8bzq9Qmk3GMh8Pt94fHy8LV9YF3PF7s3aiBSbjsWHdwWXTxFxHc2jOZFW0m5wRAogtXN9l3kWks6hEeEm7aBLZz22/xLRZt23g4AIIQ4R8dQwdlVnuKX7nNLHribRth8ExGYuX4VtCUC0mVAgz3qePupcQUCKDW/2XIs0TXf7JKXGAHFqxNE50OwFXkRuUZwKCpsMBsIPWzN8M5eav3VDRFtVr0cBKao8r0o5xzd3K/LNus47Ckj5bR54AKCW2yN99T5eN9A1AtKmg23ZagSkSDGu9EwAHBnejOM0Tc9XYTKWaZVSB4hYCua1mm9Ur2WuWjFHsyDhSq2bojuObvOllHxq5hQWAKCdptEEIoS4NFbsRWY0OeEKEczrxoeo1HJMbRcAwHM1K5Amk0XJRpYkeq+1XrbwiMg/l+MDAHiVziggVvP4TCyTUpozi1PWrNrYplhuSqJSSrPrbq+O2F1w2TzaU2SVPrsKkJVVFPPjdmrxfuBpUWs9svZNbGqZsg9HdtmKIOJh+f3WC2LAKXC0ZOSQZl3B8y5O1B5h65xGDw8PHIny3OTpoxz+LMtGTWpJ1T8uFMbbp18DzD4iMlvxGf2V1nqSZdm4CQij9WHRnNNpm4/ZAIAPms5amxDbaiO6tBOdWl06s4rtNyCrrF4X775FpItVXcXmfxORfxwg70KdIWYGAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/tab-bar/home.png":
/*!*************************************!*\
  !*** ./src/assets/tab-bar/home.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAA7lJREFUaEPtmVFS2zAQhnf1xDgP5QZNTwB5DPJMkxM0nIBwgpITlJ4AOEHTEwAnIJ2xyWPoCYAbwAMML/Z2lpEZWZEsxXFKholeJcv7rVb/rtcIH2TgB+GAlYEkSXKAiEcAsKucdSGEOOt2u5NVOG8lIGma/gKAocPgQynluGmYRkFms9n209PTOSL2qgwlotM4jkdNwjQGMp1O23men2uhVNh5SURtRNwxDB9HUTTqdDoPTQA1ApKm6S4RXSHitmHUWxglSTJGxANj/iaKon4TMEuDpGk6JKITA+IRAHpSyhvdcF4LAHx/9HEHAPvm2kVPaSkQh2H3ADBwGXZ9fT0gIr7snwpjiegBEfvLwNQGsSkTEf1ttVo9X6hwKAIAy/AbjIKqrWgLg7AyPT8/c3gM9OMnot+tVuvIB1E8w+KQZdmFRQSOpZQ/VxpaCuLKokxnUkpOfgsNtd8FAHw1FU1KebjIZsEnEqJMi7xYX9uEogWBTKfTXpZlnOh0eX1ExOHe3h57dOmRJMkRIp6Y8iyE2O92u6xslcML4lAmq7z6Xuabt70rVNEqQZIk4fxQiv1QZfIZ7Zq3KZqCGVXVaE4QR+F3GUXRMFSZloHhXGNRNKc8z4G4lInlNY5jV0Vb12bnc6oAndhqNJuilUAqIEZCiDsi2omi6Ox/nAgAfBNC/MmybGip0cYmTAkkTdNjAPihuYkvNavJAxFxZcvjRkrZafwI1IbqJG4LhRRCfMnznO/pd/2dQoi+/pFWAjEk8E2ZTEAppVft6oKy1Od5zkn3dRQGWxSto9dmcwYpmLYQ4rTQ73UAYSgFOUDEiZm/gjy7LiBVp7wBqXsHfM+57ojvuc2J+DxUd35tTkR1UzgXuaoAbtSNXBXtWoBUfLOUDqiqol0LkCRJuCVU2ZwriIhoEsdx3wzBdwdRIXWrGcbdlFJrlIg4memNulJ21pLeXGb33bnGVMv0JCLum9k3xNsha2xQKwMxi7pQb29AfLHH8yG1Vognm1qzCa0PcyJmz0l1VkqddiLiTK5n8zlpVR2SmRYa3DI91UPF3McmGrVDy5IjfFfrXkrZti1K05SbbZ99G6j5Ryml+c/F+miQ/KoLz54rfTe7jLHlkGKt+q1QfP/7eIK788EggTCvzQrfz071/c2OMX8rFGBB++heWAhEJbU2EfGvtuK38+t+QojJ1tbWTWiriLslLy8vu3mel2qzRfcpYBYG8cXCe81vQN7L806BWTeD6tqzCa26nlvVc5sTWZVn6+77DzlS01FzEKd8AAAAAElFTkSuQmCC"

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