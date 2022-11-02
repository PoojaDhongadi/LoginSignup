import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import COLORS from '../Utils/color';

const Home = ({route,navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Welcome {route.params.paramKey}!</Text>
      <TouchableOpacity 
      onPress={()=>{
        navigation.navigate('Login');
      }}>
        <Text style={[styles.text,styles.logoutText]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      backgroundColor: COLORS.orange,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',   
  },
  logoutText: {
    padding:10,
    borderRadius:15,
    backgroundColor: COLORS.red,
    marginTop:10
  },
  text: {
    fontSize: 25,
    color: COLORS.white,
    fontWeight: 'bold',
    letterSpacing: 1,
    fontStyle: 'italic'
  }
});

export default Home;