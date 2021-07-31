import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function CustomButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f1356d',
        borderWidth: 0,
        borderRadius: 10,
        marginBottom: 10,
        padding: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 13,
        textAlign: 'center',
        fontWeight: 'bold',  
        fontFamily: 'Quicksand_400Regular'
    }
})