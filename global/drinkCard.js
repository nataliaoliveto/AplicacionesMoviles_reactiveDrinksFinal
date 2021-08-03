import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import CustomButtonLike from '../global/customButtonLike';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DrinkCard ( { drink, onFavoriteUpdated } ) {

    const [isFavorite, setIsFavorite] = React.useState(false);

    const handleSetFavorite = async () => { 
        if(!isFavorite){
            await AsyncStorage.setItem(drink.idDrink, JSON.stringify(drink));
            setIsFavorite(true);
        } else {
            await AsyncStorage.removeItem(drink.idDrink);
            setIsFavorite(false);
        }
        if(onFavoriteUpdated != null){
            onFavoriteUpdated();
        }
    };

    const checkFavorite = async () => {
        const favorite = await AsyncStorage.getItem(drink.idDrink);
        const favoriteJSON = JSON.parse(favorite);
        setIsFavorite(favoriteJSON !== null);
    }

    React.useEffect(() => {
        checkFavorite()
    }, []);

    return(
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{drink.strDrink}</Text>
            <Text style={styles.cardDetails}>{drink.strAlcoholic} | {drink.strCategory}</Text>
            <CustomButtonLike text = {<AntDesign name={isFavorite ? "heart" : "hearto"} style={styles.cardIcon} size={18} />} onPress={ handleSetFavorite } />
            <Image
                style={styles.cardImage}
                source={{ uri: drink.strDrinkThumb}}
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
        shadowColor: '#333',
        shadowOpacity: 0.15,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 1,
        backgroundColor: '#ffffff',
        width: '95%',
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
        color: 'white',
        alignSelf: 'center',
    },
    cardImage: {
        width: 180,
        height: 250,
        margin: 'auto',
        borderRadius: 10,
        marginBottom: 5,
        alignSelf: 'center'
    },
    cardRecipe:{
        textAlign: 'justify',
        fontFamily: 'Quicksand_400Regular',
        fontSize: 14,
        color: 'grey'
    }
})
