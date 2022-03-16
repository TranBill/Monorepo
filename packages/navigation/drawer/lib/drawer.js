import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
function HomeScreen({ navigation }) {
    return (React.createElement(View, { style: { flex: 1, alignItems: 'center', justifyContent: 'center' } },
        React.createElement(Button, { onPress: () => navigation.navigate('Notifications'), title: "Go to notifications" })));
}
function NotificationsScreen({ navigation }) {
    return (React.createElement(View, { style: { flex: 1, alignItems: 'center', justifyContent: 'center' } },
        React.createElement(Button, { onPress: () => navigation.goBack(), title: "Go back home" })));
}
const Drawer = createDrawerNavigator();
const DrawerTab = () => {
    return (React.createElement(NavigationContainer, null,
        React.createElement(Drawer.Navigator, { initialRouteName: "Home" },
            React.createElement(Drawer.Screen, { name: "Home", component: HomeScreen }),
            React.createElement(Drawer.Screen, { name: "Notifications", component: NotificationsScreen }))));
};
export default DrawerTab;
