import React, { useEffect, useCallback } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';


const CustomInput = ({ label, onChangeText, value, secureTextEntry, placeholder }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontFamily: 'PlayfairDisplay_900Black',
        textAlign: 'center',
        color: '#FAAB78',
    },
    input: {
        borderWidth: 0,
        borderColor: '',
        borderRadius: 20,
        padding: 8,
        fontSize: 16,
        width: 250,
        alignSelf: 'center',
        backgroundColor: '#F8EAD8',
        opacity: 0.95,
        color: '#B97979',
        fontFamily: 'PlayfairDisplay_600SemiBold',
        textAlign: 'center',

    },
});

export default CustomInput;
