import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../assets/colors/colors'

const NoteView = ({title, desc, category, pinned, Pcategory, finish, finished}) => {

  const pickColor = () =>{
    if(category == 'Routine Task'){
      return colors.success
    }else if(category == 'Interesting Idea' || Pcategory == 'Pinned Notes'){
      return colors.dimPrimary
    }else if(category == 'CheckList'){
      return colors.dimSecondary
    }else{
      return colors.secondary
    }
  }

  const Rcolor = pickColor()
  const bottomRadius = Pcategory == 'Pinned Notes'? 0 : 20

  return (
    <View>
      {finish && (!finished || Pcategory == 'Pinned Notes')?
        ''
        :
        <View style={{width: 230, marginLeft: 15,}}>
          <View style={{height: 250 ,backgroundColor: Rcolor, padding: 15, borderTopEndRadius: 20, borderTopStartRadius: 20, borderBottomStartRadius:bottomRadius, borderBottomEndRadius: bottomRadius, gap: 10}}>
            <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'left'}}> {title} </Text>
            <Text style={{fontSize: 15, fontWeight: '400', textAlign: 'left', color: colors.darkGray}}> {desc} </Text>
          </View>
          {pinned && Pcategory == 'Pinned Notes' &&
            <View style={{backgroundColor: colors.primary, padding: 10, borderBottomEndRadius: 20, borderBottomStartRadius: 20}}>
                <Text style={{color: colors.light, fontSize: 15, }}> {category} </Text>
            </View>
  
          }
        </View>
      }

    </View>
  )
}

export default NoteView