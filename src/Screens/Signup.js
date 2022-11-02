import { View, Text, StyleSheet, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Box from '../Components/Box';
import Input from '../Components/Input';
import { isValidEmail, isAllFieldsFill, showError } from '../Utils/methods';
import SocialIcons from '../Components/SocialIcons';
import CustomButton from '../Components/CustomButton';
import COLORS from '../Utils/color';

const Signup = ({ navigation }) => {

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { fullName, email, password, confirmPassword } = userInfo;
  const [error, setError] = useState('');

  const handleOnChangeText = (text, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: text });
  };

  const isValidForm = () => {
    if (!isAllFieldsFill(userInfo))
      return showError('Required all fields!', setError);

    if (!fullName.trim())
      return showError('Please input name!', setError);

    if (!isValidEmail(email))
      return showError('Invalid email!', setError);

    if (!password.trim() || password.length < 5)
      return showError('Password is less than 5 characters!', setError);

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(password))
      return showError('Password must have at least one Uppercase Character.', setError);

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(password))
      return showError('Password must have at least one Lowercase Character.', setError);

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(password))
      return showError('Password must contain at least one Digit.', setError);

    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!isContainsSymbol.test(password))
      return showError('Password must contain at least one Special Symbol.', setError);

    if (password !== confirmPassword)
      return showError('Password does not match!', setError);

    return true;
  }

  const submitForm = () => {
    Keyboard.dismiss();
    if (isValidForm()) {
      //navigation.navigate('Home', { paramKey: userInfo.fullName })
      navigation.navigate("BottomTabNav", {
        screen: "Home",
        params: {
            paramKey: fullName
        },
      });
    }
  }

  //console.log(userInfo);
  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <Text
          style={styles.leftArrow}
          onPress={() => {
            navigation.navigate('Login')
          }}
        > &#10229;	</Text>
        <Box />
      </View>


      <View style={styles.text}>
        <Text style={styles.signInText}>Create Account</Text>
      </View>

      {error ? (
        <Text style={{ color: COLORS.red, textAlign: 'center', fontSize: 18 }}>{error}</Text>
      ) : null}
      <View style={styles.formContainer}>
        <Input
          value={fullName}
          onChangeText={text => handleOnChangeText(text, 'fullName')}
          iconName="account-outline"
          placeholder="Enter your full name"
        />

        <Input
          value={email}
          onChangeText={text => handleOnChangeText(text, 'email')}
          iconName="email-outline"
          placeholder="Enter your email address"
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <Input
          value={password}
          onChangeText={text => handleOnChangeText(text, 'password')}
          iconName="lock-outline"
          placeholder="Enter your password"
          autoCapitalize='none'
          password
        />

        <Input
          value={confirmPassword}
          onChangeText={text => handleOnChangeText(text, 'confirmPassword')}
          iconName="lock-outline"
          placeholder="Enter your password again"
          autoCapitalize='none'
          password
        />
      </View>

      <CustomButton func={submitForm} text="Sign up"/>

      <SocialIcons text="Signup"/>

      <TouchableOpacity style={styles.footer}>
        <View>
          <Text style={styles.footerText}>Already have an account?
            <Text
              style={{ color: COLORS.orange, fontWeight: 'bold' }}
              onPress={() => {
                navigation.navigate('Login');
              }}> Sign in</Text></Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftArrow: {
    color: COLORS.black,
    fontSize: 48,
  },
  formContainer: {
    position: 'relative',
    top: 20,
  },
  text: {
    color: COLORS.black,
    margin: 10,
    fontSize: 16,
  },
  signInText: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20
  },
  footerText: {
    color: COLORS.black,
    fontSize: 18,
  }
});

export default Signup;