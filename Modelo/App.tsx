import "./global.css" 
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HistoricoScreen from './app/Historico' 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='historico'>
        <Stack.Screen 
          name="historico" 
          component={HistoricoScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
