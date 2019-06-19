// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import omit from 'lodash/omit';
import type { ImageProps } from 'react-native/Libraries/Image/ImageProps';
import type { Props as TouchableOpacityProps } from 'react-native/Libraries/Components/Touchable/TouchableOpacity';

import withTheme from '../../themes/withTheme';
import hasStyleChanged from '../../utils/hasStyleChanged';
import type { ObjectOfStyleSheetsType } from '../../types';
import styles from './styles';
import type { StylesType } from './styles';

export type Props = TouchableOpacityProps & ImageProps.source & {
    color?: string,
    size?: number,
    text?: string,
};

type PrivateProps = Props & {
    styles: StylesType,
};

export const defaultProps = {
    color: null,
    size: 64,
    text: null,
};

type MergedStylesType = {
    container: Array<StyleSheet.Styles>,
    image: Array<StyleSheet.Styles>,
    text: Array<StyleSheet.Styles>,
    touchable: Array<StyleSheet.Styles>,
};

type State = {
    styles: MergedStylesType,
};

const getStyles = (props: PrivateProps): ObjectOfStyleSheetsType => {
    const { color, size, styles } = props;

    const dimensions: {} = {
        height: size,
        width: size,
    };

    return {
        ...styles.base,
        container: [
            styles.base.container,
            styles.colors[color || 'primary'].container,
            dimensions,
        ],
        image: [
            styles.base.image,
            dimensions,
        ],
        text: [
            styles.base.text,
            {
                fontSize: size / 3,
            },
        ],
        touchable: [
            dimensions,
        ],
    };
};

class Avatar extends PureComponent<PrivateProps, State> {
    static defaultProps = defaultProps;
    state = {
        styles: getStyles(this.props),
    };
    constructor(props: Props): void {
        super(props);

        (this: any).renderImage = this.renderImage.bind(this);
        (this: any).renderText = this.renderText.bind(this);
    }
    componentWillReceiveProps(nextProps: PrivateProps): void {
        const propsOnWhichDependsTheStyle: Array<string> = ['color'];

        if (hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, this.props)) {
            this.setState({ styles: getStyles(nextProps) });
        }
    }
    renderImage(): Node {
        const { source } = this.props;
        const { styles } = this.state;

        if (!source) {
            return null;
        }

        return (
            <Image
                resizeMode="cover"
                source={source}
                style={styles.image}
            />
        );
    }
    renderText(): Node {
        const { text } = this.props;
        const { styles } = this.state;

        if (!text) {
            return null;
        }

        return (
            <Text style={styles.text}>
                {text}
            </Text>
        );
    }
    render(): Node {
        const { onPress } = this.props;
        const { styles } = this.state;

        return (
            <TouchableOpacity
                disabled={!onPress}
                onPress={onPress}
                style={styles.touchable}
                {...omit(this.props, ['styles'])}
            >
                <View style={styles.container}>
                    {this.renderImage()}
                    {this.renderText()}
                </View>
            </TouchableOpacity>
        );
    }
}

Avatar = withTheme(styles, 'Avatar')(Avatar);

export default Avatar;
