import React from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity,Pressable} from "react-native";
const TopBar=(props)=>{
    return(
        <View style={styles.TopBar}>
        <Text style={styles.Content}>{props.value}</Text>
        <Pressable onPress={props.onPress}>
        <Image style={styles.HomeButton} source={require('/home/divum/Sithik/Connect-App/Asserts/home.png')} />
        </Pressable>
    </View>
    );
}
const styles=StyleSheet.create({
    TopBar:{
        backgroundColor:'#FFFFB0',
        padding:17,
        flexDirection:'row',
        justifyContent:'space-between',



     },
     HomeButton:{
        width:30,
        height:30,
        
     },
     Content:{
        fontSize:18,
        color:'black'
     }
})
export default TopBar;