---
id: withtheme
title: withTheme HOC
---
To use the theme in your own components, you can use `withTheme` high order component. You can define styles while using theme primitives:
```jsx
...
import { withTheme } from 'react-native-simple-ui';

const styles = ({ colors, radiuses, spacing }) => ({
    container: {
        backgroundColor: colors.palette.primary,
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
        const { danger, primary } = theme.colors.palette;
        
        const color = isError ? danger : primary;

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

**IMPORTANT:** You can't have your own component with the same name as any of UI components which uses `withTheme` because that would overwrite your styles with the styles defined in the theme. For example your `Button` component `withTheme(styles, 'Button')(Button)` would have the styles from [`Button`](components/Button.md). Just use a different identifier, e.g. `withTheme(styles, 'MyButton')(Button)` or leave it empty if you don't need it.
