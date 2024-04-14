import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from './HomeStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import colors from '../../assets/colors/colors'
import EmptyHome from './EmptyHome'
import FilledHome from './FilledHome'

const Home = ({navigation}) => {
    const {container, bodyView, tabView, bodyContent, image, textCon, headText, subText} = styles
    const data = false
  return (
    <SafeAreaView style={container}>
      {data?
          <FilledHome/>
          :
          <EmptyHome/>

      }

    
    </SafeAreaView>
  )
}

export default Home