import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

// Constante para o Cabeçalho:
const Header = () => (
  <View style={s.header}>
    <Ionicons name="menu" size={32} color="white" />
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={s.logoBox}>
        <Image source={require('../assets/logo.png')} style={{ width: '100%', height: '100%', borderRadius: 8 }} />
      </View>
      <View>
        <Text style={s.headerTitle}>Restaurante</Text>
        <Text style={s.headerTitle}>UniversiPrático</Text>
      </View>
    </View>
    <View style={{ width: 32 }} />
  </View>
);

// Mensagens Informativas:
// Avaliação Expirada ou já Respondida.
const MsgBanner = ({ msg, onClose }) => {
  if (!msg) return null;
  return (
    <Pressable style={s.msgBanner} onPress={onClose}>
      <Ionicons name="information-circle-outline" size={40} color="white" style={{ marginRight: 8 }} />
      <Text style={{ color: 'white', fontSize: 20, flex: 1}}>{msg}</Text>
      <Ionicons name="close" size={18} color="white" style={{ marginLeft: 8 }} />
    </Pressable>
  );
};

// Informações do Histórico:
const dados_historico = [
  { id: '1', titulo: 'Ficha Utilizada',  data: '20/05/2026', desc: 'File de Tilápia',      tipo: 'ficha', status: 'avaliar'  },
  { id: '2', titulo: 'Compra Realizada', data: '18/05/2026', desc: 'R$ 5,00',              tipo: 'pix'                       },
  { id: '3', titulo: 'Compra Realizada', data: '15/05/2026', desc: 'R$ 7,00',              tipo: 'card'                      },
  { id: '4', titulo: 'Ficha Utilizada',  data: '10/05/2026', desc: 'Strogonoff de Frango', tipo: 'ficha', status: 'avaliar'  },
  { id: '5', titulo: 'Ficha Utilizada',  data: '06/05/2026', desc: 'Carne Moída',          tipo: 'ficha', status: 'expirado' },
  { id: '6', titulo: 'Ficha Utilizada',  data: '03/05/2026', desc: 'Feijoada',             tipo: 'ficha', status: 'avaliado' },
];

// Desenha a Tela de Histórico, com botão para a parte de Avaliação das Refeições.
const TelaHistorico = ({ onAvaliar }) => {
  const [bannerMsg, setBannerMsg] = useState('');

  const renderizaItem = ({ item }) => (
    <View style={s.card}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialIcons name="confirmation-number" size={30} color="black" />
        <View style={{ marginLeft: 15 }}>
          <Text style={s.cardTitle}>{item.titulo}</Text>
          <Text style={s.cardSub}>{item.data}</Text>
          <Text style={s.cardDesc}>{item.desc}</Text>
        </View>
      </View>

      {item.tipo === 'pix'  && <View style={s.acaoBotao}><MaterialIcons name="pix" size={24} color="#32BCAD" /></View>}
      {item.tipo === 'card' && <View style={s.acaoBotao}><MaterialIcons name="credit-card" size={24} color="#4A90D9" /></View>}

      {item.status === 'avaliar' && (
        <Pressable style={s.acaoBotao} onPress={() => onAvaliar(item)}>
          <FontAwesome name="star" size={24} color="#D4AF37" />
          <Text style={s.acaoTexto}>Avaliar</Text>
        </Pressable>
      )}
      {item.status === 'avaliado' && (
        <Pressable style={s.acaoBotao} onPress={() => setBannerMsg('Você já enviou uma avaliação para esta refeição. Obrigado pelo seu feedback!')}>
          <FontAwesome name="star" size={24} color="#D4AF37" />
          <Text style={s.acaoTexto}>Avaliado</Text>
        </Pressable>
      )}
      {item.status === 'expirado' && (
        <Pressable style={s.acaoBotao} onPress={() => setBannerMsg('Prazo encerrado! As avaliações ficam disponíveis por até 7 dias após o uso da ficha.')}>
          <FontAwesome name="star" size={24} color="#AAAAAA" />
          <Text style={[s.acaoTexto, { color: '#AAAAAA' }]}>Expirado</Text>
        </Pressable>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <MsgBanner msg={bannerMsg} onClose={() => setBannerMsg('')} />
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 15 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Histórico</Text>
        <Ionicons name="filter" size={24} color="black" style={{ marginLeft: 8 }} />
      </View>
      <FlatList
        data={dados_historico}
        renderItem={renderizaItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
};

const Estrelas = ({ value, onChange }) => (
  <View style={{ flexDirection: 'row' }}>
    {[1, 2, 3, 4, 5].map(star => (
      <Pressable key={star} onPress={() => onChange(star)}>
        <FontAwesome
          name={star <= value ? 'star' : 'star-o'} // Lógica de preenchimento das Estrelas
          size={28}
          color={star <= value ? '#D4AF37' : '#CCCCCC'}
          style={{ marginRight: 8 }}
        />
      </Pressable>
    ))}
  </View>
);

const perguntas_avaliacao = [
  'Como você avalia sua satisfação geral com a refeição de hoje?',
  'Como você avalia o sabor e a qualidade dos alimentos servidos?',
  'Como você avalia a disponibilidade dos itens do cardápio?',
  'Como você avalia o equilíbrio e a variedade do cardápio oferecido?',
  'Como você avalia a organização e agilidade no atendimento?',
  'Como você avalia o ambiente e a limpeza do restaurante?',
  'Como você avalia sua experiência geral no Restaurante Universitário hoje?',
];

const TelaAvaliacao = ({ item, onVoltar }) => {
  const [notas, setNotas] = useState(Array(perguntas_avaliacao.length).fill(0));
  const [erroMsg, setErroMsg] = useState('');
  const [enviado, setEnviado] = useState(false);

  // Atualização de uma Nota:
  const setNota = (index, valor) => {
    setErroMsg('');
    setNotas(prev => {
      const copia = [...prev];
      copia[index] = valor;
      return copia;
    });
  };

  // Lógica do Botão Enviar:
  // Valida as notas e volta para a Tela de Histórico, ou exibe erro.
  const botaoEnviar = () => {

    let sem_resposta = false;
    for (let i = 0; i < notas.length; i++) {
      if (notas[i] === 0) {
        sem_resposta = true;
        break;
      }
    }

    if (sem_resposta) { 
      setErroMsg('Responda todas as perguntas antes de enviar!'); 
      return;
    }
    setEnviado(true);
    setTimeout(() => onVoltar(), 3000);
  };

  // Mensagem de Confirmação do Envio da Avaliação:
  if (enviado) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesome name="check-circle" size={70} color="#95C13E" />
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 12 }}>Avaliação enviada!</Text>
        <Text style={{ fontSize: 15, color: 'gray', marginTop: 4 }}>Obrigado pelo seu feedback.</Text>
      </View>
    );
  }

  // Desenha a Tela de Avaliação
  return (
    <ScrollView style={{ flex: 1, padding: 15 }}>
      <View style={s.cardAvaliacao}>
        <View style={s.cardAvaliacaoHeader}>
          <MaterialIcons name="confirmation-number" size={35} color="black" style={{ marginRight: 15 }} />
          <View>
            <Text style={s.cardTitle}>Ficha utilizada</Text>
            <Text style={s.cardSub}>{item.data}</Text>
            <Text style={s.cardDesc}>{item.desc}</Text>
          </View>
        </View>

        {perguntas_avaliacao.map((pergunta, index) => (
          <View key={index} style={{ marginBottom: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, marginBottom: 10 }}>{pergunta}</Text>
            <Estrelas value={notas[index]} onChange={val => setNota(index, val)} />
          </View>
        ))}

        {erroMsg ? (
          <View style={s.erroBanner}>
            <Ionicons name="warning-outline" size={18} color="#fff" style={{ marginRight: 6 }} />
            <Text style={{ color: 'white', fontSize: 13, flex: 1 }}>{erroMsg}</Text>
          </View>
        ) : null}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Pressable style={s.botaoEnviar} onPress={botaoEnviar}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Enviar</Text>
          </Pressable>
          <Pressable style={s.botaoVoltar} onPress={onVoltar}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Voltar</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ height: 120 }} />
    </ScrollView>
  );
};

// Desenha os Ícones no Final da Tela:
const TabBar = () => (
  <View style={s.tabBar}>
    <Ionicons name="alert-circle-outline" size={32} color="black" />
    <View style={{ alignItems: 'center' }}>
      <Ionicons name="time" size={32} color="black" />
      <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Histórico</Text>
    </View>
    <Ionicons name="home-outline" size={32} color="black" />
    <Ionicons name="ticket-outline" size={32} color="black" />
  </View>
);

// Função Principal:
export default function App() {
  const [tela, setTela] = useState('historico');
  const [itemSelecionado, setItemSelecionado] = useState(null);

  const irParaAvaliacao = item => { setItemSelecionado(item); setTela('avaliacao'); };
  const voltarParaHistorico = () => { setItemSelecionado(null); setTela('historico'); };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E8E8E8' }}>
      <Header />
      {tela === 'historico'
        ? <TelaHistorico onAvaliar={irParaAvaliacao} />
        : <TelaAvaliacao item={itemSelecionado} onVoltar={voltarParaHistorico} />
      }
      <TabBar />
    </SafeAreaView>
  );
}

// Estilização das partes da Tela:
const s = StyleSheet.create({

  header: {
    backgroundColor: '#95C13E',
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  logoBox: {
    width: 50, 
    height: 50,
    backgroundColor: 'black',
    borderRadius: 8,
    justifyContent: 'center',
  },

  headerTitle: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 18, 
    marginLeft: 10 
  },

  msgBanner: {
    backgroundColor: '#4A90D9',
    borderRadius: 8, 
    padding: 12,
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 12,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 10, 
    padding: 15, 
    marginBottom: 12,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    borderWidth: 1, 
    borderColor: '#95C13E',
  },

  cardTitle: { 
    fontWeight: 'bold', 
    fontSize: 16 
  },

  cardSub: { 
    color: 'gray', 
    fontSize: 14 
  },

  cardDesc: { 
    fontWeight: 'bold', 
    fontSize: 14 
  },

  acaoBotao: { 
    alignItems: 'center',
    minWidth: 60 
  },

  acaoTexto: { 
    color: '#D4AF37', 
    fontWeight: 'bold', 
    fontSize: 13, 
    marginTop: 2 
  },

  cardAvaliacao: { 
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20 
  },

  cardAvaliacaoHeader: {
    flexDirection: 'row', 
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#eee', 
    paddingBottom: 15,
  },

  erroBanner: {
    backgroundColor: '#E05050',
    borderRadius: 8, 
    padding: 10,
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 12,
  },

  botaoEnviar: { 
    backgroundColor: '#95C13E', 
    paddingVertical: 12, 
    paddingHorizontal: 40, 
    borderRadius: 10 
  },

  botaoVoltar: { 
    borderWidth: 1, 
    borderColor: 'black', 
    paddingVertical: 12, 
    paddingHorizontal: 40, 
    borderRadius: 10 
  },

  tabBar: {
    position: 'absolute',
    bottom: 0, 
    left: 0, 
    right: 0, 
    height: 80,
    backgroundColor: 'white',
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
    borderTopWidth: 1, 
    borderTopColor: '#ddd',
  },
});
