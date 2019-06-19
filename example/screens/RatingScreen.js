import React, { PureComponent } from 'react';
import { Container, Rating, Spacer } from 'react-native-simple-ui';

import ScreenContainer from '../components/ScreenContainer';

class RatingScreen extends PureComponent {
    static navigationOptions = {
        title: 'Rating',
    };
    onPress() {
        alert('Pressed'); // eslint-disable-line no-alert, no-undef
    }
    render() {
        return (
            <ScreenContainer>
                <Container paddingSize="medium">
                    <Rating
                        emptyIcon={{
                            color: '#fec400',
                            name: 'star-border',
                        }}
                        fullIcon={{
                            color: '#fec400',
                            name: 'star',
                        }}
                        halfIcon={{
                            color: '#fec400',
                            name: 'star-half',
                        }}
                        onPress={this.onPress}
                        rating={3.5}
                    />
                    <Spacer />
                    <Rating
                        emptyIcon={{
                            color: '#fec400',
                            name: 'star-border',
                        }}
                        fullIcon={{
                            color: '#fec400',
                            name: 'star',
                        }}
                        halfIcon={{
                            color: '#fec400',
                            name: 'star-half',
                        }}
                        limit={10}
                        onPress={this.onPress}
                        rating={6.4}
                    />
                    <Spacer />
                    <Rating
                        emptyIcon={{
                            color: '#cccccc',
                            name: 'ac-unit',
                        }}
                        fullIcon={{
                            color: '#00b9fe',
                            name: 'ac-unit',
                        }}
                        halfIcon={{
                            color: '#00b9fe',
                            name: 'ac-unit',
                        }}
                        limit={10}
                        onPress={this.onPress}
                        rating={4.8}
                    />
                </Container>
            </ScreenContainer>
        );
    }
}

export default RatingScreen;
