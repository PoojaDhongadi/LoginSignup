import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, ToastAndroid } from 'react-native'
import React, { useState } from 'react';
import { isValidEmail, showError } from '../Utils/methods';
import COLORS from '../Utils/color';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const isValidForm = () => {

        if (!email.trim())
            return showError('Please input email!', setError);

        if (!isValidEmail(email))
            return showError('Invalid email!', setError);

        return true;
    }

    const submitForm = () => {
        Keyboard.dismiss();
        if (isValidForm()) {
            ToastAndroid.show('Email has been sent',ToastAndroid.SHORT);
            setEmail('');
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
                onChangeText={(email) => setEmail(email)} />
            </View>
            
            <TouchableOpacity onPress={submitForm}>
                <View style={styles.button}>
                    <Text style={styles.buttonTxt}>SEND</Text>
                </View>
            </TouchableOpacity>

            {error ? (
                <Text style={styles.errorMsg}>{error}</Text>
            ) : null}

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
        textAlign:'center',
        marginVertical: 15,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.black
    },
    textinput: {
        borderBottomColor: COLORS.black,
        borderBottomWidth: 2,
        fontSize: 18,
        paddingVertical: 10,
        marginVertical: 30,
    },
    button : {
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
        fontSize: 20, 
        marginTop: 15
    }
});

export default ForgotPassword;