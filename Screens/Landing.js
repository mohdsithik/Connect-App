import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
 const Landing=({navigation})=>{
    return(
        <View style={{backgroundColor:"#FFFFB0",flex:1}}>
        <View style={styles.topContainer}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate('PostList')}>
                    <Text style={styles.text}>Post</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate("AlbumList")} > 
                    <Text style={styles.text}>Album</Text>
                </TouchableOpacity>
            </View> 
        </View>
        </View>
    )
 }

 const styles=StyleSheet.create({
    topContainer:{
        backgroundColor:'white',
        flex:1,
        alignSelf:'center',
        width:300,
        margin:100,
        borderRadius:20,
        marginTop:40,
        elevation: 20,
        shadowColor: '#171717',
     },
     Button:{
        backgroundColor:'#BFF1A3',
        alignSelf:'center',
        padding:10,
        borderRadius:8,
        marginTop:10,
        width:150,
        elevation: 20,
        shadowColor: '#171717',
     },
     buttonContainer:{
         marginTop:190,
     },
     text:{
        textAlign:'center'
     }
      
 })

 export default Landing;