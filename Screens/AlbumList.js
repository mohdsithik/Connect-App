import React,{useState,useEffect} from "react";
import { View,Text,FlatList,StyleSheet,Pressable } from "react-native";
import axios from "axios";
import TopBar from "./TopBar";
import { FlashList } from "@shopify/flash-list";
 const AlbumList=({navigation})=>{
    const [albumData,setAlbumData]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then((responce)=>setAlbumData(responce.data))
    },[])

    const renderItem=({item})=>{
        return(
              <Pressable onPress={()=>navigation.navigate("AlbumDetails",{UserID : item.id})}>
               <View style={styles.albumData}>
                <Text style={styles.list}>Album {'\n'}{item.id}</Text>
               </View>
               </Pressable>
        )
    }

    return(
        <View style={styles.container}>
            <TopBar value={'AlbumList'}   onPress={() => navigation.goBack("Landing")}/>
            
            <FlashList data={albumData} renderItem={renderItem} numColumns={2} estimatedItemSize={200}/>
            
        </View>
    )
 }
const styles=StyleSheet.create({
    albumData:{
        backgroundColor:'white',
        padding:58,
        margin:15,
        borderRadius:10,
        elevation:10
    },
    container:{
        backgroundColor: '#FFFFB0', 
        flex: 1,
        
    },
    list:{
        textAlign:'center',
        color:"black",
        
    }
})
 export default AlbumList;