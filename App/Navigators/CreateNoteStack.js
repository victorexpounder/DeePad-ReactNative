import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateNote from "../Screens/CreateNote/CreateNote";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../assets/colors/colors";

const Stack = createNativeStackNavigator();

const CreateNoteStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
            headerStyle: {
            backgroundColor: '#fff', // Change the header background color
            },
            headerTitleAlign: 'center',
            
            headerTintColor: colors.primary,
            headerBackTitle: 'Back', // Set the back title
            headerBackTitleVisible: true, // Show the back title
            
            
        }}
      >
        <Stack.Screen 
            name="CreateNote" 
            component={CreateNote} 
            
        />
        {/* Other screens for the CreateNote flow */}
      </Stack.Navigator>
    );
  };

  export default CreateNoteStack