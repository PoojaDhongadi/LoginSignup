import { View, Text, StyleSheet, TouchableOpacity, Keyboard, Alert } from 'react-native';
import React from 'react';
import Box from '../Components/Box';
import Input from '../Components/Input';
import { isValidEmail } from '../Utils/methods';
import SocialIcons from '../Components/SocialIcons';
import CustomButton from '../Components/CustomButton';
import COLORS from '../Utils/color';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword, setValidMail, setValidPassword } from '../Redux/actions';

const Login = ({ navigation }) => {

    const { email, password, mailArr, passwordArr, validMail, validPassword } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();


    const submitForm = () => {
        let flag = false;
        Keyboard.dismiss();
        if (!validMail || !validPassword ||email.length == 0 || password.length == 0) {
            Alert.alert('Error', 'Feilds Required');
        } else {
            if (mailArr.length == 0)
                Alert.alert('Error', 'Wrong cerdantials!');
            for (i = 0, j = 0; i < mailArr.length; i++, j++) {
                if (email == mailArr[i] && password == passwordArr[j]) {
                    //login
                    flag = true;
                    navigation.navigate("BottomTabNav", {
                        screen: "Home",
                        params: {
                            paramKey: email
                        },
                    });
                    dispatch(setEmail(''));
                    dispatch(setPassword(''));
                    break;
                }
            }
            if(!flag)
                Alert.alert('Error', 'Wrong cerdantials!');
        }
    }

    const textInputChange = (val, type) => {

        if (type == "Email") {
            dispatch(setEmail(val));
            if (!isValidEmail(email)) {
                dispatch(setValidMail(false));
            }
            else {
                dispatch(setValidMail(true));
            }
        }
        if (type == "Password") {
            dispatch(setPassword(val));
            if (password.length < 5) {
                dispatch(setValidPassword(false));
            }
            else {
                dispatch(setValidPassword(true));
            }
        }
    }

    return (
        <View style={styles.container}>

            <Box />

            <View style={styles.text}>
                <Text style={styles.loginText}>Login</Text>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Please sign in to continue</Text>
            </View>

            <View style={styles.formContainer}>
                <Input
                    value={email}
                    onChangeText={(val) => textInputChange(val, "Email")}
                    iconName="email-outline"
                    placeholder="Enter your email address"
                    keyboardType='email-address'
                    autoCapitalize='none'
                />
                {
                    validMail ? null : <Text style={styles.errorMsg}>Please enter a valid email</Text>
                }

                <Input
                    value={password}
                    onChangeText={(val) => textInputChange(val, "Password")}
                    iconName="lock-outline"
                    placeholder="Enter your password"
                    autoCapitalize='none'
                    password
                />
                {
                    validPassword ? null : <Text style={styles.errorMsg}>Password is less than 5 characters!</Text>
                }
            </View>

            <TouchableOpacity onPress={() => {
                navigation.navigate('ForgotPassword');
            }}>
                <Text style={[styles.text, { textAlign: 'right', color: COLORS.red, marginTop: 30 }]}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>

            <CustomButton func={submitForm} text="Login" />

            <SocialIcons text="Signin" />

            <TouchableOpacity style={styles.footer}>
                <View>
                    <Text style={styles.footerText}>Don't have an account?
                        <Text
                            style={{ color: COLORS.orange, fontWeight: 'bold' }}
                            onPress={() => {
                                navigation.navigate('Signup')
                            }}> Sign up</Text></Text>
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
    formContainer: {
        position: 'relative',
        top: 20
    },
    text: {
        color: COLORS.black,
        margin: 10,
        fontSize: 18,
    },
    loginText: {
        fontSize: 55,
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
        fontSize: 18,
    }
});

export default Login;