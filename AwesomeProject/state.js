import React,{Component} from 'react'
import {Text,View,TouchableOpacity} from 'react-native';
import Blink from './Blink';
export default class BlinkApp extends Component{
    constructor(props){
        super(props);
        this.state = {showText:"qqqq"};
    }
    testESSix(){
        let a = 10;
        var b = 1;
        this.setState({showText:b});

    }

    componentWillMount(){
        
    }

    render(){
        return (
            <View>
                <Blink text={this.state.showText}/>
                <Blink text="Yes blinking is so great"/>
                <Blink text="Why did they ever take this out of HTML"/>
                <Blink text="Look at me look at me look at me"/>
                <Blink text="This is great"/>
                <TouchableOpacity onPress={this.testESSix.bind(this)}>
                    <Text>ES6Test</Text>
                </TouchableOpacity>
            </View>
        );
    }
}