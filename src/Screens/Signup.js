import { View, Text, StyleSheet, TouchableOpacity, Keyboard, Alert } from 'react-native';
import React from 'react';
import Box from '../Components/Box';
import Input from '../Components/Input';
import {
  isValidEmail,
  isContainsUppercase,
  isContainsLowercase,
  isContainsNumber,
  isContainsSymbol
} from '../Utils/methods';
import SocialIcons from '../Components/SocialIcons';
import CustomButton from '../Components/CustomButton';
import COLORS from '../Utils/color';
import { useDispatch, useSelector } from 'react-redux';
import {
  setConfirmPassword,
  setEmail,
  setFullName,
  setPassword,
  setUserMails,
  setUserPasswords,
  setValidMail,
  setValidPassword,
  setValidConfirmPassword
} from '../Redux/actions';


const Signup = ({ navigation }) => {

  const { email, password, fullName, confirmPassword, validMail, validPassword, validConfirmPassword } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const submitForm = () => {
    Keyboard.dismiss();
    if (!validMail || !validPassword || !validConfirmPassword || fullName.length == 0 || email.length == 0 || password.length == 0 || confirmPassword.length == 0) {
      Alert.alert('Error', 'Feilds Required');
    } else {
      // navigation.navigate("BottomTabNav", {
      //   screen: "Home",
      //   params: {
      //     paramKey: fullName
      //   },
      // });
      dispatch(setUserMails(email));
      dispatch(setUserPasswords(password));
      // console.log(mailArr);
      // console.log(passwordArr);
      dispatch(setFullName(''));
      dispatch(setEmail(''));
      dispatch(setPassword(''));
      dispatch(setConfirmPassword(''));
      Alert.alert(
          "Success",
          "Successfully Registerd",
        [
          {
            text: "Go to Login",
            onPress: () => navigation.navigate("Login"),
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
          },
        ]
      );
    }
  }

  const textInputChange = (val, type) => {

    if (type == "FullName") {
      dispatch(setFullName(val));
    }

    if (type == "Email") {
      if (!isValidEmail(email)) {
        dispatch(setEmail(val));
        dispatch(setValidMail(false));
      }
      else {
        dispatch(setEmail(val));
        dispatch(setValidMail(true));
      }
    }
    if (type == "Password") {
      dispatch(setPassword(val));
      if (password.length < 5 || !isContainsUppercase(password) || !isContainsLowercase(password) || !isContainsNumber(password) || !isContainsSymbol(password)) {
        dispatch(setValidPassword(false));
      }
      else {
        dispatch(setValidPassword(true));
      }
    }

    if (type == "ConfirmPassword") {
      //console.log(password, confirmPassword,validConfirmPassword);
      if (password !== confirmPassword) {
        dispatch(setConfirmPassword(val));
        dispatch(setValidConfirmPassword(false));
      }
      else {
        dispatch(setConfirmPassword(val));
        dispatch(setValidConfirmPassword(true));
      }
    }
  }

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

      <View style={styles.formContainer}>
        <Input
          value={fullName}
          onChangeText={(val) => textInputChange(val, "FullName")}
          iconName="account-outline"
          placeholder="Enter your full name"
        />

        <Input
          value={email}
          onChangeText={(val) => textInputChange(val, "Email")}
          iconName="email-outline"
          placeholder="Enter your email address"
          keyboardType='email-address'
          autoCapitalize='none'
        />
        {validMail ? null : <Text style={styles.errorMsg}>Please enter a valid email</Text>}

        <Input
          value={password}
          onChangeText={(val) => textInputChange(val, "Password")}
          iconName="lock-outline"
          placeholder="Enter your password"
          autoCapitalize='none'
          password
        />
        {validPassword ? null :
          <Text style={styles.errorMsg}>Minimum Password length is 5, should have atleast
            one uppercase,lowercase,number,special character.</Text>
        }

        <Input
          value={confirmPassword}
          onChangeText={(val) => textInputChange(val, "ConfirmPassword")}
          iconName="lock-outline"
          placeholder="Enter your password again"
          autoCapitalize='none'
          password
        />
        {validConfirmPassword ? null : <Text style={styles.errorMsg}>Password does not match!</Text>}
      </View>

      <CustomButton func={submitForm} text="Sign up" />

      <SocialIcons text="Signup" />

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
  },
  errorMsg: {
    color: COLORS.red,
    textAlign: 'center',
    fontSize: 15,
  }
});

export default Signup;