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
    }, _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "$compid__147", "$compid__148", "$compid__149", "home", "cart"], _this.customComponents = ["NewSwiper", "GoodsDetails", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__147"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__147 = _genCompid2[0],
          $compid__147 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__148"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__148 = _genCompid4[0],
          $compid__148 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__149"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__149 = _genCompid6[0],
          $compid__149 = _genCompid6[1];

      var props = this.__props;
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ color: "#D5B67A" });

      this.anonymousFunc0 = function () {
        _taroWeapp2.default.switchTab({ url: '/pages/index/index' });
      };

      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ width: '26px', height: '26px', marginBottom: '1px' });

      this.anonymousFunc1 = function () {
        _taroWeapp2.default.switchTab({ url: '/pages/cart/cart' });
      };

      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)({ width: '26px', height: '26px', marginBottom: '1px' });
      var anonymousState__temp4 = { color: '#737373' };

      this.anonymousFunc2 = function () {
        _taroWeapp2.default.navigateTo({ url: '/pages/order/orderConfirm/orderConfirm' });
      };

      _taroWeapp.propsManager.set({
        "img": images,
        "height": '100%'
      }, $compid__147, $prevCompid__147);
      _taroWeapp.propsManager.set({
        "circle": true,
        "style": anonymousState__temp4
      }, $compid__148, $prevCompid__148);
      _taroWeapp.propsManager.set({
        "type": "primary",
        "circle": true,
        "onClick": this.anonymousFunc2
      }, $compid__149, $prevCompid__149);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        $compid__147: $compid__147,
        $compid__148: $compid__148,
        $compid__149: $compid__149,
        home: _home2.default,
        cart: _cart2.default
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(e) {
      ;
    }
  }]);

  return ProduceDetails;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1"], _class.$$componentPath = "pages/order/productDetails/productDetails", _temp2);


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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAA1VJREFUaEPtWottFDEQHVdAqABSAaQCSAVABUAFgQruXQWECrhUAKmASwUkFXBUQKjA6K3GkeN4/Vl2fdYJS5Giy956nmfmzZtxjBzIMgeCQwyAdyLyJQLoVkS+ichHAPy960UgNmPhFsBp1yhEBo9sReRFxtA3AOidbteQIwBeRizciMgT/XwNAN2ioEfGjANAIG/171cjYLvBlgJCD6w6sZRh/VnTIGpSCshrEfnaCRBnxnuNlAdmpYA8F5EfnQFhGTiOlYNkQQyoeS0iZLjWi0Tkh3iUQXNArkXk2b6ZKygRUQbNAWGSvVIglwCYN80XgN8icqQbU2mch0bkgPjMdQ3gpDUKAGGungBgpNxbOSD3dBiA5iJTC/GQI9baP+v12nmmCggT7bv3jehpLOklAGROeoXrQkVuOf26JwPmOk0VpbkBAXgqIj+999bXEQ/Ibl+aK9JiPB5rKbIxH1DfqGvn9gbfp4rbseaNJn50qxIgPnM1FY8B7SYVeAmQvTBXKe0695QACZmLWod5s+gqpd0aIORtVla3mjBXbW5mPULrV6vVrTHmkSLZGmMWF4/WWr8jHaXdYo8oe5T09UuGWjacizyiIu1sSUsT7/6lhTG5fSmQDyLyyXvTVSNQbKSY9w9EYrh/KZCQuUYrbCOA9VpLcyTUPN3NuYo8omB8zUVXk4a7GaXWABmbEbeIJh4iJQpnbdO0lv8tTTrXw7cA4O+xA3A8FxBWeZ6KU6QtwSSVd3FoBZ5h8vOn2co1dJOANLO+YqNJQAAcGWPOrLUkAHpmZ4zZWGs5n53MZDpuooJwtwPZmW+V1oqEFQcSsdAiu5CWq2U+AN6a8WBiax7RGAAhiNh9inus+oZLPZEbmCfbh6rQinRtl3rPyAmkz2RVYyO/9+DsyhgzSHhKea99SE46a4HcicdwWBb0LNGx5ljuBiOnu+8GqnvWOhKq4EE8MvmDLnIJIP82RQnyI5zDDt2itZY54+dNbWj5w3KynpMiPDi35i2IBbfA1SMjvZ/0R7OxKEweTlWO8O0aRmx9Y5rrhp6ZUksS/7jAbeenXw8MOZ9sxTt6dowMj80UEO741TMMJ4YwQ4ztwvlsHWKFUtjbo9WhtTdLMxv/B9KbZw7GI38BEAqJQlh/bCgAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/tab-bar/home.png":
/*!*************************************!*\
  !*** ./src/assets/tab-bar/home.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAA2hJREFUaEPtme1R3DAQhlcVhA6SVACpIKSCQAVABRwV+HUFgQoCFQAVhFSQpAOoIEkFm3kvex5ZJ9uSzh4DY/268ejr2W/tOXklw70SDpkMpK7rE1VdiciBCetORK4APEwhvNFBAOyJyK2IHMYu7JxbVVV1NTbMqCAAKP2vnha67nsN4GxMmNFADOKbiFAj/nhS1T3n3JvgO03tDMCfMYBGAQFwKiJfIhA1/g/C0Tf2g0v/FJFPY8DsDFLX9bmqXkakSmlfb74bDOedBHOpEcIQqnjsBAKA/kBtNENV/zrnDrsuBoAw5xGY410iWhGISZcQR6E/8NuQdM0UuT4cLS3mqCcbxCDo1Jv8sDnvF0Nuqr0DOFLV60gQuARwkQPBuVkgPZHpRkRWqRCe3xyo6kMEhr51kbNfMgglaDkiDK/M1szgRWOsiJYEMoVN+9QGQy18joRn+s1gRBsEAcD80JK4RaZTAExqow0L10XhuRPEpESIrPC6K5WZKc/NimhRkLEiUykUTZlJNgwCzjlUVVXH9t0CscjE6vVdsOCe2smJJKUgXMd7dEW0WMHZAukLr+bwu9wtey0ACpN+GNZorNtYCTQFZwPSE5mYnB6dc/uqegPgMftGBQsY7u1MWgIjWm/B6YP89qtXi0yMVqSmqXHw9/upzctyVutMEYkVnOvqupXZTdJv+dEv/Gxi5QmVleokz1Uv4/NyW2dG7sLsv668fY2wduJHSp3lxtqEnhOI3YcVBi2F92vKopSEGJVOgdknLykR3gKSLN6CiYtG+oRWIp0CJbSWlJw5iY+wQnDOhSX5+rKqej9Uls8OMtRl9MTe+wJ8DiB8y0dbpRFzuwNwHDPDWUGCsiLVTT7EzGxuEJqL/7pjozp8QfKR5s9paiWffG4Q1l8fvXop9tah2dH8NoOOH/bGisqi0aKWFZK5IN8BbPnUS9TIAhJGk8W0Qom8RB/ZajJbRv/hd14AdLWa1BMCH0fMJU0ToaM6iOYbX5gppsWXIy+ZM6Jh1V54bH+GjYS+vZ+sm9J7/iCIHd7KEQlEne/6ggqgeZf3nZsK0vUfYGzvwT9retqi4X5sP7Vatl0wSSBetuamXRvT3pnLkvpelgi5V9jR5HHcg39hJ3drskASTGq2KQvIbKLvOHjRyKKRiSTwDyUCT1Fbbbv4AAAAAElFTkSuQmCC"

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