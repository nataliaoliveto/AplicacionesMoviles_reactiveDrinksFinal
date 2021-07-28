import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import CustomButtonLike from '../global/customButtonLike';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DrinksCard () {

    function toAvoidButtonBreakCode(){
        // TODO: This is not correct, don't forget to replace it :)
        console.log("+ details")
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                
                <Text style={styles.searchTitle}>Our recommended drinks for{"\n"}
                    <Text style={styles.searchKeyWord}>DRINKS</Text>
                </Text>

                <View style={styles.drinksCard}>
                    <Text style={styles.drinksCardTitle}>Nombre bebida</Text>
                    <Text style={styles.drinksCardDetails}> Alcoholic | Category</Text>
                    <CustomButtonLike text = {<MaterialCommunityIcons name="heart" style={styles.surpriseIcon} size={20} />} onPress={toAvoidButtonBreakCode} />
                    
                    <Image
                        style={styles.drinksCardImage}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',}}
                    />
                    <Text style={styles.drinksCardDetails}>↓ Recipe details ↓</Text>
                    <Text style={styles.drinksCardRecipe}>Brew espresso. In a coffee mug, place 1 teaspoon of unsweetened powdered cocoa, then cover a teaspoon with honey and drizzle it into the cup. Stir while the coffee brews, this is the fun part. The cocoa seems to coat the honey without mixing, so you get a dusty, sticky mass that looks as though it will never mix. Then all at once, presto! It looks like dark chocolate sauce. Pour hot espresso over the honey, stirring to dissolve. Serve with cream.</Text>
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
    },
    content:{
        padding: 20,
        paddingBottom: 5
    },
    searchTitle:{
        backgroundColor: 'white',
        fontFamily: 'Quicksand_400Regular',
        fontSize: 15,
        color: 'grey',
        padding: 5,
        paddingBottom: 0,
        textAlign: 'center',
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
        alignSelf: 'center'
    },
    searchKeyWord:{
        fontWeight: 'bold',
    },
    drinksCard:{
        marginTop: 10,
        marginBottom: 10,
        padding: 15,
        borderRadius: 15,
        shadowColor: "#333",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        width: 350,
        alignSelf: 'center'
    },
    drinksCardTitle:{
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
    drinksCardImage: {
        width: 180,
        height: 250,
        display: 'block',
        margin: 'auto',
        textAlign: 'center',
        borderRadius: 10,
        marginBottom: 5
    },
    drinksCardDetails: {
        fontFamily: 'Quicksand_400Regular',
        fontSize: 15,
        color: '#f1356d',  
        textAlign: 'center',
        margin: 'auto',
        marginBottom: 10,
    },
    drinksCardRecipe:{
        textAlign: 'justify',
        fontFamily: 'Quicksand_400Regular',
        fontSize: 14,
        color: 'grey'
    }
})