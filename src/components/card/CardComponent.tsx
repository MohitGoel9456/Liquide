import React from "react";
import {
    View,
    ViewStyle,
    StyleSheet
} from 'react-native';
import { colors } from "../colors";

type Card = {
    containerStyle?: ViewStyle;
    children: JSX.Element;
}

export const CardComponent = (props: Card) => {
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
        marginTop: 16
    }
})