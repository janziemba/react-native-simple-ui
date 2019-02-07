Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/Grid/Row/index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _withTheme=require('../../../themes/withTheme');var _withTheme2=_interopRequireDefault(_withTheme);var _hasStyleChanged=require('../../../utils/hasStyleChanged');var _hasStyleChanged2=_interopRequireDefault(_hasStyleChanged);var _styles=require('./styles');var _styles2=_interopRequireDefault(_styles);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var getStyles=function getStyles(props){var size=props.size,style=props.style,styles=props.styles;var flex=1;if(size){flex=size;}else if(style&&style.width){flex=0;}return[style,styles.base,{flex:flex}];};var propTypes=_extends({},_reactNative.View.propTypes,{children:_propTypes2.default.node,size:_propTypes2.default.number,styles:_propTypes2.default.objectOf(_propTypes2.default.object).isRequired});var defaultProps=_extends({},_reactNative.View.defaultProps,{children:null,size:null});var Row=function(_PureComponent){_inherits(Row,_PureComponent);function Row(props){_classCallCheck(this,Row);var _this=_possibleConstructorReturn(this,(Row.__proto__||Object.getPrototypeOf(Row)).call(this,props));_this.state={styles:getStyles(props)};return _this;}_createClass(Row,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){var propsOnWhichDependsTheStyle=['size','style'];if((0,_hasStyleChanged2.default)(propsOnWhichDependsTheStyle,nextProps,this.props)){this.setState({styles:getStyles(nextProps)});}}},{key:'render',value:function render(){var children=this.props.children;var styles=this.state.styles;return _react2.default.createElement(_reactNative.View,_extends({},this.props,{style:styles,__source:{fileName:_jsxFileName,lineNumber:60}}),children);}}]);return Row;}(_react.PureComponent);Row.propTypes=propTypes;Row.defaultProps=defaultProps;Row=(0,_withTheme2.default)(_styles2.default,'Row')(Row);exports.default=Row;