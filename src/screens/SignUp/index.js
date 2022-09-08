import React, {useState} from "react";
import { Text, TextInput, View, Button } from "react-native";
import { Input, Icon, Stack, Center, Radio } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import { signUpFormReducer, pageSignInfo, pageHealthInfo} from '../../store/modules/SignUp/Form/reducer'
export default function SignUp() {
  const page = useSelector(state=>state.signUpFormReducer.formPage)
  const dispatch = useDispatch()
  const [tempValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    type: '',
    health_info: {
        birthdate: '',
        height: '',
        weight: '',
    }
  })
  const FormTitles = ["Sign Up", "Health Info"]

  const SignInfo = () => {
    return <View>
      <Stack space={4} w="100%" alignItems="center">

        <Input
          value={formData.name}
          onChangeText={(Text)=>setFormData({...formData, name: Text})}
          InputLeftElement={
            <Icon as={<MaterialIcons name="person" />} 
            size={5} ml="2" color="muted.500" />}
          w={{ base: "75%", md: "25%" }}
          placeholder="Name" 
        />

        <Input
          value={formData.email}
          onChangeText={(Text)=>setFormData({...formData, email: Text})}
          InputLeftElement={
            <Icon as={<MaterialIcons name="email" />} 
            size={5} ml="2" color="muted.500" />}
          w={{ base: "75%", md: "25%" }}
          placeholder="Name" 
        />

        <Input w={{ base: "75%", md: "25%" }}
          value={formData.password}
          onChangeText={(Text)=>setFormData({...formData, password: Text})}
          type={showPassword ? "text" : "password"} 
          InputRightElement={
            <Icon as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />} 
            size={5} mr="2" color="muted.400" 
            onPress={() => setShowPassword(!showPassword)} />} 
          placeholder="Password"
        />

        <Input w={{ base: "75%", md: "25%" }}
          value={formData.confirmPassword}
          onChangeText={(Text)=>setFormData({...formData, confirmPassword: Text})}
          type={showConfirmPassword ? "text" : "password"} 
          InputRightElement={
            <Icon as={<MaterialIcons name={showConfirmPassword ? "visibility" : "visibility-off"} />} 
            size={5} mr="2" color="muted.400" 
            onPress={() => setShowConfirmPassword(!showConfirmPassword)} />} 
          placeholder="Confirm Password"
        />

        <Radio.Group  
          name="exampleGroup" 
          defaultValue={formData.type} 
          onChange={value => {setFormData({...formData, type: value})}} 
          accessibilityLabel="Chose a type" >
          <Stack 
            direction={{ base: "row" }} 
            alignItems={{ base: "flex-start",md: "center" }} 
            space={5} >
            <Radio value="portador" size="sm" >Portador</Radio>
            <Radio value="responsável" size="sm" >Responsável</Radio>
          </Stack>
        </Radio.Group>
      </Stack>
   </View>
  }

  const HealthInfo = () => {
    return <View>   
   <TextInput
      placeholder="birthdate..."
      value={formData.health_info.birthdate}
      onChangeText={(Text)=>setFormData({...formData, health_info:{...formData.health_info, birthdate: Text}})}
    />
    <TextInput
      placeholder="height..."
      value={formData.health_info.height}
      onChangeText={(Text)=>setFormData({...formData, health_info:{...formData.health_info, height: Text}})}
    />
    <TextInput
      placeholder="weight..."
      value={formData.health_info.weight}
      onChangeText={(Text)=>setFormData({...formData, health_info:{...formData.health_info, weight: Text}})}
    />
  </View>;
  }

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <SignInfo />
      case 1:
        return <HealthInfo />
    }
  }
  return(
  <View>
    <Text> {FormTitles[page]} </Text>
    <View>{page===0?<SignInfo />:<HealthInfo />}</View>
    <Button
      onPress={() => {
        if (page === 1) {
          dispatch(pageSignInfo());
        }
      }}
      title="Prev"
    />
    <Button
      onPress={() => {
        if (page === FormTitles.length - 1) {
          alert("FORM SUBMITTED");
        } else {
          dispatch(pageHealthInfo());
        }
      }}
      title={page === FormTitles.length - 1 ? "Submit" : "Next"}
    />
  </View>
  );
}    
