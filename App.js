
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const App =() => {
   const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
     <Stack.Navigator
     initialRouteName='login'
      >
     
      <Stack.Screen name='login' component={LoginScreen}/>
      <Stack.Screen name='home' component={HomeScreen}/>
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}

export default App;
