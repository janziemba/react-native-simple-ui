Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/Toolbar/index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _react=require('react');var _react2=_interopRequireDefault(_react);var _withTheme=require('../../themes/withTheme');var _withTheme2=_interopRequireDefault(_withTheme);var _hasStyleChanged=require('../../utils/hasStyleChanged');var _hasStyleChanged2=_interopRequireDefault(_hasStyleChanged);var _Column=require('../Grid/Column');var _Column2=_interopRequireDefault(_Column);var _Grid=require('../Grid/Grid');var _Grid2=_interopRequireDefault(_Grid);var _styles=require('./styles');var _styles2=_interopRequireDefault(_styles);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var getStyles=function getStyles(props){var color=props.color,styles=props.styles;return[styles.base.container,styles.colors[color].container];};var propTypes={centerElement:_propTypes2.default.node,color:_propTypes2.default.string,leftElement:_propTypes2.default.node,rightElement:_propTypes2.default.node,styles:_propTypes2.default.objectOf(_propTypes2.default.object).isRequired};var defaultProps={centerElement:null,color:'primary',leftElement:null,rightElement:null};var Toolbar=function(_PureComponent){_inherits(Toolbar,_PureComponent);function Toolbar(props){_classCallCheck(this,Toolbar);var _this=_possibleConstructorReturn(this,(Toolbar.__proto__||Object.getPrototypeOf(Toolbar)).call(this,props));_this.state={styles:getStyles(props)};return _this;}_createClass(Toolbar,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){var propsOnWhichDependsTheStyle=['color'];if((0,_hasStyleChanged2.default)(propsOnWhichDependsTheStyle,nextProps,this.props)){this.setState({styles:getStyles(nextProps)});}}},{key:'render',value:function render(){var _props=this.props,centerElement=_props.centerElement,leftElement=_props.leftElement,rightElement=_props.rightElement;var styles=this.state.styles;return _react2.default.createElement(_Grid2.default,{style:styles,__source:{fileName:_jsxFileName,lineNumber:54}},_react2.default.createElement(_Column2.default,{__source:{fileName:_jsxFileName,lineNumber:55}},leftElement),_react2.default.createElement(_Column2.default,{size:2,__source:{fileName:_jsxFileName,lineNumber:58}},centerElement),_react2.default.createElement(_Column2.default,{__source:{fileName:_jsxFileName,lineNumber:61}},rightElement));}}]);return Toolbar;}(_react.PureComponent);Toolbar.propTypes=propTypes;Toolbar.defaultProps=defaultProps;Toolbar=(0,_withTheme2.default)(_styles2.default,'Toolbar')(Toolbar);exports.default=Toolbar;