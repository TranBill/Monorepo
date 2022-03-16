import React from "react";
import {Button} from "react-native";

interface ButtonProps{
    name?: string
}

const SharedButton: React.VFC<ButtonProps> = ({name = 'Button'}) =>{
    return(
        <Button
        title={name}
        onPress={()=>console.log('Pressed')}
        />

    )
}

export default SharedButton;