import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, ToastAndroid, Alert } from 'react-native'
import React from 'react';
import { isValidEmail } from '../Utils/methods';
import COLORS from '../Utils/color';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setValidMail } from '../Redux/actions';

function ForgotPassword() {
    const { email, validMail } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const submitForm = () => {
        Keyboard.dismiss();
        if (!validMail || email.length == 0) {
            Alert.alert('Error','Email Required');
        }
        else {
            ToastAndroid.show('Email has been sent', ToastAndroid.SHORT);
            dispatch(setEmail(''));
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
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subtitle}>Enter your email address below and we will send
                you an email with instructions on how to change your password.</Text>
            <View>
                <TextInput
                    value={email}
                    placeholder='Enter your email'
                    style={styles.textinput}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={(val) => textInputChange(val, "Email")} />

                {
                    validMail ? null : <Text style={styles.errorMsg}>Please enter a valid email</Text>
                }
            </View>

            <TouchableOpacity onPress={submitForm}>
                <View style={styles.button}>
                    <Text style={styles.buttonTxt}>SEND</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 50,
        backgroundColor: COLORS.white,
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        color: COLORS.black,
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 15,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.black,
        marginBottom: 30
    },
    textinput: {
        borderBottomColor: COLORS.black,
        borderBottomWidth: 2,
        fontSize: 18,
        paddingVertical: 10,
    },
    button: {
        backgroundColor: COLORS.lightRed,
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 40,
        alignItems: 'center',
    },
    buttonTxt: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 3
    },
    errorMsg: {
        color: COLORS.red,
        textAlign: 'center',
        fontSize: 18,
    }
});

export default ForgotPassword;