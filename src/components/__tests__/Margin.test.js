import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';

import Margin from '../Margin';

it('renders correctly', () => {
    const tree = renderer.create(
        <Margin>
            <View />
        </Margin>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
