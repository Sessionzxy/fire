import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,TextInput,Button,TouchableNativeFeedback,CheckBox} from 'react-native';
export default class Demo1 extends Component{

    constructor(){
        super();
        this.state={
            ischeckColor:false
        };
    }

    headerTitle(){
        return(
            <View style={styles.headerView}>
                <Image style={styles.headerImage}
                       source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                <Text style={styles.headerText}>{'已有账号，去登录'}</Text>
            </View>
            );
    }

    logo(){
        return(
            <View style={styles.logo}>
                <Image style={styles.logoImage}
                       source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                <View>
                    <Text style={styles.logoTextForC}>{'国通信托'}</Text>
                    <Text style={styles.logoTextForE}>GUOTONG TRUST</Text>
                </View>
            </View>
        );
    }

    phoneAndPs(){
        return(
            <View style={styles.phoneAndPsView}>
                <View style={styles.phoneView}>
                    <Image style={styles.phoneAndPsImage}
                           source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    <TextInput style={styles.phoneTextInput} placeholder="请输入手机号">

                    </TextInput>
                </View>
                <View style={styles.passwordView}>
                    <Image style={styles.phoneAndPsImage}
                           source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    <TextInput style={styles.phoneTextInput} placeholder="请输入登录密码">

                    </TextInput>
                </View>
            </View>
        );
    }

    prompt(){
        return(
            <View style={styles.promptView}>
                <Text>{'6-16位字符，包含数字/字母/字符至少两种组合，不能有中文字符'}</Text>
            </View>
        );
    }

    graphButton(){
        alert('点击了按钮');
    }

    graphAndMsg(title){
        return(
            <View>
                <View style={styles.phoneAndPsView}>
                    <View style={styles.phoneView}>
                        <Image style={styles.phoneAndPsImage}
                               source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                        <TextInput style={styles.phoneTextInput} placeholder="请输入图形验证码">

                        </TextInput>
                        <Button style={styles.graphButton} title = {title} color = {'red'} onPress = {()=>{this.graphButton()}}/>
                    </View>
                    <View style={styles.passwordView}>
                        <Image style={styles.phoneAndPsImage}
                               source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                        <TextInput style={styles.phoneTextInput} placeholder="请输入短信验证码"></TextInput>
                        <Button style={styles.graphButton} title = {'获取验证码'} color = {'red'} onPress = {()=>{this.graphButton()}}/>
                    </View>
                </View>
            </View>
        );
    }

    checkButton(){
        this.setState({
            ischeckColor:!this.state.ischeckColor
        });
    }

    agreement(){
        var checkColor = this.state.ischeckColor? "#999999":"#e50011";
        return(
            <View style={styles.agreementView}>
                <CheckBox style={styles.agreementCheck}  isChecked={this.state.ischeckColor} color={checkColor} onClick={()=>{this.checkButton()}}>

                </CheckBox>
                <Text style={styles.textAll}>
                    <Text>我已经阅读并同意</Text>
                    <Text style={styles.textSpecial}>{'《用户服务协议》'}</Text>
                </Text>
            </View>
        )
    }

    register(){
        return(
            <View>
                <TouchableNativeFeedback style={styles.btnStyle}
                                    onPress={()=>{this.graphButton()}}>
                    <Text style={styles.buttonText}>注     册</Text>
                </TouchableNativeFeedback>
            </View>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                {this.headerTitle()}
                <View style={{height:30}}/>
                {this.logo()}
                {this.phoneAndPs()}
                {this.prompt()}
                {this.graphAndMsg('3NPf')}
                {this.agreement()}
                {this.register()}
            </View>
        );
    }
}
const styles = StyleSheet.create({

    container:{
        flexDirection:"column",
        backgroundColor:"white",
        flex:1
    },

    headerView:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding: 25,
        marginTop:10,
        height: 72,
    },
    headerImage:{
        marginLeft:20,
        height:20,
        width:20
    },
    headerText:{
        marginRight:20,
        fontSize:18,
        color:"#999999"
    },
    logo:{
        flexDirection:"row",
        marginLeft:100,
        height:100,
        width:556
    },
    logoImage:{
        height:62,
        width:60
    },
    logoTextForC:{
        fontSize:28,
        marginLeft:5
    },
    logoTextForE:{
        fontSize:15,
        marginTop:5,
        marginLeft:5
    },
    phoneAndPsView:{
        flexDirection:"column",
        marginLeft:30,
        marginTop:10,
        marginRight:30,
        height:100
    },
    phoneAndPsImage:{
        width:42,
        height:45
    },
    phoneView:{
        flexDirection:"row",
        justifyContent:"flex-start",
        height:70,
        borderBottomWidth:1,
        borderBottomColor:"#dddddd"
    },
    phoneTextInput:{
        marginLeft:12,
        marginBottom:18,
        fontSize:20
    },
    passwordView:{
        flexDirection:"row",
        justifyContent:"flex-start",
        height:70,
        marginTop:20,
        borderBottomWidth:1,
        borderBottomColor:"#dddddd"
    },
    promptView:{
        marginTop:60,
        padding:9,
        height:55,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        fontSize:15,
        backgroundColor:"#f2f2f2",
        color:"#666666"
    },
    graphButton:{
        marginLeft:50,
        marginRight:50,
        height:50,
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    agreementView:{
        flexDirection:"row",
        marginTop:60,
        marginLeft:20
    },
    textAll:{
        marginTop:10,
        fontSize:20,
        fontWeight:"bold",
        marginLeft:20
    },
    textSpecial:{
      color:"#e50011"
    },
    agreementCheck:{
        marginTop:20,
        width:10,
        height:10
    },
    btnStyle:{
        flexDirection:"row",
        marginLeft:50,
        marginRight:50,
        height:50,
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        fontSize: 50,
        color: 'white',
    },
});
