import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import drinkFavorites from '../pages/drinkFavorites';
import { StyleSheet } from 'react-native';
import Header from '../global/header';

const Stack = createStackNavigator()

export default function FavsNavigator ({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name='drinkFavorites'
            component={drinkFavorites}
            options={{ 
                headerTitle: () => <Header navigation={navigation} title='Favorites'/>,
                headerStyle: styles.background,
                headerTitleStyle: styles.title,
                }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#EEE',
        height: 50,
    },
    title:{
        fontWeight: 'bold',
        fontFamily: 'Quicksand_400Regular',
        color: '#444',
    }
})