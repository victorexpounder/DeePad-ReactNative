import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";


const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: colors.primaryBackground,
       
    },
    noteList : {
        gap: 50,
        overflow: 'auto'
    },
    noteSec:{
        gap: 20
    },
    noteHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 25,
        paddingHorizontal: 15
    }
})

export default styles