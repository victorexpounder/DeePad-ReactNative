import { Button, FlatList, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './LandingStyles'
import colors from '../../assets/colors/colors';
import Swiper from 'react-native-swiper';
export default function Landing({navigation}) {
  
  return (
    <SafeAreaView style={styles.container} >
      <Swiper
        
        activeDotColor={colors.secondary}
        dotColor={colors.light}
        autoplay={true}
        autoplayTimeout={7}
        
      >
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/girl.png')} // Provide the path to your image file
              style={styles.image}
            />

            <Text style={styles.text}> Jot Down anything you want to achieve, today or in the future </Text>
        </View>

        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/encrypted.png')} // Provide the path to your image file
              style={styles.image}
            />

            <Text style={styles.text}> Keep your Information and Jottings safe using passwords and encryptions </Text>
        </View>

        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/list.png')} // Provide the path to your image file
              style={styles.image}
            />

            <Text style={styles.text}> Create lists like a boss, perform tasks efficiently and achieve goals  </Text>
        </View>

        

      </Swiper>
      
      

        
      <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Dashboard')} delayPressIn={false} underlayColor={colors.baseGray}>
        <View style={styles.textCon}>
          <Text style={styles.bText}>Let's Get Started</Text>
          <Icon name="arrow-right" size={18} color={colors.primary} style={styles.icon}/>
        </View>
      </TouchableHighlight>
      
      <StatusBar translucent/>
      
    </SafeAreaView>
  )
}
