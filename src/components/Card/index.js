// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { View } from 'react-native';

import omit from 'lodash/omit';
import type { ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes';

import withTheme from '../../themes/withTheme';
import type { ObjectOfStyleSheetsType } from '../../types';
import hasStyleChanged from '../../utils/hasStyleChanged';
import Padding from '../Padding';
import styles from './styles';
import type { StylesType } from './styles';

type Props = ViewProps & {
    disabled?: boolean, // eslint-disable-line react/require-default-props
    styles: StylesType,
};

const defaultProps = {
    ...View.defaultProps,
};

type State = {
    styles: ObjectOfStyleSheetsType,
};

const getStyles = (props: Props): ObjectOfStyleSheetsType => {
    const { disabled, styles } = props;

    return {
        ...styles.base,
        container: {
            ...styles.base.container,
            ...(disabled ? styles.disabled.container : {}),
        },
    };
};

class Card extends PureComponent<Props, State> {
    static defaultProps = defaultProps;
    state = {
        styles: getStyles(this.props),
    };
    componentWillReceiveProps(nextProps): void {
        const propsOnWhichDependsTheStyle: Array<string> = ['disabled'];

        if (hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, this.props)) {
            this.setState({ styles: getStyles(nextProps) });
        }
    }
    render(): Node {
        const { children } = this.props;
        const { styles } = this.state;

        return (
            <Padding
                {...omit(this.props, ['styles', 'theme'])}
                size="small"
                style={styles.container}
            >
                {children}
            </Padding>
        );
    }
}

Card = withTheme(styles, 'Card')(Card);

export default Card;
