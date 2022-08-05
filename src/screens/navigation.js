import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Home from './Home';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  const token =useSelector(state=>state.loginReducer.token)
  
  return (
  <Stack.Navigator 
    screenOptions={{headerShown: false}
  }>
    {token === null?
      <Stack.Screen name="Login" component={Login} />
      :<Stack.Screen name="Home" component={Home} />
    }
  </Stack.Navigator>
  );
}
