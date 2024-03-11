import { Text, TouchableOpacity, View } from "react-native";
import colors from "../assets/colors/colors";
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
      <View style={{ flexDirection: 'row', height: 80, backgroundColor: colors.light, borderCenterRadius: 20, position: 'relative' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          let iconComponent;
        switch (route.name) {
          case 'Home':
            iconComponent = (
              <MaterialCommunityIcons name={isFocused ? 'home-variant' : 'home-variant-outline'} size={25} color={isFocused ? '#673ab7' : '#222'} />
              
            );
            break;
          case 'Finished':
            iconComponent = (
              <MaterialCommunityIcons name={isFocused ? 'clipboard-check' : 'clipboard-check-outline'} size={25} color={isFocused ? '#673ab7' : '#222'} />
            );
            break;
          case 'CreateNote':
            iconComponent = (
              <MaterialCommunityIcons name="plus-circle" size={70} color={ '#673ab7' }  />
            );
            break;
          case 'Search':
            iconComponent = (
              <Ionicons name={isFocused ? 'search' : 'search-outline'} size={25} color={isFocused ? '#673ab7' : '#222'} />
            );
            break;
          case 'Settings':
            iconComponent = (
              <Ionicons name={isFocused ? 'settings' : 'settings-outline'} size={25} color={isFocused ? '#673ab7' : '#222'} />
            );
            break;
          default:
            break;
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            {label == 'CreateNote'? 
                <View style={{backgroundColor: colors.primaryBackground,  borderRadius: 50, position: 'absolute', top: -50, width: 'auto' }}>
                    {iconComponent} 
                </View>
                :
                
                <View style={{alignItems: 'center'}}>
                    {iconComponent}
                    <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>{label}</Text>
                </View>
                

            }
            
          </TouchableOpacity>
        );
      })}

      </View>
    );
  };

  export default CustomTabBar;