import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import withTheme from '../../themes/withTheme';
import hasStyleChanged from '../../utils/hasStyleChanged';
import Column from '../Grid/Column';
import Grid from '../Grid/Grid';
import styles from './styles';

const getStyles = (props) => {
    const { color, styles } = props;

    return [
        styles.base.container,
        styles.colors[color].container,
    ];
};

const propTypes = {
    centerElement: PropTypes.node,
    color: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    leftElement: PropTypes.node,
    rightElement: PropTypes.node,
    styles: PropTypes.objectOf(PropTypes.object).isRequired, // eslint-disable-line react/no-unused-prop-types, max-len
};

const defaultProps = {
    centerElement: null,
    color: 'primary',
    leftElement: null,
    rightElement: null,
};

class Toolbar extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            styles: getStyles(props),
        };
    }
    componentWillReceiveProps(nextProps) {
        const propsOnWhichDependsTheStyle = ['color'];

        if (hasStyleChanged(propsOnWhichDependsTheStyle, nextProps, this.props)) {
            this.setState({ styles: getStyles(nextProps) });
        }
    }
    render() {
        const { centerElement, leftElement, rightElement } = this.props;
        const { styles } = this.state;

        return (
            <Grid style={styles}>
                <Column>
                    {leftElement}
                </Column>
                <Column size={2}>
                    {centerElement}
                </Column>
                <Column>
                    {rightElement}
                </Column>
            </Grid>
        );
    }
}

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

Toolbar = withTheme(styles, 'Toolbar')(Toolbar);

export default Toolbar;
