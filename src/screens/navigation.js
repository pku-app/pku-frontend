import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
import ProductRegistration from './ProductRegistration';

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
     <Stack.Screen name="SignUp" component={SignUp} />
     <Stack.Screen name="Home" component={Home} />
     <Stack.Screen name="ProductRegistration" component={ProductRegistration} />
  </Stack.Navigator>
  );
}
