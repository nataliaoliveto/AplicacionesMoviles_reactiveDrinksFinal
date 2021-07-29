import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DrinkCard from '../global/drinkCard';

export default function DrinkFavorites ( { drink } ) {

    if(drink){
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Your favorite drinks{"\n"}</Text>

                    {drink.drinks.map((eachDrink, i) => (
                        <DrinkCard key={i} drink={eachDrink}/>
                    ))}
                    
                </View>
            </View>
        );
    }else{
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>No favorites yet{"\n"}Go back and give some ❤</Text>
                </View>
            </View>
        );
    }
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
    }
})