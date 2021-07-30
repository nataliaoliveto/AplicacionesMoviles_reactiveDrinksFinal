import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigator from './appNavigator';
import FavsNavigator from './favsNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={AppNavigator} />
                <Drawer.Screen name="Favorites" component={FavsNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}