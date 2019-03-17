import React, { PureComponent } from 'react';
import { Button, Container, Modal, Text } from 'react-native-simple-ui';

import ScreenContainer from '../components/ScreenContainer';

class ModalScreen extends PureComponent {
    static navigationOptions = {
        title: 'Modal',
    };
    constructor(props) {
        super(props);

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);

        this.state = {
            visible: false,
        };
    }
    show() {
        this.setState({ visible: true });
    }
    hide() {
        this.setState({ visible: false });
    }
    render() {
        const { visible } = this.state;

        return (
            <>
                <ScreenContainer>
                    <Container paddingSize="medium">
                        <Button
                            onPress={this.show}
                            text="Show"
                        />
                    </Container>
                </ScreenContainer>
                {visible && (
                    <Modal onOverlayPress={this.hide}>
                        <Text>Hello, I’m modal!</Text>
                    </Modal>
                )}
            </>
        );
    }
}

export default ModalScreen;
