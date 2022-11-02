
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import Signup from './src/Screens/Signup';
import ForgotPassword from './src/Screens/ForgotPassword';
import BottomTabNav from './src/Screens/BottomTabNav';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        <Stack.Screen name='BottomTabNav' component={BottomTabNav}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;