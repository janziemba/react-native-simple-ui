"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _withTheme = _interopRequireDefault(require("../../themes/withTheme"));

var _hasStyleChanged = _interopRequireDefault(require("../../utils/hasStyleChanged"));

var _Column = _interopRequireDefault(require("../Grid/Column"));

var _Grid = _interopRequireDefault(require("../Grid/Grid"));

var _Padding = _interopRequireDefault(require("../Padding"));

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getStyles = function getStyles(props) {
  var color = props.color,
      styles = props.styles;
  return _objectSpread({}, styles.base, {
    container: [styles.base.container, styles.colors[color || 'primary'].container]
  });
};

var Toolbar = (_temp = _class =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Toolbar, _PureComponent);

  function Toolbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Toolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Toolbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      styles: getStyles(_this.props)
    });

    return _this;
  }

  _createClass(Toolbar, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var propsOnWhichDependsTheStyle = ['color', 'style'];

      if ((0, _hasStyleChanged.default)(propsOnWhichDependsTheStyle, nextProps, this.props)) {
        this.setState({
          styles: getStyles(nextProps)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          centerElement = _this$props.centerElement,
          centerElementSize = _this$props.centerElementSize,
          leftElement = _this$props.leftElement,
          leftElementSize = _this$props.leftElementSize,
          rightElement = _this$props.rightElement,
          rightElementSize = _this$props.rightElementSize;
      var styles = this.state.styles;
      return _react.default.createElement(_Grid.default, {
        style: styles.container
      }, _react.default.createElement(_Column.default, {
        size: leftElementSize
      }, leftElement && _react.default.createElement(_Padding.default, {
        size: "small",
        style: styles.leftElement
      }, leftElement)), _react.default.createElement(_Column.default, {
        size: centerElementSize
      }, centerElement && _react.default.createElement(_Padding.default, {
        size: "small",
        style: styles.centerElement
      }, centerElement)), _react.default.createElement(_Column.default, {
        size: rightElementSize
      }, rightElement && _react.default.createElement(_Padding.default, {
        size: "small",
        style: styles.rightElement
      }, rightElement)));
    }
  }]);

  return Toolbar;
}(_react.PureComponent), _defineProperty(_class, "propTypes", {
  centerElement: function centerElement() {
    return (typeof _propTypes.default.node === "function" ? _propTypes.default.node : _propTypes.default.shape(_propTypes.default.node)).apply(this, arguments);
  },
  centerElementSize: _propTypes.default.number,
  // eslint-disable-line react/no-unused-prop-types
  color: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types
  leftElement: function leftElement() {
    return (typeof _propTypes.default.node === "function" ? _propTypes.default.node : _propTypes.default.shape(_propTypes.default.node)).apply(this, arguments);
  },
  leftElementSize: _propTypes.default.number,
  // eslint-disable-line react/no-unused-prop-types
  rightElement: function rightElement() {
    return (typeof _propTypes.default.node === "function" ? _propTypes.default.node : _propTypes.default.shape(_propTypes.default.node)).apply(this, arguments);
  },
  rightElementSize: _propTypes.default.number,
  // eslint-disable-line react/no-unused-prop-types
  styles: function styles() {
    return (typeof _styles.bpfrpt_proptype_StylesType === "function" ? _styles.bpfrpt_proptype_StylesType.isRequired ? _styles.bpfrpt_proptype_StylesType.isRequired : _styles.bpfrpt_proptype_StylesType : _propTypes.default.shape(_styles.bpfrpt_proptype_StylesType).isRequired).apply(this, arguments);
  }
}), _temp);

_defineProperty(Toolbar, "defaultProps", {
  centerElement: null,
  centerElementSize: 1.5,
  color: 'primary',
  leftElement: null,
  leftElementSize: 1,
  rightElement: null,
  rightElementSize: 1
});

Toolbar = (0, _withTheme.default)(_styles.default, 'Toolbar')(Toolbar);
var _default = Toolbar;
exports.default = _default;