import React,{Component} from 'react'
import {Text,TextInput,View} from 'react-native';

export default class flexbox extends Component{
    render(){
        return(
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'stretch'}}>
                <View style={{width:50,height:50,backgroundColor:'powderblue'}}></View>
                <View style={{width:100,height:100,backgroundColor:'skyblue'}}/>
                <View style={{width:150,height:150,backgroundColor:'steelblue'}}/>
            </View>
        );
    }
}