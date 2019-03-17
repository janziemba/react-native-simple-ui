import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AppContainer } from 'react-native-simple-ui';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const propTypes = {
    children: PropTypes.node.isRequired,
};

class ScreenContainer extends PureComponent {
    render() {
        const { children } = this.props;

        return (
            <AppContainer>
                <ScrollView style={styles.container}>
                    {children}
                </ScrollView>
            </AppContainer>
        );
    }
}

ScreenContainer.propTypes = propTypes;

export default ScreenContainer;
