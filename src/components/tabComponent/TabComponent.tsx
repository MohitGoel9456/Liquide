import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutChangeEvent } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    runOnJS,
} from 'react-native-reanimated';
import { TabContent } from '../../type/widget';
import { colors } from '../colors';
import { LineComponent } from '../lineComponent/LineComponent';

type IProps = {
    tabs: TabContent[];
}

const TabComponent: React.FC<IProps> = ({ tabs }) => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]?.key);
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const [tabLayouts, setTabLayouts] = useState<{ [key: number]: { width: number, x: number } }>({});
    const translateX = useSharedValue(0);

    const handlePress = (key: string, index: number) => {
        setSelectedTab(key);
        setSelectedTabIndex(index);
    }
    const onTabPress = (key: string, index: number) => {
        if (index === selectedTabIndex) {
            return;
        }
        const newPosition = tabLayouts[index]?.x || 0;
        translateX.value = withTiming(newPosition, {
            duration: 300,
        }, () => {
            runOnJS(handlePress)(key, index);
        });
    }

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    const onTabLayout = (index: number, event: LayoutChangeEvent) => {
        const { width, x } = event.nativeEvent.layout;
        setTabLayouts((prevLayouts) => ({
            ...prevLayouts,
            [index]: { width, x }
        }));
    }

    useEffect(() => {
        const initialPosition = tabLayouts[selectedTabIndex]?.x || 0;
        translateX.value = initialPosition;
    }, [tabLayouts]);

    const renderTabs = (): JSX.Element => {
        return (
            <View style={styles.tabContainer}>
                <Animated.View style={[styles.animatedTab, animatedStyles, { width: tabLayouts[selectedTabIndex]?.width || 0 }]} />
                {tabs.map((tab, index) => (
                    <TouchableOpacity
                        key={tab.key}
                        style={styles.tabBar}
                        onLayout={(event) => onTabLayout(index, event)}
                        onPress={() => onTabPress(tab.key, index)}
                    >
                        <Text style={[styles.tabText, selectedTabIndex === index && styles.selectedTabText]}>{tab.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }

    const renderContent = (): JSX.Element => {
        const tabContent = tabs.find(item => item.key === selectedTab);
        return (
            <Text style={styles.contentText}>{tabContent?.value}</Text>
        );
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
        justifyContent: 'space-around',  // Changed to space-around
    },
    tabBar: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        zIndex: 1,
    },
    animatedTab: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '100%',
        backgroundColor: colors.primaryBlue,
        borderRadius: 16,
    },
    tabText: {
        color: colors.grey,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 12,
    },
    selectedTabText: {
        color: colors.white,
    },
    contentText: {
        marginTop: 10,
        color: colors.grey,
    }
});

export default TabComponent;
