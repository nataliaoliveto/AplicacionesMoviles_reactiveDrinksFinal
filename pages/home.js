import React from 'react';
import { StyleSheet, View, TextInput, Text, Alert } from 'react-native';
import CustomButton from '../global/customButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RecomendedCard from '../global/recomendedCard';

export default function Home () {

    const [input, setInput] = React.useState('');
    
    function handleInputChange(value){
        setInput(value);
    }

    function handleSearchClick(){
        console.log("search")
        console.log(input)
    }

    function handleSurpriseClick(){
        console.log("surprise")
    }

    function handleEmptySearch(){
        Alert.alert('Empty search :(', 'You should type something related to a drink! Try with the first letter you remember',[
            {text: 'Try again', onPress: () => console.log('alert closed')},
            {text: 'Search all drinks', onPress:() => handleSearchClick}
        ]);
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>

                <TextInput 
                style={styles.input}
                placeholder="type and find your favorite drink"
                onChangeText={handleInputChange}
                />
                <CustomButton text = "Find your drink" onPress={input.length > 0 ? handleSearchClick : handleEmptySearch} />
                
                <RecomendedCard handleSurpriseClick={handleSurpriseClick} />

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