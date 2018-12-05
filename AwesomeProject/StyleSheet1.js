import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';

export default class StyleSheet1 extends Component{
    render(){
        return(
            <View style={styles.center}>
                <View style={styles.container}>
                    <View style={styles.top}></View>
                    <View style={styles.bottom}></View>
                </View>
            </View>


        )
    }
}
const styles = StyleSheet.create({
    center:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    container:{
        margin:(5,0,0,5),
        backgroundColor:"red",
        width:300,
        height:400,
    },
    top:{
        backgroundColor:"green",
        width:280,
        height:251,
        borderWidth:3,
        margin:10,
        borderColor:"black"
    },
    bottom:{
        backgroundColor:"yellow",
        width:280,
        height:110,
        borderWidth:4,
        margin:10,
        borderColor:"green"
    }
});