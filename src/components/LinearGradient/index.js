import Color from 'color';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import withTheme from '../../themes/withTheme';
import { DIRECTIONS } from './constants';
import styles from './styles';

export const propTypes = {
    children: PropTypes.node,
    direction: PropTypes.oneOf(Object.keys(DIRECTIONS)),
    fromColor: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    styles: PropTypes.objectOf(PropTypes.object).isRequired,
    toColor: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
};

const defaultProps = {
    children: null,
    direction: DIRECTIONS.horizontal,
};

class LinearGradient extends PureComponent {
    constructor(props) {
        super(props);

        this.renderGradient = this.renderGradient.bind(this);
    }
    renderGradient() {
        const { direction, fromColor, height, toColor, width } = this.props;

        const lines = [];

        const point = 1 / (direction === DIRECTIONS.horizontal ? width : height);
        const roundedPoint = Math.round(point * 1000000) / 1000000;

        const fromC = Color(fromColor);
        const toC = Color(toColor);
        const lineHeight = direction === DIRECTIONS.vertical ? 1 : height;
        const lineWidth = direction === DIRECTIONS.horizontal ? 1 : width;

        for (let i = 0; i <= 1; i += roundedPoint) {
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

LinearGradient.propTypes = propTypes;
LinearGradient.defaultProps = defaultProps;

LinearGradient = withTheme(styles, 'LinearGradient')(LinearGradient);

export default LinearGradient;
