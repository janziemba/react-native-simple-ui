import React, { Fragment, PureComponent } from 'react';

import { Column, Grid, Row, Spacer, Text } from '../..';

class GridExample extends PureComponent {
    render() {
        return (
            <Fragment>
                <Grid>
                    <Column>
                        <Text>
                            Column
                        </Text>
                    </Column>
                    <Column>
                        <Text>
                            Column
                        </Text>
                    </Column>
                </Grid>
                <Spacer size="huge" />
                <Grid>
                    <Row>
                        <Text>
                            Row
                        </Text>
                    </Row>
                    <Row>
                        <Text>
                            Row
                        </Text>
                    </Row>
                </Grid>
            </Fragment>
        );
    }
}

export default GridExample;
