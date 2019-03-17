import React, { PureComponent } from 'react';
import { ThemeProvider } from 'react-native-simple-ui';

import AppNavigator from './navigation/AppNavigator';

const theme = {
    components: {
        AppContainer: {
            content: {
                backgroundColor: '#eeeeee',
            },
        },
    },
};

class App extends PureComponent {
    render() {
        return (
            <ThemeProvider value={theme}>
                <AppNavigator />
            </ThemeProvider>
        );
    }
}

export default App;
