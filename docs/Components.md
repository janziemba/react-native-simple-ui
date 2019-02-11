---
id: components
title: Components
---
Once you have included [ThemeProvider](Theme.md#theme-provider) in your app, you can use the components:
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
