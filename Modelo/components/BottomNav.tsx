import { Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function BottomNav() {
    return (
        <View className='flex-row justify-around items-center bg-white h-20 border-t border-gray-200 px-2 pb-2'>
            <TouchableOpacity>
                <AntDesign name="exclamation" size={32} color="black" />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <MaterialCommunityIcons name="history" size={36} color="black" />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <AntDesign name="home" size={36} color="black" />
            </TouchableOpacity>
            
            {/* Ícone Ativo (Fichas) */}
            <TouchableOpacity className='items-center'>
                <MaterialCommunityIcons name="ticket-confirmation" size={36} color="black" />
                <Text className='font-KS-Bold text-xs mt-1'>Fichas</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <MaterialCommunityIcons name="check-decagram-outline" size={36} color="black" />
            </TouchableOpacity>
        </View>
    );
}