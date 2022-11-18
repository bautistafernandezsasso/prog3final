import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login'
import Home from './src/screens/Home'
import Register from './src/screens/Register'
import Profile from './src/screens/Profile'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options= {{ headerShown : false}}/> 
        <Stack.Screen name='Home' component={Home} options= {{ headerShown : false}}/>
        <Stack.Screen name='Register' component={Register} options= {{ headerShown : false}}/>
        <Stack.Screen name='Profile' component={Profile} options= {{ headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;