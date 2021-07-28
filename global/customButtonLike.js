import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function CustomButtonLike({ text, onPress }) {
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
        border: 0,
        borderRadius: 30,
        width: 30,
        height: 30,
        margin: 5,
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        color: '#fff',
        paddingTop: 4,
        fontWeight: 'bold',  
        fontFamily: 'Quicksand_400Regular'
    }
})