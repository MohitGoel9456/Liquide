import React from "react";
import {
    FlatList,
    StyleSheet
} from 'react-native';
import { Card } from "../../type/widget";
import { CardComponent } from "../card/CardComponent";
import TabComponent from "../tabComponent/TabComponent";

type IProps = {
    cardData: Card[];
}

export const WidgetComponent: React.FC<IProps> = (props: IProps) => {
    const { cardData } = props;

    const renderWidget = ({ item }: { item: Card }) => {
        return (
            <CardComponent containerStyle={style.cardContainer}>
                <TabComponent
                    tabs={item.children[0]?.content}
                />
            </CardComponent >
        )
    }

    return (
        <FlatList
            data={cardData}
            renderItem={renderWidget}
            keyExtractor={(item: Card, index: Number) => item.type + index}
            contentContainerStyle={style.container}
        />
    )
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 16,
        backgroundColor: '#fff',
    },
    cardContainer: {
        marginBottom: 12,
    }
})