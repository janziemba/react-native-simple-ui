"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VARIANTS = exports.STATES = exports.SIZES = exports.ROUNDING = exports.ICON_POSITIONS = exports.COLORS = void 0;

var _colors = _interopRequireDefault(require("../../themes/base/colors"));

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var COLORS = _objectSpread({}, _colors.default.palette, {
  white: 'white'
});

exports.COLORS = COLORS;
var ICON_POSITIONS = {
  bottom: 'bottom',
  left: 'left',
  right: 'right',
  top: 'top'
};
exports.ICON_POSITIONS = ICON_POSITIONS;
var ROUNDING = {
  normal: 'normal',
  rounded: 'rounded',
  sharp: 'sharp'
};
exports.ROUNDING = ROUNDING;
var SIZES = {
  large: 'large',
  medium: 'medium',
  small: 'small'
};
exports.SIZES = SIZES;
var STATES = {
  active: 'active',
  disabled: 'disabled',
  inactive: 'inactive'
};
exports.STATES = STATES;
var VARIANTS = {
  default: 'default',
  flat: 'flat',
  outlined: 'outlined'
};
exports.VARIANTS = VARIANTS;