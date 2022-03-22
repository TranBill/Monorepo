import * as React from 'react';
import { View, Text, TouchableOpacity } from "react-native";

import { Octicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {AttendanceScreen, Calendarscreen, Profilescreen, Dailyreport} from './screens/index';
import { DrawerContent } from './Widgets/DrawerContent';
import {MaterialIcon} from './Widgets/Icons'

import Styles from './styles';

const Drawer = createDrawerNavigator();

const DrawerTab=()=> {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: true }}
        drawerContent={(props) => <DrawerContent children={undefined} {...props} />}
      >
        <Drawer.Screen
          name="Attendance"
          component={AttendanceScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <View>
                <TouchableOpacity
                  style={Styles.header_left}
                  onPress={() => navigation.openDrawer()}
                >
                  <Octicons name="three-bars" size={32} color="black" />
                </TouchableOpacity>
              </View>
            ),
            headerRight: () => (
              <View style={Styles.header}>
                <View style={Styles.header_right}>
                  <TouchableOpacity>
                    <Feather name="bell" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <MaterialIcon size="extraLarge" color="black" name="apps" />
                  </TouchableOpacity> 
                  <TouchableOpacity>
                    <MaterialCommunityIcons name="account-circle" size={35} color="lightgray" />
                  </TouchableOpacity>
                </View>
              </View>
            ),
            headerTitle: () => (
              <View style={Styles.header_title}>
                <Text style={Styles.text_title}>H</Text>
              </View>
            )
          })}
        />
        <Drawer.Screen name="Calendar" component={Calendarscreen} />
        <Drawer.Screen name="Profile" component={Profilescreen} />
        <Drawer.Screen name="Daily Report" component={Dailyreport} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerTab;