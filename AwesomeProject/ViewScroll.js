import React,{Component} from 'react';
import {ScrollView, Image, Text, View,StyleSheet} from 'react-native';
export default class ViewScroll extends Component{

    render(){
        return(
            <ScrollView>
                <Text style={styles.fontSize}>Scroll me plz</Text>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Text style={styles.fontSize}>If you like</Text>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Text style={styles.fontSize}>Scrolling down</Text>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Text style={styles.fontSize}>What's the best</Text>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Text style={styles.fontSize}>Framework around?</Text>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Image source = {require('./shuimu.jpg')}></Image>
                <Text style={styles.fontSize}>React Native</Text>
            </ScrollView>
        );
    }
}
const styles=StyleSheet.create({
    fontSizeAndColor:{
        fontSize:55,
    },
})
