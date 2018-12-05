import React,{Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';

export default class StyleSheet2 extends Component{

    render(){
        return(

            <View style = {styles.container}>

                <View style = {[styles.innersStyle,styles.height]}>
                    <Text style={styles.font}>酒店</Text>
                </View>

                <View style = {styles.innerStyle}>

                    <View style={styles.innersStyle}>
                        <Text style={styles.font}>海外酒店</Text>
                    </View>

                    <View style={styles.innersStyle}>
                        <Text style={styles.font}>特价酒店</Text>
                    </View>
                </View>

                <View style = {styles.innerStyle}>

                    <View style={styles.innersStyle}>
                        <Text style={styles.font}>团购</Text>
                    </View>

                    <View style={styles.innersStyle}>
                        <Text style={styles.font}>民宿.客栈</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    container:{
        flexDirection:"row",
        height:150,
        justifyContent:"flex-start",
        marginTop:10,
        marginLeft:5,
        marginRight:5
    },

    innerStyle:{
        margin:(1,1,1,1),
        alignItems:"center"
    },
    //具体容器样式
    innersStyle:{
        justifyContent:"center",
        margin:(3,3,1,3),
        alignItems:"center",
        backgroundColor:"#FF607C",
        height:50,
        width:120,
        borderRadius:5
    },
    //字体样式
    font:{
        fontSize:20,
        color:"black",
        fontWeight:"bold"
    },
    height:{
        height:107
    }

});