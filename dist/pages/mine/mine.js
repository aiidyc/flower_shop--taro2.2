(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mine/mine"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mine/mine.jsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/mine/mine.jsx?taro&type=script&parse=PAGE& ***!
  \***********************************************************************************************************************************************/
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

__webpack_require__(/*! ./mine.scss */ "./src/pages/mine/mine.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mine = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Mine, _Taro$Component);

  function Mine() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mine.__proto__ || Object.getPrototypeOf(Mine)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "$compid__160", "$compid__161", "$compid__162", "$compid__163", "$compid__164", "$compid__165", "$compid__166", "$compid__167", "$compid__168", "$compid__169", "$compid__170", "$compid__171"], _this.customComponents = ["AtAvatar", "AtBadge", "AtIcon", "AtList", "AtListItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Mine, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Mine.prototype.__proto__ || Object.getPrototypeOf(Mine.prototype), '_constructor', this).call(this, props);

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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__160"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__160 = _genCompid2[0],
          $compid__160 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__161"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__161 = _genCompid4[0],
          $compid__161 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__162"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__162 = _genCompid6[0],
          $compid__162 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__163"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__163 = _genCompid8[0],
          $compid__163 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__164"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__164 = _genCompid10[0],
          $compid__164 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__165"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__165 = _genCompid12[0],
          $compid__165 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__166"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__166 = _genCompid14[0],
          $compid__166 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__167"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__167 = _genCompid16[0],
          $compid__167 = _genCompid16[1];

      var _genCompid17 = (0, _taroWeapp.genCompid)(__prefix + "$compid__168"),
          _genCompid18 = _slicedToArray(_genCompid17, 2),
          $prevCompid__168 = _genCompid18[0],
          $compid__168 = _genCompid18[1];

      var _genCompid19 = (0, _taroWeapp.genCompid)(__prefix + "$compid__169"),
          _genCompid20 = _slicedToArray(_genCompid19, 2),
          $prevCompid__169 = _genCompid20[0],
          $compid__169 = _genCompid20[1];

      var _genCompid21 = (0, _taroWeapp.genCompid)(__prefix + "$compid__170"),
          _genCompid22 = _slicedToArray(_genCompid21, 2),
          $prevCompid__170 = _genCompid22[0],
          $compid__170 = _genCompid22[1];

      var _genCompid23 = (0, _taroWeapp.genCompid)(__prefix + "$compid__171"),
          _genCompid24 = _slicedToArray(_genCompid23, 2),
          $prevCompid__171 = _genCompid24[0],
          $compid__171 = _genCompid24[1];

      var props = this.__props;
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ color: "#FFFFFF", fontSize: '15px' });
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ color: "#BAE2D5", fontSize: '13px' });

      this.anonymousFunc0 = function () {
        console.log('跳转到订单页面');
        _taroWeapp2.default.navigateTo({ url: '/pages/order/orderTabs/orderTabs' });
      };

      this.anonymousFunc1 = function () {
        console.log('个人信息');
      };

      this.anonymousFunc2 = function () {
        _taroWeapp2.default.navigateTo({ url: '/pages/mine/myAddress/index' });
      };

      this.anonymousFunc3 = function () {
        _taroWeapp2.default.navigateTo({ url: '/pages/mine/myAddress/checkAddress' });
      };

      this.anonymousFunc4 = function () {
        _taroWeapp2.default.navigateTo({ url: '/pages/order/orderConfirm/orderConfirm' });
      };

      this.anonymousFunc5 = function () {
        _taroWeapp2.default.navigateTo({ url: '/pages/order/productDetails/productDetails' });
      };

      _taroWeapp.propsManager.set({
        "className": "mine__header_avatar--img",
        "size": "large",
        "circle": true,
        "text": '\u59AE\u59AEYan_ni'
      }, $compid__160, $prevCompid__160);
      _taroWeapp.propsManager.set({
        "value": 10,
        "maxValue": 99
      }, $compid__161, $prevCompid__161);
      _taroWeapp.propsManager.set({
        "value": "credit-card",
        "size": "35",
        "color": "#54B7A2"
      }, $compid__162, $prevCompid__162);
      _taroWeapp.propsManager.set({
        "value": 10,
        "maxValue": 99
      }, $compid__163, $prevCompid__163);
      _taroWeapp.propsManager.set({
        "value": "shopping-bag-2",
        "size": "35",
        "color": "#54B7A2"
      }, $compid__164, $prevCompid__164);
      _taroWeapp.propsManager.set({
        "value": 10,
        "maxValue": 99
      }, $compid__165, $prevCompid__165);
      _taroWeapp.propsManager.set({
        "value": "shopping-bag",
        "size": "35",
        "color": "#54B7A2"
      }, $compid__166, $prevCompid__166);
      _taroWeapp.propsManager.set({
        "title": '\u4E2A\u4EBA\u4FE1\u606F',
        "arrow": "right",
        "onClick": this.anonymousFunc1
      }, $compid__167, $prevCompid__167);
      _taroWeapp.propsManager.set({
        "title": '\u5730\u5740\u7BA1\u7406',
        "arrow": "right",
        "onClick": this.anonymousFunc2
      }, $compid__168, $prevCompid__168);
      _taroWeapp.propsManager.set({
        "title": '\u5730\u5740\u9009\u62E9',
        "arrow": "right",
        "onClick": this.anonymousFunc3
      }, $compid__169, $prevCompid__169);
      _taroWeapp.propsManager.set({
        "title": '\u8BA2\u5355\u786E\u8BA4',
        "arrow": "right",
        "onClick": this.anonymousFunc4
      }, $compid__170, $prevCompid__170);
      _taroWeapp.propsManager.set({
        "title": '\u5546\u54C1\u8BE6\u60C5',
        "arrow": "right",
        "onClick": this.anonymousFunc5
      }, $compid__171, $prevCompid__171);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        $compid__160: $compid__160,
        $compid__161: $compid__161,
        $compid__162: $compid__162,
        $compid__163: $compid__163,
        $compid__164: $compid__164,
        $compid__165: $compid__165,
        $compid__166: $compid__166,
        $compid__167: $compid__167,
        $compid__168: $compid__168,
        $compid__169: $compid__169,
        $compid__170: $compid__170,
        $compid__171: $compid__171
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
  }, {
    key: 'anonymousFunc3',
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: 'anonymousFunc4',
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: 'anonymousFunc5',
    value: function anonymousFunc5(e) {
      ;
    }
  }]);

  return Mine;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0"], _class.$$componentPath = "pages/mine/mine", _temp2);


Mine.config = { navigationBarTitleText: '我的' };
exports.default = Mine;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Mine, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mine/mine.jsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/mine/mine.jsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/mine/mine.wxml";

/***/ }),

/***/ "./src/pages/mine/mine.jsx":
/*!*********************************!*\
  !*** ./src/pages/mine/mine.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mine_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mine.jsx?taro&type=template&parse=PAGE& */ "./src/pages/mine/mine.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _mine_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mine.jsx?taro&type=script&parse=PAGE& */ "./src/pages/mine/mine.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mine_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mine_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/mine/mine.jsx?taro&type=script&parse=PAGE&":
/*!**************************************************************!*\
  !*** ./src/pages/mine/mine.jsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./mine.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mine/mine.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/mine/mine.jsx?taro&type=template&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/mine/mine.jsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./mine.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mine/mine.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_mine_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/mine/mine.scss":
/*!**********************************!*\
  !*** ./src/pages/mine/mine.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/mine/mine.jsx","runtime","taro","vendors"]]]);