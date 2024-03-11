import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../Home/HomeStyles'
import FinishedEmpty from './FinishedEmpty'
import FinishedFilled from './FinishedFilled'
import { StatusBar } from 'expo-status-bar'

const Finished = () => {
  const {container, bodyView, tabView, bodyContent, image, textCon, headText, subText} = styles
  const empty = false
  return (
    <View style={{flex: 1}}>
      {empty?
        <FinishedEmpty/>
        :
        <FinishedFilled/>
      }
      <StatusBar translucent/>
    </View>
  )
}

export default Finished