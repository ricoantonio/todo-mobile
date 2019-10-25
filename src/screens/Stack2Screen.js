import React from 'react'
import {View, Text} from 'react-native'

const Stack2Screen =()=>{
    return (
        <View style={{flexDirection:'column',flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:30, color:'red'}}>
                Stack 2
            </Text>
        </View>
    )
}

export default Stack2Screen