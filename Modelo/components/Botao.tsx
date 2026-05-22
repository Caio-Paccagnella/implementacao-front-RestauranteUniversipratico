import { Text, View } from 'react-native';

interface botaoProps{
    mensagem: string
}

export default function Botao(props: botaoProps) {
    return(
        <View>
            <View className='rounded-xl cursor-pointer bg-verde w-full py-2 border'>
                <Text className='font-KS text-white text-center text-base'>
                    {props.mensagem}
                </Text>
            </View>
        </View>
    )
}