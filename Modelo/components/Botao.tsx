import { Text, View } from 'react-native';

interface botaoProps{
    mensagem: string
}

export default function Botao(props: botaoProps) {
    return(
        <View>
            <View className='rounded-xl bg-verde w-full py-2 border cursor-pointer hover:opacity-95'>
                    <Text className='font-KS text-white text-center text-base select-none'>
                        {props.mensagem}
                    </Text>
                </View>
        </View>
    )
}