import React from 'react';
import { View, Text } from 'react-native';
const GreetingMobile = ({ whom = 'World', from = 'Bill', textcolor = 'gray' }) => {
    return (React.createElement(View, null,
        React.createElement(Text, { style: { color: textcolor } },
            "Hello ",
            whom,
            " from ",
            from)));
};
export default GreetingMobile;
