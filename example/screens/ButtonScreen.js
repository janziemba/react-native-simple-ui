import React, { Fragment, PureComponent } from 'react';
import { Button, Container, Spacer, Text } from 'react-native-simple-ui';

import ScreenContainer from '../components/ScreenContainer';

class ButtonScreen extends PureComponent {
    static navigationOptions = {
        title: 'Button',
    };
    onPress() {
        alert('Pressed'); // eslint-disable-line no-alert, no-undef
    }
    renderColoredButtons({ variant }) {
        const colors = ['primary', 'info', 'success', 'warning', 'danger', 'dark', 'light', 'white', 'disabled'];

        return (
            <>
                {colors.map(color => (
                    <Fragment key={`color-${color}`}>
                        <Button
                            color={color}
                            onPress={this.onPress}
                            text={color}
                            variant={variant}
                        />
                        <Spacer />
                    </Fragment>
                ))}
            </>
        );
    }
    render() {
        return (
            <ScreenContainer>
                <Container paddingSize="medium">
                    <Text size="h2">Default variant</Text>
                    {this.renderColoredButtons({ variant: 'default' })}
                    <Spacer />
                    <Text size="h2">Flat variant</Text>
                    {this.renderColoredButtons({ variant: 'flat' })}
                    <Spacer />
                    <Text size="h2">Outlined variant</Text>
                    {this.renderColoredButtons({ variant: 'outlined' })}
                    <Spacer />
                    <Text size="h2">Sizes</Text>
                    <Button
                        onPress={this.onPress}
                        size="small"
                        text="Small"
                    />
                    <Spacer />
                    <Button
                        onPress={this.onPress}
                        size="medium"
                        text="Medium"
                    />
                    <Spacer />
                    <Button
                        onPress={this.onPress}
                        size="large"
                        text="Large"
                    />
                    <Spacer />
                    <Text size="h2">Rounding</Text>
                    <Button
                        onPress={this.onPress}
                        rounding="normal"
                        text="Normal"
                    />
                    <Spacer />
                    <Button
                        onPress={this.onPress}
                        rounding="rounded"
                        text="Rounded"
                    />
                    <Spacer />
                    <Button
                        onPress={this.onPress}
                        rounding="sharp"
                        text="Sharp"
                    />
                    <Spacer />
                    <Text size="h2">Icons</Text>
                    <Button
                        icon={{
                            name: 'favorite',
                        }}
                        onPress={this.onPress}
                    />
                    <Spacer />
                    <Button
                        icon={{
                            name: 'favorite',
                        }}
                        onPress={this.onPress}
                        text="Left"
                    />
                    <Spacer />
                    <Button
                        icon={{
                            name: 'favorite',
                            position: 'right',
                        }}
                        onPress={this.onPress}
                        text="Right"
                    />
                    <Spacer />
                    <Button
                        icon={{
                            name: 'favorite',
                            position: 'top',
                        }}
                        onPress={this.onPress}
                        text="Top"
                    />
                    <Spacer />
                    <Button
                        icon={{
                            name: 'favorite',
                            position: 'bottom',
                        }}
                        onPress={this.onPress}
                        text="Bottom"
                    />
                    <Spacer />
                    <Text size="h2">States</Text>
                    <Button
                        onPress={this.onPress}
                        text="Inactive"
                    />
                    <Spacer />
                    <Button
                        disabled
                        text="Disabled"
                    />
                    <Spacer />
                    <Text size="h2">LinearGradient</Text>
                    <Button
                        color="white"
                        linearGradient={{
                            fromColor: 'red',
                            toColor: 'blue',
                        }}
                        onPress={this.onPress}
                        text="Horizontal"
                        variant="flat"
                    />
                    <Spacer />
                    <Button
                        color="white"
                        linearGradient={{
                            fromColor: 'red',
                            gradientDirection: 'vertical',
                            toColor: 'blue',
                        }}
                        onPress={this.onPress}
                        text="Vertical"
                        variant="flat"
                    />
                </Container>
            </ScreenContainer>
        );
    }
}

export default ButtonScreen;
