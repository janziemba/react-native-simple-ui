import React from 'react';

import merge from 'lodash/merge';

import baseTheme from './base';
import ThemeContext from './themeContext';

const warnAboutReservedPropName = (propName, componentName) => {
    console.warn(`In '${componentName}', you are using a reserved property '${propName}' which is being rewritten in withTheme HOC.`); // eslint-disable-line no-console
};

const checkErrors = (props, componentName) => {
    const { styles, theme } = props;

    if (styles) {
        warnAboutReservedPropName('styles', componentName);
    }

    if (theme) {
        warnAboutReservedPropName('theme', componentName);
    }
};

const withTheme = (customStyles, componentName) => (Component) => {
    class ComponentWithTheme extends React.Component {
        render() {
            return (
                <ThemeContext.Consumer>
                    {(customTheme) => {
                        checkErrors(this.props, componentName);

                        const theme = merge(
                            {},
                            baseTheme,
                            customTheme || {},
                        );

                        const styles = merge(
                            {},
                            customStyles ? customStyles(theme) : {},
                            theme[componentName] || {},
                        );

                        return (
                            <Component
                                {...this.props}
                                styles={styles}
                                theme={theme}
                            />
                        );
                    }}
                </ThemeContext.Consumer>
            );
        }
    }

    ComponentWithTheme.originalComponentName = Component.displayName || Component.name;
    ComponentWithTheme.displayName = `WithTheme(${ComponentWithTheme.originalComponentName})`;

    return ComponentWithTheme;
};

export default withTheme;
