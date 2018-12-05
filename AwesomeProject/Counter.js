import React,{Component} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import SubCounter from "./SubCounter";

export default class Counter extends Component{

    static defaultProps={
        //1、加载默认属性
        name:'sls',
        age:23
    };

    constructor(){
        super();
        //2、加载默认状态
        this.state = {number:0}
    }

    componentWillMount(){
        console.log('3、父组件挂载之前');
    }

    componentDidMount(){
        console.log('5、父组件挂载完毕');
    }

    shouldComponentUpdate(newProps,newState){
        console.log('6、父组件是需要更新');
        if(newState.number<15) return true;
        return false;
    }

    componentWillUpdate(){
        console.log('7、父组件将要更新');
    }

    componentDidUpdate(){
        console.log('8、父组件更新完成')
    }

    handleClick = () =>{
        this.setState({
           number:this.state.number + 1
        });
    }

    render(){
            console.log('4、render(父组件挂载)');
            return(
                <View>
                    <Text>父组件{this.state.number}</Text>
                    <TouchableOpacity onPress={this.handleClick}>
                        <Text>测试按钮</Text>
                    </TouchableOpacity>
                    {this.state.number<10?<SubCounter number = {this.state.number}/>:null}
                </View>
            )
        }
}