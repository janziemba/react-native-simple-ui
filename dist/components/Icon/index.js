"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_Props = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _withTheme = _interopRequireDefault(require("../../themes/withTheme"));

var _constants = require("./constants");

var _styles = _interopRequireWildcard(require("./styles"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _types = require("../../types");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bpfrpt_proptype_Props = {
  color: _propTypes.default.string,
  colorName: _propTypes.default.string,
  iconSet: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  size: _propTypes.default.number
};
exports.bpfrpt_proptype_Props = bpfrpt_proptype_Props;
var Icon = (_temp = _class =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Icon, _PureComponent);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          colorName = _this$props.colorName,
          iconSet = _this$props.iconSet,
          name = _this$props.name,
          size = _this$props.size,
          styles = _this$props.styles,
          theme = _this$props.theme;
      var VectorIcon = _constants.ICON_SETS[iconSet || theme.typography.iconSet];
      var iconColor = color;

      if (colorName) {
        iconColor = styles.colors[colorName].color;
      }

      return _react.default.createElement(VectorIcon, {
        color: iconColor,
        name: name,
        size: size
      });
    }
  }]);

  return Icon;
}(_react.PureComponent), _defineProperty(_class, "propTypes", {
  color: _propTypes.default.string,
  colorName: _propTypes.default.string,
  iconSet: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  size: _propTypes.default.number,
  styles: function styles() {
    return (typeof _styles.bpfrpt_proptype_StylesType === "function" ? _styles.bpfrpt_proptype_StylesType.isRequired ? _styles.bpfrpt_proptype_StylesType.isRequired : _styles.bpfrpt_proptype_StylesType : _propTypes.default.shape(_styles.bpfrpt_proptype_StylesType).isRequired).apply(this, arguments);
  },
  theme: function theme() {
    return (typeof _types.bpfrpt_proptype_ThemeShapeType === "function" ? _types.bpfrpt_proptype_ThemeShapeType.isRequired ? _types.bpfrpt_proptype_ThemeShapeType.isRequired : _types.bpfrpt_proptype_ThemeShapeType : _propTypes.default.shape(_types.bpfrpt_proptype_ThemeShapeType).isRequired).apply(this, arguments);
  }
}), _temp);

_defineProperty(Icon, "defaultProps", {
  color: null,
  colorName: null,
  iconSet: null,
  size: 24
});

Icon = (0, _withTheme.default)(_styles.default, 'Icon')(Icon);
var _default = Icon;
exports.default = _default;