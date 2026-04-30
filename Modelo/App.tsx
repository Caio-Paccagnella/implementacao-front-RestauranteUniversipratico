import "./global.css" 
import { NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator} from '@react-navigation/native-stack'

import Header from './app/Header'
import Login from './app/login'

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="login" component={Login} options={ {header: () => <Header/>}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
