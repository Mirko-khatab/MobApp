import React, { FunctionComponent } from 'react'

type RootStackParamList = {
    Welcome: undefined
}

const Stack = createStackNavigator()

//React Navigation
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Welcome from '../screens/Welcome'

const RootStack: FunctionComponent = () => {
return(
    <NavigationContainer>
        <Stack.Navigator>
<Stack.Screen
 name="Welcome"
  component={Welcome} 
  options={{headerShown: false}}
  />
        </Stack.Navigator>
</NavigationContainer>
    
)

}
export default RootStack
