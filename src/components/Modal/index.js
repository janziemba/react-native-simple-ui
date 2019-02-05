import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import withTheme from '../../themes/withTheme';
import styles from './styles';

const propTypes = {
    children: PropTypes.node.isRequired,
    onOverlayPress: PropTypes.func,
    styles: PropTypes.objectOf(PropTypes.object).isRequired,
};

const defaultProps = {
    onOverlayPress: null,
};

class Modal extends PureComponent {
    render() {
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

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

Modal = withTheme(styles, 'Modal')(Modal);

export default Modal;
