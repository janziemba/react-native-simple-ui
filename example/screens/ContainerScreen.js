import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Spacer, Text } from 'react-native-simple-ui';

import ScreenContainer from '../components/ScreenContainer';

const styles = StyleSheet.create({
    bordered: {
        borderColor: 'red',
        borderWidth: 1,
    },
});

class ContainerScreen extends PureComponent {
    static navigationOptions = {
        title: 'Container',
    };
    render() {
        return (
            <ScreenContainer>
                <Container style={styles.bordered}>
                    <Text>Default</Text>
                </Container>
                <Spacer />
                <Container
                    paddingSize="medium"
                    style={styles.bordered}
                >
                    <Text>With padding</Text>
                </Container>
                <Spacer />
                <Container
                    marginSize="medium"
                    style={styles.bordered}
                >
                    <Text>With margin</Text>
                </Container>
                <Spacer />
                <Container
                    alignment="center"
                    style={styles.bordered}
                >
                    <Text>Center</Text>
                </Container>
                <Spacer />
                <Container
                    alignment="right"
                    style={styles.bordered}
                >
                    <Text>Right</Text>
                </Container>
            </ScreenContainer>
        );
    }
}

export default ContainerScreen;
