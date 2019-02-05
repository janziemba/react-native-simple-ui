import Color from 'color';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { ImageBackground, SafeAreaView, StatusBar, View } from 'react-native';

import withTheme from '../../themes/withTheme';
import styles from './styles';

const propTypes = {
    backgroundImage: PropTypes.node,
    children: PropTypes.node.isRequired,
    styles: PropTypes.objectOf(PropTypes.object).isRequired,
};

const defaultProps = {
    backgroundImage: null,
};

class AppContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.renderContent = this.renderContent.bind(this);
    }
    renderContent() {
        const { backgroundImage, children, styles } = this.props;

        if (!backgroundImage) {
            return children;
        }

        return (
            <ImageBackground
                source={backgroundImage}
                style={styles.imageBackground}
            >
                <View style={styles.imageBackgroundContent}>
                    {children}
                </View>
            </ImageBackground>
        );
    }
    render() {
        const { styles } = this.props;

        const topSafeAreaIsLight = Color(styles.topSafeArea.backgroundColor).isLight();

        return (
            <View style={styles.wrapper}>
                <SafeAreaView style={styles.topSafeArea} />
                <SafeAreaView style={styles.bottomSafeArea}>
                    <StatusBar
                        barStyle={topSafeAreaIsLight ? 'dark-content' : 'light-content'}
                    />
                    <View style={styles.content}>
                        {this.renderContent()}
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

AppContainer.propTypes = propTypes;
AppContainer.defaultProps = defaultProps;

AppContainer = withTheme(styles, 'AppContainer')(AppContainer);

export default AppContainer;
