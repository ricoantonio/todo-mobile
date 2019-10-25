import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView,FlatList } from 'react-native';
import { Container, Header, Content, Col, Row, Grid, Input, H1, Button } from 'native-base';

import {connect} from 'react-redux'
import {onAddTodo, onChangeTodo} from '../redux/1.actions/todoActions'
import {useDispatch, useSelector} from 'react-redux'

function Main(props) {

  const [input, setInput] = useState('')
  const [data, setData] = useState([])
  const todo = useSelector(state=>state.todo)
  const dispatch = useDispatch()

  const renderData=()=>{
    return data.map(val=>{
      return(
        <Text style={{color:'white'}}>
          {val}
        </Text>
      )
    })
  }

  return (
    <View style={{flex:1,backgroundColor:'grey',flexDirection:'column', justifyContent:'center'}}>
    {/* HEADER + INPUT */}
      <View style={{flex:1,justifyContent:'space-around', alignItems:'center'}}>
        <H1 style={{color:'white', marginTop:30}}> Welcome To my TODO App</H1>
      </View>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Input onChangeText={text=>dispatch(onChangeTodo(text))} placeholder='New Todo' style={{borderWidth:1,backgroundColor:'white', borderBottomColor:'lightgrey',marginRight:15}}/>
          <Button onPress={()=>{
            setData([...data,{
              key:Date.now().toString(),
              value:input
            }])
          }}
            light style={{padding:5}}>
            <Text>Add New</Text>
          </Button>
        </View>
      <View style={{flex:3}}>
        <Text style={{color:'white'}}>
          TODO GOES HERE!{todo.todoInput}
        </Text>
        <View style={{flex:9}}>
          {/* {renderData()} */}
          <FlatList data={data} renderItem={({item})=>
              <Row style={{flex:1, alignItems:'center',justifyContent:'center', marginTop:2, marginRight:15,marginLeft:15}}>
                <Col style={{flex:5}}><Text key={item.key} style={{color:'white'}}>{item.value}</Text></Col>
                <Col style={{flex:1}}><Button style={{padding:5, backgroundColor:'red'}} onPress={()=>{setData(data.filter(val=>val.key!=item.key))}}><Text style={{marginLeft:'auto', marginRight:'auto'}}>DEL</Text></Button></Col>
              </Row>
            }/>
        </View>
      </View>
    </View>
  );
}


export default Main