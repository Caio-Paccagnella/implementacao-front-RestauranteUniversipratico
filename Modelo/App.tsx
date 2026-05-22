import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from './app/Header';
import Login from './app/login';
import TelaPrincipal from './app/telaPrincipal';
import Fichas from './app/Fichas';
import HistoricoScreen from './app/Historico';

import { useFonts, KumbhSans_400Regular, KumbhSans_700Bold } from '@expo-google-fonts/kumbh-sans';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'KS-Regular': KumbhSans_400Regular,
    'KS-Bold': KumbhSans_700Bold,
  });
  if (!fontsLoaded) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="telaPrincipal">
        <Stack.Screen
          name="telaPrincipal"
          component={TelaPrincipal}
          options={{ header: () => <Header /> }}
        />
        <Stack.Screen name="login" component={Login} options={{ header: () => <Header /> }} />
        <Stack.Screen name="fichas" component={Fichas} options={{ header: () => <Header /> }} />
        <Stack.Screen name="historico" component={HistoricoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
