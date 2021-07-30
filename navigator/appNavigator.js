import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/home";
import DrinkResults from "../pages/drinkResults";
import DrinkSurprise from "../pages/drinkSurprise";
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator()

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name='Home'
            component={Home}
            options={{ 
                title: 'Reactive Drinks',
                headerStyle: styles.background,
                headerTitleStyle: styles.title,
                }} />
            <Stack.Screen 
                name='DrinkSurprise'
                component={DrinkSurprise}
                options={{
                    title: 'Surprise Drink',
                    headerStyle: styles.background,
                    headerTitleStyle: styles.title,
                }} />
            <Stack.Screen
                name='DrinkResults'
                component={DrinkResults}
                options={{
                    title: 'Search Results',
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