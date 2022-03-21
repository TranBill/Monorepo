import * as React from 'react';
import {AttendanceScreen} from './screens/index';
import { AntDesign } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerTab=()=> {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
        name="Attendance" 
        component={AttendanceScreen}
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="clockcircleo" size={24} color={color} />
          )
        }}
         />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerTab;