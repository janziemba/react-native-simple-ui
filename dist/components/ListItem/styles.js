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

var bpfrpt_proptype_StylesType = {
  base: _propTypes.default.shape({
    centerElement: function centerElement() {
      return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
    },
    innerContainer: function innerContainer() {
      return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
    },
    leftElement: function leftElement() {
      return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
    },
    rightElement: function rightElement() {
      return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
    }
  }).isRequired,
  colors: function colors() {
    return (typeof _types.bpfrpt_proptype_ObjectOfStyleSheetsType === "function" ? _types.bpfrpt_proptype_ObjectOfStyleSheetsType.isRequired ? _types.bpfrpt_proptype_ObjectOfStyleSheetsType.isRequired : _types.bpfrpt_proptype_ObjectOfStyleSheetsType : _propTypes.default.shape(_types.bpfrpt_proptype_ObjectOfStyleSheetsType).isRequired).apply(this, arguments);
  }
};
exports.bpfrpt_proptype_StylesType = bpfrpt_proptype_StylesType;

var _default = function _default(_ref) {
  var colors = _ref.colors;
  var allColors = (0, _merge.default)({}, _constants.COLORS, colors.palette);
  var colorOptions = {};
  Object.keys(allColors).forEach(function (colorName) {
    var color = colors.palette[colorName] || colorName;
    colorOptions[colorName] = {
      outerContainer: {
        backgroundColor: color
      }
    };
  });
  return {
    base: {
      centerElement: {
        alignment: {
          center: {
            justifyContent: 'center'
          },
          left: {
            justifyContent: 'flex-start'
          },
          right: {
            justifyContent: 'flex-end'
          }
        },
        base: {
          flexDirection: 'row'
        }
      },
      innerContainer: {
        base: {
          alignItems: 'center',
          height: 56,
          justifyContent: 'center'
        }
      },
      leftElement: {
        alignment: {
          center: {
            justifyContent: 'center'
          },
          left: {
            justifyContent: 'flex-start'
          },
          right: {
            justifyContent: 'flex-end'
          }
        },
        base: {
          flexDirection: 'row'
        }
      },
      rightElement: {
        alignment: {
          center: {
            justifyContent: 'center'
          },
          left: {
            justifyContent: 'flex-start'
          },
          right: {
            justifyContent: 'flex-end'
          }
        },
        base: {
          flexDirection: 'row'
        }
      }
    },
    colors: colorOptions
  };
};

exports.default = _default;