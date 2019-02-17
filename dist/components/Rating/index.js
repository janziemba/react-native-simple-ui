"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _withTheme = _interopRequireDefault(require("../../themes/withTheme"));

var _Icon = _interopRequireWildcard(require("../Icon"));

var _styles = _interopRequireDefault(require("./styles"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Rating = (_temp = _class =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Rating, _PureComponent);

  function Rating(props) {
    var _this;

    _classCallCheck(this, Rating);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rating).call(this, props));
    _assertThisInitialized(_assertThisInitialized(_this)).renderEmptyIcons = _this.renderEmptyIcons.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _assertThisInitialized(_assertThisInitialized(_this)).renderFullIcons = _this.renderFullIcons.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _assertThisInitialized(_assertThisInitialized(_this)).renderHalfIcon = _this.renderHalfIcon.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Rating, [{
    key: "renderEmptyIcons",
    value: function renderEmptyIcons() {
      var _this$props = this.props,
          emptyIcon = _this$props.emptyIcon,
          limit = _this$props.limit,
          rating = _this$props.rating;
      var nearestHalf = Math.round(rating * 2) / 2;
      var activeCount = nearestHalf % 1 === 0 && nearestHalf > rating ? Math.ceil(rating) : Math.floor(rating);
      var halfShouldShow = nearestHalf % 1 > 0;
      var count = (limit || 5) - activeCount - (halfShouldShow ? 1 : 0);
      var icons = [];

      for (var i = 0; i < count; i += 1) {
        icons.push(_react.default.createElement(_Icon.default, _extends({}, emptyIcon, {
          key: "emptyIcon_".concat(i)
        })));
      }

      return icons;
    }
  }, {
    key: "renderFullIcons",
    value: function renderFullIcons() {
      var _this$props2 = this.props,
          fullIcon = _this$props2.fullIcon,
          rating = _this$props2.rating;
      var nearestHalf = Math.round(rating * 2) / 2;
      var count = nearestHalf % 1 === 0 && nearestHalf > rating ? Math.ceil(rating) : Math.floor(rating);
      var icons = [];

      for (var i = 0; i < count; i += 1) {
        icons.push(_react.default.createElement(_Icon.default, _extends({}, fullIcon, {
          key: "fullIcon_".concat(i)
        })));
      }

      return icons;
    }
  }, {
    key: "renderHalfIcon",
    value: function renderHalfIcon() {
      var _this$props3 = this.props,
          halfIcon = _this$props3.halfIcon,
          rating = _this$props3.rating;
      var nearestHalf = Math.round(rating * 2) / 2;
      var shouldShow = nearestHalf % 1 > 0;

      if (!shouldShow) {
        return null;
      }

      return _react.default.createElement(_Icon.default, halfIcon);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          onPress = _this$props4.onPress,
          styles = _this$props4.styles;
      return _react.default.createElement(_reactNative.TouchableOpacity, {
        onPress: onPress
      }, _react.default.createElement(_reactNative.View, {
        style: styles
      }, this.renderFullIcons(), this.renderHalfIcon(), this.renderEmptyIcons()));
    }
  }]);

  return Rating;
}(_react.PureComponent), _defineProperty(_class, "propTypes", {
  emptyIcon: function emptyIcon() {
    return (typeof _Icon.bpfrpt_proptype_Props === "function" ? _Icon.bpfrpt_proptype_Props.isRequired ? _Icon.bpfrpt_proptype_Props.isRequired : _Icon.bpfrpt_proptype_Props : _propTypes.default.shape(_Icon.bpfrpt_proptype_Props).isRequired).apply(this, arguments);
  },
  fullIcon: function fullIcon() {
    return (typeof _Icon.bpfrpt_proptype_Props === "function" ? _Icon.bpfrpt_proptype_Props.isRequired ? _Icon.bpfrpt_proptype_Props.isRequired : _Icon.bpfrpt_proptype_Props : _propTypes.default.shape(_Icon.bpfrpt_proptype_Props).isRequired).apply(this, arguments);
  },
  halfIcon: function halfIcon() {
    return (typeof _Icon.bpfrpt_proptype_Props === "function" ? _Icon.bpfrpt_proptype_Props.isRequired ? _Icon.bpfrpt_proptype_Props.isRequired : _Icon.bpfrpt_proptype_Props : _propTypes.default.shape(_Icon.bpfrpt_proptype_Props).isRequired).apply(this, arguments);
  },
  limit: _propTypes.default.number,
  onPress: _propTypes.default.func,
  rating: _propTypes.default.number.isRequired,
  styles: function styles() {
    return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);
  }
}), _temp);

_defineProperty(Rating, "defaultProps", {
  limit: 5,
  onPress: null
});

Rating = (0, _withTheme.default)(_styles.default, 'Rating')(Rating);
var _default = Rating;
exports.default = _default;