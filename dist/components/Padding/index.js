"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _withTheme = _interopRequireDefault(require("../../themes/withTheme"));

var _hasStyleChanged = _interopRequireDefault(require("../../utils/hasStyleChanged"));

var _styles = _interopRequireWildcard(require("./styles"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getStyles = function getStyles(props) {
  var multiplier = props.multiplier,
      size = props.size,
      sizeBottom = props.sizeBottom,
      sizeHorizontal = props.sizeHorizontal,
      sizeLeft = props.sizeLeft,
      sizeRight = props.sizeRight,
      sizeTop = props.sizeTop,
      sizeVertical = props.sizeVertical,
      styles = props.styles;
  var result = {
    padding: styles[size || 'medium'].padding * (multiplier || 1)
  };

  if (sizeHorizontal) {
    result.paddingHorizontal = styles[sizeHorizontal].padding * (multiplier || 1);
  }

  if (sizeVertical) {
    result.paddingVertical = styles[sizeVertical].padding * (multiplier || 1);
  }

  if (sizeBottom) {
    result.paddingBottom = styles[sizeBottom].padding * (multiplier || 1);
  }

  if (sizeLeft) {
    result.paddingLeft = styles[sizeLeft].padding * (multiplier || 1);
  }

  if (sizeRight) {
    result.paddingRight = styles[sizeRight].padding * (multiplier || 1);
  }

  if (sizeTop) {
    result.paddingTop = styles[sizeTop].padding * (multiplier || 1);
  }

  return result;
};

var Padding = (_temp = _class =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Padding, _PureComponent);

  function Padding() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Padding);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Padding)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      styles: getStyles(_this.props)
    });

    return _this;
  }

  _createClass(Padding, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var propsOnWhichDependsTheStyle = ['multiplier', 'size', 'paddingBottom', 'sizeHorizontal', 'paddingLeft', 'paddingRight', 'paddingTop', 'sizeVertical'];

      if ((0, _hasStyleChanged.default)(propsOnWhichDependsTheStyle, nextProps, this.props)) {
        this.setState({
          styles: getStyles(nextProps)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var styles = this.state.styles;
      return _react.default.createElement(_reactNative.View, {
        style: styles
      });
    }
  }]);

  return Padding;
}(_react.PureComponent), _defineProperty(_class, "propTypes", {
  multiplier: _propTypes.default.number,
  // eslint-disable-line react/no-unused-prop-types
  size: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types
  sizeBottom: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types
  sizeHorizontal: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types
  sizeLeft: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types
  sizeRight: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types
  sizeTop: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types
  sizeVertical: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types
  styles: function styles() {
    return (typeof _styles.bpfrpt_proptype_StylesType === "function" ? _styles.bpfrpt_proptype_StylesType.isRequired ? _styles.bpfrpt_proptype_StylesType.isRequired : _styles.bpfrpt_proptype_StylesType : _propTypes.default.shape(_styles.bpfrpt_proptype_StylesType).isRequired).apply(this, arguments);
  }
}), _temp);

_defineProperty(Padding, "defaultProps", {
  multiplier: 1,
  size: 'medium',
  sizeBottom: null,
  sizeHorizontal: null,
  sizeLeft: null,
  sizeRight: null,
  sizeTop: null,
  sizeVertical: null
});

Padding = (0, _withTheme.default)(_styles.default, 'Padding')(Padding);
var _default = Padding;
exports.default = _default;