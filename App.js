import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import Home from './pages/home';

export default function App() {
  let [fontsLoaded] = useFonts({
    //Quicksand_300Light,
    Quicksand_400Regular,
    //Quicksand_500Medium,
    //Quicksand_600SemiBold,
    //Quicksand_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      
      <View style={styles.container}>
        <Home />
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
