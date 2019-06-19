"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_Props = exports.default = exports.defaultProps = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _omit = _interopRequireDefault(require("lodash/omit"));

var _withTheme = _interopRequireDefault(require("../../themes/withTheme"));

var _hasStyleChanged = _interopRequireDefault(require("../../utils/hasStyleChanged"));

var _styles = _interopRequireWildcard(require("./styles"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _types = require("../../types");

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

var bpfrpt_proptype_Props = {
  color: _propTypes.default.string,
  size: _propTypes.default.number,
  text: _propTypes.default.string
};
exports.bpfrpt_proptype_Props = bpfrpt_proptype_Props;
var defaultProps = {
  color: null,
  size: 64,
  text: null
};
exports.defaultProps = defaultProps;

var getStyles = function getStyles(props) {
  var color = props.color,
      size = props.size,
      styles = props.styles;
  var dimensions = {
    height: size,
    width: size
  };
  return _objectSpread({}, styles.base, {
    container: [styles.base.container, styles.colors[color || 'primary'].container, dimensions],
    image: [styles.base.image, dimensions],
    text: [styles.base.text, {
      fontSize: size / 3
    }],
    touchable: [dimensions]
  });
};

var Avatar = (_temp = _class =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Avatar, _PureComponent);

  function Avatar(props) {
    var _this;

    _classCallCheck(this, Avatar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Avatar).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      styles: getStyles(_this.props)
    });

    _assertThisInitialized(_assertThisInitialized(_this)).renderImage = _this.renderImage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _assertThisInitialized(_assertThisInitialized(_this)).renderText = _this.renderText.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Avatar, [{
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
    key: "renderImage",
    value: function renderImage() {
      var source = this.props.source;
      var styles = this.state.styles;

      if (!source) {
        return null;
      }

      return _react.default.createElement(_reactNative.Image, {
        resizeMode: "cover",
        source: source,
        style: styles.image
      });
    }
  }, {
    key: "renderText",
    value: function renderText() {
      var text = this.props.text;
      var styles = this.state.styles;

      if (!text) {
        return null;
      }

      return _react.default.createElement(_reactNative.Text, {
        style: styles.text
      }, text);
    }
  }, {
    key: "render",
    value: function render() {
      var onPress = this.props.onPress;
      var styles = this.state.styles;
      return _react.default.createElement(_reactNative.TouchableOpacity, _extends({
        accessibilityRole: "imagebutton",
        disabled: !onPress,
        onPress: onPress,
        style: styles.touchable
      }, (0, _omit.default)(this.props, ['styles'])), _react.default.createElement(_reactNative.View, {
        style: styles.container
      }, this.renderImage(), this.renderText()));
    }
  }]);

  return Avatar;
}(_react.PureComponent), _defineProperty(_class, "propTypes", {
  color: _propTypes.default.string,
  size: _propTypes.default.number,
  text: _propTypes.default.string,
  styles: function styles() {
    return (typeof _styles.bpfrpt_proptype_StylesType === "function" ? _styles.bpfrpt_proptype_StylesType.isRequired ? _styles.bpfrpt_proptype_StylesType.isRequired : _styles.bpfrpt_proptype_StylesType : _propTypes.default.shape(_styles.bpfrpt_proptype_StylesType).isRequired).apply(this, arguments);
  }
}), _temp);

_defineProperty(Avatar, "defaultProps", defaultProps);

Avatar = (0, _withTheme.default)(_styles.default, 'Avatar')(Avatar);
var _default = Avatar;
exports.default = _default;