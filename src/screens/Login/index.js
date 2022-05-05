import React, { useState } from 'react';
import { View, Modal, Button, TouchableOpacity } from 'react-native';

//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/Login/actions';

//STYLE
import {
	LAppContainer, LAppHeader, LAppLogo, LAppInput,
	LAppLoginButton, LAppForgetPasswordButton, LAppLine1, LAppLine2,
	LAppText, LAppSocialButtonGoogle, LAppSocialButtonFacebook, LAppSign, LAppTextSign,
	LAppForgetModalContainer, LAppForgetModalView, LAppForgetModalCloseButton,
	LAppForgetModalText, LAppForgetModalOk, LAppViewInput
} from './styles';

export default function Login({ navigation }) {
	const [Email, SetEmail] = useState('')
	const [Senha, SetSenha] = useState('')

	const dispatch = useDispatch();
	function Logar() {
		dispatch(signInRequest(Email, Senha))
	}
	/*
	  const { loading, personagens } = useSelector((state) => state.login)
		
	  function  handlePassword(value) {
		setPassword(value)
	  }
	
	  function handleSignIn() {
		dispatch(signInRequest(username, password))
	  }*/

	const [modalVisible, setModalVisible] = useState(false);
	const [modalVisibleConfirm, setmodalVisibleConfirm] = useState(false);

	return (
		<LAppContainer>
			{/*MODAL requisitar email*/}
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				<TouchableOpacity opacity={0.5} style={{position:'absolute', width:'100%', height:'100%', backgroundColor:'#00000099'}} onPress={() => { setModalVisible(!modalVisible) }}/>
				<LAppForgetModalContainer>
						<LAppForgetModalView>
							<LAppForgetModalCloseButton onPress={() => { setModalVisible(!modalVisible) }}>
								<LAppForgetModalText style={{ marginTop: 2 }}>
									X
								</LAppForgetModalText>
							</LAppForgetModalCloseButton>

							<LAppForgetModalText style={{ color: "#000000" }}>
								Qual seu email?
							</LAppForgetModalText>

							<LAppViewInput>
								<LAppInput style={{ marginHorizontal: 16, }} />
							</LAppViewInput>

							<LAppForgetModalOk onPress={() => { setModalVisible(!modalVisible); setmodalVisibleConfirm(true) }}>
								<LAppForgetModalText style={{ marginTop: 6 }}>
									OK
								</LAppForgetModalText>
							</LAppForgetModalOk>

						</LAppForgetModalView>
				</LAppForgetModalContainer>
			</Modal>

			{/*/MODAL para requisitar codigo*/}
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisibleConfirm}
				onRequestClose={() => {
					setModalVisible(!modalVisibleConfirm);
				}}
			>
				<TouchableOpacity opacity={0.5} style={{position:'absolute', width:'100%', height:'100%', backgroundColor:'#00000099'}} onPress={() => { setmodalVisibleConfirm(!modalVisibleConfirm) }}/>
				<LAppForgetModalContainer>
						<LAppForgetModalView >
							<LAppForgetModalCloseButton onPress={() => { setmodalVisibleConfirm(!modalVisibleConfirm) }}>
								<LAppForgetModalText style={{ marginTop: 2 }}>
									X
								</LAppForgetModalText>
							</LAppForgetModalCloseButton>

							<LAppForgetModalText style={{ color: "#000000" }}>
								Digite o código que enviamos ao seu email:
							</LAppForgetModalText>

							<LAppViewInput>
								<LAppInput style={{ marginHorizontal: 16, }} />
							</LAppViewInput>

							<LAppForgetModalOk>
								<LAppForgetModalText style={{ marginTop: 6 }}>
									OK
								</LAppForgetModalText>
							</LAppForgetModalOk>

						</LAppForgetModalView>
				</LAppForgetModalContainer>
			</Modal>

			<LAppHeader>
				<LAppLogo />
			</LAppHeader>
			<View>
				<View style={{ marginBottom: 0, marginLeft: 20, marginRight: 20, marginTop: 20 }}>
					<LAppText style={{ marginBottom: 5 }}>
						Email:
					</LAppText>
					<LAppViewInput>
						<LAppInput onChangeText={(req)=>{SetEmail(req)}}/>
					</LAppViewInput>

					<LAppText style={{ marginBottom: 5 }}>
						Senha:
					</LAppText>
					<LAppViewInput>
						<LAppInput onChangeText={(req)=>{SetSenha(req);}} style={{ marginHorizontal: 16, }} />
					</LAppViewInput>
				</View>

				<LAppForgetPasswordButton>
					<LAppTextSign onPress={() => setModalVisible(true)}>
						Esqueci minha senha
					</LAppTextSign>
				</LAppForgetPasswordButton>


				<LAppLoginButton onPress={()=>Logar()}>
					<LAppText style={{ color: '#FFFFFF', }}>
						ENTRAR
					</LAppText>
				</LAppLoginButton>

				<View style={{ alignSelf: "center", flexDirection: 'row', alignItems: "center", alignContent: "space-between" }}>
					<LAppLine1 />
					<LAppText> entrar com</LAppText>
					<LAppLine2 />
				</View>

				<View style={{ marginLeft: 20, marginRight: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
					<LAppSocialButtonGoogle>
						<LAppText>
							Google
						</LAppText>
					</LAppSocialButtonGoogle>

					<LAppSocialButtonFacebook>
						<LAppText style={{ color: '#FFFFFF', }}>
							Facebook
						</LAppText>
					</LAppSocialButtonFacebook>
				</View>

				<View style={{ marginTop: 45, flexDirection: 'row', alignSelf: "center", alignContent: "space-between" }}>
					<LAppText>
						Não tem uma conta?
					</LAppText>
					<LAppSign>
						<LAppTextSign onPress={() => navigation.navigate('RegistrarUsuario')}>
							Cadastre-se
						</LAppTextSign>
					</LAppSign>

				</View>
			</View>
		</LAppContainer>
	)
}
