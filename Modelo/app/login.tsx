import { Image, Text, View, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import InputText from '../components/InputText';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import Botao from '../components/Botao';
import { Stack } from 'expo-router';

export default function Login(){
    const [checked, setChecked] = useState(false)
    
    
    return (
        <View className='flex items-center justify-center h-full bg-fundo gap-10'>
            
            <View className='flex-row gap-1 items-center'>
                <Image source={require("../assets/rubonito.png")} style={{ width: 120, height: 120}} />
                <Text className='font-KS text-black w-56 text-3xl'>Restaurante UniversiPrático</Text>
            </View>
            <View className='flex items-end bg-fundo rounded-xl px-4 pt-4 pb-8 gap-5' 
                style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.2, 
                    shadowRadius: 10,   
                    elevation: 3
                }}
            >
                
                
                <Feather name="info" size={24} color="black" className='cursor-pointer'/>
                
                <View className='flex gap-8'>
                    <InputText label='Email' show={false} />
                    <InputText label='Senha' show={true} />
                </View>
                
                <TouchableOpacity 
                    className='flex-row gap-2 items-center self-start pl-2'
                    onPress={() => setChecked(!checked)}
                >
                    <View className={`border-2 w-6 h-6 flex items-center justify-center ${checked ? "border-verde_escuro bg-verde" : ""}`}>
                        {checked && <AntDesign name="check" size={16} color="white" />}
                    </View>
                    <Text className='font-KS'>Lembrar credenciais</Text>
                </TouchableOpacity>
                
                <View className='w-full'>
                    <Botao mensagem='Confirmar' />
                </View>
                
                <Text className='font-KS'>
                    Não tem relação com a universidade? <Text className='font-KS underline text-verde_escuro'>Clique aqui!</Text>
                </Text>
            </View>
        </View>
    );
}