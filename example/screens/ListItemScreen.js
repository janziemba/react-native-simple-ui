import React, { PureComponent } from 'react';
import { Avatar, Button, Container, Icon, ListItem, Padding, Text } from 'react-native-simple-ui';

import ScreenContainer from '../components/ScreenContainer';

class ListItemScreen extends PureComponent {
    static navigationOptions = {
        title: 'ListItem',
    };
    onAvatarPress() {
        alert('Avatar pressed'); // eslint-disable-line no-alert, no-undef
    }
    onButtonPress() {
        alert('Button pressed'); // eslint-disable-line no-alert, no-undef
    }
    onPress() {
        alert('Pressed'); // eslint-disable-line no-alert, no-undef
    }
    render() {
        return (
            <ScreenContainer>
                <Container>
                    <ListItem
                        leftElement={
                            <Text>Left</Text>
                        }
                        onPress={this.onPress}
                    />
                    <ListItem
                        centerElement={
                            <Text>Center</Text>
                        }
                        centerElementAlignment="center"
                        onPress={this.onPress}
                    />
                    <ListItem
                        onPress={this.onPress}
                        rightElement={
                            <Text>Right</Text>
                        }
                    />
                    <ListItem
                        centerElement={
                            <Text>With avatar</Text>
                        }
                        leftElement={(
                            <Avatar
                                onPress={this.onAvatarPress}
                                size={40}
                                text="JZ"
                            />
                        )}
                        onPress={this.onPress}
                    />
                    <ListItem
                        centerElement={
                            <Text>Without divider</Text>
                        }
                        divider={false}
                        onPress={this.onPress}
                    />
                    <ListItem
                        centerElement={
                            <Text>Without onPress action</Text>
                        }
                    />
                    <ListItem
                        loading
                        onPress={this.onPress}
                    />
                    <ListItem
                        centerElement={(
                            <Button
                                onPress={this.onButtonPress}
                                text="Quit"
                                variant="flat"
                            />
                        )}
                        centerElementAlignment="center"
                        leftElement={(
                            <Icon name="star" />
                        )}
                        onPress={this.onPress}
                        rightElement={(
                            <Icon name="favorite" />
                        )}
                    />
                    <ListItem
                        centerElement={
                            <Text>Help</Text>
                        }
                        centerElementAlignment="center"
                        leftElement={(
                            <Button
                                onPress={this.onButtonPress}
                                text="Pause"
                                variant="flat"
                            />
                        )}
                        onPress={this.onPress}
                        rightElement={(
                            <>
                                <Padding sizeRight="medium">
                                    <Icon name="favorite" />
                                </Padding>
                                <Icon name="star" />
                            </>
                        )}
                    />
                    <ListItem
                        centerElement={
                            <Text>Very looooooooooooooong title</Text>
                        }
                        onPress={this.onPress}
                        rightElement={(
                            <>
                                <Padding sizeRight="medium">
                                    <Icon name="favorite" />
                                </Padding>
                                <Icon name="star" />
                            </>
                        )}
                    />
                </Container>
            </ScreenContainer>
        );
    }
}

export default ListItemScreen;
