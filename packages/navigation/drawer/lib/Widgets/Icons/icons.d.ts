declare type IconSizeProps = {
    iconSizes: keyof typeof IconSizes;
};
interface IconProps {
    size: IconSizeProps["iconSizes"];
    name: string;
    color: string;
}
declare const IconSizes: {
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
};
export declare const MaterialIcon: ({ size, name, color }: IconProps) => JSX.Element;
export {};
