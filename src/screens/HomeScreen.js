import React, {useState}from 'react'
import {View, Text,Linking} from 'react-native'
import { Button, Form, Input } from 'native-base'

const HomeScreen =(props)=>{
    const [input, setInput] = useState(null)

    return (
        <View style={{flexDirection:'column',flex:1,justifyContent:'center',alignItems:'center'}}>
            {/* <View style={{}}>
                <Text onPress={() => Linking.openURL('http://google.com')}>Following</Text>
            </View> */}
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:30}} >
                    Home 
                </Text>
                <Button warning rounded onPress={()=>props.navigation.navigate('ParamScreen', {
                    nama:'Seto'
                })}>
                    <Text style={{marginHorizontal:10}}>Stack 1</Text>
                </Button>
                    <Input onChangeText={e=>setInput(e)} type='number'  placeholder='Number'/>
                    <Button onPress={()=>props.navigation.navigate('ParamScreen',{
                        angka:input
                    })}><Text>SUBMIT {input}</Text></Button>
                    
            </View>
        </View>
    )
}

export default HomeScreen