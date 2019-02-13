import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';

import Modal from '../Modal';

it('renders correctly', () => {
    const tree = renderer.create(
        <Modal>
            <View />
        </Modal>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
