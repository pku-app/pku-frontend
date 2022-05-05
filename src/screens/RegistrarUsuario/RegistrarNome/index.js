import React, { useState } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//REDUX
import { useDispatch, useSelector } from 'react-redux';

//STYLE
import {LAppContainer, LAppInput,
    LAppText, LAppSocialButtonFacebook, LAppViewInput} from '../style';



export default function RegistrarNome({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleConfirm, setmodalVisibleConfirm] = useState(false);
    const [Nome, SetNome] = useState(null);

    const dispatch = useDispatch();
	function SalvarNome() {
		//dispatch(signInRequest(Nome))
	}

    return (
        <LAppContainer>
            <View style={{ margin: 50, }}>
                <LAppText style={{ textAlign: 'center', }}>
                    Preciso de algumas informações suas para continuar, qual é o seu
                    <LAppText style={{ textAlign: 'center', fontWeight: 'bold' }}>
                        {' '} nome
                    </LAppText>
                    ?
                </LAppText>
            </View>

            {/*IMAGEM */}

            <View style={{ marginHorizontal: 20 }}>
                <LAppViewInput>
                    <LAppInput onChangeText={(req)=>{SetNome(req)}}/>
                </LAppViewInput>
            </View>

            <View style={{ marginLeft: 20, marginRight: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <LAppSocialButtonFacebook onPress={() => navigation.goBack(null)} style={{ flexDirection: 'row', backgroundColor: '#11134A' }}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                    <LAppText style={{ color: '#FFFFFF', }}>
                        VOLTAR
                    </LAppText>
                </LAppSocialButtonFacebook>
                <LAppSocialButtonFacebook style={{ backgroundColor: '#A9DA6B' }} onPress={() => navigation.navigate('RegistrarTelefone')}>
                    <LAppText style={{ color: '#FFFFFF', }} onPress={()=>SalvarNome()}>
                        CONTINUAR...
                    </LAppText>
                </LAppSocialButtonFacebook>
            </View>
        </LAppContainer>
    )
}