import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/Login';

import RecuperarSenhaScreen from './screens/RecuperarSenha';

import RegistrarUsuario from './screens/RegistrarUsuario';
import RegistrarNomeScreen from './screens/RegistrarUsuario/RegistrarNome';
import RegistrarSenhaScreen from './screens/RegistrarUsuario/RegistrarSenha';
import RegistrarTelefone from './screens/RegistrarUsuario/RegistrarTelefone';
import RegistrarEmail from './screens/RegistrarUsuario/RegistrarEmail';
import RegistrarCpf from './screens/RegistrarUsuario/RegistrarCpf';
import RegistrarIdade from './screens/RegistrarUsuario/RegistrarIdade';
import RegistrarPeso from './screens/RegistrarUsuario/RegistrarPeso';
import RegistrarPhe from './screens/RegistrarUsuario/RegistrarPhe';
import RegistrarSenhaRepetir from './screens/RegistrarUsuario/RegistrarSenhaRepetir';

import HomeScreen from './screens/Home';
import CadastrarProdutoScreen from './screens/CadastrarProduto';
import HistoricoScreen from './screens/Historico';
import InfoAppScreen from './screens/InfoApp';

//Esta parte funciona como uma pilha

const Stack = createStackNavigator();

function RootNavigation() {
  return (
      <Stack.Navigator headerMode = "none"> 
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenhaScreen} />

        <Stack.Screen name="RegistrarUsuario" component={RegistrarUsuario} />
        <Stack.Screen name="RegistrarNome" component={RegistrarNomeScreen} />
        <Stack.Screen name="RegistrarSenha" component={RegistrarSenhaScreen} />
        <Stack.Screen name="RegistrarTelefone" component={RegistrarTelefone} />
        <Stack.Screen name="RegistrarEmail" component={RegistrarEmail} />
        <Stack.Screen name="RegistrarCpf" component={RegistrarCpf} />
        <Stack.Screen name="RegistrarIdade" component={RegistrarIdade} />
        <Stack.Screen name="RegistrarPeso" component={RegistrarPeso} />
        <Stack.Screen name="RegistrarPhe" component={RegistrarPhe} />
        <Stack.Screen name="RegistrarSenhaRepetir" component={RegistrarSenhaRepetir} />

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CadastrarProduto" component={CadastrarProdutoScreen} />
        <Stack.Screen name="Historico" component={HistoricoScreen} />
        <Stack.Screen name="InfoApp" component={InfoAppScreen} />
      </Stack.Navigator>
  );
}

export default RootNavigation;