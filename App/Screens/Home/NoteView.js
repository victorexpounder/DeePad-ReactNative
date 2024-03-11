import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../assets/colors/colors'

const NoteView = ({title, desc, category, pinned}) => {
  return (
    <View style={{width: 230, marginLeft: 15, }}>
      <View style={{backgroundColor: colors.dimPrimary, padding: 15, borderTopEndRadius: 20, borderTopStartRadius: 20, gap: 10}}>
        <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'left'}}> {title} </Text>
        <Text style={{fontSize: 15, fontWeight: '400', textAlign: 'left', color: colors.darkGray}}> {desc} </Text>
      </View>
      {!pinned &&
        <View style={{backgroundColor: colors.primary, padding: 10, borderBottomEndRadius: 20, borderBottomStartRadius: 20}}>
            <Text style={{color: colors.light, fontSize: 15, }}> {category} </Text>
        </View>

        

      }
    </View>
  )
}

export default NoteView