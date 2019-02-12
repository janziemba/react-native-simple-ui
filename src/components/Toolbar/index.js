// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { StyleSheet } from 'react-native';

import injectTheme from '../../themes/injectTheme';
import hasStyleChanged from '../../utils/hasStyleChanged';
import Column from '../Grid/Column';
import Grid from '../Grid/Grid';
import styles from './styles';
import type { StylesType } from './styles';

type Props = {
    centerElement: Node,
    color: string, // eslint-disable-line react/no-unused-prop-types
    leftElement: Node,
    rightElement: Node,
    styles: StylesType, // eslint-disable-line react/no-unused-prop-types
};

type State = {
    styles: Array<StyleSheet.Styles>,
};

const getStyles = (props: Props): Array<StyleSheet.Styles> => {
    const { color, styles } = props;

    return [
        styles.base.container,
        styles.colors[color].container,
    ];
};

class Toolbar extends PureComponent<Props, State> {
    static defaultProps = {
        centerElement: null,
        color: 'primary',
        leftElement: null,
        rightElement: null,
    };
    state = {
        styles: getStyles(this.props),
    };
    componentWillReceiveProps(nextProps: Props): void {
        const propsOnWhichDependsTheStyle: Array<string> = ['color'];

        if (hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, this.props)) {
            this.setState({ styles: getStyles(nextProps) });
        }
    }
    render(): Node {
        const { centerElement, leftElement, rightElement } = this.props;
        const { styles } = this.state;

        return (
            <Grid style={styles}>
                <Column>
                    {leftElement}
                </Column>
                <Column size={2}>
                    {centerElement}
                </Column>
                <Column>
                    {rightElement}
                </Column>
            </Grid>
        );
    }
}

Toolbar = injectTheme(styles, 'Toolbar')(Toolbar);

export default Toolbar;
