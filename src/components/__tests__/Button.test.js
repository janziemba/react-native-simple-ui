import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../Button';

it('renders correctly with text', () => {
    const tree = renderer.create(
        <Button text="Lorem ipsum" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders correctly with icon', () => {
    const tree = renderer.create(
        <Button
            icon={{
                name: 'favorite',
            }}
        />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
