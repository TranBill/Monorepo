import * as React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Octicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AttendanceScreen, Calendarscreen, Profilescreen, Dailyreport } from './screens/index';
import { DrawerContent } from '../utils/DrawerContent';
import { MaterialIcon } from '../utils/Icons';
import Styles from './styles';
const Drawer = createDrawerNavigator();
const DrawerTab = () => {
    return (React.createElement(NavigationContainer, null,
        React.createElement(Drawer.Navigator, { screenOptions: { headerShown: true }, drawerContent: (props) => React.createElement(DrawerContent, { children: undefined, ...props }) },
            React.createElement(Drawer.Screen, { name: "Attendance", component: AttendanceScreen, options: ({ navigation }) => ({
                    headerLeft: () => (React.createElement(View, null,
                        React.createElement(TouchableOpacity, { style: Styles.header_left, onPress: () => navigation.openDrawer() },
                            React.createElement(Octicons, { name: "three-bars", size: 32, color: "black" })))),
                    headerRight: () => (React.createElement(View, { style: Styles.header },
                        React.createElement(View, { style: Styles.header_right },
                            React.createElement(TouchableOpacity, null,
                                React.createElement(Feather, { name: "bell", size: 32, color: "black" })),
                            React.createElement(TouchableOpacity, null,
                                React.createElement(MaterialIcon, { size: "extraLarge", color: "black", name: "apps" })),
                            React.createElement(TouchableOpacity, null,
                                React.createElement(MaterialCommunityIcons, { name: "account-circle", size: 35, color: "lightgray" }))))),
                    headerTitle: () => (React.createElement(View, { style: Styles.header_title },
                        React.createElement(Text, { style: Styles.text_title }, "H")))
                }) }),
            React.createElement(Drawer.Screen, { name: "Calendar", component: Calendarscreen }),
            React.createElement(Drawer.Screen, { name: "Profile", component: Profilescreen }),
            React.createElement(Drawer.Screen, { name: "Daily Report", component: Dailyreport }))));
};
export default DrawerTab;
