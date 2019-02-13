// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { TouchableOpacity, View } from 'react-native';

import merge from 'lodash/merge';

import Text, { defaultProps as TextDefaultProps } from '../Text';
import type { Props as TextProps } from '../Text';

type Props = {
    ...TextProps,
    disabled: boolean,
    onPress: Function,
};

class TextLink extends PureComponent<Props> {
    static defaultProps = merge({}, TextDefaultProps, {
        disabled: false,
        onPress: null,
    });
    render(): Node {
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

export default TextLink;
