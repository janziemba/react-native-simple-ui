// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

import type { TextProps } from 'react-native/Libraries/Text/TextProps';

import withTheme from '../../themes/withTheme';
import hasStyleChanged from '../../utils/hasStyleChanged';
import { SIZES } from './constants';
import styles from './styles';
import type { StylesType } from './styles';

export type Props = TextProps & {
    color?: string,
    size?: string,
};

type PrivateProps = Props & {
    styles: StylesType,
};

export const defaultProps = {
    ...RNText.defaultProps,
    color: null,
    size: SIZES.normal,
};

type State = {
    styles: Array<StyleSheet.Styles>,
};

const getStyles = (props: PrivateProps): Array<StyleSheet.Styles> => {
    const { color, size, styles } = props;

    return [
        styles.base,
        styles.sizes[size],
        color ? styles.colors[color] : {},
    ];
};

class Text extends PureComponent<PrivateProps, State> {
    static defaultProps = defaultProps;
    state = {
        styles: getStyles(this.props),
    };
    componentWillReceiveProps(nextProps: PrivateProps): void {
        const propsOnWhichDependsTheStyle: Array<string> = ['color', 'size'];

        if (hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, this.props)) {
            this.setState({ styles: getStyles(nextProps) });
        }
    }
    render(): Node {
        const { children } = this.props;
        const { styles } = this.state;

        return (
            <RNText
                {...this.props}
                style={styles}
            >
                {children}
            </RNText>
        );
    }
}

Text = withTheme(styles, 'Text')(Text);

export default Text;
