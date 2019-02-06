# Container

## Props
Extend React Native's [View](https://facebook.github.io/react-native/docs/view#props) props
- `alignment` (_string_, default null)
- `children` (_node_, **required**)
- `margin` (_string_, default null)
- `padding` (_string_, default null)

## Examples

### Default
```jsx
<Container>
    <Text>
        Default container
    </Text>
</Container>
```

### With centered content
```jsx
<Container alignment="center">
    <Text>
        Container with centered content
    </Text>
</Container>
```
