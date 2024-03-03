import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from './HomeStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import colors from '../../assets/colors/colors'

const Home = ({navigation}) => {
    const {container, bodyView, tabView, bodyContent, image, textCon, headText, subText} = styles
  return (
    <SafeAreaView style={container}>
      <View style={bodyView}>
        <View style={bodyContent}>
            <Image
                source={require('../../assets/home.png')} // Provide the path to your image file
                style={styles.image}
            />
            <View style={textCon}>
                <Text style={headText}>Start Your Journey</Text>
                <Text style={subText}>
                    Every big step start with small step. Note your first idea and start your journey!
                </Text>
                <Image
                source={require('../../assets/Arrow.png')} // Provide the path to your image file
                style={styles.arrow}
            />
            </View>
        </View>
      </View>

      <StatusBar
         backgroundColor={colors.primaryBackground}
         barStyle="light-content"
      />
    </SafeAreaView>
  )
}

export default Home