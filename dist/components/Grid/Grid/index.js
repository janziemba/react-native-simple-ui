Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/Grid/Grid/index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _withTheme=require('../../../themes/withTheme');var _withTheme2=_interopRequireDefault(_withTheme);var _hasStyleChanged=require('../../../utils/hasStyleChanged');var _hasStyleChanged2=_interopRequireDefault(_hasStyleChanged);var _styles=require('./styles');var _styles2=_interopRequireDefault(_styles);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var getStyles=function getStyles(props){var children=props.children,style=props.style,styles=props.styles;var isDirectionRow=children.find(function(child){return child.type.originalComponentName==='Row';});return[style,styles.base,styles.directions[isDirectionRow?'column':'row']];};var propTypes=_extends({},_reactNative.View.propTypes,{children:_propTypes2.default.node.isRequired,styles:_propTypes2.default.objectOf(_propTypes2.default.object).isRequired});var defaultProps=_extends({},_reactNative.View.defaultProps);var Grid=function(_PureComponent){_inherits(Grid,_PureComponent);function Grid(props){_classCallCheck(this,Grid);var _this=_possibleConstructorReturn(this,(Grid.__proto__||Object.getPrototypeOf(Grid)).call(this,props));_this.state={styles:getStyles(props)};return _this;}_createClass(Grid,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){var propsOnWhichDependsTheStyle=['children'];if((0,_hasStyleChanged2.default)(propsOnWhichDependsTheStyle,nextProps,this.props)){this.setState({styles:getStyles(nextProps)});}}},{key:'render',value:function render(){var children=this.props.children;var styles=this.state.styles;return _react2.default.createElement(_reactNative.View,_extends({},this.props,{style:styles,__source:{fileName:_jsxFileName,lineNumber:51}}),children);}}]);return Grid;}(_react.PureComponent);Grid.propTypes=propTypes;Grid.defaultProps=defaultProps;Grid=(0,_withTheme2.default)(_styles2.default,'Grid')(Grid);exports.default=Grid;