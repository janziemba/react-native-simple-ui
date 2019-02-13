import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';

import AppContainer from '../AppContainer';

it('renders correctly', () => {
    const tree = renderer.create(
        <AppContainer>
            <View />
        </AppContainer>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
