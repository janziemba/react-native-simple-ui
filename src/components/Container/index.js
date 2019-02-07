import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import spacing from '../../themes/base/spacing';
import withTheme from '../../themes/withTheme';
import hasStyleChanged from '../../utils/hasStyleChanged';
import styles from './styles';

const getStyles = (props) => {
    const { alignment, margin, padding, style, styles } = props;

    return [
        style,
        styles.base,
        alignment ? styles.alignment[alignment] : {},
        margin ? styles.margin[margin] : {},
        padding ? styles.padding[padding] : {},
    ];
};

const propTypes = {
    ...View.propTypes, // eslint-disable-line react/forbid-foreign-prop-types
    alignment: PropTypes.string,
    margin: PropTypes.oneOf([...Object.keys(spacing)]),
    padding: PropTypes.oneOf([...Object.keys(spacing)]),
    styles: PropTypes.objectOf(PropTypes.object).isRequired,
};

const defaultProps = {
    ...View.defaultProps,
    alignment: null,
    margin: null,
    padding: null,
};

class Container extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            styles: getStyles(props),
        };
    }
    componentWillReceiveProps(nextProps) {
        const propsOnWhichDependsTheStyle = ['align', 'margin', 'padding', 'style'];

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

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

Container = withTheme(styles, 'Container')(Container);

export default Container;
