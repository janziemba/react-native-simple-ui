import React from 'react';
import renderer from 'react-test-renderer';

import Spacer from '../Spacer';

it('renders correctly', () => {
    const tree = renderer.create(<Spacer />).toJSON();
    expect(tree).toMatchSnapshot();
});
