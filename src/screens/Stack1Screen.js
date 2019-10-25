import React from 'react'
import {View, Text} from 'react-native'

const Stack1Screen =()=>{
    return (
        <View style={{flexDirection:'column',flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:30, color:'red'}}>
                Stack 1 
            </Text>
        </View>
    )
}

export default Stack1Screen