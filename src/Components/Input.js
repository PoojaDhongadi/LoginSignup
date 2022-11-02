import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../Utils/color';
const Input = ({
  iconName,
  password,
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  
  return (
    <View style={{marginBottom: 20}}>
      <View style={style.inputContainer}>
        <Icon
          name={iconName}
          style={{color: COLORS.black, fontSize: 28, marginRight: 10}}
        />
        <TextInput
          autoCorrect={false}
          secureTextEntry={hidePassword}
          style={{color: COLORS.black, flex: 1, fontSize: 18}}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
            style={{color: COLORS.black, fontSize: 25}}
          />
        )}
      </View>
      
    </View>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    height: 60,
    backgroundColor: COLORS.lightWhite,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 3,
    borderRadius: 20,
    placeholderTextColor: COLORS.black,
    marginHorizontal: 14,
    borderColor: COLORS.lightGrey,
    alignItems: 'center',
  },
});

export default Input;