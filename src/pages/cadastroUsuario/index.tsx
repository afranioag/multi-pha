import React, { useState, useEffect } from 'react';
import {
  Text, Image, Platform, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FormularioUsuario from '../../components/formularioUsuario';
import Container,
{
  TitleContainer,
  TitleH,
  TitleS,
  BackLogin,
  TouchableOpacity,
  BackLoginIcon,
  Header,
  TextIconBack,
  CheckBoxContainer,
  CheckBoxText,
  CheckB,
} from './styles';

function CadastroUsuario() {
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    console.log(isSelected);
  });

  return (

    <Container behavior={Platform.OS === "ios" ? "padding" : null}>
        <ScrollView>
          <Header>
            <Image
            source={ require('../../../assets/pactomais.png')}
            style={{ width: 150, height: 40 }}
            />

            <TitleContainer>
              <TitleH>
                Mais de 15 mil clientes utilizam as soluções da Pacto Mais
              </TitleH>
              <TitleS>Junte-se a milhares de farmácias e utilize soluções tecnológicas
                diferenciadas para o segmento farmacêutico</TitleS>
            </TitleContainer>

            <BackLogin>
              <BackLoginIcon>
                <Icon name="arrow-left-bold" size={25} color="#505050" />
              </BackLoginIcon>
              <TextIconBack>Voltar para o login</TextIconBack>
            </BackLogin>
          </Header>

          {/* Componente de cadastro do usuário */}
          <FormularioUsuario />

          <CheckBoxContainer>
            <CheckB
              onPress={() => setSelected(!isSelected)}
            >
              {isSelected ? <Icon name="check-bold" size={20} color="#505050" /> : null}
            </CheckB>
            <CheckBoxText>Eu aceito os Termos de Uso e Políticas de privacidade</CheckBoxText>
          </CheckBoxContainer>

          <TouchableOpacity>
            <Text>CADASTRAR</Text>
          </TouchableOpacity>

        </ScrollView>
     </Container>

  );
}

export default CadastroUsuario;
