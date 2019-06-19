// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { StyleSheet, View } from 'react-native';

import type { ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes';

import withTheme from '../../themes/withTheme';
import hasStyleChanged from '../../utils/hasStyleChanged';
import styles from './styles';
import type { StylesType } from './styles';

type Props = ViewProps & {
    children: Node,
    multiplier?: number, // eslint-disable-line react/no-unused-prop-types
    size?: string, // eslint-disable-line react/no-unused-prop-types
    sizeBottom?: string, // eslint-disable-line react/no-unused-prop-types
    sizeHorizontal?: string, // eslint-disable-line react/no-unused-prop-types
    sizeLeft?: string, // eslint-disable-line react/no-unused-prop-types
    sizeRight?: string, // eslint-disable-line react/no-unused-prop-types
    sizeTop?: string, // eslint-disable-line react/no-unused-prop-types
    sizeVertical?: string, // eslint-disable-line react/no-unused-prop-types
    styles: StylesType, // eslint-disable-line react/no-unused-prop-types
};

const defaultProps = {
    ...View.defaultProps,
    multiplier: 1,
    size: null,
    sizeBottom: null,
    sizeHorizontal: null,
    sizeLeft: null,
    sizeRight: null,
    sizeTop: null,
    sizeVertical: null,
};

type State = {
    styles: StyleSheet.Styles,
};

const getStyles = (props: Props): StyleSheet.Styles => {
    const {
        multiplier, size, sizeBottom, sizeHorizontal, sizeLeft, sizeRight, sizeTop, sizeVertical,
        styles,
    } = props;

    const result: StyleSheet.Styles = styles || {};

    if (size) {
        result.padding = styles[size].padding * (multiplier || 1);
    }

    if (sizeHorizontal) {
        result.paddingHorizontal = styles[sizeHorizontal].padding * (multiplier || 1);
    }

    if (sizeVertical) {
        result.paddingVertical = styles[sizeVertical].padding * (multiplier || 1);
    }

    if (sizeBottom) {
        result.paddingBottom = styles[sizeBottom].padding * (multiplier || 1);
    }

    if (sizeLeft) {
        result.paddingLeft = styles[sizeLeft].padding * (multiplier || 1);
    }

    if (sizeRight) {
        result.paddingRight = styles[sizeRight].padding * (multiplier || 1);
    }

    if (sizeTop) {
        result.paddingTop = styles[sizeTop].padding * (multiplier || 1);
    }

    return result;
};

class Padding extends PureComponent<Props, State> {
    static defaultProps = defaultProps;
    state = {
        styles: getStyles(this.props),
    };
    componentWillReceiveProps(nextProps: Props): void {
        const propsOnWhichDependsTheStyle: Array<string> = [
            'multiplier', 'size', 'sizeBottom', 'sizeHorizontal', 'sizeLeft', 'sizeRight',
            'sizeTop', 'sizeVertical',
        ];

        if (hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, this.props)) {
            this.setState({ styles: getStyles(nextProps) });
        }
    }
    render(): Node {
        const { children } = this.props;
        const { styles } = this.state;

        return (
            <View
                {...this.props}
                style={styles}
            >
                {children}
            </View>
        );
    }
}

Padding = withTheme(styles, 'Padding')(Padding);

export default Padding;
