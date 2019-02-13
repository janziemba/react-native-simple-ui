import React from 'react';
import renderer from 'react-test-renderer';

import Icon from '../Icon';

it('renders correctly', () => {
    const tree = renderer.create(
        <Icon name="favorite" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
