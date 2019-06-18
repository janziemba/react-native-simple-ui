"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _omit = _interopRequireDefault(require("lodash/omit"));

var _withTheme = _interopRequireDefault(require("../../themes/withTheme"));

var _hasStyleChanged = _interopRequireDefault(require("../../utils/hasStyleChanged"));

var _Divider = _interopRequireDefault(require("../Divider"));

var _Column = _interopRequireDefault(require("../Grid/Column"));

var _Grid = _interopRequireDefault(require("../Grid/Grid"));

var _Padding = _interopRequireDefault(require("../Padding"));

var _styles = _interopRequireWildcard(require("./styles"));

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getStyles = function getStyles(props) {
  var color = props.color,
      styles = props.styles;
  return _objectSpread({}, styles.base, {
    outerContainer: [styles.base.outerContainer, styles.colors[color || 'white'].outerContainer]
  });
};

var ListItem = (_temp = _class =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ListItem, _PureComponent);

  function ListItem(props) {
    var _this;

    _classCallCheck(this, ListItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ListItem).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      styles: getStyles(_this.props)
    });

    _assertThisInitialized(_assertThisInitialized(_this)).renderLeftElement = _this.renderLeftElement.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _assertThisInitialized(_assertThisInitialized(_this)).renderCenterElement = _this.renderCenterElement.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _assertThisInitialized(_assertThisInitialized(_this)).renderRightElement = _this.renderRightElement.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ListItem, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var propsOnWhichDependsTheStyle = ['color'];

      if ((0, _hasStyleChanged.default)(propsOnWhichDependsTheStyle, nextProps, this.props)) {
        this.setState({
          styles: getStyles(nextProps)
        });
      }
    }
  }, {
    key: "renderLeftElement",
    value: function renderLeftElement() {
      var _this$props = this.props,
          leftElement = _this$props.leftElement,
          loading = _this$props.loading;
      var styles = this.state.styles;

      if (!leftElement || loading) {
        return null;
      }

      return _react.default.createElement(_Padding.default, {
        size: "small",
        style: styles.leftElement
      }, leftElement);
    }
  }, {
    key: "renderCenterElement",
    value: function renderCenterElement() {
      var _this$props2 = this.props,
          centerElement = _this$props2.centerElement,
          loading = _this$props2.loading;
      var styles = this.state.styles;

      if (loading) {
        return _react.default.createElement(_reactNative.ActivityIndicator, null);
      }

      if (!centerElement) {
        return null;
      }

      return _react.default.createElement(_Padding.default, {
        size: "small",
        style: styles.centerElement
      }, centerElement);
    }
  }, {
    key: "renderRightElement",
    value: function renderRightElement() {
      var _this$props3 = this.props,
          loading = _this$props3.loading,
          rightElement = _this$props3.rightElement;
      var styles = this.state.styles;

      if (!rightElement || loading) {
        return null;
      }

      return _react.default.createElement(_Padding.default, {
        size: "small",
        style: styles.rightElement
      }, rightElement);
    }
  }, {
    key: "renderDivider",
    value: function renderDivider() {
      var divider = this.props.divider;

      if (!divider) {
        return null;
      }

      return _react.default.createElement(_Divider.default, null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          centerElementSize = _this$props4.centerElementSize,
          leftElementSize = _this$props4.leftElementSize,
          onPress = _this$props4.onPress,
          rightElementSize = _this$props4.rightElementSize;
      var styles = this.state.styles;
      return _react.default.createElement(_reactNative.View, {
        style: styles.outerContainer
      }, _react.default.createElement(_reactNative.TouchableOpacity, _extends({
        disabled: !onPress,
        onPress: onPress
      }, (0, _omit.default)(this.props, ['styles'])), _react.default.createElement(_Grid.default, {
        style: styles.innerContainer
      }, _react.default.createElement(_Column.default, {
        size: leftElementSize
      }, this.renderLeftElement()), _react.default.createElement(_Column.default, {
        size: centerElementSize
      }, this.renderCenterElement()), _react.default.createElement(_Column.default, {
        size: rightElementSize
      }, this.renderRightElement()))), this.renderDivider());
    }
  }]);

  return ListItem;
}(_react.PureComponent), _defineProperty(_class, "propTypes", {
  centerElement: function centerElement() {
    return (typeof _propTypes.default.node === "function" ? _propTypes.default.node : _propTypes.default.shape(_propTypes.default.node)).apply(this, arguments);
  },
  centerElementSize: _propTypes.default.number,
  // eslint-disable-line react/no-unused-prop-types
  color: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types
  divider: _propTypes.default.bool,
  // eslint-disable-line react/no-unused-prop-types
  leftElement: function leftElement() {
    return (typeof _propTypes.default.node === "function" ? _propTypes.default.node : _propTypes.default.shape(_propTypes.default.node)).apply(this, arguments);
  },
  leftElementSize: _propTypes.default.number,
  // eslint-disable-line react/no-unused-prop-types
  loading: _propTypes.default.bool,
  rightElement: function rightElement() {
    return (typeof _propTypes.default.node === "function" ? _propTypes.default.node : _propTypes.default.shape(_propTypes.default.node)).apply(this, arguments);
  },
  rightElementSize: _propTypes.default.number,
  // eslint-disable-line react/no-unused-prop-types
  styles: function styles() {
    return (typeof _styles.bpfrpt_proptype_StylesType === "function" ? _styles.bpfrpt_proptype_StylesType.isRequired ? _styles.bpfrpt_proptype_StylesType.isRequired : _styles.bpfrpt_proptype_StylesType : _propTypes.default.shape(_styles.bpfrpt_proptype_StylesType).isRequired).apply(this, arguments);
  }
}), _temp);

_defineProperty(ListItem, "defaultProps", {
  centerElement: null,
  centerElementSize: 1.5,
  color: 'white',
  divider: true,
  leftElement: null,
  leftElementSize: 1,
  loading: false,
  rightElement: null,
  rightElementSize: 1
});

ListItem = (0, _withTheme.default)(_styles.default, 'ListItem')(ListItem);
var _default = ListItem;
exports.default = _default;