"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ICON_SETS = exports.COLORS = void 0;

var _AntDesign = _interopRequireDefault(require("react-native-vector-icons/AntDesign"));

var _Entypo = _interopRequireDefault(require("react-native-vector-icons/Entypo"));

var _EvilIcons = _interopRequireDefault(require("react-native-vector-icons/EvilIcons"));

var _Feather = _interopRequireDefault(require("react-native-vector-icons/Feather"));

var _FontAwesome = _interopRequireDefault(require("react-native-vector-icons/FontAwesome"));

var _Foundation = _interopRequireDefault(require("react-native-vector-icons/Foundation"));

var _Ionicons = _interopRequireDefault(require("react-native-vector-icons/Ionicons"));

var _MaterialCommunityIcons = _interopRequireDefault(require("react-native-vector-icons/MaterialCommunityIcons"));

var _MaterialIcons = _interopRequireDefault(require("react-native-vector-icons/MaterialIcons"));

var _Octicons = _interopRequireDefault(require("react-native-vector-icons/Octicons"));

var _SimpleLineIcons = _interopRequireDefault(require("react-native-vector-icons/SimpleLineIcons"));

var _Zocial = _interopRequireDefault(require("react-native-vector-icons/Zocial"));

var _colors = _interopRequireDefault(require("../../themes/base/colors"));

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var COLORS = _objectSpread({}, _colors.default.palette, {
  black: 'black',
  white: 'white'
});

exports.COLORS = COLORS;
var ICON_SETS = {
  AntDesign: _AntDesign.default,
  Entypo: _Entypo.default,
  EvilIcons: _EvilIcons.default,
  Feather: _Feather.default,
  FontAwesome: _FontAwesome.default,
  Foundation: _Foundation.default,
  Ionicons: _Ionicons.default,
  MaterialCommunityIcons: _MaterialCommunityIcons.default,
  MaterialIcons: _MaterialIcons.default,
  Octicons: _Octicons.default,
  SimpleLineIcons: _SimpleLineIcons.default,
  Zocial: _Zocial.default
};
exports.ICON_SETS = ICON_SETS;