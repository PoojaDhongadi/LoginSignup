import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import COLORS from '../Utils/color';

export default function CustomButton({func,text}) {
    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={func}>
                <Text style={styles.btnText}>{text} &#10140;</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: COLORS.yellow,
        width: 200,
        padding: 10,
        margin: 10,
        borderRadius: 20,
        alignSelf: 'flex-end',
    },
    btnText: {
        fontSize: 25,
        textAlign: 'center',
        color: COLORS.black,
        textTransform: 'uppercase',
        letterSpacing: 3
    },
});