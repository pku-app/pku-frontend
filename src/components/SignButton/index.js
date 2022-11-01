import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { COLORS } from '../ColorPallete'

export default function SignButton({buttonText = "", backgroundColor = COLORS.paletteBlue, textColor = '#fff', onPress = null }){
  return(
    <TouchableOpacity  
      style={ Object.assign({backgroundColor: backgroundColor}, Style.loginButton) } 
      onPress= {onPress?()=> onPress():null}
    >
      <Text style={{color: textColor}}> { buttonText } </Text>
    </TouchableOpacity>
  );
}

const Style = StyleSheet.create({
  loginButton: {
    marginTop: 16,
    marginBottom: 16,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent:  'center',
    alignSelf: 'center',
    borderRadius: 50,
    width: '100%',
    height: 50,
  }
});
