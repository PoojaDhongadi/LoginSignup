import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import COLORS from '../Utils/color';
import Ionic from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search Screen</Text>
    </View>
  );
}
function AddScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Screen</Text>
    </View>
  );
}
function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notification Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
}

export default function BottomTabNav(props) {
  const params = props.route.params;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-sharp' : 'search-outline';
          } else if (route.name === 'Add') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
          }
          size = focused ? size + 10 : size + 5;
          return <Ionic name={iconName} color={color} size={size} />
        },
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: COLORS.black,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.lightRed,
          height: 60,
          borderTopWidth: 0
        }
      })
      }>
      <Tab.Screen name='Home' component={Home} initialParams={params} />
      <Tab.Screen name='Search' component={SearchScreen} />
      <Tab.Screen name='Add' component={AddScreen} />
      <Tab.Screen name='Notification' component={NotificationScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: COLORS.orange,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing: 4,
    color: COLORS.white,
  }
});