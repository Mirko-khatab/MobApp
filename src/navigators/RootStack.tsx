import React, { FunctionComponent } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'
import { colors } from '../components/color'
import Greating from '../components/Header/Greating'
import Profile from '../components/Header/Profile'
import Balance from '../screens/Balance'
import Avi from '../assets/avi/avatar.png'
import { CardProps } from '../components/Cards/types'

import { Ionicons } from '@expo/vector-icons'

export type RootStackParamList = {
  Welcome: undefined
  Home: undefined
  Balance: CardProps
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.graylight,
            boarderBottomWidth: 0,
            shadowColor: 'transparent',
            elevation: 0,
            shadowOpacity: 0,
            height: 120,
          },
          headerTintColor: colors.secondary,
          headerRight: () => (
            <Profile
              img={Avi}
              imgContainerStyles={{ backgroundColor: colors.tertiary }}
            />
          ),
        }}
        initialRouteName="Welcome"
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => (
              <Greating
                mainText="Hey Mirko!"
                subText="Welcome to your new account"
                {...props}
              />
            ),
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="Balance"
          component={Balance}
          options={({ route }) => ({
            headerTitle: route?.params?.alias,
            headerTitleAlign: 'center',
            headerBackImage: (props) => (
              <Ionicons
                {...props}
                name="chevron-back"
                size={25}
                color={colors.secondary}
              />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default RootStack
