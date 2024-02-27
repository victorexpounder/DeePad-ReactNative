import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Landing from './Screens/Landing/Landing';

import Profile from './Screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Homeee"
          component={Landing}
          options={{
            headerShown: false,
            headerStyle : {
              backgroundColor: '#fff'
            },
            headerShadowVisible: false,
            
          }}
          
        />
         

        <Stack.Screen
          name="Profile"
          component={Profile}
          
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
