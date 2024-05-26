// types.ts

import { ViewStyle } from 'react-native';

export type Styles = {
    styles?: ViewStyle;
}

export type TabContent = Styles & {
    title: string;
    key: string;
    value: string;
}

export type Tab = Styles & {
    type: 'tab';
    content: TabContent[];
}

export type Card = Styles & {
    type: 'card';
    children: Tab[];
}

export type Container = Styles & {
    type: 'container';
    children: Card[];
}

export type Element = {
    type: string;
    styles?: any;
    children?: Element[];
    content?: TabContent[];
  };

