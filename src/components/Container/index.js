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
    alignment?: string,
    margin?: string,
    padding?: string,
    styles: StylesType,
};

const defaultProps = {
    ...View.defaultProps,
    alignment: null,
    margin: null,
    padding: null,
};

type State = {
    styles: Array<StyleSheet.Styles>,
};

const getStyles = (props: Props): Array<StyleSheet.Styles> => {
    const { alignment, margin, padding, style, styles } = props;

    return [
        style,
        styles.base,
        alignment ? styles.alignment[alignment] : {},
        margin ? styles.margin[margin] : {},
        padding ? styles.padding[padding] : {},
    ];
};

class Container extends PureComponent<Props, State> {
    static defaultProps = defaultProps;
    state = {
        styles: getStyles(this.props),
    };
    componentWillReceiveProps(nextProps): void {
        const propsOnWhichDependsTheStyle: Array<string> = ['align', 'margin', 'padding', 'style'];

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

Container = withTheme(styles, 'Container')(Container);

export default Container;
