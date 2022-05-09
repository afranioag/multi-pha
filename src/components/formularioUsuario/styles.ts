import Styled from 'styled-components/native';

const Container = Styled.View`
    margin: 0px;
    padding: 0px;
    height: 518px;
    width: 300px;
    align-items: center;
    justify-content: center;
    align-self: center;
`;

export const InputContainer = Styled.View`
    height: 70px;
    width: 288px;
    margin-bottom: 16px;
`;

export const Text = Styled.Text`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20;
`;

export const TextInput = Styled.TextInput`
    background: #F3F3F3;
    border: 1px solid #D3D3D3;
    height: 45px;
    padding: 12px 16px;
    margin: 4px 0px;
    border-radius: 4px;
    align-items: center;
`;

export default Container;
