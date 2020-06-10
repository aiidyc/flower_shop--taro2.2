(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["compoents/order-item/order-item"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/compoents/order-item/order-item.jsx?taro&type=script&parse=COMPONENT&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/compoents/order-item/order-item.jsx?taro&type=script&parse=COMPONENT& ***!
  \********************************************************************************************************************************************************************/
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

__webpack_require__(/*! ./order-item.scss */ "./src/compoents/order-item/order-item.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderItem = (_temp2 = _class = function (_Taro$Component) {
  _inherits(OrderItem, _Taro$Component);

  function OrderItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderItem.__proto__ || Object.getPrototypeOf(OrderItem)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "loopArray8", "$compid__142", "$compid__143", "$compid__144", "$compid__145", "$compid__146", "orderList", "orderType", "orderData"], _this.customComponents = ["GoodsOne", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderItem, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(OrderItem.prototype.__proto__ || Object.getPrototypeOf(OrderItem.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__142"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__142 = _genCompid2[0],
          $compid__142 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__143"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__143 = _genCompid4[0],
          $compid__143 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__144"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__144 = _genCompid6[0],
          $compid__144 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__145"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__145 = _genCompid8[0],
          $compid__145 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__146"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__146 = _genCompid10[0],
          $compid__146 = _genCompid10[1];

      var _props = this.__props,
          orderData = _props.orderData,
          orderType = _props.orderType;


      var orderList = orderData.orderList;
      var anonymousState__temp = orderType === '1' ? (0, _taroWeapp.internal_inline_style)({ marginRight: '10rpx' }) : null;
      var anonymousState__temp2 = orderType === '3' ? (0, _taroWeapp.internal_inline_style)({ marginRight: '10rpx' }) : null;
      var loopArray8 = orderList.map(function (item, _anonIdx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "hzzzzzzzzz" + _anonIdx, true),
            _genCompid12 = _slicedToArray(_genCompid11, 2),
            $prevCompid__141 = _genCompid12[0],
            $compid__141 = _genCompid12[1];

        _taroWeapp.propsManager.set({
          "goodsData": item.$original,
          "buttonType": '3'
        }, $compid__141, $prevCompid__141);
        return {
          $compid__141: $compid__141,
          $original: item.$original
        };
      });
      orderType === '1' && _taroWeapp.propsManager.set({
        "type": "primary",
        "circle": true,
        "size": "small"
      }, $compid__142, $prevCompid__142);
      orderType === '1' && _taroWeapp.propsManager.set({
        "type": "primary",
        "circle": true,
        "size": "small",
        "full": false
      }, $compid__143, $prevCompid__143);
      !(orderType === '1') && orderType === '2' && _taroWeapp.propsManager.set({
        "type": "primary",
        "circle": true,
        "size": "small",
        "full": false
      }, $compid__144, $prevCompid__144);
      !(orderType === '1') && !(orderType === '2') && orderType === '3' && _taroWeapp.propsManager.set({
        "type": "primary",
        "circle": true,
        "size": "small"
      }, $compid__145, $prevCompid__145);
      !(orderType === '1') && !(orderType === '2') && orderType === '3' && _taroWeapp.propsManager.set({
        "type": "primary",
        "circle": true,
        "size": "small",
        "full": false
      }, $compid__146, $prevCompid__146);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loopArray8: loopArray8,
        $compid__142: $compid__142,
        $compid__143: $compid__143,
        $compid__144: $compid__144,
        $compid__145: $compid__145,
        $compid__146: $compid__146,
        orderList: orderList,
        orderType: orderType,
        orderData: orderData
      });
      return this.__state;
    }
  }]);

  return OrderItem;
}(_taroWeapp2.default.Component), _class.$$events = [], _class.$$componentPath = "compoents/order-item/order-item", _temp2);


OrderItem.defaultProps = {
  orderData: {
    orderPrice: 188,
    orderList: [{
      url: 'https://s1.ax1x.com/2020/06/04/t0T8Rf.png',
      id: '1',
      title: '超大花束洋桔梗',
      subTitle: '洋桔梗的花语是永恒的爱，无悔，无望的爱',
      oldPrice: '¥288',
      price: '¥188',
      GoodsNum: 2
    }, {
      url: 'https://s1.ax1x.com/2020/06/04/t0T8Rf.png',
      id: '2',
      title: '超大花束洋桔梗',
      subTitle: '洋桔梗的花语是永恒的爱，无悔，无望的爱',
      oldPrice: '¥288',
      price: '¥188',
      GoodsNum: 1
    }, {
      url: 'https://s1.ax1x.com/2020/06/04/t0T8Rf.png',
      id: '3',
      title: '超大花束洋桔梗',
      subTitle: '洋桔梗的花语是永恒的爱，无悔，无望的爱',
      oldPrice: '¥288',
      price: '¥188',
      GoodsNum: 3
    }]
  },
  orderType: '1' // 1待付款 2代发货 3待收货 // 4去掉按钮
};
exports.default = OrderItem;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(OrderItem));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/compoents/order-item/order-item.jsx?taro&type=template&parse=COMPONENT&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/compoents/order-item/order-item.jsx?taro&type=template&parse=COMPONENT& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "compoents/order-item/order-item.wxml";

/***/ }),

/***/ "./src/compoents/order-item/order-item.jsx":
/*!*************************************************!*\
  !*** ./src/compoents/order-item/order-item.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_item_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-item.jsx?taro&type=template&parse=COMPONENT& */ "./src/compoents/order-item/order-item.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _order_item_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-item.jsx?taro&type=script&parse=COMPONENT& */ "./src/compoents/order-item/order-item.jsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_item_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_item_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/compoents/order-item/order-item.jsx?taro&type=script&parse=COMPONENT&":
/*!***********************************************************************************!*\
  !*** ./src/compoents/order-item/order-item.jsx?taro&type=script&parse=COMPONENT& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_item_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./order-item.jsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/compoents/order-item/order-item.jsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_item_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_item_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_item_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_item_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_item_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/compoents/order-item/order-item.jsx?taro&type=template&parse=COMPONENT&":
/*!*************************************************************************************!*\
  !*** ./src/compoents/order-item/order-item.jsx?taro&type=template&parse=COMPONENT& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_item_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./order-item.jsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/compoents/order-item/order-item.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_item_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_item_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_item_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_item_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/compoents/order-item/order-item.scss":
/*!**************************************************!*\
  !*** ./src/compoents/order-item/order-item.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/compoents/order-item/order-item.jsx","runtime","taro","vendors"]]]);