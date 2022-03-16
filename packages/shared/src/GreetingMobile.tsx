import React from 'react';
import {View, Text} from 'react-native';
interface GreetingProps {
    whom?: string
    from?: string
    textcolor?: string
}

const GreetingMobile: React.VFC<GreetingProps> = ({ whom = 'World', from = 'Bill', textcolor ='gray' }) => {
    return(
        <View>
            <Text style={{color:textcolor}}>
            Hello {whom} from {from}
            </Text>
        </View>
    )
}

export default GreetingMobile;