# React Native Simple UI
- almost **pure JavaScript** - the only native dependency is [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- **easy to use** - a [ThemeProvider](docs/Theme.md) is all you need to begin
- **customizable** - you can set custom styles of everything
- **lightweight** - just a few lines of code

[![npm version](https://img.shields.io/npm/v/react-native-simple-ui.svg?style=flat-square)](https://www.npmjs.com/package/react-native-simple-ui)
![Size](https://img.shields.io/github/size/janziemba/react-native-simple-ui/dist.svg?style=flat-square)
[![Downloads](https://img.shields.io/npm/dm/react-native-simple-ui.svg?style=flat-square)](https://img.shields.io/npm/dm/react-native-simple-ui.svg)
[![Dependencies](https://img.shields.io/librariesio/github/janziemba/react-native-simple-ui.svg?style=flat-square)](https://www.npmjs.com/package/react-native-simple-ui)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/janziemba/react-native-simple-ui/master/LICENSE)

# Usage
See the [documentation](/docs/) of all components.

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

[Hit me up](mailto:jan.ziemba@gmail.com) to add your app here!

# License
[MIT](LICENSE), © 2019 - present Jan Ziemba
