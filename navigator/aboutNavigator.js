import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import about from '../pages/about';
import { StyleSheet } from 'react-native';
import Header from '../global/header';

const Stack = createStackNavigator()

export default function AboutNavigator ({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name='about'
            component={about}
            options={{ 
                headerTitle: () => <Header navigation={navigation} title='About'/>,
                headerStyle: styles.background,
                headerTitleStyle: styles.title,
                }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#EEE',
        height: 95,
    },
    title:{
        fontWeight: 'bold',
        fontFamily: 'Quicksand_400Regular',
        color: '#444',
    }
})