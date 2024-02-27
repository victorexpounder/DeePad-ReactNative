import { StyleSheet } from "react-native";
import colors from '../../assets/colors/colors'
const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: "#6A3EA1",
      alignItems: 'center',
      paddingVertical: 90,
      paddingHorizontal: 20
    },
    image : {
      width: 300,
      height: 300
    },
    text : {
      fontSize: 20,
      color: colors.light,
      textAlign: "left",
      fontWeight: '700'
      
    },
    button:{
      backgroundColor: 'white',
      width: '100%',
      padding: 15,
      alignItems: 'center',
      borderRadius: 25,
      
    },
    textCon:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
        
        
        
       
    },
    bText :{
        
        color: colors.primary,
        fontSize: 16,
        fontWeight: '500',
        alignSelf: 'center',
    },
    icon:{
        
        
    }
  })
  export default styles