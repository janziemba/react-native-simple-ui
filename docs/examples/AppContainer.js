import React, { Fragment, PureComponent } from 'react';

import { AppContainer, Container, Spacer, Text } from '../..';

const image = require('./example-image.jpg');

class AppContainerExample extends PureComponent {
    render() {
        return (
            <Fragment>
                <AppContainer>
                    <Container>
                        <Text>
                            App container
                        </Text>
                    </Container>
                </AppContainer>
                <Spacer size="huge" />
                <AppContainer backgroundImage={image}>
                    <Container>
                        <Text>
                            App container with background image
                        </Text>
                    </Container>
                </AppContainer>
            </Fragment>
        );
    }
}

export default AppContainerExample;
