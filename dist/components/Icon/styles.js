"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_StylesType = exports.default = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _constants = require("./constants");

var _types = require("../../types");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bpfrpt_proptype_StylesType = {
  colors: function colors() {
    return (typeof _types.bpfrpt_proptype_ObjectOfStyleSheetsType === "function" ? _types.bpfrpt_proptype_ObjectOfStyleSheetsType.isRequired ? _types.bpfrpt_proptype_ObjectOfStyleSheetsType.isRequired : _types.bpfrpt_proptype_ObjectOfStyleSheetsType : _propTypes.default.shape(_types.bpfrpt_proptype_ObjectOfStyleSheetsType).isRequired).apply(this, arguments);
  }
};
exports.bpfrpt_proptype_StylesType = bpfrpt_proptype_StylesType;

var _default = function _default(_ref) {
  var colors = _ref.colors;
  var allColors = (0, _merge.default)({}, _constants.COLORS, colors.palette);
  var colorOptions = {};
  Object.keys(allColors).forEach(function (colorName) {
    var color = allColors[colorName];
    colorOptions[colorName] = {
      color: color
    };
  });
  return {
    colors: colorOptions
  };
};

exports.default = _default;