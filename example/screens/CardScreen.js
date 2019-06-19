import React, { PureComponent } from 'react';
import { Avatar, Card, Container, Spacer, Text } from 'react-native-simple-ui';

import ScreenContainer from '../components/ScreenContainer';

const image = require('../assets/tesla.jpg');

class CardScreen extends PureComponent {
    static navigationOptions = {
        title: 'Card',
    };
    render() {
        return (
            <ScreenContainer>
                <Container
                    alignment="center"
                    paddingSize="medium"
                >
                    <Card>
                        <Text>
                            Hello world
                        </Text>
                    </Card>
                    <Spacer />
                    <Card>
                        <Avatar source={image} />
                        <Spacer size="small" />
                        <Text>
                            I am rocketman
                        </Text>
                    </Card>
                </Container>
            </ScreenContainer>
        );
    }
}

export default CardScreen;
