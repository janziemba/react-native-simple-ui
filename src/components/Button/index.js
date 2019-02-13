// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import omit from 'lodash/omit';
import type { Props as TouchableWithoutFeedbackProps } from 'react-native/Libraries/Components/Touchable/TouchableWithoutFeedback';

import withTheme from '../../themes/withTheme';
import hasStyleChanged from '../../utils/hasStyleChanged';
import Icon from '../Icon';
import type { Props as IconProps } from '../Icon';
import type { Props as LinearGradientProps } from '../LinearGradient';
import { ICON_POSITIONS, ROUNDING, SIZES, STATES, VARIANTS } from './constants';
import styles from './styles';
import type { StylesType } from './styles';

type Props = TouchableWithoutFeedbackProps & {
    color: string,
    icon: IconProps,
    linearGradient: LinearGradientProps,
    rounding: string, // eslint-disable-line react/no-unused-prop-types, max-len
    size: string, // eslint-disable-line react/no-unused-prop-types
    styles: StylesType, // eslint-disable-line react/no-unused-prop-types, max-len
    text: string,
    variant: string, // eslint-disable-line react/no-unused-prop-types, max-len
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

type MergedStylesType = {
    container: Array<StyleSheet.Styles>,
    iconColor: string,
    iconContainer: StyleSheet.Styles,
    text: StyleSheet.Styles,
    touchable: StyleSheet.Styles,
};

type State = {
    active: boolean,
    styles: MergedStylesType,
};

const getStyles = (props: Props, state?: State): MergedStylesType => {
    const { color, disabled, icon, rounding, size, styles, variant } = props;

    let colorState: string = STATES.inactive;
    if (disabled) {
        colorState = STATES.disabled;
    } else if (state && state.active) {
        colorState = STATES.active;
    }

    return {
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
        touchable: styles.touchable,
    };
};

class Button extends PureComponent<Props, State> {
    static defaultProps = defaultProps;
    state = {
        active: false, // eslint-disable-line react/no-unused-state
        styles: getStyles(this.props),
    };
    constructor(props: Props): void {
        super(props);

        (this: any).onPressIn = this.onPressIn.bind(this);
        (this: any).onPressOut = this.onPressOut.bind(this);
        (this: any).renderIcon = this.renderIcon.bind(this);
        (this: any).renderIconAfterText = this.renderIconAfterText.bind(this);
        (this: any).renderIconBeforeText = this.renderIconBeforeText.bind(this);
    }
    componentWillReceiveProps(nextProps: Props): void {
        const propsOnWhichDependsTheStyle: Array<string> = ['color', 'disabled', 'icon', 'rounding', 'size', 'variant'];

        if (hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, this.props)) {
            this.setState(prevState => ({ styles: getStyles(nextProps, prevState) }));
        }
    }
    onPressIn(): void {
        this.setState(
            // eslint-disable-next-line react/no-unused-state
            { active: true },
            () => this.setState(prevState => ({ styles: getStyles(this.props, prevState) })),
        );
    }
    onPressOut(): void {
        this.setState(
            // eslint-disable-next-line react/no-unused-state
            { active: false },
            () => this.setState(prevState => ({ styles: getStyles(this.props, prevState) })),
        );
    }
    renderIcon(): Node {
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
    renderIconAfterText(): Node {
        const { icon } = this.props;

        if (!icon || !icon.position
            || ![ICON_POSITIONS.bottom, ICON_POSITIONS.right].includes(icon.position)) {
            return null;
        }

        return this.renderIcon();
    }
    renderIconBeforeText(): Node {
        const { icon } = this.props;

        if (!icon
            || ![ICON_POSITIONS.left, ICON_POSITIONS.top, undefined].includes(icon.position)) {
            return null;
        }

        return this.renderIcon();
    }
    render(): Node {
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
                style={styles.touchable}
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

Button = withTheme(styles, 'Button')(Button);

export default Button;
