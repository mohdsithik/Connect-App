import React,{useEffect,useState} from "react";
import { View,Text,FlatList,StyleSheet,TouchableOpacity,Pressable } from "react-native";
import axios from "axios";

const PostList=({navigation})=>{

    const [list,setlist]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>setlist(response.data))
    },[])
    

   
    const renderItem = (itemData) => {
         
        return (

            <View>
                 <Pressable onPress={()=> navigation.navigate("PostDetails",{ID : itemData.item})}>
                <View style={styles.list}>
                    <Text style={styles.title}>{itemData.item.title}</Text>
                    <Text style={styles.body}>{itemData.item.body}</Text>
                </View>
                </Pressable>
                 
            </View>
        );
    }

    return(
        <View style={{backgroundColor:"#FFFFB0",flex:1}}>
             <FlatList data={list} renderItem={renderItem} />
        </View>
    )
}
const styles=StyleSheet.create({
    list:{
        backgroundColor:"white",
        margin:18,
        elevation:10,
        shadowColor: 'black',
        borderRadius:10
    },
    title:{
        color:"green",
        margin:8,
        fontSize:16
    },
    body:{
        margin:6,
        color:'black',
    }
})
export default PostList;