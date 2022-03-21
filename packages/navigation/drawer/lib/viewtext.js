import * as React from 'react';
import Styles from './styles';
import { Text, View } from 'react-native';
const Viewtext = () => {
    return (React.createElement(View, { style: Styles.container },
        React.createElement(Text, null, "Hello, Im Bill")));
};
export default Viewtext;
