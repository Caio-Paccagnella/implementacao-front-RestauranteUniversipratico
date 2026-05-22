import { View, Image, Text} from 'react-native';
import BottomNavPrincipal from 'components/BottomNavPrincipal';

export default function TelaPrincipal() {
  return(
    <View className="flex-1 px-4 py-6 justify-around">
      <View className="border-2 border-black-300 rounded-2xl p-4 relative">
        <View className="absolute -top-4 left-1/2 -ml-20 bg-white px-4">
          <Text className="font-bold text-black-700 text-base uppercase">Cardápio Diário</Text>
        </View>
        <View className="flex-row justify-between pt-2">
          <View className="flex-1 items-center border-r border-black-200">
            <Text className="font-bold text-black text-sm mb-1 uppercase">Tradicional</Text>
            <Text className="text-black-600 text-center text-xs">Polenta</Text>
            <Text className="text-black-600 text-center text-xs">Carne Moída</Text>
          </View>
          <View className="flex-1 items-center">
            <Text className="font-bold text-black text-sm mb-1 uppercase">Vegetariano</Text>
            <Text className="text-black-600 text-center text-xs">Lentilha com Pimentão</Text>
            <Text className="text-black-600 text-center text-xs">Abobrinha</Text>
          </View>
        </View>
      </View>
      <View className="items-center">
        <Text className="font-bold text-black-800 text-lg mb-2 uppercase">Avisos Recentes</Text>
        <View className="bg-white rounded-3xl overflow-hidden w-full border border-gray-100 shadow-sm">
          <View className="items-center"> 
            <Image 
              source={require("../assets/ru_em_foco.png")} 
              className="w-full h-40"
              resizeMode="contain"
            />
          </View>
          <View className="p-4">
            <Text className="text-black text-center text-sm font-semibold">
              Mudança no cardápio da quarta-feira, verifique a aba "Avisos" para mais informações.
            </Text>
          </View>
        </View>
      </View>
      <BottomNavPrincipal />
    </View>
  );
}

