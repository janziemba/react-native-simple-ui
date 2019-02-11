---
id: theme
title: Theme
---
## Theme config
You can set your own primitives or you can also set custom styles here and overwrite default styles. For example:
```jsx
const customTheme = {
    colors: {
        palette: {
            primary: 'green',
        },
    },
    components: {
        text: {
            sizes: {
                h1: {
                    fontSize: 50,
                },
            },
        },
        toolbar: {
            base: {
                container: {
                    backgroundColor: 'red',
                },
            },
        },
    },
};
```

## Theme provider
You have to define a theme context in your app's root component. `value` is not necessary if you want to use the default theme.
```jsx
import { ThemeContext } from 'react-native-simple-ui';

const customTheme = {
    ...
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
```

## Default theme
### Colors
#### Layout
- ![#ffffff](https://placehold.it/15/ffffff/000000?text=+) `#ffffff` - backgroundColor

#### Palette
- ![#ff4136](https://placehold.it/15/ff4136/000000?text=+) `#ff4136` - danger
- ![#484848](https://placehold.it/15/484848/000000?text=+) `#484848` - dark
- ![#999999](https://placehold.it/15/999999/000000?text=+) `#999999` - disabled
- ![#75caeb](https://placehold.it/15/75caeb/000000?text=+) `#75caeb` - info
- ![#f6f6f6](https://placehold.it/15/f6f6f6/000000?text=+) `#f6f6f6` - light
- ![#158cba](https://placehold.it/15/158cba/000000?text=+) `#158cba` - primary
- ![#28b62c](https://placehold.it/15/28b62c/000000?text=+) `#28b62c` - success
- ![#ff851b](https://placehold.it/15/ff851b/000000?text=+) `#ff851b` - warning

#### Social
- ![#3b5998](https://placehold.it/15/3b5998/000000?text=+) `#3b5998` - facebook
- ![#dc4e41](https://placehold.it/15/dc4e41/000000?text=+) `#dc4e41` - google
- ![#c32aa3](https://placehold.it/15/c32aa3/000000?text=+) `#c32aa3` - instagram
- ![#0077b5](https://placehold.it/15/0077b5/000000?text=+) `#0077b5` - linkedin
- ![#55acee](https://placehold.it/15/55acee/000000?text=+) `#55acee` - twitter
- ![#4c75a3](https://placehold.it/15/4c75a3/000000?text=+) `#4c75a3` - vk

#### Text
- ![#999999](https://placehold.it/15/999999/000000?text=+) `#999999` - disabled
- ![#e2e4e6](https://placehold.it/15/e2e4e6/000000?text=+) `#e2e4e6` - placeholder
- ![#3d3d3d](https://placehold.it/15/3d3d3d/000000?text=+) `#3d3d3d` - primary
- ![#9e9e9e](https://placehold.it/15/9e9e9e/000000?text=+) `#9e9e9e` - secondary

```jsx
{
    layout: {
        backgroundColor: '#ffffff',
    },
    palette: {
        danger: '#ff4136',
        dark: '#484848',
        disabled: '#999999',
        info: '#75caeb',
        light: '#f6f6f6',
        primary: '#158cba',
        success: '#28b62c',
        warning: '#ff851b',
    },
    social: {
        facebook: '#3b5998',
        google: '#dc4e41',
        instagram: '#c32aa3',
        linkedIn: '#0077b5',
        twitter: '#55acee',
        vk: '#4c75a3',
    },
    text: {
        disabled: '#999999',
        placeholder: '#e2e4e6',
        primary: '#3d3d3d',
        secondary: '#9e9e9e',
    },
}
```

### Radiuses
```jsx
{
    tiny: 2,
    small: 4,
    medium: 6,
    large: 8,
    huge: 12,
    gigantic: 16,
}
```

### Spacing
```jsx
{
    tiny: 4,
    small: 8,
    medium: 12,
    large: 16,
    huge: 20,
    gigantic: 24,
}
```

### Typography
```jsx
{
    fontFamily: Platform.select({
        android: 'Roboto',
        ios: 'System',
    }),
    fontSizes: {
        large: 16,
        medium: 14,
        small: 12,
    },
    fontWeights: {
        bold: '900',
        medium: '800',
        normal: '600', // 500 looks different on iOS and Android
    },
    iconSet: 'MaterialIcons',
    sizes: {
        h1: {
            fontSize: 31,
            fontWeight: '900',
        },
        h2: {
            fontSize: 25,
            fontWeight: '900',
        },
        h3: {
            fontSize: 19,
            fontWeight: '800',
        },
        h4: {
            fontSize: 17,
            fontWeight: '800',
        },
        h5: {
            fontSize: 16,
            fontWeight: '800',
        },
        h6: {
            fontSize: 15,
            fontWeight: '700',
        },
        normal: {
            fontSize: 14,
            fontWeight: '700',
        },
        small: {
            fontSize: 12,
        },
    },
}
```
