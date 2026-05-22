import { Text, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface BotaoAcaoProps {
    titulo: string;
    icone?: string;
    disabled?: boolean;
    fullWidth?: boolean;
}

export default function BotaoAcao({ titulo, icone, disabled, fullWidth }: BotaoAcaoProps) {
    return (
        <TouchableOpacity
            disabled={!!disabled} 
            className={`p-4 rounded-xl items-center justify-center flex-row gap-2 ${fullWidth ? 'w-full' : 'flex-1'} ${disabled ? 'bg-gray-300' : 'bg-white'}`}
            style={!disabled ? {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2
            } : {}}
        >
            {icone && <AntDesign name={icone as any} size={18} color="black" />}
            <Text className='font-KS-Bold text-black text-center text-sm'>
                {titulo}
            </Text>
        </TouchableOpacity>
    );
}