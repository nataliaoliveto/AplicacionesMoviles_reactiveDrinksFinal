import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DrinkCard from '../global/drinkCard';

export default function DrinkSurprise ( { drink } ) {

    return(
        <View style={styles.container}>
            <View style={styles.content}>

                <Text style={styles.title}>Your luck and fate have chosen{"\n"}
                    <Text style={styles.titleKeyWord}>{drink.drinks[0].strDrink.toUpperCase()}</Text>
                </Text>

                <DrinkCard drink={drink.drinks[0]}/>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row"
    },
    content:{
        padding: 35,
        flex: 1,
    },
    title:{
        backgroundColor: 'white',
        fontFamily: 'Quicksand_400Regular',
        fontSize: 15,
        color: 'grey',
        padding: 5,
        paddingBottom: 0,
        textAlign: 'center',
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
        alignSelf: 'center',
    },
    titleKeyWord:{
        fontWeight: 'bold',
    }
})