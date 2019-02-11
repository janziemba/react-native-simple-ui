Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/Button/index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _omit=require('lodash/omit');var _omit2=_interopRequireDefault(_omit);var _withTheme=require('../../themes/withTheme');var _withTheme2=_interopRequireDefault(_withTheme);var _hasStyleChanged=require('../../utils/hasStyleChanged');var _hasStyleChanged2=_interopRequireDefault(_hasStyleChanged);var _Icon=require('../Icon');var _Icon2=_interopRequireDefault(_Icon);var _constants=require('./constants');var _styles=require('./styles');var _styles2=_interopRequireDefault(_styles);var _LinearGradient=require('../LinearGradient');var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var defaultProps=_extends({},_reactNative.TouchableOpacity.defaultProps,{color:'primary',icon:null,linearGradient:null,rounding:_constants.ROUNDING.normal,size:_constants.SIZES.medium,variant:_constants.VARIANTS.default});var getStyles=function getStyles(props,state){var color=props.color,disabled=props.disabled,icon=props.icon,rounding=props.rounding,size=props.size,styles=props.styles,variant=props.variant;var colorState=_constants.STATES.inactive;if(disabled){colorState=_constants.STATES.disabled;}else if(state&&state.active){colorState=_constants.STATES.active;}return{container:[styles.base.container,styles.rounding[rounding],styles.sizes[size].container,styles.colors[color][colorState].container,styles.variants[variant].container,icon?styles.iconPositions[icon.position||_constants.ICON_POSITIONS.left].container:{}],iconColor:styles.variants[variant].text&&styles.variants[variant].text.color||styles.colors[color][colorState].text.color||styles.base.text.color,iconContainer:[styles.base.iconContainer,icon?styles.iconPositions[icon.position||_constants.ICON_POSITIONS.left].iconContainer:{}],text:[styles.base.text,styles.sizes[size].text,styles.colors[color][colorState].text,styles.variants[variant].text],touchable:styles.touchable};};var Button=function(_PureComponent){_inherits(Button,_PureComponent);function Button(props){_classCallCheck(this,Button);var _this=_possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).call(this,props));_this.state={active:false,styles:getStyles(_this.props)};_this.onPressIn=_this.onPressIn.bind(_this);_this.onPressOut=_this.onPressOut.bind(_this);_this.renderIcon=_this.renderIcon.bind(_this);_this.renderIconAfterText=_this.renderIconAfterText.bind(_this);_this.renderIconBeforeText=_this.renderIconBeforeText.bind(_this);return _this;}_createClass(Button,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){var propsOnWhichDependsTheStyle=['color','disabled','icon','rounding','size','variant'];if((0,_hasStyleChanged2.default)(propsOnWhichDependsTheStyle,nextProps,this.props)){this.setState(function(prevState){return{styles:getStyles(nextProps,prevState)};});}}},{key:'onPressIn',value:function onPressIn(){var _this2=this;this.setState({active:true},function(){return _this2.setState(function(prevState){return{styles:getStyles(_this2.props,prevState)};});});}},{key:'onPressOut',value:function onPressOut(){var _this3=this;this.setState({active:false},function(){return _this3.setState(function(prevState){return{styles:getStyles(_this3.props,prevState)};});});}},{key:'renderIcon',value:function renderIcon(){var icon=this.props.icon;var styles=this.state.styles;if(!icon){return null;}return _react2.default.createElement(_reactNative.View,{style:styles.iconContainer,__source:{fileName:_jsxFileName,lineNumber:133}},_react2.default.createElement(_Icon2.default,{color:styles.iconColor,iconSet:icon.iconSet,name:icon.name,size:icon.size||16,__source:{fileName:_jsxFileName,lineNumber:134}}));}},{key:'renderIconAfterText',value:function renderIconAfterText(){var icon=this.props.icon;if(!icon||!icon.position||![_constants.ICON_POSITIONS.bottom,_constants.ICON_POSITIONS.right].includes(icon.position)){return null;}return this.renderIcon();}},{key:'renderIconBeforeText',value:function renderIconBeforeText(){var icon=this.props.icon;if(!icon||![_constants.ICON_POSITIONS.left,_constants.ICON_POSITIONS.top,undefined].includes(icon.position)){return null;}return this.renderIcon();}},{key:'render',value:function render(){var _props=this.props,disabled=_props.disabled,onPress=_props.onPress,text=_props.text;var styles=this.state.styles;return _react2.default.createElement(_reactNative.TouchableOpacity,_extends({},(0,_omit2.default)(this.props,['styles']),{accessibilityRole:'button',activeOpacity:1,delayPressOut:50,disabled:disabled||!onPress,onPressIn:this.onPressIn,onPressOut:this.onPressOut,style:styles.touchable,__source:{fileName:_jsxFileName,lineNumber:168}}),_react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:178}},this.renderIconBeforeText(),_react2.default.createElement(_reactNative.Text,{style:styles.text,__source:{fileName:_jsxFileName,lineNumber:180}},text),this.renderIconAfterText()));}}]);return Button;}(_react.PureComponent);Button.defaultProps=defaultProps;Button.propTypes={color:_propTypes2.default.string.isRequired,icon:function icon(){return(typeof _Icon.bpfrpt_proptype_Props==='function'?_Icon.bpfrpt_proptype_Props.isRequired?_Icon.bpfrpt_proptype_Props.isRequired:_Icon.bpfrpt_proptype_Props:_propTypes2.default.shape(_Icon.bpfrpt_proptype_Props).isRequired).apply(this,arguments);},linearGradient:function linearGradient(){return(typeof _LinearGradient.bpfrpt_proptype_Props==='function'?_LinearGradient.bpfrpt_proptype_Props.isRequired?_LinearGradient.bpfrpt_proptype_Props.isRequired:_LinearGradient.bpfrpt_proptype_Props:_propTypes2.default.shape(_LinearGradient.bpfrpt_proptype_Props).isRequired).apply(this,arguments);},rounding:_propTypes2.default.string.isRequired,size:_propTypes2.default.string.isRequired,styles:function styles(){return(typeof _styles.bpfrpt_proptype_StylesType==='function'?_styles.bpfrpt_proptype_StylesType.isRequired?_styles.bpfrpt_proptype_StylesType.isRequired:_styles.bpfrpt_proptype_StylesType:_propTypes2.default.shape(_styles.bpfrpt_proptype_StylesType).isRequired).apply(this,arguments);},text:_propTypes2.default.string.isRequired,variant:_propTypes2.default.string.isRequired};Button=(0,_withTheme2.default)(_styles2.default,'Button')(Button);exports.default=Button;