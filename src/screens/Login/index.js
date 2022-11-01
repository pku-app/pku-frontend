import React, { useState } from "react";
import { View, Image } from "react-native";
import { Link } from "@react-navigation/native";
import { Style }  from './styles';

import { useDispatch, useSelector} from 'react-redux';
import { signIn } from "../../store/modules/Login/actions";
import { Input, Icon, Stack, Text, Box, Button, Container} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useDispatch()
  const sigInSubmit = () =>{
    dispatch(signIn(email, password))
  }

  const message = useSelector(state=>state.loginReducer.message)
  const loading = useSelector(state=>state.loginReducer.loading)

  return (<View>
    <View style={Style.header}>
      <Image source={require('../../../assets/logo.png')} style={Style.logo}/>
    </View>
    <Stack marginY={4} marginX={8} space={4} alignItems="center">
      <Input
        borderColor={message?"red.900":null}
        value={email}
        onChangeText={(Text)=>setEmail(Text)}
        InputLeftElement={
          <Icon as={<MaterialIcons name="email" />} 
          size={5} ml="2" color="muted.500" />}
        w={{ base: "100%", md: "25%" }}
        placeholder="Email"
        title="Email"
      />
      <Input w={{ base: "100%", md: "25%" }}
        borderColor={message?"red.900":null}
        value={password}
        onChangeText={(Text)=>setPassword(Text)}
        type={showPassword ? "text" : "password"} 
        InputRightElement={
          <Icon as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />} 
          size={5} mr="2" color="muted.400" 
          onPress={() => setShowPassword(!showPassword)} />} 
        placeholder="Password"
      />
      <Button 
        isLoading={loading?true:false}
        onPress={() => sigInSubmit() }
        w={{base: "100%", md: "25%" }}
        borderRadius={50}
        h={50}
      >
        Login
      </Button>
      {message?
      <Container 
        backgroundColor="error.200" 
        padding={4}
        borderRadius={50}
        w={"100%"}
        alignItems="center"
      >
        <Text color="red.900" > {message} </Text>
      </Container>
      :null}

    </Stack>
    <Box alignItems="center">
      <Text>
        Não tem uma conta?
      </Text>
      <Link to={{screen: "SignUp"}} style={Style.link} >
        Cadastre-se
      </Link>
      
      <Link to={{screen: "ProductRegistration"}} style={Style.link} >
        Testando ProductRegistration
      </Link>
    </Box>
  </View>
  );
}

