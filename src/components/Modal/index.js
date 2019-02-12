// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import injectTheme from '../../themes/injectTheme';
import styles from './styles';
import type { StylesType } from './styles';

type Props = {
    children: Node,
    onOverlayPress: Function,
    styles: StylesType,
};

class Modal extends PureComponent<Props> {
    static defaultProps = {
        onOverlayPress: null,
    };
    render(): Node {
        const { children, onOverlayPress, styles } = this.props;

        return (
            <TouchableWithoutFeedback onPress={onOverlayPress}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        {children}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

Modal = injectTheme(styles, 'Modal')(Modal);

export default Modal;
