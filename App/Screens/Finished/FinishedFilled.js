import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import colors from '../../assets/colors/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import NoteView from '../Home/NoteView'
import notesData from '../../notesData'
import styles from '../Home/FilledHomeStyles'


const FinishedFilled = () => {
  
  

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: colors.primary, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 15, paddingTop: 20}}>
        <View style={{width: '50%'}}>
            <Text style={{color: colors.light, fontWeight: '700', fontSize:20}}>Amazing Journey!</Text>
            <Text style={{color: colors.light, fontWeight: '300', fontSize: 14}}>You have successfully finished 5 notes</Text>
        </View>
        <Image
            source={require('../../assets/encrypted.png')} // Provide the path to your image file
            style={{width: 140, height: 140}}
        /> 
      </View>

      <View style={{flex: 4, backgroundColor: colors.primaryBackground,}}>
      <FlatList 
        data={notesData} 
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>(
        <View style={{paddingTop: 20}}>
            
            <FlatList 
            data={item.notes} 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item: {title, desc, pinned, category,finished}}) => (
               <NoteView title={title} desc={desc} category={category} pinned={pinned} Pcategory={item.category} finished={finished} finish={true}/>
            )}>

            </FlatList>
        </View>

        )}>
        
        </FlatList>
      </View>

      
     
    </View>
  )
}

export default FinishedFilled