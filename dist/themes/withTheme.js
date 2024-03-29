"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _base = _interopRequireDefault(require("./base"));

var _themeContext = require("./themeContext");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _types = require("../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var warnAboutReservedPropName = function warnAboutReservedPropName(propName, componentName) {
  console.warn("In '".concat(componentName, "', you are using a reserved property '").concat(propName, "' which is being rewritten in withTheme HOC.")); // eslint-disable-line no-console
};

var checkErrors = function checkErrors(props, componentName) {
  var styles = props.styles,
      theme = props.theme;

  if (styles) {
    warnAboutReservedPropName('styles', componentName);
  }

  if (theme) {
    warnAboutReservedPropName('theme', componentName);
  }
};

var withTheme = function withTheme(customStyles, componentName) {
  return function (Component) {
    var _class, _temp;

    var ComponentWithTheme = (_temp = _class =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(ComponentWithTheme, _PureComponent);

      function ComponentWithTheme() {
        _classCallCheck(this, ComponentWithTheme);

        return _possibleConstructorReturn(this, _getPrototypeOf(ComponentWithTheme).apply(this, arguments));
      }

      _createClass(ComponentWithTheme, [{
        key: "render",
        value: function render() {
          var _this = this;

          return _react.default.createElement(_themeContext.ThemeConsumer, null, function (customTheme) {
            checkErrors(_this.props, componentName);
            var theme = (0, _merge.default)({}, _base.default, customTheme || {});
            var styles = (0, _merge.default)({}, customStyles ? customStyles(theme) : {}, theme.components[componentName] || {}, _this.props.style // eslint-disable-line react/prop-types, react/destructuring-assignment, max-len
            );
            return _react.default.createElement(Component, _extends({}, (0, _omit.default)(_this.props, ['style']), {
              styles: styles,
              theme: theme
            }));
          });
        }
      }]);

      return ComponentWithTheme;
    }(_react.PureComponent), _defineProperty(_class, "propTypes", {
      style: function style() {
        return (typeof (_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) === "function" ? _propTypes.default.instanceOf(_reactNative.StyleSheet.Styles == null ? {} : _reactNative.StyleSheet.Styles) : _propTypes.default.any).apply(this, arguments);
      }
    }), _temp);

    _defineProperty(ComponentWithTheme, "originalComponentName", Component.displayName || Component.name);

    _defineProperty(ComponentWithTheme, "displayName", "WithTheme(".concat(Component.displayName || Component.name, ")"));

    _defineProperty(ComponentWithTheme, "defaultProps", {
      style: {}
    });

    return ComponentWithTheme;
  };
};

var _default = withTheme;
exports.default = _default;