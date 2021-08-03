import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigator from './appNavigator';
import FavsNavigator from './favsNavigator';
import AboutNavigator from './aboutNavigator';

import { DrawerContent } from './drawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent { ...props }/>}>
                <Drawer.Screen name="Home" component={AppNavigator} />
                <Drawer.Screen name="Favorites" component={FavsNavigator} />
                <Drawer.Screen name="About" component={AboutNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}