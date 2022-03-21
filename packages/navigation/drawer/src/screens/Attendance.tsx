import * as React from 'react';
import Styles from '../styles';
import {Text, View} from 'react-native';

function AttendanceScreen() {
    return(
        <View style={Styles.container}>
            <Text style={Styles.textStyle}>
                This is attendance
            </Text>
        </View>
    )
}
export default AttendanceScreen;