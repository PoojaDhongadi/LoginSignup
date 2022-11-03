import { View, Text, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import React from 'react';
import Box from '../Components/Box';
import Input from '../Components/Input';
import {
  isValidEmail,
  isAllFieldsFill,
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
  setError,
  setUserMails,
  setUserPasswords
} from '../Redux/actions';


const Signup = ({ navigation }) => {

  const { email, password, fullName, confirmPassword, error, mailArr, passwordArr } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();


  const isValidForm = () => {
    const userInfo = {
      email: email,
      password: password,
      fullName: fullName,
      confirmPassword: confirmPassword
    }
    if (!isAllFieldsFill(userInfo)) {
      dispatch(setError('Required all fields!'));
      setTimeout(() => {
        dispatch(setError(''));
      }, 3000);
      return false;
    }

    if (!fullName.trim()) {
      dispatch(setError('Please input name!'));
      setTimeout(() => {
        dispatch(setError(''));
      }, 3000);
      return false;
    }

    if (!isValidEmail(email)) {
      dispatch(setError('Invalid email!'));
      setTimeout(() => {
        dispatch(setError(''));
      }, 3000);
      return false;
    }

    if (!password.trim() || password.length < 5) {
      dispatch(setError('Password is less than 5 characters!'));
      setTimeout(() => {
        dispatch(setError(''));
      }, 3000);
      return false;
    }

    if (!isContainsUppercase(password)) {
      dispatch(setError('Password must have at least one Uppercase Character.'));
      setTimeout(() => {
        dispatch(setError(''));
      }, 3000);
      return false;
    }

    if (!isContainsLowercase(password)) {
      dispatch(setError('Password must have at least one Lowercase Character.'));
      setTimeout(() => {
        dispatch(setError(''));
      }, 3000);
      return false;
    }

    if (!isContainsNumber(password)) {
      dispatch(setError('Password must contain at least one Digit.'));
      setTimeout(() => {
        dispatch(setError(''));
      }, 3000);
      return false;
    }

    if (!isContainsSymbol(password)) {
      dispatch(setError('Password must contain at least one Special Symbol.'));
      setTimeout(() => {
        dispatch(setError(''));
      }, 3000);
      return false;
    }

    if (password !== confirmPassword) {
      dispatch(setError('Password does not match!'));
      setTimeout(() => {
        dispatch(setError(''));
      }, 3000);
      return false;
    }

    return true;
  }

  const submitForm = () => {
    Keyboard.dismiss();
    if (isValidForm()) {
      navigation.navigate("BottomTabNav", {
        screen: "Home",
        params: {
          paramKey: fullName
        },
      });
      dispatch(setUserMails(email));
      dispatch(setUserPasswords(password));
      // console.log(mailArr);
      // console.log(passwordArr);
      dispatch(setFullName(''));
      dispatch(setEmail(''));
      dispatch(setPassword(''));
      dispatch(setConfirmPassword(''));
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

      {error ? (
        <Text style={{ color: COLORS.red, textAlign: 'center', fontSize: 18 }}>{error}</Text>
      ) : null}
      <View style={styles.formContainer}>
        <Input
          value={fullName}
          onChangeText={(value) => dispatch(setFullName(value))}
          iconName="account-outline"
          placeholder="Enter your full name"
        />

        <Input
          value={email}
          onChangeText={(value) => dispatch(setEmail(value))}
          iconName="email-outline"
          placeholder="Enter your email address"
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <Input
          value={password}
          onChangeText={(value) => dispatch(setPassword(value))}
          iconName="lock-outline"
          placeholder="Enter your password"
          autoCapitalize='none'
          password
        />

        <Input
          value={confirmPassword}
          onChangeText={(value) => dispatch(setConfirmPassword(value))}
          iconName="lock-outline"
          placeholder="Enter your password again"
          autoCapitalize='none'
          password
        />
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
  }
});

export default Signup;