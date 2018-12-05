import React, { Component } from 'react';
import {StyleSheet, View, Image, TouchableHighlight,Icon, TextInput,Button,Text } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  
  renderHeader(text) { 
    return (
        <View style = {styles.headerStyle}>
           <Image
            style={{width: 20, height: 20}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
          <Text style={styles.container}>{'已有账号，去登陆'}</Text>
        </View>
    );
  }

  imageAndTitle() { 
    return (
      <View style = {styles.imageAndTitleStyle}>
         <Image
          style={{width: 50, height: 60}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <View>
            <Text style={styles.topTitleStyles}>{'国通信托'}</Text>
            <Text style={styles.bottomTitleStyles}>{'GUOTONGTRUST'}</Text>
        </View>
      </View>
    );
  }

  phoneAndEmail(text) { 
    return (
        <View style = {styles.phoneAndEmailStyle}>
          <View style = {styles.phoneStyles}>
              <Image
                style={styles.phoneIconStyles}
                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
              />
              <TextInput style={styles.bottomTitleStyles} placeholder = {'请输入手机号'}></TextInput>
          </View>
          <View style = {styles.phoneStyles}>
              <Image
                style = {styles.phoneIconStyles}
                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
              />
              <TextInput style={styles.bottomTitleStyles} placeholder = {'请输入登录密码'}></TextInput>
          </View>
        </View>
    );
  }

  explain() { 
    return (
      <Text style={styles.explainStyle}>{'6-16位字符，包含数字/字母/字符至少两种组合，不能有中文字符'}</Text>
    );
  }
  
  verificationCode(text) { 
    return (
      <View height = {130}>
        <View style = {styles.phoneStyles}>
            <Image
              style={styles.phoneIconStyles}
              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            />
            <TextInput style={styles.bottomTitleStyles} placeholder = {'请输入图形验证码'}></TextInput>
            <Button style={styles.buttonStyle} title = {'3PNC'} color = {'red'} onPress = {this.clickButtonEvent}/>
        </View>
        <View style = {styles.phoneStyles}>
            <Image
              style = {styles.phoneIconStyles}
              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            />
            <TextInput style={styles.bottomTitleStyles} placeholder = {'请输入短信验证码'}></TextInput>
            <Button style={styles.buttonStyle} title = {'获取验证码'} color = {'red'} onPress = {this.clickButtonEvent}/>
        </View>
      </View>
  );
  }

  protocol() { 
    return (
      <View style = {styles.protocolStyle}>
         <Image
          style={{width: 16, height: 16}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <Text style={styles.agreenTextStyles}>{' 我已经阅读并同意'}</Text>
        <Text style={styles.protocolTextStyles}>{'《用户服务协议》'}</Text>
      </View>
    );
  }
  clickButtonEvent(){
    console.log('点击了button')
    alert('点击了button')
  }
  registBtn() { 
    return ( 
        <View> 
            <TouchableHighlight style={styles.buttonStyle} 
                                underlayColor={'red'} 
                                onPress={this.clickButtonEvent}> 
                  <Text style={styles.btnText}>注册</Text> 
            </TouchableHighlight> 
          </View> 
      );
  }

  touchBtn() { 

  }


  render() {
      return (
        <View style = {styles.homeStyle}>
          {this.renderHeader()}
          {this.imageAndTitle()}
          {this.phoneAndEmail()}
          {this.explain()}
          {this.verificationCode()}
          {this.protocol()}
          {this.registBtn()}
        </View>
    );
  }
}
const styles = StyleSheet.create({
  homeStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    marginTop:2,
    height: 72,
  },
  container: {
    fontSize: 18,
    flex: 0,
    color: '#666666',
  },
  imageAndTitleStyle: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 31,
    height: 91,
  },
  topTitleStyles: {
    fontSize: 28,
    marginTop: 5,
    marginLeft: 5,
  },
  bottomTitleStyles: {
    fontSize: 15,
    marginLeft: 5,
  },
  phoneAndEmailStyle: {
    flexDirection: 'column',
    marginTop: 36,
    height: 130,
  },
  phoneIconStyles: {
    width: 20,
    height: 20,
  },
  phoneStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    marginLeft: 25,
  },
  explainStyle: {
    height: 50,
    fontSize: 12,
    padding: 9,
    color: '#666666',
    backgroundColor: '#f2f2f2',
  },
  protocolStyle: {
    flexDirection: 'row',
    marginLeft: 25,
    justifyContent: 'flex-start',
    height: 72,
  },
  agreenTextStyles: {
    fontSize: 16,
    color: '#666666',
  },
  protocolTextStyles: {
    fontSize: 16,
    color: '#e50011',
  },
  buttonStyle:{ 
    marginLeft:50, 
    marginRight:50, 
    height:50, 
    backgroundColor:'red', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    color: 'white',
  },
});