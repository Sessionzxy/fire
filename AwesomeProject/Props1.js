/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React,{Component} from 'react'
import {Text,View} from 'react-native';

export default class Props1 extends Component{
    render(){
        return (
            <Text>Hello {this.props.name}</Text>
        );
    }
}

class LotsOfGreetings extends Component{
    render(){
        return(
            <View style="{{alignItems:'center'}}">
                <Props1 name = 'zxy'/>
                <Props1 name = 'bz'/>
                <Props1 name = 'mt'/>
            </View>
        )
    }
}