// Library
import React from "react";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
MIcon.loadFont();
const IconSizes = {
    small: 13,
    medium: 18,
    large: 25,
    extraLarge: 35
};
export const MaterialIcon = ({ size, name, color }) => (React.createElement(MIcon, { name: name, size: IconSizes[size], color: color }));
