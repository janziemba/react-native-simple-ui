"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_StylesType = exports.default = void 0;

var _reactNative = require("react-native");

var _types = require("../../types");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bpfrpt_proptype_StylesType = {
  base: function base() {
    return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
  }
};
exports.bpfrpt_proptype_StylesType = bpfrpt_proptype_StylesType;

var _default = function _default(_ref) {
  var colors = _ref.colors,
      radiuses = _ref.radiuses;
  return {
    base: {
      container: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: colors.palette.dark,
        borderRadius: radiuses.tiny,
        borderWidth: _reactNative.StyleSheet.hairlineWidth,
        flex: 1,
        justifyContent: 'center'
      }
    }
  };
};

exports.default = _default;