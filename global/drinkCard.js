import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import CustomButtonLike from '../global/customButtonLike';
import { AntDesign } from '@expo/vector-icons';

export default function DrinkCard ( { drink } ) {

    function toAvoidButtonBreakCode(){
        // TODO: This is not correct, don't forget to replace it :)
        console.log(drink.strDrink)
    }

    return(
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{drink.strDrink}</Text>
            <Text style={styles.cardDetails}>{drink.strAlcoholic} | {drink.strCategory}</Text>
            <CustomButtonLike text = {<AntDesign name="hearto" style={styles.cardIcon} size={18} />} onPress={toAvoidButtonBreakCode} />
            <Image
                style={styles.cardImage}
                source={drink.strDrinkThumb}
            />
            <Text style={styles.cardDetails}>↓ Recipe details ↓</Text>
            <Text style={styles.cardRecipe}>{drink.strInstructions}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        marginVertical: 10,
        padding: 15,
        borderRadius: 15,
        shadowColor: "#333",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        width: '100%',
        alignSelf: 'center'
    },
    cardTitle:{
        fontFamily: 'Quicksand_400Regular',
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center',
        color: 'white',      
        backgroundColor: '#f1356d',
        borderRadius: 10,
        padding: 5,
        width: '100%',
    },
    cardDetails: {
        fontFamily: 'Quicksand_400Regular',
        fontSize: 15,
        color: '#f1356d',  
        textAlign: 'center',
        margin: 'auto',
        marginBottom: 10,
    },
    cardIcon:{
        color: '#white',
        alignSelf: 'center',
        size: 18
    },
    cardImage: {
        width: 180,
        height: 250,
        display: 'block',
        margin: 'auto',
        textAlign: 'center',
        borderRadius: 10,
        marginBottom: 5
    },
    cardRecipe:{
        textAlign: 'justify',
        fontFamily: 'Quicksand_400Regular',
        fontSize: 14,
        color: 'grey'
    }
})
