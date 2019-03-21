// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { StyleSheet } from 'react-native';

import withTheme from '../../themes/withTheme';
import hasStyleChanged from '../../utils/hasStyleChanged';
import Column from '../Grid/Column';
import Grid from '../Grid/Grid';
import Padding from '../Padding';
import styles from './styles';
import type { StylesType } from './styles';

type Props = {
    centerElement?: Node,
    centerElementSize?: number, // eslint-disable-line react/no-unused-prop-types
    color?: string, // eslint-disable-line react/no-unused-prop-types
    leftElement?: Node,
    leftElementSize?: number, // eslint-disable-line react/no-unused-prop-types
    rightElement?: Node,
    rightElementSize?: number, // eslint-disable-line react/no-unused-prop-types
    styles: StylesType, // eslint-disable-line react/no-unused-prop-types
};

type MergedStylesType = {
    centerElement: StyleSheet.Styles,
    container: Array<StyleSheet.Styles>,
    leftElement: StyleSheet.Styles,
    rightElement: StyleSheet.Styles,
};

type State = {
    styles: MergedStylesType,
};

const getStyles = (props: Props): MergedStylesType => {
    const { color, styles } = props;

    return {
        ...styles.base,
        container: [
            styles.base.container,
            styles.colors[color || 'primary'].container,
        ],
    };
};

class Toolbar extends PureComponent<Props, State> {
    static defaultProps = {
        centerElement: null,
        centerElementSize: 1.5,
        color: 'primary',
        leftElement: null,
        leftElementSize: 1,
        rightElement: null,
        rightElementSize: 1,
    };
    state = {
        styles: getStyles(this.props),
    };
    componentWillReceiveProps(nextProps: Props): void {
        const propsOnWhichDependsTheStyle: Array<string> = ['color', 'style'];

        if (hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, this.props)) {
            this.setState({ styles: getStyles(nextProps) });
        }
    }
    render(): Node {
        const {
            centerElement, centerElementSize, leftElement, leftElementSize, rightElement,
            rightElementSize,
        } = this.props;
        const { styles } = this.state;

        return (
            <Grid style={styles.container}>
                <Column size={leftElementSize}>
                    {leftElement && (
                        <Padding
                            size="small"
                            style={styles.leftElement}
                        >
                            {leftElement}
                        </Padding>
                    )}
                </Column>
                <Column size={centerElementSize}>
                    {centerElement && (
                        <Padding
                            size="small"
                            style={styles.centerElement}
                        >
                            {centerElement}
                        </Padding>
                    )}
                </Column>
                <Column size={rightElementSize}>
                    {rightElement && (
                        <Padding
                            size="small"
                            style={styles.rightElement}
                        >
                            {rightElement}
                        </Padding>
                    )}
                </Column>
            </Grid>
        );
    }
}

Toolbar = withTheme(styles, 'Toolbar')(Toolbar);

export default Toolbar;
