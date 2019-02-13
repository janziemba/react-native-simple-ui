"use strict";

var _hasStyleChanged = _interopRequireDefault(require("../hasStyleChanged"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('returns true if style changed', function () {
  var propsOnWhichDependsTheStyle = ['color', 'size'];
  var nextProps = {
    color: 'blue',
    size: 1
  };
  var currentProps = {
    color: 'blue',
    size: 2
  };
  var result = (0, _hasStyleChanged.default)(propsOnWhichDependsTheStyle, nextProps, currentProps);
  expect(result).toBeTruthy();
});