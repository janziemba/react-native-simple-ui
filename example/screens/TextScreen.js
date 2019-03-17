import React, { Fragment, PureComponent } from 'react';
import { Container, Spacer, Text } from 'react-native-simple-ui';

import ScreenContainer from '../components/ScreenContainer';

class TextScreen extends PureComponent {
    static navigationOptions = {
        title: 'Text',
    };
    render() {
        const colors = ['primary', 'info', 'success', 'warning', 'danger', 'dark', 'light', 'white', 'black', 'disabled'];
        const sizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'normal', 'small'];

        return (
            <ScreenContainer>
                <Container paddingSize="medium">
                    <Text size="h2">Colors</Text>
                    <Text>default</Text>
                    <Spacer />
                    {colors.map(color => (
                        <Fragment key={`color-${color}`}>
                            <Text color={color}>
                                {color}
                            </Text>
                            <Spacer />
                        </Fragment>
                    ))}
                    <Text size="h2">Sizes</Text>
                    {sizes.map(size => (
                        <Fragment key={`size-${size}`}>
                            <Text size={size}>
                                {size}
                            </Text>
                            <Spacer />
                        </Fragment>
                    ))}
                </Container>
            </ScreenContainer>
        );
    }
}

export default TextScreen;
