import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../Utils/color';

 function SocialIcons({text}) {
  return (
    <View style={{ flex: 1 }}>
        <Text style={styles.text}>
          --------- or {text} with ---------
        </Text>
        <View style={styles.socialLoginView}>
          <TouchableOpacity>
            <Icon name="facebook" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="twitter" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="github" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    text:{
        textAlign: 'center', 
        fontSize: 22, 
        color: COLORS.black,
        marginTop: 20
    },
    socialLoginView:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    },
    icon:{
        fontSize: 40, 
        color: COLORS.black,
    }
});

export default SocialIcons;