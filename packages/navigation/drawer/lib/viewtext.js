import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const Viewtext = () => {
    return (React.createElement(View, { style: Styles.container },
        React.createElement(Text, null, "Hello, Im Bill")));
};
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Viewtext;
