import { Image, Text, View, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import InputText from '../components/InputText';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import Botao from '../components/Botao';
import { Stack } from 'expo-router';

export default function Login() {
  const [checked, setChecked] = useState(false);

  return (
    <View className="flex h-full items-center justify-center gap-10 bg-fundo">
      <View className="flex-row items-center gap-1">
        <Image source={require('../assets/rubonito.png')} style={{ width: 120, height: 120 }} />
        <Text className="w-56 font-KS text-3xl text-black">Restaurante UniversiPrático</Text>
      </View>
      <View
        className="flex items-end gap-5 rounded-xl bg-fundo px-4 pb-8 pt-4"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
          elevation: 3,
        }}>
        <Feather name="info" size={24} color="black" className="cursor-pointer" />

        <View className="flex gap-8">
          <InputText label="Email" show={false} />
          <InputText label="Senha" show={true} />
        </View>

        <TouchableOpacity
          className="flex-row items-center gap-2 self-start pl-2"
          onPress={() => setChecked(!checked)}>
          <View
            className={`flex h-6 w-6 items-center justify-center border-2 ${checked ? 'border-verde_escuro bg-verde' : ''}`}>
            {checked && <AntDesign name="check" size={16} color="white" />}
          </View>
          <Text className="font-KS">Lembrar credenciais</Text>
        </TouchableOpacity>

        <View className="w-full">
          <Botao mensagem="Confirmar" />
        </View>

        <Text className="font-KS">
          Não tem relação com a universidade?{' '}
          <Text className="font-KS text-verde_escuro underline">Clique aqui!</Text>
        </Text>
      </View>
    </View>
  );
}
