// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { StyleSheet, View } from 'react-native';

import withTheme from '../../themes/withTheme';
import hasStyleChanged from '../../utils/hasStyleChanged';
import styles from './styles';
import type { StylesType } from './styles';

type Props = {
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

type State = {
    styles: StyleSheet.Styles,
};

const getStyles = (props: Props): StyleSheet.Styles => {
    const {
        multiplier, size, sizeBottom, sizeHorizontal, sizeLeft, sizeRight, sizeTop, sizeVertical,
        styles,
    } = props;

    const result: StyleSheet.Styles = {
        margin: styles[size || 'medium'].margin * (multiplier || 1),
    };

    if (sizeHorizontal) {
        result.marginHorizontal = styles[sizeHorizontal].margin * (multiplier || 1);
    }

    if (sizeVertical) {
        result.marginVertical = styles[sizeVertical].margin * (multiplier || 1);
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

class Margin extends PureComponent<Props, State> {
    static defaultProps = {
        multiplier: 1,
        size: 'medium',
        sizeBottom: null,
        sizeHorizontal: null,
        sizeLeft: null,
        sizeRight: null,
        sizeTop: null,
        sizeVertical: null,
    };
    state = {
        styles: getStyles(this.props),
    };
    componentWillReceiveProps(nextProps: Props): void {
        const propsOnWhichDependsTheStyle: Array<string> = [
            'multiplier', 'size', 'paddingBottom', 'sizeHorizontal', 'paddingLeft', 'paddingRight',
            'paddingTop', 'sizeVertical',
        ];

        if (hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, this.props)) {
            this.setState({ styles: getStyles(nextProps) });
        }
    }
    render(): Node {
        const { styles } = this.state;

        return (
            <View style={styles} />
        );
    }
}

Margin = withTheme(styles, 'Margin')(Margin);

export default Margin;
