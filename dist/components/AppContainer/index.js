Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/AppContainer/index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _color=require('color');var _color2=_interopRequireDefault(_color);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _withTheme=require('../../themes/withTheme');var _withTheme2=_interopRequireDefault(_withTheme);var _styles=require('./styles');var _styles2=_interopRequireDefault(_styles);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var propTypes={backgroundImage:_propTypes2.default.node,children:_propTypes2.default.node.isRequired,styles:_propTypes2.default.objectOf(_propTypes2.default.object).isRequired};var defaultProps={backgroundImage:null};var AppContainer=function(_PureComponent){_inherits(AppContainer,_PureComponent);function AppContainer(props){_classCallCheck(this,AppContainer);var _this=_possibleConstructorReturn(this,(AppContainer.__proto__||Object.getPrototypeOf(AppContainer)).call(this,props));_this.renderContent=_this.renderContent.bind(_this);return _this;}_createClass(AppContainer,[{key:'renderContent',value:function renderContent(){var _props=this.props,backgroundImage=_props.backgroundImage,children=_props.children,styles=_props.styles;if(!backgroundImage){return children;}return _react2.default.createElement(_reactNative.ImageBackground,{source:backgroundImage,style:styles.imageBackground,__source:{fileName:_jsxFileName,lineNumber:33}},_react2.default.createElement(_reactNative.View,{style:styles.imageBackgroundContent,__source:{fileName:_jsxFileName,lineNumber:37}},children));}},{key:'render',value:function render(){var styles=this.props.styles;var topSafeAreaIsLight=(0,_color2.default)(styles.topSafeArea.backgroundColor).isLight();return _react2.default.createElement(_reactNative.View,{style:styles.wrapper,__source:{fileName:_jsxFileName,lineNumber:49}},_react2.default.createElement(_reactNative.SafeAreaView,{style:styles.topSafeArea,__source:{fileName:_jsxFileName,lineNumber:50}}),_react2.default.createElement(_reactNative.SafeAreaView,{style:styles.bottomSafeArea,__source:{fileName:_jsxFileName,lineNumber:51}},_react2.default.createElement(_reactNative.StatusBar,{barStyle:topSafeAreaIsLight?'dark-content':'light-content',__source:{fileName:_jsxFileName,lineNumber:52}}),_react2.default.createElement(_reactNative.View,{style:styles.content,__source:{fileName:_jsxFileName,lineNumber:55}},this.renderContent())));}}]);return AppContainer;}(_react.PureComponent);AppContainer.propTypes=propTypes;AppContainer.defaultProps=defaultProps;AppContainer=(0,_withTheme2.default)(_styles2.default,'AppContainer')(AppContainer);exports.default=AppContainer;