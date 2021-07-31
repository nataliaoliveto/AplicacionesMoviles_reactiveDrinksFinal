import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header( { navigation , title } ){

    const openMenu = () => {
        navigation.openDrawer()
    }

    return(
        <View style={styles.header}>
            <MaterialCommunityIcons name="menu" style={styles.icon} size={30} onPress={openMenu} />
                <View style={styles.title}>
                    <Image source={require('../assets/icon.png')} style={styles.image}/>
                    <Text style={styles.text}>{title}</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontWeight: 'bold',
        fontFamily: 'Quicksand_400Regular',
        color: '#444',
        fontSize: 20,
        letterSpacing: 1
    },
    icon:{
        position: 'absolute',
        left: 16,
        color: '#f1356d',
        textAlign: 'center'
    },
    image:{
        width: 24,
        height: 24,
        marginHorizontal: 10
    },
    title:{
        flexDirection: 'row'
    }
})