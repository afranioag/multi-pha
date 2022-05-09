import React from 'react';
import Container, { InputContainer, TextInput, Text } from './styles';

function FormularioUsuario() {
  return (
    <Container>

        <InputContainer>
            <Text>Nome Completo</Text>
            <TextInput
                placeholder="Digite seu nome completo" placeholderTextColor="#767676"
            />
        </InputContainer>

        <InputContainer>
            <Text>CPF/CNPJ</Text>
            <TextInput
                placeholder="Digite seu CPF ou CNPJ" placeholderTextColor="#767676"
            />
        </InputContainer>

        <InputContainer>
            <Text>Email</Text>
            <TextInput
                placeholder="Digite seu email" placeholderTextColor="#767676"
            />
        </InputContainer>

        <InputContainer>
            <Text>Telefone</Text>
            <TextInput
                placeholder="Digite seu número de telefone" placeholderTextColor="#767676"
            />
        </InputContainer>

        <InputContainer>
            <Text>Senha</Text>
            <TextInput
                placeholder="Digite sua senha" placeholderTextColor="#767676"
            />
        </InputContainer>

        <InputContainer>
            <Text>Confirmar senha</Text>
            <TextInput
                placeholder="Digite sua senha novamente" placeholderTextColor="#767676"
            />
        </InputContainer>
    </Container>
  );
}

export default FormularioUsuario;
