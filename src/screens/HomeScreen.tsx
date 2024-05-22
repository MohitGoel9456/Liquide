import React from "react";
import {
    View,
    StyleSheet,
} from 'react-native';
import { CardComponent } from "../components/card/CardComponent";
import TabComponent from "../components/tabComponent/TabComponent";
import data from '../data/data.json';

const HomeScreen = () => {

    const renderComponent = (component: any) => {
        switch (component?.type) {
            case 'container':
                return <View style={[styles.container, component.styles]}>{component.children?.map((child: any) => renderComponent(child))}</View>;
            case 'card':
                return <CardComponent containerStyle={component.styles}>{component.children?.map((child: any) => renderComponent(child))}</CardComponent>;
            case 'tab':
                return (
                    <TabComponent tabs={component.content} />
                );
            default:
                return null;
        }
    };

    return (
        <>
            {renderComponent(data)}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16
    },
});

export default HomeScreen;