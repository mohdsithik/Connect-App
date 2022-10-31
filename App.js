import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './Screens/Landing';
import PostList from './Screens/PostList';
import PostDetails from './Screens/PostDetails';
import AlbumList from './Screens/AlbumList';
import AlbumDetails from './Screens/AlbumDetails';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:"#FFFFB0"}}}>
         <Stack.Screen name='Home' component={Landing} /> 
         <Stack.Screen name='PostList' component={PostList}/>
         <Stack.Screen name='PostDetails' component={PostDetails} options={{headerShown: true}}/>
         <Stack.Screen name='AlbumList' component={AlbumList} />
         <Stack.Screen name='AlbumDetails' component={AlbumDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;