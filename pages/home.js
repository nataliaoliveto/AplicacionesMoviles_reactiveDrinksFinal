import React from 'react';
import { StyleSheet, View, TextInput, Text, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import CustomButton from '../global/customButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RecomendedCard from '../global/recomendedCard';

export default function Home ( { navigation } ) {

    const [input, setInput] = React.useState('');
    const [drinkData, setDrinkData] = React.useState();
    const [status, setStatus] = React.useState("idle");

    React.useEffect(() => {
        setStatus("loading")
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then((response) => response.json()
        .then((data) => {
            if(data.drinks === null){
                setStatus("error");
            } else {
                setDrinkData(data);
                setStatus("success");
            }
        }))
        .catch(error => setStatus("error"))
    }, []);

    function handleInputChange(value){
        setInput(value);
    }

    function handleDetailsClick(){
        navigation.navigate('DrinkResults',{drink:drinkData.drinks[0].strDrink});
    }

    function handleSearchClick(){
        navigation.navigate('DrinkResults',{drink:input});
    }

    function handleSurpriseClick(){
        navigation.navigate('DrinkSurprise');
    }

    function handleEmptySearch(){
        Alert.alert('Empty search :(', 'You should type something related to a drink! Try with the first letter you remember',[
            {text: 'Try again', onPress: () => console.log('alert closed')}
        ]);
    }

    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <View style={styles.content}>

                    <TextInput 
                        style={styles.input}
                        placeholder="type and find your favorite drink"
                        onChangeText={handleInputChange}
                    />
                    <CustomButton text = "Find your drink" onPress={input.length > 0 ? handleSearchClick : handleEmptySearch} />
                    
                    <RecomendedCard
                        drinkData={drinkData}
                        status={status}
                        handleDetailsClick={handleDetailsClick}
                        handleSurpriseClick={handleSurpriseClick} />

                    <View style={styles.surprise}>
                        <MaterialCommunityIcons name="clover" style={styles.surpriseIcon} size={25} />
                        <Text style={styles.surpriseText}>Feeling lucky?</Text>
                        <CustomButton text = "Get a surprise drink" onPress={handleSurpriseClick} />
                    </View>

                </View>
            </View>
        </TouchableWithoutFeedback>
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
    input:{
        fontFamily: 'Quicksand_400Regular',
        borderWidth: 1,
        borderColor: '#bbb',
        padding: 8,
        borderRadius: 15,        
        fontSize: 13,
        color: 'grey',
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