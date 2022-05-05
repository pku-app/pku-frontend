import styled from 'styled-components/native';

export const LAppContainer = styled.View`
  flex:1;
  background: #C8F5EE;
`;

export const LAppViewInput = styled.View`
  height: 50px;
  margin-bottom:20px
  background: #FFFFFF;
  border-radius: 50px;
  justifyContent:center;
`;

export const LAppInput = styled.TextInput`
  margin-horizontal:16px;
`;


export const LAppText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  display: flex;

  color: #000000;
`;

export const LAppSocialButtonFacebook = styled.TouchableOpacity`
  width: 144px;
  height: 45px;
  margin-top: 50px;

  background: #3C589E;
  border-radius: 25px;

  display: flex;
  alignItems:center;
  align-items: center;
  text-align: center;
  justifyContent:center;
  alignSelf:center;
`;