import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
export default class wangyiNews extends Component{
    header(){
        return(
            <View style={styles.flex}>
                <Text style={styles.font}>
                    <Text style={styles.font2}>网易</Text>
                    <Text style={styles.font1}>新闻</Text>
                    <Text>有态度</Text>
                </Text>
            </View>
        );
    }

    handlerClick(item){
        alert(item);
    }

    body(newsArray){
        var arr=[]
        newsArray.map((item,index) =>{
            arr.push(
                <Text
                    key ={index}
                    numberOfLines={2}
                    onPress={()=>{this.handlerClick(item)}}>{item}</Text>
            );
        })
        return(
            <View>
                <Text style={styles.font3}>今日要闻</Text>
                {arr}
            </View>
        );
    }

    render(){
        var newArray=[
            '1、黄有光谈俞敏洪:女性堕落导致国家堕落?女性很冤枉9628跟贴9628清流｜独家揭秘贾跃亭的FF股权转让给了谁？3785',
            '2、跟贴3785老兽医|俞敏洪甩锅给女人 这是中年男人的胜利？1577',
            '3、跟贴1577媒体：中国正计划宝武集团和鞍钢集团的合并重组1016',
            '4、跟贴1016扫盲贴！对比创业板 科创板的上市要求有哪些不同',
        ];
        return(
            <View style={styles.renderFlex}>
                {this.header()}
                {this.body(newArray)}
            </View>
        )
    }
}
const styles = StyleSheet.create({

    renderFlex:{
      flex:1,
      flexDirection:"column"
    },

    flex:{
        justifyContent:"center",
        alignItems:"center",
        borderBottomWidth:1,
        borderBottomColor:"red",
        margin:25,
        height:40
    },

    font:{
        fontSize:25,
        fontWeight:"bold",
        textAlign:"center"
    },

    font1:{
        color:"#FFF",
        backgroundColor:"red"
    },

    font2:{
        color:"red"
    },

    font3:{
        fontSize:25,
        fontWeight:"bold",
        color:"red"
    }
});