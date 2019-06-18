"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasStyleChanged;

function hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, currentProps) {
  var styleHasChanged = false;
  propsOnWhichDependsTheStyle.push('style');
  propsOnWhichDependsTheStyle.forEach(function (prop) {
    // eslint-disable-next-line react/destructuring-assignment
    if (nextProps[prop] !== currentProps[prop]) {
      styleHasChanged = true;
    }
  });
  return styleHasChanged;
}