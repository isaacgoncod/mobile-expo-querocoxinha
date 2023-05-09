import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './source/screens/login';
import Produtos from './source/screens/produtos';
import Pedidos from './source/screens/pedidos';
import Detalhes from './source/screens/detalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Tela de Login' }} />
        <Stack.Screen
          name="Pedidos"
          component={Pedidos}
          options={{ title: 'Acompanhe ou faça seu Pedido' }}
        />
        <Stack.Screen
          name="Produtos"
          component={Produtos}
          options={{ title: 'Escolha seu produto' }}
        />        
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{ title: 'Escolha seu produto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}