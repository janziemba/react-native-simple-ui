// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { StyleSheet } from 'react-native';

import merge from 'lodash/merge';
import omit from 'lodash/omit';

import type { ThemeType } from '../types';
import baseTheme from './base';
import { ThemeConsumer } from './themeContext';

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

type Props = {
    style?: StyleSheet.Styles,
};

const withTheme = (customStyles: Function, componentName: string) => (Component: any) => {
    class ComponentWithTheme extends PureComponent<Props> {
        static originalComponentName: string = Component.displayName || Component.name;
        static displayName: ?string = `WithTheme(${Component.displayName || Component.name})`;

        static defaultProps = {
            style: {},
        };

        render(): Node {
            return (
                <ThemeConsumer>
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
                            this.props.style, // eslint-disable-line react/prop-types, react/destructuring-assignment, max-len
                        );

                        return (
                            <Component
                                {...omit(this.props, ['style'])}
                                styles={styles}
                                theme={theme}
                            />
                        );
                    }}
                </ThemeConsumer>
            );
        }
    }

    return ComponentWithTheme;
};

export default withTheme;
