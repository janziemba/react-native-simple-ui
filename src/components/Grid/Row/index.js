import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import withTheme from '../../../themes/withTheme';
import hasStyleChanged from '../../../utils/hasStyleChanged';
import styles from './styles';

const getStyles = (props) => {
    const { size, style, styles } = props;

    let flex = 1;

    if (size) {
        flex = size;
    } else if (style && style.width) {
        flex = 0;
    }

    return [
        style,
        styles.base,
        { flex },
    ];
};

const propTypes = {
    ...View.propTypes, // eslint-disable-line react/forbid-foreign-prop-types
    children: PropTypes.node,
    size: PropTypes.number,
    styles: PropTypes.objectOf(PropTypes.object).isRequired,
};

const defaultProps = {
    ...View.defaultProps,
    children: null,
    size: null,
};

class Row extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            styles: getStyles(props),
        };
    }
    componentWillReceiveProps(nextProps) {
        const propsOnWhichDependsTheStyle = ['size', 'style'];

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

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

Row = withTheme(styles, 'Row')(Row);

export default Row;
