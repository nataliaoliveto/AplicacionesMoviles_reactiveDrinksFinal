import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export default function About () {

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}><FontAwesome5 name="school" style={styles.icon} size={15} /> School Term <Text style={styles.textContent}>Da Vinci ACN4A 2021</Text></Text>
                <Text style={styles.title}><AntDesign name="book" style={styles.icon} size={17} /> Subject <Text style={styles.textContent}>Aplicaciones móviles</Text></Text>
                <Text style={styles.title}><MaterialCommunityIcons name="teach" style={styles.icon} size={17} /> Professor <Text style={styles.textContent}>Giancarlo Brusca</Text></Text>
                <Text style={styles.title}><MaterialCommunityIcons name="school-outline" style={styles.icon} size={17} /> Developer <Text style={styles.textContent}>Natalia Oliveto</Text></Text>
                <Text style={styles.title}><AntDesign name="mobile1" style={styles.icon} size={17} /> Final exam <Text style={styles.textContent}>Reactive Drinks App</Text></Text>
                <Text style={styles.thanks}><AntDesign name="heart" style={styles.icon} size={17} /> Thank you</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    content:{
        padding: 35,
        flex: 1,
    },
    title:{
        backgroundColor: 'white',
        fontFamily: 'Quicksand_400Regular',
        fontSize: 15,
        color: '#f1356d',
        padding: 20,
        textAlign: 'left',
    },
    textContent:{
        color: 'grey',
    },
    thanks:{
        fontFamily: 'Quicksand_400Regular',
        fontSize: 20,
        color: '#f1356d',
        padding: 50,
        textAlign: 'center',
        alignSelf: 'center'
    },
    icon:{
        color: '#f1356d',
        margin: 10
    },
})