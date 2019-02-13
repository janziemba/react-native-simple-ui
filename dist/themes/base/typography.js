"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _types = require("../../types");

var typography = {
  fontFamily: _reactNative.Platform.select({
    android: 'Roboto',
    ios: 'System'
  }),
  fontSizes: {
    large: 16,
    medium: 14,
    small: 12
  },
  fontWeights: {
    bold: '900',
    medium: '800',
    normal: '600' // 500 looks different on iOS and Android

  },
  iconSet: 'MaterialIcons',
  sizes: {
    h1: {
      fontSize: 31,
      fontWeight: '900'
    },
    h2: {
      fontSize: 25,
      fontWeight: '900'
    },
    h3: {
      fontSize: 19,
      fontWeight: '800'
    },
    h4: {
      fontSize: 17,
      fontWeight: '800'
    },
    h5: {
      fontSize: 16,
      fontWeight: '800'
    },
    h6: {
      fontSize: 15,
      fontWeight: '700'
    },
    normal: {
      fontSize: 14,
      fontWeight: '700'
    },
    small: {
      fontSize: 12
    }
  }
};
var _default = typography;
exports.default = _default;