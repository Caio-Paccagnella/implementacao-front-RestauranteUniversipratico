import { Image, Text, View,  } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function Header(){
    return (
        <View className='flex-row px-4 justify-between bg-verde items-center h-24'>
            <View>
                <AntDesign name="menu" size={24} color="white" />    
            </View>
            <View className='flex-row items-center gap-4'>
                <Image source={require("../assets/rubonitoverde.png")}
                style={{ width: 75, height: 75}}
                />
                <Text className='w-36 text-lg font-KS-Bold text-white'>
                    Restaurante UniversiPrático
                </Text>
            </View>
            <View></View>
        </View>
    );
}