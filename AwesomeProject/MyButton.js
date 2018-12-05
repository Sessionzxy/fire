import React,{Component} from 'react';
import {TouchableHighlight,Text,View,TouchableNativeFeedback} from 'react-native';
export default class MyButton extends Component{
    _onPressButton(){
        console.log('点击按钮打印的控制台信息 You tapped the button!');
    };

    _onLongPressButton(){
        console.log('长按打印的控制台信息 You tapped the button!');
    }

    render(){
        return(
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'stretch'}}>
                <TouchableNativeFeedback onPress={this._onPressButton}>
                    <Text style={{height:100,width:200}}>点击按钮</Text>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onLongPress={this._onLongPressButton}>
                    <Text style={{height:100,width:200}}>
                        长按按钮
                    </Text>
                </TouchableNativeFeedback>
            </View>
        );
    }
}