import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Button, Container, Spacer } from 'react-native-simple-ui';

import ScreenContainer from '../components/ScreenContainer';

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

class MenuScreen extends PureComponent {
    static navigationOptions = {
        title: 'Menu',
    };
    render() {
        const { navigation: { navigate } } = this.props;

        return (
            <ScreenContainer>
                <Container paddingSize="medium">
                    <Button
                        onPress={() => navigate('Button')}
                        text="Button"
                    />
                    <Spacer />
                    <Button
                        onPress={() => navigate('Container')}
                        text="Container"
                    />
                    <Spacer />
                    <Button
                        onPress={() => navigate('Grid')}
                        text="Grid"
                    />
                    <Spacer />
                    <Button
                        onPress={() => navigate('Icon')}
                        text="Icon"
                    />
                    <Spacer />
                    <Button
                        onPress={() => navigate('LinearGradient')}
                        text="LinearGradient"
                    />
                    <Spacer />
                    <Button
                        onPress={() => navigate('Modal')}
                        text="Modal"
                    />
                    <Spacer />
                    <Button
                        onPress={() => navigate('Rating')}
                        text="Rating"
                    />
                    <Spacer />
                    <Button
                        onPress={() => navigate('Text')}
                        text="Text"
                    />
                    <Spacer />
                    <Button
                        onPress={() => navigate('TextLink')}
                        text="TextLink"
                    />
                    <Spacer />
                    <Button
                        onPress={() => navigate('Toolbar')}
                        text="Toolbar"
                    />
                </Container>
            </ScreenContainer>
        );
    }
}

MenuScreen.propTypes = propTypes;

export default MenuScreen;
