import React from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/modules/Login/actions";
import SignButton from "../../components/SignButton";

export default function Home() {
  
  const dispatch = useDispatch()
  const SignOutSubmit = () =>{
    dispatch(signOut())
  }
  
  return (
    <View>
      <Text>accessToken = {useSelector(state=>state.loginReducer.token)}</Text>
      <SignButton 
        buttonText = "SignOut" 
        onPress={SignOutSubmit} 
      />
    </View>
  );
}

