// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { View } from 'react-native';

import withTheme from '../../themes/withTheme';
import hasStyleChanged from '../../utils/hasStyleChanged';
import styles from './styles';
import type { StylesType } from './styles';

type Props = {
    multiplier?: number, // eslint-disable-line react/no-unused-prop-types
    size?: string, // eslint-disable-line react/no-unused-prop-types
    styles: StylesType, // eslint-disable-line react/no-unused-prop-types
};

type State = {
    styles: {},
};

const getStyles = (props: Props): {} => {
    const { multiplier, size, styles } = props;

    return {
        height: styles[size || 'medium'].height * (multiplier || 1),
    };
};

class Padding extends PureComponent<Props, State> {
    static defaultProps = {
        multiplier: 1,
        size: 'medium',
    };
    state = {
        styles: getStyles(this.props),
    };
    componentWillReceiveProps(nextProps: Props): void {
        const propsOnWhichDependsTheStyle: Array<string> = ['multiplier', 'size'];

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

Padding = withTheme(styles, 'Padding')(Padding);

export default Padding;
