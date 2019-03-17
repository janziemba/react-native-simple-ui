import React, { PureComponent } from 'react';
import { Container, LinearGradient, Spacer, Text } from 'react-native-simple-ui';

import ScreenContainer from '../components/ScreenContainer';

class LinearGradientScreen extends PureComponent {
    static navigationOptions = {
        title: 'LinearGradient',
    };
    render() {
        return (
            <ScreenContainer>
                <Container
                    alignment="center"
                    paddingSize="medium"
                >
                    <Text size="h2">Horizontal</Text>
                    <LinearGradient
                        fromColor="#ad5389"
                        height={80}
                        toColor="#3c1053"
                        width={300}
                    />
                    <Spacer />
                    <Text size="h2">Vertical</Text>
                    <LinearGradient
                        fromColor="red"
                        gradientDirection="vertical"
                        height={80}
                        toColor="blue"
                        width={300}
                    />
                    <Spacer />
                    <Text size="h2">With content</Text>
                    <LinearGradient
                        fromColor="#fffbd5"
                        height={80}
                        toColor="#b20a2c"
                        width={300}
                    >
                        <Text color="white">Content</Text>
                    </LinearGradient>
                </Container>
            </ScreenContainer>
        );
    }
}

export default LinearGradientScreen;
