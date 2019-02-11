// @flow

import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';

import type { ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes';

import withTheme from '../../../themes/withTheme';
import hasStyleChanged from '../../../utils/hasStyleChanged';
import styles from './styles';
import type { StylesType } from './styles';

type Props = ViewProps & {
    children: Node,
    styles: StylesType,
};

const defaultProps = {
    ...View.defaultProps,
    children: null,
};

type State = {
    styles: Array<StyleSheet.Styles>,
};

const getStyles = (props: Props): Array<StyleSheet.Styles> => {
    const { children, style, styles } = props;

    const isDirectionRow: boolean = children.find(child => child.type.originalComponentName === 'Row');

    return [
        style,
        styles.base,
        styles.directions[isDirectionRow ? 'column' : 'row'],
    ];
};

class Grid extends PureComponent<Props, State> {
    static defaultProps = defaultProps;
    state = {
        styles: getStyles(this.props),
    };
    componentWillReceiveProps(nextProps) {
        const propsOnWhichDependsTheStyle: Array<string> = ['children'];

        if (hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, this.props)) {
            this.setState({ styles: getStyles(nextProps) });
        }
    }
    render() {
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

Grid = withTheme(styles, 'Grid')(Grid);

export default Grid;
