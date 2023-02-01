import React from "react";
import TopBar from "./TopBar";
import { View,Text,StyleSheet,TouchableOpacity,Image} from "react-native";
 const Landing=({navigation})=>{
    return(
       
        <View style={{backgroundColor:"#FFFFB0",flex:1}}>
            <TopBar value={'Landing'}  />

        <View style={styles.topContainer}>
            <View>
                <Image style={styles.animationImage} source={require('/home/divum/Sithik/Connect-App/Asserts/connect.gif')}/>
            </View>
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
        // flex:1,
        alignSelf:'center',
        width:300,
        margin:100,
        borderRadius:20,
        marginTop:170,
        elevation: 20,
        shadowColor: '#171717',
     },
     Button:{
        backgroundColor:'#BFF1A3',
        alignSelf:'center',
        padding:10,
        borderRadius:8,
        marginTop:20,
        width:150,
        elevation: 20,
        shadowColor: '#171717',
     },
     buttonContainer:{
        //  backgroundColor:'red'
        marginTop:-80
     },
     text:{
        textAlign:'center'
     },
     animationImage:{
        width:'70%',
        height:'70%',
        alignSelf:'center',
     }
 })

 export default Landing;