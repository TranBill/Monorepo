// Library
import React from "react";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";

MIcon.loadFont();

type IconSizeProps = {
  // eslint-disable-next-line no-use-before-define
  iconSizes: keyof typeof IconSizes;
};

interface IconProps {
  size: IconSizeProps["iconSizes"];
  name: string;
  color: string;
}

const IconSizes = {
  small: 13,
  medium: 18,
  large: 25,
  extraLarge: 35
};

export const MaterialIcon = ({ size, name, color }: IconProps) => (
  <MIcon name={name} size={IconSizes[size]} color={color} />
);
