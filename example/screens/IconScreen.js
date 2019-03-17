import React, { PureComponent } from 'react';
import { Container, Icon, Spacer } from 'react-native-simple-ui';

import ScreenContainer from '../components/ScreenContainer';

class IconScreen extends PureComponent {
    static navigationOptions = {
        title: 'Icon',
    };
    render() {
        return (
            <ScreenContainer>
                <Container
                    alignment="center"
                    paddingSize="medium"
                >
                    <Icon name="favorite" />
                    <Spacer />
                    <Icon
                        colorName="primary"
                        name="thumb-up"
                    />
                    <Spacer />
                    <Icon
                        colorName="danger"
                        name="favorite"
                        size={50}
                    />
                </Container>
            </ScreenContainer>
        );
    }
}

export default IconScreen;
