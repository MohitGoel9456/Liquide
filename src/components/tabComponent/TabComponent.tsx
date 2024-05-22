// TabComponent.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TabContent } from '../../type/widget';
import { colors } from '../colors';
import { LineComponent } from '../lineComponent/LineComponent';

type IProps = {
    tabs: TabContent[];
}

const TabComponent: React.FC<IProps> = ({ tabs }) => {

    const [selectedTab, setSelectedTab] = useState(tabs[0]?.key);

    const onTabPress = (key: string) => {
        setSelectedTab(key);
    }

    const renderTabs = (): JSX.Element => {
        return (
            <View style={styles.tabContainer}>
                {tabs.map(tab => (
                    <>
                        <TouchableOpacity
                            key={tab.key}
                            style={[styles.tab, selectedTab === tab.key && styles.activeTab]}
                            onPress={() => onTabPress(tab.key)}
                        >
                            <Text style={[styles.tabText, selectedTab === tab.key && styles.selectedTabText]}>{tab.title}</Text>
                        </TouchableOpacity>
                    </>
                ))}
            </View>
        )
    }

    const renderContent = (): JSX.Element => {
        const tabContent = tabs.find(item => item.key === selectedTab);
        return (
            <Text style={styles.contentText}>{tabContent?.value}</Text>
        )
    }

    return (
        <>
            {renderTabs()}
            <LineComponent />
            {renderContent()}
        </>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: "space-around"
    },
    tab: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 16,
        marginBottom: 8
    },
    activeTab: {
        backgroundColor: colors.primaryBlue,
    },
    tabText: {
        color: colors.grey,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 12
    },
    selectedTabText: {
        color: colors.white,
    },
    contentText: {
        marginTop: 10,
        color: colors.grey
    }
});

export default TabComponent;
