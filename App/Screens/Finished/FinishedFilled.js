import { View, Text, Image } from 'react-native'
import React from 'react'
import colors from '../../assets/colors/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'


const FinishedFilled = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: colors.primary, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 15, paddingTop: 15}}>
        <View style={{width: '50%'}}>
            <Text style={{color: colors.light, fontWeight: '700', fontSize:23}}>Amazing Journey!</Text>
            <Text style={{color: colors.light, fontWeight: '300', fontSize: 16}}>You have successfully finished 5 notes</Text>
        </View>
        <Image
            source={require('../../assets/encrypted.png')} // Provide the path to your image file
            style={{width: 140, height: 140}}
        /> 
      </View>

      <View style={{flex: 4, backgroundColor: colors.primaryBackground}}>
        <Text>hii</Text>
      </View>

      
     
    </View>
  )
}

export default FinishedFilled