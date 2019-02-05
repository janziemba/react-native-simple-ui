import React, { Fragment, PureComponent } from 'react';

import { Container, LinearGradient, Spacer } from '../..';

class LinearGradientExample extends PureComponent {
    render() {
        return (
            <Fragment>
                <LinearGradient
                    direction="vertical"
                    fromColor="#1fc8db"
                    height={200}
                    toColor="#2cb5e8"
                    width={200}
                />
                <Spacer size="huge" />
                <LinearGradient
                    fromColor="#1fc8db"
                    height={100}
                    toColor="#2cb5e8"
                    width={200}
                />
                <Spacer size="huge" />
                <LinearGradient
                    fromColor="#75caeb"
                    height={200}
                    toColor="#158cba"
                    width={100}
                >
                    <Container alignment="center">
                        Some content inside
                    </Container>
                </LinearGradient>
            </Fragment>
        );
    }
}

export default LinearGradientExample;
