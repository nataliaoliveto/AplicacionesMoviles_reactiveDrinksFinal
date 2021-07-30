import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DrinkCard from '../global/drinkCard';

export default function DrinkFavorites () {

    const drink = {"drinks":[{
        "strDrink":"Strawberry Margarita",
        "strAlcoholic":"Alcoholic",
        "strCategory":"Ordinary Drink",
        "strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tqyrpw1439905311.jpg",
        "strInstructions":"Rub rim of cocktail glass with lemon juice and dip rim in salt. Shake schnapps, tequila, triple sec, lemon juice, and strawberries with ice, strain into the salt-rimmed glass, and serve."
    }]};

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
        color: 'grey',
        padding: 5,
        paddingBottom: 0,
        textAlign: 'center',
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
        alignSelf: 'center',
    }
})