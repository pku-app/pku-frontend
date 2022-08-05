import React, { useState } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { Link } from "@react-navigation/native";
import { Style }  from './styles';
import SignButton from '../../components/SignButton'
import SignInput from "../../components/SignInput";
import { useDispatch } from 'react-redux';
import { signIn } from "../../store/modules/Login/actions";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const sigInSubmit = () =>{
    dispatch(signIn(email, password))
  }
  return (
    <ScrollView style={Style.container}>
			<View style={Style.header}>
        <Image source={require('../../../assets/logo.png')} style={Style.logo}/>
			</View>
      <View style={Style.content}>

        <SignInput 
          inputTitle="Email" 
          placeholder="Email"
          value={email}
          setValue={setEmail} 
        />
        <SignInput 
          inputTitle="Senha" 
          placeholder="Senha" 
          value={password} 
          setValue={setPassword}
          secureTextEntry={true}
        />
        <SignButton 
          buttonText = "Login" 
          onPress={sigInSubmit} 
        />
      </View>

      <View style={Style.viewSignUp}>
        <Text>
          Não tem uma conta?
        </Text>
        <Link to={'/'} style={Style.link} >
          Cadastre-se
        </Link>
      </View>
		</ScrollView>
  );
}

