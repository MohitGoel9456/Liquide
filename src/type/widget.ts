// types.ts

import { ViewStyle } from 'react-native';

export interface Styles {
    style?: ViewStyle;
}

export interface TabContent {
    title: string;
    key: string;
    value: string;
    styles: ViewStyle;
}

export interface Tab {
    type: 'tab';
    styles: ViewStyle;
    content: TabContent[];
}

export interface Card {
    type: 'card';
    styles: ViewStyle;
    children: Tab[];
}

export interface Container {
    type: 'container';
    styles: ViewStyle;
    children: Card[];
}

export interface WidgetData {
    type: 'container';
    styles: ViewStyle;
    children: Card[];
}
