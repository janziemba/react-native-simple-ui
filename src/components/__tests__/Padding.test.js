import React from 'react';
import renderer from 'react-test-renderer';

import Padding from '../Padding';

it('renders correctly', () => {
    const tree = renderer.create(<Padding />).toJSON();
    expect(tree).toMatchSnapshot();
});
