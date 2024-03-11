import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    bodyView:{
        flex: 1,
        backgroundColor: colors.primaryBackground,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25
    },
    bodyContent: {
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image : {
        width: 300,
        height: 300
    },
    textCon:{
        gap: 15,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    headText:{
        fontSize: 28,
        fontWeight: '700'
    },
    subText:{
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        color: colors.darkGray

    },
    arrow: {
        width: 150,
        height: 100
       
        
    }
    
})

export default styles