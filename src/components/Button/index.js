// @flow

import Color from 'color';
import React, { Fragment, PureComponent } from 'react';
import type { Node } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import omit from 'lodash/omit';
import type { Props as TouchableWithoutFeedbackProps } from 'react-native/Libraries/Components/Touchable/TouchableWithoutFeedback';

import withTheme from '../../themes/withTheme';
import hasStyleChanged from '../../utils/hasStyleChanged';
import Icon from '../Icon';
import type { Props as IconProps } from '../Icon';
import LinearGradient from '../LinearGradient';
import type { Props as LinearGradientProps } from '../LinearGradient';
import { ICON_POSITIONS, ROUNDING, SIZES, STATES, VARIANTS } from './constants';
import styles from './styles';
import type { StylesType } from './styles';

type Props = TouchableWithoutFeedbackProps & {
    color?: string,
    icon?: IconProps,
    linearGradient?: LinearGradientProps,
    loading?: boolean,
    rounding?: string, // eslint-disable-line react/no-unused-prop-types, max-len
    size?: string, // eslint-disable-line react/no-unused-prop-types
    styles: StylesType, // eslint-disable-line react/no-unused-prop-types, max-len
    text?: string,
    variant?: string, // eslint-disable-line react/no-unused-prop-types, max-len
};

const defaultProps = {
    ...TouchableOpacity.defaultProps,
    color: 'primary',
    icon: null,
    linearGradient: null,
    loading: false,
    rounding: ROUNDING.normal,
    size: SIZES.medium,
    text: null,
    variant: VARIANTS.default,
};

type MergedStylesType = {
    container: Array<StyleSheet.Styles>,
    gradient: StyleSheet.Styles,
    iconContainer: StyleSheet.Styles,
    text: StyleSheet.Styles,
    touchable: StyleSheet.Styles,
};

type State = {
    active: boolean,
    height: number,
    styles: MergedStylesType,
    width: number,
};

const getStyles = (props: Props, state?: State): MergedStylesType => {
    const { color, disabled, icon, rounding, size, styles, text, variant } = props;

    let colorState: string = STATES.inactive;
    if (disabled) {
        colorState = STATES.disabled;
    } else if (state && state.active) {
        colorState = STATES.active;
    }

    const result = {
        container: [
            styles.base.container,
            styles.rounding[rounding],
            styles.sizes[size].container,
            styles.colors[color][colorState].container,
            styles.variants[variant].container,
            icon && text
                ? styles.iconPositions[icon.position || ICON_POSITIONS.left].container : {},
        ],
        gradient: styles.base.gradient,
        iconContainer: icon && text
            ? styles.iconPositions[icon.position || ICON_POSITIONS.left].iconContainer : {},
        text: [],
        touchable: [
            styles.base.touchable,
            styles.rounding[rounding],
        ],
    };

    let textColor: string = styles.colors[color][colorState].text.color;

    if (variant === VARIANTS.default && colorState === STATES.inactive) {
        if ((new Color(StyleSheet.flatten(result.container).backgroundColor)).lightness() < 75) {
            textColor = 'white';
        } else {
            textColor = 'black';
        }
    } else if (styles.variants[variant].text) {
        textColor = styles.variants[variant].text.color;
    }

    result.text = [
        styles.base.text,
        styles.sizes[size].text,
        styles.colors[color][colorState].text,
        textColor ? { color: textColor } : {},
    ];

    return result;
};

class Button extends PureComponent<Props, State> {
    static defaultProps = defaultProps;
    state = {
        active: false, // eslint-disable-line react/no-unused-state
        height: 0,
        styles: getStyles(this.props),
        width: 0,
    };
    constructor(props: Props): void {
        super(props);

        (this: any).onLayout = this.onLayout.bind(this);
        (this: any).onPressIn = this.onPressIn.bind(this);
        (this: any).onPressOut = this.onPressOut.bind(this);
        (this: any).renderIcon = this.renderIcon.bind(this);
        (this: any).renderIconAfterText = this.renderIconAfterText.bind(this);
        (this: any).renderIconBeforeText = this.renderIconBeforeText.bind(this);
        (this: any).renderContent = this.renderContent.bind(this);
    }
    componentWillReceiveProps(nextProps: Props): void {
        const propsOnWhichDependsTheStyle: Array<string> = ['color', 'disabled', 'icon', 'rounding', 'size', 'variant'];

        if (hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, this.props)) {
            this.setState(prevState => ({ styles: getStyles(nextProps, prevState) }));
        }
    }
    onLayout(event): void {
        const { height, width } = event.nativeEvent.layout;

        this.setState({ height, width });
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
                    {...icon}
                    color={StyleSheet.flatten(styles.text).color}
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
    renderContent(): Node {
        const { loading, text } = this.props;
        const { styles } = this.state;

        if (loading) {
            return (
                <ActivityIndicator />
            );
        }

        if (!text) {
            return this.renderIcon();
        }

        return (
            <Fragment>
                {this.renderIconBeforeText()}
                <Text style={styles.text}>
                    {text}
                </Text>
                {this.renderIconAfterText()}
            </Fragment>
        );
    }
    render(): Node {
        const { disabled, linearGradient, onPress } = this.props;
        const { height, styles, width } = this.state;

        return (
            <TouchableOpacity
                {...omit(this.props, ['styles'])}
                accessibilityRole="button"
                activeOpacity={1}
                delayPressOut={50} // to highlight the button even if it's touched quickly
                disabled={disabled || !onPress}
                onLayout={this.onLayout}
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}
                style={styles.touchable}
            >
                {linearGradient && (
                    <View style={styles.gradient}>
                        <LinearGradient
                            {...linearGradient}
                            height={height}
                            width={width}
                        />
                    </View>
                )}
                <View style={styles.container}>
                    {this.renderContent()}
                </View>
            </TouchableOpacity>
        );
    }
}

Button = withTheme(styles, 'Button')(Button);

export default Button;
