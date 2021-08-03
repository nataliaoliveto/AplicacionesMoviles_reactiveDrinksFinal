import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import DrinkCard from '../global/drinkCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function DrinkFavorites () {

    const [favorites, setFavorites] = React.useState([]);

    const bringKeysFromStorage = async () => {
        let keys = []
        try{
            keys = await AsyncStorage.getAllKeys();
            if(keys !== null){
                return keys
            }
        }catch(error){
            console.log(error)
        }
    }

    const bringDataFromStorage = async (keys) => {
        const favoriteStore = await AsyncStorage.multiGet(keys)

        let favoriteJSON = favoriteStore.map((eachFavorite) => {
            return JSON.parse(eachFavorite[1]);
        })
        return favoriteJSON;
    }

    const bringFavoritesFromStorage = async () => {
        bringKeysFromStorage()
        .then(bringDataFromStorage)
        .then(result => {
            if(JSON.stringify(favorites) != JSON.stringify(result)){
                setFavorites([...result])
            }
        })
    }

    useFocusEffect(() => {
        bringFavoritesFromStorage();
    })

    if(favorites.length > 0){
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    
                    <ScrollView>
                    {favorites.map((eachDrink) => (
                        <DrinkCard key={eachDrink.idDrink} drink={eachDrink} onFavoriteUpdated={bringFavoritesFromStorage}/>
                    ))}
                    </ScrollView>
                    
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