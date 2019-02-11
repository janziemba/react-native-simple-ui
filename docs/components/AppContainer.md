---
id: appcontainer
title: AppContainer
---
## Props
- `backgroundImage` (_source_, default null)
- `children` (_node_, **required**)

## Examples

### Default
```jsx
<AppContainer>
    <Container>
        <Text>
            App container
        </Text>
    </Container>
</AppContainer>
```

### Background image
```jsx
<AppContainer backgroundImage={image}>
    <Container>
        <Text>
            App container with a background image
        </Text>
    </Container>
</AppContainer>
```
