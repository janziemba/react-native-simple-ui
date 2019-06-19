import React, { PureComponent } from 'react';
import { Avatar, Container, Spacer } from 'react-native-simple-ui';

import ScreenContainer from '../components/ScreenContainer';

const image = require('../assets/tesla.jpg');

class AvatarScreen extends PureComponent {
    static navigationOptions = {
        title: 'Avatar',
    };
    onPress() {
        alert('Pressed'); // eslint-disable-line no-alert, no-undef
    }
    render() {
        return (
            <ScreenContainer>
                <Container
                    alignment="center"
                    paddingSize="medium"
                >
                    <Avatar source={image} />
                    <Spacer />
                    <Avatar
                        size={100}
                        source={image}
                    />
                    <Spacer />
                    <Avatar
                        size={100}
                        text="JZ"
                    />
                    <Spacer />
                    <Avatar
                        onPress={this.onPress}
                        text="Press"
                    />
                </Container>
            </ScreenContainer>
        );
    }
}

export default AvatarScreen;
