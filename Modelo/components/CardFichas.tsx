import { Text, View } from 'react-native';

interface CardFichasProps {
    qtdCafe: number;
    qtdAlmoco: number;
}

export default function CardFichas({ qtdCafe, qtdAlmoco }: CardFichasProps) {
    return (
        <View className='bg-[#9CB33B] p-6 rounded-xl w-full mb-6'>
            <Text className='font-KS-Bold text-black text-2xl text-center mb-4'>
                Fichas Disponíveis
            </Text>
            
            <Text className='font-KS-Bold text-black text-center text-sm mb-2'>
                Café da Manhã – Quantidade: {qtdCafe}
            </Text>
            
            <Text className='font-KS-Bold text-black text-center text-sm'>
                Almoço/Jantar – Quantidade: {qtdAlmoco}
            </Text>
        </View>
    );
}