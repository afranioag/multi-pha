import Styled from 'styled-components/native';

const Container = Styled.KeyboardAvoidingView`
    flex: 1;
    padding: 56px 16px 40px 16px;
    align-items; center;
`;

export const Header = Styled.View`
     align-self: center;
     height: 320px;
`;

export const TitleContainer = Styled.View`
    width: 288px;
    height: 182px;
    margin: 32px 0px 16px 0px;
    align-self: center;
`;

export const TitleH = Styled.Text`
    height: 90px;
    margin-bottom: 4px;
    color: #000000;
    font-style: normal;
    font-size: 25px;
    font-weight: 700;
    line-height: 30;
    
`;

export const TitleS = Styled.Text`
    height: 88px;
    font-family: 'Roboto';
    color: #000000;
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    line-height: 22;
`;

export const BackLogin = Styled.View`
    flex: 1;
    flex-direction: row;
    width: 288px;
    height: 26px;
    margin-bottom: 26px;
    align-self: center;
`;

export const BackLoginIcon = Styled.View`
    background: #F3F3F3;
    border-radius: 6px;
    width: 26px;
    height: 26px;
    margin-right: 8px;
`;

export const TextIconBack = Styled.Text`
    font-style: normal;
    font-size: 16px;
    font-weight: 700;
`;

export const InputContainer = Styled.View`
    height: 70px;
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

export const CheckBoxContainer = Styled.View`
flex-direction: row;
    width: 288px;
    height: 45px;
    align-self: center;
    margin-bottom: 32px;
`;

export const CheckB = Styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background-color: #E5E5E5;
`;

export const CheckBoxText = Styled.Text`
    margin-left: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20;
    color: #767676;
`;

export const TouchableOpacity = Styled.TouchableOpacity`
  height: 43px;
  width: 288px;
  background-color: #D3D3D3;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export default Container;
