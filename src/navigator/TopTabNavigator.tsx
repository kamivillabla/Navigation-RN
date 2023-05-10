/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactScreen} from '../screens/ContactScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../theme/themeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top: paddingTop} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop}}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'chatbubbles-outline';
              break;
            case 'Contacts':
              iconName = 'chatbubbles-outline';
              break;
            case 'Albums':
              iconName = 'chatbubbles-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={'#EAAFF4'} />;
        },
        tabBarPressColor: '#F5E3F9',
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          shadowColor: 'transparent',
          elevation: 0,
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
