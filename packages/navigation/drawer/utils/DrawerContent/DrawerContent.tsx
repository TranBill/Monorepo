// library
import React from "react";
import { View, Text, ScrollView, ScrollViewProps, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialIcons, FontAwesome, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

// others
import styles from "./styles";

declare module "*.png"
export function DrawerContent (props: JSX.IntrinsicAttributes & ScrollViewProps & { children: React.ReactNode; } & React.RefAttributes<ScrollView>) {
  return (
        <View style= {{ flex: 1 }}>
          <View style = {styles.USerServicesSection}>
            <View style = {styles.TopDrawerSection}>
              <Image source = {{
                uri: "https://reactnative.dev/img/tiny_logo.png"
              }} style ={{ width: 46, height: 45 }} />
              <Text style = {styles.Caption}>Attendence</Text>
            </View>
          </View>
          <DrawerContentScrollView {...props}>
            <View style = {styles.drawerContent}>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="access-alarm" size={size} color={color} />
              )}
              label="Attendence"
              onPress={() => { /* props.navigation.navigate("Attendance"); */ }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome name="calendar" size={size} color={color} />
              )}
              label="Calendar"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name="user" size={size} color={color} />
              )}
              label="Profile"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="clipboard-list-outline" size={size} color={color} />
              )}
              label="Daily Report"
              onPress={() => {}}
            />
            </View>
          </DrawerContentScrollView>
        </View>
  );
}