import React from 'react';
import renderer from 'react-test-renderer';

import Margin from '../Margin';

it('renders correctly', () => {
    const tree = renderer.create(<Margin />).toJSON();
    expect(tree).toMatchSnapshot();
});
