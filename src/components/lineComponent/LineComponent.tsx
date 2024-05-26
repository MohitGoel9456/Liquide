import React from "react";
import {
    View,
    StyleSheet,
    ViewStyle
} from 'react-native';
import { colors } from "../../constants/colors";

type IProps = {
    lineStyle?: ViewStyle
}

export const LineComponent: React.FC<IProps> = (props: IProps) => {
    const { lineStyle } = props;
    return (
        <View style={[styles.container, lineStyle]} />
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderColor: colors.grey,
        width: '100%'
    }
})
