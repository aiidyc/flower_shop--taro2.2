(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mine/myAddress/checkAddress"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mine/myAddress/checkAddress.jsx?taro&type=script&parse=PAGE&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/mine/myAddress/checkAddress.jsx?taro&type=script&parse=PAGE& ***!
  \*****************************************************************************************************************************************************************/
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

__webpack_require__(/*! ./checkAddress.scss */ "./src/pages/mine/myAddress/checkAddress.scss");

var _reducersType = __webpack_require__(/*! ../../../reducers/reducersType */ "./src/reducers/reducersType.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckAddress = (_temp2 = _class = function (_Taro$Component) {
  _inherits(CheckAddress, _Taro$Component);

  function CheckAddress() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CheckAddress);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CheckAddress.__proto__ || Object.getPrototypeOf(CheckAddress)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '选择地址'
      // 获取全局状态变量和方法 放入props
    }, _this.$usedState = ["loopArray82", "allAddress"], _this.anonymousFunc1Map = {}, _this.customComponents = ["CheckAddressItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CheckAddress, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(CheckAddress.prototype.__proto__ || Object.getPrototypeOf(CheckAddress.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var props = this.__props;

      var _props$cart = props.cart,
          allAddress = _props$cart.allAddress,
          checkedAddress = _props$cart.checkedAddress,
          checkAddress = props.checkAddress;

      var checkedIndex = checkedAddress.index;

      this.anonymousFunc0 = function () {
        _taroWeapp2.default.navigateTo({ url: '/pages/mine/myAddress/editAddress/editAddress' });
      };

      var loopArray82 = allAddress.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "beazz" + index;

        _this2.anonymousFunc1Map[_$indexKey] = function () {
          console.log(item.$original, index);
          var checkData = {
            index: index,
            data: item.$original
          };
          checkAddress(checkData);
          _taroWeapp2.default.navigateTo({ url: '/pages/order/orderConfirm/orderConfirm?index=' + index });
        };

        var $loopState__temp2 = index === checkedIndex;

        var _genCompid = (0, _taroWeapp.genCompid)(__prefix + 'bebzzzzzzz' + index, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__1574 = _genCompid2[0],
            $compid__1574 = _genCompid2[1];

        _taroWeapp.propsManager.set({
          "addressData": item.$original,
          "checked": $loopState__temp2
        }, $compid__1574, $prevCompid__1574);
        return {
          _$indexKey: _$indexKey,
          $loopState__temp2: $loopState__temp2,
          $compid__1574: $compid__1574,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        loopArray82: loopArray82,
        allAddress: allAddress
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
    value: function anonymousFunc1(_$indexKey) {
      var _anonymousFunc1Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc1Map[_$indexKey] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey].apply(_anonymousFunc1Map, e);
    }
  }]);

  return CheckAddress;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1"], _class.$$componentPath = "pages/mine/myAddress/checkAddress", _temp2);


CheckAddress.config = { navigationBarTitleText: '选择地址' };var stateP = function stateP(state) {
  return {
    // cart:{cart对象} 赋值给props
    cart: state.cart
  };
};
var dispatchP = function dispatchP(dispatch) {
  return {
    checkAddress: function checkAddress(item) {
      dispatch({ type: _reducersType.ADDRESS.CHECK, data: item });
    }
  };
};
var CheckAddress__Connected = (0, _redux.connect)(stateP, dispatchP)(CheckAddress);
exports.default = CheckAddress__Connected;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(CheckAddress__Connected, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mine/myAddress/checkAddress.jsx?taro&type=template&parse=PAGE&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/mine/myAddress/checkAddress.jsx?taro&type=template&parse=PAGE& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/mine/myAddress/checkAddress.wxml";

/***/ }),

/***/ "./src/pages/mine/myAddress/checkAddress.jsx":
/*!***************************************************!*\
  !*** ./src/pages/mine/myAddress/checkAddress.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkAddress_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkAddress.jsx?taro&type=template&parse=PAGE& */ "./src/pages/mine/myAddress/checkAddress.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _checkAddress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkAddress.jsx?taro&type=script&parse=PAGE& */ "./src/pages/mine/myAddress/checkAddress.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _checkAddress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _checkAddress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/mine/myAddress/checkAddress.jsx?taro&type=script&parse=PAGE&":
/*!********************************************************************************!*\
  !*** ./src/pages/mine/myAddress/checkAddress.jsx?taro&type=script&parse=PAGE& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_checkAddress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./checkAddress.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mine/myAddress/checkAddress.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_checkAddress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_checkAddress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_checkAddress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_checkAddress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_checkAddress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/mine/myAddress/checkAddress.jsx?taro&type=template&parse=PAGE&":
/*!**********************************************************************************!*\
  !*** ./src/pages/mine/myAddress/checkAddress.jsx?taro&type=template&parse=PAGE& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_checkAddress_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./checkAddress.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mine/myAddress/checkAddress.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_checkAddress_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_checkAddress_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_checkAddress_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_checkAddress_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/mine/myAddress/checkAddress.scss":
/*!****************************************************!*\
  !*** ./src/pages/mine/myAddress/checkAddress.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/mine/myAddress/checkAddress.jsx","runtime","taro","vendors","common"]]]);