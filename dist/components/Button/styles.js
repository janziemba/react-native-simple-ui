Object.defineProperty(exports,"__esModule",{value:true});var _merge=require('lodash/merge');var _merge2=_interopRequireDefault(_merge);var _darkenOrLighten=require('../../utils/darkenOrLighten');var _darkenOrLighten2=_interopRequireDefault(_darkenOrLighten);var _constants=require('./constants');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}exports.default=function(_ref){var _iconPositions,_rounding,_sizes,_variants;var colors=_ref.colors,radiuses=_ref.radiuses,spacing=_ref.spacing,typography=_ref.typography;var allColors=(0,_merge2.default)({},_constants.COLORS,colors.palette,colors.social);var colorOptions={};Object.keys(allColors).forEach(function(colorName){var _colorOptions$colorNa;var color=colors.palette[colorName]||colors.social[colorName]||colorName;colorOptions[colorName]=(_colorOptions$colorNa={},_defineProperty(_colorOptions$colorNa,_constants.STATES.active,{container:{backgroundColor:(0,_darkenOrLighten2.default)(color),borderColor:(0,_darkenOrLighten2.default)(color)},text:{color:(0,_darkenOrLighten2.default)(color)}}),_defineProperty(_colorOptions$colorNa,_constants.STATES.disabled,{container:{backgroundColor:(0,_darkenOrLighten2.default)(color,0.5),borderColor:(0,_darkenOrLighten2.default)(color,0.5)},text:{color:(0,_darkenOrLighten2.default)(color,0.5)}}),_defineProperty(_colorOptions$colorNa,_constants.STATES.inactive,{container:{backgroundColor:color,borderColor:color},text:{color:color}}),_colorOptions$colorNa);});return{base:{container:{alignItems:'center',borderWidth:1,justifyContent:'center',overflow:'hidden'},text:{fontWeight:typography.fontWeights.medium,textAlign:'center'},touchable:{alignSelf:'stretch'}},colors:colorOptions,iconPositions:(_iconPositions={},_defineProperty(_iconPositions,_constants.ICON_POSITIONS.bottom,{iconContainer:{marginTop:spacing.small}}),_defineProperty(_iconPositions,_constants.ICON_POSITIONS.left,{container:{flexDirection:'row'},iconContainer:{marginRight:spacing.small}}),_defineProperty(_iconPositions,_constants.ICON_POSITIONS.right,{container:{flexDirection:'row'},iconContainer:{marginLeft:spacing.small}}),_defineProperty(_iconPositions,_constants.ICON_POSITIONS.top,{iconContainer:{marginBottom:spacing.small}}),_iconPositions),rounding:(_rounding={},_defineProperty(_rounding,_constants.ROUNDING.normal,{borderRadius:radiuses.small}),_defineProperty(_rounding,_constants.ROUNDING.rounded,{borderRadius:1000}),_defineProperty(_rounding,_constants.ROUNDING.sharp,{borderRadius:0}),_rounding),sizes:(_sizes={},_defineProperty(_sizes,_constants.SIZES.large,{container:{paddingHorizontal:spacing.huge,paddingVertical:spacing.large},text:{fontSize:typography.fontSizes.large}}),_defineProperty(_sizes,_constants.SIZES.medium,{container:{paddingHorizontal:spacing.large,paddingVertical:spacing.medium},text:{fontSize:typography.fontSizes.medium}}),_defineProperty(_sizes,_constants.SIZES.small,{container:{paddingHorizontal:spacing.medium,paddingVertical:spacing.small},text:{fontSize:typography.fontSizes.small}}),_sizes),variants:(_variants={},_defineProperty(_variants,_constants.VARIANTS.default,{text:{color:'white'}}),_defineProperty(_variants,_constants.VARIANTS.flat,{container:{backgroundColor:'transparent',borderColor:'transparent'}}),_defineProperty(_variants,_constants.VARIANTS.outlined,{container:{backgroundColor:'transparent'}}),_variants)};};