
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import Signup from './src/Screens/Signup';
import ForgotPassword from './src/Screens/ForgotPassword';
import BottomTabNav from './src/Screens/BottomTabNav';
import { Provider } from 'react-redux';
import { Store } from './src/Redux/store';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';


const Stack = createNativeStackNavigator();

let persistor = persistStore(Store);

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='BottomTabNav' component={BottomTabNav} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}


export default App;