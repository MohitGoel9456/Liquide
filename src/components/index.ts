import { CardComponent } from "./card/CardComponent";
import {View} from 'react-native';
import TabComponent from "./tabComponent/TabComponent";

export const KeysToComponentMap: { [key: string]: React.ComponentType<any> } = {
    "container": View,
    "card": CardComponent,
    "tab": TabComponent,
  };