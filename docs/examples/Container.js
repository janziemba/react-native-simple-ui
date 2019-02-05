import React, { Fragment, PureComponent } from 'react';

import { Container, Spacer, Text } from '../..';

class ContainerExample extends PureComponent {
    render() {
        return (
            <Fragment>
                <Container>
                    <Text>
                        Default container
                    </Text>
                </Container>
                <Spacer size="huge" />
                <Container alignment="center">
                    <Text>
                        Container with centered content
                    </Text>
                </Container>
                <Spacer size="huge" />
                <Container padding="huge">
                    <Text>
                        Container with huge padding
                    </Text>
                </Container>
                <Spacer size="huge" />
                <Container margin="huge">
                    <Text>
                        Container with huge margin
                    </Text>
                </Container>
            </Fragment>
        );
    }
}

export default ContainerExample;
