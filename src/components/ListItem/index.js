// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native';

import omit from 'lodash/omit';
import type { Props as TouchableOpacityProps } from 'react-native/Libraries/Components/Touchable/TouchableOpacity';

import withTheme from '../../themes/withTheme';
import hasStyleChanged from '../../utils/hasStyleChanged';
import Divider from '../Divider';
import Column from '../Grid/Column';
import Grid from '../Grid/Grid';
import Padding from '../Padding';
import styles from './styles';
import type { StylesType } from './styles';

type Props = TouchableOpacityProps & {
    centerElement?: Node,
    centerElementSize?: number, // eslint-disable-line react/no-unused-prop-types
    color?: string, // eslint-disable-line react/no-unused-prop-types
    divider?: boolean, // eslint-disable-line react/no-unused-prop-types
    leftElement?: Node,
    leftElementSize?: number, // eslint-disable-line react/no-unused-prop-types
    loading?: boolean,
    rightElement?: Node,
    rightElementSize?: number, // eslint-disable-line react/no-unused-prop-types
    styles: StylesType, // eslint-disable-line react/no-unused-prop-types
};

type MergedStylesType = {
    centerElement: StyleSheet.Styles,
    innerContainer: Array<StyleSheet.Styles>,
    leftElement: StyleSheet.Styles,
    outerContainer: Array<StyleSheet.Styles>,
    rightElement: StyleSheet.Styles,
};

type State = {
    styles: MergedStylesType,
};

const getStyles = (props: Props): MergedStylesType => {
    const { color, styles } = props;

    return {
        ...styles.base,
        outerContainer: [
            styles.base.outerContainer,
            styles.colors[color || 'white'].outerContainer,
        ],
    };
};

class ListItem extends PureComponent<Props, State> {
    static defaultProps = {
        centerElement: null,
        centerElementSize: 1.5,
        color: 'white',
        divider: true,
        leftElement: null,
        leftElementSize: 1,
        loading: false,
        rightElement: null,
        rightElementSize: 1,
    };
    state = {
        styles: getStyles(this.props),
    };
    constructor(props: Props): void {
        super(props);

        (this: any).renderLeftElement = this.renderLeftElement.bind(this);
        (this: any).renderCenterElement = this.renderCenterElement.bind(this);
        (this: any).renderRightElement = this.renderRightElement.bind(this);
    }
    componentWillReceiveProps(nextProps: Props): void {
        const propsOnWhichDependsTheStyle: Array<string> = ['color'];

        if (hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, this.props)) {
            this.setState({ styles: getStyles(nextProps) });
        }
    }
    renderLeftElement(): Node {
        const { leftElement, loading } = this.props;
        const { styles } = this.state;

        if (!leftElement || loading) {
            return null;
        }

        return (
            <Padding
                size="small"
                style={styles.leftElement}
            >
                {leftElement}
            </Padding>
        );
    }
    renderCenterElement(): Node {
        const { centerElement, loading } = this.props;
        const { styles } = this.state;

        if (loading) {
            return (
                <ActivityIndicator />
            );
        }

        if (!centerElement) {
            return null;
        }

        return (
            <Padding
                size="small"
                style={styles.centerElement}
            >
                {centerElement}
            </Padding>
        );
    }
    renderRightElement(): Node {
        const { loading, rightElement } = this.props;
        const { styles } = this.state;

        if (!rightElement || loading) {
            return null;
        }

        return (
            <Padding
                size="small"
                style={styles.rightElement}
            >
                {rightElement}
            </Padding>
        );
    }
    renderDivider(): Node {
        const { divider } = this.props;

        if (!divider) {
            return null;
        }

        return <Divider />;
    }
    render(): Node {
        const { centerElementSize, leftElementSize, onPress, rightElementSize } = this.props;
        const { styles } = this.state;

        return (
            <View style={styles.outerContainer}>
                <TouchableOpacity
                    disabled={!onPress}
                    onPress={onPress}
                    {...omit(this.props, ['styles'])}
                >
                    <Grid style={styles.innerContainer}>
                        <Column size={leftElementSize}>
                            {this.renderLeftElement()}
                        </Column>
                        <Column size={centerElementSize}>
                            {this.renderCenterElement()}
                        </Column>
                        <Column size={rightElementSize}>
                            {this.renderRightElement()}
                        </Column>
                    </Grid>
                </TouchableOpacity>
                {this.renderDivider()}
            </View>
        );
    }
}

ListItem = withTheme(styles, 'ListItem')(ListItem);

export default ListItem;
