import React from 'react'
import {View, Text} from 'react-native'
import { H1 } from 'native-base'

const ParamScreen =(props)=>{

    const [angka, setangka] = useState(null)

    // componentDidMount() {
    //     setangka()
    // }
    
    return (
        <View style={{flexDirection:'column',flex:1,justifyContent:'center',alignItems:'center'}}>
            <H1 style={{fontSize:30}}>
                Param
            </H1>
            {/* <H1 style={{fontSize:25,color:'green'}}>
                {props.navigation.getParam('nama','NO-NAMA')}
            </H1> */}
            <H1 style={{fontSize:25,color:'green'}}>
                {props.navigation.getParam('angka','NO-ANGKA')}
            </H1>
        </View>
    )
}

// const fnCurried = param => nextParam =>{

// }

export default ParamScreen