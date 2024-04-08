import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FlatList, ScrollView } from 'react-native-web'

const Kt = () => {
    const dulieu=[
        {
        id:1,
        img: require("../image/1.jpg"),
        gia:1000000
    },
    {
        id:2,
        img:require ("../image/2.jpg"),
        gia:1000000
    },
    {
        id:3,
        img:require ("../image/3.jpg"),
        gia:1000000
    },
    {
        id:4,
        img:require ("../image/4.jpg"),
        gia:1000000
    },
    {
        id:5,
        img:require ("../image/4.jpg"),
        gia:1000000
    },
    {
        id:6,
        img:require ("../image/4.jpg"),
        gia:1000000
    },
    {
        id:7,
        img:require ("../image/4.jpg"),
        gia:1000000
    },
    {
        id:8,
        img:require ("../image/4.jpg"),
        gia:1000000
    },
    {
        id:9,
        img:require ("../image/4.jpg"),
        gia:1000000
    },
    {
        id:10,
        img:require ("../image/4.jpg"),
        gia:1000000
    },

]
const renderItem = ({item}) => {
    return (
      <View style={{backgroundColor:"#FEF889", margin:1}}>
        <Image style={{ width: 100, height: 100, borderRadius:10,margin: 20}} source={item.img}></Image> 
        <Text style={{margin: 20}}> Giá:{item.gia}</Text> {'\n'}{'\n'}{'\n'}
      </View>
    )
  }
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
   <View>
      
        <View>
            <View style={{ backgroundColor: "#FF0000", width: "100%",height:30}}>
                <Text>status</Text>
            </View>
        </View>
        <View style={{alignItems:"center"}}>
            <View style={{ backgroundColor:"blue",width: 200,height:30,alignItems:"center",marginTop:5}}>
                <Text>Banner</Text>
            </View>
        </View>
        <View>
            <Text>Sản phẩm hot:</Text>
            
            <FlatList data={(dulieu)} renderItem={renderItem} numColumns={2}
            >
            </FlatList>
            
        
        </View>
    </View>
    </ScrollView>
  )
}

export default Kt

const styles = StyleSheet.create({
status:{
    backgroundColor: "red"
}
})
// {'\n'}