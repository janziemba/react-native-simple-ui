"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_StylesType = exports.default = void 0;

var _reactNative = require("react-native");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _constants = require("./constants");

var _types = require("../../types");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bpfrpt_proptype_StylesType = {
  base: function base() {
    return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
  },
  colors: function colors() {
    return (typeof _types.bpfrpt_proptype_ObjectOfStyleSheetsType === "function" ? _types.bpfrpt_proptype_ObjectOfStyleSheetsType.isRequired ? _types.bpfrpt_proptype_ObjectOfStyleSheetsType.isRequired : _types.bpfrpt_proptype_ObjectOfStyleSheetsType : _propTypes.default.shape(_types.bpfrpt_proptype_ObjectOfStyleSheetsType).isRequired).apply(this, arguments);
  },
  sizes: function sizes() {
    return (typeof _types.bpfrpt_proptype_ObjectOfStyleSheetsType === "function" ? _types.bpfrpt_proptype_ObjectOfStyleSheetsType.isRequired ? _types.bpfrpt_proptype_ObjectOfStyleSheetsType.isRequired : _types.bpfrpt_proptype_ObjectOfStyleSheetsType : _propTypes.default.shape(_types.bpfrpt_proptype_ObjectOfStyleSheetsType).isRequired).apply(this, arguments);
  }
};
exports.bpfrpt_proptype_StylesType = bpfrpt_proptype_StylesType;

var _default = function _default(_ref) {
  var _sizes;

  var colors = _ref.colors,
      spacing = _ref.spacing,
      typography = _ref.typography;
  var allColors = (0, _merge.default)({}, _constants.COLORS, colors.palette);
  var colorOptions = {};
  Object.keys(allColors).forEach(function (colorName) {
    var color = allColors[colorName];
    colorOptions[colorName] = {
      color: color
    };
  });
  return {
    base: {
      color: colors.text.primary,
      fontFamily: typography.fontFamily,
      textAlign: 'center'
    },
    colors: colorOptions,
    sizes: (_sizes = {}, _defineProperty(_sizes, _constants.SIZES.h1, _objectSpread({}, typography.sizes.h1, {
      marginBottom: spacing.medium
    })), _defineProperty(_sizes, _constants.SIZES.h2, _objectSpread({}, typography.sizes.h2, {
      marginBottom: spacing.medium
    })), _defineProperty(_sizes, _constants.SIZES.h3, _objectSpread({}, typography.sizes.h3, {
      marginBottom: spacing.medium
    })), _defineProperty(_sizes, _constants.SIZES.h4, _objectSpread({}, typography.sizes.h4, {
      marginBottom: spacing.medium
    })), _defineProperty(_sizes, _constants.SIZES.h5, _objectSpread({}, typography.sizes.h5, {
      marginBottom: spacing.small
    })), _defineProperty(_sizes, _constants.SIZES.h6, _objectSpread({}, typography.sizes.h6, {
      marginBottom: spacing.small
    })), _defineProperty(_sizes, _constants.SIZES.normal, _objectSpread({}, typography.sizes.normal)), _defineProperty(_sizes, _constants.SIZES.small, _objectSpread({}, typography.sizes.small)), _sizes)
  };
};

exports.default = _default;