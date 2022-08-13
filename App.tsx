import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { TailwindProvider } from 'tailwindcss-react-native'

import React from 'react'

export default function App() {
  return (
    <TailwindProvider>
      <View className="flex-1 items-center justify-center bg-red-300">
        <Text className="text-white">Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  )
}
