import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import  AppLoading  from 'expo-app-loading'
import React from 'react'

import RootStack from './src/navigators/RootStack'
export default function App() {
  let [fontsLoaded] = useFonts({
    'Lato-Bold': require('./src/assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('./src/assets/fonts/Lato-Regular.ttf'),
  })
  if (!fontsLoaded) {

    return(

      <AppLoading />
    ) 
  }

  return (
  
  <RootStack />
  )
}
