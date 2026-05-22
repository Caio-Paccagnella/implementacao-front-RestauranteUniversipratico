import { View } from 'react-native';
import CardFichas from 'components/CardFichas';
import BotaoAcao from 'components/BotaoAcao';
import BottomNav from 'components/BottomNav';

export default function Fichas() {
    return (
        <View className='h-full bg-fundo'>
            
            {/* Área Central (Container do Cartão) */}
            <View className='flex-1 px-4 py-8 items-center justify-center'>
                
                {/* Cartão de Fundo Claro */}
                <View className='bg-[#F7F7F7] w-full rounded-3xl p-6 border border-gray-200'
                    style={{
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.1,
                        shadowRadius: 10,
                        elevation: 3
                    }}>
                    
                    {/* Componente das Quantidades */}
                    <CardFichas qtdCafe={0} qtdAlmoco={2} />

                    {/* Botões de Usar Ficha */}
                    <View className='flex-row gap-4 mb-4'>
                        <BotaoAcao 
                            titulo="Usar Ficha de Café da Manhã" 
                            disabled={true} 
                        />
                        <BotaoAcao 
                            titulo="Usar Ficha de Almoço e Jantar" 
                            disabled={false} 
                        />
                    </View>

                    {/* Botão de Comprar */}
                    <BotaoAcao 
                        titulo="Comprar Fichas" 
                        icone="plus" 
                        disabled={false} 
                        fullWidth={true} 
                    />

                </View>
            </View>

            {/* Menu Inferior */}
            <BottomNav />
        </View>
    );
}