import * as React from 'react';
import Styles from '../styles';
import { Text, View } from 'react-native';
function AttendanceScreen() {
    return (React.createElement(View, { style: Styles.container },
        React.createElement(Text, null, "This is attendance")));
}
export default AttendanceScreen;
