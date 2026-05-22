import { Image, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Header() {
  return (
    <View className="h-24 flex-row items-center justify-between bg-verde px-4">
      <View>
        <AntDesign name="menu" size={24} color="white" />
      </View>
      <View className="flex-row items-center gap-4">
        <Image source={require('../assets/rubonitoverde.png')} style={{ width: 75, height: 75 }} />
        <Text className="w-36 font-KS-Bold text-lg text-white">Restaurante UniversiPrático</Text>
      </View>
      <View></View>
    </View>
  );
}
