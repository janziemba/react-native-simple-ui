import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Text as RNText } from 'react-native';

import withTheme from '../../themes/withTheme';
import hasStyleChanged from '../../utils/hasStyleChanged';
import { SIZES } from './constants';
import styles from './styles';

const getStyles = (props) => {
    const { color, size, styles } = props;

    return [
        styles.base,
        styles.sizes[size],
        color ? styles.colors[color] : {},
    ];
};

const propTypes = {
    ...RNText.propTypes, // eslint-disable-line react/forbid-foreign-prop-types
    color: PropTypes.string,
    size: PropTypes.oneOf(Object.keys(SIZES)),
    styles: PropTypes.objectOf(PropTypes.object).isRequired,
};

const defaultProps = {
    ...RNText.defaultProps,
    color: null,
    size: SIZES.normal,
};

class Text extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            styles: getStyles(props),
        };
    }
    componentWillReceiveProps(nextProps) {
        const propsOnWhichDependsTheStyle = ['color', 'size'];

        if (hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, this.props)) {
            this.setState({ styles: getStyles(nextProps) });
        }
    }
    render() {
        const { children } = this.props;
        const { styles } = this.state;

        return (
            <RNText
                {...this.props}
                style={styles}
            >
                {children}
            </RNText>
        );
    }
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default withTheme(styles, 'Text')(Text);
