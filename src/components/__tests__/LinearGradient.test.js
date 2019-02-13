import React from 'react';
import renderer from 'react-test-renderer';

import LinearGradient from '../LinearGradient';

it('renders correctly', () => {
    const tree = renderer.create(
        <LinearGradient
            fromColor="white"
            height={100}
            toColor="black"
            width={100}
        />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
