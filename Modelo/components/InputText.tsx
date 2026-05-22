import { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';


interface inputProps {
    label: string,
    show: boolean,
}

export default function InputText(props: inputProps){
    const [focado, setFocado] = useState(false) 
    const [texto, setTexto] = useState('')
    const [shown, setShown] = useState(props.show)
    const onFocus = () => {
        setFocado(true)
    }
    const onBlur = (tam: number) => {
        if (tam == 0) setFocado(false)
    }   

    return(
        <View className='flex gap-2' >
            <View className={`absolute pointer-events-none bg-fundo w-fit z-10 transition-all ease-in-out ${focado ? 'left-4 -top-2 px-2 ': 'top-4 left-4 px-0 '}`}>
                <Text className='font-KS '>{props.label}</Text>
            </View>
            <View>
                <TextInput className='focus:outline-none w-80 px-4 py-4 rounded-xl border-black border-2 font-KS' 
                onFocus={() => {onFocus()}} 
                onBlur={() => {onBlur(texto.length)}}
                value={texto}
                onChangeText={setTexto}
                secureTextEntry={shown}
                >
                </TextInput>
                {props.show && <AntDesign name={!shown ? "eye": "eye-invisible"} size={24} color="black" className='self-end absolute right-4 top-3'
                onPress={() => setShown(!shown)}
                />}
            </View>
        </View>
    )
}