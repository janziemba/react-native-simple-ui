// @flow

import Color from 'color';
import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { ImageBackground, SafeAreaView, StatusBar, View } from 'react-native';

import withTheme from '../../themes/withTheme';
import styles from './styles';
import type { StylesType } from './styles';

type Props = {
    backgroundImage?: Node,
    children: Node,
    styles: StylesType,
};

class AppContainer extends PureComponent<Props> {
    static defaultProps = {
        backgroundImage: null,
    };
    constructor(props: Props): void {
        super(props);

        (this: any).renderContent = this.renderContent.bind(this);
    }
    renderContent(): Node {
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
    render(): Node {
        const { styles } = this.props;

        const topSafeAreaIsLight: boolean = Color(styles.topSafeArea.backgroundColor).isLight();

        return (
            <>
                <SafeAreaView style={styles.topSafeArea} />
                <SafeAreaView style={styles.bottomSafeArea}>
                    <StatusBar
                        barStyle={topSafeAreaIsLight ? 'dark-content' : 'light-content'}
                    />
                    <View style={styles.content}>
                        {this.renderContent()}
                    </View>
                </SafeAreaView>
            </>
        );
    }
}

AppContainer = withTheme(styles, 'AppContainer')(AppContainer);

export default AppContainer;
