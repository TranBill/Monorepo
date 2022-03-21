import * as React from 'react';
import { AttendanceScreen } from './screens/index';
import { AntDesign } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
const DrawerTab = () => {
    return (React.createElement(NavigationContainer, null,
        React.createElement(Drawer.Navigator, { initialRouteName: "Home" },
            React.createElement(Drawer.Screen, { name: "Attendance", component: AttendanceScreen, options: {
                    drawerIcon: ({ color }) => (React.createElement(AntDesign, { name: "clockcircleo", size: 24, color: color }))
                } }))));
};
export default DrawerTab;
