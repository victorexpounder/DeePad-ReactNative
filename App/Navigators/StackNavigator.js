import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../Screens/Landing/Landing';
import Home from '../Screens/Home/Home';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Landing}
          options={{
            headerShown: false,
          }}
        />
         
        
      </Stack.Navigator>
  )
}

export default StackNavigator