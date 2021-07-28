import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import Home from './pages/home';
import DrinksCard from './pages/drinksCard';

export default function App() {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <DrinksCard />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  text: {
    fontFamily: 'Quicksand_400Regular',
    fontSize: 50
  }
});
