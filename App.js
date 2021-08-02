import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import DrawerNavigator from './navigator/drawerNavigator.js'

export default function App() {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <DrawerNavigator />
    );
  }
}