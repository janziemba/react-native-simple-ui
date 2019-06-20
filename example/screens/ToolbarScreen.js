import React, { PureComponent } from 'react';
import { Button, Container, Icon, Padding, Spacer, Text, Toolbar } from 'react-native-simple-ui';

import ScreenContainer from '../components/ScreenContainer';

class ToolbarScreen extends PureComponent {
    static navigationOptions = {
        title: 'Toolbar',
    };
    onPress() {
        alert('Pressed'); // eslint-disable-line no-alert, no-undef
    }
    render() {
        return (
            <ScreenContainer>
                <Container>
                    <Toolbar
                        leftElement={
                            <Text color="white">Left</Text>
                        }
                    />
                    <Spacer />
                    <Toolbar
                        centerElement={
                            <Text color="white">Center</Text>
                        }
                    />
                    <Spacer />
                    <Toolbar
                        rightElement={
                            <Text color="white">Right</Text>
                        }
                    />
                    <Spacer />
                    <Toolbar
                        centerElement={(
                            <Button
                                color="white"
                                onPress={this.onPress}
                                text="Quit"
                                variant="flat"
                            />
                        )}
                        leftElement={(
                            <Icon
                                colorName="white"
                                name="star"
                            />
                        )}
                        rightElement={(
                            <Icon
                                colorName="white"
                                name="favorite"
                            />
                        )}
                    />
                    <Spacer />
                    <Toolbar
                        centerElement={
                            <Text color="white">Help</Text>
                        }
                        leftElement={(
                            <Button
                                color="white"
                                onPress={this.onPress}
                                text="Pause"
                                variant="flat"
                            />
                        )}
                        rightElement={(
                            <>
                                <Padding sizeRight="medium">
                                    <Icon
                                        colorName="white"
                                        name="favorite"
                                    />
                                </Padding>
                                <Icon
                                    colorName="white"
                                    name="star"
                                />
                            </>
                        )}
                    />
                    <Spacer />
                    <Toolbar
                        centerElement={
                            <Text color="white">Very looooooooooooooong title</Text>
                        }
                        rightElement={(
                            <>
                                <Icon
                                    colorName="white"
                                    name="star"
                                />
                            </>
                        )}
                    />
                </Container>
            </ScreenContainer>
        );
    }
}

export default ToolbarScreen;
