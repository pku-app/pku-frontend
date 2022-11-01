import React, { useState } from "react"
import { Button, Input, Icon, Stack, Container } from 'native-base';
import { View, Image, ScrollView, Text } from 'react-native'

import { useDispatch, useSelector} from 'react-redux';
import { registerProduct } from "../../store/modules/ProductRegistration/actions";

import Footer from "../../components/Footer/footer";

import { Style } from './styles'
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProductRegistration() {
    const [produto, setProduto] = useState('');
    const [marca, setMarca] = useState('');
    const [fenilalanina, setFenilalanina] = useState('');

    const dispatch = useDispatch();
    const registerSubmit = () => {
        dispatch(registerProduct(produto, marca, fenilalanina))
    }

    const message = useSelector(state=>state.productRegReducer.message)

    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <View style={Style.header}>
                    <Image source={require('../../../assets/logo.png')} style={Style.logo}/>
                </View>
                {message?
                    <Container
                        backgroundColor="error.200" 
                        padding={4}
                        borderRadius={50}
                        w={"100%"}
                        alignItems="center"
                        style={Style.errMessage}
                    >
                        <Text color="red.900" > {message} </Text>
                    </Container>
                :null}
                <Stack marginY={4} marginX={8} space={4} alignItems="center">
                    <Input
                        InputLeftElement={<Icon as={<MaterialIcons name="shopping-basket" />} size={5} ml="2" color="muted.500" />}
                        onChangeText={(Text)=>setProduto(Text)}
                        value={produto}
                        w={{ base: "100%", md: "25%" }}
                        placeholder="Produto"
                        title="Produto"
                    />
                    <Input
                        onChangeText={(Text)=>setMarca(Text)}
                        value={marca}
                        w={{ base: "100%", md: "25%" }}
                        placeholder="Marca"
                        title="Marca"
                    />
                    <Input
                        InputLeftElement={<Icon as={<MaterialCommunityIcons name="dna" />} size={5} ml="2" color="muted.500" />}
                        onChangeText={(Text)=>setFenilalanina(Text)}
                        value={fenilalanina}
                        w={{ base: "100%", md: "25%" }}
                        keyboardType="numeric"
                        placeholder="Qtde. de fenilalanina(100g)"
                        title="Fenilalanina"
                    />
                    <Button onPress={registerSubmit} style={Style.btn}>Cadastrar</Button>
                </Stack>
            </ScrollView>
            <Footer />
        </View>
    );
};