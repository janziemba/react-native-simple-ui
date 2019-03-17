import React, { Fragment, PureComponent } from 'react';
import { Container, Spacer, Text, TextLink } from 'react-native-simple-ui';

import ScreenContainer from '../components/ScreenContainer';

class TextLinkScreen extends PureComponent {
    static navigationOptions = {
        title: 'TextLink',
    };
    onPress() {
        alert('Pressed'); // eslint-disable-line no-alert, no-undef
    }
    render() {
        const colors = ['primary', 'info', 'success', 'warning', 'danger', 'dark', 'light', 'white', 'black', 'disabled'];
        const sizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'normal', 'small'];

        return (
            <ScreenContainer>
                <Container paddingSize="medium">
                    <Text size="h2">Colors</Text>
                    <TextLink onPress={this.onPress}>
                        default
                    </TextLink>
                    <Spacer />
                    {colors.map(color => (
                        <Fragment key={`color-${color}`}>
                            <TextLink
                                color={color}
                                onPress={this.onPress}
                            >
                                {color}
                            </TextLink>
                            <Spacer />
                        </Fragment>
                    ))}
                    <Text size="h2">Sizes</Text>
                    {sizes.map(size => (
                        <Fragment key={`size-${size}`}>
                            <TextLink
                                onPress={this.onPress}
                                size={size}
                            >
                                {size}
                            </TextLink>
                            <Spacer />
                        </Fragment>
                    ))}
                </Container>
            </ScreenContainer>
        );
    }
}

export default TextLinkScreen;
