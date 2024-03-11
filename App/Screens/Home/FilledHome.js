import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './FilledHomeStyles'
import colors from '../../assets/colors/colors'
import NoteView from './NoteView'

const FilledHome = () => {
    const pinnedNotes = [
        {
            title: '💡 New Product Idea Design',
            desc : "Create a mobile app UI Kit that provide a basic notes functionality but with some improvement." +
            "There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.",
            category : 'Interesting Idea',
           
        },
        {
            title: '💡 New Product Idea Design',
            desc : "Create a mobile app UI Kit that provide a basic notes functionality but with some improvement." +
            "There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.",
            category : 'Interesting Idea'
        },
        {
            title: '💡 New Product Idea Design',
            desc : "Create a mobile app UI Kit that provide a basic notes functionality but with some improvement." +
            "There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.",
            category : 'Interesting Idea'
        }
    ]
    const notes = [
        {
            title: '💡 New Product Idea Design',
            desc : "Create a mobile app UI Kit that provide a basic notes functionality but with some improvement." +
            "There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.",
            category : 'Interesting Idea',
            pinned: true
        },
        {
            title: '💡 New Product Idea Design',
            desc : "Create a mobile app UI Kit that provide a basic notes functionality but with some improvement. " +
            "There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.",
            category : 'Interesting Idea'
        },
        {
            title: '💡 New Product Idea Design',
            desc : "Create a mobile app UI Kit that provide a basic notes functionality but with some improvement. " +
            "There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.",
            category : 'Interesting Idea'
        }
    ]
  return (
    <View style={styles.body}>
      <View style={styles.noteList}>
        <FlatList 
        data={notes} 
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>(
        <View style={styles.noteSec}>
            <View style={styles.noteHead}>
                <Text style={{fontSize: 15, fontWeight: '700'}}> {item.pinned? 'Pinned Notes' : item.category} </Text>
                <Text style={{fontSize: 15, fontWeight: '500',  textDecorationLine: 'underline', color: colors.primary }}> View All</Text>
            </View>
            <FlatList 
            data={pinnedNotes} 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
               <NoteView title={item.title} desc={item.desc} category={item.category} pinned={item.pinned}/>
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