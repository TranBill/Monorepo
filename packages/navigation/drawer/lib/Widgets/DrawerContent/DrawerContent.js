/* eslint-disable @typescript-eslint/no-empty-function */
// library
import React from "react";
import { View, Text, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialIcons, FontAwesome, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
// others
import styles from "./styles";
//declare module "*.png"
export function DrawerContent(props) {
    return (React.createElement(View, { style: { flex: 1 } },
        React.createElement(View, { style: styles.USerServicesSection },
            React.createElement(View, { style: styles.TopDrawerSection },
                React.createElement(Image, { source: {
                        uri: "https://reactnative.dev/img/tiny_logo.png"
                    }, style: { width: 46, height: 45 } }),
                React.createElement(Text, { style: styles.Caption }, "Attendence"))),
        React.createElement(DrawerContentScrollView, { ...props },
            React.createElement(View, { style: styles.drawerContent },
                React.createElement(DrawerItem, { icon: ({ color, size }) => (React.createElement(MaterialIcons, { name: "access-alarm", size: size, color: color })), label: "Attendence", onPress: () => { } }),
                React.createElement(DrawerItem, { icon: ({ color, size }) => (React.createElement(FontAwesome, { name: "calendar", size: size, color: color })), label: "Calendar", onPress: () => { } }),
                React.createElement(DrawerItem, { icon: ({ color, size }) => (React.createElement(AntDesign, { name: "user", size: size, color: color })), label: "Profile", onPress: () => { } }),
                React.createElement(DrawerItem, { icon: ({ color, size }) => (React.createElement(MaterialCommunityIcons, { name: "clipboard-list-outline", size: size, color: color })), label: "Daily Report", onPress: () => { } })))));
}
