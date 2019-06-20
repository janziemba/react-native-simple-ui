import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Container, ListItem, Text } from 'react-native-simple-ui';

import ScreenContainer from '../components/ScreenContainer';

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

const SCREENS = [
    'Avatar', 'Button', 'Card', 'Container', 'Grid', 'Icon', 'LinearGradient',
    'ListItem', 'Modal', 'Rating', 'TextLink', 'Text', 'Toolbar',
];

class MenuScreen extends PureComponent {
    static navigationOptions = {
        title: 'Menu',
    };
    constructor(props) {
        super(props);

        this.renderListItem = this.renderListItem.bind(this);
    }
    renderListItem(screen) {
        const { navigation: { navigate } } = this.props;

        return (
            <ListItem
                key={screen}
                centerElement={(
                    <Text>
                        {screen}
                    </Text>
                )}
                onPress={() => navigate(screen)}
            />
        );
    }
    render() {
        return (
            <ScreenContainer>
                <Container>
                    {SCREENS.map(screen => this.renderListItem(screen))}
                </Container>
            </ScreenContainer>
        );
    }
}

MenuScreen.propTypes = propTypes;

export default MenuScreen;
