import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Column, Container, Grid, Row, Spacer, Text } from 'react-native-simple-ui';

import ScreenContainer from '../components/ScreenContainer';

const styles = StyleSheet.create({
    bordered: {
        borderColor: 'red',
        borderWidth: 1,
    },
});

class GridScreen extends PureComponent {
    static navigationOptions = {
        title: 'Grid',
    };
    render() {
        return (
            <ScreenContainer>
                <Container paddingSize="medium">
                    <Grid>
                        <Column style={{ base: styles.bordered }}>
                            <Text>Column</Text>
                        </Column>
                        <Column style={{ base: styles.bordered }}>
                            <Text>Column</Text>
                        </Column>
                    </Grid>
                    <Spacer />
                    <Grid>
                        <Column style={{ base: styles.bordered }}>
                            <Text>Column</Text>
                        </Column>
                        <Column style={{ base: styles.bordered }}>
                            <Text>Column</Text>
                        </Column>
                        <Column style={{ base: styles.bordered }}>
                            <Text>Column</Text>
                        </Column>
                    </Grid>
                    <Spacer />
                    <Grid>
                        <Column style={{ base: styles.bordered }}>
                            <Text>Column</Text>
                        </Column>
                        <Column style={{ base: styles.bordered }}>
                            <Text>Column</Text>
                        </Column>
                        <Column style={{ base: styles.bordered }}>
                            <Text>Column</Text>
                        </Column>
                        <Column style={{ base: styles.bordered }}>
                            <Text>Column</Text>
                        </Column>
                    </Grid>
                    <Spacer />
                    <Grid>
                        <Column style={{ base: styles.bordered }}>
                            <Text>Column</Text>
                        </Column>
                        <Column style={{ base: styles.bordered }}>
                            <Text>Column</Text>
                        </Column>
                        <Column style={{ base: styles.bordered }}>
                            <Text>Column</Text>
                        </Column>
                        <Column style={{ base: styles.bordered }}>
                            <Text>Column</Text>
                        </Column>
                        <Column style={{ base: styles.bordered }}>
                            <Text>Column</Text>
                        </Column>
                    </Grid>
                    <Spacer />
                    <Grid>
                        <Column
                            size={2}
                            style={{ base: styles.bordered }}
                        >
                            <Text>Column</Text>
                        </Column>
                        <Column style={{ base: styles.bordered }}>
                            <Text>Column</Text>
                        </Column>
                    </Grid>
                    <Spacer />
                    <Grid>
                        <Column style={{ base: styles.bordered }}>
                            <Text>Column</Text>
                        </Column>
                        <Column
                            size={2}
                            style={{ base: styles.bordered }}
                        >
                            <Text>Column</Text>
                        </Column>
                        <Column style={{ base: styles.bordered }}>
                            <Text>Column</Text>
                        </Column>
                    </Grid>
                    <Spacer />
                    <Grid>
                        <Column style={{ base: styles.bordered }}>
                            <Text>Column</Text>
                        </Column>
                        <Column
                            size={3}
                            style={{ base: styles.bordered }}
                        >
                            <Text>Column</Text>
                        </Column>
                    </Grid>
                    <Spacer />
                    <Grid>
                        <Row style={{ base: styles.bordered }}>
                            <Text>Row</Text>
                        </Row>
                        <Row style={{ base: styles.bordered }}>
                            <Text>Row</Text>
                        </Row>
                    </Grid>
                </Container>
            </ScreenContainer>
        );
    }
}

export default GridScreen;
