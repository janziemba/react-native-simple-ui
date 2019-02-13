"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_StylesType = exports.default = void 0;

var _types = require("../../types");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bpfrpt_proptype_StylesType = _types.bpfrpt_proptype_ObjectOfStyleSheetsType === _propTypes.default.any ? {} : _types.bpfrpt_proptype_ObjectOfStyleSheetsType;
exports.bpfrpt_proptype_StylesType = bpfrpt_proptype_StylesType;

var _default = function _default(_ref) {
  var spacing = _ref.spacing;
  var options = {};
  Object.keys(spacing).forEach(function (spacingName) {
    options[spacingName] = {
      height: spacing[spacingName],
      width: spacing[spacingName]
    };
  });
  return options;
};

exports.default = _default;