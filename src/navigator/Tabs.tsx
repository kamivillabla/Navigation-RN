/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import React from 'react';
import {Tabs1Screen} from '../screens/Tabs1Screen';
import {Text, Platform} from 'react-native';
import {colors} from '../theme/themeScreen';
import {StackNavigator} from './StackNavigator';
import {TopTabNavigator} from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomTabAndroid = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIos /> : <TabsAndroid />;
};

const BottomTabIOS = createBottomTabNavigator();

const TabsAndroid = () => (
  <BottomTabAndroid.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: () => {
        let iconName: string = '';
        switch (route.name) {
          case 'Tabs1Screen':
            iconName = 'chatbubbles-outline';
            break;
          case 'Tabs2Screen':
            iconName = 'heart-half-outline';
            break;
          case 'Tabs3Screen':
            iconName = 'game-controller-outline';
            break;
        }
        return <Icon name={iconName} size={20} color={'#EAAFF4'} />;
      },
      tabBarStyle: {
        borderTopColor: colors.primary,
        borderTopWidth: 0,
        elevation: 0,
      },
      tabBarLabelStyle: {
        fontSize: 16,
      },
    })}
    sceneAnimationEnabled={true}
    barStyle={{
      backgroundColor: colors.primary,
    }}>
    <BottomTabAndroid.Screen
      name="Tabs1Screen"
      options={{
        title: 'tab1',
      }}
      component={Tabs1Screen}
    />
    <BottomTabAndroid.Screen
      name="Tabs2Screen"
      options={{title: 'tab2'}}
      component={TopTabNavigator}
    />
    <BottomTabAndroid.Screen
      name="Tabs3Screen"
      options={{title: 'tab3'}}
      component={StackNavigator}
    />
  </BottomTabAndroid.Navigator>
);

const TabsIos = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tabs1Screen':
              iconName = 'T1';
              break;
            case 'Tabs2Screen':
              iconName = 'T2';
              break;
            case 'Tabs3Screen':
              iconName = 'T3';
              break;
          }
          return <Text> {iconName}</Text>;
        },
        // tabBarActiveBackgroundColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 16,
        },
      })}>
      <BottomTabIOS.Screen
        name="Tabs1Screen"
        options={{
          title: 'tab1',
        }}
        component={Tabs1Screen}
      />
      <BottomTabIOS.Screen
        name="Tabs2Screen"
        options={{title: 'tab2'}}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="Tabs3Screen"
        options={{title: 'tab3'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
