import React from 'react';
import renderer from 'react-test-renderer';

import { Column, Grid, Row } from '../Grid';

it('Column renders correctly', () => {
    const tree = renderer.create(<Column />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Row renders correctly', () => {
    const tree = renderer.create(<Row />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Grid with Column renders correctly', () => {
    const tree = renderer.create(
        <Grid>
            <Column />
        </Grid>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Grid with Row renders correctly', () => {
    const tree = renderer.create(
        <Grid>
            <Row />
        </Grid>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
