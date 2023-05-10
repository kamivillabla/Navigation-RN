import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  const {width} = useWindowDimensions();

  const isLargeScreen = width >= 768;

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: isLargeScreen ? 'permanent' : 'back',
        drawerStyle: isLargeScreen ? null : {width: '100%'},
        overlayColor: 'transparent',
      }}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Setting'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
