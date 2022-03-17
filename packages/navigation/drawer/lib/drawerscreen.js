import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerTab from './drawer';
const Stack = createNativeStackNavigator();
function DrawerScreen() {
    return (React.createElement(NavigationContainer, null,
        React.createElement(Stack.Navigator, null,
            React.createElement(Stack.Screen, { options: { headerShown: false }, name: 'Drawer', component: DrawerTab }))));
}
export default DrawerScreen;
