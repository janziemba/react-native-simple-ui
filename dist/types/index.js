"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_ThemeShapeType = exports.bpfrpt_proptype_ThemeType = exports.bpfrpt_proptype_ObjectOfStyleSheetsType = exports.bpfrpt_proptype_ObjectOfStringsType = exports.bpfrpt_proptype_ObjectOfObjectsType = void 0;

var _reactNative = require("react-native");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bpfrpt_proptype_ObjectOfObjectsType = _propTypes.default.objectOf(_propTypes.default.shape({}).isRequired);

exports.bpfrpt_proptype_ObjectOfObjectsType = bpfrpt_proptype_ObjectOfObjectsType;

var bpfrpt_proptype_ObjectOfStringsType = _propTypes.default.objectOf(_propTypes.default.string.isRequired);

exports.bpfrpt_proptype_ObjectOfStringsType = bpfrpt_proptype_ObjectOfStringsType;

var bpfrpt_proptype_ObjectOfStyleSheetsType = _propTypes.default.objectOf(function () {
  return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
});

exports.bpfrpt_proptype_ObjectOfStyleSheetsType = bpfrpt_proptype_ObjectOfStyleSheetsType;
var bpfrpt_proptype_ThemeType = {
  colors: _propTypes.default.shape({
    layout: _propTypes.default.objectOf(_propTypes.default.string.isRequired).isRequired,
    palette: _propTypes.default.objectOf(_propTypes.default.string.isRequired).isRequired,
    text: _propTypes.default.objectOf(_propTypes.default.string.isRequired).isRequired
  }).isRequired,
  components: _propTypes.default.shape({}).isRequired,
  radiuses: _propTypes.default.shape({
    tiny: _propTypes.default.number.isRequired,
    small: _propTypes.default.number.isRequired,
    medium: _propTypes.default.number.isRequired,
    large: _propTypes.default.number.isRequired,
    huge: _propTypes.default.number.isRequired,
    gigantic: _propTypes.default.number.isRequired
  }).isRequired,
  spacing: _propTypes.default.shape({
    tiny: _propTypes.default.number.isRequired,
    small: _propTypes.default.number.isRequired,
    medium: _propTypes.default.number.isRequired,
    large: _propTypes.default.number.isRequired,
    huge: _propTypes.default.number.isRequired,
    gigantic: _propTypes.default.number.isRequired
  }).isRequired,
  typography: _propTypes.default.shape({
    fontFamily: _propTypes.default.string.isRequired,
    fontSizes: _propTypes.default.shape({
      large: _propTypes.default.number.isRequired,
      medium: _propTypes.default.number.isRequired,
      small: _propTypes.default.number.isRequired
    }).isRequired,
    fontWeights: _propTypes.default.shape({
      bold: _propTypes.default.string.isRequired,
      medium: _propTypes.default.string.isRequired,
      normal: _propTypes.default.string.isRequired
    }).isRequired,
    iconSet: _propTypes.default.string.isRequired,
    sizes: _propTypes.default.shape({
      h1: function h1() {
        return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
      },
      h2: function h2() {
        return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
      },
      h3: function h3() {
        return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
      },
      h4: function h4() {
        return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
      },
      h5: function h5() {
        return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
      },
      h6: function h6() {
        return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
      },
      normal: function normal() {
        return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
      },
      small: function small() {
        return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
      }
    }).isRequired
  }).isRequired
};
exports.bpfrpt_proptype_ThemeType = bpfrpt_proptype_ThemeType;

var bpfrpt_proptype_ThemeShapeType = function bpfrpt_proptype_ThemeShapeType() {
  return (typeof $Shape === "function" ? _propTypes.default.instanceOf($Shape) : _propTypes.default.any).apply(this, arguments);
};

exports.bpfrpt_proptype_ThemeShapeType = bpfrpt_proptype_ThemeShapeType;