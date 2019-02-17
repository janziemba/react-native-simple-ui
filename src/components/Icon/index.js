// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';

import withTheme from '../../themes/withTheme';
import type { ThemeShapeType } from '../../types';
import { ICON_SETS } from './constants';
import styles from './styles';
import type { StylesType } from './styles';

export type Props = {
    color?: string,
    colorName?: string,
    iconSet?: string,
    name: string,
    size?: number,
};

type PrivateProps = Props & {
    styles: StylesType,
    theme: ThemeShapeType,
};

class Icon extends PureComponent<PrivateProps> {
    static defaultProps = {
        color: null,
        colorName: null,
        iconSet: null,
        size: 24,
    };
    render(): Node {
        const { color, colorName, iconSet, name, size, styles, theme } = this.props;

        const VectorIcon = ICON_SETS[iconSet || theme.typography.iconSet];

        let iconColor: ?string = color;

        if (colorName) {
            iconColor = styles.colors[colorName].color;
        }

        return (
            <VectorIcon
                color={iconColor}
                name={name}
                size={size}
            />
        );
    }
}

Icon = withTheme(styles, 'Icon')(Icon);

export default Icon;
