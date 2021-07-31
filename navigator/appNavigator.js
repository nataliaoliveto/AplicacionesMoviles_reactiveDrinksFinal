import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/home";
import DrinkResults from "../pages/drinkResults";
import DrinkSurprise from "../pages/drinkSurprise";
import { StyleSheet } from 'react-native';
import Header from '../global/header';

const Stack = createStackNavigator()

export default function AppNavigator({ navigation }) {

    return (
        <Stack.Navigator>
            <Stack.Screen 
            name='Home'
            component={Home}
            options={{ 
                headerTitle: () => <Header navigation={navigation} title='Reactive Drinks'/>,
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
        height: 80,
    },
    title:{
        fontWeight: 'bold',
        fontFamily: 'Quicksand_400Regular',
        color: '#444',
    }
})