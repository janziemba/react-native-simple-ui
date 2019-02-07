# Button

## Props
Extend React Native's [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity#props) props
- `color` (_string_, default primary) - one of theme colors, [base theme colors](../src/themes/base/colors.js) by default
- `icon` (_object_, default null)
    - `color` (_string_, default null)
    - `colorName` (_string_, default null)
    - `iconSet` (_string_, default `theme.typography.iconSet` which is MaterialIcons by default)
    - `name` (_string_, **required**)
    - `position` (_string_, default left)
    - `size` (_number_, default 24)
- `linearGradient` (_object_, default null)
    - `children` (_node_, default null)
    - `direction` (_string_, default horizontal)
    - `fromColor` (_string_, **required**)
    - `height` (_number_, **required**)
    - `toColor` (_string_, **required**)
    - `width` (_number_, **required**)
- `rounding` (_string_, default normal)
- `size` (_string_, default medium)
- `state` (_string_, default inactive)
- `text` (_string_, **required**)
- `variant` (_string_, default default)

## How do styles work
The styles are merged in this order: base, rounding, size, color, variant and iconPosition. It means basic styles
are applied, then rounded borders, then then the button is resized, then the button gets its colors - the color is
applied for both background and text. Then variant decides if the color should be applied for background only
(default variant), for text only (flat variant) or for text and border (outlined variant). Then iconPosition decides
which flexDirection and padding should be applied to container and iconContainer.

## Examples

### Default

```jsx
<Button
    text="Default"
/>
```

### With different color

```jsx
<Button
    color="success"
    text="With different color"
/>
```

### With icon

```jsx
<Button
    icon={{
        name: 'star',
    }}
    text="With icon"
/>
```

### With icon on right

```jsx
<Button
    icon={{
        name: 'star',
        position: 'right',
    }}
    text="With icon on right"
/>
```

### Rounded

```jsx
<Button
    rounding="rounded"
    text="Rounded"
/>
```

### Sharp

```jsx
<Button
    rounding="sharp"
    text="Sharp"
/>
```

### Small

```jsx
<Button
    size="small"
    text="Small"
/>
```

### Large

```jsx
<Button
    size="large"
    text="Large"
/>
```

### Active

```jsx
<Button
    state="active"
    text="Active"
/>
```

### Disabled

```jsx
<Button
    state="disabled"
    text="Disabled"
/>
```

### Flat

```jsx
<Button
    text="Flat"
    variant="flat"
/>
```

### Outlined

```jsx
<Button
    text="Outlined"
    variant="outlined"
/>
```
