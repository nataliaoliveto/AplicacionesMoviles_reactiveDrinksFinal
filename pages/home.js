import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import CustomButton from '../global/customButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home ( { drink } ) {

    const [input, setInput] = React.useState('');
    
    function handleInputChange(value){
        setInput(value);
    }

    function handleSearchClick(){
        console.log("search")
        console.log(input)
    }

    function handleDetailsClick(){
        console.log("+ details")
    }

    function handleSurpriseClick(){
        console.log("surprise")
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>

                <TextInput 
                style={styles.input}
                placeholder="type and find your favorite drink"
                onChangeText={handleInputChange}
                />
                <CustomButton text = "Find your drink" onPress={handleSearchClick} />
                
                <View style={styles.suggestion}>
                    <Text style={styles.suggestionTitle}>↓ r e c o m m e n d e d ↓</Text>
                    <Text style={styles.suggestionDrink}>{drink && drink.drinks[0].strDrink}</Text>
                    <Text style={styles.suggestionText}>{drink && drink.drinks[0].strAlcoholic} | {drink && drink.drinks[0].strCategory}</Text>
                    <CustomButton text = "(+) details" onPress={handleDetailsClick} />
                </View>

                <View style={styles.surprise}>
                    <MaterialCommunityIcons name="clover" style={styles.surpriseIcon} size={25} />
                    <Text style={styles.surpriseText}>Feeling lucky?</Text>
                    <CustomButton text = "Get a surprise drink" onPress={handleSurpriseClick} />
                </View>

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
    input:{
        fontFamily: 'Quicksand_400Regular',
        borderWidth: 1,
        borderColor: '#bbb',
        padding: 8,
        borderRadius: 15,        
        fontSize: 13,
        placeholderTextColor: 'grey',
        textAlign: 'center',
        shadowColor: "#333",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        marginBottom: 20,
    },
    suggestion:{
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
        color: '#f1356d',
        marginBottom: 8,
        fontWeight: 600,
    },
    suggestionText:{
        fontFamily: 'Quicksand_400Regular',
        color: 'grey',
        paddingBottom: 15,
    },
    surprise:{
        padding: 25,
        width: '80%',
        alignSelf: 'center'
    },
    surpriseIcon:{
        color: '#f1356d',
        textAlign: 'center'
    },
    surpriseText:{
        fontFamily: 'Quicksand_400Regular',
        color: '#f1356d',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        paddingBottom: 2
    }
})