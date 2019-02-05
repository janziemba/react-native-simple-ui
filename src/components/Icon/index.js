import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import withTheme from '../../themes/withTheme';
import { ICON_SETS } from './constants';
import styles from './styles';

export const propTypes = {
    color: PropTypes.string,
    colorName: PropTypes.string,
    iconSet: PropTypes.string,
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    styles: PropTypes.objectOf(PropTypes.object).isRequired,
    theme: PropTypes.objectOf(PropTypes.object).isRequired,
};
const defaultProps = {
    color: null,
    colorName: null,
    iconSet: null,
    size: 24,
};

class Icon extends PureComponent {
    render() {
        const { color, colorName, iconSet, name, size, styles, theme } = this.props;

        const VectorIcon = ICON_SETS[iconSet || theme.typography.iconSet];

        let iconColor = color;

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

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

Icon = withTheme(styles, 'Icon')(Icon);

export default Icon;
