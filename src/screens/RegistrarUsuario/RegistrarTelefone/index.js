import React, { useState } from 'react';
import { View, Modal, Button, StatusBar, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

//REDUX
import { useDispatch, useSelector } from 'react-redux';

//STYLE
import { LAppContainer, LAppInput, 
  LAppText, LAppSocialButtonFacebook, LAppViewInput} from '../style';

  export default function RegistrarTelefone({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleConfirm, setmodalVisibleConfirm] = useState(false);
  return (
    <LAppContainer style={{backgroundColor:'#C8F5EE'}}>
        <View style={{margin:50,}}>
            {/*COLOCAR NOME NO LUGAR DE XXXX */}
            <LAppText  style={{textAlign: 'center',}}>
                Prazer XXXXX, preciso também de um numero de 
                <LAppText style={{textAlign: 'center', fontWeight: 'bold'}}>
                {' '}telefone
                </LAppText>
                ...
            </LAppText>
        </View>
        
        {/*IMAGEM */}

        <View style={{marginHorizontal:20}}>
            <LAppViewInput>
                <LAppInput/>
            </LAppViewInput>
        </View>

        <View style={{marginLeft:20, marginRight:20, flexDirection:'row', justifyContent:'space-between'}}>
            <LAppSocialButtonFacebook onPress={() => navigation.goBack(null)} style={{flexDirection:'row', backgroundColor: '#11134A'}}>
                <Ionicons name="arrow-back" size={24} color="black" />
                <LAppText style={{color:'#FFFFFF',}}>
                    VOLTAR
                </LAppText>
            </LAppSocialButtonFacebook>
            <LAppSocialButtonFacebook onPress={() => navigation.navigate('RegistrarEmail')} style={{backgroundColor: '#A9DA6B'}}>
                <LAppText style={{color:'#FFFFFF',}}>
                    CONTINUAR...
                </LAppText>
            </LAppSocialButtonFacebook>
        </View>
    </LAppContainer>
)}