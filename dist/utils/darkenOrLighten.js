"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = darkenOrLighten;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function darkenOrLighten(color) {
  var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.25;
  var c = (0, _color.default)(color);
  var modifiedColor = c.luminosity() > 0.5 ? c.darken(ratio) : c.lighten(ratio);
  return modifiedColor.toString();
}