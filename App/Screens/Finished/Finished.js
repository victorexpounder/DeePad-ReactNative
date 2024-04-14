import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../Home/HomeStyles'
import FinishedEmpty from './FinishedEmpty'
import FinishedFilled from './FinishedFilled'
import { StatusBar } from 'expo-status-bar'
import colors from '../../assets/colors/colors'

const Finished = () => {
  const {container, bodyView, tabView, bodyContent, image, textCon, headText, subText} = styles
  const empty = true
  return (
    <View style={{flex: 1}}>
      {empty?
        <FinishedEmpty/>
        :
        <FinishedFilled/>
      }
     
    </View>
  )
}

export default Finished