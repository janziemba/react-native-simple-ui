"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_StylesType = exports.default = void 0;

var _reactNative = require("react-native");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _darkenOrLighten = _interopRequireDefault(require("../../utils/darkenOrLighten"));

var _constants = require("./constants");

var _types = require("../../types");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bpfrpt_proptype_StylesType = {
  base: _propTypes.default.shape({
    container: function container() {
      return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
    },
    text: function text() {
      return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
    },
    touchable: function touchable() {
      return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
    }
  }).isRequired,
  colors: function colors() {
    return (typeof _types.bpfrpt_proptype_ObjectOfObjectsType === "function" ? _types.bpfrpt_proptype_ObjectOfObjectsType.isRequired ? _types.bpfrpt_proptype_ObjectOfObjectsType.isRequired : _types.bpfrpt_proptype_ObjectOfObjectsType : _propTypes.default.shape(_types.bpfrpt_proptype_ObjectOfObjectsType).isRequired).apply(this, arguments);
  },
  iconPositions: function iconPositions() {
    return (typeof _types.bpfrpt_proptype_ObjectOfObjectsType === "function" ? _types.bpfrpt_proptype_ObjectOfObjectsType.isRequired ? _types.bpfrpt_proptype_ObjectOfObjectsType.isRequired : _types.bpfrpt_proptype_ObjectOfObjectsType : _propTypes.default.shape(_types.bpfrpt_proptype_ObjectOfObjectsType).isRequired).apply(this, arguments);
  },
  rounding: function rounding() {
    return (typeof _types.bpfrpt_proptype_ObjectOfObjectsType === "function" ? _types.bpfrpt_proptype_ObjectOfObjectsType.isRequired ? _types.bpfrpt_proptype_ObjectOfObjectsType.isRequired : _types.bpfrpt_proptype_ObjectOfObjectsType : _propTypes.default.shape(_types.bpfrpt_proptype_ObjectOfObjectsType).isRequired).apply(this, arguments);
  },
  sizes: function sizes() {
    return (typeof _types.bpfrpt_proptype_ObjectOfObjectsType === "function" ? _types.bpfrpt_proptype_ObjectOfObjectsType.isRequired ? _types.bpfrpt_proptype_ObjectOfObjectsType.isRequired : _types.bpfrpt_proptype_ObjectOfObjectsType : _propTypes.default.shape(_types.bpfrpt_proptype_ObjectOfObjectsType).isRequired).apply(this, arguments);
  },
  variants: function variants() {
    return (typeof _types.bpfrpt_proptype_ObjectOfObjectsType === "function" ? _types.bpfrpt_proptype_ObjectOfObjectsType.isRequired ? _types.bpfrpt_proptype_ObjectOfObjectsType.isRequired : _types.bpfrpt_proptype_ObjectOfObjectsType : _propTypes.default.shape(_types.bpfrpt_proptype_ObjectOfObjectsType).isRequired).apply(this, arguments);
  }
};
exports.bpfrpt_proptype_StylesType = bpfrpt_proptype_StylesType;

var _default = function _default(_ref) {
  var _iconPositions, _rounding, _sizes, _variants;

  var colors = _ref.colors,
      radiuses = _ref.radiuses,
      spacing = _ref.spacing,
      typography = _ref.typography;
  var allColors = (0, _merge.default)({}, _constants.COLORS, colors.palette);
  var colorOptions = {};
  Object.keys(allColors).forEach(function (colorName) {
    var _colorOptions$colorNa;

    var color = colors.palette[colorName] || colorName;
    colorOptions[colorName] = (_colorOptions$colorNa = {}, _defineProperty(_colorOptions$colorNa, _constants.STATES.active, {
      container: {
        backgroundColor: (0, _darkenOrLighten.default)(color),
        borderColor: (0, _darkenOrLighten.default)(color)
      },
      text: {
        color: (0, _darkenOrLighten.default)(color)
      }
    }), _defineProperty(_colorOptions$colorNa, _constants.STATES.disabled, {
      container: {
        backgroundColor: (0, _darkenOrLighten.default)(color, 0.5),
        borderColor: (0, _darkenOrLighten.default)(color, 0.5)
      },
      text: {
        color: (0, _darkenOrLighten.default)(color, 0.5)
      }
    }), _defineProperty(_colorOptions$colorNa, _constants.STATES.inactive, {
      container: {
        backgroundColor: color,
        borderColor: color
      },
      text: {
        color: color
      }
    }), _colorOptions$colorNa);
  });
  return {
    base: {
      container: {
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 2
      },
      gradient: _objectSpread({}, _reactNative.StyleSheet.absoluteFillObject, {
        flexWrap: 'wrap',
        zIndex: 1
      }),
      text: {
        fontWeight: typography.fontWeights.medium,
        textAlign: 'center'
      },
      touchable: {
        alignSelf: 'stretch',
        overflow: 'hidden'
      }
    },
    colors: colorOptions,
    iconPositions: (_iconPositions = {}, _defineProperty(_iconPositions, _constants.ICON_POSITIONS.bottom, {
      iconContainer: {
        marginTop: spacing.small
      }
    }), _defineProperty(_iconPositions, _constants.ICON_POSITIONS.left, {
      container: {
        flexDirection: 'row'
      },
      iconContainer: {
        marginRight: spacing.small
      }
    }), _defineProperty(_iconPositions, _constants.ICON_POSITIONS.right, {
      container: {
        flexDirection: 'row'
      },
      iconContainer: {
        marginLeft: spacing.small
      }
    }), _defineProperty(_iconPositions, _constants.ICON_POSITIONS.top, {
      iconContainer: {
        marginBottom: spacing.small
      }
    }), _iconPositions),
    rounding: (_rounding = {}, _defineProperty(_rounding, _constants.ROUNDING.normal, {
      borderRadius: radiuses.small
    }), _defineProperty(_rounding, _constants.ROUNDING.rounded, {
      borderRadius: 1000
    }), _defineProperty(_rounding, _constants.ROUNDING.sharp, {
      borderRadius: 0
    }), _rounding),
    sizes: (_sizes = {}, _defineProperty(_sizes, _constants.SIZES.large, {
      container: {
        paddingHorizontal: spacing.huge,
        paddingVertical: spacing.large
      },
      text: {
        fontSize: typography.fontSizes.large
      }
    }), _defineProperty(_sizes, _constants.SIZES.medium, {
      container: {
        paddingHorizontal: spacing.large,
        paddingVertical: spacing.medium
      },
      text: {
        fontSize: typography.fontSizes.medium
      }
    }), _defineProperty(_sizes, _constants.SIZES.small, {
      container: {
        paddingHorizontal: spacing.medium,
        paddingVertical: spacing.small
      },
      text: {
        fontSize: typography.fontSizes.small
      }
    }), _sizes),
    variants: (_variants = {}, _defineProperty(_variants, _constants.VARIANTS.default, {
      text: {
        color: 'white'
      }
    }), _defineProperty(_variants, _constants.VARIANTS.flat, {
      container: {
        backgroundColor: 'transparent',
        borderColor: 'transparent'
      }
    }), _defineProperty(_variants, _constants.VARIANTS.outlined, {
      container: {
        backgroundColor: 'transparent'
      }
    }), _variants)
  };
};

exports.default = _default;