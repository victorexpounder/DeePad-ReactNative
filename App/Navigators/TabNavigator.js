import { View, Text } from 'react-native'
import React from 'react'
import Home from '../Screens/Home/Home'
import CreateNote from '../Screens/CreateNote/CreateNote'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar';
import Finished from '../Screens/Finished/Finished';
import Search from '../Screens/Search/Search';
import SettingsPage from '../Screens/SettingsPage/SettingsPage';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
        screenOptions={{headerShown: false}}
        tabBar={props => (
            <CustomTabBar {...props} />
          )}
    >
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="Finished" component={Finished}  />
      <Tab.Screen name="CreateNote" component={CreateNote}/>
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Settings" component={SettingsPage} />

      
    </Tab.Navigator>
  )
}

export default TabNavigator