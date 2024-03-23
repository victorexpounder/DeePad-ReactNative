import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './FilledHomeStyles'
import colors from '../../assets/colors/colors'
import NoteView from './NoteView'
import notesData from '../../notesData'

const FilledHome = () => {
    
  return (
    <View style={styles.body}>
      <View style={styles.noteList}>
        <FlatList 
        data={notesData} 
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>(
        <View style={styles.noteSec}>
            <View style={styles.noteHead}>
                <Text style={{fontSize: 15, fontWeight: '700'}}> {item.category} </Text>
                <Text style={{fontSize: 15, fontWeight: '500',  textDecorationLine: 'underline', color: colors.primary }}> View All</Text>
            </View>
            <FlatList 
            data={item.notes} 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item: {title, desc, pinned, category}}) => (
               <NoteView title={title} desc={desc} category={category} pinned={pinned} Pcategory={item.category} finish={false}/>
            )}>

            </FlatList>
        </View>

        )}>
        
        </FlatList>

        
      </View>
    </View>
  )
}

export default FilledHome