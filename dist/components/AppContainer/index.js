"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _color = _interopRequireDefault(require("color"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _withTheme = _interopRequireDefault(require("../../themes/withTheme"));

var _styles = _interopRequireWildcard(require("./styles"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _class, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var AppContainer = (_temp = _class =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AppContainer, _PureComponent);

  function AppContainer(props) {
    var _this;

    _classCallCheck(this, AppContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppContainer).call(this, props));
    _assertThisInitialized(_assertThisInitialized(_this)).renderContent = _this.renderContent.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(AppContainer, [{
    key: "renderContent",
    value: function renderContent() {
      var _this$props = this.props,
          backgroundImage = _this$props.backgroundImage,
          children = _this$props.children,
          styles = _this$props.styles;

      if (!backgroundImage) {
        return children;
      }

      return _react.default.createElement(_reactNative.ImageBackground, {
        source: backgroundImage,
        style: styles.imageBackground
      }, _react.default.createElement(_reactNative.View, {
        style: styles.imageBackgroundContent
      }, children));
    }
  }, {
    key: "render",
    value: function render() {
      var styles = this.props.styles;
      var topSafeAreaIsLight = (0, _color.default)(styles.topSafeArea.backgroundColor).isLight();
      return _react.default.createElement(_reactNative.View, {
        style: styles.wrapper
      }, _react.default.createElement(_reactNative.SafeAreaView, {
        style: styles.topSafeArea
      }), _react.default.createElement(_reactNative.SafeAreaView, {
        style: styles.bottomSafeArea
      }, _react.default.createElement(_reactNative.StatusBar, {
        barStyle: topSafeAreaIsLight ? 'dark-content' : 'light-content'
      }), _react.default.createElement(_reactNative.View, {
        style: styles.content
      }, this.renderContent())));
    }
  }]);

  return AppContainer;
}(_react.PureComponent), _defineProperty(_class, "propTypes", {
  backgroundImage: function backgroundImage() {
    return (typeof _propTypes.default.node === "function" ? _propTypes.default.node : _propTypes.default.shape(_propTypes.default.node)).apply(this, arguments);
  },
  children: function children() {
    return (typeof _propTypes.default.node === "function" ? _propTypes.default.node.isRequired ? _propTypes.default.node.isRequired : _propTypes.default.node : _propTypes.default.shape(_propTypes.default.node).isRequired).apply(this, arguments);
  },
  styles: function styles() {
    return (typeof _styles.bpfrpt_proptype_StylesType === "function" ? _styles.bpfrpt_proptype_StylesType.isRequired ? _styles.bpfrpt_proptype_StylesType.isRequired : _styles.bpfrpt_proptype_StylesType : _propTypes.default.shape(_styles.bpfrpt_proptype_StylesType).isRequired).apply(this, arguments);
  }
}), _temp);

_defineProperty(AppContainer, "defaultProps", {
  backgroundImage: null
});

AppContainer = (0, _withTheme.default)(_styles.default, 'AppContainer')(AppContainer);
var _default = AppContainer;
exports.default = _default;