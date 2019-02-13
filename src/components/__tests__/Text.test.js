import React from 'react';
import renderer from 'react-test-renderer';

import Text from '../Text';

it('renders correctly', () => {
    const tree = renderer.create(<Text>Lorem ipsum</Text>).toJSON();
    expect(tree).toMatchSnapshot();
});
