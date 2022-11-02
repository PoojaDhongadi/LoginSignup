import { View, StyleSheet } from 'react-native';
import React from 'react';
import COLORS from '../Utils/color';
export default function Box() {
    return (
        <View style={styles.box}>
            {/* box */}
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: 200,
        height: 100,
        backgroundColor: COLORS.yellow,
        alignSelf: 'flex-end',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        elevation: 20
    }
});