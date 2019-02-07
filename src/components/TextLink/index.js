import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { TouchableOpacity, View } from 'react-native';

import Text from '../Text';

const propTypes = {
    ...Text.propTypes, // eslint-disable-line react/forbid-foreign-prop-types
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
};

const defaultProps = {
    ...Text.defaultProps,
    disabled: false,
    onPress: null,
};

class TextLink extends PureComponent {
    render() {
        const { children, disabled, onPress } = this.props;

        return (
            <TouchableOpacity
                accessibilityRole="link"
                disabled={disabled || !onPress}
                onPress={onPress}
            >
                <View>
                    <Text
                        {...this.props}
                    >
                        {children}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

TextLink.propTypes = propTypes;
TextLink.defaultProps = defaultProps;

export default TextLink;
