// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import withTheme from '../../themes/withTheme';
import Icon from '../Icon';
import type { Props as IconProps } from '../Icon';
import styles from './styles';

type Props = {
    emptyIcon: IconProps,
    fullIcon: IconProps,
    halfIcon: IconProps,
    limit?: number,
    onPress?: Function,
    rating: number,
    styles: StyleSheet.Styles,
};

class Rating extends PureComponent<Props> {
    static defaultProps = {
        limit: 5,
        onPress: null,
    };
    constructor(props: Props): void {
        super(props);

        (this: any).renderEmptyIcons = this.renderEmptyIcons.bind(this);
        (this: any).renderFullIcons = this.renderFullIcons.bind(this);
        (this: any).renderHalfIcon = this.renderHalfIcon.bind(this);
    }
    renderEmptyIcons(): Array<Node> {
        const { emptyIcon, limit, rating } = this.props;

        const nearestHalf: number = Math.round(rating * 2) / 2;
        const activeCount: number = nearestHalf % 1 === 0
            && nearestHalf > rating ? Math.ceil(rating) : Math.floor(rating);
        const halfShouldShow: boolean = nearestHalf % 1 > 0;
        const count: number = (limit || 5) - activeCount - (halfShouldShow ? 1 : 0);
        const icons: Array<Node> = [];

        for (let i = 0; i < count; i += 1) {
            icons.push(<Icon
                {...emptyIcon}
                key={`emptyIcon_${i}`}
            />);
        }

        return icons;
    }
    renderFullIcons(): Array<Node> {
        const { fullIcon, rating } = this.props;

        const nearestHalf: number = Math.round(rating * 2) / 2;
        const count: number = nearestHalf % 1 === 0
            && nearestHalf > rating ? Math.ceil(rating) : Math.floor(rating);
        const icons: Array<Node> = [];

        for (let i = 0; i < count; i += 1) {
            icons.push(<Icon
                {...fullIcon}
                key={`fullIcon_${i}`}
            />);
        }

        return icons;
    }
    renderHalfIcon(): Node {
        const { halfIcon, rating } = this.props;

        const nearestHalf: number = Math.round(rating * 2) / 2;
        const shouldShow: boolean = nearestHalf % 1 > 0;

        if (!shouldShow) {
            return null;
        }

        return (
            <Icon {...halfIcon} />
        );
    }
    render(): Node {
        const { onPress, styles } = this.props;

        return (
            <TouchableOpacity
                onPress={onPress}
            >
                <View style={styles}>
                    {this.renderFullIcons()}
                    {this.renderHalfIcon()}
                    {this.renderEmptyIcons()}
                </View>
            </TouchableOpacity>
        );
    }
}

Rating = withTheme(styles, 'Rating')(Rating);

export default Rating;
