import { View, Text, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import React, { useState } from 'react';
import Box from '../Components/Box';
import Input from '../Components/Input';
import { isValidEmail, isAllFieldsFill, showError } from '../Utils/methods';
import SocialIcons from '../Components/SocialIcons';
import CustomButton from '../Components/CustomButton';
import COLORS from '../Utils/color';

const Login = ({ navigation }) => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    const { email, password } = userInfo;
    const [error, setError] = useState('');

    const handleOnChangeText = (text, fieldName) => {
        setUserInfo({ ...userInfo, [fieldName]: text });
    };

    const isValidForm = () => {
        if (!isAllFieldsFill(userInfo))
            return showError('Required all fields!', setError);

        if (!email.trim())
            return showError('Please input email!', setError);

        if (!isValidEmail(email))
            return showError('Invalid email!', setError);

        if (!password.trim() || password.length < 5)
            return showError('Password is less than 5 characters!', setError);

        return true;
    }

    const submitForm = () => {
        Keyboard.dismiss();
        if (isValidForm()) {
            //navigation.navigate('BottomTabNav', { paramKey: email });
            navigation.navigate("BottomTabNav", {
                screen: "Home",
                params: {
                    paramKey: email
                },
              });
        }
    }

    return (
        <View style={styles.container}>

            <Box />

            <View style={styles.text}>
                <Text style={styles.loginText}>Login</Text>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Please sign in to continue</Text>
            </View>

            {error ? (
                <Text style={{ color: COLORS.red, textAlign: 'center', fontSize: 18 }}>{error}</Text>
            ) : null}

            <View style={styles.formContainer}>
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
            </View>

            <TouchableOpacity onPress={() => {
                navigation.navigate('ForgotPassword');
            }}>
                <Text style={[styles.text, { textAlign: 'right', color: COLORS.red }]}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>

            <CustomButton func={submitForm} text="Login"/>

            <SocialIcons text="Signin"/>

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
    inputBoxContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 2,
        width: '90%',
        margin: 15,
        borderRadius: 20,
        paddingHorizontal: 10,
        placeholderTextColor: COLORS.black
    },
    inputBox: {
        marginHorizontal: 10,
        flex: 1,
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

export default Login;