"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = exports.ThemeConsumer = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeContext = _react.default.createContext({});

var ThemeConsumer = ThemeContext.Consumer;
exports.ThemeConsumer = ThemeConsumer;
var ThemeProvider = ThemeContext.Provider;
exports.ThemeProvider = ThemeProvider;