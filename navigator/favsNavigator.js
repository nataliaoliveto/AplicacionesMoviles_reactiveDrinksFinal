import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import drinkFavorites from '../pages/drinkFavorites';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator()

export default function FavsNavigator () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name='drinkFavorites'
            component={drinkFavorites}
            options={{ 
                title: 'Favorites',
                headerStyle: styles.background,
                headerTitleStyle: styles.title,
                }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#EEE',
    },
    title:{
        fontWeight: 'bold',
        fontFamily: 'Quicksand_400Regular',
        color: '#444',
    }
})