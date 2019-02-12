Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/Container/index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _injectTheme=require('../../themes/injectTheme');var _injectTheme2=_interopRequireDefault(_injectTheme);var _hasStyleChanged=require('../../utils/hasStyleChanged');var _hasStyleChanged2=_interopRequireDefault(_hasStyleChanged);var _styles=require('./styles');var _styles2=_interopRequireDefault(_styles);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var defaultProps=_extends({},_reactNative.View.defaultProps,{alignment:null,margin:null,padding:null});var getStyles=function getStyles(props){var alignment=props.alignment,margin=props.margin,padding=props.padding,style=props.style,styles=props.styles;return[style,styles.base,alignment?styles.alignment[alignment]:{},margin?styles.margin[margin]:{},padding?styles.padding[padding]:{}];};var Container=function(_PureComponent){_inherits(Container,_PureComponent);function Container(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Container);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Container.__proto__||Object.getPrototypeOf(Container)).call.apply(_ref,[this].concat(args))),_this),_this.state={styles:getStyles(_this.props)},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Container,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){var propsOnWhichDependsTheStyle=['align','margin','padding','style'];if((0,_hasStyleChanged2.default)(propsOnWhichDependsTheStyle,nextProps,this.props)){this.setState({styles:getStyles(nextProps)});}}},{key:'render',value:function render(){var children=this.props.children;var styles=this.state.styles;return _react2.default.createElement(_reactNative.View,_extends({},this.props,{style:styles,__source:{fileName:_jsxFileName,lineNumber:61}}),children);}}]);return Container;}(_react.PureComponent);Container.defaultProps=defaultProps;Container.propTypes={alignment:_propTypes2.default.string.isRequired,margin:_propTypes2.default.string.isRequired,padding:_propTypes2.default.string.isRequired,styles:function styles(){return(typeof _styles.bpfrpt_proptype_StylesType==='function'?_styles.bpfrpt_proptype_StylesType.isRequired?_styles.bpfrpt_proptype_StylesType.isRequired:_styles.bpfrpt_proptype_StylesType:_propTypes2.default.shape(_styles.bpfrpt_proptype_StylesType).isRequired).apply(this,arguments);}};Container=(0,_injectTheme2.default)(_styles2.default,'Container')(Container);exports.default=Container;