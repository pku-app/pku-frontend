import React from "react";
import { Text, TextInput, StyleSheet} from "react-native";
import { COLORS } from '../ColorPallete'

export default function SignInput({value, setValue, placeholder, inputTitle, secureTextEntry=false, backgroundColor = COLORS.trueWhite}){
  return (<>
      <Text style={Style.textInput}>
        { inputTitle ? inputTitle + ':' : null }
      </Text>
      <TextInput 
      style={Style.viewInput}
      onChangeText={(Text)=>setValue(Text)}
      backgroundColor={backgroundColor}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry} 
      />
    </>
  );
}

const Style = StyleSheet.create({
  textInput: {
    fontSize: 16,
    marginBottom: 0,
    marginLeft: 16,
  },
  viewInput: {
    height: 50,
    marginBottom: 20,
    borderRadius: 50,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.black,
    paddingHorizontal: 16,
  },
})