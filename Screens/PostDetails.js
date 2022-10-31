import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Pressable,
   
  Button
} from 'react-native';
import axios from 'axios';
import Modal from 'react-native-modal';

const PostDetails = ({route}) => {
  const [postComments, setPostComments] = useState([]);
  const [modalVisible,setModalVisible]=useState(false);
  const [num,setNum]=useState([])
  const mainObject = route.params.ID;
 

  const URL = 'https://jsonplaceholder.typicode.com/posts';
  useEffect(() => {
    axios
      .get(`${URL}/${mainObject.id}/comments`)
      .then(response => setPostComments(response.data));
  }, []);

  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity onPress={()=>{setModalVisible(true),setNum(item)}} >
        <Text style={styles.nameIcon}>{item.name[0]} </Text>
        <Text style={styles.nameList}>{item.name.split(" ")[0]}</Text>
        
        </TouchableOpacity>
        <Text style={styles.comments}>{item.body}</Text>
      
       <View>
        
       </View>
        
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#FFFFB0', flex: 1}}>
      <View style={styles.Container}>
        <Text style={styles.title}>{mainObject.title}</Text>
        <Text style={styles.body}>{mainObject.body}</Text>
        <View>
          <Text style={styles.details}>Comments</Text>
 
        </View>

        <FlatList data={postComments} renderItem={renderItem} />
        <Modal
         visible={modalVisible}
        animationType="slide"
       

        >
          <View style={styles.modal}>
          <View>
            <Text style={styles.details}>Details</Text>
            <Text>Name :{' '+num.name}{'\n'}</Text>
            <Text>Email : {' '+num.email} </Text>
            {/* <Button onPress={()=>setModalVisible(false)} title='Hii' /> */}
            <TouchableOpacity onPress={()=>{setModalVisible(false)}}>
              <Text style={styles.modalButton}>Close</Text>
            </TouchableOpacity>
          </View>
          </View>
         
      </Modal>
      </View>
      
    </View>
    
  );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    margin: 15,
   marginBottom:10,
    marginBottom:1,
    elevation: 10,
    shadowColor: 'black',
    borderRadius: 10,
    height:570
    
  },
  title: {
    color: 'green',
    margin: 8,
    fontSize: 16,
  },
  body: {
    margin: 6,
    color: 'black',
  },
  nameIcon: {
    backgroundColor: 'red',
    width: 40,
    margin: 4,
    height: 40,
    textAlign: 'center',
    paddingTop: 10,
    borderRadius: 20,
    color: 'white',
    
  },
  comments: {
    margin: 10,
  },
  modalButton:{
    backgroundColor:'green',
    alignSelf:'center',
    padding:5,
    borderRadius:5,
    marginTop:20
   
 },
  modal:{
    backgroundColor: 'white',
    height:190,
    elevation:20,
    shadowColor:'blue',
    borderRadius:10,
    padding:10



     
  },
 
  details:{
    textAlign:'center',
    padding:5,
    color:"black"
    
  },
  nameList:{
    marginTop:-33,
    marginLeft:50,
    color:"green"
  }
  
});

export default PostDetails;
