import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../Home/HomeStyles'

const FinishedEmpty = () => {
    const {container, bodyView, tabView, bodyContent, image, textCon, headText, subText} = styles
  return (
    <View style={bodyView}>
        <View style={bodyContent}>
            <Image
                source={require('../../assets/finished.png')} // Provide the path to your image file
                style={styles.image}
            /> 
            <View style={textCon}>
                <Text style={headText}>No Finished Notes Yet</Text>
                <Text style={subText}>
                Once you create a note and finish it, it will be appeared on this screen. So, let’s start your journey!
                </Text>
                <Image
                source={require('../../assets/Arrow.png')} // Provide the path to your image file
                style={styles.arrow}
            />
            </View>
        </View>
      </View>
  )
}

export default FinishedEmpty