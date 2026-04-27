import { Image, Text, View } from 'react-native';
import "./global.css"


export default function App() {
  return (
    <View className='pt-16 flex flex-row w-full justify-between items-center px-16 bg-green-500'>
      <Image
      source = {require('./assets/rubonito.png')}
      className='w-20 h-20'
      />
      <Text className='text-4xl text-blue-800'>
        Algo a mais
      </Text>
    </View>
  );
}
