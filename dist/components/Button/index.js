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

var _Icon = _interopRequireWildcard(require("../Icon"));

var _constants = require("./constants");

var _styles = _interopRequireWildcard(require("./styles"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LinearGradient = require("../LinearGradient");

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

var defaultProps = _objectSpread({}, _reactNative.TouchableOpacity.defaultProps, {
  color: 'primary',
  icon: null,
  linearGradient: null,
  loading: false,
  rounding: _constants.ROUNDING.normal,
  size: _constants.SIZES.medium,
  text: null,
  variant: _constants.VARIANTS.default
});

var getStyles = function getStyles(props, state) {
  var color = props.color,
      disabled = props.disabled,
      icon = props.icon,
      rounding = props.rounding,
      size = props.size,
      styles = props.styles,
      text = props.text,
      variant = props.variant;
  var colorState = _constants.STATES.inactive;

  if (disabled) {
    colorState = _constants.STATES.disabled;
  } else if (state && state.active) {
    colorState = _constants.STATES.active;
  }

  return {
    container: [styles.base.container, styles.rounding[rounding], styles.sizes[size].container, styles.colors[color][colorState].container, styles.variants[variant].container, icon && text ? styles.iconPositions[icon.position || _constants.ICON_POSITIONS.left].container : {}],
    iconColor: styles.variants[variant].text && styles.variants[variant].text.color || styles.colors[color][colorState].text.color || styles.base.text.color,
    iconContainer: icon && text ? styles.iconPositions[icon.position || _constants.ICON_POSITIONS.left].iconContainer : {},
    text: [styles.base.text, styles.sizes[size].text, styles.colors[color][colorState].text, styles.variants[variant].text],
    touchable: styles.touchable
  };
};

var Button = (_temp = _class =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      active: false,
      // eslint-disable-line react/no-unused-state
      styles: getStyles(_this.props)
    });

    _assertThisInitialized(_assertThisInitialized(_this)).onPressIn = _this.onPressIn.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _assertThisInitialized(_assertThisInitialized(_this)).onPressOut = _this.onPressOut.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _assertThisInitialized(_assertThisInitialized(_this)).renderIcon = _this.renderIcon.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _assertThisInitialized(_assertThisInitialized(_this)).renderIconAfterText = _this.renderIconAfterText.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _assertThisInitialized(_assertThisInitialized(_this)).renderIconBeforeText = _this.renderIconBeforeText.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _assertThisInitialized(_assertThisInitialized(_this)).renderContent = _this.renderContent.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Button, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var propsOnWhichDependsTheStyle = ['color', 'disabled', 'icon', 'rounding', 'size', 'variant'];

      if ((0, _hasStyleChanged.default)(propsOnWhichDependsTheStyle, nextProps, this.props)) {
        this.setState(function (prevState) {
          return {
            styles: getStyles(nextProps, prevState)
          };
        });
      }
    }
  }, {
    key: "onPressIn",
    value: function onPressIn() {
      var _this2 = this;

      this.setState( // eslint-disable-next-line react/no-unused-state
      {
        active: true
      }, function () {
        return _this2.setState(function (prevState) {
          return {
            styles: getStyles(_this2.props, prevState)
          };
        });
      });
    }
  }, {
    key: "onPressOut",
    value: function onPressOut() {
      var _this3 = this;

      this.setState( // eslint-disable-next-line react/no-unused-state
      {
        active: false
      }, function () {
        return _this3.setState(function (prevState) {
          return {
            styles: getStyles(_this3.props, prevState)
          };
        });
      });
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var icon = this.props.icon;
      var styles = this.state.styles;

      if (!icon) {
        return null;
      }

      return _react.default.createElement(_reactNative.View, {
        style: styles.iconContainer
      }, _react.default.createElement(_Icon.default, _extends({}, icon, {
        color: styles.iconColor,
        size: icon.size || 16
      })));
    }
  }, {
    key: "renderIconAfterText",
    value: function renderIconAfterText() {
      var icon = this.props.icon;

      if (!icon || !icon.position || ![_constants.ICON_POSITIONS.bottom, _constants.ICON_POSITIONS.right].includes(icon.position)) {
        return null;
      }

      return this.renderIcon();
    }
  }, {
    key: "renderIconBeforeText",
    value: function renderIconBeforeText() {
      var icon = this.props.icon;

      if (!icon || ![_constants.ICON_POSITIONS.left, _constants.ICON_POSITIONS.top, undefined].includes(icon.position)) {
        return null;
      }

      return this.renderIcon();
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this$props = this.props,
          loading = _this$props.loading,
          styles = _this$props.styles,
          text = _this$props.text;

      if (loading) {
        return _react.default.createElement(_reactNative.ActivityIndicator, null);
      }

      if (!text) {
        return this.renderIcon();
      }

      return _react.default.createElement(_react.Fragment, null, this.renderIconBeforeText(), _react.default.createElement(_reactNative.Text, {
        style: styles.text
      }, text), this.renderIconAfterText());
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          onPress = _this$props2.onPress;
      var styles = this.state.styles;
      return _react.default.createElement(_reactNative.TouchableOpacity, _extends({}, (0, _omit.default)(this.props, ['styles']), {
        accessibilityRole: "button",
        activeOpacity: 1,
        delayPressOut: 50 // to highlight the button even if it's touched quickly
        ,
        disabled: disabled || !onPress,
        onPressIn: this.onPressIn,
        onPressOut: this.onPressOut,
        style: styles.touchable
      }), _react.default.createElement(_reactNative.View, {
        style: styles.container
      }, this.renderContent()));
    }
  }]);

  return Button;
}(_react.PureComponent), _defineProperty(_class, "propTypes", {
  color: _propTypes.default.string,
  icon: function icon() {
    return (typeof _Icon.bpfrpt_proptype_Props === "function" ? _Icon.bpfrpt_proptype_Props : _propTypes.default.shape(_Icon.bpfrpt_proptype_Props)).apply(this, arguments);
  },
  linearGradient: function linearGradient() {
    return (typeof _LinearGradient.bpfrpt_proptype_Props === "function" ? _LinearGradient.bpfrpt_proptype_Props : _propTypes.default.shape(_LinearGradient.bpfrpt_proptype_Props)).apply(this, arguments);
  },
  loading: _propTypes.default.bool,
  rounding: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types, max-len
  size: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types
  styles: function styles() {
    return (typeof _styles.bpfrpt_proptype_StylesType === "function" ? _styles.bpfrpt_proptype_StylesType.isRequired ? _styles.bpfrpt_proptype_StylesType.isRequired : _styles.bpfrpt_proptype_StylesType : _propTypes.default.shape(_styles.bpfrpt_proptype_StylesType).isRequired).apply(this, arguments);
  },
  // eslint-disable-line react/no-unused-prop-types, max-len
  text: _propTypes.default.string,
  variant: _propTypes.default.string
}), _temp);

_defineProperty(Button, "defaultProps", defaultProps);

Button = (0, _withTheme.default)(_styles.default, 'Button')(Button);
var _default = Button;
exports.default = _default;