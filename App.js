import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import DrawerNavigator from './navigator/drawerNavigator.js'

export default function App() {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular
  });

  //hardcoded const as JSON to test pages before API fetch
  const drinkTestGroup = {"drinks":[{
    "strDrink":"Strawberry Margarita",
    "strAlcoholic":"Alcoholic",
    "strCategory":"Ordinary Drink",
    "strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tqyrpw1439905311.jpg",
    "strInstructions":"Rub rim of cocktail glass with lemon juice and dip rim in salt. Shake schnapps, tequila, triple sec, lemon juice, and strawberries with ice, strain into the salt-rimmed glass, and serve."
  },{
      "strDrink":"Blue Margarita",
      "strAlcoholic":"Alcoholic",
      "strCategory":"Ordinary Drink",
      "strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/bry4qh1582751040.jpg",
      "strInstructions":"Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve."
  }]};

  //hardcoded const as JSON to test pages before API fetch
  const drinkTest = {"drinks":[{
    "strDrink":"Strawberry Margarita",
    "strAlcoholic":"Alcoholic",
    "strCategory":"Ordinary Drink",
    "strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tqyrpw1439905311.jpg",
    "strInstructions":"Rub rim of cocktail glass with lemon juice and dip rim in salt. Shake schnapps, tequila, triple sec, lemon juice, and strawberries with ice, strain into the salt-rimmed glass, and serve."
  }]};

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <DrawerNavigator />
    );
  }
}