"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_Props = exports.default = void 0;

var _color = _interopRequireDefault(require("color"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _withTheme = _interopRequireDefault(require("../../themes/withTheme"));

var _constants = require("./constants");

var _styles = _interopRequireWildcard(require("./styles"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _class, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bpfrpt_proptype_Props = {
  fromColor: _propTypes.default.string.isRequired,
  gradientDirection: _propTypes.default.string,
  height: _propTypes.default.number.isRequired,
  toColor: _propTypes.default.string.isRequired,
  width: _propTypes.default.number.isRequired
};
exports.bpfrpt_proptype_Props = bpfrpt_proptype_Props;

var defaultProps = _objectSpread({}, _reactNative.View.defaultProps, {
  gradientDirection: _constants.DIRECTIONS.horizontal
});

var LinearGradient = (_temp = _class =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(LinearGradient, _PureComponent);

  function LinearGradient(props) {
    var _this;

    _classCallCheck(this, LinearGradient);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LinearGradient).call(this, props));
    _assertThisInitialized(_assertThisInitialized(_this)).renderGradient = _this.renderGradient.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(LinearGradient, [{
    key: "renderGradient",
    value: function renderGradient() {
      var _this$props = this.props,
          fromColor = _this$props.fromColor,
          gradientDirection = _this$props.gradientDirection,
          height = _this$props.height,
          toColor = _this$props.toColor,
          width = _this$props.width;
      var lines = [];
      var point = 1 / (gradientDirection === _constants.DIRECTIONS.horizontal ? width : height);
      var roundedPoint = Math.round(point * 1000000) / 1000000;
      var fromC = (0, _color.default)(fromColor);
      var toC = (0, _color.default)(toColor);
      var lineHeight = gradientDirection === _constants.DIRECTIONS.vertical ? 1 : height;
      var lineWidth = gradientDirection === _constants.DIRECTIONS.horizontal ? 1 : width;

      for (var i = 0; i <= 1; i += roundedPoint) {
        lines.push(_react.default.createElement(_reactNative.View, {
          key: "i_".concat(i),
          style: {
            backgroundColor: fromC.mix(toC, i).toString(),
            height: lineHeight,
            width: lineWidth
          }
        }));
      }

      return lines;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          height = _this$props2.height,
          styles = _this$props2.styles,
          width = _this$props2.width;
      return _react.default.createElement(_reactNative.View, _extends({}, this.props, {
        style: [styles.container, {
          height: height,
          width: width
        }]
      }), _react.default.createElement(_reactNative.View, {
        style: styles.gradient
      }, this.renderGradient()), _react.default.createElement(_reactNative.View, {
        style: styles.content
      }, children));
    }
  }]);

  return LinearGradient;
}(_react.PureComponent), _defineProperty(_class, "propTypes", {
  fromColor: _propTypes.default.string.isRequired,
  gradientDirection: _propTypes.default.string,
  height: _propTypes.default.number.isRequired,
  toColor: _propTypes.default.string.isRequired,
  width: _propTypes.default.number.isRequired,
  styles: function styles() {
    return (typeof _styles.bpfrpt_proptype_StylesType === "function" ? _styles.bpfrpt_proptype_StylesType.isRequired ? _styles.bpfrpt_proptype_StylesType.isRequired : _styles.bpfrpt_proptype_StylesType : _propTypes.default.shape(_styles.bpfrpt_proptype_StylesType).isRequired).apply(this, arguments);
  }
}), _temp);

_defineProperty(LinearGradient, "defaultProps", defaultProps);

LinearGradient = (0, _withTheme.default)(_styles.default, 'LinearGradient')(LinearGradient);
var _default = LinearGradient;
exports.default = _default;