import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import withTheme from '../../../themes/withTheme';
import hasStyleChanged from '../../../utils/hasStyleChanged';
import styles from './styles';

const getStyles = (props) => {
    const { children, style, styles } = props;

    const isDirectionRow = children.find(child => child.type.originalComponentName === 'Row');

    return [
        style,
        styles.base,
        styles.directions[isDirectionRow ? 'column' : 'row'],
    ];
};

const propTypes = {
    ...View.propTypes, // eslint-disable-line react/forbid-foreign-prop-types
    children: PropTypes.node.isRequired,
    styles: PropTypes.objectOf(PropTypes.object).isRequired,
};

const defaultProps = {
    ...View.defaultProps,
};

class Grid extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            styles: getStyles(props),
        };
    }
    componentWillReceiveProps(nextProps) {
        const propsOnWhichDependsTheStyle = ['children'];

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

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

Grid = withTheme(styles, 'Grid')(Grid);

export default Grid;
