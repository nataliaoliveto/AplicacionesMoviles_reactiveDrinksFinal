import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import DrinkCard from '../global/drinkCard';
import useFetch from '../global/useFetch';

export default function DrinkResults ( props ) {
    const drink = props.route.params.drink;

    const { drinkData, status } = useFetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)

    if(drinkData && status === "success"){
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    
                    <Text style={styles.title}>Our recommended drinks for{"\n"}
                        <Text style={styles.titleKeyWord}>{drink.toUpperCase()}</Text>
                    </Text>

                    <ScrollView>
                    {drinkData.drinks.map((eachDrink) => (
                        <DrinkCard key={eachDrink.idDrink} drink={eachDrink}/>
                    ))}
                    </ScrollView>

                </View>
            </View>
        );
    }else if(status === "loading"){
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Loading...</Text>
                </View>
            </View>
        );
    }else if(!drinkData || status === "error"){
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>We don't know that drink (yet!){"\n"}Please go back and try again!</Text>
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
    },
    titleKeyWord:{
        fontWeight: 'bold',
    }
})