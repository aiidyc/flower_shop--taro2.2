(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/order/orderConfirm/orderConfirm"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/order/orderConfirm/orderConfirm.jsx?taro&type=script&parse=PAGE&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/order/orderConfirm/orderConfirm.jsx?taro&type=script&parse=PAGE& ***!
  \*********************************************************************************************************************************************************************/
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

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _rightArrow = __webpack_require__(/*! ./../../../assets/right-arrow.png */ "./src/assets/right-arrow.png");

var _rightArrow2 = _interopRequireDefault(_rightArrow);

var _coordinate = __webpack_require__(/*! ./../../../assets/coordinate.png */ "./src/assets/coordinate.png");

var _coordinate2 = _interopRequireDefault(_coordinate);

__webpack_require__(/*! ./OrderConfirm.scss */ "./src/pages/order/orderConfirm/OrderConfirm.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderConfirm = (_temp2 = _class = function (_Taro$Component) {
  _inherits(OrderConfirm, _Taro$Component);

  function OrderConfirm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderConfirm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderConfirm.__proto__ || Object.getPrototypeOf(OrderConfirm)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '确认订单'
    }, _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "$compid__145", "$compid__146", "coordinate", "addressText", "rightArrow", "time"], _this.customComponents = ["OrderItem", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderConfirm, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(OrderConfirm.prototype.__proto__ || Object.getPrototypeOf(OrderConfirm.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__145"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__145 = _genCompid2[0],
          $compid__145 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__146"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__146 = _genCompid4[0],
          $compid__146 = _genCompid4[1];

      var props = this.__props;

      var allAddress = props.cart.allAddress;

      var _useState = (0, _taroWeapp.useState)('选择时间'),
          _useState2 = _slicedToArray(_useState, 2),
          time = _useState2[0],
          setTime = _useState2[1];

      var _useState3 = (0, _taroWeapp.useState)({
        name: '点击选择收货地址',
        phoneNumber: '',
        address: ''
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          addressText = _useState4[0],
          setAddressText = _useState4[1];

      (0, _taroWeapp.useEffect)(function () {
        // 初始化地址
        var index = _this2.$router.params.index;
        if (!index) {
          return;
        }var currentAddress = allAddress[index];
        console.log(currentAddress);
        setAddressText(currentAddress);
      }, []);

      this.anonymousFunc0 = function () {
        _taroWeapp2.default.navigateTo({ url: '/pages/mine/myAddress/checkAddress' });
      };

      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ width: '22px', height: '22px' });
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ width: '22px', height: '22px' });
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)({ color: '#626262', fontSize: '33rpx' });

      this.anonymousFunc1 = function (e) {
        setTime(e.target.value);
      };

      var anonymousState__temp4 = (0, _taroWeapp.internal_inline_style)({ color: '#D7B285', marginRight: '5px', fontSize: '33rpx' });
      _taroWeapp.propsManager.set({
        "orderType": '4'
      }, $compid__145, $prevCompid__145);
      _taroWeapp.propsManager.set({
        "size": "normal",
        "type": "primary",
        "circle": true
      }, $compid__146, $prevCompid__146);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        $compid__145: $compid__145,
        $compid__146: $compid__146,
        coordinate: _coordinate2.default,
        addressText: addressText,
        rightArrow: _rightArrow2.default,
        time: time
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }]);

  return OrderConfirm;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1"], _class.$$componentPath = "pages/order/orderConfirm/orderConfirm", _temp2);


OrderConfirm.config = { navigationBarTitleText: '确认订单' };
var stateP = function stateP(state) {
  return {
    // cart:{cart对象} 赋值给props
    cart: state.cart
  };
};
var OrderConfirm__Connected = (0, _redux.connect)(stateP, null)(OrderConfirm);
exports.default = OrderConfirm__Connected;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(OrderConfirm__Connected, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/order/orderConfirm/orderConfirm.jsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/order/orderConfirm/orderConfirm.jsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/order/orderConfirm/orderConfirm.wxml";

/***/ }),

/***/ "./src/assets/coordinate.png":
/*!***********************************!*\
  !*** ./src/assets/coordinate.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACvklEQVRYR7VXTXYSQRCumkzM0txAXKjMSnICQcGt8QQhJ0hcmsEXfIIuTU4g3gC3gg9yAslqiJuQEyTu/GGmrMbkZQa6a7qJ9mp+qqu+rqqvqhrBYZ0Omuu/ktUdIirzthIArgPQBT+PEHDC37tr/vTobqWpvlkttJGKBu8KXpzsE0A9X54uEPHglvf70AZILoCT/ttNguTD39O6LAYC3vaD6l5X2iUCGPda7wFx18XsgizRi2KtcWDSYQQQfWnXkYBPfvNFCNvBk7Cj06QFEPXelBG9wc1NX2sgSipB7dVwXqcWwLjfYuOoMt24iOCIfw4BqQCEBUR4JAImGBVr4UYugLzTK8MrBLv3n4ajtDK1j/Olw3S8YwKiC8WCB6J+SynZ0ilRxoNaaPSMqhM/Yl/VBD0Iok+ckJtp3QsA2P3nWsoRfCffKwWVlxPJ1d8+t0uJB19NMsVqmLGZeclx/yFvtqIkH4LDgw91ILwENtLhswZgymKdkXG/rXi/ow9jlg3/BUDUazeZFfv/FADkVLQMI8REljzATQfj5FSbQAYez8sqJvyMfdah7x1iEiplTMOJiUb8/Xlec5Hcz637uFhtcBu/XhoamhNI9X6pw+X1D64jr7mONEUAqvcbw3C5k1F3PA879x7vqXIMJ/3WFgGqApMpMpnwGOqIvhkJSSTWe+Gn7vRKXA/AwgsuQAjoLKg2Cro95nlA4LKLcSUrFTF5IhJKqjUITQMSkzD9c8bp6eqEA3Xb2mBa0KKB5Q6ls+6GavBwBMHGPYLy/Nwwf5BcALPitMR8KM2B1iFIC7qAMFHOiQU6YWlaupJnyn1kytVtc8YqBGllfFfo8uz3TGfA1bixEEnoL7vdcHHioeO1lWnZ5jq2VA4s0DP2UyCWM76UB66AzJrWNJmN5jZ0M3nVOQfmmaHeTdcum0T8A5HHWDA1eOAjAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/right-arrow.png":
/*!************************************!*\
  !*** ./src/assets/right-arrow.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA80lEQVRYR+3WwQ3CMAwF0EbKnRnYgFxyZhNgMjoK51zKCKzABMGW2gsCyd/+pRd6pvlPsYudho2ftHH+8AdAN9BaO2vJaq0jq3RmgIQfUkqTBvfeLywECrhJ/o6JMAM0dL4FKgICrIGAAWyEC8BEuAEsRAjAQIQBUQQFEEHQAF4EFTAjRvnLPi2zIue8L6U8vs0OKkCHlYRflzDLzKABPOEKpQC84RRAJDwMiIaHAG/hT2m4oywpd3RTcvUAK9x1A8xwGMAOhwBrhKMA3Yp1H9St2NVwnxoUakJdSvUQT7f/ZBagnyBUAs/hlnegElgORH/zAnnbwiGse7D7AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/pages/order/orderConfirm/OrderConfirm.scss":
/*!********************************************************!*\
  !*** ./src/pages/order/orderConfirm/OrderConfirm.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/order/orderConfirm/orderConfirm.jsx":
/*!*******************************************************!*\
  !*** ./src/pages/order/orderConfirm/orderConfirm.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orderConfirm_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderConfirm.jsx?taro&type=template&parse=PAGE& */ "./src/pages/order/orderConfirm/orderConfirm.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _orderConfirm_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderConfirm.jsx?taro&type=script&parse=PAGE& */ "./src/pages/order/orderConfirm/orderConfirm.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _orderConfirm_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _orderConfirm_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/order/orderConfirm/orderConfirm.jsx?taro&type=script&parse=PAGE&":
/*!************************************************************************************!*\
  !*** ./src/pages/order/orderConfirm/orderConfirm.jsx?taro&type=script&parse=PAGE& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderConfirm_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./orderConfirm.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/order/orderConfirm/orderConfirm.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderConfirm_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderConfirm_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderConfirm_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderConfirm_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderConfirm_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/order/orderConfirm/orderConfirm.jsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************************!*\
  !*** ./src/pages/order/orderConfirm/orderConfirm.jsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderConfirm_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./orderConfirm.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/order/orderConfirm/orderConfirm.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderConfirm_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderConfirm_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderConfirm_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderConfirm_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/order/orderConfirm/orderConfirm.jsx","runtime","taro","vendors"]]]);