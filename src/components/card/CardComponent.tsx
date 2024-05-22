import React from "react";
import {
    View,
    ViewStyle,
    StyleSheet
} from 'react-native';
import { colors } from "../colors";

type Iprops = {
    containerStyle?: ViewStyle;
    children: JSX.Element;
}

export const CardComponent: React.FC<Iprops> = (props: Iprops) => {
    const { containerStyle, children } = props;
    return (
        <View style={[styles.card, containerStyle]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        backgroundColor: colors.black2,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})