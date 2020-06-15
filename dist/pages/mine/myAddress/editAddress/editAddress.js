(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mine/myAddress/editAddress/editAddress"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mine/myAddress/editAddress/editAddress.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/mine/myAddress/editAddress/editAddress.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./editAddress.scss */ "./src/pages/mine/myAddress/editAddress/editAddress.scss");

var _reducersType = __webpack_require__(/*! ../../../../reducers/reducersType */ "./src/reducers/reducersType.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditAddress = (_temp2 = _class = function (_Taro$Component) {
  _inherits(EditAddress, _Taro$Component);

  function EditAddress() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditAddress);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditAddress.__proto__ || Object.getPrototypeOf(EditAddress)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '地址编辑'
      // 获取全局状态变量和方法 放入props
    }, _this.$usedState = ["$compid__1528", "$compid__1529", "$compid__1530", "$compid__1531", "$compid__1532", "$compid__1533"], _this.customComponents = ["AtInput", "AtSwitch", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditAddress, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(EditAddress.prototype.__proto__ || Object.getPrototypeOf(EditAddress.prototype), "_constructor", this).call(this, props);

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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__1528"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__1528 = _genCompid2[0],
          $compid__1528 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__1529"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__1529 = _genCompid4[0],
          $compid__1529 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__1530"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__1530 = _genCompid6[0],
          $compid__1530 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__1531"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__1531 = _genCompid8[0],
          $compid__1531 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__1532"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__1532 = _genCompid10[0],
          $compid__1532 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__1533"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__1533 = _genCompid12[0],
          $compid__1533 = _genCompid12[1];

      var props = this.__props;

      var allAddress = props.cart.allAddress,
          editAddressP = props.editAddressP;

      var _useState = (0, _taroWeapp.useState)(null),
          _useState2 = _slicedToArray(_useState, 2),
          addressIndex = _useState2[0],
          setAddressIndex = _useState2[1];

      var _useState3 = (0, _taroWeapp.useState)({
        id: '1',
        name: '',
        phoneNumber: '',
        address: '',
        default: false
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          form = _useState4[0],
          setForm = _useState4[1];

      (0, _taroWeapp.useEffect)(function () {
        // 初始化地址
        var index = _this2.$router.params.index;
        if (!index) {
          return;
        }var currentAddress = allAddress[index];
        setAddressIndex(index);
        setForm(currentAddress);
      }, []);
      function handleChange(value, e) {
        var obj = _extends({}, form, _defineProperty({}, e.target.id, value));
        setForm(obj);
      }
      this.anonymousFunc0 = handleChange;
      this.anonymousFunc1 = handleChange;
      this.anonymousFunc2 = handleChange;

      this.anonymousFunc3 = function (value) {
        var obj = _extends({}, form, { default: value });
        setForm(obj);
      };

      this.anonymousFunc4 = function () {
        // 派遣保存
        editAddressP(form, addressIndex);
        _taroWeapp2.default.navigateBack();
      };

      _taroWeapp.propsManager.set({
        "required": true,
        "name": "name",
        "title": "\u59D3\u540D",
        "type": "text",
        "placeholder": "\u8BF7\u8F93\u5165\u59D3\u540D",
        "value": form.name,
        "onChange": this.anonymousFunc0
      }, $compid__1528, $prevCompid__1528);
      _taroWeapp.propsManager.set({
        "required": true,
        "name": "phoneNumber",
        "title": "\u7535\u8BDD",
        "type": "number",
        "placeholder": "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
        "value": form.phoneNumber,
        "onChange": this.anonymousFunc1
      }, $compid__1529, $prevCompid__1529);
      _taroWeapp.propsManager.set({
        "required": true,
        "name": "address",
        "title": "\u5730\u5740",
        "type": "text",
        "placeholder": "\u8BF7\u8F93\u5165\u6536\u8D27\u5730\u5740",
        "value": form.address,
        "onChange": this.anonymousFunc2
      }, $compid__1530, $prevCompid__1530);
      _taroWeapp.propsManager.set({
        "title": "\u8BBE\u4E3A\u9ED8\u8BA4\u5730\u5740",
        "checked": form.default,
        "onChange": this.anonymousFunc3
      }, $compid__1531, $prevCompid__1531);
      _taroWeapp.propsManager.set({
        "type": "primary",
        "onClick": this.anonymousFunc4
      }, $compid__1532, $prevCompid__1532);
      _taroWeapp.propsManager.set({
        "type": "secondary"
      }, $compid__1533, $prevCompid__1533);
      Object.assign(this.__state, {
        $compid__1528: $compid__1528,
        $compid__1529: $compid__1529,
        $compid__1530: $compid__1530,
        $compid__1531: $compid__1531,
        $compid__1532: $compid__1532,
        $compid__1533: $compid__1533
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
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }]);

  return EditAddress;
}(_taroWeapp2.default.Component), _class.$$events = [], _class.$$componentPath = "pages/mine/myAddress/editAddress/editAddress", _temp2);


EditAddress.config = { navigationBarTitleText: '地址编辑' };var stateP = function stateP(state) {
  return {
    // cart:{cart对象} 赋值给props
    cart: state.cart
  };
};
var dispatchP = function dispatchP(dispatch) {
  return {
    editAddressP: function editAddressP(data, index) {
      dispatch({ type: _reducersType.ADDRESS.EDIT, data: data, index: index });
    }
  };
};
var EditAddress__Connected = (0, _redux.connect)(stateP, dispatchP)(EditAddress);
exports.default = EditAddress__Connected;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(EditAddress__Connected, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mine/myAddress/editAddress/editAddress.jsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/mine/myAddress/editAddress/editAddress.jsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/mine/myAddress/editAddress/editAddress.wxml";

/***/ }),

/***/ "./src/pages/mine/myAddress/editAddress/editAddress.jsx":
/*!**************************************************************!*\
  !*** ./src/pages/mine/myAddress/editAddress/editAddress.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editAddress_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editAddress.jsx?taro&type=template&parse=PAGE& */ "./src/pages/mine/myAddress/editAddress/editAddress.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _editAddress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editAddress.jsx?taro&type=script&parse=PAGE& */ "./src/pages/mine/myAddress/editAddress/editAddress.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _editAddress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _editAddress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/mine/myAddress/editAddress/editAddress.jsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************************************!*\
  !*** ./src/pages/mine/myAddress/editAddress/editAddress.jsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAddress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./editAddress.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mine/myAddress/editAddress/editAddress.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAddress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAddress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAddress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAddress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAddress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/mine/myAddress/editAddress/editAddress.jsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************************!*\
  !*** ./src/pages/mine/myAddress/editAddress/editAddress.jsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAddress_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!../../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./editAddress.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/yuancong/Desktop/我的文件/yuancong1/线上文件/2020慧为Git/慧为小程序/鲜花/flower_shop/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mine/myAddress/editAddress/editAddress.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAddress_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAddress_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAddress_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_yuancong_Desktop_yuancong1_2020_Git_flower_shop_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAddress_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/mine/myAddress/editAddress/editAddress.scss":
/*!***************************************************************!*\
  !*** ./src/pages/mine/myAddress/editAddress/editAddress.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/mine/myAddress/editAddress/editAddress.jsx","runtime","taro","vendors","common"]]]);