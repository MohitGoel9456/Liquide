import React from "react";
import {
    View,
    StyleSheet,
} from 'react-native';
import { KeysToComponentMap } from "../components/index";
import data from '../data/data.json';
import { Element, TabContent } from "../type/widget";

const HomeScreen = () => {

    const renderer = (component: Element): JSX.Element => {
        if (typeof KeysToComponentMap[component.type] !== "undefined") {
            const children = component.children ? component.children.map(c => renderer(c)) : null;
            return React.createElement(
                KeysToComponentMap[component.type],
                {...component.styles, tabs: component.content, containerStyle: component.styles }, // Spread additional props and styles, including a key
                children
            );
        }
        return <View/>; // Handle cases where the component type is undefined
    };

    return (
        <View style={styles.container}>
            {renderer(data)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
});

export default HomeScreen;