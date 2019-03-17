"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_StylesType = exports.default = void 0;

var _reactNative = require("react-native");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bpfrpt_proptype_StylesType = {
  alignment: _propTypes.default.shape({
    center: function center() {
      return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
    },
    right: function right() {
      return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
    }
  }).isRequired,
  base: function base() {
    return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
  }
};
exports.bpfrpt_proptype_StylesType = bpfrpt_proptype_StylesType;

var _default = function _default() {
  return {
    alignment: {
      center: {
        alignItems: 'center',
        justifyContent: 'center'
      },
      right: {
        alignItems: 'flex-end'
      }
    },
    base: {
      flex: 1
    }
  };
};

exports.default = _default;