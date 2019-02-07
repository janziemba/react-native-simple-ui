Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _merge=require('lodash/merge');var _merge2=_interopRequireDefault(_merge);var _constants=require('./constants');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}exports.default=function(_ref){var _sizes;var colors=_ref.colors,spacing=_ref.spacing,typography=_ref.typography;var allColors=(0,_merge2.default)({},_constants.COLORS,colors.palette,colors.social);var colorOptions={};Object.keys(allColors).forEach(function(colorName){var color=allColors[colorName];colorOptions[colorName]={color:color};});return{base:{color:colors.text.primary,fontFamily:typography.fontFamily,textAlign:'center'},colors:colorOptions,sizes:(_sizes={},_defineProperty(_sizes,_constants.SIZES.h1,_extends({},typography.sizes.h1,{marginBottom:spacing.medium})),_defineProperty(_sizes,_constants.SIZES.h2,_extends({},typography.sizes.h2,{marginBottom:spacing.medium})),_defineProperty(_sizes,_constants.SIZES.h3,_extends({},typography.sizes.h3,{marginBottom:spacing.medium})),_defineProperty(_sizes,_constants.SIZES.h4,_extends({},typography.sizes.h4,{marginBottom:spacing.medium})),_defineProperty(_sizes,_constants.SIZES.h5,_extends({},typography.sizes.h5,{marginBottom:spacing.small})),_defineProperty(_sizes,_constants.SIZES.h6,_extends({},typography.sizes.h6,{marginBottom:spacing.small})),_defineProperty(_sizes,_constants.SIZES.normal,_extends({},typography.sizes.normal)),_defineProperty(_sizes,_constants.SIZES.small,_extends({},typography.sizes.small)),_sizes)};};