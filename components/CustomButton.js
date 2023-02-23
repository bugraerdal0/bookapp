import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';

const CustomButton = ({ onPress, title, type }) => {

    return (
        <View>
            <Pressable style={[styles.btn, styles[`btn_${type}`]]} onPress={onPress} >
                <Text style={[styles.text, styles[`text_${type}`]]}>{title}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderWidth: 0,
        backgroundColor: '#3a5FF8',
        paddingHorizontal: 108,
        paddingVertical: 8,
        borderRadius: 5,
        elevation: 1,
        opacity: 0.9,
        marginVertical: 6
        ,
    },
    text: {
        fontFamily: 'PlayfairDisplay_700Bold',
        color: '#E9F8F9',
        fontSize: 16,
        textAlign: 'center',
    },
    btn_one: {
        backgroundColor: '#E9F8F9',
    },
    text_one: {
        color: '#3a5FF8'
    }
}

)

export default CustomButton;