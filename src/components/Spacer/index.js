import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import withTheme from '../../themes/withTheme';
import hasStyleChanged from '../../utils/hasStyleChanged';
import styles from './styles';

const getStyles = (props) => {
    const { multiplier, size, styles } = props;

    return {
        height: styles[size].height * multiplier,
    };
};

const propTypes = {
    multiplier: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
    size: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    styles: PropTypes.objectOf(PropTypes.object).isRequired, // eslint-disable-line react/no-unused-prop-types, max-len
};

const defaultProps = {
    multiplier: 1,
    size: 'medium',
};

class Spacer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            styles: getStyles(props),
        };
    }
    componentWillReceiveProps(nextProps) {
        const propsOnWhichDependsTheStyle = ['multiplier', 'size'];

        if (hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, this.props)) {
            this.setState({ styles: getStyles(nextProps) });
        }
    }
    render() {
        const { styles } = this.state;

        return (
            <View style={styles} />
        );
    }
}

Spacer.propTypes = propTypes;
Spacer.defaultProps = defaultProps;

export default withTheme(styles, 'Spacer')(Spacer);
