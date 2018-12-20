/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions} from 'react-native';
import Swipeout from 'react-native-swipeout';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
        swipeoutBtns:[
            {
                text: 'Button'
            }
        ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Swipeout right={this.state.swipeoutBtns}>
          <View style={{width:Dimensions.get("window").width}}>
            <Text>Swipe me left1</Text>
          </View>
        </Swipeout>
          <Swipeout right={this.state.swipeoutBtns}>
              <View style={{width:Dimensions.get("window").width}}>
                  <Text>Swipe me left2</Text>
              </View>
          </Swipeout>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
