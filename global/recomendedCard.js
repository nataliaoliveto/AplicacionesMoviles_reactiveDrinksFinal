import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomButton from '../global/customButton';

export default function RecomendedCard ( { drinkData, status, handleDetailsClick, handleSurpriseClick } ) {

    if(drinkData && status === "success"){
        return(
            <View style={styles.suggestion}>
                <Text style={styles.suggestionTitle}>↓ r e c o m m e n d e d ↓</Text>
                <Text style={styles.suggestionDrink}>{drinkData.drinks[0].strDrink}</Text>
                <Text style={styles.suggestionText}>{drinkData.drinks[0].strAlcoholic} | {drinkData.drinks[0].strCategory}</Text>
                <CustomButton text = "(+) details" onPress={handleDetailsClick} />
            </View>
        );
    }else if(status === "loading"){
        return(
            <View style={styles.suggestion}>
                <Text style={styles.suggestionTitle}>↓ L o a d i n g ↓</Text>
                <Text style={styles.suggestionDrink}>Loading</Text>
                <Text style={styles.suggestionText}>loading</Text>
                <Text style={styles.fakeButton}>loading</Text>
            </View>
        );
    }else if(!drinkData || status === "error"){
        return(
            <View style={styles.suggestion}>
                <Text style={styles.suggestionTitle}>↓ r e c o m m e n d e d ↓</Text>
                <Text style={styles.suggestionDrink}>Try your luck</Text>
                <Text style={styles.suggestionText}>Today you are lucky!</Text>
                <CustomButton text = "surprise drink" onPress={handleSurpriseClick} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    suggestion:{
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        padding: 15,
        borderRadius: 15,
        shadowColor: "#333",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2,
        marginHorizontal: 10,
        marginVertical: 20,
        elevation: 1,
        backgroundColor: '#ffffff',
        borderLeftColor: '#f1356d',
        borderLeftWidth: 4,
        width: '85%'
    },
    suggestionTitle:{
        fontFamily: 'Quicksand_400Regular',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        color: 'grey',
        padding: 5,
    },
    suggestionDrink:{
        fontFamily: 'Quicksand_400Regular',
        fontSize: 18,
        textAlign: 'center',
        color: '#f1356d',
        marginBottom: 8,
        fontWeight: '600',
    },
    suggestionText:{
        fontFamily: 'Quicksand_400Regular',
        textAlign: 'center',
        color: 'grey',
        paddingBottom: 15,
    },
    fakeButton:{
        backgroundColor: '#f1356d',
        borderWidth: 0,
        borderRadius: 10,
        marginBottom: 10,
        padding: 8,
        color: '#fff',
        fontSize: 13,
        textAlign: 'center',
        fontWeight: 'bold',  
        fontFamily: 'Quicksand_400Regular'
    }
})