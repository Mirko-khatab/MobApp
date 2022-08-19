import React, { FunctionComponent } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'
import { colors } from '../components/color'
import Greating from '../components/Header/Greating'
import Profile from '../components/Header/Profile'

import Avi from '../assets/avi/avatar.png'
const Stack = createNativeStackNavigator()

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
        initialRouteName="Home"
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default RootStack
