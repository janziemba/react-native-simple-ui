// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { StyleSheet, View } from 'react-native';

import type { ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes';

import withTheme from '../../../themes/withTheme';
import hasStyleChanged from '../../../utils/hasStyleChanged';
import styles from './styles';
import type { StylesType } from './styles';

type Props = ViewProps & {
    size?: number,
    styles: StylesType,
};

const defaultProps = {
    ...View.defaultProps,
    size: null,
};

type State = {
    styles: Array<StyleSheet.Styles>,
};

const getStyles = (props: Props): Array<StyleSheet.Styles> => {
    const { size, style, styles } = props;

    let flex = 1;

    if (size) {
        flex = size;
    } else if (style && style.width) {
        flex = 0;
    }

    return [
        style,
        styles.base,
        { flex },
    ];
};

class Row extends PureComponent<Props, State> {
    static defaultProps = defaultProps;
    state = {
        styles: getStyles(this.props),
    };
    componentWillReceiveProps(nextProps: Props): void {
        const propsOnWhichDependsTheStyle: Array<string> = ['size', 'style'];

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

Row = withTheme(styles, 'Row')(Row);

export default Row;
