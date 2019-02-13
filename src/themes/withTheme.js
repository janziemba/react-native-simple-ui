// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';

import merge from 'lodash/merge';

import type { ThemeType } from '../types';
import baseTheme from './base';
import ThemeContext from './themeContext';

const warnAboutReservedPropName = (propName: string, componentName: string) => {
    console.warn(`In '${componentName}', you are using a reserved property '${propName}' which is being rewritten in withTheme HOC.`); // eslint-disable-line no-console
};

const checkErrors = (props: any, componentName: string) => {
    const { styles, theme } = props;

    if (styles) {
        warnAboutReservedPropName('styles', componentName);
    }

    if (theme) {
        warnAboutReservedPropName('theme', componentName);
    }
};

const withTheme = (customStyles: Function, componentName: string) => (Component: any) => {
    class ComponentWithTheme extends PureComponent<{}> {
        static originalComponentName: string = Component.displayName || Component.name;
        static displayName: ?string = `WithTheme(${Component.displayName || Component.name})`;

        render(): Node {
            return (
                <ThemeContext.Consumer>
                    {(customTheme: ThemeType) => {
                        checkErrors(this.props, componentName);

                        const theme: ThemeType = merge(
                            {},
                            baseTheme,
                            customTheme || {},
                        );

                        const styles: {} = merge(
                            {},
                            customStyles ? customStyles(theme) : {},
                            theme.components[componentName] || {},
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

    return ComponentWithTheme;
};

export default withTheme;