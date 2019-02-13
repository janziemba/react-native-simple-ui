import React from 'react';
import renderer from 'react-test-renderer';

import TextLink from '../TextLink';

it('renders correctly', () => {
    const tree = renderer.create(<TextLink>Lorem ipsum</TextLink>).toJSON();
    expect(tree).toMatchSnapshot();
});
