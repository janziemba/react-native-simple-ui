import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';

import Padding from '../Padding';

it('renders correctly', () => {
    const tree = renderer.create(
        <Padding>
            <View />
        </Padding>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
