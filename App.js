import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './Screens/Landing';
import PostList from './Screens/PostList';
import PostDetails from './Screens/PostDetails';
import AlbumList from './Screens/AlbumList';
import AlbumDetails from './Screens/AlbumDetails';
import TopBar from './Screens/TopBar';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:"pink"}}}>
       
         <Stack.Screen name='Home' component={Landing} options={{headerShown: false}} /> 
         <Stack.Screen name='PostList' component={PostList} options={{headerShown: false}}/>
         <Stack.Screen name='PostDetails' component={PostDetails} options={{headerShown: false}}/>
         <Stack.Screen name='AlbumList' component={AlbumList} options={{headerShown: false}}/>
         <Stack.Screen name='AlbumDetails' component={AlbumDetails} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;