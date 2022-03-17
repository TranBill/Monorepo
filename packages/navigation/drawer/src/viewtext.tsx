import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Viewtext =()=>{
    return(
    <View style={Styles.container}>
        <Text>
            Hello, Im Bill
        </Text>
    </View>
    )
}
const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Viewtext;