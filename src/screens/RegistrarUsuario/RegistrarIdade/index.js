import React, { useState } from 'react';
import { View, Modal, Button, StatusBar, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

//REDUX
import { useDispatch, useSelector } from 'react-redux';

//STYLE
import { LAppContainer, LAppInput, 
  LAppText, LAppSocialButtonFacebook, LAppViewInput} from '../style';

export default function RegistrarIdade({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleConfirm, setmodalVisibleConfirm] = useState(false);
  return (
    <LAppContainer style={{backgroundColor:'#C8F5EE'}}>
        <View style={{margin:50,}}>
            <LAppText  style={{textAlign: 'center',}}>
                Para fazer os calculos e fornecer tudo certinho para voce
            </LAppText>
        </View>
        
        {/*IMAGEM */}

        <View style={{margin:50,}}>
            <LAppText  style={{textAlign: 'center',}}>
                qual sua
                <LAppText style={{textAlign: 'center', fontWeight: 'bold'}}>
                {' '}idade
                </LAppText>
            </LAppText>
        </View>

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
            <LAppSocialButtonFacebook onPress={() => navigation.navigate('RegistrarPeso')} style={{backgroundColor: '#A9DA6B'}}>
                <LAppText style={{color:'#FFFFFF',}}>
                    CONTINUAR...
                </LAppText>
            </LAppSocialButtonFacebook>
        </View>
    </LAppContainer>
)}