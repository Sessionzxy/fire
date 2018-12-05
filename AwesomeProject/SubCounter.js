import React,{Component} from 'react';
import {Text} from 'react-native';

export default class SubCounter extends Component{
    componentWillReceiveProps(){
        console.log('9、子组件将要接收到新的属性');
    }

    shouldComponentUpdate(newProps,newState){
        console.log("===="+JSON.stringify(newState));
        if(this.props.number<5) return true;
        return false;
    }

    componentWillUpdate(){
        console.log('11、子组件将要更新');
    }

    componentDidUpdate(){
        console.log('13、子组件更新完成');
    }

    componentWillUnmount(){
        console.log('14、子组件将要被卸载');
    }

    render(){
        console.log('12、子组件挂载中');
        return (
            <Text>子组件{this.props.number}</Text>
        )
    }

}