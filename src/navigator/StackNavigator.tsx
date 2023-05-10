import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Pagina1screen} from '../screens/Pagina1screen';
import {Pagina2screen} from '../screens/Pagina2screen';
import {Pagina3screen} from '../screens/Pagina3screen';
import {PersonaScreen} from '../screens/PersonaScreen';

// undefind para saber que no estamos recibiendo nada
export type RootStackParams = {
  Pagina1screen: undefined;
  Pagina2screen: undefined;
  Pagina3screen: undefined;
  PersonaScreen: {id: number; name: string; age?: number};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    // nombre donde se inicializa la pagina
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}
      initialRouteName="Pagina1screen">
      <Stack.Screen
        name="Pagina1screen"
        options={{title: 'Página 1'}}
        component={Pagina1screen}
      />
      <Stack.Screen
        name="Pagina2screen"
        options={{title: 'Página 2'}}
        component={Pagina2screen}
      />
      <Stack.Screen
        name="Pagina3screen"
        options={{title: 'Página 3'}}
        component={Pagina3screen}
      />
      <Stack.Screen
        name="PersonaScreen"
        options={{title: 'PersonaScreen'}}
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};
