import React from 'react';
import renderer from 'react-test-renderer';

import Rating from '../Rating';

it('renders correctly', () => {
    const tree = renderer.create(
        <Rating
            emptyIcon={{
                name: 'star-border',
            }}
            fullIcon={{
                name: 'star',
            }}
            halfIcon={{
                name: 'star-half',
            }}
            rating={3.2}
        />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
