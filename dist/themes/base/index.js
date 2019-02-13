"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colors = _interopRequireDefault(require("./colors"));

var _radiuses = _interopRequireDefault(require("./radiuses"));

var _spacing = _interopRequireDefault(require("./spacing"));

var _typography = _interopRequireDefault(require("./typography"));

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base = {
  colors: _colors.default,
  components: {},
  radiuses: _radiuses.default,
  spacing: _spacing.default,
  typography: _typography.default
};
var _default = base;
exports.default = _default;