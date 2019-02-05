# React Native Simple UI
- almost **pure JavaScript**, the only native dependency is [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- **easy to use** - a [ThemeContext](#theme-context) is all you need to begin
- **customizable**

# Installation
```sh
yarn add react-native-simple-ui
```

# Usage
[Documentation](/docs/)

## Theme context
You have to define a theme context in your app's root component:
```jsx
...
import { ThemeContext } from 'react-native-simple-ui';

const customTheme = {
    showWarnings: true,
    theme: {
        // you can set custom styles here and overwrite default styles,
        // for example:
        heading: { h1: { fontSize: 50 } }
        // or
        toolbar: { container: { backgroundColor: 'red' } }
        // or you can also set your own primitives:
        colors: { primaryColor: 'green' }
    },
};

class App extends PureComponent {
    ...
    render() {
        return (
            <ThemeContext.Provider value={customTheme}>
                ...
            </ThemeContext.Provider>
        );
    }
}
...
```

## Components
Then you can use UI components:
```jsx
...
import { Button, Container } from 'react-native-simple-ui';

class ExampleComponent extends PureComponent {
    ...
    render() {
        return (
            <Container>
                <Button text="Hello world" />
            </Container>
        );
    }
}
...
```
All available components can be found [here](/src/components/)

## withTheme high order component
You can define styles with theme primitives:
```jsx
...
import { withTheme } from 'react-native-simple-ui';

const styles = ({ colors, radiuses, spacing }) => ({
    container: {
        backgroundColor: colors.primaryColor,
        borderRadius: radiuses.medium,
        borderTopColor: 'white',
        marginBottom: spacing.small,
    },
});

class ExampleComponent extends PureComponent {
    ...
    render() {
        const { styles } = this.props;

        return (
            <View style={styles.container}>
                ...
            </View>
        );
    }
}

ExampleComponent = withTheme(styles)(ExampleComponent);
...
```

**Notice** the `styles` come from props, it's not the `const styles` defined above the component.

And you can also access theme object anywhere in the app:
```jsx
...
import { withTheme } from 'react-native-simple-ui';

class ExampleComponent extends PureComponent {
    ...
    render() {
        const { isError, theme } = this.props;
        
        const color = isError ? theme.colors.danger : theme.colors.primary;

        return (
            <Text style={{ color }}>
                Hello world
            </Text>
        );
    }
}

ExampleComponent = withTheme()(ExampleComponent);
...
```

**IMPORTANT:** You can't have your own component with the same name as any of UI components which uses `withTheme` because that would overwrite your styles with the styles defined in the theme. For example your `Button` component `withTheme(styles, 'Button')(Button)` would have the styles from UI `Button`. Just use a different identifier, e.g. `withTheme(styles, 'MyButton')(Button)` or leave it empty if you don't need it.

## Recommendations
For styling consistency, I recommend to follow up these simple rules:
- do not use `Text` from React Native, use the `Text` from this repository
- use `Spacer` for spaces between elements
- do not use e.g. `padding: 20`, but use primitives like `padding: spacing.huge`

# FAQ
### Can I change the default props?
No. If you want to overwrite the default props you have to create your own component which extends this UI's component. For example if you want your `Button` to always be rounded and outlined, you would create a new component which extends UI's `Button` and passes these props to it.

### Can I change the theme dynamically?
Yes, you can, however the whole app would be re-rendered.

# Showcase
- [Res Publica](https://play.google.com/store/apps/details?id=cz.janziemba.respublica) (_Czech only_) - a quiz game about Czech politicians

[Hit me up](jan.ziemba@gmail.com) to add your app here!

# License
[MIT](LICENSE), © 2019 - present Jan Ziemba
