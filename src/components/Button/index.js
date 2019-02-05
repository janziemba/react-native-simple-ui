import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import omit from 'lodash/omit';

import withTheme from '../../themes/withTheme';
import hasStyleChanged from '../../utils/hasStyleChanged';
import Icon, { propTypes as iconPropTypes } from '../Icon';
import { propTypes as linearGradientPropTypes } from '../LinearGradient';
import { ICON_POSITIONS, ROUNDING, SIZES, STATES, VARIANTS } from './constants';
import styles from './styles';

const getStyles = (props, state) => {
    const { color, disabled, icon, rounding, size, styles, variant } = props;
    const { active } = state;

    let colorState = STATES.inactive;
    if (disabled) {
        colorState = STATES.disabled;
    } else if (active) {
        colorState = STATES.active;
    }

    return {
        ...styles,
        container: [
            styles.base.container,
            styles.rounding[rounding],
            styles.sizes[size].container,
            styles.colors[color][colorState].container,
            styles.variants[variant].container,
            icon ? styles.iconPositions[icon.position || ICON_POSITIONS.left].container : {},
        ],
        iconColor: (styles.variants[variant].text && styles.variants[variant].text.color)
            || styles.colors[color][colorState].text.color
            || styles.base.text.color,
        iconContainer: [
            styles.base.iconContainer,
            icon ? styles.iconPositions[icon.position || ICON_POSITIONS.left].iconContainer : {},
        ],
        text: [
            styles.base.text,
            styles.sizes[size].text,
            styles.colors[color][colorState].text,
            styles.variants[variant].text,
        ],
    };
};

const propTypes = {
    ...TouchableOpacity.propTypes, // eslint-disable-line react/forbid-foreign-prop-types
    color: PropTypes.string,
    icon: PropTypes.shape({
        ...omit(iconPropTypes, ['styles', 'theme']),
        position: PropTypes.oneOf(Object.keys(ICON_POSITIONS)),
    }),
    linearGradient: PropTypes.shape({
        ...omit(linearGradientPropTypes, ['styles', 'theme']),
    }),
    rounding: PropTypes.oneOf(Object.keys(ROUNDING)), // eslint-disable-line react/no-unused-prop-types, max-len
    size: PropTypes.oneOf(Object.keys(SIZES)), // eslint-disable-line react/no-unused-prop-types
    styles: PropTypes.objectOf(PropTypes.object).isRequired, // eslint-disable-line react/no-unused-prop-types, max-len
    text: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(Object.keys(VARIANTS)), // eslint-disable-line react/no-unused-prop-types, max-len
};

const defaultProps = {
    ...TouchableOpacity.defaultProps,
    color: 'primary',
    icon: null,
    linearGradient: null,
    rounding: ROUNDING.normal,
    size: SIZES.medium,
    variant: VARIANTS.default,
};

class Button extends PureComponent {
    constructor(props) {
        super(props);

        this.onPressIn = this.onPressIn.bind(this);
        this.onPressOut = this.onPressOut.bind(this);
        this.renderIcon = this.renderIcon.bind(this);
        this.renderIconAfterText = this.renderIconAfterText.bind(this);
        this.renderIconBeforeText = this.renderIconBeforeText.bind(this);

        const state = {
            active: false,
        };

        this.state = {
            ...state,
            styles: getStyles(props, state),
        };
    }
    componentWillReceiveProps(nextProps) {
        const propsOnWhichDependsTheStyle = ['color', 'disabled', 'icon', 'rounding', 'size', 'variant'];

        if (hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, this.props)) {
            this.setState(prevState => ({ styles: getStyles(nextProps, prevState) }));
        }
    }
    onPressIn() {
        this.setState(
            // eslint-disable-next-line react/no-unused-state
            { active: true },
            () => this.setState(prevState => ({ styles: getStyles(this.props, prevState) })),
        );
    }
    onPressOut() {
        this.setState(
            // eslint-disable-next-line react/no-unused-state
            { active: false },
            () => this.setState(prevState => ({ styles: getStyles(this.props, prevState) })),
        );
    }
    renderIcon() {
        const { icon } = this.props;
        const { styles } = this.state;

        if (!icon) {
            return null;
        }

        return (
            <View style={styles.iconContainer}>
                <Icon
                    color={styles.iconColor}
                    iconSet={icon.iconSet}
                    name={icon.name}
                    size={icon.size || 16}
                />
            </View>
        );
    }
    renderIconAfterText() {
        const { icon } = this.props;

        if (!icon || !icon.position
            || ![ICON_POSITIONS.bottom, ICON_POSITIONS.right].includes(icon.position)) {
            return null;
        }

        return this.renderIcon();
    }
    renderIconBeforeText() {
        const { icon } = this.props;

        if (!icon
            || ![ICON_POSITIONS.left, ICON_POSITIONS.top, undefined].includes(icon.position)) {
            return null;
        }

        return this.renderIcon();
    }
    render() {
        const { disabled, onPress, text } = this.props;
        const { styles } = this.state;

        return (
            <TouchableOpacity
                {...omit(this.props, ['styles'])}
                accessibilityRole="button"
                activeOpacity={1}
                delayPressOut={50} // to highlight the button even if it's touched quickly
                disabled={disabled || !onPress}
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}
                style={styles.base.touchable}
            >
                <View style={styles.container}>
                    {this.renderIconBeforeText()}
                    <Text style={styles.text}>
                        {text}
                    </Text>
                    {this.renderIconAfterText()}
                </View>
            </TouchableOpacity>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

Button = withTheme(styles, 'Button')(Button);

export default Button;
