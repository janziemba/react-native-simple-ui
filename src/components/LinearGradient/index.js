// @flow

import Color from 'color';
import React, { PureComponent } from 'react';
import type { Element } from 'react';
import { View } from 'react-native';

import type { ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes';

import withTheme from '../../themes/withTheme';
import { DIRECTIONS } from './constants';
import styles from './styles';
import type { StylesType } from './styles';

export type Props = ViewProps & {
    direction: string,
    fromColor: string,
    height: number,
    styles: StylesType,
    toColor: string,
    width: number,
};

const defaultProps = {
    ...View.defaultProps,
    direction: DIRECTIONS.horizontal,
};

class LinearGradient extends PureComponent<Props> {
    static defaultProps = defaultProps;
    constructor(props: Props) {
        super(props);

        (this: any).renderGradient = this.renderGradient.bind(this);
    }
    renderGradient() {
        const { direction, fromColor, height, toColor, width } = this.props;

        const lines: Array<Element<typeof View>> = [];

        const point: number = 1 / (direction === DIRECTIONS.horizontal ? width : height);
        const roundedPoint: number = Math.round(point * 1000000) / 1000000;

        const fromC: typeof Color = Color(fromColor);
        const toC: typeof Color = Color(toColor);
        const lineHeight: number = direction === DIRECTIONS.vertical ? 1 : height;
        const lineWidth: number = direction === DIRECTIONS.horizontal ? 1 : width;

        for (let i: number = 0; i <= 1; i += roundedPoint) {
            lines.push(
                <View
                    key={`i_${i}`}
                    style={{
                        backgroundColor: fromC.mix(toC, i).toString(),
                        height: lineHeight,
                        width: lineWidth,
                    }}
                />,
            );
        }

        return lines;
    }
    render() {
        const { children, height, styles, width } = this.props;

        return (
            <View
                {...this.props}
                style={[
                    styles.container,
                    { height, width },
                ]}
            >
                <View style={styles.gradient}>
                    {this.renderGradient()}
                </View>
                <View style={styles.content}>
                    {children}
                </View>
            </View>
        );
    }
}

LinearGradient = withTheme(styles, 'LinearGradient')(LinearGradient);

export default LinearGradient;
