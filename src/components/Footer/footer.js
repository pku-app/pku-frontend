import { Icon } from 'native-base';
import { View, TouchableOpacity, Text } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { useLinkProps } from "@react-navigation/native";

import { Style } from './styles'

const LinkButton = ({ to, action, ...rest }) => {
    const { onPress, ...props } = useLinkProps({ to, action });

    return (
        <TouchableOpacity onPress={onPress} {...props} {...rest}></TouchableOpacity>
    );
}

export default function Footer(){
    return (
        <View style={Style.footer}>
            <LinkButton style={Style.footerBtn} to={{ screen: "Home" }}>
                <Icon as={<Entypo name="home" />}></Icon>
                <Text>Home</Text>
            </LinkButton>
            <LinkButton style={Style.footerBtn} to={{ screen: "Consume" }}>
                <Icon as={<MaterialCommunityIcons name="silverware-fork-knife" />}></Icon>
                <Text>Consumo</Text>
            </LinkButton>
            <LinkButton style={Style.footerBtn} to={{ screen: "ProductRegistration" }}>
                <Icon as={<Entypo name="shopping-basket" />}></Icon>
                <Text>Cadastro</Text>
            </LinkButton>
            <LinkButton style={Style.footerBtn} to={{ screen: "Historic" }}>
                <Icon as={<Entypo name="clock" />}></Icon>
                <Text>Histórico</Text>
            </LinkButton>
        </View>
    );
}