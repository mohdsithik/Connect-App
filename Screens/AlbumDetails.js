import axios from 'axios';
import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';
import Pinchable from 'react-native-pinchable';
import { FlashList } from '@shopify/flash-list';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
const AlbumDetails = ({ route, navigation }) => {
  const ID = route.params.UserID;
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${ID}/photos`)
      .then(responce => setDataSource(responce.data));
  }, []);


  const renderItem = ({ item }) => {
    const URL = item.url;
    console.log(URL);
    return (
      <View style={styles.imageContainer}>
        <Pinchable>
          <Image
            source={{ uri: URL }}

            style={styles.Image}
          />
        </Pinchable>

      </View>
    );
  };
  return (
    <View style={styles.Container}>
      <TopBar value={'PostDetails'} onPress={() => navigation.popToTop()} />

      <FlashList data={dataSource} renderItem={renderItem} estimatedItemSize={200} />

    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFFFB0',
    flex: 1,
  },
  Image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 5
  },
  imageContainer: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 20
  }
});

export default AlbumDetails;
