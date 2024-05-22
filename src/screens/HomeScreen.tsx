import React from "react";
import {
    Text
} from 'react-native';
import { WidgetComponent } from "../components/widgetComponent/WidgetComponent";
import data from '../data/data.json';

const HomeScreen = (): JSX.Element => {
    return (
        <>
            {data.children.length > 0 ? (
                <WidgetComponent cardData={data.children} />
            ) : (
                <Text>No Data Available.</Text>
            )}
        </>
    )
}

export default HomeScreen;