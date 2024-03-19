// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Books from './components/Books';
import BookDetails from './components/books/BookDetails';
import BookPage from './components/books/BookPage';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={Home} options={{
          headerShown: false
        }} />
        <Stack.Screen name="books" component={Books} options={{
          headerShown: false
        }} />
        <Stack.Screen name="bookDetail" component={BookDetails} options={{ headerShown: false }} />

        <Stack.Screen name="bookPage" component={BookPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },


  gettingStartedButton:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: 300
}
});
